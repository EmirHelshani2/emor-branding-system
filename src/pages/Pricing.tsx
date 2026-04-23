import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Bot, Check, Globe, Package, Share2, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const VALID_TABS = ["social", "website", "chatbot", "combos"] as const;

const Pricing = () => {
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") ?? "";
  const defaultTab = (VALID_TABS as readonly string[]).includes(tabParam) ? tabParam : "social";

  const socialPlans = [
    {
      nameEn: "Basic",
      nameAl: "Basic",
      firstMonth: "€49",
      monthly: "€69.99",
      platformsEn: "Instagram & Facebook",
      platformsAl: "Instagram & Facebook",
      toneEn: "Start with a consistent, professional presence.",
      toneAl: "Fillo me prani konsistente dhe profesionale.",
      highlight: false,
      featuresEn: [
        "3 posts per week",
        "3 stories per week",
        "Trending hashtags",
        "Basic guidance",
        "Guidance for ads included",
        "End of month report",
      ],
      featuresAl: [
        "3 postime në javë",
        "3 stories në javë",
        "Hashtags trending",
        "Guidancë bazike",
        "Guidancë për reklama",
        "Raport fund muaji",
      ],
    },
    {
      nameEn: "Standard",
      nameAl: "Standard",
      firstMonth: "€79",
      monthly: "€129.99",
      platformsEn: "Instagram & Facebook",
      platformsAl: "Instagram & Facebook",
      toneEn: "More content, better visuals, and animation videos.",
      toneAl: "Më shumë përmbajtje, vizuale dhe video animacioni.",
      highlight: true,
      featuresEn: [
        "Profile cleanup (bio, highlights, grid)",
        "4 posts per week",
        "4 stories per week",
        "Trending hashtags",
        "2 animation videos",
        "Basic guidance",
        "Guidance for ads included",
        "End of month report",
      ],
      featuresAl: [
        "Rregullim profili (bio, highlights, grid)",
        "4 postime në javë",
        "4 stories në javë",
        "Hashtags trending",
        "2 video animacioni",
        "Guidancë bazike",
        "Guidancë për reklama",
        "Raport fund muaji",
      ],
    },
    {
      nameEn: "Premium (Ads)",
      nameAl: "Premium (Ads)",
      firstMonth: "€229",
      monthly: "€299.99",
      platformsEn: "Instagram, Facebook & TikTok",
      platformsAl: "Instagram, Facebook & TikTok",
      toneEn: "Full management — ads, daily stories, TikTok, and DM replies.",
      toneAl: "Menaxhim i plotë — reklama, stories çdo ditë, TikTok dhe DM.",
      highlight: false,
      featuresEn: [
        "Instagram & Facebook Ads",
        "Profile cleanup (bio, highlights, grid)",
        "5 posts per week",
        "Daily stories",
        "Trending hashtags",
        "5 animation videos",
        "DM replies",
        "Custom highlights",
        "Full content plan",
        "End of month report",
      ],
      featuresAl: [
        "Reklama Instagram & Facebook",
        "Rregullim profili (bio, highlights, grid)",
        "5 postime në javë",
        "Stories çdo ditë",
        "Hashtags trending",
        "5 video animacioni",
        "Përgjigje DM",
        "Highlights të personalizuara",
        "Plan i plotë content",
        "Raport fund muaji",
      ],
    },
  ];

  const websitePlans = [
    {
      nameEn: "Simple Landing Page",
      nameAl: "Landing Page e Thjeshtë",
      oneTime: "€49.99",
      monthly: "€6.99",
      toneEn: "A clean one-page website — fast to launch, easy to update.",
      toneAl: "Website një faqesh e pastër — e shpejtë për t'u lansuar dhe e lehtë për t'u përditësuar.",
      highlight: false,
      featuresEn: [
        "One-page website",
        "Explains your business and prices",
        "Easy contact option for customers",
        "€6.99/month maintenance",
      ],
      featuresAl: [
        "Website një faqesh",
        "Shpjegon biznesin dhe çmimet tuaja",
        "Opsion i lehtë kontakti për klientët",
        "€6.99/muaj mirëmbajtje",
      ],
    },
    {
      nameEn: "Full Custom Website",
      nameAl: "Website i Plotë Custom",
      oneTime: "€249.99",
      monthly: "€24.99",
      toneEn: "A fully custom multi-page website with admin panel and database.",
      toneAl: "Website shumë faqesh, plotësisht custom, me panel admin dhe bazë të dhënash.",
      highlight: true,
      featuresEn: [
        "Fully custom design",
        "Multiple pages based on your needs",
        "Business and product pricing presentation",
        "Admin page for updating prices",
        "Database support",
        "€24.99/month maintenance",
      ],
      featuresAl: [
        "Dizajn plotësisht custom",
        "Faqe të shumta sipas nevojave",
        "Prezantim i biznesit dhe çmimeve",
        "Panel admin për ndryshim çmimesh",
        "Mbështetje bazë të dhënash",
        "€24.99/muaj mirëmbajtje",
      ],
    },
  ];

  const chatbotPlans = [
    {
      nameEn: "One Platform",
      nameAl: "Një Platformë",
      oneTime: "€59.99",
      monthly: "€19.99",
      toneEn: "AI chatbot on one social media platform.",
      toneAl: "Chatbot AI në një platformë rrjetesh sociale.",
      highlight: false,
      featuresEn: [
        "AI replies on one platform",
        "Customer speaks to AI or a human",
      ],
      featuresAl: [
        "AI përgjigjet në një platformë",
        "Klienti flet me AI ose me njeri",
      ],
    },
    {
      nameEn: "Website Chatbot",
      nameAl: "Chatbot për Website",
      oneTime: "€79.99",
      monthly: "€24.99",
      toneEn: "AI chatbot embedded in your website.",
      toneAl: "Chatbot AI i integruar direkt në website-in tuaj.",
      highlight: false,
      featuresEn: [
        "AI replies on your website",
        "Floating chat widget on the site",
        "Customer speaks to AI or a human",
      ],
      featuresAl: [
        "AI përgjigjet në website-in tuaj",
        "Widget chat i integruar në faqe",
        "Klienti flet me AI ose me njeri",
      ],
    },
    {
      nameEn: "All Platforms",
      nameAl: "Të Gjitha Platformat",
      oneTime: "€179.99",
      monthly: "€34.99",
      toneEn: "AI chatbot across all your social media platforms.",
      toneAl: "Chatbot AI në të gjitha platformat tuaja sociale.",
      highlight: true,
      featuresEn: [
        "AI replies on all platforms",
        "Customer speaks to AI or a human",
      ],
      featuresAl: [
        "AI përgjigjet në të gjitha platformat",
        "Klienti flet me AI ose me njeri",
      ],
    },
    {
      nameEn: "All Platforms + Website",
      nameAl: "Të Gjitha Platformat + Website",
      oneTime: "€229.99",
      monthly: "€44.99",
      toneEn: "Complete AI coverage — all platforms and your website.",
      toneAl: "Mbulim i plotë AI — të gjitha platformat dhe website-i juaj.",
      highlight: false,
      featuresEn: [
        "AI replies on all platforms and website",
        "Customer speaks to AI or a human",
      ],
      featuresAl: [
        "AI përgjigjet në të gjitha platformat dhe website",
        "Klienti flet me AI ose me njeri",
      ],
    },
  ];

  const combos = [
    {
      nameEn: "Social + Simple Website",
      nameAl: "Social + Website e Thjeshtë",
      oneTime: "€39.99",
      monthly: "€69.99",
      toneEn: "Social media management plus a one-page website.",
      toneAl: "Menaxhim rrjetesh sociale plus website një faqesh.",
      badgeAl: "Popullor",
      badgeEn: "Popular",
      highlight: false,
      featuresEn: [
        "3 posts/week, 3 stories/week",
        "Trending hashtags & basic guidance",
        "Guidance for ads & end of month report",
        "One-page website with contact form",
      ],
      featuresAl: [
        "3 postime/javë, 3 stories/javë",
        "Hashtags trending & guidancë bazike",
        "Guidancë reklamash & raport mujor",
        "Website një faqesh me kontakt",
      ],
    },
    {
      nameEn: "Social + Custom Website + AI",
      nameAl: "Social + Website Custom + AI",
      oneTime: "€249.99",
      monthly: "€89.99",
      toneEn: "Complete digital package — social media, custom website, and AI chatbot.",
      toneAl: "Paketë e plotë — social media, website custom dhe AI chatbot.",
      badgeAl: "Vlera më e mirë",
      badgeEn: "Best Value",
      highlight: true,
      featuresEn: [
        "Profile cleanup + 4 posts/week + 4 stories/week",
        "Trending hashtags, guidance & monthly report",
        "Fully custom multi-page website",
        "Admin page for updating prices",
        "AI chatbot on your website",
      ],
      featuresAl: [
        "Rregullim profili + 4 postime/javë + 4 stories/javë",
        "Hashtags trending, guidancë & raport mujor",
        "Website custom shumë faqesh",
        "Panel admin për ndryshim çmimesh",
        "AI chatbot në website-in tuaj",
      ],
    },
    {
      nameEn: "Simple Website + AI Chatbot",
      nameAl: "Website e Thjeshtë + AI Chatbot",
      oneTime: "€109.99",
      monthly: "€29.99",
      toneEn: "A simple website with an AI chatbot for visitor messages.",
      toneAl: "Website e thjeshtë me chatbot AI për mesazhet e vizitorëve.",
      badgeAl: null,
      badgeEn: null,
      highlight: false,
      featuresEn: [
        "One-page website with contact form",
        "AI chatbot on your website",
        "Customer speaks to AI or a human",
      ],
      featuresAl: [
        "Website një faqesh me formë kontakti",
        "AI chatbot në website-in tuaj",
        "Klienti flet me AI ose me njeri",
      ],
    },
    {
      nameEn: "Social + AI Chatbot (1 Platform)",
      nameAl: "Social + AI Chatbot (1 Platformë)",
      oneTime: null,
      monthly: "€119.99",
      toneEn: "Social media management with an AI chatbot on one platform.",
      toneAl: "Menaxhim rrjetesh me chatbot AI në një platformë.",
      badgeAl: null,
      badgeEn: null,
      highlight: false,
      featuresEn: [
        "3 posts/week, 3 stories/week",
        "Trending hashtags & basic guidance",
        "Guidance for ads & monthly report",
        "AI chatbot replies on one platform",
      ],
      featuresAl: [
        "3 postime/javë, 3 stories/javë",
        "Hashtags trending & guidancë bazike",
        "Guidancë reklamash & raport mujor",
        "AI chatbot përgjigjet në një platformë",
      ],
    },
  ];

  const PlanCard = ({
    name,
    tone,
    oneTime,
    monthly,
    firstMonth,
    platforms,
    features,
    highlight,
    badge,
  }: {
    name: string;
    tone: string;
    oneTime?: string | null;
    monthly: string;
    firstMonth?: string;
    platforms?: string;
    features: string[];
    highlight: boolean;
    badge?: string | null | undefined;
  }) => (
    <PremiumCard
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={`flex flex-col px-5 py-5 ${
        highlight
          ? "border-primary/30 shadow-[0_20px_60px_-36px_rgba(212,177,61,0.5)]"
          : ""
      }`}
    >
      {badge && (
        <div className="absolute right-3.5 top-3.5 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary">
          <Star size={10} />
          {badge}
        </div>
      )}

      <h3 className="text-[1rem] font-bold text-white pr-16">{name}</h3>
      <p className="mt-1 text-[0.8rem] text-muted-foreground">{tone}</p>

      {platforms && (
        <p className="mt-2 text-[0.75rem] font-medium text-primary/80">{platforms}</p>
      )}

      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <div>
          <span className="text-[1.75rem] font-extrabold tracking-[-0.05em] gold-gradient-text">
            {monthly}
          </span>
          <span className="ml-1 text-[0.78rem] text-muted-foreground">{t("/muaj", "/month")}</span>
        </div>
        {firstMonth && (
          <p className="text-[0.75rem] text-primary/70">
            {t("Muaji i parë:", "First month:")}{" "}
            <span className="font-semibold text-primary">{firstMonth}</span>
          </p>
        )}
        {oneTime && !firstMonth && (
          <div>
            <span className="text-[1.75rem] font-extrabold tracking-[-0.05em] gold-gradient-text">
              {oneTime}
            </span>
            <span className="ml-1 text-[0.78rem] text-muted-foreground">
              {t("njëherë", "one-time")}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex-1 space-y-2 rounded-xl border border-white/8 bg-white/[0.025] p-3.5">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2 text-[0.8rem] text-muted-foreground">
            <Check size={13} className="mt-0.5 shrink-0 text-primary" />
            {f}
          </div>
        ))}
      </div>

      <Link
        to={`/contact?package=${encodeURIComponent(name)}`}
        className={highlight ? "btn-primary mt-4 w-full !text-[0.875rem]" : "btn-secondary mt-4 w-full !text-[0.875rem]"}
      >
        {t("Fillo tani", "Get started")} <ArrowRight size={14} />
      </Link>
    </PremiumCard>
  );

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Çmimet & Paketat", "Pricing & Packages")}
        title={t(
          "Çmime të qarta. Pa surpriza.",
          "Clear pricing. No surprises."
        )}
        subtitle={t(
          "Zgjidhni shërbimin që i përshtatet biznesit tuaj. Çdo paketë është gati për të filluar.",
          "Choose the service that fits your business. Every package is ready to start."
        )}
        stats={[
          { label: t("Social Media nga", "Social Media from"), value: "€69.99/mo" },
          { label: t("Website nga", "Website from"), value: "€49.99" },
          { label: t("AI Chatbot nga", "AI Chatbot from"), value: "€59.99" },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue={defaultTab}>
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex h-auto gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
                <TabsTrigger
                  value="social"
                  className="flex items-center gap-2 rounded-xl px-4 py-2 text-[0.82rem] font-medium transition data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
                >
                  <Share2 size={14} />
                  {t("Social Media", "Social Media")}
                </TabsTrigger>
                <TabsTrigger
                  value="website"
                  className="flex items-center gap-2 rounded-xl px-4 py-2 text-[0.82rem] font-medium transition data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
                >
                  <Globe size={14} />
                  {t("Website", "Website")}
                </TabsTrigger>
                <TabsTrigger
                  value="chatbot"
                  className="flex items-center gap-2 rounded-xl px-4 py-2 text-[0.82rem] font-medium transition data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
                >
                  <Bot size={14} />
                  {t("AI Chatbot", "AI Chatbot")}
                </TabsTrigger>
                <TabsTrigger
                  value="combos"
                  className="flex items-center gap-2 rounded-xl px-4 py-2 text-[0.82rem] font-medium transition data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
                >
                  <Package size={14} />
                  {t("Combo Offers", "Combo Offers")}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="social">
              <div className="mb-5">
                <h2 className="text-[1.25rem] font-bold text-white">
                  {t("Menaxhim i Rrjeteve Sociale", "Social Media Management")}
                </h2>
                <p className="mt-1 text-[0.875rem] text-muted-foreground">
                  {t(
                    "Muaji i parë me çmim special — pastaj tarifa mujore standarde.",
                    "First month at a special rate — then the standard monthly price."
                  )}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {socialPlans.map((plan) => (
                  <PlanCard
                    key={plan.nameEn}
                    name={t(plan.nameAl, plan.nameEn)}
                    tone={t(plan.toneAl, plan.toneEn)}
                    firstMonth={plan.firstMonth}
                    monthly={plan.monthly}
                    platforms={t(plan.platformsAl, plan.platformsEn)}
                    features={lang === "al" ? plan.featuresAl : plan.featuresEn}
                    highlight={plan.highlight}
                    badge={plan.highlight ? t("Më i zgjedhuri", "Most popular") : null}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="website">
              <div className="mb-5">
                <h2 className="text-[1.25rem] font-bold text-white">
                  {t("Zhvillim Websitesh", "Website Development")}
                </h2>
                <p className="mt-1 text-[0.875rem] text-muted-foreground">
                  {t(
                    "Çmim njëherë + mirëmbajtje mujore.",
                    "One-time price plus monthly maintenance."
                  )}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:max-w-3xl">
                {websitePlans.map((plan) => (
                  <PlanCard
                    key={plan.nameEn}
                    name={t(plan.nameAl, plan.nameEn)}
                    tone={t(plan.toneAl, plan.toneEn)}
                    oneTime={plan.oneTime}
                    monthly={`€${plan.monthly.replace("€", "")}/${t("muaj mirëmbajtje", "mo maintenance")}`}
                    features={lang === "al" ? plan.featuresAl : plan.featuresEn}
                    highlight={plan.highlight}
                    badge={plan.highlight ? t("Rekomanduar", "Recommended") : null}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chatbot">
              <div className="mb-5">
                <h2 className="text-[1.25rem] font-bold text-white">
                  {t("AI Chatbot", "AI Chatbot")}
                </h2>
                <p className="mt-1 text-[0.875rem] text-muted-foreground">
                  {t(
                    "Çmim njëherë + mirëmbajtje mujore.",
                    "One-time setup price plus monthly maintenance."
                  )}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {chatbotPlans.map((plan) => (
                  <PlanCard
                    key={plan.nameEn}
                    name={t(plan.nameAl, plan.nameEn)}
                    tone={t(plan.toneAl, plan.toneEn)}
                    oneTime={plan.oneTime}
                    monthly={`${plan.monthly}/${t("muaj", "mo")}`}
                    features={lang === "al" ? plan.featuresAl : plan.featuresEn}
                    highlight={plan.highlight}
                    badge={plan.highlight ? t("Rekomanduar", "Recommended") : null}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="combos">
              <div className="mb-5">
                <h2 className="text-[1.25rem] font-bold text-white">
                  {t("Oferta të Kombinuara", "Combo Offers")}
                </h2>
                <p className="mt-1 text-[0.875rem] text-muted-foreground">
                  {t(
                    "Shërbime të kombinuara me çmim më të mirë sesa individualisht.",
                    "Bundled services at a better price than buying separately."
                  )}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {combos.map((combo) => (
                  <PlanCard
                    key={combo.nameEn}
                    name={t(combo.nameAl, combo.nameEn)}
                    tone={t(combo.toneAl, combo.toneEn)}
                    oneTime={combo.oneTime}
                    monthly={combo.monthly}
                    features={lang === "al" ? combo.featuresAl : combo.featuresEn}
                    highlight={combo.highlight}
                    badge={combo.badgeAl ? t(combo.badgeAl, combo.badgeEn ?? "") : null}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <PremiumCard
            interactive={false}
            className="mt-6 px-5 py-5 text-center md:px-7"
          >
            <span className="premium-badge mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
              {t("Ofertë e personalizuar", "Custom offer")}
            </span>
            <h3 className="mt-4 text-[1.25rem] font-bold tracking-[-0.03em] text-white">
              {t("Keni nevojë për diçka specifike?", "Need something specific?")}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-[0.875rem] text-muted-foreground">
              {t(
                "Na kontaktoni dhe do të krijoni paketë të personalizuar sipas nevojave tuaja.",
                "Contact us and we will build a custom package based on your exact needs."
              )}
            </p>
            <Link to="/contact?package=Custom" className="btn-primary mt-5 inline-flex">
              {t("Kontakto tani", "Contact us")} <ArrowRight size={15} />
            </Link>
          </PremiumCard>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
