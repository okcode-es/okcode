import type { MetadataRoute } from "next";
import { locales, localeHome, hrefLang, type Locale } from "@/lib/i18n";

const BASE = "https://okcode.es";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternateLanguages: Record<string, string> = {
    ...Object.fromEntries(
      locales.map((alternate) => [hrefLang[alternate], BASE + localeHome[alternate]])
    ),
    "x-default": BASE + "/",
  };

  return locales.map((locale: Locale) => ({
    url: BASE + localeHome[locale],
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "es" ? 1.0 : locale === "en" ? 0.9 : 0.8,
    alternates: {
      languages: alternateLanguages,
    },
  }));
}
