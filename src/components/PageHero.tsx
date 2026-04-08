import PremiumCard from "@/components/PremiumCard";

interface PageHeroStat {
  detail?: string;
  label: string;
  value: string;
}

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
  stats?: PageHeroStat[];
}

const PageHero = ({ label, title, subtitle, stats = [] }: PageHeroProps) => (
  <section className="pt-8 md:pt-10 lg:pt-12">
    <div className="container mx-auto px-4 lg:px-8">
      <PremiumCard
        interactive={false}
        className="overflow-hidden px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10"
      >
        <div className="panel-grid absolute inset-0 opacity-[0.18]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8">
          <div className="max-w-[48rem]">
            <span className="premium-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_16px_rgba(212,177,61,0.85)]" />
              {label}
            </span>
            <h1 className="mt-5 max-w-3xl text-[2.35rem] font-extrabold tracking-[-0.045em] text-balance text-white sm:text-[2.75rem] md:text-[3.15rem] lg:text-[3.45rem] lg:leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-[1.04rem]">
              {subtitle}
            </p>
          </div>

          {stats.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/90">
                    {stat.label}
                  </p>
                  <p className="mt-2.5 text-[1.35rem] font-bold tracking-[-0.04em] text-white md:text-[1.45rem]">
                    {stat.value}
                  </p>
                  {stat.detail && (
                    <p className="mt-1 text-sm text-muted-foreground">{stat.detail}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </PremiumCard>
    </div>
  </section>
);

export default PageHero;
