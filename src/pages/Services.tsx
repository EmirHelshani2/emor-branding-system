import { Link } from "react-router-dom";
import { ArrowRight, Bot, Check, Globe, Share2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Share2,
      pricingTab: "social",
      contactPackage: "Social Media Management",
      titleAl: "Social Media Management",
      titleEn: "Social Media Management",
      descAl:
        "Menaxhojmë Instagram & Facebook çdo muaj — postime, stories, hashtags dhe raport mujor. Konsistent, profesional dhe me drejtim kreativ.",
      descEn:
        "We manage your Instagram & Facebook every month — posts, stories, hashtags, and a monthly report. Consistent, professional, and creatively directed.",
      platformsAl: "Instagram & Facebook (Premium: + TikTok)",
      platformsEn: "Instagram & Facebook (Premium: + TikTok)",
      priceAl: "Nga €49 (muaji i parë) · pastaj €69.99/muaj",
      priceEn: "From €49 (first month) · then €69.99/month",
      featuresAl: [
        "3–5 postime në javë (sipas planit)",
        "3 stories/javë – stories çdo ditë (Premium)",
        "Hashtags trending çdo javë",
        "Rregullim profili (Standard & Premium)",
        "Video animacioni (Standard & Premium)",
        "Reklama Instagram & Facebook (vetëm Premium)",
        "Përgjigje DM (vetëm Premium)",
        "Raport mujor i performancës",
      ],
      featuresEn: [
        "3–5 posts per week (based on plan)",
        "3 stories/week – daily stories (Premium)",
        "Trending hashtags every week",
        "Profile cleanup (Standard & Premium)",
        "Animation videos (Standard & Premium)",
        "Instagram & Facebook Ads (Premium only)",
        "DM replies (Premium only)",
        "Monthly performance report",
      ],
    },
    {
      icon: Globe,
      pricingTab: "website",
      contactPackage: "Website Development",
      titleAl: "Website Development",
      titleEn: "Website Development",
      descAl:
        "Ndërtojmë website të pastër dhe të shpejtë që prezanton biznesin tuaj, shfaq çmimet dhe ndihmon klientët të ju kontaktojnë.",
      descEn:
        "We build clean, fast websites that present your business, display your pricing, and make it easy for customers to contact you.",
      platformsAl: "Landing Page ose Website i Plotë Custom",
      platformsEn: "Simple Landing Page or Full Custom Website",
      priceAl: "Nga €49.99 njëherë + mirëmbajtje mujore",
      priceEn: "From €49.99 one-time + monthly maintenance",
      featuresAl: [
        "Landing Page: website një faqesh (€49.99)",
        "Prezantim i biznesit dhe çmimeve tuaja",
        "Opsion kontakti i lehtë për klientët",
        "Website Custom: shumë faqe (€249.99)",
        "Panel admin për ndryshim çmimesh",
        "Mbështetje bazë të dhënash",
        "Dizajn responsive (desktop & mobile)",
        "SSL & HTTPS — siguri e plotë e të dhënave",
        "Backup i rregullt — website gjithmonë i sigurt",
        "Mirëmbajtje mujore teknike",
      ],
      featuresEn: [
        "Landing Page: one-page website (€49.99)",
        "Presentation of your business and prices",
        "Easy contact option for customers",
        "Full Custom: multi-page website (€249.99)",
        "Admin page for updating prices",
        "Database support",
        "Responsive design (desktop & mobile)",
        "SSL & HTTPS — full data security",
        "Regular backups — website always safe",
        "Monthly technical maintenance",
      ],
    },
    {
      icon: Bot,
      pricingTab: "chatbot",
      contactPackage: "AI Chatbot",
      titleAl: "AI Chatbots",
      titleEn: "AI Chatbots",
      descAl:
        "Instalojmë chatbot AI që u përgjigjet mesazheve 24/7 në Instagram, Facebook ose website-in tuaj. Klientët mund të flasin me AI ose me njeri.",
      descEn:
        "We set up an AI chatbot that replies to messages 24/7 on Instagram, Facebook, or your website. Customers can talk to AI or a human at any time.",
      platformsAl: "Një platformë, Website, Të gjitha platformat, ose Combo",
      platformsEn: "One platform, Website, All platforms, or Combo",
      priceAl: "Nga €59.99 njëherë + mirëmbajtje mujore",
      priceEn: "From €59.99 one-time + monthly maintenance",
      featuresAl: [
        "Përgjigje automatike 24/7",
        "Klienti flet me AI ose transferohet te njeri",
        "Chatbot në një platformë (€59.99)",
        "Chatbot në website (€79.99)",
        "Chatbot në të gjitha platformat (€179.99)",
        "Chatbot në të gjitha + website (€229.99)",
        "Integrimi i lehtë me rrjetet ekzistuese",
        "Mirëmbajtje mujore e sigurt",
      ],
      featuresEn: [
        "Automated replies 24/7",
        "Customer speaks to AI or is transferred to a human",
        "One platform chatbot (€59.99)",
        "Website chatbot (€79.99)",
        "All platforms chatbot (€179.99)",
        "All platforms + website (€229.99)",
        "Easy integration with existing channels",
        "Secure monthly maintenance",
      ],
    },
  ];

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Shërbimet tona", "Our services")}
        title={t(
          "Tre shërbime. Rezultate reale.",
          "Three services. Real results."
        )}
        subtitle={t(
          "Social media, website dhe AI chatbot — ndërtuar për biznese që duan prani profesionale online.",
          "Social media, website, and AI chatbot — built for businesses that want a professional online presence."
        )}
        stats={[
          {
            label: t("Social Media nga", "Social Media from"),
            value: "€69.99/mo",
          },
          {
            label: t("Website nga", "Website from"),
            value: "€49.99",
          },
          {
            label: t("AI Chatbot nga", "AI Chatbot from"),
            value: "€59.99",
          },
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
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="px-4 py-4 md:px-5 md:py-5"
              >
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[0.85rem] border border-primary/15 bg-primary/10 text-primary">
                        <service.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary/80">
                          {t(service.platformsAl, service.platformsEn)}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-4 text-[1.3rem] font-bold tracking-[-0.03em] text-white md:text-[1.45rem]">
                      {t(service.titleAl, service.titleEn)}
                    </h2>
                    <p className="mt-2 max-w-xl text-[0.875rem] leading-relaxed text-muted-foreground">
                      {t(service.descAl, service.descEn)}
                    </p>

                    <div className="mt-4 rounded-xl border border-primary/12 bg-primary/[0.05] px-3.5 py-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary/80">
                        {t("Çmimi", "Pricing")}
                      </p>
                      <p className="mt-1 text-[0.875rem] font-semibold text-white">
                        {t(service.priceAl, service.priceEn)}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-between rounded-xl border border-white/8 bg-white/[0.025] p-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary/80">
                        {t("Çfarë përfshihet", "What's included")}
                      </p>
                      <div className="mt-3 space-y-2">
                        {t(
                          service.featuresAl.join("|"),
                          service.featuresEn.join("|")
                        )
                          .split("|")
                          .map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2.5 text-[0.82rem] text-muted-foreground"
                            >
                              <Check size={13} className="mt-0.5 shrink-0 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <Link
                        to={`/pricing?tab=${service.pricingTab}`}
                        className="btn-secondary w-full !text-[0.82rem]"
                      >
                        {t("Shiko çmimet", "View pricing")} <ArrowRight size={13} />
                      </Link>
                      <Link
                        to={`/contact?package=${encodeURIComponent(service.contactPackage)}`}
                        className="btn-primary w-full !text-[0.82rem]"
                      >
                        {t("Fillo tani", "Get started")} <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/pricing" className="btn-primary inline-flex">
              {t("Shiko të gjitha çmimet", "View full pricing")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
