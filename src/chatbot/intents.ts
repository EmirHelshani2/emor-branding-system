// ─── EMOR Intent Matching Engine ───────────────────────────────────────────
// Flexible intent detection using keyword groups, synonyms, and scoring.
// Supports both English and Albanian input.

export type IntentType =
  | "greeting"
  | "social-media"
  | "website"
  | "chatbot"
  | "pricing"
  | "combo"
  | "compare"
  | "recommend"
  | "contact"
  | "about-emor"
  | "why-website"
  | "why-social"
  | "why-chatbot"
  | "why-branding"
  | "why-emor"
  | "small-business"
  | "beginner"
  | "buying"
  | "thanks"
  | "bye"
  | "professional"
  | "simple-need"
  | "only-instagram"
  | "unknown";

interface IntentRule {
  intent: IntentType;
  keywords: string[][];
  synonyms?: string[];
  boost?: number;
}

const INTENT_RULES: IntentRule[] = [
  // ── Greetings (AL + EN) ──
  {
    intent: "greeting",
    keywords: [["hi", "hello", "hey", "hola", "yo", "sup", "greetings", "hej", "good morning", "good evening",
                "pershendetje", "përshëndetje", "tungjatjeta", "tung", "mire se vini", "mirë se vini",
                "mirëdita", "miredita", "mirebrema", "mirëbrëma", "mirmëngjes", "mirmengjes",
                "çkemi", "ckemi", "qkemi"]],
    synonyms: ["hi", "hello", "hey", "yo", "sup", "hej", "hola", "tung", "tungjatjeta",
               "pershendetje", "përshëndetje", "ckemi", "çkemi", "qkemi"],
    boost: 2,
  },
  // ── Thanks (AL + EN) ──
  {
    intent: "thanks",
    keywords: [["thanks", "thank", "thx", "appreciate", "grateful", "ty",
                "faleminderit", "falemenderit", "flm", "rrofsh", "shum fala"]],
    synonyms: ["thanks", "thx", "ty", "faleminderit", "falemenderit", "flm", "rrofsh"],
  },
  // ── Bye (AL + EN) ──
  {
    intent: "bye",
    keywords: [["bye", "goodbye", "see you", "later", "ciao", "take care",
                "mirupafshim", "shihemi", "kalofsh mire", "tung", "hajde"]],
    synonyms: ["bye", "goodbye", "ciao", "mirupafshim", "shihemi"],
  },

  // ── About EMOR (AL + EN) ──
  {
    intent: "about-emor",
    keywords: [["what", "who", "about", "tell", "explain", "cka", "çka", "çfarë", "cfar", "kush",
                "tregom", "tregoni", "shpjego", "shpjegoni", "per", "për"],
               ["emor", "you", "company", "business", "do", "offer", "ju", "juve", "boni", "ofron",
                "punoni", "merresh", "merreni"]],
    boost: 1,
  },

  // ── Social Media (AL + EN) ──
  {
    intent: "social-media",
    keywords: [["social", "instagram", "insta", "facebook", "fb", "tiktok", "post", "posts", "stories",
                "story", "content", "feed", "hashtag", "reels",
                "rrjete", "rrjetet", "sociale", "postime", "postim", "përmbajtje", "permbajtje",
                "menaxhim", "menaxhimi"]],
    synonyms: ["instagram", "insta", "facebook", "fb", "tiktok", "social media",
               "rrjete sociale", "rrjetet sociale"],
    boost: 1,
  },

  // ── Only Instagram ──
  {
    intent: "only-instagram",
    keywords: [["only", "just", "vetem", "vetëm"], ["instagram", "insta", "ig"]],
    boost: 3,
  },

  // ── Website (AL + EN) ──
  {
    intent: "website",
    keywords: [["website", "web", "site", "page", "landing", "webpage", "homepage",
                "faqe", "webfaqe", "uebfaqe", "faqja", "sajt", "websajt", "ueb"]],
    synonyms: ["website", "webpage", "landing page", "site", "faqe", "webfaqe", "uebfaqe", "sajt"],
    boost: 1,
  },

  // ── Chatbot (AL + EN) ──
  {
    intent: "chatbot",
    keywords: [["chatbot", "chat bot", "bot", "auto reply", "auto-reply", "automatic", "assistant",
                "ai reply", "message", "messages", "dm", "dms", "reply", "replies", "auto",
                "asistent", "automatik", "automatike", "pergjigje", "përgjigje", "mesazhe",
                "mesazh", "përgjigjem"]],
    synonyms: ["chatbot", "chat bot", "auto-reply", "auto reply",
               "përgjigje automatike", "pergjigje automatike", "asistent ai"],
    boost: 1,
  },

  // ── Pricing (AL + EN) ──
  {
    intent: "pricing",
    keywords: [["price", "pricing", "cost", "how much", "money", "fee", "fees", "pay", "payment",
                "afford", "budget", "euro", "€", "cheap", "expensive",
                "çmim", "cmim", "çmime", "cmime", "çmimet", "sa kushton", "sa", "kushton",
                "pagesa", "paguaj", "kosto", "lirë", "lire", "shtrenjt", "shtrenjtë",
                "buxhet", "tarife", "tarifë"]],
    synonyms: ["pricing", "prices", "çmimet", "cmime", "sa kushton"],
    boost: 1,
  },

  // ── Combo (AL + EN) ──
  {
    intent: "combo",
    keywords: [["combo", "bundle", "package deal", "together", "combined", "all services",
                "everything", "full package",
                "bashku", "së bashku", "se bashku", "paketë", "ofertë", "oferte",
                "gjithçka", "gjithcka", "te gjitha"]],
    synonyms: ["combo", "bundle", "combos", "oferta combo", "oferte combo"],
    boost: 2,
  },

  // ── Compare (AL + EN) ──
  {
    intent: "compare",
    keywords: [["compare", "difference", "vs", "versus", "better", "which one", "comparison",
                "krahaso", "krahasim", "dallim", "dallimi", "ndryshim", "ndryshimi",
                "cili eshte", "cili është", "me e mire", "më e mirë"]],
  },

  // ── Recommend / Help (AL + EN) ──
  {
    intent: "recommend",
    keywords: [["recommend", "suggest", "which", "choose", "help me", "pick", "decide",
                "best for", "advice", "guide", "idk", "don't know", "not sure", "unsure",
                "confused", "what should",
                "rekomando", "rekomandoni", "sugjeroni", "zgjedh", "ndihmo", "ndihmoni",
                "më ndihmo", "me ndihmo", "vendos", "keshillo", "këshillo", "cila",
                "nuk e di", "nuk di", "s di", "nuk jam", "s jam i sigurt",
                "çfarë", "cfar", "me thuaj", "më thuaj", "cka duhet",
                "me mire", "më mirë", "çka", "cka"]],
    synonyms: ["recommend", "suggest", "idk", "rekomando", "ndihmo", "nuk e di", "nuk di"],
    boost: 1,
  },

  // ── Contact (AL + EN) ──
  {
    intent: "contact",
    keywords: [["contact", "email", "reach", "inquire", "inquiry", "get in touch", "call",
                "message emor", "talk to", "phone",
                "kontakt", "kontakto", "kontaktoj", "kontaktoni", "telefon", "telefono",
                "thirr", "na shkruani", "shkruaj", "dërgoj", "dergoj", "email",
                "kerkese", "kërkesë", "lidhem", "lidhu"]],
    boost: 1,
  },

  // ── Buying intent (AL + EN) ──
  {
    intent: "buying",
    keywords: [["buy", "purchase", "order", "sign up", "subscribe", "get started",
                "interested", "want to start", "ready", "take", "get the",
                "ble", "blej", "bleni", "blerje", "porosi", "porosit", "porosisni",
                "dua", "deshiroj", "dëshiroj", "interesohem", "interesuar", "jam interesuar",
                "jam i interesuar", "gatshëm", "gati", "filloj", "fillo",
                "dua me ble", "dua ta marr", "dua te filloj", "ma jep",
                "dua paketën", "dua paketen", "dua nje", "dua një"]],
    synonyms: ["dua me ble", "dua ta marr", "jam interesuar", "jam i interesuar",
               "dua te filloj", "dua një paketë"],
    boost: 3,
  },

  // ── Why questions (AL + EN) ──
  {
    intent: "why-website",
    keywords: [["why", "need", "important", "benefit", "pse", "perse", "nevojë", "nevoje", "rendesishme", "rëndësishme"],
               ["website", "site", "page", "web", "faqe", "sajt"]],
  },
  {
    intent: "why-social",
    keywords: [["why", "need", "important", "benefit", "pse", "perse", "nevojë", "nevoje"],
               ["social", "instagram", "facebook", "tiktok", "media", "rrjete", "rrjetet", "sociale"]],
  },
  {
    intent: "why-chatbot",
    keywords: [["why", "need", "important", "benefit", "pse", "perse", "nevojë", "nevoje"],
               ["chatbot", "bot", "auto reply", "messages", "fast reply", "përgjigje", "pergjigje", "mesazhe", "automatik"]],
  },
  {
    intent: "why-branding",
    keywords: [["why", "need", "important", "pse", "nevojë"],
               ["brand", "branding", "presence", "professional", "look",
                "prani", "profesional", "profesionale", "dukem", "duken", "serioz"]],
  },
  {
    intent: "why-emor",
    keywords: [["why", "pse", "perse"], ["emor", "you", "your service", "choose you", "ju", "juve", "zgjedhim"]],
  },

  // ── Want to look professional ──
  {
    intent: "professional",
    keywords: [["professional", "profesional", "profesionale", "serioz", "serioze",
                "dukem", "duken", "look", "pamje", "pamjen", "brand", "branding",
                "më mirë", "me mire", "paraqitje"]],
    boost: 1,
  },

  // ── Simple need ──
  {
    intent: "simple-need",
    keywords: [["simple", "thjesht", "thjeshtë", "basic", "e thjeshtë",
                "diçka bazike", "dicka bazike", "fillim", "e lehtë", "lehte"]],
    boost: 1,
  },

  // ── Small business / beginner (AL + EN) ──
  {
    intent: "small-business",
    keywords: [["small", "new", "startup", "just started", "local", "small business", "growing",
                "i vogël", "vogel", "vogla", "vogël", "biznes i vogël", "biznes i ri",
                "lokal", "rritje", "sapo", "ri"]],
  },
  {
    intent: "beginner",
    keywords: [["beginner", "first time", "starting", "just starting", "new to", "never", "no experience",
                "fillestar", "herën e parë", "heren e pare", "sapo filloj", "pa përvojë", "pa pervoje",
                "po filloj", "jam i ri"]],
  },
];

