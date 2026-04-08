import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Share2,
  Globe,
  Palette,
  Bot,
  Megaphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Share2,
      al: "Menaxhimi i Rrjeteve Sociale",
      en: "Social Media Management",
      descAl: "Strategji të plota për rrjetet sociale — nga planifikimi i përmbajtjes deri te monitorimi i rezultateve. Ne krijojmë identitet konsistent në çdo platformë.",
      descEn: "Complete social media strategies — from content planning to performance monitoring. We create consistent identity across every platform.",
      benefitsAl: ["Kalendar i përmbajtjes", "Dizajn profesional", "Raporte mujore", "Rritje organike"],
      benefitsEn: ["Content calendar", "Professional design", "Monthly reports", "Organic growth"],
      clientAl: "Biznese që duan prani të fortë online",
      clientEn: "Businesses wanting strong online presence",
    },
    {
      icon: Globe,
      al: "Zhvillimi i Uebsajteve",
      en: "Website Development",
      descAl: "Uebsajte moderne dhe funksionale që konvertojnë vizitorë në klientë. Çdo uebsajt ndërtohet me dizajn premium dhe performancë të lartë.",
      descEn: "Modern and functional websites that convert visitors into clients. Every website is built with premium design and high performance.",
      benefitsAl: ["Dizajn responsive", "SEO optimizim", "Shpejtësi e lartë", "Paneli admin"],
      benefitsEn: ["Responsive design", "SEO optimization", "High speed", "Admin panel"],
      clientAl: "Biznese që kanë nevojë për prani profesionale online",
      clientEn: "Businesses needing professional online presence",
    },
    {
      icon: Palette,
      al: "Dizajn Grafik",
      en: "Graphic Design",
      descAl: "Vizuale premium që ndërtojnë identitetin e markës suaj. Nga logoja te materialet e marketingut — gjithçka me konsistencë.",
      descEn: "Premium visuals that build your brand identity. From logo to marketing materials — everything with consistency.",
      benefitsAl: ["Identitet vizual", "Materiale marketingu", "Postime sociale", "Brandin guidelines"],
      benefitsEn: ["Visual identity", "Marketing materials", "Social posts", "Brand guidelines"],
      clientAl: "Biznese që duan imazh profesional",
      clientEn: "Businesses wanting a professional image",
    },
    {
      icon: Bot,
      al: "Chatbot AI",
      en: "AI Chatbots",
      descAl: "Automatizoni komunikimin me klientët tuaj 24/7 me chatbot inteligjent që përgjigjet menjëherë dhe saktë.",
      descEn: "Automate 24/7 client communication with intelligent chatbots that respond instantly and accurately.",
      benefitsAl: ["Përgjigje 24/7", "Kursim kohe", "Kualifikim klientësh", "Integrim i lehtë"],
      benefitsEn: ["24/7 responses", "Time savings", "Client qualification", "Easy integration"],
      clientAl: "Biznese me volum të lartë klientësh",
      clientEn: "Businesses with high client volume",
    },
    {
      icon: Megaphone,
      al: "Reklama Digjitale",
      en: "Ads Setup",
      descAl: "Sisteme reklamash që sjellin rezultate reale. Menaxhojmë fushata në Meta, Google dhe platforma të tjera me fokus te ROI.",
      descEn: "Ad systems that deliver real results. We manage campaigns on Meta, Google and other platforms with ROI focus.",
      benefitsAl: ["Fushata targetuara", "Optimizim i vazhdueshëm", "Raporte detajuara", "ROI i lartë"],
      benefitsEn: ["Targeted campaigns", "Continuous optimization", "Detailed reports", "High ROI"],
      clientAl: "Biznese që duan rritje të shpejtë",
      clientEn: "Businesses wanting rapid growth",
    },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Shërbimet", "Services")}
            title={t("Çfarë Ofrojmë", "What We Offer")}
            subtitle={t(
              "Zgjidhje digjitale premium për çdo fazë të rritjes së biznesit tuaj.",
              "Premium digital solutions for every stage of your business growth."
            )}
          />

          <div className="space-y-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-glass rounded-2xl p-8 md:p-10 gold-border-hover"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <s.icon size={22} className="text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">{t(s.al, s.en)}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t(s.descAl, s.descEn)}
                    </p>
                    <p className="text-sm text-primary font-medium mb-2">
                      {t("Ideal për:", "Ideal for:")}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">{t(s.clientAl, s.clientEn)}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                    >
                      {t("Filloni tani", "Get started")} <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="lg:w-72 shrink-0">
                    <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                      {t("Përfitimet", "Benefits")}
                    </p>
                    <div className="space-y-2.5">
                      {(t(s.benefitsAl.join("|"), s.benefitsEn.join("|"))).split("|").map((b, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-primary shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>
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

export default Services;
