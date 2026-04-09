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
      descAl: "Sisteme përmbajtjeje që e bëjnë markën tuaj të duket e qartë, premium dhe konsistente.",
      descEn: "Content systems that make your brand feel clear, premium, and consistent.",
      metricAl: "Kalendari mujor",
      metricEn: "Monthly content system",
      value: "30 ditë",
    },
    {
      icon: Globe,
      titleAl: "Zhvillim websitesh",
      titleEn: "Website development",
      descAl: "Faqe të shpejta, elegante dhe të menduara për konvertime.",
      descEn: "Fast, elegant websites designed for conversion.",
      metricAl: "Fokus performancë",
      metricEn: "Performance focus",
      value: "Core UX",
    },
    {
      icon: Palette,
      titleAl: "Branding vizual",
      titleEn: "Visual branding",
      descAl: "Identitet vizual që e pozicionon biznesin tuaj si markë serioze dhe moderne.",
      descEn: "Visual identity that positions your business as serious and modern.",
      metricAl: "Kornizë marke",
      metricEn: "Brand framework",
      value: "360°",
    },
    {
      icon: Megaphone,
      titleAl: "Reklama digjitale",
      titleEn: "Digital advertising",
      descAl: "Fushata të strukturuara me mesazh të qartë dhe targetim strategjik.",
      descEn: "Structured campaigns with clear messaging and strategic targeting.",
      metricAl: "Qasje ROI",
      metricEn: "ROI approach",
      value: "Paid growth",
    },
    {
      icon: Bot,
      titleAl: "Chatbot & AI systems",
      titleEn: "Chatbot & AI systems",
      descAl: "Automatizime që përgjigjen më shpejt dhe rrisin efikasitetin operativ.",
      descEn: "Automations that respond faster and increase operational efficiency.",
      metricAl: "Përgjigje të shpejta",
      metricEn: "Fast response flow",
      value: "24/7",
    },
    {
      icon: PenTool,
      titleAl: "Creative content direction",
      titleEn: "Creative content direction",
      descAl: "Drejtim kreativ që i jep përmbajtjes suaj ritëm dhe mesazh që dallohet.",
      descEn: "Creative direction that gives your content rhythm and a message that stands out.",
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
      descAl: "Çdo kontakt me markën tuaj ndjehet i rafinuar dhe i besueshëm.",
      descEn: "Every brand touchpoint feels refined and trustworthy.",
    },
    {
      icon: TrendingUp,
      titleAl: "Rritje me strukturë",
      titleEn: "Growth with structure",
      descAl: "Ndërtojmë sistem që matet, optimizohet dhe rritet.",
      descEn: "We build systems that can be measured, optimized, and scaled.",
    },
    {
      icon: MonitorSmartphone,
      titleAl: "Identitet i unifikuar",
      titleEn: "Unified identity",
      descAl: "Website, rrjete sociale dhe reklama flasin me të njëjtin standard premium.",
      descEn: "Website, social media, and ads all speak with the same premium standard.",
    },
    {
      icon: BrainCircuit,
      titleAl: "Ekzekutim modern",
      titleEn: "Modern execution",
      descAl: "Përdorim dizajn dhe mjete moderne për ta bërë biznesin tuaj më të mprehtë.",
      descEn: "We use design and modern tooling to make your business sharper.",
    },
  ];

  const process = [
    {
      icon: Search,
      step: "01",
      titleAl: "Audit & pozicionim",
      titleEn: "Audit & positioning",
      descAl: "Analizojmë markën, audiencën dhe boshllëqet vizuale.",
      descEn: "We analyze your brand, audience, and visual gaps.",
    },
    {
      icon: Layers3,
      step: "02",
      titleAl: "Kornizë strategjike",
      titleEn: "Strategic framework",
      descAl: "Vendosim drejtimin kreativ dhe prioritetet e rritjes.",
      descEn: "We define the creative direction and growth priorities.",
    },
    {
      icon: Sparkles,
      step: "03",
      titleAl: "Ekzekutim premium",
      titleEn: "Premium execution",
      descAl: "Ndërtojmë asetet dhe materialet që e bëjnë markën të dallohet.",
      descEn: "We build assets and materials that make your brand stand out.",
    },
    {
      icon: BarChart3,
      step: "04",
      titleAl: "Optimizim & shkallëzim",
      titleEn: "Optimization & scale",
      descAl: "Matim rezultatet, rregullojmë dhe rrisim impaktin.",
      descEn: "We measure results, refine, and scale impact.",
    },
  ];

  const premiumSystems = [
    t("Strategji për launch-e të markës", "Launch strategy systems"),
    t("Creative direction për fushata", "Creative direction for campaigns"),
    t("Website funnels me fokus konvertimi", "Conversion-focused website funnels"),
    t("Raportim i qartë mujor", "Clear monthly reporting"),
    t("AI support & lead routing", "AI support & lead routing"),
  ];

  const heroSignals = [
    { labelAl: "Rritje reach", labelEn: "Reach growth", prefix: "+", suffix: "%", value: 186 },
    { labelAl: "Launch sprint", labelEn: "Launch sprint", value: 4, suffix: "w" },
    { labelAl: "Kohë përgjigje", labelEn: "Response time", value: 24, suffix: "h" },
  ];

  const heroChannels = [
    { labelAl: "Creative pulse", labelEn: "Creative pulse", width: "74%" },
    { labelAl: "Lead intent", labelEn: "Lead intent", width: "62%" },
    { labelAl: "Website readiness", labelEn: "Website readiness", width: "88%" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="section-shell relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden pt-4 md:min-h-[calc(100svh-4rem)] md:pt-6">
        <HeroVideoBackground />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid gap-5 py-6 md:py-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={softReveal}
              className="max-w-2xl"
            >
              <span className="premium-badge">
                <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(212,177,61,0.8)]" />
                {t("EMOR Premium Growth Systems", "EMOR Premium Growth Systems")}
              </span>

              <h1 className="mt-3 max-w-3xl text-[1.65rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-balance text-white sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem]">
                {t(
                  "I japim biznesit tuaj praninë që duket elitare, bind me qartësi dhe konverton me strategji.",
                  "We give your business a presence that looks elite, persuades with clarity, and converts with strategy."
                )}
              </h1>

              <p className="mt-3 max-w-xl text-[0.84rem] leading-relaxed text-muted-foreground md:text-[0.88rem]">
                {t(
                  "Nga branding-u dhe përmbajtja deri te websites dhe reklamat, EMOR ndërton një sistem digjital premium që e bën markën tuaj të ndihet më serioze dhe më e gatshme për rritje.",
                  "From branding and content to websites and advertising, EMOR builds a premium digital system that makes your brand feel more serious and ready to grow."
                )}
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  {t("Fillo projektin", "Start your project")} <ArrowRight size={15} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  {t("Shiko shërbimet", "Explore services")}
                </Link>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div
                    key={signal.labelEn}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-primary/90">
                      {t(signal.labelAl, signal.labelEn)}
                    </p>
                    <AnimatedCounter
                      value={signal.value}
                      prefix={signal.prefix}
                      suffix={signal.suffix}
                      className="mt-1.5 block text-[1.35rem] font-extrabold tracking-[-0.05em] text-white"
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
                className="overflow-hidden px-4 py-4 md:px-5 md:py-5"
              >
                <div className="panel-grid absolute inset-0 opacity-[0.12]" />
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="premium-badge">
                        <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(212,177,61,0.8)]" />
                        {t("Campaign Pulse", "Campaign Pulse")}
                      </span>
                      <h2 className="mt-3 text-[1.25rem] font-bold tracking-[-0.04em] text-white md:text-[1.4rem]">
                        {t("Command View", "Command View")}
                      </h2>
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary">
                      {t("Live", "Live")}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2.5 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
                      <p className="text-[0.6rem] uppercase tracking-[0.24em] text-primary/90">
                        {t("Rritje e sinjalit", "Signal growth")}
                      </p>
                      <AnimatedCounter
                        value={142}
                        prefix="+"
                        suffix="%"
                        className="mt-2 block text-[1.85rem] font-extrabold tracking-[-0.06em] gold-gradient-text"
                      />
                      <p className="mt-2 max-w-sm text-[0.78rem] leading-relaxed text-muted-foreground">
                        {t(
                          "Markat me sistemim më të fortë vizual po marrin më shumë klikime dhe lead-e me cilësi.",
                          "Brands with stronger visual systems are earning more clicks and better-quality leads."
                        )}
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/8 bg-background/50 p-3">
                      <p className="text-[0.6rem] uppercase tracking-[0.24em] text-primary/90">
                        {t("Indikatorët", "Indicators")}
                      </p>
                      <div className="mt-2.5 space-y-2.5">
                        {heroChannels.map((channel) => (
                          <div key={channel.labelEn}>
                            <div className="mb-1 flex items-center justify-between text-[0.78rem]">
                              <span className="text-white">{t(channel.labelAl, channel.labelEn)}</span>
                              <span className="text-muted-foreground">{channel.width}</span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-primary to-gold-light shadow-[0_0_12px_rgba(212,177,61,0.2)]"
                                style={{ width: channel.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {[
                      { label: t("Lead quality", "Lead quality"), val: "94/100" },
                      { label: t("Creative fit", "Creative fit"), val: "9.1/10" },
                      { label: t("Reply flow", "Reply flow"), val: "< 24h" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg border border-white/8 bg-background/50 px-3 py-2.5">
                        <p className="text-[0.6rem] uppercase tracking-[0.18em] text-primary/90">{item.label}</p>
                        <p className="mt-1.5 text-[0.92rem] font-bold tracking-[-0.03em] text-white">{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Services */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Shërbimet tona", "Our services")}
            title={t(
              "Shërbime të dizajnuara për një markë që duhet të ndihet premium në çdo kontakt.",
              "Services designed for a brand that should feel premium at every touchpoint."
            )}
            subtitle={t(
              "Çdo kartë përfaqëson një pjesë të sistemit EMOR: estetikë, strukturë dhe ekzekutim.",
              "Each card reflects part of the EMOR system: aesthetics, structure, and execution."
            )}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <PremiumCard
                key={service.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                    <service.icon size={16} />
                  </div>
                  <span className="rounded-full border border-primary/15 bg-primary/10 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {service.value}
                  </span>
                </div>

                <h3 className="mt-3 text-[0.95rem] font-bold tracking-[-0.03em] text-white">
                  {t(service.titleAl, service.titleEn)}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                  {t(service.descAl, service.descEn)}
                </p>

                <div className="mt-3 rounded-lg border border-white/6 bg-background/40 px-3 py-2.5">
                  <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                    {t(service.metricAl, service.metricEn)}
                  </p>
                  <p className="mt-1 text-[0.8rem] font-medium text-white">
                    {service.value}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Dashboard */}
      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                center={false}
                label={t("Growth dashboard", "Growth dashboard")}
                title={t(
                  "Një panel performance që tregon si rritet marka kur prezenca trajtohet si sistem.",
                  "A performance panel showing how a brand grows when presence is treated as a system."
                )}
                subtitle={t(
                  "Një snapshot strategjik, elegant dhe bindës që e bën EMOR të ndihet si partner premium.",
                  "A strategic, elegant snapshot that makes EMOR feel like a premium partner."
                )}
              />

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {differentiators.slice(0, 2).map((item, index) => (
                  <PremiumCard
                    key={item.titleEn}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    className="px-3.5 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                        <item.icon size={14} />
                      </div>
                      <div>
                        <h3 className="text-[0.88rem] font-semibold tracking-[-0.02em] text-white">
                          {t(item.titleAl, item.titleEn)}
                        </h3>
                        <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground">
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

      {/* Why EMOR */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Pse EMOR", "Why EMOR")}
            title={t(
              "Ndërtojmë imazhin, ritmin dhe sistemin që e bën biznesin tuaj të duket më i madh.",
              "We build the image, rhythm, and system that make your business look stronger."
            )}
            subtitle={t(
              "Kur estetikës i shtohet strategjia, rezultati është besim, qartësi dhe konvertim më i lartë.",
              "When strategy is added to aesthetics, the result is trust, clarity, and higher conversion."
            )}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <PremiumCard
                key={item.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="flex h-full flex-col gap-3 px-4 py-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                  <item.icon size={15} />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-semibold tracking-[-0.02em] text-white">
                    {t(item.titleAl, item.titleEn)}
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                    {t(item.descAl, item.descEn)}
                  </p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-shell section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Si punojmë", "How we work")}
            title={t(
              "Proces i qartë për marka që duan ekzekutim të fortë.",
              "A clear process for brands that want strong execution."
            )}
            subtitle={t(
              "Çdo hap rrit standardin e biznesit tuaj dhe e kthen praninë online në aset real.",
              "Each step raises your business standard and turns your online presence into a real asset."
            )}
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {process.map((step, index) => (
              <PremiumCard
                key={step.step}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="h-full px-4 py-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[1.4rem] font-extrabold tracking-[-0.05em] gold-gradient-text">
                    {step.step}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                    <step.icon size={14} />
                  </div>
                </div>

                <h3 className="mt-4 text-[0.88rem] font-semibold tracking-[-0.02em] text-white">
                  {t(step.titleAl, step.titleEn)}
                </h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                  {t(step.descAl, step.descEn)}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Systems + CTA */}
      <section className="section-shell section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <PremiumCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={softReveal}
              className="px-4 py-4 md:px-5 md:py-5"
            >
              <span className="premium-badge">
                <Gem size={10} />
                {t("Premium systems", "Premium systems")}
              </span>
              <h3 className="mt-3 max-w-lg text-[1.2rem] font-bold tracking-[-0.04em] text-white md:text-[1.35rem]">
                {t(
                  "Përtej postimeve: sisteme që forcojnë imazhin dhe performancën e markës.",
                  "Beyond posting: systems that strengthen your brand image and performance."
                )}
              </h3>
              <p className="mt-2.5 max-w-lg text-[0.82rem] leading-relaxed text-muted-foreground">
                {t(
                  "EMOR është më i fortë kur çdo pjesë e prezencës suaj digjitale punon së bashku.",
                  "EMOR is strongest when every piece of your digital presence works together."
                )}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {premiumSystems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[0.76rem] text-foreground/85"
                  >
                    <MessagesSquare size={11} className="text-primary" />
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
              className="px-4 py-4 md:px-5 md:py-5"
            >
              <span className="premium-badge">
                <Clock3 size={10} />
                {t("Ready to move", "Ready to move")}
              </span>
              <h3 className="mt-3 max-w-lg text-[1.2rem] font-bold tracking-[-0.04em] text-white md:text-[1.35rem]">
                {t(
                  "A jeni gati ta ktheni praninë tuaj online në avantazh real biznesi?",
                  "Ready to turn your online presence into a real business advantage?"
                )}
              </h3>
              <p className="mt-2.5 max-w-lg text-[0.82rem] leading-relaxed text-muted-foreground">
                {t(
                  "Le ta ndërtojmë një sistem që e bën biznesin tuaj të duket premium dhe të konvertojë më mirë.",
                  "Let's build a system that makes your business feel premium and convert better."
                )}
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-white/8 bg-background/50 p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                    {t("Shërbimi", "Service")}
                  </p>
                  <p className="mt-1.5 text-[0.84rem] font-semibold text-white">
                    {t("Paketa të personalizuara", "Tailored packages")}
                  </p>
                </div>
                <div className="rounded-lg border border-white/8 bg-background/50 p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                    {t("Përgjigje", "Reply")}
                  </p>
                  <p className="mt-1.5 text-[0.84rem] font-semibold text-white">
                    {t("Brenda 24 orëve", "Within 24 hours")}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  {t("Rezervo një bisedë", "Book a conversation")} <ArrowRight size={15} />
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
