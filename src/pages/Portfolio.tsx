import { ArrowUpRight, BarChart3, Globe, Megaphone, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      categoryAl: "Branding",
      categoryEn: "Branding",
      titleAl: "Restorant premium me identitet të ri vizual",
      titleEn: "Premium restaurant with a refreshed visual identity",
      descAl:
        "Rikonceptim i plotë i markës me tone më elegante, menu të strukturuar dhe vizuale sociale që e ngritën perceptimin e biznesit.",
      descEn:
        "A full brand refresh with more elegant tones, structured menu design, and social visuals that elevated business perception.",
      resultAl: "Rezultat",
      resultEn: "Result",
      resultValue: "+41% reach",
      icon: Sparkles,
    },
    {
      categoryAl: "Website",
      categoryEn: "Website",
      titleAl: "Website premium për e-commerce",
      titleEn: "Premium website for e-commerce",
      descAl:
        "Ndërtim i faqes me fokus në besim, shpejtësi dhe strukturë blerjeje më të pastër për përdoruesin.",
      descEn:
        "A website built with focus on trust, speed, and a cleaner purchase journey for the user.",
      resultAl: "Rezultat",
      resultEn: "Result",
      resultValue: "Higher conversion flow",
      icon: Globe,
    },
    {
      categoryAl: "Campaign",
      categoryEn: "Campaign",
      titleAl: "Fushatë digjitale për startup teknologjik",
      titleEn: "Digital campaign for a tech startup",
      descAl:
        "Mesazh më i qartë, creative më i fortë dhe optimizim i vazhdueshëm për të kthyer interesin në lead-e.",
      descEn:
        "Clearer messaging, stronger creative, and ongoing optimization to turn attention into leads.",
      resultAl: "Rezultat",
      resultEn: "Result",
      resultValue: "+186% lead signal",
      icon: Megaphone,
    },
    {
      categoryAl: "Social",
      categoryEn: "Social",
      titleAl: "Prani sociale për klinikë dentare",
      titleEn: "Social presence for a dental clinic",
      descAl:
        "Sistem postimesh edukative dhe promovuese që e rriti besueshmërinë dhe e bëri klinikën të dukej më moderne.",
      descEn:
        "A content system of educational and promotional posts that increased credibility and made the clinic feel more modern.",
      resultAl: "Rezultat",
      resultEn: "Result",
      resultValue: "Stronger trust perception",
      icon: BarChart3,
    },
  ];

  return (
    <main className="pb-20 md:pb-24">
      <PageHero
        label={t("Punët tona", "Our work")}
        title={t(
          "Shembuj të projekteve ku branding-u, struktura dhe prezantimi punuan së bashku.",
          "Examples of projects where branding, structure, and presentation worked together."
        )}
        subtitle={t(
          "Këto nuk janë vetëm visuale të bukura. Janë shembuj se si një markë mund të ndihet më e fortë kur sistemi i saj digjital është i kuruar mirë.",
          "These are not just pretty visuals. They are examples of how a brand can feel stronger when its digital system is carefully curated."
        )}
        stats={[
          {
            label: t("Lloje projektesh", "Project types"),
            value: t("Brand, web, ads", "Brand, web, ads"),
          },
          {
            label: t("Qasje", "Approach"),
            value: t("Case-led", "Case-led"),
          },
          {
            label: t("Ndjesi", "Feel"),
            value: t("Premium", "Premium"),
          },
        ]}
      />

      <section className="section-padding pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <PremiumCard
                key={project.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-5 py-5 md:px-6 md:py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="premium-badge">
                    <project.icon size={12} />
                    {t(project.categoryAl, project.categoryEn)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.86rem] font-medium text-primary">
                    <ArrowUpRight size={15} />
                    {t("Case snapshot", "Case snapshot")}
                  </span>
                </div>

                <div className="mt-6 rounded-[1.2rem] border border-primary/12 bg-[radial-gradient(circle_at_top_right,rgba(212,177,61,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5">
                  <div className="panel-grid h-36 rounded-[0.95rem] border border-white/10 bg-background/55" />
                </div>

                <h2 className="mt-6 text-[1.45rem] font-bold tracking-[-0.04em] text-white md:text-[1.65rem]">
                  {t(project.titleAl, project.titleEn)}
                </h2>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-muted-foreground md:text-[0.98rem]">
                  {t(project.descAl, project.descEn)}
                </p>

                <div className="mt-5 rounded-[1rem] border border-white/10 bg-white/[0.03] p-3.5">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary/90">
                    {t(project.resultAl, project.resultEn)}
                  </p>
                  <p className="mt-2.5 text-base font-semibold text-white">
                    {project.resultValue}
                  </p>
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
