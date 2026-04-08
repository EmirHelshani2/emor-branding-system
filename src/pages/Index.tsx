import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Clock3,
  Gem,
  Globe,
  Layers3,
  Megaphone,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  PenTool,
  Search,
  Share2,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PremiumCard from "@/components/PremiumCard";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import PerformancePanel from "@/components/PerformancePanel";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const Index = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Share2,
      titleAl: "Menaxhim i rrjeteve sociale",
      titleEn: "Social media management",
      descAl:
        "Sisteme përmbajtjeje që e bëjnë markën tuaj të duket e qartë, premium dhe konsistente në çdo platformë.",
      descEn:
        "Content systems that make your brand feel clear, premium, and consistent across every platform.",
      metricAl: "Kalendari mujor",
      metricEn: "Monthly content system",
      value: "30 ditë",
    },
    {
      icon: Globe,
      titleAl: "Zhvillim websitesh",
      titleEn: "Website development",
      descAl:
        "Faqe të shpejta, elegante dhe të menduara për konvertime, jo vetëm për prezencë.",
      descEn:
        "Fast, elegant websites designed for conversion, not just presence.",
      metricAl: "Fokus performancë",
      metricEn: "Performance focus",
      value: "Core UX",
    },
    {
      icon: Palette,
      titleAl: "Branding vizual",
      titleEn: "Visual branding",
      descAl:
        "Identitet vizual që e pozicionon biznesin tuaj si markë serioze, moderne dhe e besueshme.",
      descEn:
        "Visual identity that positions your business as serious, modern, and trustworthy.",
      metricAl: "Kornizë marke",
      metricEn: "Brand framework",
      value: "360°",
    },
    {
      icon: Megaphone,
      titleAl: "Reklama digjitale",
      titleEn: "Digital advertising",
      descAl:
        "Fushata të strukturuara me mesazh të qartë, targetim strategjik dhe optimizim të vazhdueshëm.",
      descEn:
        "Structured campaigns with clear messaging, strategic targeting, and ongoing optimization.",
      metricAl: "Qasje ROI",
      metricEn: "ROI approach",
      value: "Paid growth",
    },
    {
      icon: Bot,
      titleAl: "Chatbot & AI systems",
      titleEn: "Chatbot & AI systems",
      descAl:
        "Automatizime që përgjigjen më shpejt, filtrojnë lead-et dhe rrisin efikasitetin operativ.",
      descEn:
        "Automations that respond faster, qualify leads, and increase operational efficiency.",
      metricAl: "Përgjigje të shpejta",
      metricEn: "Fast response flow",
      value: "24/7",
    },
    {
      icon: PenTool,
      titleAl: "Creative content direction",
      titleEn: "Creative content direction",
      descAl:
        "Drejtim kreativ që i jep përmbajtjes suaj ritëm, estetikë dhe mesazh që dallohet.",
      descEn:
        "Creative direction that gives your content rhythm, polish, and a message that stands out.",
      metricAl: "Vizual premium",
      metricEn: "Premium visuals",
      value: "Brand-first",
    },
  ];

  const differentiators = [
    {
      icon: Shield,
      titleAl: "Prezencë që ndërton besim",
      titleEn: "Presence that builds trust",
      descAl:
        "Çdo kontakt me markën tuaj ndjehet i rafinuar, i kontrolluar dhe i besueshëm.",
      descEn:
        "Every brand touchpoint feels refined, controlled, and trustworthy.",
    },
    {
      icon: TrendingUp,
      titleAl: "Rritje me strukturë",
      titleEn: "Growth with structure",
      descAl:
        "Ne nuk punojmë me improvizim. Ndërtojmë sistem që matet, optimizohet dhe rritet.",
      descEn:
        "We do not work on improvisation. We build systems that can be measured, optimized, and scaled.",
    },
    {
      icon: MonitorSmartphone,
      titleAl: "Identitet i unifikuar",
      titleEn: "Unified identity",
      descAl:
        "Website, rrjete sociale, reklama dhe përmbajtje flasin me të njëjtin standard premium.",
      descEn:
        "Website, social media, ads, and content all speak with the same premium standard.",
    },
    {
      icon: BrainCircuit,
      titleAl: "Ekzekutim modern",
      titleEn: "Modern execution",
      descAl:
        "Përdorim dizajn, sistemim dhe mjete moderne për ta bërë biznesin tuaj më të mprehtë.",
      descEn:
        "We use design, systems, and modern tooling to make your business sharper.",
    },
  ];

  const process = [
    {
      icon: Search,
      step: "01",
      titleAl: "Audit & pozicionim",
      titleEn: "Audit & positioning",
      descAl:
        "Analizojmë markën, audiencën dhe boshllëqet vizuale që po ju mbajnë prapa.",
      descEn:
        "We analyze your brand, audience, and the visual gaps holding you back.",
    },
    {
      icon: Layers3,
      step: "02",
      titleAl: "Kornizë strategjike",
      titleEn: "Strategic framework",
      descAl:
        "Vendosim drejtimin kreativ, strukturën e përmbajtjes dhe prioritetet e rritjes.",
      descEn:
        "We define the creative direction, content structure, and growth priorities.",
    },
    {
      icon: Sparkles,
      step: "03",
      titleAl: "Ekzekutim premium",
      titleEn: "Premium execution",
      descAl:
        "Ndërtojmë asetet, faqet dhe materialet që e bëjnë markën tuaj të dallohet menjëherë.",
      descEn:
        "We build the assets, pages, and materials that make your brand stand out immediately.",
    },
    {
      icon: BarChart3,
      step: "04",
      titleAl: "Optimizim & shkallëzim",
      titleEn: "Optimization & scale",
      descAl:
        "Më pas matin rezultatet, rregullojmë sistemin dhe rrisim impaktin me qartësi.",
      descEn:
        "Then we measure results, refine the system, and scale impact with clarity.",
    },
  ];

  const premiumSystems = [
    t("Strategji për launch-e të markës", "Launch strategy systems"),
    t("Creative direction për fushata", "Creative direction for campaigns"),
    t("Website funnels me fokus konvertimi", "Conversion-focused website funnels"),
    t("Raportim i qartë mujor", "Clear monthly reporting"),
    t("AI support & lead routing", "AI support & lead routing"),
    t("Përmbajtje që ruan identitetin premium", "Content that protects premium identity"),
  ];

  const heroSignals = [
    {
      labelAl: "Rritje reach",
      labelEn: "Reach growth",
      prefix: "+",
      suffix: "%",
      value: 186,
    },
    {
      labelAl: "Launch sprint",
      labelEn: "Launch sprint",
      value: 4,
      suffix: "w",
    },
    {
      labelAl: "Kohë përgjigje",
      labelEn: "Response time",
      value: 24,
      suffix: "h",
    },
  ];

  const heroChannels = [
    { labelAl: "Creative pulse", labelEn: "Creative pulse", width: "74%" },
    { labelAl: "Lead intent", labelEn: "Lead intent", width: "62%" },
    { labelAl: "Website readiness", labelEn: "Website readiness", width: "88%" },
  ];

  return (
    <main className="overflow-hidden">
      <section className="section-shell relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
        <HeroVideoBackground />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={softReveal}
              className="max-w-3xl"
            >
              <span className="premium-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                {t("EMOR Premium Growth Systems", "EMOR Premium Growth Systems")}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-balance text-white md:text-6xl lg:text-[5.2rem]">
                {t(
                  "I japim biznesit tuaj praninë që duket elitare, bind me qartësi dhe konverton me strategji.",
                  "We give your business a presence that looks elite, persuades with clarity, and converts with strategy."
                )}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t(
                  "Nga branding-u dhe përmbajtja deri te websites dhe reklamat, EMOR ndërton një sistem digjital premium që e bën markën tuaj të ndihet më serioze, më e fortë dhe më e gatshme për rritje.",
                  "From branding and content to websites and advertising, EMOR builds a premium digital system that makes your brand feel more serious, more powerful, and more ready to grow."
                )}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  {t("Fillo projektin", "Start your project")}{" "}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  {t("Shiko shërbimet", "Explore services")}
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div
                    key={signal.labelEn}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <p className="text-[0.72rem] uppercase tracking-[0.24em] text-primary/90">
                      {t(signal.labelAl, signal.labelEn)}
                    </p>
                    <AnimatedCounter
                      value={signal.value}
                      prefix={signal.prefix}
                      suffix={signal.suffix}
                      className="mt-3 block text-3xl font-extrabold tracking-[-0.05em] text-white"
                    />
                  </div>
                ))}
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
                className="overflow-hidden px-6 py-6 md:px-8 md:py-8"
              >
                <div className="panel-grid absolute inset-0 opacity-[0.16]" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="premium-badge">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                        {t("Campaign Pulse", "Campaign Pulse")}
                      </span>
                      <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white md:text-4xl">
                        {t("Command View", "Command View")}
                      </h2>
                    </div>

                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      {t("Live", "Live")}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <p className="text-xs uppercase tracking-[0.26em] text-primary/90">
                        {t("Rritje e sinjalit", "Signal growth")}
                      </p>
                      <AnimatedCounter
                        value={142}
                        prefix="+"
                        suffix="%"
                        className="mt-4 block text-5xl font-extrabold tracking-[-0.07em] gold-gradient-text"
                      />
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {t(
                          "Markat me sistemim më të fortë vizual po marrin më shumë klikime, më shumë kujtesë marke dhe më shumë lead-e me cilësi.",
                          "Brands with stronger visual systems are earning more clicks, stronger recall, and better-quality leads."
                        )}
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-background/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <p className="text-xs uppercase tracking-[0.26em] text-primary/90">
                        {t("Indikatorët", "Indicators")}
                      </p>
                      <div className="mt-4 space-y-4">
                        {heroChannels.map((channel) => (
                          <div key={channel.labelEn}>
                            <div className="mb-2 flex items-center justify-between text-sm">
                              <span className="text-white">
                                {t(channel.labelAl, channel.labelEn)}
                              </span>
                              <span className="text-muted-foreground">
                                {channel.width}
                              </span>
                            </div>
                            <div className="h-2.5 overflow-hidden rounded-full bg-white/6">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-primary to-gold-light shadow-[0_0_18px_rgba(212,177,61,0.24)]"
                                style={{ width: channel.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.15rem] border border-white/10 bg-background/55 px-4 py-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-primary/90">
                        {t("Lead quality", "Lead quality")}
                      </p>
                      <p className="mt-3 text-xl font-bold tracking-[-0.04em] text-white">
                        94/100
                      </p>
                    </div>
                    <div className="rounded-[1.15rem] border border-white/10 bg-background/55 px-4 py-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-primary/90">
                        {t("Creative fit", "Creative fit")}
                      </p>
                      <p className="mt-3 text-xl font-bold tracking-[-0.04em] text-white">
                        9.1/10
                      </p>
                    </div>
                    <div className="rounded-[1.15rem] border border-white/10 bg-background/55 px-4 py-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-primary/90">
                        {t("Reply flow", "Reply flow")}
                      </p>
                      <p className="mt-3 text-xl font-bold tracking-[-0.04em] text-white">
                        &lt; 24h
                      </p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </section>

      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Shërbimet tona", "Our services")}
            title={t(
              "Shërbime të dizajnuara për një markë që duhet të ndihet premium në çdo kontakt.",
              "Services designed for a brand that should feel premium at every touchpoint."
            )}
            subtitle={t(
              "Çdo kartë përfaqëson një pjesë të sistemit EMOR: estetikë e fortë, strukturë e qartë dhe ekzekutim që sjell rezultate.",
              "Each card reflects part of the EMOR system: strong aesthetics, clear structure, and execution that drives results."
            )}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <PremiumCard
                key={service.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="px-6 py-6 md:px-7 md:py-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-primary/15 bg-primary/10 text-primary shadow-[0_0_24px_rgba(212,177,61,0.12)]">
                    <service.icon size={24} />
                  </div>
                  <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                    {service.value}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.04em] text-white">
                  {t(service.titleAl, service.titleEn)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.96rem]">
                  {t(service.descAl, service.descEn)}
                </p>

                <div className="mt-6 rounded-[1.15rem] border border-white/8 bg-background/45 px-4 py-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-primary/90">
                    {t(service.metricAl, service.metricEn)}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {service.value}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                center={false}
                label={t("Growth dashboard", "Growth dashboard")}
                title={t(
                  "Një panel performance që e bën qartë si rritet një markë kur prezenca e saj trajtohet si sistem.",
                  "A performance panel that makes it clear how a brand grows when its presence is treated like a system."
                )}
                subtitle={t(
                  "Kjo është një shtresë e re vizuale e faqes: një snapshot strategjik, elegant dhe bindës që e bën EMOR të ndihet si partner premium, jo si template i zakonshëm.",
                  "This is a new visual layer for the site: a strategic, elegant, persuasive snapshot that makes EMOR feel like a premium partner, not a generic template."
                )}
              />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {differentiators.slice(0, 2).map((item, index) => (
                  <PremiumCard
                    key={item.titleEn}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    className="px-5 py-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-primary/15 bg-primary/10 text-primary">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                          {t(item.titleAl, item.titleEn)}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {t(item.descAl, item.descEn)}
                        </p>
                      </div>
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={softReveal}
            >
              <PerformancePanel />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Pse EMOR", "Why EMOR")}
            title={t(
              "Ne e ndërtojmë imazhin, ritmin dhe sistemin që e bën biznesin tuaj të duket më i madh se dje.",
              "We build the image, rhythm, and system that make your business look stronger than it did yesterday."
            )}
            subtitle={t(
              "Kur estetikës i shtohet strategjia, rezultati nuk është vetëm bukuri. Është besim, qartësi dhe konvertim më i lartë.",
              "When strategy is added to aesthetics, the result is not just beauty. It is trust, clarity, and higher conversion."
            )}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <PremiumCard
                key={item.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="flex h-full flex-col gap-5 px-6 py-6 md:px-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-primary/15 bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {t(item.titleAl, item.titleEn)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.96rem]">
                    {t(item.descAl, item.descEn)}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Si punojmë", "How we work")}
            title={t(
              "Proces i qartë për marka që duan ekzekutim të fortë, jo kaos kreativ.",
              "A clear process for brands that want strong execution, not creative chaos."
            )}
            subtitle={t(
              "Çdo hap është menduar për ta rritur standardin e biznesit tuaj dhe për ta kthyer praninë online në aset real.",
              "Each step is designed to raise the standard of your business and turn your online presence into a real asset."
            )}
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <PremiumCard
                key={step.step}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="h-full px-6 py-6 md:px-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold tracking-[-0.06em] gold-gradient-text">
                    {step.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                    <step.icon size={18} />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white">
                  {t(step.titleAl, step.titleEn)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.96rem]">
                  {t(step.descAl, step.descEn)}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <PremiumCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={softReveal}
              className="px-6 py-6 md:px-8 md:py-8"
            >
              <span className="premium-badge">
                <Gem size={12} />
                {t("Premium systems", "Premium systems")}
              </span>
              <h3 className="mt-6 max-w-xl text-3xl font-bold tracking-[-0.05em] text-white">
                {t(
                  "Përtej postimeve: sisteme që forcojnë imazhin dhe performancën e markës suaj.",
                  "Beyond posting: systems that strengthen your brand image and performance."
                )}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t(
                  "EMOR është më i fortë kur çdo pjesë e prezencës suaj digjitale është duke punuar së bashku. Këto janë shtesat që i japin faqes dhe shërbimit tuaj një ndjesi më të rafinuar dhe më profesionale.",
                  "EMOR is strongest when every piece of your digital presence works together. These are the added layers that make your site and service feel more refined and more professional."
                )}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {premiumSystems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground/90"
                  >
                    <MessagesSquare size={14} className="text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={softReveal}
              className="px-6 py-6 md:px-8 md:py-8"
            >
              <span className="premium-badge">
                <Clock3 size={12} />
                {t("Ready to move", "Ready to move")}
              </span>
              <h3 className="mt-6 max-w-xl text-3xl font-bold tracking-[-0.05em] text-white">
                {t(
                  "A jeni gati ta ktheni praninë tuaj online në avantazh real biznesi?",
                  "Ready to turn your online presence into a real business advantage?"
                )}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t(
                  "Le ta ndërtojmë një sistem që e bën biznesin tuaj të duket premium, të komunikojë më qartë dhe të konvertojë më mirë në çdo kanal.",
                  "Let's build a system that makes your business feel premium, communicate with more clarity, and convert better across every channel."
                )}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-white/10 bg-background/55 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-primary/90">
                    {t("Shërbimi", "Service")}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {t("Paketa të personalizuara", "Tailored packages")}
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-background/55 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-primary/90">
                    {t("Përgjigje", "Reply")}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {t("Brenda 24 orëve", "Within 24 hours")}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  {t("Rezervo një bisedë", "Book a conversation")}{" "}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  {t("Shiko çmimet", "View pricing")}
                </Link>
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
