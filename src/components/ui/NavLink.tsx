type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "desktop" | "mobile" | "drawer" | "drawerSub";
};

export function NavLink({
  href,
  children,
  onClick,
  variant = "desktop",
}: NavLinkProps) {
  const className =
    variant === "drawerSub"
      ? "nav-link nav-link-drawer-sub font-display text-xl sm:text-2xl"
      : variant === "drawer"
        ? "nav-link nav-link-drawer font-display text-2xl text-text-primary sm:text-3xl"
        : variant === "mobile"
          ? "nav-link nav-link-mobile font-display text-3xl text-white"
          : "nav-link text-[0.6875rem] font-medium uppercase tracking-[0.1em]";

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
