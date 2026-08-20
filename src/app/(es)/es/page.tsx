import HomePage from "@/components/HomePage";
import { getContent } from "@/content/site-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const locale: Locale = "es";
const content = getContent(locale);

export const metadata = buildMetadata(locale);

export default function Page() {
  return <HomePage content={content} current={locale} />;
}
