import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadPageShell } from "@/components/layout/LeadPageShell";
import { Icon } from "@/components/ui/Icon";
import {
  getAllLeadSourceSlugs,
  getLeadSourcePage,
} from "@/lib/crm/lead-sources";
import {
  isValidLocale,
  translations,
  type Locale,
} from "@/lib/i18n/translations";

type ThanksPageProps = {
  params: Promise<{ locale: string; source: string }>;
};

export function generateStaticParams() {
  return getAllLeadSourceSlugs().flatMap((source) =>
    (["uz", "ru", "en"] as Locale[]).map((locale) => ({
      locale,
      source,
    })),
  );
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

export default async function LeadThanksPage({ params }: ThanksPageProps) {
  const { locale: localeParam, source } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const page = getLeadSourcePage(source);
  if (!page) {
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
          <Link
            href={`/${localeParam}/lead/${page.slug}`}
            className="contact-reset"
          >
            {f.reset}
          </Link>
        </div>
      </div>
    </LeadPageShell>
  );
}
