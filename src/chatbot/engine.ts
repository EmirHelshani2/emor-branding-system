// ─── EMOR Chatbot Engine ───────────────────────────────────────────────────
// Core response engine with improved contact flow, buying intent detection,
// smarter recommendations, and direct email/phone contact actions.

import {
  EMOR,
  PACKAGES,
  SERVICE_EXPLANATIONS,
  BENEFITS,
  FAQS,
  GREETINGS,
  FALLBACKS,
  type Package,
} from "./knowledge";
import {
  detectIntent,
  detectServiceCategory,
  detectPackageTier,
  type IntentType,
  type ServiceCategory,
} from "./intents";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface ContactAction {
  label: string;
  href: string;
  icon: "mail" | "phone";
}

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  quickReplies?: string[];
  contactActions?: ContactAction[];
  isLeadForm?: boolean;
}

export interface LeadData {
  name?: string;
  business?: string;
  service?: string;
  contact?: string;
  message?: string;
}

export interface ConversationState {
  leadCapture: boolean;
  leadStep: number;
  leadData: LeadData;
  lastIntent: IntentType;
  lastCategory: ServiceCategory;
}

export function createInitialState(): ConversationState {
  return {
    leadCapture: false,
    leadStep: 0,
    leadData: {},
    lastIntent: "unknown",
    lastCategory: null,
  };
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatPrice(pkg: Package): string {
  const parts: string[] = [];
  if (pkg.firstMonth != null) parts.push(`Muaji i parë: €${pkg.firstMonth}`);
  if (pkg.oneTime != null) parts.push(`Një herë: €${pkg.oneTime}`);
  if (pkg.monthly != null) parts.push(`Mujore: €${pkg.monthly}/muaj`);
  if (pkg.maintenance != null) parts.push(`Mirëmbajtje: €${pkg.maintenance}/muaj`);
  return parts.join(" · ");
}

function formatPackage(pkg: Package): string {
  let text = `**${pkg.name}**${pkg.popular ? " ⭐" : ""}\n`;
  text += formatPrice(pkg) + "\n";
  if (pkg.platforms) text += `Platforma: ${pkg.platforms}\n`;
  text += pkg.features.map((f) => `• ${f}`).join("\n");
  text += `\n\n_${pkg.bestFor}_`;
  return text;
}

function formatPackageList(pkgs: Package[]): string {
  return pkgs.map(formatPackage).join("\n\n---\n\n");
}

function getPackagesByCategory(cat: "social" | "website" | "chatbot" | "combo"): Package[] {
  return PACKAGES.filter((p) => p.category === cat);
}

// ─── Contact Actions Builder ───────────────────────────────────────────────

function buildContactActions(leadData?: LeadData): ContactAction[] {
  const subject = leadData?.service
    ? encodeURIComponent(`EMOR Kërkesë e Re — ${leadData.service}`)
    : encodeURIComponent("EMOR Kërkesë për Paketë");

  let bodyParts = "";
  if (leadData && (leadData.name || leadData.business)) {
    bodyParts =
      `Emri: ${leadData.name || "—"}\n` +
      `Biznesi: ${leadData.business || "—"}\n` +
      `Shërbimi: ${leadData.service || "—"}\n` +
      `Kontakti: ${leadData.contact || "—"}\n` +
      (leadData.message ? `Mesazhi: ${leadData.message}\n` : "") +
      `\nDërguar përmes chatbot-it të website-it EMOR`;
  } else {
    bodyParts = "Përshëndetje EMOR,\n\nJam i/e interesuar për shërbimet tuaja.\n\n";
  }

  const body = encodeURIComponent(bodyParts);
  const mailto = `mailto:${EMOR.email}?subject=${subject}&body=${body}`;
  const tel = `tel:${EMOR.phones[0].replace(/\s/g, "")}`;

  return [
    { label: "📧 Dërgo Email", href: mailto, icon: "mail" as const },
    { label: "📞 Telefono", href: tel, icon: "phone" as const },
  ];
}

// ─── Recommendation Logic ──────────────────────────────────────────────────

function recommendForBeginner(): string {
  const basic = PACKAGES.find((p) => p.id === "social-basic")!;
  const simple = PACKAGES.find((p) => p.id === "website-simple")!;
  const combo = PACKAGES.find((p) => p.id === "combo-social-simple")!;

  return `Për fillestarë, do t'ju rekomandoja të filloni me njërën nga këto:\n\n` +
    `**Opsioni 1 — Social Media Basic**\n${formatPrice(basic)}\nShtëllueshme nëse ju nevojitet vetëm ndihmë me Instagram & Facebook.\n\n` +
    `**Opsioni 2 — Website e Thjeshtë**\n${formatPrice(simple)}\nPerfekte nëse ju nevojitet website e shpejtë.\n\n` +
    `**Opsioni 3 — Combo: Social Media + Website e Thjeshtë** ⭐\n${formatPrice(combo)}\nVlera më e mirë për fillestarë — merrni të dyja me çmim të mirë!`;
}

function recommendForSmallBusiness(): string {
  const standard = PACKAGES.find((p) => p.id === "social-standard")!;
  const combo = PACKAGES.find((p) => p.id === "combo-full")!;

  return `Për biznese të vogla që duan të rriten, rekomandoj:\n\n` +
    `**Social Media Standard** ⭐\n${formatPrice(standard)}\nPërfshin rregullim profili, 4 postime/javë, video animacione dhe më shumë.\n\n` +
    `**Ose merrni paketën e plotë:**\nSocial Media + Website Custom + AI Chatbot\n${formatPrice(combo)}\nPaketa e plotë digjitale — zgjedhja më e popullarizuar!`;
}

function recommendByCategory(cat: ServiceCategory): string {
  if (cat === "social") {
    return `Ja të gjitha paketat tona të rrjeteve sociale:\n\n${formatPackageList(getPackagesByCategory("social"))}\n\nPaketa **Standard** është zgjedhja më e popullarizuar për bizneset në rritje.`;
  }
  if (cat === "website") {
    return `Ja paketat tona të website-it:\n\n${formatPackageList(getPackagesByCategory("website"))}\n\nJu nevojitet diçka e shpejtë? Zgjidhni Landing Page. Dëshironi kontroll të plotë? Zgjidhni Website Custom.`;
  }
  if (cat === "chatbot") {
    return `Ja paketat tona të chatbot AI:\n\n${formatPackageList(getPackagesByCategory("chatbot"))}\n\nNëse dëshironi mbulim të plotë, opsioni **Të Gjitha Platformat + Website** është vlera më e mirë.`;
  }
  if (cat === "combo") {
    return `Ja ofertat tona combo — vlera më e mirë:\n\n${formatPackageList(getPackagesByCategory("combo"))}\n\nOfertat combo ju kursejnë para duke bashkuar shërbimet!`;
  }
  return "";
}

// ─── Compare Logic ─────────────────────────────────────────────────────────

function compareSocialPackages(): string {
  const [basic, standard, premium] = getPackagesByCategory("social");
  return `**Krahasimi i Paketave Social Media:**\n\n` +
    `| | Basic | Standard ⭐ | Premium (Reklama) |\n` +
    `|---|---|---|---|\n` +
    `| Muaji i parë | €${basic.firstMonth} | €${standard.firstMonth} | €${premium.firstMonth} |\n` +
    `| Mujore | €${basic.monthly}/muaj | €${standard.monthly}/muaj | €${premium.monthly}/muaj |\n` +
    `| Postime/javë | 3 | 4 | 5 |\n` +
    `| Stories | 3/javë | 4/javë | Çdo ditë |\n` +
    `| Rregullim profili | ✗ | ✓ | ✓ |\n` +
    `| Video animacione | ✗ | 2 | 5 |\n` +
    `| Reklama | Udhëzim | Udhëzim | Reklama të plota |\n` +
    `| Përgjigje DM | ✗ | ✗ | ✓ |\n` +
    `| Platforma | IG + FB | IG + FB | IG + FB + TikTok |\n\n` +
    `Paketa **Standard** është zgjedhja ideale për shumicën e bizneseve.`;
}

function compareWebsitePackages(): string {
  const [simple, custom] = getPackagesByCategory("website");
  return `**Krahasimi i Paketave Website:**\n\n` +
    `| | Website e Thjeshtë | Website Custom ⭐ |\n` +
    `|---|---|---|\n` +
    `| Një herë | €${simple.oneTime} | €${custom.oneTime} |\n` +
    `| Mirëmbajtje | €${simple.maintenance}/muaj | €${custom.maintenance}/muaj |\n` +
    `| Faqe | 1 faqe | Disa faqe |\n` +
    `| Panel admin | ✗ | ✓ |\n` +
    `| Databazë | ✗ | ✓ |\n` +
    `| Dizajn | Bazik | Plotësisht custom |\n\n` +
    `Ju nevojitet prani e shpejtë online? Zgjidhni **e Thjeshtë**. Dëshironi kontroll të plotë? Zgjidhni **Custom**.`;
}

// ─── Lead Capture ──────────────────────────────────────────────────────────

const LEAD_PROMPTS = [
  "Shkëlqyeshëm! Le t'ju lidhim me EMOR-in. Si është **emri** juaj?",
  "Faleminderit! Si quhet **biznesi** juaj?",
  "Cilin **shërbim ose paketë** dëshironi? (Rrjete sociale, website, chatbot, combo ose diçka tjetër)",
  "Si mund t'ju kontaktojë EMOR? Ndani **email-in ose numrin e telefonit** tuaj.",
  "A keni **detaje shtesë** për çfarë ju nevojitet? (Ose shkruani 'skip' për të përfunduar)",
];

interface LeadStepResult {
  text: string;
  quickReplies?: string[];
  contactActions?: ContactAction[];
  done: boolean;
}

function handleLeadStep(state: ConversationState, input: string): LeadStepResult {
  const step = state.leadStep;

  if (step === 0) {
    state.leadData.name = input.trim();
    state.leadStep = 1;
    return { text: LEAD_PROMPTS[1], done: false };
  }
  if (step === 1) {
    state.leadData.business = input.trim();
    state.leadStep = 2;
    return {
      text: LEAD_PROMPTS[2],
      quickReplies: ["Rrjete Sociale", "Website", "AI Chatbot", "Ofertë Combo", "Kërkesë Tjetër"],
      done: false,
    };
  }
  if (step === 2) {
    state.leadData.service = input.trim();
    state.leadStep = 3;
    return { text: LEAD_PROMPTS[3], done: false };
  }
  if (step === 3) {
    state.leadData.contact = input.trim();
    state.leadStep = 4;
    return { text: LEAD_PROMPTS[4], done: false };
  }
  if (step === 4) {
    state.leadData.message = input.trim().toLowerCase() === "skip" ? "" : input.trim();
    state.leadCapture = false;
    state.leadStep = 0;
    return {
      text: buildLeadSummary(state.leadData),
      contactActions: buildContactActions(state.leadData),
      done: true,
    };
  }

  return { text: "Diçka shkoi keq. Më lejoni ta rifilloj kërkesën.", done: true };
}

function buildLeadSummary(data: LeadData): string {
  return `Ja përmbledhja e kërkesës suaj:\n\n` +
    `**Emri:** ${data.name}\n` +
    `**Biznesi:** ${data.business}\n` +
    `**Shërbimi:** ${data.service}\n` +
    `**Kontakti:** ${data.contact}\n` +
    (data.message ? `**Detaje:** ${data.message}\n\n` : "\n") +
    `Zgjidhni një mënyrë kontakti më poshtë për të dërguar kërkesën tuaj:`;
}

// ─── Response type ─────────────────────────────────────────────────────────

interface BotResponse {
  text: string;
  quickReplies?: string[];
  contactActions?: ContactAction[];
  state: ConversationState;
}

// ─── Main Response Generator ───────────────────────────────────────────────

export function generateResponse(input: string, state: ConversationState): BotResponse {
  // ── Lead capture flow ──
  if (state.leadCapture) {
    const result = handleLeadStep(state, input);
    return {
      text: result.text,
      quickReplies: result.done
        ? ["Çka bën EMOR?", "Shiko Paketat", "Më Ndihmo të Zgjedh"]
        : result.quickReplies,
      contactActions: result.contactActions,
      state,
    };
  }

  const intent = detectIntent(input);
  const category = detectServiceCategory(input);
  const tier = detectPackageTier(input);

  state.lastIntent = intent;
  state.lastCategory = category;

  // ── Greeting ──
  if (intent === "greeting") {
    return {
      text: pick(GREETINGS),
      quickReplies: ["Çka bën EMOR?", "Paketat Social Media", "Paketat Website", "Paketat AI Chatbot", "Oferta Combo", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  // ── Thanks ──
  if (intent === "thanks") {
    return {
      text: "S'ka përse! 😊 Më tregoni nëse keni pyetje të tjera për shërbimet e EMOR-it.",
      quickReplies: ["Shiko Paketat", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  // ── Bye ──
  if (intent === "bye") {
    return {
      text: "Faleminderit që biseduat me EMOR-in! 👋 Nëse keni nevojë për diçka në të ardhmen, jam gjithmonë këtu. Suksese me biznesin tuaj!",
      state,
    };
  }

  // ── About EMOR ──
  if (intent === "about-emor") {
    const faq = FAQS.find((f) => f.question === "Çka bën EMOR?");
    return {
      text: faq?.answer ?? EMOR.purpose.join(". "),
      quickReplies: ["Paketat Social Media", "Paketat Website", "Paketat AI Chatbot", "Oferta Combo", "Pse të zgjedhni EMOR?"],
      state,
    };
  }

  // ── Buying intent → direct contact ──
  if (intent === "buying") {
    return {
      text: "Shumë mirë! 🎉 Mund të kontaktoni EMOR-in menjëherë përmes email-it ose telefonit.\n\nZgjidhni një mënyrë kontakti më poshtë:",
      contactActions: buildContactActions(),
      quickReplies: ["Dua të Jap Detaje", "Shiko Paketat", "Më Ndihmo të Zgjedh"],
      state,
    };
  }

  // ── Only Instagram ──
  if (intent === "only-instagram") {
    const basic = PACKAGES.find((p) => p.id === "social-basic")!;
    return {
      text: `Nëse ju nevojitet vetëm ndihmë me Instagram, paketa **Social Media Basic** është perfekte:\n\n${formatPackage(basic)}\n\nInstagram dhe Facebook menaxhohen së bashku në këtë paketë. Dëshironi të filloni?`,
      quickReplies: ["Kontakto EMOR", "Krahaso Planet Social Media", "Më Ndihmo të Zgjedh"],
      state,
    };
  }

  // ── Professional look ──
  if (intent === "professional") {
    return {
      text: BENEFITS["why-branding"] + "\n\nEMOR mund t'ju ndihmojë të dukeni më profesional me:\n\n• **Rrjete sociale** — profil i pastër, postime cilësore, branding konsistent\n• **Website** — faqja juaj profesionale online\n• **AI Chatbot** — përgjigje profesionale 24/7\n\nCila ju intereson më shumë?",
      quickReplies: ["Paketat Social Media", "Paketat Website", "Oferta Combo", "Kontakto EMOR"],
      state,
    };
  }

  // ── Simple need ──
  if (intent === "simple-need") {
    const simple = PACKAGES.find((p) => p.id === "website-simple")!;
    const basic = PACKAGES.find((p) => p.id === "social-basic")!;
    const combo = PACKAGES.find((p) => p.id === "combo-social-simple")!;
    return {
      text: `Për një fillim të thjeshtë, ja opsionet më të mira:\n\n` +
        `**Website e Thjeshtë** — ${formatPrice(simple)}\nNjë faqe e qartë për biznesin tuaj.\n\n` +
        `**Social Media Basic** — ${formatPrice(basic)}\nNdihmë bazike me Instagram & Facebook.\n\n` +
        `**Combo: Të dyja së bashku** ⭐ — ${formatPrice(combo)}\nVlera më e mirë!`,
      quickReplies: ["Kontakto EMOR", "Më Ndihmo të Zgjedh", "Shiko Paketat"],
      state,
    };
  }

  // ── Service-specific queries ──
  if (intent === "social-media" || (category === "social" && intent !== "pricing")) {
    if (/what|explain|mean|how does|cka|çfarë|shpjego|si funksion/.test(input.toLowerCase())) {
      return {
        text: SERVICE_EXPLANATIONS["social-media"],
        quickReplies: ["Paketat Social Media", "Krahaso Planet Social Media", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
        state,
      };
    }
    return {
      text: recommendByCategory("social"),
      quickReplies: ["Krahaso Planet Social Media", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  if (intent === "website" || (category === "website" && intent !== "pricing")) {
    if (/what|explain|mean|landing|difference|cka|çfarë|shpjego|dallim/.test(input.toLowerCase())) {
      const isLanding = /landing|simple|thjesht/.test(input.toLowerCase());
      const isCustom = /custom|full|plot/.test(input.toLowerCase());
      if (isLanding) {
        return {
          text: SERVICE_EXPLANATIONS["landing-page"],
          quickReplies: ["Paketat Website", "Krahaso Planet Website", "Kontakto EMOR"],
          state,
        };
      }
      if (isCustom) {
        return {
          text: SERVICE_EXPLANATIONS["custom-website"],
          quickReplies: ["Paketat Website", "Krahaso Planet Website", "Kontakto EMOR"],
          state,
        };
      }
      return {
        text: SERVICE_EXPLANATIONS.website,
        quickReplies: ["Paketat Website", "Krahaso Planet Website", "Kontakto EMOR"],
        state,
      };
    }
    return {
      text: recommendByCategory("website"),
      quickReplies: ["Krahaso Planet Website", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  if (intent === "chatbot" || (category === "chatbot" && intent !== "pricing")) {
    if (/what|explain|mean|how does|cka|çfarë|shpjego|si funksion/.test(input.toLowerCase())) {
      return {
        text: SERVICE_EXPLANATIONS.chatbot,
        quickReplies: ["Paketat AI Chatbot", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
        state,
      };
    }
    return {
      text: recommendByCategory("chatbot"),
      quickReplies: ["Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  if (intent === "combo" || category === "combo") {
    if (/what|explain|mean|cka|çfarë|shpjego/.test(input.toLowerCase())) {
      return {
        text: SERVICE_EXPLANATIONS.combo,
        quickReplies: ["Oferta Combo", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
        state,
      };
    }
    return {
      text: recommendByCategory("combo"),
      quickReplies: ["Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  // ── Compare ──
  if (intent === "compare") {
    if (category === "website" || /website|site|page|faqe/.test(input.toLowerCase())) {
      return {
        text: compareWebsitePackages(),
        quickReplies: ["Kontakto EMOR", "Më Ndihmo të Zgjedh"],
        state,
      };
    }
    return {
      text: compareSocialPackages(),
      quickReplies: ["Krahaso Planet Website", "Kontakto EMOR", "Më Ndihmo të Zgjedh"],
      state,
    };
  }

  // ── Pricing ──
  if (intent === "pricing") {
    if (category) {
      if (category === "all") {
        const all = PACKAGES.map((p) => `**${p.name}** — ${formatPrice(p)}`).join("\n");
        return {
          text: `Ja një pasqyrë e plotë e çmimeve:\n\n${all}`,
          quickReplies: ["Më Ndihmo të Zgjedh", "Oferta Combo", "Kontakto EMOR"],
          state,
        };
      }
      if (category !== "all") {
        return {
          text: recommendByCategory(category),
          quickReplies: ["Më Ndihmo të Zgjedh", "Krahaso Planet", "Kontakto EMOR"],
          state,
        };
      }
    }
    const cheapest = [
      "**Opsionet më të përballueshme:**",
      "• Social Media Basic — €49 muaji i parë, pastaj €69.99/muaj",
      "• Website e Thjeshtë — €49.99 një herë + €6.99/muaj",
      "• Chatbot Një Platformë — €59.99 një herë + €19.99/muaj",
      "",
      "**Oferta combo më e mirë:**",
      "• Social Media + Website e Thjeshtë — €39.99 një herë + €69.99/muaj",
      "",
      "Dëshironi detaje për një shërbim specifik?",
    ].join("\n");
    return {
      text: cheapest,
      quickReplies: ["Paketat Social Media", "Paketat Website", "Paketat AI Chatbot", "Oferta Combo"],
      state,
    };
  }

  // ── Recommend / Help choose ──
  if (intent === "recommend") {
    return {
      text: "Më lejoni t'ju ndihmoj të gjeni paketën e duhur! Çfarë ka nevojë biznesi juaj më shumë tani?\n\n• Më shumë **dukshmëri** në rrjete sociale?\n• **Website** profesionale?\n• **Përgjigje më të shpejta** ndaj mesazheve të klientëve?\n• Ose **kombinim** të këtyre?",
      quickReplies: ["Rrjete Sociale", "Website", "AI Chatbot", "Dua Gjithçka", "Jam Fillestar"],
      state,
    };
  }

  // ── Why questions ──
  if (intent === "why-website") {
    return {
      text: BENEFITS["why-website"],
      quickReplies: ["Paketat Website", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }
  if (intent === "why-social") {
    return {
      text: BENEFITS["why-social-media"],
      quickReplies: ["Paketat Social Media", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }
  if (intent === "why-chatbot") {
    return {
      text: BENEFITS["why-fast-replies"],
      quickReplies: ["Paketat AI Chatbot", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }
  if (intent === "why-branding") {
    return {
      text: BENEFITS["why-branding"],
      quickReplies: ["Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }
  if (intent === "why-emor") {
    return {
      text: BENEFITS["why-emor"],
      quickReplies: ["Shiko Paketat", "Oferta Combo", "Kontakto EMOR"],
      state,
    };
  }

  // ── Beginner / Small business ──
  if (intent === "beginner" || intent === "small-business") {
    const isBeginner = intent === "beginner";
    return {
      text: isBeginner ? recommendForBeginner() : recommendForSmallBusiness(),
      quickReplies: ["Kontakto EMOR", "Më Ndihmo të Zgjedh", "Oferta Combo"],
      state,
    };
  }

  // ── Contact EMOR → Direct contact actions ──
  if (intent === "contact") {
    // If they want to provide details first
    if (/kerkese|kërkesë|detaje|dua te jap|dua të jap|formulari/.test(input.toLowerCase())) {
      state.leadCapture = true;
      state.leadStep = 0;
      return {
        text: "Shkëlqyeshëm! Le t'i mbledhim detajet tuaja para se të kontaktoni.\n\n" + LEAD_PROMPTS[0],
        state,
      };
    }
    // Default: show direct contact buttons
    return {
      text: `Mund të kontaktoni EMOR-in menjëherë:\n\n📧 **Email:** ${EMOR.email}\n📞 **Telefon:** ${EMOR.phones[0]}\n📸 **Instagram:** @${EMOR.instagram}\n\nZgjidhni një mënyrë kontakti më poshtë:`,
      contactActions: buildContactActions(),
      quickReplies: ["Dua të Jap Detaje", "Shiko Paketat"],
      state,
    };
  }

  // ── FAQ fuzzy match ──
  const faqMatch = findBestFAQ(input);
  if (faqMatch) {
    return {
      text: faqMatch.answer,
      quickReplies: ["Shiko Paketat", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
      state,
    };
  }

  // ── Fallback ──
  return {
    text: pick(FALLBACKS),
    quickReplies: ["Çka bën EMOR?", "Paketat Social Media", "Paketat Website", "Paketat AI Chatbot", "Oferta Combo", "Më Ndihmo të Zgjedh", "Kontakto EMOR"],
    state,
  };
}

// ─── FAQ Fuzzy Matching ────────────────────────────────────────────────────

function findBestFAQ(input: string): { question: string; answer: string } | null {
  const tokens = input.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
  let bestMatch: { question: string; answer: string } | null = null;
  let bestScore = 0;

  for (const faq of FAQS) {
    let score = 0;
    for (const token of tokens) {
      if (faq.keywords.some((kw) => token.includes(kw) || kw.includes(token))) {
        score++;
      }
    }
    if (score >= 2 && score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestMatch;
}

// ─── Welcome message ───────────────────────────────────────────────────────

export function getWelcomeMessage(): ChatMessage {
  return {
    id: "welcome",
    role: "bot",
    text: "Përshëndetje! 👋 Jam asistenti i EMOR-it. Mund t'ju ndihmoj të mësoni për shërbimet tona, të gjeni paketën e duhur, të krahasoni çmimet ose të filloni me një kërkesë.\n\nSi mund t'ju ndihmoj?",
    quickReplies: [
      "Çka bën EMOR?",
      "Paketat Social Media",
      "Paketat Website",
      "Paketat AI Chatbot",
      "Oferta Combo",
      "Më Ndihmo të Zgjedh",
      "Kontakto EMOR",
    ],
  };
}
