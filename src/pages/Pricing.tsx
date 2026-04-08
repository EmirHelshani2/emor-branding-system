import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameAl: "Start",
      nameEn: "Start",
      price: "€149",
      periodAl: "/ muaj",
      periodEn: "/ month",
      popular: false,
      featuresAl: [
        "Menaxhim bazik i rrjeteve sociale",
        "8 postime në muaj",
        "Konsistencë vizuale bazike",
        "Takim strategjik mujor",
      ],
      featuresEn: [
        "Basic social media management",
        "8 posts per month",
        "Basic visual consistency",
        "Monthly strategy check-in",
      ],
    },
    {
      nameAl: "Growth",
      nameEn: "Growth",
      price: "€299",
      periodAl: "/ muaj",
      periodEn: "/ month",
      popular: true,
      featuresAl: [
        "Më shumë përmbajtje mujore",
        "Drejtim kreativ më i mirë",
        "Strategji e përmirësuar",
        "Prani më e fortë biznesore",
        "Mbështetje e fokusuar në performancë",
      ],
      featuresEn: [
        "More monthly content",
        "Better creative direction",
        "Improved strategy",
        "Stronger business presence",
        "Performance-focused support",
      ],
    },
    {
      nameAl: "Premium",
      nameEn: "Premium",
      price: "€499",
      periodAl: "/ muaj",
      periodEn: "/ month",
      popular: false,
      featuresAl: [
        "Menaxhim i plotë i përmbajtjes",
        "Strategji e avancuar",
        "Mbështetje dizajni premium",
        "Komunikim prioritar",
        "Përmirësim i thellë i markës dixhitale",
      ],
      featuresEn: [
        "Full content management",
        "Advanced strategy",
        "Premium design support",
        "Priority communication",
        "Deeper digital brand improvement",
      ],
    },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Çmimet", "Pricing")}
            title={t("Planet Tona", "Our Plans")}
            subtitle={t(
              "Zgjidhni planin që i përshtatet biznesit tuaj. Çdo plan përfshin cilësi premium.",
              "Choose the plan that fits your business. Every plan includes premium quality."
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`rounded-2xl p-8 relative ${
                  plan.popular
                    ? "card-glass border-2 border-primary/50 shadow-[0_0_40px_-10px_hsl(44_72%_57%/0.15)]"
                    : "card-glass gold-border-hover"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star size={12} /> {t("Më Popullorja", "Most Popular")}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{t(plan.nameAl, plan.nameEn)}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold gold-gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{t(plan.periodAl, plan.periodEn)}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {(plan.popular
                    ? t(plan.featuresAl.join("|"), plan.featuresEn.join("|"))
                    : t(plan.featuresAl.join("|"), plan.featuresEn.join("|"))
                  )
                    .split("|")
                    .map((f, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                </div>

                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-gold-light"
                      : "border border-border/50 text-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {t("Fillo Tani", "Get Started")}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Custom */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="card-glass rounded-2xl p-8 md:p-10 max-w-2xl mx-auto text-center gold-border-hover"
          >
            <h3 className="text-xl font-bold mb-2">Custom</h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Keni nevojë për diçka të personalizuar? Na kontaktoni për ofertë të përshtatur.",
                "Need something custom? Contact us for tailored pricing."
              )}
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-light transition-colors duration-200 inline-flex items-center gap-2"
            >
              {t("Kontaktoni për ofertë", "Contact for custom pricing")} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
