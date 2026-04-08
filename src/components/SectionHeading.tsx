interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-14 ${center ? "text-center" : ""}`}>
    {label && (
      <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
