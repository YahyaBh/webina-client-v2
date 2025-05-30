import { Toaster } from "react-hot-toast";
import "./globals.scss";
import ClientWrapper from "./client";
import Head from "next/head";
import GoogleAnalytics from "./lib/GoogleAnalyze";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Webina Digital - Agence Web Leader au Maroc",
    template: "%s | Webina Digital"
  },
  description: "Agence web numéro 1 au Maroc - Création de sites web, applications mobiles et solutions digitales sur mesure pour entreprises marocaines.",
  keywords: [
    "agence web Maroc",
    "création site web Maroc",
    "développement web Maroc",
    "référencement naturel Maroc",
    "marketing digital Maroc",
    "application mobile Maroc",
    "e-commerce Maroc",
    "design web Maroc",
    "SEO Maroc",
    "solution digitale Maroc"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Webina Digital - Expertise Digitale au Maroc",
    description: "Agence web certifiée au Maroc - Solutions digitales clé en main pour entreprises marocaines",
    url: "https://webinadigital.com",
    siteName: "Webina Digital",
    images: [
      {
        url: "https://webinadigital.com/WEBINA.webp",
        width: 1200,
        height: 630,
        alt: "Webina Digital - Agence Web Maroc",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webina Digital 🇲🇦 - Expertise Web au Maroc",
    description: "Votre partenaire digital au Maroc - Création de sites web professionnels et solutions e-commerce",
    images: {
      url: "https://webinadigital.com/WEBINA.webp",
      alt: "Agence Webina Digital Maroc",
    },
    creator: "@webinadigital_ma",
  },
  metadataBase: new URL("https://webinadigital.com"),
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://webinadigital.com",
    languages: {
      "fr-MA": "https://webinadigital.com/fr",
      "ar-MA": "https://webinadigital.com/ar",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_KEY",
    yandex: "YANDEX_VERIFICATION_KEY",
    me: ["contact@webinadigital.com", "https://webinadigital.com/privacy-policy"],
  },
};

export const viewport = {
  themeColor: "#FFE662",
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Webina Digital",
  "url": "https://webinadigital.com",
  "logo": "https://webinadigital.com/WEBINA.webp",
  "image": "https://webinadigital.com/LogoMA.jpg",
  "priceRange": "$$$",
  "telephone": "+212-704-586-166",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hay Essalam , Annahda 8-9 , Imm 56 App 243",
    "addressLocality": "Agadir",
    "addressRegion": "MA-AGA",
    "postalCode": "80000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.5731",
    "longitude": "-7.5898"
  },
  "sameAs": [
    "https://www.facebook.com/webinadigital",
    "https://www.linkedin.com/company/webinadigital",
    "https://www.instagram.com/webina.digital/",
    "https://twitter.com/webinadigital",
    "https://www.youtube.com/@webinadigital",
    "https://www.tiktok.com/@webina.digital",
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  }
};



export default function RootLayout({ children }) {

  return (
    <html lang="fr-MA">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Cairo:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Agadir" />
        <meta name="ICBM" content="33.5731, -7.5898" />

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Script type="text/javascript" defer async src="https://consent.cookiefirst.com/sites/webinadigital.com-c3799191-e0c1-43c0-bff1-995e7ad13f08/consent.js" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/fr_FR/fbevents.js');
              fbq('init', 'FB_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>

      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Toaster position="bottom-right" />


        <GoogleAnalytics />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1719904931896347&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </body>
    </html>
  );
}