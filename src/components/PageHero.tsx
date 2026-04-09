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
  <section className="pt-4 md:pt-6">
    <div className="container mx-auto px-4 lg:px-8">
      <PremiumCard
        interactive={false}
        className="overflow-hidden px-4 py-5 md:px-6 md:py-6"
      >
        <div className="panel-grid absolute inset-0 opacity-[0.14]" />
        <div className="relative grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-6">
          <div className="max-w-[42rem]">
            <span className="premium-badge">
              <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_12px_rgba(212,177,61,0.85)]" />
              {label}
            </span>
            <h1 className="mt-3 max-w-2xl text-[1.5rem] font-extrabold tracking-[-0.04em] text-balance text-white sm:text-[1.75rem] md:text-[2rem] lg:text-[2.15rem] lg:leading-[1.1]">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-[0.84rem] leading-relaxed text-muted-foreground md:text-[0.88rem]">
              {subtitle}
            </p>
          </div>

          {stats.length > 0 && (
            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-primary/90">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[1rem] font-bold tracking-[-0.03em] text-white">
                    {stat.value}
                  </p>
                  {stat.detail && (
                    <p className="mt-0.5 text-[0.78rem] text-muted-foreground">{stat.detail}</p>
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
