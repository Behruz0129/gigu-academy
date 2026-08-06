import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/forms/LeadForm";
import { LeadPageShell } from "@/components/layout/LeadPageShell";
import {
  getAllLeadSourceSlugs,
  getLeadSourcePage,
} from "@/lib/crm/lead-sources";
import { isValidLocale, type Locale } from "@/lib/i18n/translations";

type LeadPageProps = {
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
}: LeadPageProps): Promise<Metadata> {
  const { locale: localeParam, source } = await params;

  if (!isValidLocale(localeParam)) return {};

  const page = getLeadSourcePage(source);
  if (!page) return {};

  const copy = page.copy[localeParam];

  return {
    title: `${copy.title} ${copy.titleEm}`,
    description: copy.description,
    robots: { index: false, follow: false },
  };
}

export default async function LeadSourcePage({ params }: LeadPageProps) {
  const { locale: localeParam, source } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const page = getLeadSourcePage(source);
  if (!page) {
    notFound();
  }

  const copy = page.copy[localeParam];

  return (
    <LeadPageShell locale={localeParam}>
      <div className="lead-page-card">
        <header className="lead-page-intro">
          <span className="badge-secondary mb-4">{copy.badge}</span>
          <h1 className="lead-page-title font-display">
            {copy.title}{" "}
            <em className="font-display italic text-gradient-pink">
              {copy.titleEm}
            </em>
          </h1>
          {copy.description ? (
            <p className="lead-page-description">{copy.description}</p>
          ) : null}
        </header>

        <LeadForm
          source={page.slug}
          successHref={`/${localeParam}/lead/${page.slug}/thanks`}
        />
      </div>
    </LeadPageShell>
  );
}
