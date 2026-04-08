import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameAl: "Start",
      nameEn: "Start",
      price: "€149",
      periodAl: "/ muaj",
      periodEn: "/ month",
      highlight: false,
      toneAl: "Për prezencë bazike por profesionale",
      toneEn: "For basic but professional presence",
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
      highlight: true,
      toneAl: "Për biznese që duan rritje më të fortë",
      toneEn: "For businesses that want stronger growth",
      featuresAl: [
        "Më shumë përmbajtje mujore",
        "Creative direction më i thellë",
        "Strategji e përmirësuar",
        "Prani më e fortë biznesore",
        "Mbështetje e fokusuar në performancë",
      ],
      featuresEn: [
        "More monthly content",
        "Deeper creative direction",
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
      highlight: false,
      toneAl: "Për marka që duan nivel të plotë premium",
      toneEn: "For brands that want full premium level support",
      featuresAl: [
        "Menaxhim i plotë i përmbajtjes",
        "Strategji e avancuar dhe kreative",
        "Mbështetje dizajni premium",
        "Komunikim prioritar",
        "Përmirësim i thellë i markës digjitale",
      ],
      featuresEn: [
        "Full content management",
        "Advanced creative strategy",
        "Premium design support",
        "Priority communication",
        "Deep digital brand improvement",
      ],
    },
  ];

  return (
    <main className="pb-20 md:pb-24">
      <PageHero
        label={t("Planet tona", "Our plans")}
        title={t(
          "Paketa të qarta për biznese që duan prezencë premium dhe rritje të qëndrueshme.",
          "Clear packages for businesses that want premium presence and steady growth."
        )}
        subtitle={t(
          "Çdo plan është menduar që ta lëvizë markën tuaj përpara me standard më të lartë vizual, komunikim më të qartë dhe ekzekutim më të organizuar.",
          "Each plan is designed to move your brand forward with a higher visual standard, clearer communication, and more organized execution."
        )}
        stats={[
          {
            label: t("Fillon nga", "Starts at"),
            value: "€149",
          },
          {
            label: t("Model", "Model"),
            value: t("Mujor", "Monthly"),
          },
          {
            label: t("Opsion", "Option"),
            value: t("Custom", "Custom"),
          },
        ]}
      />

      <section className="section-padding pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-5 xl:grid-cols-3">
            {plans.map((plan, index) => (
              <PremiumCard
                key={plan.nameEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`px-5 py-5 md:px-6 md:py-6 ${
                  plan.highlight
                    ? "border-primary/30 shadow-[0_26px_70px_-42px_rgba(212,177,61,0.55)]"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    <Star size={12} />
                    {t("Më i zgjedhuri", "Most selected")}
                  </div>
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-primary/15 bg-primary/10 text-primary">
                  <Sparkles size={18} />
                </div>
                <h2 className="mt-5 text-[1.45rem] font-bold tracking-[-0.04em] text-white">
                  {t(plan.nameAl, plan.nameEn)}
                </h2>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {t(plan.toneAl, plan.toneEn)}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-[2.75rem] font-extrabold tracking-[-0.06em] gold-gradient-text md:text-[3rem]">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-[0.9rem] text-muted-foreground">
                    {t(plan.periodAl, plan.periodEn)}
                  </span>
                </div>

                <div className="mt-6 space-y-2.5 rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4">
                  {t(plan.featuresAl.join("|"), plan.featuresEn.join("|"))
                    .split("|")
                    .map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-[0.92rem] text-muted-foreground"
                      >
                        <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                </div>

                <Link
                  to="/contact"
                  className={
                    plan.highlight
                      ? "btn-primary mt-6 w-full"
                      : "btn-secondary mt-6 w-full"
                  }
                >
                  {t("Fillo tani", "Get started")} <ArrowRight size={16} />
                </Link>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-6">
            <PremiumCard interactive={false} className="px-5 py-5 text-center md:px-6 md:py-6">
              <span className="premium-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                {t("Opsion i personalizuar", "Custom option")}
              </span>
              <h3 className="mt-5 text-[1.75rem] font-bold tracking-[-0.045em] text-white md:text-[2.05rem]">
                {t("Keni nevojë për diçka të personalizuar?", "Need something custom?")}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[0.94rem] leading-relaxed text-muted-foreground md:text-[0.98rem]">
                {t(
                  "Nëse projekti juaj kërkon kombinim specifik të shërbimeve, ne mund të krijojmë ofertë të përshtatur sipas objektivave të markës suaj.",
                  "If your project needs a specific mix of services, we can create a tailored offer based on your brand goals."
                )}
              </p>
              <Link to="/contact" className="btn-primary mt-6">
                {t("Kontakto për ofertë", "Contact for custom offer")}{" "}
                <ArrowRight size={16} />
              </Link>
            </PremiumCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
