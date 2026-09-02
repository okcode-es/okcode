import type { Metadata } from "next";
import { locales, localeHome, hrefLang, type Locale } from "@/lib/i18n";
import { getContent } from "@/content/site-content";

const SITE = "https://okcode.es";

const ogLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  "zh-CN": "zh_CN",
};

// All three locales point at each other for hreflang alternates, plus x-default.
const languageAlternates: Record<string, string> = {
  ...Object.fromEntries(locales.map((l) => [hrefLang[l], localeHome[l]])),
  "x-default": "/",
};

export function buildMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  const canonical = localeHome[locale] || "/";

  return {
    title: c.seo.title,
    description: c.seo.description,
    keywords: c.seo.keywords,
    applicationName: "OKCODE",
    authors: [{ name: "OKCODE", url: SITE }],
    creator: "OKCODE",
    publisher: "OKCODE",
    metadataBase: new URL(SITE),
    manifest: "/site.webmanifest",
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
          type: "image/svg+xml",
          alt: "OKCODE — Software, Web, Apps & E-Commerce Studio (Spain)",
        },
      ],
    },
    category: "technology",
    twitter: {
      card: "summary_large_image",
      title: c.seo.ogTitle,
      description: c.seo.ogDescription,
      creator: "@okcode_es",
      site: "@okcode_es",
      images: ["/og.svg"],
    },
  };
}
