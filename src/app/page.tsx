import type { Metadata } from "next";
import Page from "./[lang]/page";
import { getContent } from "@/content";
import {
  generatePageMetadata,
  getProfessionalServiceSchema,
  getFaqSchema,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("es");
}

export default async function RootPage() {
  const content = getContent("es");
  const professionalServiceSchema = getProfessionalServiceSchema("es");
  const faqSchema = getFaqSchema(content.faq.items);

  return (
    <>
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
      <Page params={Promise.resolve({ lang: "es" })} />
    </>
  );
}
