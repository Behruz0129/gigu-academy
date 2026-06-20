type SectionHeaderContent = {
  number: string;
  badge: string;
  title: string;
  titleEm: string;
  description: string;
};

type SectionHeaderProps = SectionHeaderContent & {
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  number,
  badge,
  title,
  titleEm,
  description,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`max-w-2xl ${className}`}>
      <div className="mb-6 flex items-end gap-4">
        <span
          className={`font-display text-5xl font-light leading-none sm:text-6xl md:text-7xl ${
            dark ? "text-white/20" : "text-primary/20"
          }`}
          aria-hidden="true"
        >
          {number}
        </span>
        <span
          className={`section-badge ${dark ? "border-white/40 text-white/60" : ""}`}
        >
          {badge}
        </span>
      </div>
      <h2
        className={`font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl ${
          dark ? "text-white" : "text-text-primary"
        }`}
      >
        {title}{" "}
        <em className="font-display italic text-gradient-pink">{titleEm}</em>
      </h2>
      <p
        className={`mt-4 max-w-lg text-base leading-relaxed sm:text-lg ${
          dark ? "text-white/60" : "text-muted"
        }`}
      >
        {description}
      </p>
    </header>
  );
}

export function getSectionHeaderProps(
  section: SectionHeaderContent,
): Omit<SectionHeaderProps, "dark" | "className"> {
  return {
    number: section.number,
    badge: section.badge,
    title: section.title,
    titleEm: section.titleEm,
    description: section.description,
  };
}
