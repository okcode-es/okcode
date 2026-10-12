export type Language = 'es' | 'en' | 'zh';

export interface ShowcaseTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ShowcaseDrawerDetails {
  clientProblem: string;
  solutionDelivered: string;
  keyDeliverables: string[];
  timeline: string;
  testimonial?: ShowcaseTestimonial;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  client: string;
  category: string;
  impactMetric: string; // Ej: "0 → 40k € en pedidos propios"
  summary: string;
  image: string;
  tags: string[];
  drawerDetails: ShowcaseDrawerDetails;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  forWho: string;
  deliverables: string[];
  turnaround: string;
  ctaText: string;
}

export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface PricingTier {
  name: string;
  target: string;
  includes: string[];
  turnaround: string;
  startingPrice: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroBadge {
  icon: string;
  text: string;
}

export interface ContactFormContent {
  namePlaceholder: string;
  messagePlaceholder: string;
  contactPlaceholder: string;
  submitButton: string;
  successMessage: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    services: string;
    projects: string;
    whyUs: string;
    process: string;
    pricing: string;
    faq: string;
    contactCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badges: HeroBadge[];
    primaryCta: string;
    secondaryCta: string;
    microCopy: string;
  };
  showcase: {
    heading: string;
    subheading: string;
    items: ShowcaseItem[];
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  whyUs: {
    heading: string;
    subheading: string;
    items: WhyUsItem[];
  };
  process: {
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  pricing: {
    heading: string;
    subheading: string;
    tiers: PricingTier[];
    guaranteeText: string;
  };
  faq: {
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    whatsappText: string;
    wechatLabel: string;
    locationText: string;
    copyPromptLabel: string;
    copyPromptText: string;
    form: ContactFormContent;
  };
  footer: {
    editorialSignoff: string;
    statusBadge: string;
    rights: string;
  };
}
