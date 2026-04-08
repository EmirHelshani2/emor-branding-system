import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import {
  Share2,
  Globe,
  Palette,
  Bot,
  Megaphone,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Search,
  Settings,
  Rocket,
  BarChart3,
  Sparkles,
  Layers,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Share2, al: "Menaxhimi i Rrjeteve Sociale", en: "Social Media Management", descAl: "Krijojmë strategji të fuqishme për rrjetet sociale që rrisin praninë tuaj online.", descEn: "We create powerful social media strategies that grow your online presence." },
    { icon: Globe, al: "Zhvillimi i Uebsajteve", en: "Website Development", descAl: "Uebsajte moderne, të shpejta dhe profesionale që konvertojnë vizitorë në klientë.", descEn: "Modern, fast, and professional websites that convert visitors into clients." },
    { icon: Palette, al: "Dizajn Grafik", en: "Graphic Design", descAl: "Vizuale premium që ndërtojnë identitetin e markës suaj me konsistencë.", descEn: "Premium visuals that build your brand identity with consistency." },
    { icon: Bot, al: "Chatbot AI", en: "AI Chatbots", descAl: "Automatizoni komunikimin me klientët tuaj me inteligjencë artificiale.", descEn: "Automate client communication with artificial intelligence." },
    { icon: Megaphone, al: "Reklama Digjitale", en: "Ads Setup", descAl: "Sisteme reklamash që sjellin rezultate reale dhe kthim investimi.", descEn: "Ad systems that deliver real results and return on investment." },
  ];

  const whyEmor = [
    { icon: Target, al: "Prezantim Premium", en: "Premium Presentation", descAl: "Biznesi juaj duket profesional në çdo pikë kontakti.", descEn: "Your business looks professional at every touchpoint." },
    { icon: TrendingUp, al: "Rritje e Strukturuar", en: "Structured Growth", descAl: "Sisteme të qarta që sjellin rezultate të matshme.", descEn: "Clear systems that deliver measurable results." },
    { icon: Shield, al: "Besueshmëri", en: "Trustworthiness", descAl: "Ndërtojmë besim përmes imazhit dixhital profesional.", descEn: "We build trust through professional digital image." },
    { icon: Zap, al: "Ekzekutim Modern", en: "Modern Execution", descAl: "Zgjidhje bashkëkohore me teknologji të avancuar.", descEn: "Contemporary solutions with advanced technology." },
  ];

  const process = [
    { icon: Search, al: "Analizojmë biznesin tuaj", en: "Analyze your business", numAl: "01", numEn: "01" },
    { icon: Settings, al: "Përmirësojmë strukturën", en: "Improve your structure", numAl: "02", numEn: "02" },
    { icon: Rocket, al: "Ndërtojmë praninë dixhitale", en: "Build digital presence", numAl: "03", numEn: "03" },
    { icon: BarChart3, al: "Rritemi dhe optimizojmë", en: "Grow and optimize", numAl: "04", numEn: "04" },
  ];

  const specialServices = [
    { icon: Sparkles, al: "Krijim përmbajtje të personalizuar", en: "Custom content creation" },
    { icon: Layers, al: "Zgjidhje specifike për industrinë", en: "Industry-specific solutions" },
    { icon: BrainCircuit, al: "Mjete të fuqizuara me AI", en: "AI-powered tools" },
    { icon: TrendingUp, al: "Sisteme rritjeje dixhitale", en: "Digital growth systems" },
    { icon: Target, al: "Përmirësim i markës së personalizuar", en: "Tailored brand improvement" },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-6 block">
              EMOR Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              {t(
                "Biznesi juaj, i ngritur në nivel tjetër.",
                "Your business, upgraded."
              )}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              {t(
                "Ne nuk postojmë vetëm përmbajtje — ne ndërtojmë prezencën, sistemin dhe imazhin digjital të biznesit tuaj.",
                "We don't just post content — we build your digital presence, structure, and business image."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-gold-light transition-colors duration-200 inline-flex items-center gap-2"
              >
                {t("Fillo Tani", "Get Started")} <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="border border-border/50 text-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                {t("Shiko Shërbimet", "View Services")}
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Çfarë bëjmë", "What we do")}
            title={t("Shërbimet Tona", "Our Services")}
            subtitle={t(
              "Zgjidhje digjitale premium që ndihmojnë biznesin tuaj të dallohet.",
              "Premium digital solutions that help your business stand out."
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-glass rounded-xl p-8 gold-border-hover group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t(s.al, s.en)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(s.descAl, s.descEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EMOR */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Pse ne", "Why us")}
            title={t("Pse EMOR?", "Why EMOR?")}
            subtitle={t(
              "Sepse biznesi juaj meriton më shumë se vetëm postime.",
              "Because your business deserves more than just posts."
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyEmor.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-5 p-6 rounded-xl card-glass gold-border-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(item.al, item.en)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(item.descAl, item.descEn)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Procesi ynë", "Our process")}
            title={t("Si punojmë", "How We Work")}
            subtitle={t(
              "Një proces i qartë dhe strategjik për rezultate reale.",
              "A clear and strategic process for real results."
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-8 rounded-xl card-glass gold-border-hover"
              >
                <span className="text-primary font-bold text-3xl mb-4 block gold-gradient-text">
                  {step.numAl}
                </span>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={20} className="text-primary" />
                </div>
                <p className="font-medium text-sm">{t(step.al, step.en)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL SERVICES */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Të veçanta", "Special")}
            title={t("Shërbime Speciale", "Special Services")}
            subtitle={t(
              "Zgjidhje të avancuara për biznese ambicioze.",
              "Advanced solutions for ambitious businesses."
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {specialServices.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-xl card-glass gold-border-hover"
              >
                <s.icon size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium">{t(s.al, s.en)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            label={t("Çmimet", "Pricing")}
            title={t("Planet Tona", "Our Plans")}
            subtitle={t(
              "Zgjidhni planin që i përshtatet biznesit tuaj.",
              "Choose the plan that fits your business."
            )}
          />
          <Link
            to="/pricing"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-gold-light transition-colors duration-200 inline-flex items-center gap-2"
          >
            {t("Shiko Çmimet", "View Pricing")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
