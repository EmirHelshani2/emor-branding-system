import { motion } from "framer-motion";
import { Eye, Shield, Sparkles, Target, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const About = () => {
  const { t } = useLanguage();

  const founders = [
    {
      name: "Orik Bublaku",
      roleAl: "Creative & Strategy",
      roleEn: "Creative & Strategy",
      bioAl: "Orik udhëheq drejtimin kreativ të EMOR. Siguron që çdo projekt të ketë identitet të fortë dhe mesazh që rezonon.",
      bioEn: "Orik leads EMOR's creative direction. He ensures every project has a strong identity and messaging that resonates.",
    },
    {
      name: "Emir Helshani",
      roleAl: "Technical & Systems",
      roleEn: "Technical & Systems",
      bioAl: "Emir ndërton sistemet teknike pas çdo projekti. Nga websites te AI, ai mban ekzekutimin të pastër dhe të besueshëm.",
      bioEn: "Emir builds the technical systems behind every project. From websites to AI, he keeps execution clean and reliable.",
    },
  ];

  const values = [
    {
      icon: Shield,
      titleAl: "Standarde të larta",
      titleEn: "High standards",
      descAl: "Dizajnojmë me kujdes që puna jonë të reflektojë seriozitet.",
      descEn: "We design carefully so our work reflects seriousness.",
    },
    {
      icon: TrendingUp,
      titleAl: "Rritje me kuptim",
      titleEn: "Growth with intent",
      descAl: "Matim progresin dhe ndërtojmë gjëra që zgjasin më shumë se një trend.",
      descEn: "We measure progress and build things that outlast a trend.",
    },
    {
      icon: Sparkles,
      titleAl: "Estetikë me strategji",
      titleEn: "Aesthetics with strategy",
      descAl: "Bukuria pa strukturë nuk mjafton. EMOR bashkon të dyja.",
      descEn: "Beauty without structure is not enough. EMOR brings both together.",
    },
  ];

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Rreth EMOR", "About EMOR")}
        title={t(
          "EMOR u ndërtua për bizneset që duan prezencë digjitale me klas dhe performancë.",
          "EMOR was built for businesses that want digital presence with class and performance."
        )}
        subtitle={t(
          "Ne jemi partner për branding, websites, creative systems dhe rritje të menduar.",
          "We are a partner for branding, websites, creative systems, and thoughtful growth."
        )}
        stats={[
          { label: t("Qasje", "Approach"), value: t("Brand-first", "Brand-first") },
          { label: t("Stil", "Style"), value: t("Elegant + Strategic", "Elegant + Strategic") },
          { label: t("Qëllim", "Goal"), value: t("Trust + Growth", "Trust + Growth") },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={softReveal}
          >
            <PremiumCard interactive={false} className="px-4 py-4 md:px-6 md:py-5">
              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <span className="premium-badge">
                    <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(212,177,61,0.8)]" />
                    {t("Çfarë ndërtojmë", "What we build")}
                  </span>
                  <h2 className="mt-3 text-[1.25rem] font-bold tracking-[-0.04em] text-white md:text-[1.4rem]">
                    {t(
                      "Sistem i plotë prezence për markat që duan të duken më serioze online.",
                      "A complete presence system for brands that want to look more serious online."
                    )}
                  </h2>
                  <p className="mt-2.5 max-w-xl text-[0.82rem] leading-relaxed text-muted-foreground">
                    {t(
                      "EMOR ndihmon bizneset të duken më të kuruara, të komunikojnë më qartë dhe të konvertojnë më mirë.",
                      "EMOR helps businesses look more curated, communicate with clarity, and convert better."
                    )}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                      <Target size={14} />
                    </div>
                    <h3 className="mt-3 text-[0.92rem] font-semibold text-white">
                      {t("Misioni", "Mission")}
                    </h3>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                      {t(
                        "T'i ndihmojmë bizneset të ndërtojnë prani digjitale profesionale dhe të besueshme.",
                        "To help businesses build professional and trustworthy digital presence."
                      )}
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                      <Eye size={14} />
                    </div>
                    <h3 className="mt-3 text-[0.92rem] font-semibold text-white">
                      {t("Vizioni", "Vision")}
                    </h3>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                      {t(
                        "Të jemi referencë për markat që duan standard më të lartë.",
                        "To be the reference point for brands that want a higher standard."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Vlerat tona", "Our values")}
            title={t(
              "Parimet që e mbajnë punën tonë të rafinuar dhe të qëndrueshme.",
              "The principles that keep our work refined and consistent."
            )}
            subtitle={t(
              "EMOR nuk ndjek zhurmën. Ne ndjekim standardin dhe qartësinë e markës.",
              "EMOR does not follow noise. We follow standards and brand clarity."
            )}
          />

          <div className="grid gap-3 md:grid-cols-3">
            {values.map((value, index) => (
              <PremiumCard
                key={value.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                  <value.icon size={14} />
                </div>
                <h3 className="mt-3 text-[0.9rem] font-semibold tracking-[-0.02em] text-white">
                  {t(value.titleAl, value.titleEn)}
                </h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                  {t(value.descAl, value.descEn)}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Ekipi", "Team")}
            title={t("Themeluesit e EMOR", "The founders behind EMOR")}
            subtitle={t(
              "Drejtim kreativ dhe strukturë teknike për ide që bëhen prezencë reale.",
              "Creative direction and technical structure turning ideas into real presence."
            )}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {founders.map((founder, index) => (
              <PremiumCard
                key={founder.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-lg font-bold text-primary shadow-[0_0_24px_rgba(212,177,61,0.1)]">
                  {founder.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="mt-3 text-[1.1rem] font-bold tracking-[-0.03em] text-white">
                  {founder.name}
                </h3>
                <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary/90">
                  {t(founder.roleAl, founder.roleEn)}
                </p>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-muted-foreground">
                  {t(founder.bioAl, founder.bioEn)}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
