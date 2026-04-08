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
      descAl:
        "Ndërtojmë sistem të plotë përmbajtjeje, drejtim vizual dhe ritëm publikimi që e bën markën tuaj të ndihet aktive, profesionale dhe e qëndrueshme.",
      descEn:
        "We build a complete content system, visual direction, and publishing rhythm that makes your brand feel active, professional, and consistent.",
      benefitsAl: [
        "Kalendari mujor i përmbajtjes",
        "Creative direction i unifikuar",
        "Vizuale premium për çdo javë",
        "Raportim i qartë i performancës",
      ],
      benefitsEn: [
        "Monthly content calendar",
        "Unified creative direction",
        "Premium visuals every week",
        "Clear performance reporting",
      ],
      fitAl: "Biznese që duan prezencë të fortë dhe të rregullt online.",
      fitEn: "Businesses that want strong, steady online presence.",
      metricAl: "Output standard",
      metricEn: "Output standard",
      metricValue: "30-day system",
    },
    {
      icon: Globe,
      titleAl: "Zhvillim websitesh",
      titleEn: "Website development",
      descAl:
        "Ndërtojmë faqe moderne me strukturë të pastër, hierarki të fortë dhe ndjesi premium që e vendos markën tuaj në një nivel më të lartë.",
      descEn:
        "We build modern sites with clean structure, strong hierarchy, and a premium feel that elevates your brand.",
      benefitsAl: [
        "Dizajn responsive i rafinuar",
        "Strukturë me fokus konvertimi",
        "Shpejtësi dhe performancë të lartë",
        "Blloqe të lehta për t'u përditësuar",
      ],
      benefitsEn: [
        "Refined responsive design",
        "Conversion-focused structure",
        "High speed and performance",
        "Sections that are easy to update",
      ],
      fitAl: "Biznese që kanë nevojë për prezencë digjitale serioze dhe bindëse.",
      fitEn: "Businesses that need a serious, persuasive digital presence.",
      metricAl: "UX focus",
      metricEn: "UX focus",
      metricValue: "Premium funnel",
    },
    {
      icon: Palette,
      titleAl: "Branding vizual",
      titleEn: "Visual branding",
      descAl:
        "Nga logo dhe paletë deri te sistemet vizuale të përmbajtjes, krijojmë identitet që mbahet mend dhe komunikon me klas.",
      descEn:
        "From logo and palette to visual content systems, we build identities that are memorable and communicate with class.",
      benefitsAl: [
        "Paletë dhe drejtim vizual",
        "Guidelines për përdorim konsistent",
        "Asete për reklama dhe rrjete sociale",
        "Pozicionim më premium i markës",
      ],
      benefitsEn: [
        "Palette and visual direction",
        "Guidelines for consistent use",
        "Assets for ads and social media",
        "A more premium brand position",
      ],
      fitAl: "Marka që duan të duken më të forta dhe më të organizuara.",
      fitEn: "Brands that want to look stronger and more organized.",
      metricAl: "Brand clarity",
      metricEn: "Brand clarity",
      metricValue: "360° identity",
    },
    {
      icon: Megaphone,
      titleAl: "Reklama digjitale",
      titleEn: "Digital advertising",
      descAl:
        "Fushata me mesazh të qartë, creative të fortë dhe targetim të menduar për të sjellë lead-e më të kualifikuara.",
      descEn:
        "Campaigns with clear messaging, strong creative, and targeting designed to bring in better-qualified leads.",
      benefitsAl: [
        "Fushata Meta dhe Google",
        "Creative hooks për klikime më të larta",
        "Optimizim i vazhdueshëm",
        "Fokus i vazhdueshëm te ROI",
      ],
      benefitsEn: [
        "Meta and Google campaigns",
        "Creative hooks for stronger clicks",
        "Ongoing optimization",
        "Continuous ROI focus",
      ],
      fitAl: "Biznese që duan rritje të shpejtë pa humbur kontrollin e markës.",
      fitEn: "Businesses that want faster growth without losing brand control.",
      metricAl: "Ad system",
      metricEn: "Ad system",
      metricValue: "ROI-led",
    },
    {
      icon: Bot,
      titleAl: "Chatbot & AI systems",
      titleEn: "Chatbot & AI systems",
      descAl:
        "Automatizime inteligjente që menaxhojnë pyetje, filtrojnë klientët potencialë dhe mbajnë komunikimin në standard të lartë.",
      descEn:
        "Smart automations that handle inquiries, qualify leads, and keep communication at a high standard.",
      benefitsAl: [
        "Përgjigje të shpejta 24/7",
        "Filtrim i lead-eve",
        "Integrim i lehtë me proceset ekzistuese",
        "Kursim kohe për ekipin tuaj",
      ],
      benefitsEn: [
        "Fast 24/7 responses",
        "Lead qualification",
        "Easy integration with existing workflows",
        "Time savings for your team",
      ],
      fitAl: "Biznese me shumë kërkesa hyrëse dhe nevojë për përgjigje më të shpejta.",
      fitEn: "Businesses with high inquiry volume and a need for faster replies.",
      metricAl: "Response engine",
      metricEn: "Response engine",
      metricValue: "24/7 flow",
    },
    {
      icon: PenTool,
      titleAl: "Creative content direction",
      titleEn: "Creative content direction",
      descAl:
        "E kthejmë përmbajtjen tuaj në aset marke duke i dhënë drejtim estetik, ritëm editorial dhe mesazh më të mprehtë.",
      descEn:
        "We turn your content into a brand asset by giving it aesthetic direction, editorial rhythm, and sharper messaging.",
      benefitsAl: [
        "Konceptim i rubrikave",
        "Hook-e dhe copy më të qarta",
        "Moodboard dhe referenca vizuale",
        "Standard më i lartë i prezantimit",
      ],
      benefitsEn: [
        "Content pillar planning",
        "Sharper hooks and copy",
        "Moodboards and visual references",
        "A higher presentation standard",
      ],
      fitAl: "Biznese që duan të duken më moderne dhe më të kuruara.",
      fitEn: "Businesses that want to feel more modern and more curated.",
      metricAl: "Creative direction",
      metricEn: "Creative direction",
      metricValue: "Brand-first",
    },
  ];

  return (
    <main className="pb-20 md:pb-24">
      <PageHero
        label={t("Shërbimet", "Services")}
        title={t(
          "Shërbime premium që e bëjnë markën tuaj të duket më e fortë, më e qartë dhe më bindëse.",
          "Premium services that make your brand feel stronger, clearer, and more persuasive."
        )}
        subtitle={t(
          "Çdo paketë në EMOR është menduar si pjesë e një sistemi më të madh: dizajn, strukturë dhe performancë që punojnë së bashku.",
          "Every EMOR offer is designed as part of a bigger system: design, structure, and performance working together."
        )}
        stats={[
          {
            label: t("Fokus", "Focus"),
            value: t("Brand + Growth", "Brand + Growth"),
          },
          {
            label: t("Qasje", "Approach"),
            value: t("Strategjike", "Strategic"),
          },
          {
            label: t("Standard", "Standard"),
            value: t("Premium", "Premium"),
          },
        ]}
      />

      <section className="section-padding pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <PremiumCard
                key={service.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-5 py-5 md:px-6 md:py-6"
              >
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-primary/15 bg-primary/10 text-primary">
                        <service.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary/90">
                          {t(service.metricAl, service.metricEn)}
                        </p>
                        <p className="mt-1 text-[0.9rem] font-medium text-white/80">
                          {service.metricValue}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-5 text-[1.55rem] font-bold tracking-[-0.04em] text-white md:text-[1.75rem]">
                      {t(service.titleAl, service.titleEn)}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.94rem] leading-relaxed text-muted-foreground md:text-[0.98rem]">
                      {t(service.descAl, service.descEn)}
                    </p>

                    <div className="mt-5 rounded-[1.1rem] border border-primary/15 bg-primary/[0.06] p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary/90">
                        {t("Ideal për", "Ideal for")}
                      </p>
                      <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted-foreground">
                        {t(service.fitAl, service.fitEn)}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-between rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary/90">
                        {t("Çfarë përfshihet", "What is included")}
                      </p>
                      <div className="mt-4 space-y-2.5">
                        {(
                          t(
                            service.benefitsAl.join("|"),
                            service.benefitsEn.join("|")
                          )
                        )
                          .split("|")
                          .map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 text-[0.92rem] text-muted-foreground"
                            >
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-primary"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <Link to="/contact" className="btn-secondary mt-6 w-full">
                      {t("Diskuto këtë shërbim", "Discuss this service")}{" "}
                      <ArrowRight size={16} />
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
