import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Globe,
  Package,
  Share2,
  Star,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PremiumCard from "@/components/PremiumCard";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const outcomes = [
  {
    icon: Share2,
    serviceAl: "Social Media Management",
    serviceEn: "Social Media Management",
    outcomeAl: "Më shumë dukshmëri",
    outcomeEn: "More visibility",
    descAl: "Postime të rregullta, stories dhe hashtags mbajnë markën tuaj aktive dhe të dukshme çdo ditë.",
    descEn: "Regular posts, stories, and hashtags keep your brand active and visible every day.",
  },
  {
    icon: Globe,
    serviceAl: "Website Development",
    serviceEn: "Website Development",
    outcomeAl: "Më shumë besim",
    outcomeEn: "More trust",
    descAl: "Website profesionale e prezanton biznesin tuaj me seriozitet dhe e bën të lehtë kontaktin.",
    descEn: "A professional website presents your business with credibility and makes it easy to contact you.",
  },
  {
    icon: Bot,
    serviceAl: "AI Chatbots",
    serviceEn: "AI Chatbots",
    outcomeAl: "Përgjigje 24/7",
    outcomeEn: "Replies 24/7",
    descAl: "Chatbot AI i përgjigjet çdo mesazhi automatikisht — pa vonesa, pa klientë të humbur.",
    descEn: "An AI chatbot replies to every message automatically — no delays, no missed customers.",
  },
  {
    icon: Package,
    serviceAl: "Të gjitha bashkë",
    serviceEn: "All combined",
    outcomeAl: "Rritje e fortë online",
    outcomeEn: "Stronger online growth",
    descAl: "Bashkimi i shërbimeve ndërton prani digjitale të plotë — social, website dhe AI në një sistem.",
    descEn: "Combining services builds a complete digital presence — social, website, and AI in one system.",
  },
];

const socialPlans = [
  {
    nameEn: "Basic",
    nameAl: "Basic",
    firstMonth: "€49",
    monthly: "€69.99",
    toneEn: "Start with a consistent, professional presence.",
    toneAl: "Fillo me prani konsistente dhe profesionale.",
    featuresEn: ["3 posts/week", "3 stories/week", "Trending hashtags", "Basic guidance", "Ads guidance", "Monthly report"],
    featuresAl: ["3 postime/javë", "3 stories/javë", "Hashtags trending", "Guidancë bazike", "Guidancë reklamash", "Raport mujor"],
    highlight: false,
  },
  {
    nameEn: "Standard",
    nameAl: "Standard",
    firstMonth: "€79",
    monthly: "€129.99",
    toneEn: "More content, better visuals, and animation videos.",
    toneAl: "Më shumë përmbajtje, vizuale dhe video animacioni.",
    featuresEn: ["Profile cleanup", "4 posts/week", "4 stories/week", "2 animation videos", "Ads guidance", "Monthly report"],
    featuresAl: ["Rregullim profili", "4 postime/javë", "4 stories/javë", "2 video animacioni", "Guidancë reklamash", "Raport mujor"],
    highlight: true,
  },
  {
    nameEn: "Premium (Ads)",
    nameAl: "Premium (Ads)",
    firstMonth: "€229",
    monthly: "€299.99",
    toneEn: "Full management — ads, daily stories, TikTok, and DM replies.",
    toneAl: "Menaxhim i plotë — reklama, stories çdo ditë, TikTok dhe DM.",
    featuresEn: ["IG, FB & TikTok Ads", "5 posts/week", "Daily stories", "5 animation videos", "DM replies", "Full content plan"],
    featuresAl: ["Reklama IG, FB & TikTok", "5 postime/javë", "Stories çdo ditë", "5 video animacioni", "Përgjigje DM", "Plan i plotë content"],
    highlight: false,
  },
];

