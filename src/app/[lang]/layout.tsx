import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Language } from "@/content/schema";
import {
  generatePageMetadata,
  getProfessionalServiceSchema,
  getFaqSchema,
} from "@/lib/seo";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "zh" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!["es", "en", "zh"].includes(lang)) {
    notFound();
  }
  const resolvedLang = lang as Language;
  return generatePageMetadata(resolvedLang);
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!["es", "en", "zh"].includes(lang)) {
    notFound();
  }
  const resolvedLang = lang as Language;

  const content = getContent(resolvedLang);
  const professionalServiceSchema = getProfessionalServiceSchema(resolvedLang);
  const faqSchema = getFaqSchema(content.faq.items);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${resolvedLang}";`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
