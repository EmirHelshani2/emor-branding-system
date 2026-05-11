// ─── EMOR Chatbot Knowledge Base ───────────────────────────────────────────
// Structured business data powering the EMOR sales assistant chatbot.
// No paid AI APIs — all intelligence comes from this structured knowledge.

export const EMOR = {
  name: "EMOR",
  email: "emormarketing1@gmail.com",
  instagram: "emor_marketing",
  instagramUrl: "https://www.instagram.com/emor_marketing",
  phones: ["+383 49 569 626", "+383 45 224 443"],
  purpose: [
    "Ndihmon bizneset të përmirësojnë praninë e tyre online",
    "Ndihmon bizneset të duken më profesionale në internet",
    "Ndihmon bizneset të tërheqin më shumë klientë",
    "Ndihmon bizneset të komunikojnë më shpejt",
    "Ndihmon bizneset të rriten përmes rrjeteve sociale, website-ve dhe chatbot-ve AI",
  ],
  tagline: "Rrjete sociale, website dhe chatbot AI — për biznese serioze.",
};

// ─── Social Media Packages ─────────────────────────────────────────────────

export interface Package {
  id: string;
  name: string;
  category: "social" | "website" | "chatbot" | "combo";
  oneTime?: number;
  firstMonth?: number;
  monthly?: number;
  maintenance?: number;
  platforms?: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}

