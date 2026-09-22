type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({ title, subtitle, kicker, centered, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center mb-10" : "section-rule mb-10"} ${className}`}>
      {kicker && <div className="label-caps text-accent text-xs mb-2">{kicker}</div>}
      <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">{title}</h2>
      {subtitle && (
        <p className={`text-muted-foreground mt-2 text-sm ${centered ? "max-w-lg mx-auto mt-3" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
