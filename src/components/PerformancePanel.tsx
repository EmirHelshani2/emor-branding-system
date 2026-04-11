import { ArrowUpRight, Clock3, Target, TrendingUp } from "lucide-react";
import logo from "@/assets/emor-logo.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";

const PerformancePanel = () => {
  const { t } = useLanguage();

  const channels = [
    { label: t("Meta fushata", "Meta campaigns"), value: 82, tone: "bg-primary" },
    { label: t("Përmbajtje organike", "Organic content"), value: 68, tone: "bg-primary/80" },
    { label: t("Web konvertime", "Web conversions"), value: 54, tone: "bg-white/65" },
  ];

  const quickSignals = [
    { icon: TrendingUp, label: t("Rritje mujore", "Monthly growth"), value: "+186%" },
    { icon: Target, label: t("Lead quality", "Lead quality"), value: "94/100" },
    { icon: Clock3, label: t("Koha e përgjigjes", "Response time"), value: "< 24h" },
  ];

  return (
    <PremiumCard
      interactive={false}
      className="overflow-hidden px-4 py-4 md:px-5 md:py-5"
    >
      <div className="panel-grid absolute inset-0 opacity-[0.14]" />
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <span className="premium-badge">
            <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(212,177,61,0.8)]" />
            {t("Panel Strategjik", "Strategic Panel")}
          </span>
          <h3 className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-white md:text-[1.3rem]">
            {t("EMOR Growth Deck", "EMOR Growth Deck")}
          </h3>
          <p className="mt-2 max-w-md text-[0.78rem] leading-relaxed text-muted-foreground">
            {t(
              "Pamje elegante e performancës për markat që duan rritje dhe prezencë më të fortë.",
              "Elegant performance snapshot for brands that want growth and stronger presence."
            )}
          </p>
        </div>

        <div className="hidden rounded-lg border border-white/8 bg-white/[0.03] p-2 sm:block">
          <img
            src={logo}
            alt="EMOR Marketing"
            className="h-8 w-auto drop-shadow-[0_0_14px_rgba(212,177,61,0.15)]"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-2.5 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-primary/90">
            {t("Momentumi i Markës", "Brand momentum")}
          </p>
          <div className="mt-2 flex items-end gap-2.5">
            <AnimatedCounter
              value={186}
              prefix="+"
              suffix="%"
              className="text-[1.85rem] font-extrabold tracking-[-0.06em] gold-gradient-text"
            />
            <span className="mb-1 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <ArrowUpRight size={10} />
              {t("Q4 Outlook", "Q4 Outlook")}
            </span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { label: t("Reach", "Reach"), value: 284, suffix: "k" },
              { label: t("Leads", "Leads"), value: 124 },
              { label: t("CTR", "CTR"), value: 5.8, decimals: 1, suffix: "%" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-white/6 bg-background/50 p-2.5">
                <p className="text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">{m.label}</p>
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  decimals={m.decimals}
                  className="mt-1 block text-[1.05rem] font-bold tracking-[-0.04em] text-white"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 rounded-lg border border-white/8 bg-white/[0.03] p-3">
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-primary/90">
            {t("Burimet Kryesore", "Primary channels")}
          </p>
          {channels.map((channel) => (
            <div key={channel.label}>
              <div className="mb-1 flex items-center justify-between text-[0.78rem]">
                <span className="text-white">{channel.label}</span>
                <span className="text-muted-foreground">{channel.value}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
                <div
                  className={`h-full rounded-full ${channel.tone} shadow-[0_0_10px_rgba(212,177,61,0.2)]`}
                  style={{ width: `${channel.value}%` }}
                />
              </div>
            </div>
          ))}

          <div className="mt-3 rounded-lg border border-primary/12 bg-primary/[0.05] p-2.5">
            <p className="text-[0.58rem] uppercase tracking-[0.2em] text-primary/90">
              {t("Shënim Strategjik", "Strategy note")}
            </p>
            <p className="mt-1.5 text-[0.76rem] leading-relaxed text-muted-foreground">
              {t(
                "Përmbajtja me drejtim vizual po sjell më shumë klikime dhe lead-e më të kualifikuara.",
                "Creative-led content is driving more clicks and better-qualified leads."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {quickSignals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-lg border border-white/8 bg-background/50 px-3 py-2.5"
          >
            <div className="flex items-center gap-1.5 text-primary">
              <signal.icon size={12} />
              <span className="text-[0.58rem] uppercase tracking-[0.18em]">{signal.label}</span>
            </div>
            <p className="mt-1.5 text-[0.88rem] font-bold tracking-[-0.03em] text-white">{signal.value}</p>
          </div>
        ))}
      </div>
    </PremiumCard>
  );
};

export default PerformancePanel;
