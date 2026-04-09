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
      nameAl: "Start", nameEn: "Start",
      price: "€149", periodAl: "/ muaj", periodEn: "/ month",
      highlight: false,
      toneAl: "Për prezencë bazike por profesionale",
      toneEn: "For basic but professional presence",
      featuresAl: ["Menaxhim bazik i rrjeteve sociale", "8 postime në muaj", "Konsistencë vizuale bazike", "Takim strategjik mujor"],
      featuresEn: ["Basic social media management", "8 posts per month", "Basic visual consistency", "Monthly strategy check-in"],
    },
    {
      nameAl: "Growth", nameEn: "Growth",
      price: "€299", periodAl: "/ muaj", periodEn: "/ month",
      highlight: true,
      toneAl: "Për biznese që duan rritje më të fortë",
      toneEn: "For businesses that want stronger growth",
      featuresAl: ["Më shumë përmbajtje mujore", "Creative direction më i thellë", "Strategji e përmirësuar", "Prani më e fortë", "Mbështetje performancë"],
      featuresEn: ["More monthly content", "Deeper creative direction", "Improved strategy", "Stronger presence", "Performance support"],
    },
    {
      nameAl: "Premium", nameEn: "Premium",
      price: "€499", periodAl: "/ muaj", periodEn: "/ month",
      highlight: false,
      toneAl: "Për marka që duan nivel të plotë premium",
      toneEn: "For brands that want full premium support",
      featuresAl: ["Menaxhim i plotë i përmbajtjes", "Strategji e avancuar", "Mbështetje dizajni premium", "Komunikim prioritar", "Përmirësim i thellë i markës"],
      featuresEn: ["Full content management", "Advanced creative strategy", "Premium design support", "Priority communication", "Deep brand improvement"],
    },
  ];

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Planet tona", "Our plans")}
        title={t(
          "Paketa të qarta për biznese që duan prezencë premium.",
          "Clear packages for businesses that want premium presence."
        )}
        subtitle={t(
          "Çdo plan lëviz markën tuaj përpara me standard më të lartë vizual dhe ekzekutim të organizuar.",
          "Each plan moves your brand forward with higher visual standard and organized execution."
        )}
        stats={[
          { label: t("Fillon nga", "Starts at"), value: "€149" },
          { label: t("Model", "Model"), value: t("Mujor", "Monthly") },
          { label: t("Opsion", "Option"), value: t("Custom", "Custom") },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 xl:grid-cols-3">
            {plans.map((plan, index) => (
              <PremiumCard
                key={plan.nameEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`px-4 py-4 ${
                  plan.highlight ? "border-primary/25 shadow-[0_20px_52px_-36px_rgba(212,177,61,0.45)]" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    <Star size={10} />
                    {t("Më i zgjedhuri", "Most selected")}
                  </div>
                )}

                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                  <Sparkles size={14} />
                </div>
                <h2 className="mt-3 text-[1.1rem] font-bold tracking-[-0.03em] text-white">
                  {t(plan.nameAl, plan.nameEn)}
                </h2>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                  {t(plan.toneAl, plan.toneEn)}
                </p>

                <div className="mt-4 flex items-end gap-1.5">
                  <span className="text-[2rem] font-extrabold tracking-[-0.05em] gold-gradient-text">
                    {plan.price}
                  </span>
                  <span className="pb-0.5 text-[0.78rem] text-muted-foreground">
                    {t(plan.periodAl, plan.periodEn)}
                  </span>
                </div>

                <div className="mt-4 space-y-2 rounded-lg border border-white/8 bg-white/[0.03] p-3">
                  {t(plan.featuresAl.join("|"), plan.featuresEn.join("|"))
                    .split("|")
                    .map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-[0.78rem] text-muted-foreground">
                        <Check size={13} className="mt-0.5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                </div>

                <Link
                  to="/contact"
                  className={plan.highlight ? "btn-primary mt-4 w-full" : "btn-secondary mt-4 w-full"}
                >
                  {t("Fillo tani", "Get started")} <ArrowRight size={14} />
                </Link>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-4">
            <PremiumCard interactive={false} className="px-4 py-4 text-center md:px-5">
              <span className="premium-badge">
                <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(212,177,61,0.8)]" />
                {t("Opsion i personalizuar", "Custom option")}
              </span>
              <h3 className="mt-3 text-[1.2rem] font-bold tracking-[-0.04em] text-white md:text-[1.35rem]">
                {t("Keni nevojë për diçka të personalizuar?", "Need something custom?")}
              </h3>
              <p className="mx-auto mt-2.5 max-w-xl text-[0.82rem] leading-relaxed text-muted-foreground">
                {t(
                  "Nëse projekti juaj kërkon kombinim specifik, ne krijojmë ofertë të përshtatur.",
                  "If your project needs a specific mix of services, we can create a tailored offer."
                )}
              </p>
              <Link to="/contact" className="btn-primary mt-4">
                {t("Kontakto për ofertë", "Contact for custom offer")} <ArrowRight size={14} />
              </Link>
            </PremiumCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
