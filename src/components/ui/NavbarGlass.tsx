type NavbarGlassVariant = "hero" | "elevated";

type NavbarGlassProps = {
  children: React.ReactNode;
  className?: string;
  variant?: NavbarGlassVariant;
  fullScreen?: boolean;
};

export function NavbarGlass({
  children,
  className = "",
  variant = "hero",
  fullScreen = false,
}: NavbarGlassProps) {
  return (
    <div
      data-variant={variant}
      className={`navbar-glass-wrap ${fullScreen ? "navbar-glass-fullscreen" : ""} ${className}`}
    >
      <div
        className={`navbar-glass-blur navbar-glass-blur--${variant}`}
        aria-hidden="true"
      />
      <div className="navbar-glass-edge" aria-hidden="true" />
      <div className="navbar-glass-content">{children}</div>
    </div>
  );
}