// ─── Normalize text for matching ───────────────────────────────────────────

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[^\w\s'€ëçö]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(" ").filter(Boolean);
}

interface IntentMatch {
  intent: IntentType;
  score: number;
}

export function detectIntent(input: string): IntentType {
  const normalized = normalize(input);
  const tokens = tokenize(input);

  if (tokens.length === 0) return "unknown";

  // Check for exact single/double-word matches first (greetings, thanks, etc.)
  if (tokens.length <= 3) {
    for (const rule of INTENT_RULES) {
      if (rule.synonyms?.some((s) => normalized === s || normalized.startsWith(s + " ") || tokens.includes(s))) {
        return rule.intent;
      }
    }
  }

  const matches: IntentMatch[] = [];

  for (const rule of INTENT_RULES) {
    let score = 0;

    // Check synonyms (full phrase or token match)
    if (rule.synonyms) {
      for (const syn of rule.synonyms) {
        if (normalized.includes(syn)) {
          score += 3;
          break;
        }
      }
    }

    // Check keyword groups
    if (rule.keywords.length === 1) {
      const group = rule.keywords[0];
      for (const kw of group) {
        if (normalized.includes(kw)) {
          score += 2;
        }
      }
    } else {
      // Multi-group: require match in each group
      let allGroupsMatch = true;
      let groupScore = 0;
      for (const group of rule.keywords) {
        const groupMatch = group.some((kw) => normalized.includes(kw));
        if (!groupMatch) {
          allGroupsMatch = false;
          break;
        }
        groupScore += 2;
      }
      if (allGroupsMatch) {
        score += groupScore;
      }
    }

    if (score > 0) {
      score += rule.boost ?? 0;
      matches.push({ intent: rule.intent, score });
    }
  }

  if (matches.length === 0) return "unknown";

  matches.sort((a, b) => b.score - a.score);
  return matches[0].intent;
}

