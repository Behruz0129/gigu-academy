import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadPageShell } from "@/components/layout/LeadPageShell";
import { Icon } from "@/components/ui/Icon";
import {
  isValidLocale,
  locales,
  translations,
} from "@/lib/i18n/translations";

type ThanksPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ThanksPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) return {};

  return {
    title: translations[localeParam].contact.form.successTitle,
    robots: { index: false, follow: false },
  };
}

export default async function ThanksPage({ params }: ThanksPageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const f = translations[localeParam].contact.form;

  return (
    <LeadPageShell locale={localeParam}>
      <div className="lead-page-card">
        <div className="contact-form contact-success" role="status">
          <span className="contact-success-icon" aria-hidden="true">
            <Icon name="check" size={28} strokeWidth={2.5} />
          </span>
          <h1 className="contact-success-title">{f.successTitle}</h1>
          <p className="contact-success-text">{f.successText}</p>
          <Link href={`/${localeParam}#enroll`} className="contact-reset">
            {f.reset}
          </Link>
        </div>
      </div>
    </LeadPageShell>
  );
}
