import type { SiteContent } from "@/content/site-content";
import { localeHome, hrefLang } from "@/lib/i18n";

const SITE_URL = "https://okcode.es";

export default function JsonLd({ content }: { content: SiteContent }) {
  const currentUrl = `${SITE_URL}${localeHome[content.locale]}`;

  // 1. Organization / ProfessionalService Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: "OKCODE",
    alternateName: "OKCODE Software Studio",
    url: SITE_URL,
    logo: `${SITE_URL}/ok-logo-full.png`,
    image: `${SITE_URL}/og.svg`,
    description: content.seo.description,
    email: content.contact.info.email,
    telephone: content.contact.info.phone.replace(/\s+/g, ""),
    priceRange: "€€",
    knowsLanguage: ["es", "en", "zh-CN"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.4168",
      longitude: "-3.7038",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Spain",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    sameAs: content.contact.info.socials.map((s) => s.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.services.title,
      itemListElement: content.services.items.map((svc, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.summary,
        },
        position: index + 1,
      })),
    },
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "OKCODE",
    description: content.seo.description,
    inLanguage: [hrefLang.en, hrefLang.es, hrefLang["zh-CN"]],
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  // 3. FAQPage Schema (captures Google Rich Snippet & PAA results)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${currentUrl}#faq`,
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