// ─── Extract which service category the user is asking about ───────────────

export type ServiceCategory = "social" | "website" | "chatbot" | "combo" | "all" | null;

export function detectServiceCategory(input: string): ServiceCategory {
  const n = normalize(input);
  const social = /social|instagram|insta|facebook|fb|tiktok|post|story|stories|content|rrjete|rrjetet|sociale|postime|menaxhim/.test(n);
  const web = /website|web|site|page|landing|homepage|faqe|webfaqe|uebfaqe|sajt|websajt/.test(n);
  const bot = /chatbot|chat bot|bot|auto.?reply|assistant|ai reply|automatic|asistent|automatik|automatike|pergjigje automatike|përgjigje automatike/.test(n);
  const combo = /combo|bundle|everything|all services|full package|together|bashku|gjithçka|gjithcka|te gjitha sherbime/.test(n);

  if (combo) return "combo";
  const count = [social, web, bot].filter(Boolean).length;
  if (count >= 2) return "all";
  if (social) return "social";
  if (web) return "website";
  if (bot) return "chatbot";
  return null;
}

// ─── Detect specific package tier from user message ────────────────────────

export function detectPackageTier(input: string): string | null {
  const n = normalize(input);
  if (/premium|ads|advanced|pro|reklama/.test(n)) return "premium";
  if (/standard|middle|mid|regular|mesme|mesëm/.test(n)) return "standard";
  if (/basic|starter|simple|beginner|cheap|budget|afford|bazik|thjesht|thjeshtë|lirë|lire|fillestar/.test(n)) return "basic";
  if (/custom|full|complete|multi|plotë|plot|personalizuar/.test(n)) return "custom";
  if (/all platform|te gjitha platform|të gjitha platform/.test(n)) return "all-platforms";
  if (/one platform|single|nje platform|një platform/.test(n)) return "one-platform";
  return null;
}
