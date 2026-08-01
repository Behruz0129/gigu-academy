import Link from "next/link";
import type { Locale } from "@/lib/i18n/translations";
import { localePath } from "@/lib/i18n/translations";

type LeadPageShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function LeadPageShell({ locale, children }: LeadPageShellProps) {
  return (
    <div className="lead-page">
      <div className="lead-page-glow" aria-hidden="true" />

      <header className="lead-page-header">
        <Link href={localePath(locale)} className="lead-page-logo">
          GIGU
        </Link>
      </header>

      <main className="lead-page-main">{children}</main>

      <footer className="lead-page-footer">
        <Link href={localePath(locale)} className="lead-page-back">
          ← giguacademy.uz
        </Link>
      </footer>
    </div>
  );
}