export const PACKAGES: Package[] = [
  // ── Social Media ──
  {
    id: "social-basic",
    name: "Social Media Basic",
    category: "social",
    firstMonth: 49,
    monthly: 69.99,
    platforms: "Instagram & Facebook",
    features: [
      "3 postime/javë",
      "3 stories/javë",
      "Hashtag-e në trend",
      "Këshillim bazik",
      "Udhëzim për reklama të përfshirë",
      "Raport në fund të muajit",
    ],
    bestFor: "Biznese të vogla që sapo kanë filluar me rrjete sociale",
  },
  {
    id: "social-standard",
    name: "Social Media Standard",
    category: "social",
    firstMonth: 79,
    monthly: 129.99,
    platforms: "Instagram & Facebook",
    popular: true,
    features: [
      "Rregullim i profilit (bio, highlights, grid)",
      "4 postime/javë",
      "4 stories/javë",
      "Hashtag-e në trend",
      "2 video animacione",
      "Këshillim bazik",
      "Udhëzim për reklama të përfshirë",
      "Raport në fund të muajit",
    ],
    bestFor: "Biznese në rritje që duan prani profesionale në rrjete sociale",
  },
  {
    id: "social-premium",
    name: "Social Media Premium (Reklama)",
    category: "social",
    firstMonth: 229,
    monthly: 299.99,
    platforms: "Instagram, Facebook & TikTok",
    features: [
      "Reklama në Instagram & Facebook",
      "Rregullim i profilit (bio, highlights, grid)",
      "5 postime/javë",
      "Stories çdo ditë",
      "Hashtag-e në trend",
      "5 video animacione",
      "Përgjigje në DM",
      "Highlights të personalizuara",
      "Plan i plotë i përmbajtjes",
      "Raport në fund të muajit",
    ],
    bestFor: "Biznese që duan të rriten me reklama dhe menaxhim të plotë të përmbajtjes",
  },

  // ── Website ──
  {
    id: "website-simple",
    name: "Website e Thjeshtë (Landing Page)",
    category: "website",
    oneTime: 49.99,
    maintenance: 6.99,
    features: [
      "Website e thjeshtë që shpjegon biznesin dhe çmimet tuaja",
      "Mënyrë e lehtë për klientët të ju kontaktojnë",
      "Website me një faqe",
    ],
    bestFor: "Biznese që kanë nevojë për prani të shpejtë online",
  },
  {
    id: "website-custom",
    name: "Website e Plotë Custom",
    category: "website",
    oneTime: 249.99,
    maintenance: 24.99,
    popular: true,
    features: [
      "Website plotësisht e personalizuar",
      "Shpjegon biznesin dhe çmimet e produkteve tuaja",
      "Mbështetje me databazë",
      "Panel admin për ndryshimin e çmimeve të produkteve/shërbimeve",
      "Disa faqe sipas nevojave të biznesit",
    ],
    bestFor: "Biznese që kanë nevojë për website profesionale me shumë faqe dhe kontroll admin",
  },

  // ── AI Chatbot ──
  {
    id: "chatbot-one",
    name: "AI Chatbot — Një Platformë",
    category: "chatbot",
    oneTime: 59.99,
    maintenance: 19.99,
    features: [
      "Chatbot AI përgjigjet mesazheve në një platformë",
      "Klienti mund të flasë me AI ose me njeri",
    ],
    bestFor: "Biznese që kanë nevojë për përgjigje automatike në një rrjet sociale",
  },
  {
    id: "chatbot-website",
    name: "AI Chatbot — Website",
    category: "chatbot",
    oneTime: 79.99,
    maintenance: 24.99,
    features: [
      "Chatbot AI përgjigjet mesazheve në website-in tuaj",
      "Klienti mund të flasë me AI ose me njeri",
      "Widget i vogël brenda website-it për të folur me asistentin AI",
    ],
    bestFor: "Biznese që duan asistent të mençur në website-in e tyre",
  },
  {
    id: "chatbot-all",
    name: "AI Chatbot — Të Gjitha Platformat",
    category: "chatbot",
    oneTime: 179.99,
    maintenance: 34.99,
    features: [
      "Chatbot AI përgjigjet mesazheve në të gjitha platformat",
      "Klienti mund të flasë me AI ose me njeri",
    ],
    bestFor: "Biznese që duan përgjigje automatike kudo",
  },
  {
    id: "chatbot-all-website",
    name: "AI Chatbot — Të Gjitha + Website",
    category: "chatbot",
    oneTime: 229.99,
    maintenance: 44.99,
    popular: true,
    features: [
      "Chatbot AI përgjigjet në të gjitha platformat dhe në website",
      "Klienti mund të flasë me AI ose me njeri",
    ],
    bestFor: "Automatizim i plotë — AI përgjigjet në çdo kanal duke përfshirë website-in",
  },

  // ── Combo Offers ──
  {
    id: "combo-social-simple",
    name: "Social Media + Website e Thjeshtë",
    category: "combo",
    oneTime: 39.99,
    monthly: 69.99,
    features: [
      "Menaxhim i rrjeteve sociale",
      "Website e thjeshtë (landing page)",
    ],
    bestFor: "Fillestarë që duan rrjete sociale dhe website bazike së bashku",
  },
  {
    id: "combo-full",
    name: "Social Media + Website Custom + AI Chatbot",
    category: "combo",
    oneTime: 249.99,
    monthly: 89.99,
    popular: true,
    features: [
      "Menaxhim i rrjeteve sociale",
      "Website e plotë custom",
      "AI chatbot në website-in tuaj",
    ],
    bestFor: "Biznese që duan paketën e plotë digjitale",
  },
  {
    id: "combo-simple-chatbot",
    name: "Website e Thjeshtë + AI Chatbot",
    category: "combo",
    oneTime: 109.99,
    monthly: 29.99,
    features: [
      "Website e thjeshtë (landing page)",
      "AI chatbot në website-in tuaj",
    ],
    bestFor: "Biznese që duan website me përgjigje automatike të mençura",
  },
  {
    id: "combo-social-chatbot",
    name: "Social Media + AI Chatbot (Një Platformë)",
    category: "combo",
    monthly: 119.99,
    features: [
      "Menaxhim i rrjeteve sociale",
      "AI chatbot përgjigjet në një platformë",
    ],
    bestFor: "Biznese që duan rrjete sociale dhe përgjigje automatike në një platformë",
  },
];

// ─── Service Explanations ──────────────────────────────────────────────────

