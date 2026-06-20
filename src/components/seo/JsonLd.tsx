import { type Locale } from "@/lib/i18n/translations";

type JsonLdProps = {
  locale: Locale;
  subtitle: string;
};

export function JsonLd({ locale, subtitle }: JsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "GIGU Moda Akademiyasi",
    description: subtitle,
    url: `https://gigu.uz/${locale}`,
    inLanguage: locale,
    foundingDate: "2012",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 100,
    },
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
    knowsAbout: ["Fashion Design", "Sewing", "Pattern Making"],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
