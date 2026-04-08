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
      bioAl:
        "Orik udhëheq drejtimin kreativ të EMOR. Ai siguron që çdo projekt të ketë identitet të fortë, estetikë të qartë dhe mesazh që rezonon me audiencën e duhur.",
      bioEn:
        "Orik leads EMOR's creative direction. He ensures every project has a strong identity, clear aesthetics, and messaging that resonates with the right audience.",
    },
    {
      name: "Emir Helshani",
      roleAl: "Technical & Systems",
      roleEn: "Technical & Systems",
      bioAl:
        "Emir ndërton sistemet teknike dhe strukturën operative pas çdo projekti. Nga websites te automatizimi me AI, ai e mban ekzekutimin të pastër, të shpejtë dhe të besueshëm.",
      bioEn:
        "Emir builds the technical systems and operational structure behind every project. From websites to AI automation, he keeps execution clean, fast, and reliable.",
    },
  ];

  const values = [
    {
      icon: Shield,
      titleAl: "Standarde të larta",
      titleEn: "High standards",
      descAl:
        "Ne dizajnojmë me kujdes që puna jonë të reflektojë seriozitet, jo improvizim.",
      descEn:
        "We design carefully so our work reflects seriousness, not improvisation.",
    },
    {
      icon: TrendingUp,
      titleAl: "Rritje me kuptim",
      titleEn: "Growth with intent",
      descAl:
        "Matim progresin, optimizojmë sistemin dhe ndërtojmë gjëra që zgjasin më shumë se një trend.",
      descEn:
        "We measure progress, optimize the system, and build things that outlast a trend.",
    },
    {
      icon: Sparkles,
      titleAl: "Estetikë me strategji",
      titleEn: "Aesthetics with strategy",
      descAl:
        "Bukuria pa strukturë nuk mjafton. EMOR bashkon të dyja për impakt real.",
      descEn:
        "Beauty without structure is not enough. EMOR brings both together for real impact.",
    },
  ];

  return (
    <main className="pb-24">
      <PageHero
        label={t("Rreth EMOR", "About EMOR")}
        title={t(
          "EMOR u ndërtua për bizneset që duan prezencë digjitale me klas, qartësi dhe performancë.",
          "EMOR was built for businesses that want digital presence with class, clarity, and performance."
        )}
        subtitle={t(
          "Ne nuk jemi thjesht ekip postimesh. Jemi partner për branding, websites, creative systems dhe rritje të menduar mirë.",
          "We are not just a content team. We are a partner for branding, websites, creative systems, and thoughtful growth."
        )}
        stats={[
          {
            label: t("Qasje", "Approach"),
            value: t("Brand-first", "Brand-first"),
          },
          {
            label: t("Stil", "Style"),
            value: t("Elegant + Strategic", "Elegant + Strategic"),
          },
          {
            label: t("Qëllim", "Goal"),
            value: t("Trust + Growth", "Trust + Growth"),
          },
        ]}
      />

      <section className="section-padding pt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={softReveal}
          >
            <PremiumCard interactive={false} className="px-6 py-6 md:px-10 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <span className="premium-badge">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                    {t("Çfarë ndërtojmë", "What we build")}
                  </span>
                  <h2 className="mt-6 text-[2rem] font-bold tracking-[-0.045em] text-white md:text-[2.35rem]">
                    {t(
                      "Një sistem të plotë prezence për markat që duan të duken më serioze online.",
                      "A complete presence system for brands that want to look more serious online."
                    )}
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {t(
                      "EMOR ndihmon bizneset në Kosovë dhe më gjerë të duken më të kuruara, të komunikojnë më qartë dhe të konvertojnë më mirë. Ne ndërtojmë prezencë që ndihet premium jo vetëm në pamje, por edhe në mënyrën si organizohet dhe si performon.",
                      "EMOR helps businesses in Kosovo and beyond look more curated, communicate with more clarity, and convert better. We build presence that feels premium not just in appearance, but in the way it is organized and how it performs."
                    )}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                      <Target size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {t("Misioni", "Mission")}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(
                        "T'i ndihmojmë bizneset të ndërtojnë prani digjitale profesionale, të strukturuar dhe të besueshme.",
                        "To help businesses build professional, structured, and trustworthy digital presence."
                      )}
                    </p>
                  </div>

                  <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                      <Eye size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {t("Vizioni", "Vision")}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(
                        "Të jemi referencë për markat që duan standard më të lartë në dizajn, komunikim dhe rritje.",
                        "To be the reference point for brands that want a higher standard in design, communication, and growth."
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
              "Parimet që e mbajnë punën tonë të rafinuar, të qartë dhe të qëndrueshme.",
              "The principles that keep our work refined, clear, and consistent."
            )}
            subtitle={t(
              "EMOR nuk ndjek zhurmën. Ne ndjekim standardin, sistemin dhe qartësinë e markës.",
              "EMOR does not follow noise. We follow standards, systems, and brand clarity."
            )}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <PremiumCard
                key={value.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-6 py-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-primary/15 bg-primary/10 text-primary">
                  <value.icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">
                  {t(value.titleAl, value.titleEn)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.96rem]">
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
              "Një kombinim i drejtimit kreativ dhe strukturës teknike që e kthen idenë në prezencë reale.",
              "A combination of creative direction and technical structure that turns ideas into real presence."
            )}
          />

          <div className="grid gap-8 md:grid-cols-2">
            {founders.map((founder, index) => (
              <PremiumCard
                key={founder.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-6 py-6 text-center md:px-8 md:py-8"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-3xl font-bold text-primary shadow-[0_0_36px_rgba(212,177,61,0.14)]">
                  {founder.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="mt-6 text-[1.8rem] font-bold tracking-[-0.04em] text-white">
                  {founder.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-primary/90">
                  {t(founder.roleAl, founder.roleEn)}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
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
