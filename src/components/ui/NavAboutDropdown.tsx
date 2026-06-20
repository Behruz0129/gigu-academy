"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { NavLink } from "@/components/ui/NavLink";
import {
  aboutDropdownLinks,
  type AboutDropdownKey,
} from "@/lib/i18n/translations";
type NavAboutDropdownProps = {
  label: string;
  getLabel: (key: AboutDropdownKey) => string;
  variant?: "desktop" | "drawer";
  glassVariant?: "hero" | "elevated";
  onNavigate?: () => void;
};

export function NavAboutDropdown({
  label,
  getLabel,
  variant = "desktop",
  glassVariant = "elevated",
  onNavigate,
}: NavAboutDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "desktop" || !open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, variant]);

  if (variant === "drawer") {
    return (
      <div className="nav-about-drawer">
        <button
          type="button"
          className="nav-about-drawer-trigger nav-link nav-link-drawer font-display text-2xl text-text-primary sm:text-3xl"
          aria-expanded={open}
          aria-controls="nav-about-drawer-submenu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{label}</span>
          <Icon
            name="chevronDown"
            size={20}
            className={`nav-about-drawer-chevron ${open ? "nav-about-drawer-chevron--open" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              id="nav-about-drawer-submenu"
              className="nav-about-drawer-submenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {aboutDropdownLinks.map(({ key, href }) => (
                <li key={key}>
                  <NavLink href={href} variant="drawerSub" onClick={onNavigate}>
                    {getLabel(key)}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }
  return (
    <div
      ref={rootRef}
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown-trigger nav-link text-[0.6875rem] font-medium uppercase tracking-[0.1em]"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <Icon
          name="chevronDown"
          size={14}
          className={`nav-dropdown-chevron ${open ? "nav-dropdown-chevron--open" : ""}`}
        />
      </button>

      <ul
        className={`nav-dropdown-panel nav-dropdown-panel--${glassVariant} ${open ? "nav-dropdown-panel--open" : ""}`}
        role="menu"
      >
        {aboutDropdownLinks.map(({ key, href }) => (
          <li key={key} role="none">
            <a
              href={href}
              role="menuitem"
              className="nav-dropdown-item"
              onClick={() => setOpen(false)}
            >
              {getLabel(key)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
