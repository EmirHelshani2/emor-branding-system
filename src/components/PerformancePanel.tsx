import { ArrowUpRight, Clock3, Target, TrendingUp } from "lucide-react";
import logo from "@/assets/emor-logo.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";

const PerformancePanel = () => {
  const { t } = useLanguage();

  const channels = [
    {
      label: t("Meta fushata", "Meta campaigns"),
      value: 82,
      tone: "bg-primary",
    },
    {
      label: t("Përmbajtje organike", "Organic content"),
      value: 68,
      tone: "bg-primary/80",
    },
    {
      label: t("Web konvertime", "Web conversions"),
      value: 54,
      tone: "bg-white/65",
    },
  ];

  const quickSignals = [
    {
      icon: TrendingUp,
      label: t("Rritje mujore", "Monthly growth"),
      value: "+186%",
    },
    {
      icon: Target,
      label: t("Lead quality", "Lead quality"),
      value: "94/100",
    },
    {
      icon: Clock3,
      label: t("Koha e përgjigjes", "Response time"),
      value: "< 24h",
    },
  ];

  return (
    <PremiumCard
      interactive={false}
      className="overflow-hidden px-6 py-6 md:px-8 md:py-8"
    >
      <div className="panel-grid absolute inset-0 opacity-[0.18]" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="premium-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
            {t("Panel Strategjik", "Strategic Panel")}
          </span>
          <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-white md:text-[2rem]">
            {t("EMOR Growth Deck", "EMOR Growth Deck")}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {t(
              "Një pamje elegante e performancës për markat që duan rritje, qartësi dhe prezencë më të fortë digjitale.",
              "An elegant performance snapshot for brands that want growth, clarity, and stronger digital presence."
            )}
          </p>
        </div>

        <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:block">
          <img
            src={logo}
            alt="EMOR Marketing"
            className="h-12 w-auto drop-shadow-[0_0_20px_rgba(212,177,61,0.2)]"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/90">
            {t("Momentumi i Markës", "Brand momentum")}
          </p>
          <div className="mt-4 flex items-end gap-3">
            <AnimatedCounter
              value={186}
              prefix="+"
              suffix="%"
              className="text-5xl font-extrabold tracking-[-0.06em] gold-gradient-text"
            />
            <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <ArrowUpRight size={12} />
              {t("Q4 Outlook", "Q4 Outlook")}
            </span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-background/50 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {t("Reach", "Reach")}
              </p>
              <AnimatedCounter
                value={284}
                suffix="k"
                className="mt-2 block text-2xl font-bold tracking-[-0.05em] text-white"
              />
            </div>
            <div className="rounded-2xl border border-white/8 bg-background/50 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {t("Leads", "Leads")}
              </p>
              <AnimatedCounter
                value={124}
                className="mt-2 block text-2xl font-bold tracking-[-0.05em] text-white"
              />
            </div>
            <div className="rounded-2xl border border-white/8 bg-background/50 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {t("CTR", "CTR")}
              </p>
              <AnimatedCounter
                value={5.8}
                decimals={1}
                suffix="%"
                className="mt-2 block text-2xl font-bold tracking-[-0.05em] text-white"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/90">
            {t("Burimet Kryesore", "Primary channels")}
          </p>
          {channels.map((channel) => (
            <div key={channel.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white">{channel.label}</span>
                <span className="text-muted-foreground">{channel.value}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/6">
                <div
                  className={`h-full rounded-full ${channel.tone} shadow-[0_0_16px_rgba(212,177,61,0.25)]`}
                  style={{ width: `${channel.value}%` }}
                />
              </div>
            </div>
          ))}

          <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/[0.06] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-primary/90">
              {t("Shënim Strategjik", "Strategy note")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(
                "Përmbajtja me drejtim të qartë vizual po sjell më shumë klikime dhe lead-e më të kualifikuara sesa fushatat pa strukturë kreative.",
                "Creative-led content is driving more clicks and better-qualified leads than campaigns without a strong visual system."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {quickSignals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-[1.2rem] border border-white/10 bg-background/55 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div className="flex items-center gap-2 text-primary">
              <signal.icon size={16} />
              <span className="text-[0.72rem] uppercase tracking-[0.22em]">
                {signal.label}
              </span>
            </div>
            <p className="mt-3 text-xl font-bold tracking-[-0.04em] text-white">
              {signal.value}
            </p>
          </div>
        ))}
      </div>
    </PremiumCard>
  );
};

export default PerformancePanel;
