import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { I18nProvider } from "@/components/providers/I18nProvider";
import {
  isValidLocale,
  locales,
  type Locale,
  translations,
} from "@/lib/i18n/translations";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const localeToOg: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
};

const metadataByLocale: Record<
  Locale,
  { title: string; description: string }
> = {
  uz: {
    title: "GIGU Moda Akademiyasi — Tikuvchilik va Moda Dizayni",
    description:
      "Ayol-qizlar uchun professional tikuvchilik va moda dizaynerlik akademiyasi. 14 yillik tajriba, 5000+ bitiruvchi, 4 ta filial.",
  },
  ru: {
    title: "GIGU Moda Akademiyasi — Шитьё и модный дизайн",
    description:
      "Профессиональная академия шитья и моды для женщин и девушек. 14 лет опыта, 5000+ выпускников, 4 филиала.",
  },
  en: {
    title: "GIGU Fashion Academy — Sewing & Fashion Design",
    description:
      "Professional sewing and fashion design academy for women and girls. 14 years of experience, 5000+ graduates, 4 branches.",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    return {};
  }

  const meta = metadataByLocale[localeParam];

  return {
    title: {
      default: meta.title,
      template: `%s | GIGU Moda Akademiyasi`,
    },
    description: meta.description,
    openGraph: {
      type: "website",
      locale: localeToOg[localeParam],
      alternateLocale: locales
        .filter((loc) => loc !== localeParam)
        .map((loc) => localeToOg[loc]),
      siteName: "GIGU Moda Akademiyasi",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `/${loc}`]),
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  return (
    <I18nProvider locale={localeParam}>
      <JsonLd locale={localeParam} subtitle={translations[localeParam].hero.subtitle} />
      {children}
    </I18nProvider>
  );
}
