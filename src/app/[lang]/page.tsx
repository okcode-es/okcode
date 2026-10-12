import { notFound } from "next/navigation";
import { getContent } from "@/content";
import type { Language } from "@/content/schema";
import { SiteHeader, SiteFooter } from "@/components/layout";
import {
  HeroSection,
  TechMarquee,
  ShowcaseSection,
  ServicesSection,
  WhyUsSection,
  ProcessSection,
  PricingSection,
  FaqSection,
  ContactSection,
} from "@/components/sections";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "zh" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!["es", "en", "zh"].includes(lang)) {
    notFound();
  }
  const resolvedLang = lang as Language;

  const content = getContent(resolvedLang);

  return (
    <div id="top" className="flex flex-col min-h-screen">
      {/* Sticky Navigation Header with Language Switcher */}
      <SiteHeader lang={resolvedLang} nav={content.nav} />

      {/* Main Content Sections assembled in strict editorial order */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero: Studio Value Proposition & Trust Badges */}
        <HeroSection hero={content.hero} lang={resolvedLang} />

        {/* Fluid Engineering & Tech Stack Marquee */}
        <TechMarquee lang={resolvedLang} />

        {/* 2. Showcase: Real Client Cases with Slide-over Drawers */}
        <ShowcaseSection showcase={content.showcase} lang={resolvedLang} />

        {/* 3. Core Services without agency jargon */}
        <ServicesSection services={content.services} lang={resolvedLang} />

        {/* 4. Why Us: 6 Confidence Pillars */}
        <WhyUsSection whyUs={content.whyUs} lang={resolvedLang} />

        {/* 5. Process: 4-Step Collaboration Cycle */}
        <ProcessSection process={content.process} lang={resolvedLang} />

        {/* 6. Pricing: Transparent Tiers & Milestone-based policy */}
        <PricingSection pricing={content.pricing} lang={resolvedLang} />

        {/* 7. FAQ: Key Objection Elimination Accordion */}
        <FaqSection faq={content.faq} lang={resolvedLang} />

        {/* 8. Contact: Multi-channel Conversion Panel */}
        <ContactSection contact={content.contact} lang={resolvedLang} />
      </main>

      {/* Editorial Footer with live status badge and signoff */}
      <SiteFooter
        lang={resolvedLang}
        footer={content.footer}
        nav={content.nav}
      />
    </div>
  );
}
