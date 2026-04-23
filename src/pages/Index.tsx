import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Globe,
  Instagram,
  Mail,
  Phone,
  Share2,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PremiumCard from "@/components/PremiumCard";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const CONTACT_EMAIL = "emormarketing1@gmail.com";
const CONTACT_PHONES = ["+383 49 569 626", "+383 45 224 443"];

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Share2,
    titleAl: "Social Media",
    titleEn: "Social Media",
    descAl:
      "Menaxhojmë Instagram & Facebook çdo muaj — postime, stories, hashtags dhe raport. Konsistent dhe profesional.",
    descEn:
      "We manage Instagram & Facebook monthly — posts, stories, hashtags and report. Consistent and professional.",
    priceAl: "Nga €69.99/muaj",
    priceEn: "From €69.99/month",
    featuresAl: ["3–5 postime/javë", "Stories & hashtags trending", "Raport mujor i performancës"],
    featuresEn: ["3–5 posts/week", "Stories & trending hashtags", "Monthly performance report"],
    tab: "social",
  },
  {
    icon: Globe,
    titleAl: "Website",
    titleEn: "Website",
    descAl:
      "Website e pastër dhe e shpejtë që prezanton biznesin tuaj dhe ndihmon klientët të ju gjejnë dhe kontaktojnë.",
    descEn:
      "A clean, fast website that presents your business and makes it easy for customers to find and contact you.",
    priceAl: "Nga €49.99 njëherë",
    priceEn: "From €49.99 one-time",
    featuresAl: ["Dizajn responsive & modern", "Prezantim biznesi & çmimesh", "SSL & siguri e plotë"],
    featuresEn: ["Responsive & modern design", "Business & price presentation", "SSL & full security"],
    tab: "website",
  },
  {
    icon: Bot,
    titleAl: "AI Chatbot",
    titleEn: "AI Chatbot",
    descAl:
      "Përgjigje automatike 24/7 në Instagram, Facebook ose website-in tuaj. Klientët flasin me AI ose me njeri.",
    descEn:
      "Automated 24/7 replies on Instagram, Facebook, or your website. Customers talk to AI or a human.",
    priceAl: "Nga €59.99 njëherë",
    priceEn: "From €59.99 one-time",
    featuresAl: ["Aktiv 24/7 — pa ndërprerje", "AI ose transferim te njeri", "Të gjitha platformat"],
    featuresEn: ["Active 24/7 — no downtime", "AI or transfer to human", "All platforms"],
    tab: "chatbot",
  },
];

const proofCards = [
  {
    icon: TrendingUp,
    metric: "4x",
    labelAl: "rritje mesatare e angazhimit",
    labelEn: "average engagement growth",
    descAl:
      "Klientët tanë të Social Media shohin mesatarisht 4x më shumë angazhim brenda 3 muajve të parë.",
    descEn:
      "Our Social Media clients see an average 4x engagement increase within the first 3 months.",
  },
  {
    icon: Users,
    metric: "7+",
    labelAl: "biznese të kënaqura",
    labelEn: "satisfied businesses",
    descAl:
      "Klientë aktivë nga sektorë të ndryshëm — dyqane, shkolla, fotografë dhe biznese teknologjie.",
    descEn:
      "Active clients from different sectors — shops, schools, photographers and tech businesses.",
  },
  {
    icon: Bot,
    metric: "24/7",
    labelAl: "chatbot aktiv pa pushim",
    labelEn: "chatbot active non-stop",
    descAl:
      "AI Chatbot i përgjigjet çdo mesazhi automatikisht — edhe kur ju jeni duke fjetur ose pushuar.",
    descEn:
      "AI Chatbot replies to every message automatically — even when you are asleep or on holiday.",
  },
  {
    icon: Shield,
    metric: "100%",
    labelAl: "website të sigurta me SSL",
    labelEn: "websites with full SSL",
    descAl:
      "Çdo website që ndërtojmë vjen me SSL, backup të rregullt dhe kod të pastër, të sigurt.",
    descEn:
      "Every website we build comes with SSL, regular backups, and clean, secure code.",
  },
];

