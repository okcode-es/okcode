import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

/**
 * Dynamic Next.js robots.txt generator.
 * Grants universal crawl access to indexable pages and points to sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
