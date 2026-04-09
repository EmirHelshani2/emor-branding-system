import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe,
  Megaphone,
  Palette,
  PenTool,
  Share2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Share2,
      titleAl: "Menaxhim i rrjeteve sociale",
      titleEn: "Social media management",
      descAl: "Ndërtojmë sistem të plotë përmbajtjeje dhe ritëm publikimi që e bën markën tuaj të ndihet aktive dhe profesionale.",
      descEn: "We build a complete content system and publishing rhythm that makes your brand feel active and professional.",
      benefitsAl: ["Kalendari mujor i përmbajtjes", "Creative direction i unifikuar", "Vizuale premium për çdo javë", "Raportim i qartë"],
      benefitsEn: ["Monthly content calendar", "Unified creative direction", "Premium visuals every week", "Clear reporting"],
      fitAl: "Biznese që duan prezencë të fortë online.",
      fitEn: "Businesses that want strong online presence.",
      metricAl: "Output standard",
      metricEn: "Output standard",
      metricValue: "30-day system",
    },
    {
      icon: Globe,
      titleAl: "Zhvillim websitesh",
      titleEn: "Website development",
      descAl: "Faqe moderne me strukturë të pastër dhe ndjesi premium që e vendos markën tuaj në nivel më të lartë.",
      descEn: "Modern sites with clean structure and a premium feel that elevates your brand.",
      benefitsAl: ["Dizajn responsive i rafinuar", "Strukturë me fokus konvertimi", "Shpejtësi dhe performancë", "Blloqe të lehta për t'u përditësuar"],
      benefitsEn: ["Refined responsive design", "Conversion-focused structure", "High speed and performance", "Easy to update sections"],
      fitAl: "Biznese që kanë nevojë për prezencë digjitale bindëse.",
      fitEn: "Businesses that need a persuasive digital presence.",
      metricAl: "UX focus",
      metricEn: "UX focus",
      metricValue: "Premium funnel",
    },
    {
      icon: Palette,
      titleAl: "Branding vizual",
      titleEn: "Visual branding",
      descAl: "Nga logo dhe paletë deri te sistemet vizuale, krijojmë identitet që mbahet mend.",
      descEn: "From logo and palette to visual systems, we build identities that are memorable.",
      benefitsAl: ["Paletë dhe drejtim vizual", "Guidelines për përdorim", "Asete për reklama dhe sociale", "Pozicionim premium"],
      benefitsEn: ["Palette and visual direction", "Usage guidelines", "Assets for ads and social", "Premium positioning"],
      fitAl: "Marka që duan të duken më të forta.",
      fitEn: "Brands that want to look stronger.",
      metricAl: "Brand clarity",
      metricEn: "Brand clarity",
      metricValue: "360° identity",
    },
    {
      icon: Megaphone,
      titleAl: "Reklama digjitale",
      titleEn: "Digital advertising",
      descAl: "Fushata me mesazh të qartë, creative të fortë dhe targetim të menduar.",
      descEn: "Campaigns with clear messaging, strong creative, and thoughtful targeting.",
      benefitsAl: ["Fushata Meta dhe Google", "Creative hooks", "Optimizim i vazhdueshëm", "Fokus te ROI"],
      benefitsEn: ["Meta and Google campaigns", "Creative hooks", "Ongoing optimization", "ROI focus"],
      fitAl: "Biznese që duan rritje të shpejtë.",
      fitEn: "Businesses that want faster growth.",
      metricAl: "Ad system",
      metricEn: "Ad system",
      metricValue: "ROI-led",
    },
    {
      icon: Bot,
      titleAl: "Chatbot & AI systems",
      titleEn: "Chatbot & AI systems",
      descAl: "Automatizime inteligjente që menaxhojnë pyetje dhe filtrojnë klientët potencialë.",
      descEn: "Smart automations that handle inquiries and qualify leads.",
      benefitsAl: ["Përgjigje 24/7", "Filtrim i lead-eve", "Integrim i lehtë", "Kursim kohe"],
      benefitsEn: ["24/7 responses", "Lead qualification", "Easy integration", "Time savings"],
      fitAl: "Biznese me shumë kërkesa hyrëse.",
      fitEn: "Businesses with high inquiry volume.",
      metricAl: "Response engine",
      metricEn: "Response engine",
      metricValue: "24/7 flow",
    },
    {
      icon: PenTool,
      titleAl: "Creative content direction",
      titleEn: "Creative content direction",
      descAl: "Drejtim estetik, ritëm editorial dhe mesazh më i mprehtë për përmbajtjen tuaj.",
      descEn: "Aesthetic direction, editorial rhythm, and sharper messaging for your content.",
      benefitsAl: ["Konceptim i rubrikave", "Hook-e më të qarta", "Moodboard dhe referenca", "Standard më i lartë"],
      benefitsEn: ["Content pillar planning", "Sharper hooks", "Moodboards and references", "Higher standard"],
      fitAl: "Biznese që duan të duken më moderne.",
      fitEn: "Businesses that want to feel more modern.",
      metricAl: "Creative direction",
      metricEn: "Creative direction",
      metricValue: "Brand-first",
    },
  ];

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Shërbimet", "Services")}
        title={t(
          "Shërbime premium që e bëjnë markën tuaj më të fortë dhe më bindëse.",
          "Premium services that make your brand stronger and more persuasive."
        )}
        subtitle={t(
          "Çdo paketë është menduar si pjesë e një sistemi: dizajn, strukturë dhe performancë.",
          "Every offer is designed as part of a system: design, structure, and performance."
        )}
        stats={[
          { label: t("Fokus", "Focus"), value: t("Brand + Growth", "Brand + Growth") },
          { label: t("Qasje", "Approach"), value: t("Strategjike", "Strategic") },
          { label: t("Standard", "Standard"), value: t("Premium", "Premium") },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-4">
            {services.map((service, index) => (
              <PremiumCard
                key={service.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4 md:px-5 md:py-5"
              >
                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                        <service.icon size={16} />
                      </div>
                      <div>
                        <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                          {t(service.metricAl, service.metricEn)}
                        </p>
                        <p className="mt-0.5 text-[0.78rem] font-medium text-white/80">{service.metricValue}</p>
                      </div>
                    </div>

                    <h2 className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-white md:text-[1.25rem]">
                      {t(service.titleAl, service.titleEn)}
                    </h2>
                    <p className="mt-2 max-w-xl text-[0.82rem] leading-relaxed text-muted-foreground">
                      {t(service.descAl, service.descEn)}
                    </p>

                    <div className="mt-3 rounded-lg border border-primary/12 bg-primary/[0.05] p-3">
                      <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                        {t("Ideal për", "Ideal for")}
                      </p>
                      <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground">
                        {t(service.fitAl, service.fitEn)}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-between rounded-lg border border-white/8 bg-white/[0.03] p-3.5">
                    <div>
                      <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                        {t("Çfarë përfshihet", "What is included")}
                      </p>
                      <div className="mt-3 space-y-2">
                        {t(service.benefitsAl.join("|"), service.benefitsEn.join("|"))
                          .split("|")
                          .map((item) => (
                            <div key={item} className="flex items-start gap-2 text-[0.8rem] text-muted-foreground">
                              <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <Link to="/contact" className="btn-secondary mt-4 w-full">
                      {t("Diskuto këtë shërbim", "Discuss this service")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
