import { ArrowUpRight, BarChart3, Globe, Megaphone, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      categoryAl: "Branding", categoryEn: "Branding",
      titleAl: "Restorant premium me identitet të ri vizual",
      titleEn: "Premium restaurant with a refreshed visual identity",
      descAl: "Rikonceptim i plotë i markës me tone më elegante dhe vizuale sociale premium.",
      descEn: "A full brand refresh with elegant tones and premium social visuals.",
      resultValue: "+41% reach",
      icon: Sparkles,
    },
    {
      categoryAl: "Website", categoryEn: "Website",
      titleAl: "Website premium për e-commerce",
      titleEn: "Premium website for e-commerce",
      descAl: "Faqe me fokus në besim, shpejtësi dhe strukturë blerjeje më të pastër.",
      descEn: "Website built with focus on trust, speed, and a cleaner purchase journey.",
      resultValue: "Higher conversion flow",
      icon: Globe,
    },
    {
      categoryAl: "Campaign", categoryEn: "Campaign",
      titleAl: "Fushatë digjitale për startup teknologjik",
      titleEn: "Digital campaign for a tech startup",
      descAl: "Mesazh më i qartë, creative më i fortë dhe optimizim i vazhdueshëm.",
      descEn: "Clearer messaging, stronger creative, and ongoing optimization.",
      resultValue: "+186% lead signal",
      icon: Megaphone,
    },
    {
      categoryAl: "Social", categoryEn: "Social",
      titleAl: "Prani sociale për klinikë dentare",
      titleEn: "Social presence for a dental clinic",
      descAl: "Sistem postimesh që rriti besueshmërinë dhe e bëri klinikën më moderne.",
      descEn: "Content system that increased credibility and made the clinic feel more modern.",
      resultValue: "Stronger trust perception",
      icon: BarChart3,
    },
  ];

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Punët tona", "Our work")}
        title={t(
          "Projekte ku branding-u, struktura dhe prezantimi punuan së bashku.",
          "Projects where branding, structure, and presentation worked together."
        )}
        subtitle={t(
          "Shembuj se si marka ndihet më e fortë kur sistemi digjital është i kuruar mirë.",
          "Examples of how a brand feels stronger when its digital system is carefully curated."
        )}
        stats={[
          { label: t("Lloje", "Types"), value: t("Brand, web, ads", "Brand, web, ads") },
          { label: t("Qasje", "Approach"), value: t("Case-led", "Case-led") },
          { label: t("Ndjesi", "Feel"), value: t("Premium", "Premium") },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <PremiumCard
                key={project.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="premium-badge">
                    <project.icon size={10} />
                    {t(project.categoryAl, project.categoryEn)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.76rem] font-medium text-primary">
                    <ArrowUpRight size={13} />
                    {t("Case snapshot", "Case snapshot")}
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-primary/10 bg-[radial-gradient(circle_at_top_right,rgba(212,177,61,0.08),transparent_26%)] p-4">
                  <div className="panel-grid h-24 rounded-lg border border-white/8 bg-background/50" />
                </div>

                <h2 className="mt-4 text-[1.05rem] font-bold tracking-[-0.03em] text-white">
                  {t(project.titleAl, project.titleEn)}
                </h2>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                  {t(project.descAl, project.descEn)}
                </p>

                <div className="mt-3 rounded-lg border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                    {t("Rezultat", "Result")}
                  </p>
                  <p className="mt-1.5 text-[0.84rem] font-semibold text-white">{project.resultValue}</p>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