export const SERVICE_EXPLANATIONS: Record<string, string> = {
  "social-media":
    "Menaxhimi i rrjeteve sociale do të thotë që EMOR merret me përmbajtjen tuaj në Instagram, Facebook dhe TikTok — postime, stories, hashtag-e dhe strategji rritjeje — kështu biznesi yt duket aktiv dhe profesional pa pasur nevojë ta bësh vetë.",
  website:
    "Website-i është shtëpia online e biznesit tuaj. Qoftë një faqe e thjeshtë ose website e plotë me shumë faqe dhe panel admin, mundëson që klientët të gjejnë biznesin tuaj, të mësojnë për shërbimet dhe të ju kontaktojnë 24/7.",
  "landing-page":
    "Landing page është website me një faqe që shpjegon qartë çfarë ofron biznesi yt, tregon çmimet dhe u jep klientëve mënyrë të lehtë për të ju kontaktuar. Është mënyra më e shpejtë për të dalur online.",
  "custom-website":
    "Website e plotë custom ka disa faqe të dizajnuara posaçërisht për biznesin tuaj. Përfshin databazë, panel admin ku mund të ndryshoni çmimet dhe produktet, dhe çdo gjë që një biznes profesional ka nevojë.",
  chatbot:
    "Chatbot AI përgjigjet automatikisht mesazheve të klientëve në rrjete sociale ose website-in tuaj, 24/7. Klientët mund të flasin me AI-n për përgjigje të shpejta ose të kalojnë te një person i vërtetë kur kanë nevojë. Kjo do të thotë përgjigje më të shpejta dhe klientë më të kënaqur.",
  combo:
    "Ofertat combo bashkojnë disa shërbime të EMOR-it me çmim më të mirë. Në vend se të blini menaxhimin e rrjeteve sociale, website dhe chatbot veçmas, kurseni para duke i marrë si paketë.",
  maintenance:
    "Mirëmbajtja është një tarifë e vogël mujore që mbulon hosting-un, përditësimet, mbështetjen teknike dhe mbajtjen e website-it ose chatbot-it tuaj në gjendje të mirë. Mendojeni si sigurim për praninë tuaj digjitale.",
};

// ─── Business Benefit Knowledge ────────────────────────────────────────────

export const BENEFITS: Record<string, string> = {
  "why-website":
    "Website-i e bën biznesin tuaj të disponueshëm 24/7. Klientët mund të ju gjejnë në Google, të mësojnë për shërbimet tuaja dhe të ju kontaktojnë — edhe kur flini. Bizneset me website duken më të besueshme dhe profesionale.",
  "why-social-media":
    "Rrjetet sociale janë aty ku klientët tuaj kalojnë kohën. Profil-e aktive dhe profesionale ju ndihmojnë të arrini më shumë njerëz, të ndërtoni besim dhe të qëndroni në mendje. EMOR merret me përmbajtjen që ju të fokusoheni në biznes.",
  "why-fast-replies":
    "Studimet tregojnë se bizneset që përgjigjen brenda 5 minutave kanë 10 herë më shumë gjasa të konvertojnë një klient. Chatbot AI do të thotë përgjigje të menjëhershme — pa mesazhe të humbura, pa klientë të humbur.",
  "why-branding":
    "Branding-u profesional dhe prania online e bëjnë biznesin tuaj të duket serioz dhe i besueshëm. Përshtypjet e para tani ndodhin online — nëse profilet tuaja duken të çrregullta ose të vjetruara, klientët do të shkojnë te konkurrenti.",
  "why-small-business":
    "EMOR është ndërtuar për biznese të vogla dhe në rritje. Paketat tona fillojnë vetëm nga €49/muaj — mjaft të përballueshme për çdo biznes, por mjaft profesionale për të konkurruar me kompani më të mëdha.",
  "why-emor":
    "EMOR ju jep çdo gjë që ju nevojitet për të rritur online: menaxhim i rrjeteve sociale, website profesionale dhe chatbot AI. Në vend se të punësoni disa freelancer-a ose agjenci, merrni një ekip që bën të gjitha — me çmime për biznese të vogla.",
};

// ─── FAQ Entries ────────────────────────────────────────────────────────────

