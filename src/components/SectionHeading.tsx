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
  <div className={`mb-8 md:mb-10 ${center ? "text-center" : "text-left"}`}>
    {label && (
      <span className={`premium-badge ${center ? "" : "justify-start"}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
        {label}
      </span>
    )}
    <h2
      className={`mt-3 text-[1.5rem] font-bold leading-[1.1] tracking-[-0.04em] text-balance text-white md:text-[1.75rem] lg:text-[2rem] ${
        center ? "mx-auto max-w-3xl" : "max-w-2xl"
      }`}
    >
      {title}
    </h2>
    <div
      className={`mt-3.5 h-px w-14 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent ${
        center ? "mx-auto" : ""
      }`}
    />
    {subtitle && (
      <p
        className={`mt-3.5 text-[0.88rem] leading-relaxed text-muted-foreground md:text-[0.92rem] ${
          center ? "mx-auto max-w-xl" : "max-w-xl"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
