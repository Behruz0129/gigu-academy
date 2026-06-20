import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GIGU Moda Akademiyasi — Tikuvchilik va Moda Dizayni",
    template: "%s | GIGU Moda Akademiyasi",
  },
  description:
    "Ayol-qizlar uchun professional tikuvchilik va moda dizaynerlik akademiyasi. 14 yillik tajriba, 5000+ bitiruvchi, 4 ta filial.",
  keywords: [
    "moda akademiyasi",
    "tikuvchilik kurslari",
    "moda dizayni",
    "GIGU",
    "fashion academy",
    "sewing courses",
  ],
  authors: [{ name: "GIGU Moda Akademiyasi" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    siteName: "GIGU Moda Akademiyasi",
    title: "GIGU Moda Akademiyasi — Tikuvchilik va Moda Dizayni",
    description:
      "Ayol-qizlar uchun professional tikuvchilik va moda dizaynerlik akademiyasi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${cormorant.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
