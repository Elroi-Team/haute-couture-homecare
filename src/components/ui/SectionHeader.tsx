interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = "center",
  dark = false,
}: SectionHeaderProps) {
  const alignmentClasses = alignment === "center" ? "text-center mx-auto" : "";
  const textColor = dark ? "text-ivory" : "text-charcoal";
  const mutedColor = dark ? "text-ivory/70" : "text-charcoal-light";

  return (
    <header className={`max-w-2xl mb-12 md:mb-16 ${alignmentClasses}`}>
      {eyebrow && (
        <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif ${textColor}`}>{title}</h2>
      <div
        className={`divider ${alignment === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {description && (
        <p className={`text-lg leading-relaxed ${mutedColor}`}>{description}</p>
      )}
    </header>
  );
}