const combos = [
  {
    nameEn: "Social + Simple Website",
    nameAl: "Social + Website e Thjeshtë",
    oneTime: "€39.99",
    monthly: "€69.99",
    toneEn: "Social media management plus a one-page website.",
    toneAl: "Menaxhim rrjetesh plus website një faqesh.",
    linesEn: ["3 posts/week + 3 stories/week", "Trending hashtags + monthly report", "One-page website with contact form"],
    linesAl: ["3 postime/javë + 3 stories/javë", "Hashtags trending + raport mujor", "Website një faqesh me kontakt"],
    badge: "Popular",
  },
  {
    nameEn: "Social + Custom Website + AI",
    nameAl: "Social + Website Custom + AI",
    oneTime: "€249.99",
    monthly: "€89.99",
    toneEn: "Complete digital package — social, website, and AI chatbot.",
    toneAl: "Paketë e plotë — social, website dhe AI chatbot.",
    linesEn: ["Profile cleanup + 4 posts/week", "Fully custom multi-page website", "AI chatbot on your website"],
    linesAl: ["Rregullim profili + 4 postime/javë", "Website custom shumë faqesh", "AI chatbot në website-in tuaj"],
    badge: "Best Value",
  },
  {
    nameEn: "Simple Website + AI Chatbot",
    nameAl: "Website e Thjeshtë + AI Chatbot",
    oneTime: "€109.99",
    monthly: "€29.99",
    toneEn: "A simple website with an AI chatbot for visitor messages.",
    toneAl: "Website e thjeshtë me chatbot AI për mesazhet e vizitorëve.",
    linesEn: ["One-page website", "AI chatbot on your website", "AI or human replies"],
    linesAl: ["Website një faqesh", "AI chatbot në website", "Përgjigje AI ose njeri"],
    badge: null,
  },
  {
    nameEn: "Social + AI Chatbot (1 Platform)",
    nameAl: "Social + AI Chatbot (1 Platformë)",
    oneTime: null,
    monthly: "€119.99",
    toneEn: "Social media management with an AI chatbot on one platform.",
    toneAl: "Menaxhim rrjetesh me chatbot AI në një platformë.",
    linesEn: ["3 posts/week + 3 stories/week", "Trending hashtags + monthly report", "AI chatbot on one platform"],
    linesAl: ["3 postime/javë + 3 stories/javë", "Hashtags trending + raport mujor", "AI chatbot në një platformë"],
    badge: null,
  },
];

