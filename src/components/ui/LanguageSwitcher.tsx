"use client";

import Link from "next/link";
import { locales, localeLabels } from "@/lib/i18n/translations";
import { useI18n } from "@/components/providers/I18nProvider";

type LanguageSwitcherProps = {
  variant?: "dark" | "light";
};

export function LanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const { locale } = useI18n();

  const baseClass =
    variant === "dark"
      ? "text-white/50 hover:text-white data-[active=true]:text-white data-[active=true]:border-white"
      : "text-text-muted hover:text-text-primary data-[active=true]:text-text-primary data-[active=true]:border-text-primary";

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label="Til tanlash"
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}`}
          scroll={false}
          data-active={locale === loc}
          className={`border-b border-transparent px-1.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] transition-colors ${baseClass}`}
          aria-current={locale === loc ? "true" : undefined}
        >
          {localeLabels[loc]}
        </Link>
      ))}
    </div>
  );
}