// 3 selected client quotes for trust strip
const trustQuotes = [
  {
    name: "Driton Bublaku",
    handle: "@dritonbublakuphotographer",
    stars: 5,
    textAl:
      "Ajo që e kisha imagjinuar prej kohësh, ju e realizuat saktësisht ashtu siç e desha. Faleminderit!",
  },
  {
    name: "Neo Mobile Store",
    handle: "@neomobilestore_",
    stars: 5,
    textAl: "Punojnë perfekt, shumë të mprehta, film i ke bo. I ke bo jashtëzakonisht mirë.",
  },
  {
    name: "English World School",
    handle: "@englishworld_school",
    stars: 5,
    textAl: "Kemi parë përmirësime të mëdha në faqe dhe faleminderit shumë për bashkëpunim.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const Index = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="overflow-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="section-shell relative flex min-h-[calc(100svh-4.8rem)] items-center overflow-hidden pt-6 md:min-h-[calc(100svh-5.4rem)] md:pt-8">
        <HeroVideoBackground />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid gap-6 py-6 md:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={softReveal}
              className="max-w-2xl"
            >
              <span className="premium-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                {t("Agjenci Digjitale — Kosovë", "Digital Marketing Agency")}
              </span>

              <h1 className="mt-3 text-[1.85rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[2.1rem] md:text-[2.45rem] lg:text-[2.75rem]">
                {lang === "al" ? (
                  <>
                    Rrjete sociale.{" "}
                    <span className="gold-gradient-text">Website.</span>{" "}
                    AI chatbot.
                  </>
                ) : (
                  <>
                    Social media.{" "}
                    <span className="gold-gradient-text">Websites.</span>{" "}
                    AI chatbots.
                  </>
                )}
              </h1>

              <p className="mt-3 max-w-lg text-[0.88rem] leading-relaxed text-muted-foreground md:text-[0.92rem]">
                {t(
                  "EMOR menaxhon rrjetet sociale, ndërton website dhe instalon chatbot AI — të gjitha për biznesin tuaj.",
                  "EMOR manages your social media, builds your website, and sets up AI chatbots — all for one business."
                )}
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  {t("Fillo tani", "Get started")}{" "}
                  <ArrowRight size={16} />
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  {t("Shiko paketat", "View packages")}
                </Link>
              </div>
            </motion.div>

            {/* Hero info card — each row is now a clickable link */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={softReveal}
              transition={{ delay: 0.15 }}
            >
              <PremiumCard
                interactive={false}
                className="overflow-hidden px-4 py-4 md:px-5 md:py-5"
              >
                <div className="panel-grid absolute inset-0 opacity-[0.14]" />
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" />

                <div className="relative">
                  <span className="premium-badge">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                    {t("Çfarë ofrojmë", "What we offer")}
                  </span>

                  <div className="mt-4 space-y-2">
                    {[
                      {
                        icon: Share2,
                        labelAl: "Social Media Management",
                        labelEn: "Social Media Management",
                        priceAl: "nga €69.99/muaj",
                        priceEn: "from €69.99/month",
                        tab: "social",
                      },
                      {
                        icon: Globe,
                        labelAl: "Website Development",
                        labelEn: "Website Development",
                        priceAl: "nga €49.99 njëherë",
                        priceEn: "from €49.99 one-time",
                        tab: "website",
                      },
                      {
                        icon: Bot,
                        labelAl: "AI Chatbot — 24/7",
                        labelEn: "AI Chatbot — 24/7",
                        priceAl: "nga €59.99 njëherë",
                        priceEn: "from €59.99 one-time",
                        tab: "chatbot",
                      },
                    ].map((item) => (
                      <Link
                        key={item.labelEn}
                        to={`/pricing?tab=${item.tab}`}
                        className="flex items-center justify-between gap-3 rounded-[0.85rem] border border-white/8 bg-white/[0.025] px-3.5 py-2.5 transition hover:border-primary/25 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-2.5">
                          <item.icon size={14} className="shrink-0 text-primary" />
                          <span className="text-[0.875rem] font-medium text-foreground/85">
                            {t(item.labelAl, item.labelEn)}
                          </span>
                        </div>
                        <span className="text-[0.75rem] text-primary/80 whitespace-nowrap">
                          {t(item.priceAl, item.priceEn)}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-[0.85rem] border border-white/10 bg-background/55 px-2.5 py-2.5 text-center">
                      <p className="text-[0.6rem] uppercase tracking-[0.12em] text-primary/80">
                        {t("Përgjigje", "Reply")}
                      </p>
                      <p className="mt-1 text-[0.88rem] font-bold text-white">&lt; 24h</p>
                    </div>
                    <div className="rounded-[0.85rem] border border-white/10 bg-background/55 px-2.5 py-2.5 text-center">
                      <p className="text-[0.6rem] uppercase tracking-[0.12em] text-primary/80">
                        {t("Raport", "Report")}
                      </p>
                      <p className="mt-1 text-[0.88rem] font-bold text-white">{t("Mujor", "Monthly")}</p>
                    </div>
                    <div className="rounded-[0.85rem] border border-white/10 bg-background/55 px-2.5 py-2.5 text-center">
                      <p className="text-[0.6rem] uppercase tracking-[0.12em] text-primary/80">
                        AI Bot
                      </p>
                      <p className="mt-1 text-[0.88rem] font-bold text-white">24/7</p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* ── 2. SERVICES ─────────────────────────────────────────────────── */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Shërbimet tona", "Our services")}
            title={t("Tre shërbime. Një ekip.", "Three services. One team.")}
            subtitle={t(
              "Zgjidhni çfarë ju nevojitet — ose kombinojini të tria për prani të plotë online.",
              "Choose what you need — or combine all three for a complete online presence."
            )}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <Link
                  to={`/pricing?tab=${service.tab}`}
                  className="block h-full"
                >
                  <PremiumCard
                    interactive
                    className="flex h-full flex-col px-5 py-5 cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[0.85rem] border border-primary/15 bg-primary/10 text-primary">
                      <service.icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[1rem] font-bold tracking-[-0.02em] text-white">
                      {t(service.titleAl, service.titleEn)}
                    </h3>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground flex-1">
                      {t(service.descAl, service.descEn)}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 space-y-1.5">
                      {(lang === "al" ? service.featuresAl : service.featuresEn).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-[0.78rem] text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/6 pt-3">
                      <span className="text-[0.82rem] font-semibold text-primary">
                        {t(service.priceAl, service.priceEn)}
                      </span>
                      <span className="flex items-center gap-1 text-[0.78rem] text-muted-foreground">
                        {t("Shiko paketat", "View packages")} <ArrowRight size={12} />
                      </span>
                    </div>
                  </PremiumCard>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-4 text-center text-[0.82rem] text-muted-foreground">
            {t("Paketa combo me çmim më të mirë", "Combo packages at a better price")} →{" "}
            <Link to="/pricing?tab=combos" className="font-medium text-primary hover:underline">
              {t("Shiko kombinimet", "See bundles")}
            </Link>
          </p>
        </div>
      </section>

      {/* ── 3. PROOF / RESULTS ──────────────────────────────────────────── */}
      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Rezultatet", "Results")}
            title={t(
              "Çfarë fiton biznesi juaj me EMOR.",
              "What your business gains with EMOR."
            )}
            subtitle={t(
              "Numra realë. Klientë realë. Rezultate reale.",
              "Real numbers. Real clients. Real results."
            )}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {proofCards.map((card, index) => (
              <PremiumCard
                key={card.labelEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex gap-4 px-5 py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.85rem] border border-primary/15 bg-primary/10 text-primary mt-0.5">
                  <card.icon size={18} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[2rem] font-extrabold tracking-[-0.05em] gold-gradient-text leading-none">
                      {card.metric}
                    </span>
                    <span className="text-[0.78rem] font-medium text-white/70">
                      {t(card.labelAl, card.labelEn)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                    {t(card.descAl, card.descEn)}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TRUST — CLIENT QUOTES ────────────────────────────────────── */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Klientët", "Clients")}
            title={t("Fjalë nga klientët tanë.", "Words from our clients.")}
            subtitle={t(
              "Biznese reale nga Kosova. Rezultate reale.",
              "Real businesses from Kosovo. Real results."
            )}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {trustQuotes.map((q, index) => (
              <PremiumCard
                key={q.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col gap-3 px-5 py-5"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: q.stars }).map((_, i) => (
                    <Star key={i} size={13} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-[0.875rem] leading-relaxed text-muted-foreground italic flex-1">
                  "{q.textAl}"
                </p>
                <div>
                  <p className="text-[0.82rem] font-semibold text-white">{q.name}</p>
                  <p className="text-[0.72rem] text-muted-foreground">{q.handle}</p>
                </div>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link to="/clients" className="text-[0.82rem] font-medium text-primary hover:underline">
              {t("Shiko të gjitha vlerësimet", "See all testimonials")} <ArrowRight size={13} className="inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE CTA / CONTACT ────────────────────────────────── */}
      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <PremiumCard
            interactive={false}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={softReveal}
            className="px-5 py-7 md:px-8 md:py-9"
          >
            <div className="panel-grid absolute inset-0 opacity-[0.10]" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="relative">
              <span className="premium-badge mx-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                {t("Fillo sot", "Start today")}
              </span>

              <h2 className="mt-4 text-center text-[1.45rem] font-bold tracking-[-0.035em] text-white md:text-[1.7rem]">
                {t(
                  "Bisedoni me ne tani — zgjidhni mënyrën tuaj.",
                  "Talk to us now — choose your way."
                )}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-center text-[0.875rem] leading-relaxed text-muted-foreground">
                {t(
                  "Pa forma të gjata. Telefononi, shkruani në DM, ose dërgoni email — ju përgjigjemi shpejt.",
                  "No long forms. Call, DM, or email — we reply fast."
                )}
              </p>

              {/* Direct contact grid */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {CONTACT_PHONES.map((phone, i) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center transition hover:border-primary/30 hover:bg-primary/[0.06]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary/20">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.14em] text-primary/70">
                        {t(i === 0 ? "Telefono" : "Telefono", "Call us")}
                      </p>
                      <p className="mt-0.5 text-[0.85rem] font-semibold text-white">{phone}</p>
                    </div>
                  </a>
                ))}

                <a
                  href="https://instagram.com/emor_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center transition hover:border-primary/30 hover:bg-primary/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary/20">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.14em] text-primary/70">
                      {t("DM Instagram", "DM on Instagram")}
                    </p>
                    <p className="mt-0.5 text-[0.85rem] font-semibold text-white">@emor_marketing</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center transition hover:border-primary/30 hover:bg-primary/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.14em] text-primary/70">Email</p>
                    <p className="mt-0.5 text-[0.85rem] font-semibold text-white">emormarketing1@</p>
                  </div>
                </a>
              </div>

              <div className="mt-5 text-center">
                <Link to="/contact" className="btn-secondary inline-flex">
                  {t("Ose plotësoni formularin", "Or fill out the form")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </PremiumCard>
        </div>
      </section>

    </main>
  );
};

export default Index;