export interface FAQ {
  keywords: string[];
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    keywords: ["what", "emor", "do", "about", "who", "cka", "boni", "kush", "per"],
    question: "Çka bën EMOR?",
    answer:
      "EMOR ndihmon bizneset të rriten online. Menaxhojmë rrjetet tuaja sociale, ndërtojmë website profesionale dhe instalojmë chatbot AI që u përgjigjen klientëve automatikisht. Çdo gjë është dizajnuar për ta bërë biznesin tuaj më profesional dhe për të tërhequr më shumë klientë.",
  },
  {
    keywords: ["start", "begin", "how", "first", "step", "filloj", "si", "hap"],
    question: "Si të filloj?",
    answer:
      "Është shumë e thjeshtë! Thjesht më thuaj çfarë ka nevojë biznesi yt — rrjete sociale, website ose chatbot — dhe unë do të rekomandoj paketën më të mirë. Kur të jeni gati, mund t'ju ndihmoj të dërgoni një kërkesë te EMOR dhe dikush do t'ju kontaktojë shpejt.",
  },
  {
    keywords: ["after", "contact", "happen", "next", "then", "pastaj", "çfar", "ndodh"],
    question: "Çfarë ndodh pasi të kontaktoj EMOR?",
    answer:
      "Pasi të dërgoni kërkesën, një anëtar i ekipit EMOR do t'ju kontaktojë (zakonisht brenda 24 orëve) për të diskutuar nevojat e biznesit tuaj, konfirmuar paketën dhe filluar punën. Procesi është i thjeshtë dhe i qartë.",
  },
  {
    keywords: ["custom", "special", "different", "unique", "specific", "veçantë", "ndryshe"],
    question: "A mund të kërkoj punë të personalizuar?",
    answer:
      "Sigurisht! EMOR ofron shërbime fleksibile. Nëse asnjë paketë nuk ju përshtatet saktësisht, thjesht dërgoni një kërkesë duke përshkruar çfarë ju nevojitet, dhe EMOR do të krijojë një plan të personalizuar për biznesin tuaj.",
  },
  {
    keywords: ["only", "business", "personal", "individual", "company", "vetem", "biznes", "kompani"],
    question: "A punoni vetëm me biznese?",
    answer:
      "EMOR punon kryesisht me biznese — nga startup-e të vogla deri te kompani të vendosura. Nëse keni një brand personal ose projekt që ka nevojë për prani profesionale online, EMOR mund t'ju ndihmojë edhe juve.",
  },
  {
    keywords: ["need", "all", "every", "service", "must", "duhet", "gjitha", "sherbim"],
    question: "A kam nevojë për të gjitha shërbimet?",
    answer:
      "Jo, aspak! Mund të filloni vetëm me një shërbim — rrjete sociale, website ose chatbot — dhe të shtoni më shumë më vonë kur biznesi rritet. Shumë klientë fillojnë me një dhe zgjerojnë kur shohin rezultate.",
  },
  {
    keywords: ["cheap", "cheapest", "affordable", "budget", "lowest", "lirë", "cmim", "buxhet"],
    question: "Cila paketë është më e lirë?",
    answer:
      "Opsionet më të përballueshme janë:\n• Social Media Basic — €49 muaji i parë, pastaj €69.99/muaj\n• Website e Thjeshtë — €49.99 një herë + €6.99/muaj mirëmbajtje\n• Chatbot Një Platformë — €59.99 një herë + €19.99/muaj\n\nOse provoni një combo: Social Media + Website e Thjeshtë fillon vetëm €39.99 një herë + €69.99/muaj!",
  },
  {
    keywords: ["best", "recommended", "top", "popular", "worth", "mire", "rekomandoni", "vlere"],
    question: "Cila paketë është më e mira?",
    answer:
      "Varet nga nevojat tuaja! Për vlerën më të mirë, ofertat combo ju kursejnë më shumë. Zgjedhja më e popullarizuar është Social Media + Website Custom + AI Chatbot (€249.99 një herë + €89.99/muaj) — ju jep prani të plotë online me automatizim.",
  },
  {
    keywords: ["include", "get", "come", "feature", "what", "perfshihet", "merr", "ka"],
    question: "Çfarë përfshihet në paketa?",
    answer:
      "Çdo paketë përfshin veçori të ndryshme. Paketat e rrjeteve sociale përfshijnë postime, stories dhe hashtag-e. Paketat e website-it përfshijnë dizajn, hosting dhe mirëmbajtje. Paketat e chatbot-it përfshijnë konfigurim AI dhe mundësinë për të kaluar te njeriu. Dëshironi t'ju tregoj detaje për një paketë specifike?",
  },
  {
    keywords: ["pay", "payment", "first", "upfront", "cost", "fee", "paguaj", "pagesa", "kosto"],
    question: "Sa duhet të paguaj fillimisht?",
    answer:
      "Varet nga paketa:\n• Paketat e rrjeteve sociale kanë muajin e parë me çmim të ulur, pastaj tarifë mujore\n• Paketat e website-it kanë tarifë një herë + mirëmbajtje të vogël mujore\n• Paketat e chatbot-it kanë tarifë një herë + mirëmbajtje mujore\n• Ofertat combo kanë tarifë një herë + çmim mujor\n\nDëshironi çmime për një shërbim specifik?",
  },
  {
    keywords: ["one-time", "monthly", "difference", "setup", "recurring", "njehere", "mujore", "dallim"],
    question: "Cili është dallimi mes tarifës një herë dhe asaj mujore?",
    answer:
      "Tarifa një herë mbulon konfigurimin fillestar — ndërtimin e website-it, vendosjen e chatbot-it, etj. Tarifa mujore mbulon mirëmbajtjen, hosting-un, përditësimet dhe menaxhimin e vazhdueshëm. Për rrjetet sociale, muaji i parë ka zbritje, pastaj vijon tarifa e rregullt mujore.",
  },
  {
    keywords: ["choose", "help", "decide", "pick", "recommend", "suggest", "zgjedh", "ndihmo", "vendos"],
    question: "A mund të më ndihmoni të zgjedh?",
    answer:
      "Sigurisht! Më lejoni t'ju bëj disa pyetje të shpejta për të gjetur paketën perfekte për ju. Çfarë ka nevojë biznesi juaj më shumë tani?\n\n• Më shumë dukshmëri në rrjete sociale?\n• Website profesionale?\n• Përgjigje më të shpejta ndaj mesazheve të klientëve?\n• Ose kombinim të këtyre?",
  },
  {
    keywords: ["don't", "know", "idk", "unsure", "confused", "not sure", "nuk", "di", "sigurt"],
    question: "Nuk e di çfarë kam nevojë",
    answer:
      "S'ka problem! Më lejoni t'ju ndihmoj ta kuptoni. Më tregoni pak për biznesin tuaj:\n\n• A keni tashmë profil-e në rrjete sociale?\n• A keni website?\n• A merrni shumë mesazhe nga klientët?\n\nSipas përgjigjeve tuaja, do t'ju rekomandoj pikën më të mirë për të filluar.",
  },
];

