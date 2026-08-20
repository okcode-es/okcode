import type { Metadata } from "next";
import { locales, localeHome, hrefLang, type Locale } from "@/lib/i18n";
import { getContent } from "@/content/site-content";

const SITE = "https://okcode.es";

const ogLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  "zh-CN": "zh_CN",
};

// All three locales point at each other for hreflang alternates.
const languageAlternates: Record<string, string> = Object.fromEntries(
  locales.map((l) => [hrefLang[l], localeHome[l]])
);

export function buildMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  const canonical = localeHome[locale] || "/";
  return {
    title: c.seo.title,
    description: c.seo.description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "OKCODE",
      title: c.seo.ogTitle,
      description: c.seo.ogDescription,
      locale: ogLocale[locale],
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: "OKCODE — software studio in Spain",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.seo.ogTitle,
      description: c.seo.ogDescription,
      images: ["/og.svg"],
    },
  };
}
