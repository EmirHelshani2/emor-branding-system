interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({
  label,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) => (
  <div className={`mb-10 md:mb-12 ${center ? "text-center" : "text-left"}`}>
    {label && (
      <span className={`premium-badge ${center ? "" : "justify-start"}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
        {label}
      </span>
    )}
    <h2
      className={`mt-4 text-[1.75rem] font-bold leading-[1.08] tracking-[-0.045em] text-balance text-white md:text-[2.05rem] lg:text-[2.45rem] ${
        center ? "mx-auto max-w-4xl" : "max-w-3xl"
      }`}
    >
      {title}
    </h2>
    <div
      className={`mt-4 h-px w-20 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent ${
        center ? "mx-auto" : ""
      }`}
    />
    {subtitle && (
      <p
        className={`mt-4 text-[0.94rem] leading-relaxed text-muted-foreground md:text-[1rem] ${
          center ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
