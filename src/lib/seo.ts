import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getContent } from "@/content";
import type { Language, FaqItem } from "@/content/schema";

/**
 * Generates SEO canonical and hreflang alternate links.
 * Default (es) maps to root "/", en to "/en", zh to "/zh", x-default to "/".
 */
export function getHreflangAlternates(lang?: Language) {
  const canonical =
    lang === "en"
      ? `${SITE_CONFIG.url}/en`
      : lang === "zh"
      ? `${SITE_CONFIG.url}/zh`
      : `${SITE_CONFIG.url}/`;

  return {
    canonical,
    languages: {
      es: `${SITE_CONFIG.url}/`,
      en: `${SITE_CONFIG.url}/en`,
      zh: `${SITE_CONFIG.url}/zh`,
      "x-default": `${SITE_CONFIG.url}/`,
    },
  };
}

/**
 * Builds Schema.org JSON-LD structured data for ProfessionalService.
 * Uses official studio data and info@okcode.es.
 */
export function getProfessionalServiceSchema(lang: Language = "es") {
  const content = getContent(lang);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: "OKCODE Studio",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/ok-logo-mark.webp`,
    image: `${SITE_CONFIG.url}/og.svg`,
    email: SITE_CONFIG.email,
    description: content.meta.description,
    priceRange: "€€",
    foundingDate: `${SITE_CONFIG.foundingYear}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressRegion: "Comunidad de Madrid",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4168,
      longitude: -3.7038,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Spain",
      },
      {
        "@type": "AdministrativeArea",
        name: "Global",
      },
    ],
    knowsLanguage: ["es", "en", "zh"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.services.heading,
      itemListElement: content.services.items.map((svc, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.subtitle,
        },
      })),
    },
    sameAs: [
      SITE_CONFIG.url,
      SITE_CONFIG.whatsappUrl,
    ],
  };
}

/**
 * Builds Schema.org JSON-LD structured data for FAQPage.
 * Generates Question/Answer entities for Google Rich Snippets.
 */
export function getFaqSchema(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Maps locale string for OpenGraph meta tags.
 */
function getOgLocale(lang: Language): string {
  switch (lang) {
    case "es":
      return "es_ES";
    case "en":
      return "en_US";
    case "zh":
      return "zh_CN";
    default:
      return "es_ES";
  }
}

/**
 * Builds full Next.js page Metadata for a given language.
 */
export function generatePageMetadata(lang: Language): Metadata {
  const content = getContent(lang);
  const alternates = getHreflangAlternates(lang);

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: content.meta.title,
      template: `%s · ${SITE_CONFIG.name}`,
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    alternates,
    openGraph: {
      type: "website",
      locale: getOgLocale(lang),
      url: alternates.canonical,
      siteName: SITE_CONFIG.name,
      title: content.meta.title,
      description: content.meta.description,
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: `${content.meta.title} · ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: ["/og.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}
