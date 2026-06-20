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
  badge,
  title,
  titleEm,
  description,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <span
        className={`badge-secondary mb-5${dark ? " badge-secondary--on-dark" : ""}`}
      >
        {badge}
      </span>
      <h2
        className={`font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl ${
          dark ? "text-white" : "text-text-primary"
        }`}
      >
        {title}{" "}
        <em className="font-display italic text-gradient-pink">{titleEm}</em>
      </h2>
      <p
        className={`mt-4 max-w-xl text-base leading-relaxed sm:text-lg ${
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
