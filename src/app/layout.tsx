import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import { MetaPixelRouteEvents } from "@/components/providers/MetaPixelRouteEvents";
import "./globals.css";

const META_PIXEL_ID = "571801219132029";

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
  /* Nisbiy URL'lar (OG rasm, alternates, canonical) shu manzilga nisbatan
     hisoblanadi. Apex domen www ga 308 bilan yo'naltirilgani uchun
     kanonik manzil — www. */
  metadataBase: new URL("https://www.giguacademy.uz"),
  title: {
    default: "GIGU Moda Akademiyasi — Tikuvchilik va Moda Dizayni",
    template: "%s | GIGU Moda Akademiyasi",
  },
  description:
    "Ayol-qizlar uchun professional tikuvchilik va moda dizaynerlik akademiyasi. 14 yillik tajriba, 5000+ bitiruvchi, 5 ta filial.",
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
      <body className="font-body antialiased">
        {children}

        <MetaPixelRouteEvents />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