const Index = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="overflow-hidden">
      {/* HERO */}
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

            <motion.div
              initial="hidden"
              animate="visible"
              variants={softReveal}
              transition={{ delay: 0.15 }}
            >
              <PremiumCard
                interactive={false}
                className="overflow-hidden px-5 py-5 md:px-6 md:py-6"
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
                      },
                      {
                        icon: Globe,
                        labelAl: "Website Development",
                        labelEn: "Website Development",
                        priceAl: "nga €49.99 njëherë",
                        priceEn: "from €49.99 one-time",
                      },
                      {
                        icon: Bot,
                        labelAl: "AI Chatbots",
                        labelEn: "AI Chatbots",
                        priceAl: "nga €59.99 njëherë",
                        priceEn: "from €59.99 one-time",
                      },
                    ].map((item) => (
                      <div
                        key={item.labelEn}
                        className="flex items-center justify-between gap-3 rounded-[0.85rem] border border-white/8 bg-white/[0.025] px-3.5 py-2.5"
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
                      </div>
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
                        {t("Standard", "Standard")}
                      </p>
                      <p className="mt-1 text-[0.88rem] font-bold text-white">Premium</p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </section>

      {/* CORE SERVICES */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Shërbimet tona", "Our services")}
            title={t("Tre shërbime. Një ekip. Rezultate reale.", "Three services. One team. Real results.")}
            subtitle={t(
              "Zgjidhni çfarë ju nevojitet — ose kombinojini për rezultate më të mira.",
              "Choose what you need — or combine them for even better results."
            )}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Share2,
                titleAl: "Social Media Management",
                titleEn: "Social Media Management",
                descAl: "Menaxhojmë Instagram & Facebook — postime, stories, hashtags dhe raport mujor. Konsistent, profesional, çdo muaj.",
                descEn: "We manage your Instagram & Facebook — posts, stories, hashtags, and a monthly report. Consistent and professional every month.",
                priceAl: "Nga €69.99/muaj",
                priceEn: "From €69.99/month",
                link: "/pricing",
              },
              {
                icon: Globe,
                titleAl: "Website Development",
                titleEn: "Website Development",
                descAl: "Website e pastër dhe e shpejtë që prezanton biznesin tuaj dhe ndihmon klientët të ju gjejnë dhe kontaktojnë.",
                descEn: "A clean, fast website that presents your business and makes it easy for customers to find and contact you.",
                priceAl: "Nga €49.99 njëherë",
                priceEn: "From €49.99 one-time",
                link: "/pricing",
              },
              {
                icon: Bot,
                titleAl: "AI Chatbots",
                titleEn: "AI Chatbots",
                descAl: "Përgjigje automatike 24/7 në Instagram, Facebook ose website-in tuaj. Klientët flasin me AI ose me njeri.",
                descEn: "Automated 24/7 replies on Instagram, Facebook, or your website. Customers talk to AI or a human.",
                priceAl: "Nga €59.99 njëherë",
                priceEn: "From €59.99 one-time",
                link: "/pricing",
              },
            ].map((service, index) => (
              <PremiumCard
                key={service.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col px-5 py-5"
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
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[0.82rem] font-semibold text-primary">
                    {t(service.priceAl, service.priceEn)}
                  </span>
                  <Link
                    to={service.link}
                    className="text-[0.8rem] font-medium text-muted-foreground transition hover:text-primary flex items-center gap-1"
                  >
                    {t("Detaje", "Details")} <ArrowRight size={13} />
                  </Link>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA PACKAGES */}
      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Planet e Social Media", "Social Media Plans")}
            title={t("Paketa të qarta. Çmime reale.", "Clear packages. Real prices.")}
            subtitle={t(
              "Muaji i parë me çmim special — pastaj tarifa mujore standarde.",
              "First month at a special rate — then the standard monthly price."
            )}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {socialPlans.map((plan, index) => (
              <PremiumCard
                key={plan.nameEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`flex flex-col px-5 py-5 ${
                  plan.highlight
                    ? "border-primary/30 shadow-[0_20px_60px_-36px_rgba(212,177,61,0.5)]"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-3.5 top-3.5 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    <Star size={10} />
                    {t("Më i zgjedhuri", "Most popular")}
                  </div>
                )}

                <h3 className="text-[1rem] font-bold text-white">
                  {t(plan.nameAl, plan.nameEn)}
                </h3>
                <p className="mt-1 text-[0.82rem] text-muted-foreground">
                  {t(plan.toneAl, plan.toneEn)}
                </p>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-[1.85rem] font-extrabold tracking-[-0.05em] gold-gradient-text">
                    {plan.monthly}
                  </span>
                  <span className="text-[0.8rem] text-muted-foreground">/month</span>
                </div>
                <p className="text-[0.78rem] text-primary/70">
                  {t("Muaji i parë:", "First month:")} <span className="font-semibold text-primary">{plan.firstMonth}</span>
                </p>

                <div className="mt-4 flex-1 space-y-2 rounded-xl border border-white/8 bg-white/[0.025] p-3.5">
                  {(lang === "al" ? plan.featuresAl : plan.featuresEn).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[0.82rem] text-muted-foreground">
                      <Check size={13} className="shrink-0 text-primary" />
                      {f}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={plan.highlight ? "btn-primary mt-4 w-full !text-[0.875rem]" : "btn-secondary mt-4 w-full !text-[0.875rem]"}
                >
                  {t("Fillo tani", "Get started")} <ArrowRight size={14} />
                </Link>
              </PremiumCard>
            ))}
          </div>

          <p className="mt-5 text-center text-[0.82rem] text-muted-foreground">
            {t(
              "Shikoni të gjitha paketat (Website, AI Chatbot, Combo) →",
              "See all packages (Website, AI Chatbot, Combos) →"
            )}{" "}
            <Link to="/pricing" className="font-medium text-primary hover:underline">
              {t("Shiko paketat", "View all packages")}
            </Link>
          </p>
        </div>
      </section>

      {/* COMBO OFFERS */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Oferta të kombinuara", "Combo Offers")}
            title={t("Kurseni më shumë kur kombinoni.", "Save more when you bundle.")}
            subtitle={t(
              "Paketa kombinuese që përfshijnë gjithçka që i nevojitet biznesit tuaj.",
              "Bundles that include everything your business needs in one package."
            )}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {combos.map((combo, index) => (
              <PremiumCard
                key={combo.nameEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`flex flex-col px-5 py-5 ${
                  combo.badge === "Best Value"
                    ? "border-primary/25 shadow-[0_16px_48px_-28px_rgba(212,177,61,0.4)]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[0.75rem] border border-primary/15 bg-primary/10 text-primary">
                    <Package size={16} />
                  </div>
                  {combo.badge && (
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      {combo.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-[0.95rem] font-bold tracking-[-0.02em] text-white">
                  {t(combo.nameAl, combo.nameEn)}
                </h3>
                <p className="mt-1 text-[0.82rem] text-muted-foreground">
                  {t(combo.toneAl, combo.toneEn)}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  {combo.oneTime && (
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.12em] text-primary/70">
                        {t("Njëherë", "One-time")}
                      </p>
                      <p className="text-[1.25rem] font-extrabold tracking-[-0.04em] gold-gradient-text">
                        {combo.oneTime}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.12em] text-primary/70">
                      {t("Mujor", "Monthly")}
                    </p>
                    <p className="text-[1.25rem] font-extrabold tracking-[-0.04em] text-white">
                      {combo.monthly}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex-1 space-y-1.5">
                  {(lang === "al" ? combo.linesAl : combo.linesEn).map((line) => (
                    <div key={line} className="flex items-center gap-2 text-[0.8rem] text-muted-foreground">
                      <Zap size={11} className="shrink-0 text-primary/70" />
                      {line}
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-secondary mt-4 w-full !text-[0.875rem]">
                  {t("Fillo tani", "Get started")} <ArrowRight size={14} />
                </Link>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU ACHIEVE WITH EMOR */}
      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Rezultatet", "Results")}
            title={t(
              "Çfarë fiton biznesi juaj me EMOR.",
              "What your business gains with EMOR."
            )}
            subtitle={t(
              "Çdo shërbim ka një qëllim të qartë. Ja çfarë ndodh kur punoni me ne.",
              "Every service has a clear purpose. Here is what happens when you work with us."
            )}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((item, index) => (
              <PremiumCard
                key={item.outcomeEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col px-5 py-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.75rem] border border-primary/15 bg-primary/10 text-primary">
                    <item.icon size={16} />
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-primary/75">
                    {t(item.serviceAl, item.serviceEn)}
                  </span>
                  <ArrowRight size={13} className="ml-auto shrink-0 text-white/15" />
                </div>

                <h3 className="mt-4 text-[1.3rem] font-bold tracking-[-0.035em] text-white">
                  {t(item.outcomeAl, item.outcomeEn)}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {t(item.descAl, item.descEn)}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <PremiumCard
            interactive={false}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={softReveal}
            className="px-6 py-8 text-center md:px-10 md:py-10"
          >
            <div className="panel-grid absolute inset-0 opacity-[0.12]" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="relative">
              <span className="premium-badge mx-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                {t("Gati të filloni?", "Ready to start?")}
              </span>
              <h2 className="mt-4 text-[1.5rem] font-bold tracking-[-0.035em] text-white md:text-[1.75rem]">
                {t(
                  "Rritni biznesin tuaj online — sot.",
                  "Grow your business online — starting today."
                )}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[0.875rem] leading-relaxed text-muted-foreground">
                {t(
                  "Na tregoni çfarë ju nevojitet. Ju përgjigjemi brenda 24 orëve.",
                  "Tell us what you need. We will get back to you within 24 hours."
                )}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  {t("Fillo tani", "Get started")} <ArrowRight size={16} />
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  {t("Shiko paketat", "View packages")}
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
