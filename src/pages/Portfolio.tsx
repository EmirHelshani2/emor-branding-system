import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleAl: "Markë Restoranti — Identitet i Plotë",
      titleEn: "Restaurant Brand — Full Identity",
      descAl: "Ridizajnim i plotë i identitetit vizual, menusë dhe pranisë në rrjete sociale.",
      descEn: "Complete redesign of visual identity, menu, and social media presence.",
      category: t("Branding", "Branding"),
      color: "from-primary/20 to-primary/5",
    },
    {
      titleAl: "E-Commerce — Uebsajt Premium",
      titleEn: "E-Commerce — Premium Website",
      descAl: "Dyqan online modern me dizajn luksoz dhe performancë të lartë.",
      descEn: "Modern online store with luxury design and high performance.",
      category: t("Uebsajt", "Website"),
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      titleAl: "Startup Teknologjik — Fushata Digjitale",
      titleEn: "Tech Startup — Digital Campaign",
      descAl: "Strategji e integruar marketingu me reklama dhe përmbajtje sociale.",
      descEn: "Integrated marketing strategy with ads and social content.",
      category: t("Marketing", "Marketing"),
      color: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      titleAl: "Klinikë Dentare — Rrjete Sociale",
      titleEn: "Dental Clinic — Social Media",
      descAl: "Menaxhim i plotë i rrjeteve sociale me përmbajtje edukative dhe promovuese.",
      descEn: "Full social media management with educational and promotional content.",
      category: t("Sociale", "Social"),
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      titleAl: "Zyrë Ligjore — Uebsajt Korporativ",
      titleEn: "Law Firm — Corporate Website",
      descAl: "Uebsajt profesional me strukturë të qartë dhe imazh besueshmërie.",
      descEn: "Professional website with clear structure and trustworthy image.",
      category: t("Uebsajt", "Website"),
      color: "from-amber-500/20 to-amber-500/5",
    },
    {
      titleAl: "Brand Fitness — Chatbot AI",
      titleEn: "Fitness Brand — AI Chatbot",
      descAl: "Chatbot inteligjent për rezervime, pyetje dhe kualifikim të klientëve.",
      descEn: "Intelligent chatbot for bookings, inquiries, and client qualification.",
      category: "AI",
      color: "from-cyan-500/20 to-cyan-500/5",
    },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Portofoli", "Portfolio")}
            title={t("Punët Tona", "Our Work")}
            subtitle={t(
              "Shembuj realë nga projektet tona premium.",
              "Real examples from our premium projects."
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden card-glass gold-border-hover"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {t(p.titleAl, p.titleEn)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(p.descAl, p.descEn)}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium">
                    <ExternalLink size={14} />
                    {t("Shiko Detajet", "View Details")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
