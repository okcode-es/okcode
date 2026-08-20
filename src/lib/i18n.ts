// Single source of truth for locale configuration and routing.
// Components consume typed content from `site-content.ts` and never hard-code copy.

export const locales = ["en", "es", "zh-CN"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Human-facing labels for the language switcher.
export const localeLabels: Record<Locale, { native: string; english: string; flag: string }> = {
  en: { native: "English", english: "English", flag: "EN" },
  es: { native: "Español", english: "Spanish", flag: "ES" },
  "zh-CN": { native: "简体中文", english: "Chinese", flag: "中文" },
};

// Path prefix per locale. English is served at the site root ("/").
// Used by the language switcher and SEO alternates.
export const localePaths: Record<Locale, string> = {
  en: "",
  es: "/es",
  "zh-CN": "/zh-cn",
};

// hreflang values for <link rel="alternate"> tags.
export const hrefLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  "zh-CN": "zh-CN",
};

// Home-page URL per locale, WITH a trailing slash (required by `trailingSlash`).
// English is served at the site root "/".
export const localeHome: Record<Locale, string> = {
  en: "/",
  es: "/es/",
  "zh-CN": "/zh-cn/",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Build an absolute or root-relative URL for a given locale + (optional) anchor.
export function localeHref(locale: Locale, anchor = ""): string {
  const base = localePaths[locale] || "";
  if (anchor) return `${base}/#${anchor}`;
  return base || "/";
}
