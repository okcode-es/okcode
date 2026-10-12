import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

/**
 * Dynamic Next.js sitemap generator for okcode.es.
 * Outputs all static multilingual routes with hreflang alternates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const alternates = {
    languages: {
      es: `${SITE_CONFIG.url}/`,
      en: `${SITE_CONFIG.url}/en`,
      zh: `${SITE_CONFIG.url}/zh`,
      "x-default": `${SITE_CONFIG.url}/`,
    },
  };

  return [
    {
      url: `${SITE_CONFIG.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates,
    },
    {
      url: `${SITE_CONFIG.url}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates,
    },
    {
      url: `${SITE_CONFIG.url}/zh`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates,
    },
  ];
}