// ─── Greeting Responses ────────────────────────────────────────────────────

export const GREETINGS = [
  "Përshëndetje! 👋 Jam asistenti i EMOR-it. Mund t'ju ndihmoj me rrjete sociale, website, chatbot AI, çmime ose si të filloni. Çfarë po kërkoni?",
  "Mirë se vini në EMOR! 👋 Jam këtu për t'ju ndihmuar të gjeni paketën e duhur për biznesin tuaj. Pyetni çdo gjë për shërbimet, çmimet ose si të filloni!",
  "Tungjatjeta! 👋 Jam asistenti i mençur i EMOR-it. Qoftë menaxhim i rrjeteve sociale, website ose chatbot AI — mund t'ju udhëzoj. Si mund t'ju ndihmoj?",
];

// ─── Fallback Responses ────────────────────────────────────────────────────

export const FALLBACKS = [
  "Mund t'ju ndihmoj me rrjete sociale, website, chatbot AI, çmime, oferta combo ose informacione kontakti. Çfarë ju intereson?",
  "Më tregoni çfarë ka nevojë biznesi juaj dhe unë do t'ju udhëzoj te paketa e duhur. Mund të zgjidhni edhe nga opsionet më poshtë!",
  "Jam më i mirë kur bëhet fjalë për shërbimet e EMOR-it — rrjete sociale, website dhe chatbot. Provoni të pyesni për çmime, paketa ose si të filloni!",
  "Nuk jeni i sigurt ku të filloni? Provoni të pyesni:\n• 'Çfarë paketash ofroni?'\n• 'Më ndihmo të zgjedh'\n• 'Sa kushton një website?'\n\nOse thjesht zgjidhni një opsion më poshtë!",
];
