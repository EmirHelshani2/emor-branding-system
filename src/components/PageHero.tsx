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
  <section className="pt-32 md:pt-36">
    <div className="container mx-auto px-4 lg:px-8">
      <PremiumCard interactive={false} className="overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="panel-grid absolute inset-0 opacity-[0.18]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="premium-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_16px_rgba(212,177,61,0.85)]" />
              {label}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-balance text-white md:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </div>

          {stats.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/90">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">
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
