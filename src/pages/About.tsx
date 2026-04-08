import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  const { t } = useLanguage();

  const founders = [
    {
      name: "Orik Bublaku",
      roleAl: "Kreativ & Strategji",
      roleEn: "Creative & Strategy",
      bioAl: "Me një sy të mprehtë për dizajn dhe strategji, Orik udhëheq drejtimin kreativ të EMOR. Ai siguron që çdo projekt të ketë identitet të fortë vizual dhe mesazh të qartë që rezonon me audiencën e duhur.",
      bioEn: "With a keen eye for design and strategy, Orik leads EMOR's creative direction. He ensures every project has a strong visual identity and clear message that resonates with the right audience.",
    },
    {
      name: "Emir Helshani",
      roleAl: "Teknik & Sisteme",
      roleEn: "Technical & Systems",
      bioAl: "Emir ndërton sistemet teknike pas çdo projekti. Nga uebsajtet e avancuara te automatizimi me AI, ai siguron që zgjidhjet tona janë funksionale, të shpejta dhe të besueshme.",
      bioEn: "Emir builds the technical systems behind every project. From advanced websites to AI automation, he ensures our solutions are functional, fast, and reliable.",
    },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Rreth nesh", "About us")}
            title={t("Kush Jemi Ne", "Who We Are")}
            subtitle={t(
              "EMOR nuk është thjesht agjenci — është sistem për përmirësimin e pranisë dixhitale të biznesit tuaj.",
              "EMOR isn't just an agency — it's a system for improving your business's digital presence."
            )}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="card-glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto mb-16 gold-border-hover"
          >
            <p className="text-muted-foreground leading-relaxed text-center text-lg">
              {t(
                "Ne besojmë që çdo biznes meriton një prezencë dixhitale profesionale. Jo vetëm postime — por një sistem i plotë i imazhit, komunikimit dhe rritjes online. EMOR u themelua me misionin për t'i ndihmuar bizneset në Kosovë dhe rajon të duken, komunikojnë dhe rriten më mirë.",
                "We believe every business deserves a professional digital presence. Not just posts — but a complete system of image, communication, and online growth. EMOR was founded with the mission to help businesses in Kosovo and the region look, communicate, and grow better."
              )}
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="card-glass rounded-2xl p-8 gold-border-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t("Misioni", "Mission")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "T'i ndihmojmë bizneset të ndërtojnë prani dixhitale profesionale, të strukturuar dhe të besueshme që sjell rezultate reale.",
                  "To help businesses build professional, structured, and trustworthy digital presence that delivers real results."
                )}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="card-glass rounded-2xl p-8 gold-border-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t("Vizioni", "Vision")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Të jemi agjencia referencë për bizneset që duan prezencë dixhitale premium në rajonin tonë.",
                  "To be the reference agency for businesses that want premium digital presence in our region."
                )}
              </p>
            </motion.div>
          </div>

          {/* Founders */}
          <SectionHeading
            label={t("Ekipi", "Team")}
            title={t("Themeluesit", "Founders")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-glass rounded-2xl p-8 text-center gold-border-hover"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary font-bold text-2xl">
                    {f.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-1">{f.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{t(f.roleAl, f.roleEn)}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(f.bioAl, f.bioEn)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
