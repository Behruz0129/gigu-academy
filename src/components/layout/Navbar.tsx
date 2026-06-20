"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/providers/I18nProvider";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { NavLink } from "@/components/ui/NavLink";
import { NavAboutDropdown } from "@/components/ui/NavAboutDropdown";
import { NavbarGlass } from "@/components/ui/NavbarGlass";
import { Icon } from "@/components/ui/Icon";
import { mainNavLinks } from "@/lib/i18n/translations";

const NAVBAR_HEIGHT = 72;

export function Navbar() {
  const { locale, t } = useI18n();
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const variant = pastHero ? "elevated" : "hero";

  useEffect(() => {
    const hero = document.getElementById("showcase");
    if (!hero) return;

    const update = () => {
      const { bottom } = hero.getBoundingClientRect();
      setPastHero(bottom <= NAVBAR_HEIGHT);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  const hamburgerVariant = menuOpen || !pastHero ? "hero" : "elevated";
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 md:px-6 nav:px-8">
        <NavbarGlass
          variant={variant}
          className="pointer-events-auto mx-auto max-w-[1280px]"
        >
          <nav
            className="flex h-[3.75rem] items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 md:px-8"
            aria-label="Asosiy navigatsiya"
          >
            <a href={`/${locale}`} className="flex shrink-0 items-center">
              <Image
                src={variant === "hero" ? "/logo-white.svg" : "/logo.svg"}
                alt="GIGU Moda Akademiyasi"
                width={160}
                height={48}
                priority
                className="h-9 w-auto sm:h-10 md:h-11"
              />
            </a>

            <ul className="hidden items-center gap-6 nav:flex xl:gap-8">
              <li>
                <NavAboutDropdown
                  label={t.nav.about}
                  getLabel={(key) => t.nav[key]}
                  glassVariant={variant}
                />
              </li>
              {mainNavLinks.map(({ key, href }) => (
                <li key={key}>
                  <NavLink href={href} variant="desktop">
                    {t.nav[key]}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-5 nav:flex">
              <LanguageSwitcher variant={variant === "hero" ? "dark" : "light"} />
              <a href="#enroll" className="btn-shiny text-[0.6875rem]">
                <span>{t.nav.cta}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 nav:hidden">
              <LanguageSwitcher
                variant={hamburgerVariant === "hero" ? "dark" : "light"}
              />
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] transition-colors ${
                  hamburgerVariant === "hero"
                    ? "text-white hover:bg-white/10"
                    : "text-text-primary hover:bg-black/5"
                }`}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? t.nav.close : t.nav.menu}
              >
                <Icon name={menuOpen ? "close" : "menu"} size={20} />
              </button>
            </div>
          </nav>
        </NavbarGlass>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="nav-drawer-backdrop fixed inset-0 z-40 nav:hidden"
              aria-label={t.nav.close}
              onClick={closeMenu}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="nav-drawer fixed inset-y-0 right-0 z-50 w-1/2 min-w-[17.5rem] max-w-[22rem] nav:hidden"
              aria-label="Mobil navigatsiya"
            >
              <div className="nav-drawer-header px-6 pt-6 sm:px-8 sm:pt-8">
                <button
                  type="button"
                  className="nav-drawer-close"
                  onClick={closeMenu}
                  aria-label={t.nav.close}
                >
                  <Icon name="close" size={20} />
                </button>
              </div>
              <nav className="mobile-nav-panel flex flex-1 flex-col overflow-y-auto px-6 sm:px-8">
                <ul className="space-y-6">
                  <motion.li
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0 }}
                  >
                    <NavAboutDropdown
                      label={t.nav.about}
                      getLabel={(key) => t.nav[key]}
                      variant="drawer"
                      onNavigate={closeMenu}
                    />
                  </motion.li>
                  {mainNavLinks.map(({ key, href }, i) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i + 1) * 0.05 }}
                    >
                      <NavLink
                        href={href}
                        variant="drawer"
                        onClick={closeMenu}
                      >
                        {t.nav[key]}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-10"
                >
                  <a
                    href="#enroll"
                    onClick={closeMenu}
                    className="btn-shiny w-full text-center"
                  >
                    <span>{t.nav.cta}</span>
                  </a>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
