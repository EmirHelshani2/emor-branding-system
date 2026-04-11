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
  <section className="pt-6 md:pt-8 lg:pt-10">
    <div className="container mx-auto px-4 lg:px-8">
      <PremiumCard
        interactive={false}
        className="overflow-hidden px-5 py-5 md:px-7 md:py-6 lg:px-8 lg:py-7"
      >
        <div className="panel-grid absolute inset-0 opacity-[0.15]" />
        <div className="relative grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-6">
          <div>
            <span className="premium-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.85)]" />
              {label}
            </span>
            <h1 className="mt-3 max-w-2xl text-[1.75rem] font-extrabold tracking-[-0.04em] text-balance text-white sm:text-[2rem] md:text-[2.35rem] lg:text-[2.6rem] lg:leading-[1.08]">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground md:text-[0.92rem]">
              {subtitle}
            </p>
          </div>

          {stats.length > 0 && (
            <div className="grid gap-2.5 grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[0.95rem] border border-white/10 bg-white/[0.03] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-primary/90">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-[1.05rem] font-bold tracking-[-0.03em] text-white">
                    {stat.value}
                  </p>
                  {stat.detail && (
                    <p className="mt-0.5 text-[0.8rem] text-muted-foreground">{stat.detail}</p>
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
