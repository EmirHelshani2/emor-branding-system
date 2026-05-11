import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Eye, MessageCircle, Shield, Sparkles, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
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
      photo: "/team/orik.jpg",
      roleAl: "Creative & Strategy",
      roleEn: "Creative & Strategy",
      bioAl: "Orik udhëheq drejtimin kreativ të EMOR. Siguron që çdo projekt të ketë identitet të fortë dhe mesazh që rezonon.",
      bioEn: "Orik leads EMOR's creative direction. He ensures every project has a strong identity and messaging that resonates.",
    },
    {
      name: "Emir Helshani",
      photo: "/team/emir.jpg",
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

  const processSteps = [
    {
      step: "01",
      icon: MessageCircle,
      titleAl: "Na kontaktoni",
      titleEn: "Contact us",
      descAl: "Na shkruani me email ose Instagram. Ju përgjigjemi brenda 24 orëve.",
      descEn: "Reach out via email or Instagram. We reply within 24 hours.",
    },
    {
      step: "02",
      icon: Target,
      titleAl: "Konsultim falas",
      titleEn: "Free consultation",
      descAl: "Diskutojmë biznesin tuaj, qëllimet dhe çfarë ju nevojitet saktësisht.",
      descEn: "We discuss your business, goals, and exactly what you need.",
    },
    {
      step: "03",
      icon: CheckCircle,
      titleAl: "Plan i qartë",
      titleEn: "Clear plan",
      descAl: "Hartojmë plan konkret — çfarë bëhet, kur dhe me çfarë çmimi. Pa surpriza.",
      descEn: "We build a concrete plan — what gets done, when, and at what price. No surprises.",
    },
    {
      step: "04",
      icon: TrendingUp,
      titleAl: "Ekzekutim & Raportim",
      titleEn: "Execution & Reporting",
      descAl: "Fillojmë punën menjëherë. Raport mujor dhe komunikim i vazhdueshëm.",
      descEn: "We start right away. Monthly reports and continuous communication.",
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
          "Ne jemi partner për branding, websites, AI dhe rritje të menduar.",
          "We are a partner for branding, websites, AI, and thoughtful growth."
        )}
        stats={[
          { label: t("Qasje", "Approach"), value: t("Brand-first", "Brand-first") },
          { label: t("Stil", "Style"), value: t("Elegant + Strategjik", "Elegant + Strategic") },
          { label: t("Qëllim", "Goal"), value: t("Besim + Rritje", "Trust + Growth") },
        ]}
      />

      {/* MISSION / VISION */}
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
                  <h2 className="mt-4 text-[1.4rem] font-bold tracking-[-0.035em] text-white md:text-[1.6rem]">
                    {t(
                      "Social media, website dhe AI chatbot — ndërtuar për biznese serioze.",
                      "Social media, websites, and AI chatbots — built for serious businesses."
                    )}
                  </h2>
                  <p className="mt-3 max-w-xl text-[0.875rem] leading-relaxed text-muted-foreground">
                    {t(
                      "EMOR ndihmon bizneset në Kosovë dhe rajon të duken profesionale online, të komunikojnë me qartësi dhe të arrijnë më shumë klientë.",
                      "EMOR helps businesses in Kosovo and the region look professional online, communicate clearly, and reach more customers."
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

      {/* HOW WE WORK — PROCESS */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Si punojmë", "How we work")}
            title={t(
              "Nga kontakti i parë deri te rezultati final.",
              "From first contact to final result."
            )}
            subtitle={t(
              "Procesi ynë është i thjeshtë, i qartë dhe pa komplikime. Ja çfarë ndodh kur zgjidhni EMOR.",
              "Our process is simple, clear, and straightforward. Here's what happens when you choose EMOR."
            )}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <PremiumCard
                key={step.step}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[0.75rem] border border-primary/15 bg-primary/10 text-primary">
                    <step.icon size={16} />
                  </div>
                  <span className="text-[1.6rem] font-extrabold tracking-[-0.06em] text-white/8 select-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-3 text-[0.95rem] font-bold tracking-[-0.02em] text-white">
                  {t(step.titleAl, step.titleEn)}
                </h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                  {t(step.descAl, step.descEn)}
                </p>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/contact" className="btn-primary inline-flex">
              {t("Fillo tani", "Get started")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding">
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

      {/* TEAM */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Ekipi", "Team")}
            title={t("Themeluesit e EMOR", "The founders behind EMOR")}
            subtitle={t(
              "Drejtim kreativ dhe strukturë teknike për ide që bëhen prezencë reale.",
              "Creative direction and technical structure turning ideas into real presence."
            )}
          />

          <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
            {founders.map((founder, index) => (
              <PremiumCard
                key={founder.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-5 py-5 text-center"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-primary/25 shadow-[0_0_32px_rgba(212,177,61,0.15)]">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.style.fontSize = "1.4rem";
                        parent.style.fontWeight = "700";
                        parent.style.color = "hsl(44 71% 58%)";
                        parent.style.background = "rgba(212,177,61,0.08)";
                        parent.innerText = founder.name.split(" ").map((p) => p[0]).join("");
                      }
                    }}
                  />
                </div>
                <h3 className="mt-4 text-[1.1rem] font-bold tracking-[-0.03em] text-white">
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
