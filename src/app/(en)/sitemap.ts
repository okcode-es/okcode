import type { MetadataRoute } from "next";
import { locales, localeHome, hrefLang, type Locale } from "@/lib/i18n";

const BASE = "https://okcode.es";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale: Locale) => ({
    url: BASE + localeHome[locale],
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((alternate) => [hrefLang[alternate], BASE + localeHome[alternate]])
      ),
    },
  }));
}
