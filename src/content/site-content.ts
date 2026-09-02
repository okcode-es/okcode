import type { Locale } from "../lib/i18n";
export type { Locale };

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NavItem {
  anchor: string;
  label: string;
}

export interface Service {
  id: string;
  icon: "software" | "web" | "ecommerce" | "app";
  title: string;
  summary: string;
  points: string[];
  cta: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  tags: string[];
  result: string;
  // Marked true so it is obvious this is replaceable sample content.
  placeholder: boolean;
}

export interface Advantage {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  placeholder: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  telegram?: string;
  address: string;
  socials: { label: string; href: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  eyebrow: string;
  title: string;
  intro: string;
  items: FaqItem[];
}

export interface TechStackCategory {
  category: string;
  items: { name: string; desc: string }[];
}

export interface TechStackSection {
  eyebrow: string;
  title: string;
  intro: string;
  groups: TechStackCategory[];
}

export interface HeroSolutionTab {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  timelineLabel: string;
  pricingType: string;
  pricingLabel: string;
  ownership: string;
  ownershipLabel: string;
  ctaText: string;
}

export interface HeroInteractiveData {
  terminalPath: string;
  version: string;
  statusBadge: string;
  tabs: HeroSolutionTab[];
}

export interface PhysicsItem {
  id: string;
  label: string;
  type: "pill" | "badge";
  icon?: string;
}

export interface PhysicsPlaygroundData {
  badge: string;
  instruction: string;
  items: PhysicsItem[];
}

export interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  editorialTitle?: {
    prefix: string;
    serif: string;
    suffix: string;
  };
  subtitle: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  trust: string;
  interactive: HeroInteractiveData;
  physics: PhysicsPlaygroundData;
}

export interface PricingTier {
  id: string;
  name: string;
  highlight: boolean;
  priceStarting: string;
  period: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  cta: string;
}

export interface PricingSectionData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  tiers: PricingTier[];
  estimatorNote: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  image: string;
  tags: string[];
  metrics: string;
  metricsLabel: string;
  href?: string;
}

export interface ShowcaseSectionData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  items: ShowcaseItem[];
}

export interface EstimatorProjectType {
  id: string;
  title: string;
  badge: string;
  description: string;
  baseTimeline: string;
  stackSuggested: string;
}

export interface EstimatorFeatureOption {
  id: string;
  name: string;
  desc: string;
  category: "core" | "integration" | "scale";
}

export interface EstimatorTimelineOption {
  id: string;
  label: string;
  badge: string;
}

export interface EstimatorData {
  eyebrow: string;
  title: string;
  intro: string;
  projectTypes: EstimatorProjectType[];
  featureOptions: EstimatorFeatureOption[];
  timelines: EstimatorTimelineOption[];
  ui: {
    step1Title: string;
    step2Title: string;
    step3Title: string;
    summaryTitle: string;
    summaryScope: string;
    summaryTimeline: string;
    summaryStack: string;
    whatsappButton: string;
    emailButton: string;
    copyButton: string;
    copiedNotice: string;
    whatsappMessagePrefix: string;
  };
}

export interface UiCopy {
  skipToContent: string;
  header: {
    homeLabel: string;
    primaryNavLabel: string;
    toggleMenuLabel: string;
  };
  language: {
    changeLabel: string;
    menuLabel: string;
  };
  contact: {
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    studioLabel: string;
    socialLabel: string;
    nameLabel: string;
    emailFieldLabel: string;
    projectLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    projectPlaceholder: string;
  };
  footer: {
    menuLabel: string;
    contactLabel: string;
  };
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export interface SiteContent {
  locale: Locale;
  dir: "ltr" | "rtl";
  visibility: {
    testimonials: boolean;
  };
  ui: UiCopy;
  nav: NavItem[];
  ctaLabel: string; // header / shared primary call-to-action
  hero: HeroData;
  pricing: PricingSectionData;
  showcase: ShowcaseSectionData;
  estimator: EstimatorData;
  studio: {
    eyebrow: string;
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Service[];
  };
  techStack: TechStackSection;
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string; // explains placeholder data
    items: Project[];
  };
  advantages: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Advantage[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: ProcessStep[];
  };
  faq: FaqSection;
  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    items: Testimonial[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    info: ContactInfo;
    formNote: string;
  };
  footer: {
    about: string;
    rights: string;
    builtNote: string;
  };
  seo: SeoMetadata;
}

// ---------------------------------------------------------------------------
// Shared sample contact details
// ---------------------------------------------------------------------------
const sampleContact: ContactInfo = {
  email: "info@okcode.es",
  phone: "+34 684 25 21 30",
  whatsapp: "34684252130",
  telegram: "https://t.me/+34684252130",
  address: "Madrid, Spain",
  socials: [
    { label: "WhatsApp", href: "https://wa.me/34684252130" },
    { label: "Telegram", href: "https://t.me/+34684252130" },
  ],
};

// ---------------------------------------------------------------------------
// English (default, served at "/")
// ---------------------------------------------------------------------------
const en: SiteContent = {
  locale: "en",
  dir: "ltr",
  visibility: { testimonials: false },
  ui: {
    skipToContent: "Skip to content",
    header: {
      homeLabel: "OKCODE — home",
      primaryNavLabel: "Primary navigation",
      toggleMenuLabel: "Toggle navigation menu",
    },
    language: {
      changeLabel: "Change language",
      menuLabel: "Language options",
    },
    contact: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      studioLabel: "Studio",
      socialLabel: "Social",
      nameLabel: "Name",
      emailFieldLabel: "Email",
      projectLabel: "Project",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      projectPlaceholder: "Tell us about your project, timeline and goals…",
    },
    footer: {
      menuLabel: "Menu",
      contactLabel: "Contact",
    },
  },
  nav: [
    { anchor: "studio", label: "Studio" },
    { anchor: "services", label: "Services" },
    { anchor: "stack", label: "Tech Stack" },
    { anchor: "projects", label: "Work" },
    { anchor: "advantages", label: "Why Us" },
    { anchor: "process", label: "Process" },
    { anchor: "faq", label: "FAQ" },
    { anchor: "contact", label: "Contact" },
  ],
  ctaLabel: "Request a Quote",
  hero: {
    eyebrow: "Accepting new projects · Studio in Madrid, Spain",
    editorialTitle: {
      prefix: "Crafting",
      serif: "exceptional",
      suffix: "software for brands ready to lead.",
    },
    title: "Custom websites, mobile apps and e-commerce stores",
    titleHighlight: "engineered to scale your revenue.",
    subtitle:
      "From concept to production in weeks. We build lightning-fast web applications, iOS/Android mobile apps, and scalable online storefronts with fixed transparent pricing and 100% source code ownership.",
    badges: [
      "⚡ Turnaround from 2 weeks",
      "🔒 100% Fixed-price guarantee",
      "🚀 100% Client code & IP ownership",
      "📈 Built-in SEO & sub-100ms Core Web Vitals",
    ],
    primaryCta: "Request a Free Quote",
    secondaryCta: "Explore Case Studies & Demos",
    trust: "Trusted by companies and startups across Spain, Europe and Asia (ES · EN · 中文).",
    interactive: {
      terminalPath: "okcode / solution-navigator",
      version: "v2.4",
      statusBadge: "Ready to Build",
      tabs: [
        {
          id: "web",
          tabLabel: "🌐 Web & Landings",
          badge: "Next.js 15 · Top 1% SEO",
          title: "High-Performance Websites & Web Apps",
          description:
            "Blazing-fast marketing websites and web applications built with Next.js & React, engineered to rank at the top of Google and convert visitors into paying clients.",
          features: [
            "Next.js 15 + React + TypeScript",
            "Core Web Vitals < 100ms response",
            "Technical SEO & Schema.org included",
            "Custom responsive UX/UI design",
            "Headless CMS integration (Sanity/Strapi)",
          ],
          timeline: "2 – 4 weeks",
          timelineLabel: "Avg. Turnaround",
          pricingType: "Fixed price quote",
          pricingLabel: "Pricing model",
          ownership: "100% Yours",
          ownershipLabel: "IP & Repository",
          ctaText: "I want to build a Website",
        },
        {
          id: "app",
          tabLabel: "📱 iOS & Android Apps",
          badge: "React Native · Cross-Platform",
          title: "Native-Feel Mobile Applications",
          description:
            "Silky-smooth mobile apps for iPhone and Android with a unified, high-performance codebase, ready for App Store and Google Play deployment.",
          features: [
            "React Native & Expo cross-platform",
            "Single codebase for iOS and Android",
            "Offline-first sync & secure storage",
            "Real-time push notifications & payments",
            "Store publishing & ASO optimization",
          ],
          timeline: "6 – 10 weeks",
          timelineLabel: "Avg. Turnaround",
          pricingType: "Milestone-based",
          pricingLabel: "Pricing model",
          ownership: "100% Yours",
          ownershipLabel: "IP & Repository",
          ctaText: "I want to build a Mobile App",
        },
        {
          id: "ecommerce",
          tabLabel: "🛍️ Online Store",
          badge: "Shopify · WooCommerce",
          title: "Global E-Commerce Storefronts",
          description:
            "Online stores engineered for maximum conversions with secure payment gateways (Stripe, PayPal, Apple Pay), multi-currency checkout, and automated inventory.",
          features: [
            "Shopify, WooCommerce or Headless",
            "High-conversion checkout architecture",
            "Stripe, PayPal, Apple Pay & local gateways",
            "Inventory & logistics automation",
            "Multi-currency & cross-border selling",
          ],
          timeline: "4 – 6 weeks",
          timelineLabel: "Avg. Turnaround",
          pricingType: "Fixed price quote",
          pricingLabel: "Pricing model",
          ownership: "100% Yours",
          ownershipLabel: "IP & Repository",
          ctaText: "I want to launch an Online Store",
        },
        {
          id: "software",
          tabLabel: "⚡ Custom Software",
          badge: "SaaS · Portals & APIs",
          title: "Bespoke Portals, Dashboards & APIs",
          description:
            "Custom management dashboards, client portals, and robust APIs that automate manual workflows and connect your entire business stack.",
          features: [
            "Custom operations dashboards & portals",
            "High-concurrency REST & GraphQL APIs",
            "Business workflow automations",
            "Secure PostgreSQL database design",
            "Ongoing senior engineer support",
          ],
          timeline: "Agile sprints",
          timelineLabel: "Avg. Turnaround",
          pricingType: "Sprint or fixed quote",
          pricingLabel: "Pricing model",
          ownership: "100% Yours",
          ownershipLabel: "IP & Repository",
          ctaText: "I want to build Custom Software",
        },
      ],
    },
    physics: {
      badge: "STUDIO VALUE LAB",
      instruction: "Drag and flick to explore client value tokens",
      items: [
        { id: "uptime", label: "99.9% Uptime", type: "pill" },
        { id: "seo", label: "SEO 100", type: "pill" },
        { id: "zero-bug", label: "0-Bug Deploy", type: "pill" },
        { id: "fast-ux", label: "Fast UX (<50ms)", type: "pill" },
        { id: "scale", label: "Global Scale", type: "pill" },
        { id: "conversion", label: "High Conversion", type: "pill" },
        { id: "code", label: "{ }", type: "badge" },
        { id: "rocket", label: "🚀", type: "badge" },
      ],
    },
  },
  showcase: {
    eyebrow: "05 — Selected Works",
    title: "Featured Engineering",
    titleHighlight: "Showcase",
    intro: "High-impact digital systems built for measurable business growth.",
    items: [
      {
        id: "fintech",
        title: "Enterprise Trading & Risk Engine",
        client: "QuantEdge Global",
        industry: "FinTech & SaaS",
        summary: "Sub-millisecond latency order routing and live risk intelligence dashboard built on Next.js.",
        image: "/images/FinTech.webp",
        tags: ["Next.js", "TypeScript", "WebSocket"],
        metrics: "+18.4%",
        metricsLabel: "Execution Efficiency",
      },
      {
        id: "luxury-store",
        title: "Bespoke Headless Commerce",
        client: "Maison Éthique",
        industry: "E-Commerce",
        summary: "Editorial luxury shopping experience with instant page loads, multi-currency Stripe checkout, and 100 SEO score.",
        image: "/images/Store.webp",
        tags: ["Headless", "Stripe", "Next.js"],
        metrics: "+140%",
        metricsLabel: "Mobile Conversion",
      },
      {
        id: "ai-workflow",
        title: "Autonomous Agent Orchestrator",
        client: "CognitiveFlow AI",
        industry: "Artificial Intelligence",
        summary: "Visual node-based agent canvas managing enterprise LLM workflows and multi-agent coordination.",
        image: "/images/CognitiveFlow.webp",
        tags: ["AI Agents", "React Flow", "Full-Stack"],
        metrics: "10x",
        metricsLabel: "Workflow Speedup",
      },
    ],
  },
  pricing: {
    eyebrow: "06 — Transparent Pricing",
    title: "Engineering-First",
    titleHighlight: "Investment",
    intro: "Transparent starting benchmarks. For custom scoping, use our interactive estimator below.",
    estimatorNote: "Need custom enterprise scoping, legacy migration, or tailored milestones? Use our calculator below.",
    tiers: [
      {
        id: "showcase",
        name: "Showcase & Brand Web",
        highlight: false,
        priceStarting: "Desde 1,800€",
        period: "one-time",
        summary: "High-performance brand web with editorial typography, trilingual architecture, and interactive physics.",
        deliverables: [
          "Editorial typography & bespoke design",
          "Trilingual (EN / ES / ZH) static setup",
          "100/100 Lighthouse SEO & Performance",
          "Physics value playground micro-interactions",
          "GitHub Pages static zero-maintenance host",
        ],
        timeline: "1-2 Weeks",
        cta: "Book a Discovery Call",
      },
      {
        id: "ecommerce",
        name: "High-Conversion E-Commerce",
        highlight: true,
        priceStarting: "Desde 3,800€",
        period: "one-time",
        summary: "Headless store built for speed and global conversion with multi-currency Stripe checkout.",
        deliverables: [
          "Headless storefront with ultra-fast UX",
          "Stripe & global multi-currency checkout",
          "Product catalog & inventory synchronization",
          "GDPR compliance & legal privacy setup",
          "Conversion-optimized checkout drawer",
        ],
        timeline: "3-4 Weeks",
        cta: "Start Project",
      },
      {
        id: "webapp",
        name: "Custom Web App & SaaS",
        highlight: false,
        priceStarting: "Desde 6,500€",
        period: "milestone-based",
        summary: "End-to-end full-stack digital product with complex state, authentication, and custom APIs.",
        deliverables: [
          "Scalable architecture & database design",
          "Role-based authentication & admin panel",
          "AI agent & workflow automation integration",
          "Real-time data feeds & custom REST/GraphQL",
          "Dedicated SLA & ongoing evolution retainer",
        ],
        timeline: "4-8 Weeks",
        cta: "Schedule Architecture Review",
      },
    ],
  },
  estimator: {
    eyebrow: "Interactive Project Estimator",
    title: "Calculate your project scope & estimated turnaround.",
    intro:
      "Select your project requirements below to see an instant architectural overview and share it directly with our senior engineers via WhatsApp or email.",
    projectTypes: [
      {
        id: "mvp",
        title: "Startup MVP Launchpad",
        badge: "Fast to Market",
        description: "Full working web or mobile product to validate your startup idea and pitch investors.",
        baseTimeline: "3 – 4 weeks",
        stackSuggested: "Next.js 15 · Tailwind · Supabase / PostgreSQL",
      },
      {
        id: "web",
        title: "High-Converting Custom Web",
        badge: "Top 1% Speed & SEO",
        description: "Marketing website or customer portal designed to convert visitors and dominate search results.",
        baseTimeline: "2 – 3 weeks",
        stackSuggested: "Next.js · React 19 · TypeScript · Headless CMS",
      },
      {
        id: "ecommerce",
        title: "Scalable E-Commerce Store",
        badge: "Global Sales Ready",
        description: "Online store with multi-currency checkout, inventory sync, and conversion-optimized flow.",
        baseTimeline: "3 – 5 weeks",
        stackSuggested: "Shopify Headless · WooCommerce · Stripe / PayPal",
      },
      {
        id: "app",
        title: "Cross-Platform Mobile App",
        badge: "iOS & Android",
        description: "Native-feel mobile application with single codebase, push notifications, and store publishing.",
        baseTimeline: "5 – 8 weeks",
        stackSuggested: "React Native · Expo · Node.js API · Cloud Sync",
      },
    ],
    featureOptions: [
      { id: "auth", name: "User Auth & Roles", desc: "Sign up, social login, permissions & profile dashboard", category: "core" },
      { id: "payments", name: "Payment Gateway", desc: "Stripe, Bizum, Apple Pay, PayPal or subscription billing", category: "core" },
      { id: "admin", name: "Custom Admin Panel", desc: "Manage content, orders, users and real-time business metrics", category: "core" },
      { id: "ai", name: "AI / Smart Automations", desc: "OpenAI/Claude integration, auto-reply, document processing", category: "integration" },
      { id: "i18n", name: "Multi-Language & SEO", desc: "English, Spanish, Chinese with locale routing and schema.org", category: "integration" },
      { id: "api", name: "Third-Party API & ERP", desc: "Connect CRM, logistics, invoicing or existing corporate database", category: "integration" },
    ],
    timelines: [
      { id: "express", label: "Express Sprint (< 1 month)", badge: "Priority Delivery" },
      { id: "standard", label: "Standard (1 – 2 months)", badge: "Balanced Roadmap" },
      { id: "flexible", label: "Flexible / Long-term Squad", badge: "Iterative Sprints" },
    ],
    ui: {
      step1Title: "1. Choose your project type",
      step2Title: "2. Key capabilities & integrations",
      step3Title: "3. Target delivery timeline",
      summaryTitle: "Your Project Blueprint",
      summaryScope: "Selected Scope",
      summaryTimeline: "Estimated Timeline",
      summaryStack: "Recommended Tech Stack",
      whatsappButton: "Send Blueprint via WhatsApp",
      emailButton: "Send via Email",
      copyButton: "Copy Summary",
      copiedNotice: "Blueprint copied to clipboard!",
      whatsappMessagePrefix: "Hello OKCODE, I would like to get a quote for a project:",
    },
  },
  studio: {
    eyebrow: "01 — The studio",
    title: "A boutique development studio with global capability.",
    body: [
      "We are a Spain-based engineering team delivering digital products for ambitious businesses. We communicate fluently in Spanish, English, and Chinese, ensuring your vision is executed without friction or misinterpretation.",
      "No junior churn, no endless agency layers. You collaborate directly with senior engineers and product designers who own the build from day one through long-term scaling.",
    ],
    stats: [
      { value: "10+", label: "Years building software" },
      { value: "120+", label: "Projects delivered" },
      { value: "3", label: "Working languages" },
      { value: "100%", label: "Client IP ownership" },
    ],
  },
  services: {
    eyebrow: "02 — What we do",
    title: "End-to-end digital product development.",
    intro:
      "From high-converting websites and mobile applications to scalable e-commerce storefronts and custom business software.",
    items: [
      {
        id: "web",
        icon: "web",
        title: "Custom Web Development",
        summary:
          "High-speed marketing websites, web applications, and headless platforms built on Next.js and React, engineered for SEO visibility and top Core Web Vitals.",
        points: [
          "Corporate & high-conversion landing pages",
          "Next.js & React web applications",
          "Headless CMS integration (Sanity, Strapi)",
          "Technical SEO, accessibility & sub-second load times",
        ],
        cta: "Plan a Website",
      },
      {
        id: "app",
        icon: "app",
        title: "Mobile App Development",
        summary:
          "Native and cross-platform iOS & Android mobile applications built with React Native, delivering silky-smooth performance and seamless store deployment.",
        points: [
          "Cross-platform iOS & Android (React Native)",
          "Offline-first architecture & data sync",
          "Push notifications & API integrations",
          "App Store & Google Play publishing & ASO",
        ],
        cta: "Build a Mobile App",
      },
      {
        id: "ecommerce",
        icon: "ecommerce",
        title: "E-commerce Development",
        summary:
          "Modern online storefronts built with Shopify, WooCommerce, or headless architectures, optimized for multi-currency checkout, inventory sync, and global conversion.",
        points: [
          "Custom Shopify & WooCommerce stores",
          "Stripe, PayPal, Apple Pay & local gateways",
          "B2B portals & subscription models",
          "Zero-downtime store migrations",
        ],
        cta: "Launch an Online Store",
      },
      {
        id: "software",
        icon: "software",
        title: "Custom Software & APIs",
        summary:
          "Internal business tools, operational dashboards, and robust REST/GraphQL APIs that automate manual workflows and connect your systems.",
        points: [
          "Custom internal dashboards & portals",
          "REST & GraphQL API design & integrations",
          "Workflow automation & process streamlining",
          "Ongoing maintenance & system support",
        ],
        cta: "Scope Custom Software",
      },
    ],
  },
  techStack: {
    eyebrow: "03 — Technologies",
    title: "A modern, maintainable technology stack.",
    intro:
      "We select battle-tested technologies that ensure performance, search engine crawlability, security, and effortless scalability.",
    groups: [
      {
        category: "Frontend & Web",
        items: [
          { name: "Next.js", desc: "Server-side rendering & static generation" },
          { name: "React", desc: "Dynamic interactive components" },
          { name: "TypeScript", desc: "Type-safe maintainable codebases" },
          { name: "Tailwind CSS", desc: "Modern, ultra-fast styling" },
        ],
      },
      {
        category: "Mobile Apps",
        items: [
          { name: "React Native", desc: "Native iOS & Android apps" },
          { name: "Expo", desc: "Rapid mobile iteration & OTA updates" },
          { name: "iOS / Swift", desc: "Native Apple platform capabilities" },
          { name: "Android / Kotlin", desc: "Native Android integrations" },
        ],
      },
      {
        category: "E-Commerce & Payments",
        items: [
          { name: "Shopify", desc: "Custom themes & Liquid apps" },
          { name: "WooCommerce", desc: "Flexible WordPress commerce" },
          { name: "Stripe", desc: "Global multi-currency checkout" },
          { name: "Headless Commerce", desc: "API-driven custom storefronts" },
        ],
      },
      {
        category: "Backend & Cloud",
        items: [
          { name: "Node.js", desc: "High-concurrency backend services" },
          { name: "PostgreSQL", desc: "Reliable relational data storage" },
          { name: "REST & GraphQL", desc: "Clean, documented API contracts" },
          { name: "Vercel & AWS", desc: "Global edge CDN & cloud infrastructure" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "04 — Selected work",
    title: "Proven results across industries.",
    intro: "A snapshot of recent digital products built for clients across Spain and internationally.",
    note: "Sample case studies below — customized to real metrics upon project kickoff.",
    items: [
      {
        id: "p1",
        title: "Real-time logistics platform for Spanish retailer",
        client: "Retail Co.",
        industry: "Retail & Logistics",
        year: "2025",
        summary:
          "An operations portal unifying fleet tracking, inventory sync, and orders into one responsive dashboard, reducing daily reporting from hours to minutes.",
        tags: ["Web app", "Next.js", "Dashboards", "REST APIs"],
        result: "−70% reporting time",
        placeholder: true,
      },
      {
        id: "p2",
        title: "Cross-border fashion e-commerce storefront",
        client: "Fashion Brand",
        industry: "E-commerce",
        year: "2024",
        summary:
          "A multilingual store with localized checkout and multi-currency pricing, expanding commercial reach across Spain and international markets.",
        tags: ["E-commerce", "Shopify", "i18n", "Stripe"],
        result: "+38% conversion",
        placeholder: true,
      },
      {
        id: "p3",
        title: "Field service mobile app for technicians",
        client: "Service Co.",
        industry: "Field Services",
        year: "2024",
        summary:
          "An offline-first mobile app allowing field technicians to log work orders, collect client signatures, and sync seamlessly once reconnected.",
        tags: ["Mobile App", "React Native", "Offline-first"],
        result: "−45% admin overhead",
        placeholder: true,
      },
    ],
  },
  advantages: {
    eyebrow: "05 — Why OKCODE",
    title: "Why businesses choose us as their tech partner.",
    intro: "Tangible advantages that protect your investment long after launch.",
    items: [
      {
        title: "Spain-based, international reach",
        description:
          "Local timezone availability in Spain and Europe, with native multilingual delivery in Spanish, English, and Chinese.",
      },
      {
        title: "Senior engineers, zero hand-offs",
        description:
          "You collaborate directly with senior developers who code your application. No account managers playing telephone.",
      },
      {
        title: "Fixed-scope, transparent pricing",
        description:
          "Clear milestones, upfront budgets, and weekly progress demos. No hidden fees, no black-box development.",
      },
      {
        title: "Clean code & 100% IP ownership",
        description:
          "You own all source code, design files, and repositories from day one. Clean architecture built to scale.",
      },
      {
        title: "SEO & performance built-in",
        description:
          "We build every website with Core Web Vitals, semantic schema markup, and search crawler visibility as first-class priorities.",
      },
      {
        title: "Dedicated post-launch support",
        description:
          "We provide ongoing maintenance, feature expansion, and security updates so your product continues to evolve.",
      },
    ],
  },
  process: {
    eyebrow: "06 — How we work",
    title: "A clear, predictable roadmap.",
    intro: "Five structured stages from initial idea to live production.",
    steps: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We analyze your business goals, target audience, and functional specifications to define clear product objectives.",
      },
      {
        step: "02",
        title: "Scope & Proposal",
        description:
          "A transparent fixed-price estimate with itemized deliverables, timelines, and technical architecture.",
      },
      {
        step: "03",
        title: "UI/UX & Prototyping",
        description:
          "Interactive wireframes and high-fidelity prototypes tested for optimal conversion and user experience.",
      },
      {
        step: "04",
        title: "Agile Build & QA",
        description:
          "Sprint-based development with weekly staging demos, automated tests, accessibility audits, and performance checks.",
      },
      {
        step: "05",
        title: "Launch & Growth",
        description:
          "Smooth production deployment, search engine indexing, analytics setup, and ongoing technical support.",
      },
    ],
  },
  faq: {
    eyebrow: "07 — FAQ",
    title: "Frequently asked questions.",
    intro: "Clear answers to the questions clients ask before kicking off a project.",
    items: [
      {
        question: "How much does a custom website, online store, or mobile app cost?",
        answer:
          "To support early-stage businesses and expand our client portfolio in Madrid and across Europe, we offer highly competitive introductory pricing with 100% transparent, fixed-price contracts: High-converting landing pages and corporate websites start from €490–€1,200; e-commerce storefronts (Shopify / WooCommerce) range from €890–€1,950; and custom iOS/Android mobile apps or MVP software platforms start from €1,500–€3,500. We provide flexible milestone payments and full code ownership.",
      },
      {
        question: "How long does it take to design, develop and launch a project?",
        answer:
          "A standard marketing website or high-converting landing page is typically delivered in 2 to 4 weeks. Full e-commerce storefronts usually take 4 to 8 weeks, while custom mobile apps (iOS & Android) or SaaS platforms take between 6 to 12 weeks depending on feature scope.",
      },
      {
        question: "What technologies do you use for development?",
        answer:
          "We use modern, industry-standard technologies: Next.js, React, TypeScript, and Tailwind CSS for web development; React Native for iOS and Android mobile apps; Shopify and WooCommerce for e-commerce; and Node.js, PostgreSQL, and REST/GraphQL APIs for backends.",
      },
      {
        question: "Do I own 100% of the source code and intellectual property?",
        answer:
          "Yes, absolutely. You retain 100% ownership of the source code, design assets, databases, and intellectual property. We provide full repository access (GitHub/GitLab) upon completion without vendor lock-in.",
      },
      {
        question: "Do you offer post-launch maintenance, hosting support, and SEO optimization?",
        answer:
          "Yes. We offer flexible ongoing maintenance plans covering server monitoring, security updates, feature improvements, and technical SEO optimizations (Core Web Vitals, Schema markup, search ranking enhancements).",
      },
      {
        question: "How do we get started on a project with OKCODE?",
        answer:
          "Simply send us a message using the contact form below or reach out via email/WhatsApp. We will schedule a brief discovery call within 24–48 hours, understand your requirements, and provide a clear, no-obligation proposal.",
      },
    ],
  },
  testimonials: {
    eyebrow: "08 — Client voices",
    title: "What our clients say.",
    intro: "Feedback from partners we have shipped successful digital products with.",
    note: "Sample client testimonials.",
    items: [
      {
        quote:
          "OKCODE delivered our platform on schedule with pristine code quality. Communication was crystal clear throughout.",
        author: "Martina R.",
        role: "Head of Operations",
        company: "Retail Co.",
        placeholder: true,
      },
      {
        quote:
          "Their bilingual capability made our international rollout seamless across Europe and Asia. Highly recommended.",
        author: "Wei L.",
        role: "Founder & CEO",
        company: "Fashion Brand",
        placeholder: true,
      },
      {
        quote:
          "Senior developers who understand business outcomes. Our mobile application works flawlessly even offline.",
        author: "Carlos M.",
        role: "CTO",
        company: "Service Co.",
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: "08 — Contact",
    title: "Let's build something exceptional together.",
    intro:
      "Tell us about your project, timeline, and goals. We respond within two business days — usually much faster.",
    info: sampleContact,
    formNote: "This form prepares your email client with your project details pre-filled. No server tracking.",
  },
  footer: {
    about:
      "OKCODE is a Spain-based development studio crafting custom websites, mobile apps, e-commerce stores, and software for Spanish, English, and Chinese speaking businesses.",
    rights: "© " + new Date().getFullYear() + " OKCODE. All rights reserved.",
    builtNote: "",
  },
  seo: {
    title: "OKCODE — Custom Software, Mobile App & Web Development Studio (Spain & Europe)",
    description:
      "Premier software engineering studio in Spain. We design & develop high-converting custom web applications, iOS/Android mobile apps, Shopify/Headless e-commerce stores, and scalable business software for startups and SMEs. 100% code ownership.",
    keywords: [
      "custom software development studio spain",
      "mobile app development company madrid",
      "custom web application development",
      "next.js react development agency",
      "react native app developers europe",
      "shopify headless ecommerce development",
      "startup mvp development studio",
      "b2b software engineering company",
      "hire senior developers spain",
      "multilingual software development agency",
    ],
    ogTitle: "OKCODE — High-Performance Software, Mobile Apps & Web Studio (Spain)",
    ogDescription:
      "Turn your vision into production-ready software in 3-4 weeks. 100% source code ownership, fixed transparent pricing, and 30-day post-launch warranty.",
  },
};

// ---------------------------------------------------------------------------
// Spanish (served at "/es")
// ---------------------------------------------------------------------------
const es: SiteContent = {
  locale: "es",
  dir: "ltr",
  visibility: { testimonials: false },
  ui: {
    skipToContent: "Saltar al contenido",
    header: {
      homeLabel: "OKCODE — inicio",
      primaryNavLabel: "Navegación principal",
      toggleMenuLabel: "Abrir menú de navegación",
    },
    language: {
      changeLabel: "Cambiar idioma",
      menuLabel: "Opciones de idioma",
    },
    contact: {
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      whatsappLabel: "WhatsApp",
      studioLabel: "Estudio",
      socialLabel: "Redes",
      nameLabel: "Nombre",
      emailFieldLabel: "Email",
      projectLabel: "Proyecto",
      namePlaceholder: "Tu nombre o empresa",
      emailPlaceholder: "tu@empresa.com",
      projectPlaceholder: "Cuéntanos sobre tu idea, web, app, tienda o software que deseas crear…",
    },
    footer: {
      menuLabel: "Menú",
      contactLabel: "Contacto",
    },
  },
  nav: [
    { anchor: "studio", label: "Estudio" },
    { anchor: "services", label: "Servicios" },
    { anchor: "stack", label: "Tecnologías" },
    { anchor: "projects", label: "Proyectos" },
    { anchor: "advantages", label: "Por qué elegirnos" },
    { anchor: "process", label: "Proceso" },
    { anchor: "faq", label: "Preguntas Frecuentes" },
    { anchor: "contact", label: "Contacto" },
  ],
  ctaLabel: "Pedir Presupuesto",
  hero: {
    eyebrow: "Aceptando nuevos proyectos · Estudio en Madrid, España",
    editorialTitle: {
      prefix: "Diseñamos software",
      serif: "excepcional",
      suffix: "para marcas que buscan liderar.",
    },
    title: "Desarrollo web, apps móviles y tiendas online",
    titleHighlight: "que multiplican tus ventas.",
    subtitle:
      "De la idea a producción en semanas. Creamos páginas web ultra rápidas, aplicaciones móviles para iOS/Android y tiendas online escalables, con presupuesto cerrado garantizado y 100% del código a tu nombre.",
    badges: [
      "⚡ Entrega desde 2 semanas",
      "🔒 Presupuesto cerrado sin sorpresas",
      "🚀 100% Código propio y propiedad intelectual",
      "📈 Optimizado para SEO técnico y Core Web Vitals",
    ],
    primaryCta: "Pedir Presupuesto Sin Compromiso",
    secondaryCta: "Ver Casos de Éxito & Demos",
    trust: "Con la confianza de empresas y marcas en España, Europa y Asia (Español · English · 中文).",
    interactive: {
      terminalPath: "okcode / solution-navigator",
      version: "v2.4",
      statusBadge: "Disponible para sprint",
      tabs: [
        {
          id: "web",
          tabLabel: "🌐 Web & Landings",
          badge: "Next.js 15 · SEO Top 1%",
          title: "Páginas Web Corporativas y Web Apps",
          description:
            "Sitios web ultra rápidos en Next.js y React, optimizados para posicionar en los primeros puestos de Google y convertir visitas en clientes potenciales.",
          features: [
            "Next.js 15 + React + TypeScript",
            "Velocidad Core Web Vitals < 100ms",
            "SEO técnico y Schema.org integrado",
            "Diseño UX/UI responsive a medida",
            "CMS Headless para gestión fácil",
          ],
          timeline: "2 – 4 semanas",
          timelineLabel: "Plazo medio",
          pricingType: "Presupuesto cerrado",
          pricingLabel: "Modelo de coste",
          ownership: "100% Tuyo",
          ownershipLabel: "Código fuente",
          ctaText: "Quiero crear mi Página Web",
        },
        {
          id: "app",
          tabLabel: "📱 Apps iOS/Android",
          badge: "React Native · Multiplataforma",
          title: "Desarrollo de Apps Móviles Nativas",
          description:
            "Aplicaciones móviles para iPhone y Android con un solo código eficiente, experiencia fluida y publicación directa en App Store y Google Play.",
          features: [
            "React Native & Expo multiplataforma",
            "Soporte iOS y Android con 1 sola base",
            "Modo offline y sincronización en la nube",
            "Notificaciones push y pagos móviles",
            "Publicación y optimización ASO en tiendas",
          ],
          timeline: "6 – 10 semanas",
          timelineLabel: "Plazo medio",
          pricingType: "Hitos transparentes",
          pricingLabel: "Modelo de coste",
          ownership: "100% Tuyo",
          ownershipLabel: "Código fuente",
          ctaText: "Quiero desarrollar mi App Móvil",
        },
        {
          id: "ecommerce",
          tabLabel: "🛍️ Tienda Online",
          badge: "Shopify · WooCommerce",
          title: "Tiendas Online y E-commerce Internacional",
          description:
            "E-commerce diseñado para vender más: pasarelas de pago seguras (Stripe, Redsys, Bizum, Apple Pay), checkout multimoneda y catálogo automatizado.",
          features: [
            "Shopify, WooCommerce o Headless a medida",
            "Checkout optimizado para alta conversión",
            "Pasarelas Stripe, Bizum, Redsys y PayPal",
            "Gestión de stock, inventario y logística",
            "Multidivisa y ventas internacionales",
          ],
          timeline: "4 – 6 semanas",
          timelineLabel: "Plazo medio",
          pricingType: "Presupuesto cerrado",
          pricingLabel: "Modelo de coste",
          ownership: "100% Tuyo",
          ownershipLabel: "Código fuente",
          ctaText: "Quiero lanzar mi Tienda Online",
        },
        {
          id: "software",
          tabLabel: "⚡ Software a Medida",
          badge: "SaaS · Portales & APIs",
          title: "Software de Gestión y Automatización",
          description:
            "Paneles de control (dashboards), plataformas SaaS y APIs a medida que automatizan procesos manuales y reducen drásticamente tus costes operativos.",
          features: [
            "Paneles y Dashboards internos a medida",
            "APIs REST y GraphQL de alto rendimiento",
            "Automatización de flujos de trabajo",
            "Bases de datos PostgreSQL seguras",
            "Mantenimiento y soporte técnico senior",
          ],
          timeline: "Por sprints ágiles",
          timelineLabel: "Plazo medio",
          pricingType: "Por sprint o cerrado",
          pricingLabel: "Modelo de coste",
          ownership: "100% Tuyo",
          ownershipLabel: "Código fuente",
          ctaText: "Quiero crear Software a Medida",
        },
      ],
    },
    physics: {
      badge: "LABORATORIO DE VALOR",
      instruction: "Arrastra y lanza los tokens de valor comercial",
      items: [
        { id: "uptime", label: "99.9% Uptime", type: "pill" },
        { id: "seo", label: "SEO 100", type: "pill" },
        { id: "zero-bug", label: "Despliegue 0-Bug", type: "pill" },
        { id: "fast-ux", label: "UX Ultrarrápida (<50ms)", type: "pill" },
        { id: "scale", label: "Escala Global", type: "pill" },
        { id: "conversion", label: "Alta Conversión", type: "pill" },
        { id: "code", label: "{ }", type: "badge" },
        { id: "rocket", label: "🚀", type: "badge" },
      ],
    },
  },
  showcase: {
    eyebrow: "05 — Proyectos Destacados",
    title: "Ingeniería de Alto",
    titleHighlight: "Impacto",
    intro: "Sistemas digitales diseñados para generar un impacto comercial medible.",
    items: [
      {
        id: "fintech",
        title: "Motor de Trading y Riesgo Corporativo",
        client: "QuantEdge Global",
        industry: "FinTech y SaaS",
        summary: "Enrutamiento de órdenes con latencia sub-milisegundo y panel de riesgo en tiempo real con Next.js.",
        image: "/images/FinTech.webp",
        tags: ["Next.js", "TypeScript", "WebSocket"],
        metrics: "+18.4%",
        metricsLabel: "Eficiencia de Ejecución",
      },
      {
        id: "luxury-store",
        title: "Comercio Headless a Medida",
        client: "Maison Éthique",
        industry: "Comercio Electrónico",
        summary: "Experiencia editorial de lujo con carga instantánea, pago multidivisa con Stripe y 100 en SEO.",
        image: "/images/Store.webp",
        tags: ["Headless", "Stripe", "Next.js"],
        metrics: "+140%",
        metricsLabel: "Conversión Móvil",
      },
      {
        id: "ai-workflow",
        title: "Orquestador de Agentes Autónomos",
        client: "CognitiveFlow AI",
        industry: "Inteligencia Artificial",
        summary: "Lienzo visual de nodos para orquestar flujos de trabajo LLM y coordinación multi-agente empresarial.",
        image: "/images/CognitiveFlow.webp",
        tags: ["AI Agents", "React Flow", "Full-Stack"],
        metrics: "10x",
        metricsLabel: "Aceleración de Flujos",
      },
    ],
  },
  pricing: {
    eyebrow: "06 — Precios Transparentes",
    title: "Inversión Clara en",
    titleHighlight: "Ingeniería",
    intro: "Precios base transparentes. Para presupuestos a medida, utiliza nuestro estimador interactivo.",
    estimatorNote: "¿Necesitas un desarrollo a medida o migración compleja? Utiliza nuestra calculadora interactiva.",
    tiers: [
      {
        id: "showcase",
        name: "Web de Marca y Showcase",
        highlight: false,
        priceStarting: "Desde 1,800€",
        period: "pago único",
        summary: "Web corporativa de alto rendimiento con tipografía editorial, arquitectura trilingüe y física interactiva.",
        deliverables: [
          "Tipografía editorial y diseño a medida",
          "Configuración estática trilingüe (EN / ES / ZH)",
          "100/100 Lighthouse en SEO y Rendimiento",
          "Microinteracciones interactivas de física",
          "Despliegue estático sin mantenimiento en GitHub Pages",
        ],
        timeline: "1-2 Semanas",
        cta: "Reservar Llamada de Diagnóstico",
      },
      {
        id: "ecommerce",
        name: "E-Commerce de Alta Conversión",
        highlight: true,
        priceStarting: "Desde 3,800€",
        period: "pago único",
        summary: "Tienda headless optimizada para velocidad y conversión global con pasarela Stripe multidivisa.",
        deliverables: [
          "Storefront headless con UX ultrarrápida",
          "Stripe y pasarela multidivisa internacional",
          "Sincronización de catálogo e inventario",
          "Cumplimiento RGPD y privacidad legal",
          "Drawer de checkout optimizado para conversión",
        ],
        timeline: "3-4 Semanas",
        cta: "Empezar Proyecto",
      },
      {
        id: "webapp",
        name: "Web App a Medida y SaaS",
        highlight: false,
        priceStarting: "Desde 6,500€",
        period: "por hitos",
        summary: "Producto digital full-stack integral con estado complejo, autenticación y APIs dedicadas.",
        deliverables: [
          "Arquitectura escalable y diseño de base de datos",
          "Autenticación por roles y panel de administración",
          "Integración de agentes IA y automatizaciones",
          "Feeds en tiempo real y APIs REST/GraphQL",
          "SLA dedicado y mantenimiento evolutivo",
        ],
        timeline: "4-8 Semanas",
        cta: "Solicitar Revisión Técnica",
      },
    ],
  },
  estimator: {
    eyebrow: "Calculadora de Proyectos & Alcance",
    title: "Estima el alcance y plazo de tu proyecto en 30 segundos.",
    intro:
      "Selecciona los requerimientos de tu idea a continuación para obtener una estimación arquitectónica inmediata y enviárnosla directamente por WhatsApp o email.",
    projectTypes: [
      {
        id: "mvp",
        title: "MVP Express para Startups",
        badge: "Validación Rápida",
        description: "Producto funcional en web o móvil listo para validar con clientes reales y presentar a inversores.",
        baseTimeline: "3 – 4 semanas",
        stackSuggested: "Next.js 15 · Tailwind · Supabase / PostgreSQL",
      },
      {
        id: "web",
        title: "Web Corporativa & Plataforma a Medida",
        badge: "Top 1% Velocidad & SEO",
        description: "Página web de alta conversión o portal de clientes diseñado para captar leads y posicionar en Google.",
        baseTimeline: "2 – 3 semanas",
        stackSuggested: "Next.js · React 19 · TypeScript · CMS Headless",
      },
      {
        id: "ecommerce",
        title: "Tienda Online / E-Commerce Escalable",
        badge: "Ventas Internacionales",
        description: "Comercio electrónico con pasarelas seguras (Stripe, Bizum), checkout optimizado y sincronización de stock.",
        baseTimeline: "3 – 5 semanas",
        stackSuggested: "Shopify Headless · WooCommerce · Stripe / Bizum",
      },
      {
        id: "app",
        title: "App Móvil Multiplataforma (iOS & Android)",
        badge: "iOS + Android",
        description: "Aplicación móvil fluida con base de código unificada, notificaciones push y publicación en App Store y Google Play.",
        baseTimeline: "5 – 8 semanas",
        stackSuggested: "React Native · Expo · API Node.js · Cloud Sync",
      },
    ],
    featureOptions: [
      { id: "auth", name: "Usuarios y Autenticación", desc: "Registro, login con Google/Apple, roles y perfil de usuario", category: "core" },
      { id: "payments", name: "Pasarela de Pago Segura", desc: "Integración de Stripe, Bizum, suscripciones o cobros recurrentes", category: "core" },
      { id: "admin", name: "Panel de Gestión / Backoffice", desc: "Administración de pedidos, contenidos, usuarios y métricas", category: "core" },
      { id: "ai", name: "IA y Automatizaciones", desc: "Integración de modelos OpenAI/Claude, chatbots o procesamiento de datos", category: "integration" },
      { id: "i18n", name: "Multiidioma y SEO Internacional", desc: "Español, Inglés y Chino con enrutamiento limpio y microdatos", category: "integration" },
      { id: "api", name: "Integración con API / ERP", desc: "Conexión con tu CRM, facturación, stock o base de datos externa", category: "integration" },
    ],
    timelines: [
      { id: "express", label: "Express Sprint (< 1 mes)", badge: "Entrega Prioritaria" },
      { id: "standard", label: "Estándar (1 – 2 meses)", badge: "Planificación Óptima" },
      { id: "flexible", label: "Flexible / Equipo Dedicado", badge: "Sprints Continuos" },
    ],
    ui: {
      step1Title: "1. Selecciona el tipo de proyecto",
      step2Title: "2. Funcionalidades e integraciones clave",
      step3Title: "3. Plazo objetivo de lanzamiento",
      summaryTitle: "Resumen de tu Proyecto",
      summaryScope: "Alcance Seleccionado",
      summaryTimeline: "Plazo Estimado",
      summaryStack: "Stack Tecnológico Recomendado",
      whatsappButton: "Enviar Resumen por WhatsApp",
      emailButton: "Enviar por Email",
      copyButton: "Copiar Resumen",
      copiedNotice: "¡Resumen copiado al portapapeles!",
      whatsappMessagePrefix: "Hola OKCODE, me gustaría solicitar presupuesto para el siguiente proyecto:",
    },
  },
  studio: {
    eyebrow: "01 — El estudio",
    title: "Un estudio de desarrollo con base en España y visión internacional.",
    body: [
      "Somos un equipo de ingeniería y desarrollo digital con sede en España, con amplia experiencia trabajando tanto para empresas nacionales como para clientes internacionales. Trabajamos en español, inglés y chino, garantizando que cada detalle de tu proyecto se ejecute a la perfección sin barreras de comunicación.",
      "Sin intermediarios ni rotación de perfiles junior. Tratas y colaboras directamente con desarrolladores senior y diseñadores de producto que asumen tu proyecto como propio desde la primera llamada hasta la evolución posterior al lanzamiento.",
    ],
    stats: [
      { value: "10+", label: "Años desarrollando software" },
      { value: "120+", label: "Proyectos entregados" },
      { value: "3", label: "Idiomas de trabajo" },
      { value: "100%", label: "Propiedad del código para el cliente" },
    ],
  },
  services: {
    eyebrow: "02 — Qué hacemos",
    title: "Servicios de desarrollo web, apps y software a medida.",
    intro:
      "Desarrollamos soluciones digitales completas y adaptadas a tus objetivos de negocio, optimizadas para rendimiento, conversión y visibilidad en Google.",
    items: [
      {
        id: "web",
        icon: "web",
        title: "Desarrollo Web y Páginas Web a Medida",
        summary:
          "Diseño y desarrollo de páginas web corporativas, landing pages de alta conversión y aplicaciones web ultra rápidas en Next.js y React, optimizadas para posicionamiento SEO y Core Web Vitals.",
        points: [
          "Páginas web corporativas y landing pages de alta conversión",
          "Aplicaciones web interactivas con Next.js y React",
          "Integración con CMS headless (Sanity, Strapi, WordPress)",
          "SEO técnico desde la base, velocidad y accesibilidad WCAG",
        ],
        cta: "Crear mi página web",
      },
      {
        id: "app",
        icon: "app",
        title: "Desarrollo de Aplicaciones Móviles (iOS y Android)",
        summary:
          "Desarrollo de apps móviles nativas y multiplataforma con React Native. Rendimiento fluido, arquitectura escalable y publicación directa en App Store y Google Play.",
        points: [
          "Desarrollo de apps multiplataforma para iOS y Android con React Native",
          "Arquitectura offline-first con sincronización de datos",
          "Notificaciones push, geolocalización y pasarelas de pago integradas",
          "Publicación oficial y optimización ASO en tiendas de aplicaciones",
        ],
        cta: "Desarrollar mi app móvil",
      },
      {
        id: "ecommerce",
        icon: "ecommerce",
        title: "Creación de Tiendas Online y E-commerce",
        summary:
          "Desarrollo de tiendas online a medida en Shopify, WooCommerce o headless e-commerce. Preparadas para ventas internacionales, cobros seguros con tarjeta/Bizum y gestión automática de catálogo.",
        points: [
          "Tiendas online en Shopify, WooCommerce y arquitecturas headless",
          "Integración de pasarelas de pago (Stripe, Redsys, PayPal, Bizum, Apple Pay)",
          "Catálogos B2B, venta por suscripción y multimoneda internacional",
          "Migraciones de tienda y catálogo con cero pérdida de SEO o ventas",
        ],
        cta: "Lanzar mi tienda online",
      },
      {
        id: "software",
        icon: "software",
        title: "Desarrollo de Software a Medida y Automatización",
        summary:
          "Herramientas internas, portales de gestión, paneles de control (dashboards) y APIs a medida que eliminan tareas repetitivas y conectan todos tus sistemas empresariales.",
        points: [
          "Plataformas SaaS, portales de clientes y paneles de gestión (dashboards)",
          "Desarrollo e integración de APIs REST y GraphQL",
          "Automatización de procesos de negocio y reducción de costes",
          "Mantenimiento continuo, soporte técnico y actualizaciones de seguridad",
        ],
        cta: "Definir software a medida",
      },
    ],
  },
  techStack: {
    eyebrow: "03 — Tecnologías",
    title: "Stack tecnológico moderno, seguro y escalable.",
    intro:
      "Elegimos tecnologías líderes en la industria que garantizan velocidad de carga inmediata, excelente rastreo en buscadores y facilidad para evolucionar en el futuro.",
    groups: [
      {
        category: "Frontend & Desarrollo Web",
        items: [
          { name: "Next.js", desc: "Renderizado rápido, SEO estático y dinámico" },
          { name: "React", desc: "Interfaces dinámicas y componentes reactivos" },
          { name: "TypeScript", desc: "Código robusto y libre de errores tipográficos" },
          { name: "Tailwind CSS", desc: "Diseño moderno, ligero y responsive" },
        ],
      },
      {
        category: "Aplicaciones Móviles",
        items: [
          { name: "React Native", desc: "Apps nativas para iOS y Android con una sola base" },
          { name: "Expo", desc: "Despliegue ágil y actualizaciones en tiempo real" },
          { name: "iOS / Swift", desc: "Integraciones avanzadas con el ecosistema Apple" },
          { name: "Android / Kotlin", desc: "Capacidades nativas para dispositivos Android" },
        ],
      },
      {
        category: "Comercio Electrónico y Pagos",
        items: [
          { name: "Shopify", desc: "Plataforma líder para tiendas online escalables" },
          { name: "WooCommerce", desc: "E-commerce flexible sobre WordPress" },
          { name: "Stripe & Redsys", desc: "Pasarelas seguras con Bizum, tarjetas y wallets" },
          { name: "Headless E-commerce", desc: "Tiendas ultra rápidas basadas en API" },
        ],
      },
      {
        category: "Backend & Infraestructura Cloud",
        items: [
          { name: "Node.js", desc: "Servidores eficientes y microservicios escalables" },
          { name: "PostgreSQL", desc: "Bases de datos relacionales seguras y veloces" },
          { name: "APIs REST & GraphQL", desc: "Integraciones limpias con sistemas externos" },
          { name: "Vercel & AWS", desc: "Infraestructura cloud global con alta disponibilidad" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "04 — Proyectos destacados",
    title: "Casos de éxito y resultados medibles.",
    intro: "Una muestra de soluciones digitales entregadas con éxito para empresas de diversos sectores.",
    note: "Casos de muestra — adaptamos cada solución a los objetivos reales de tu empresa.",
    items: [
      {
        id: "p1",
        title: "Panel de operaciones logísticas para retailer español",
        client: "Retail Co.",
        industry: "Retail y Logística",
        year: "2025",
        summary:
          "Un panel de gestión en tiempo real que unificó inventario, flota de reparto y pedidos en una sola pantalla, reduciendo el tiempo de reporte diario de horas a minutos.",
        tags: ["Web app", "Next.js", "Dashboards", "APIs REST"],
        result: "−70% tiempo de gestión",
        placeholder: true,
      },
      {
        id: "p2",
        title: "Tienda online internacional para marca de moda",
        client: "Fashion Brand",
        industry: "Comercio electrónico",
        year: "2024",
        summary:
          "Una tienda bilingüe con checkout multicurrency y métodos de pago locales, optimizada para ventas en España, Europa y Latinoamérica.",
        tags: ["E-commerce", "Shopify", "i18n", "Stripe"],
        result: "+38% conversión de compra",
        placeholder: true,
      },
      {
        id: "p3",
        title: "App móvil offline para servicios de asistencia técnica",
        client: "Service Co.",
        industry: "Servicios de campo",
        year: "2024",
        summary:
          "Una app móvil offline-first que permite a los técnicos registrar partes de trabajo, firmas de clientes y fotografías sin cobertura, sincronizando datos al volver a conectarse.",
        tags: ["App Móvil", "React Native", "Offline-first"],
        result: "−45% carga administrativa",
        placeholder: true,
      },
    ],
  },
  advantages: {
    eyebrow: "05 — Por qué OKCODE",
    title: "Ventajas reales al desarrollar con nuestro equipo.",
    intro: "Beneficios prácticos que garantizan el éxito de tu producto una vez lanzado al mercado.",
    items: [
      {
        title: "Con base en España y alcance internacional",
        description:
          "Presencia local y zona horaria de España para una comunicación fluida, con capacidad nativa multilingüe en español, inglés y chino.",
      },
      {
        title: "Equipo senior sin intermediarios",
        description:
          "Las personas con las que defines el proyecto son los ingenieros senior que programan tu código. Sin capas de gestión innecesarias.",
      },
      {
        title: "Presupuesto cerrado y plazos claros",
        description:
          "Siempre sabrás el coste exacto, los hitos de entrega y las fechas de lanzamiento antes de empezar. Sin sobrecostes sorpresa.",
      },
      {
        title: "Código 100% tuyo y arquitectura escalable",
        description:
          "El código fuente, la propiedad intelectual y los repositorios te pertenecen al 100% desde el primer momento. Sin ataduras técnicas.",
      },
      {
        title: "SEO y rendimiento optimizados desde el día 1",
        description:
          "Diseñamos cada web y tienda online con las mejores prácticas de SEO técnico, datos estructurados Schema.org y Core Web Vitals sobresalientes.",
      },
      {
        title: "Soporte y mantenimiento continuo",
        description:
          "Acompañamos a tu empresa tras el lanzamiento con planes de mantenimiento, soporte técnico, mejoras evolutivas y seguridad.",
      },
    ],
  },
  process: {
    eyebrow: "06 — Cómo trabajamos",
    title: "Un proceso ágil, transparente y sin sorpresas.",
    intro: "Cinco etapas estructuradas desde la primera llamada hasta el lanzamiento definitivo.",
    steps: [
      {
        step: "01",
        title: "Descubrimiento y Estrategia",
        description:
          "Analizamos tu modelo de negocio, clientes objetivo y requerimientos técnicos para acordar objetivos claros.",
      },
      {
        step: "02",
        title: "Propuesta y Presupuesto Cerrado",
        description:
          "Te entregamos una propuesta detallada con alcance desglosado, plazos realistas y precio cerrado sin letra pequeña.",
      },
      {
        step: "03",
        title: "Diseño UX/UI y Prototipo",
        description:
          "Creamos prototipos interactivos navegables para validar la experiencia de usuario antes de escribir código de producción.",
      },
      {
        step: "04",
        title: "Desarrollo Ágil y Control de Calidad",
        description:
          "Programamos por fases con demos semanales, tests automatizados, pruebas de rendimiento y verificación en múltiples dispositivos.",
      },
      {
        step: "05",
        title: "Lanzamiento, Indexación y Soporte",
        description:
          "Despliegue en producción sin caídas, configuración de analítica, indexación en Google y soporte continuo para hacer crecer el producto.",
      },
    ],
  },
  faq: {
    eyebrow: "07 — Preguntas Frecuentes (FAQ)",
    title: "Resolvemos tus dudas sobre el desarrollo de proyectos.",
    intro: "Respuestas claras a las preguntas más habituales de nuestros clientes antes de iniciar su proyecto.",
    items: [
      {
        question: "¿Cuánto cuesta crear una página web, tienda online o aplicación móvil a medida?",
        answer:
          "Para apoyar a pymes, profesionales y startups en Madrid y consolidar nuestra cartera inicial de clientes, ofrecemos tarifas de lanzamiento altamente competitivas con presupuesto cerrado y 100% transparente: Páginas web corporativas y landing pages de alta conversión desde 490 € a 1.200 €; tiendas online completas en Shopify o WooCommerce desde 890 € a 1.950 €; y aplicaciones móviles (iOS/Android) o desarrollos de software/MVP a medida desde 1.500 € a 3.500 €. Ofrecemos facilidades de pago por hitos, sin sorpresas y con código 100% propio.",
      },
      {
        question: "¿Cuánto tiempo se tarda en diseñar, desarrollar y lanzar el proyecto?",
        answer:
          "Una página web corporativa o landing page de alta conversión se completa habitualmente en 2 a 4 semanas. Una tienda online requiere entre 4 y 8 semanas según el catálogo. Aplicaciones móviles multiplataforma y plataformas de software a medida suelen requerir entre 6 y 12 semanas.",
      },
      {
        question: "¿Qué tecnologías utilizáis para programar webs, tiendas y apps?",
        answer:
          "Utilizamos stacks modernos y consolidados: Next.js, React, TypeScript y Tailwind CSS para desarrollo web de alto rendimiento; React Native para aplicaciones móviles nativas en iOS y Android; Shopify y WooCommerce para comercio electrónico; y Node.js, PostgreSQL y APIs REST/GraphQL para la lógica de servidor y bases de datos.",
      },
      {
        question: "¿El código fuente y la propiedad intelectual serán 100% de mi empresa?",
        answer:
          "Sí, absolutamente. Desde el momento de la entrega, tu empresa es la propietaria exclusiva del 100% del código fuente, diseños, bases de datos y propiedad intelectual. Te entregamos acceso total al repositorio (GitHub/GitLab) sin dependencias ni ataduras con nosotros.",
      },
      {
        question: "¿Incluye el desarrollo optimización SEO para aparecer en Google?",
        answer:
          "Sí. Todas nuestras páginas web y tiendas online se desarrollan siguiendo las directrices oficiales de Google: arquitectura semántica HTML5, metadatos optimizados, datos estructurados Schema.org, velocidad de carga óptima (Core Web Vitals) y compatibilidad total con dispositivos móviles.",
      },
      {
        question: "¿Cómo empezamos a trabajar juntos en mi proyecto?",
        answer:
          "Es muy sencillo: escríbenos a través del formulario de contacto inferior, por email o WhatsApp contándonos brevemente tu idea. Te responderemos en un plazo máximo de 24-48 horas para agendar una llamada de descubrimiento gratuita y prepararte una propuesta personalizada.",
      },
    ],
  },
  testimonials: {
    eyebrow: "08 — Voces de clientes",
    title: "Lo que opinan nuestros clientes.",
    intro: "Comentarios de empresas con las que hemos trabajado estrechamente.",
    note: "Testimonios de muestra.",
    items: [
      {
        quote:
          "OKCODE entregó nuestra plataforma exactamente como prometió, en plazo y con un código impecable. La relación más profesional que hemos tenido.",
        author: "Martina R.",
        role: "Directora de Operaciones",
        company: "Retail Co.",
        placeholder: true,
      },
      {
        quote:
          "Entendieron nuestras necesidades internacionales desde el primer día. Su capacidad multilingüe facilitó enormemente la expansión a nuevos mercados.",
        author: "Wei L.",
        role: "Fundadora",
        company: "Fashion Brand",
        placeholder: true,
      },
      {
        quote:
          "Ingenieros senior que van al grano. Nuestra app de campo funciona a la perfección incluso sin conexión.",
        author: "Carlos M.",
        role: "CTO",
        company: "Service Co.",
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: "08 — Contacto",
    title: "Cuéntanos tu proyecto y hagámoslo realidad.",
    intro:
      "Escríbenos en el idioma que prefieras. Respondemos habitualmente en menos de 24 horas laborables.",
    info: { ...sampleContact, address: "Madrid, España" },
    formNote:
      "Este formulario abre tu cliente de correo con los datos precargados. No se almacena ningún dato en servidores externos.",
  },
  footer: {
    about:
      "OKCODE es un estudio de desarrollo de software con base en España que crea páginas web a medida, aplicaciones móviles, tiendas online y software empresarial para equipos que hablan español, inglés y chino.",
    rights: "© " + new Date().getFullYear() + " OKCODE. Todos los derechos reservados.",
    builtNote: "",
  },
  seo: {
    title: "OKCODE — Empresa de Desarrollo de Software, Apps Móviles y Páginas Web a Medida (España)",
    description:
      "Estudio de ingeniería y desarrollo de software en España. Creamos aplicaciones móviles para iOS y Android, páginas web de alto rendimiento en Next.js, tiendas online Shopify y plataformas a medida para startups y empresas. 100% código propio.",
    keywords: [
      "empresa desarrollo software españa",
      "desarrollo aplicaciones moviles madrid",
      "crear aplicacion movil ios android",
      "diseño y desarrollo web a medida nextjs",
      "estudio programacion y software a medida",
      "crear tienda online shopify ecommerce",
      "desarrollo mvp startups españa",
      "programadores react native madrid",
      "presupuesto desarrollo software a medida",
      "agencia desarrollo digital españa",
    ],
    ogTitle: "OKCODE — Software a Medida, Aplicaciones Móviles y Desarrollo Web en España",
    ogDescription:
      "Lanza tu producto digital en 3-4 semanas con código 100% de tu propiedad, presupuesto cerrado y 30 días de garantía post-lanzamiento.",
  },
};

// ---------------------------------------------------------------------------
// Simplified Chinese (served at "/zh-cn")
// ---------------------------------------------------------------------------
const zhCN: SiteContent = {
  locale: "zh-CN",
  dir: "ltr",
  visibility: { testimonials: false },
  ui: {
    skipToContent: "跳转到正文",
    header: {
      homeLabel: "OKCODE — 首页",
      primaryNavLabel: "主导航",
      toggleMenuLabel: "打开导航菜单",
    },
    language: {
      changeLabel: "切换语言",
      menuLabel: "语言选项",
    },
    contact: {
      emailLabel: "邮箱",
      phoneLabel: "电话",
      whatsappLabel: "WhatsApp",
      studioLabel: "工作室",
      socialLabel: "社交媒体",
      nameLabel: "姓名 / 企业",
      emailFieldLabel: "邮箱",
      projectLabel: "项目需求",
      namePlaceholder: "你的姓名或公司名称",
      emailPlaceholder: "you@company.com",
      projectPlaceholder: "请简要描述你的网站、独立站、移动 App 或定制系统需求与预期时间……",
    },
    footer: {
      menuLabel: "菜单",
      contactLabel: "联系",
    },
  },
  nav: [
    { anchor: "studio", label: "工作室" },
    { anchor: "services", label: "服务" },
    { anchor: "stack", label: "技术栈" },
    { anchor: "projects", label: "案例" },
    { anchor: "advantages", label: "核心优势" },
    { anchor: "process", label: "合作流程" },
    { anchor: "faq", label: "常见问题" },
    { anchor: "contact", label: "联系咨询" },
  ],
  ctaLabel: "获取项目报价",
  hero: {
    eyebrow: "开放新项目预订 · 扎根西班牙马德里的技术开发团队",
    editorialTitle: {
      prefix: "为追求",
      serif: "卓越",
      suffix: "的品牌，构筑极致可靠的数字工程。",
    },
    title: "为企业定制打造带来真实商业回报的定制网站、移动 App",
    titleHighlight: "与出海独立站。",
    subtitle:
      "数周内将你的想法转化为高转化数字化产品。资深全栈工程师直连、固定透明报价、极致加载速度与 Google SEO 深度优化，100% 源码知识产权完整交付。",
    badges: [
      "⚡ 最快 2 周交付上线",
      "🔒 固定总价合同，零隐形费用",
      "🚀 100% 源码与知识产权完全交付",
      "📈 深度 Google SEO 与 Core Web Vitals 优化",
    ],
    primaryCta: "免费获取项目方案与报价",
    secondaryCta: "查看精选商业案例",
    trust: "深受讲中文、西班牙语与英语的全球出海企业与本地品牌信赖（中 · 西 · 英）。",
    interactive: {
      terminalPath: "okcode / solution-navigator",
      version: "v2.4",
      statusBadge: "可承接新项目",
      tabs: [
        {
          id: "web",
          tabLabel: "🌐 品牌官网与 Web",
          badge: "Next.js 15 · Google SEO 顶尖优化",
          title: "高端企业官网与高转化 Web 应用",
          description:
            "基于 Next.js 与 React 构建的现代化网站，毫秒级极速响应，符合国际 WCAG 无障碍标准并深度优化 Google 搜索排名与询盘转化。",
          features: [
            "Next.js 15 + React + TypeScript 全栈架构",
            "Core Web Vitals 指标 < 100ms 满分级加载",
            "Schema.org 结构化数据与技术 SEO 深度内嵌",
            "全定制响应式 UX/UI 交互体验",
            "Headless CMS（Sanity/Strapi）便捷内容管理",
          ],
          timeline: "2 – 4 周",
          timelineLabel: "平均交付周期",
          pricingType: "固定透明总价",
          pricingLabel: "报价方式",
          ownership: "100% 归客户所有",
          ownershipLabel: "源码与产权",
          ctaText: "咨询定制网站开发",
        },
        {
          id: "app",
          tabLabel: "📱 iOS / Android App",
          badge: "React Native · 跨平台原生体验",
          title: "iOS 与 Android 移动应用开发",
          description:
            "基于 React Native 开发丝滑原生质感的移动 App，一套代码同时覆盖苹果与安卓平台，提供离线数据同步并协助官方应用市场上架。",
          features: [
            "React Native & Expo 跨平台开发",
            "一套代码高品质覆盖 iOS 与 Android",
            "离线优先架构（Offline-first）与云端同步",
            "实时推送通知、多语言与本地支付集成",
            "App Store 与 Google Play 官方上架及 ASO",
          ],
          timeline: "6 – 10 周",
          timelineLabel: "平均交付周期",
          pricingType: "阶段里程碑结算",
          pricingLabel: "报价方式",
          ownership: "100% 归客户所有",
          ownershipLabel: "源码与产权",
          ctaText: "咨询移动 App 开发",
        },
        {
          id: "ecommerce",
          tabLabel: "🛍️ 出海电商独立站",
          badge: "Shopify · WooCommerce",
          title: "品牌出海独立站与跨境电商",
          description:
            "为跨境出海品牌量身打造的高转化独立站，支持多语言、多币种自适应结算、集成欧洲与全球主流支付及物流打通。",
          features: [
            "Shopify 定制开发、WooCommerce 或 Headless",
            "极简高效的结账转化率优化流程",
            "集成 Stripe, PayPal, Apple Pay 与本地钱包",
            "自动化库存同步与物流订单流转",
            "多语言多币种自适应汇率结算",
          ],
          timeline: "4 – 6 周",
          timelineLabel: "平均交付周期",
          pricingType: "固定透明总价",
          pricingLabel: "报价方式",
          ownership: "100% 归客户所有",
          ownershipLabel: "源码与产权",
          ctaText: "咨询出海独立站搭建",
        },
        {
          id: "software",
          tabLabel: "⚡ 定制业务系统",
          badge: "SaaS · 内部平台 & API",
          title: "企业管理平台、数据看板与 API",
          description:
            "针对企业业务痛点定制的内部中控看板（Dashboard）、SaaS 平台与自动化接口，打通数据孤岛，大幅削减重复人工。",
          features: [
            "定制企业运营看板与客户门户",
            "高并发 REST & GraphQL API 接口开发",
            "业务流程自动化，杜绝人工低效",
            "安全可靠的 PostgreSQL 数据库设计",
            "资深工程师长期维护与技术支持",
          ],
          timeline: "敏捷 Sprint 迭代",
          timelineLabel: "平均交付周期",
          pricingType: "按阶段或固定总价",
          pricingLabel: "报价方式",
          ownership: "100% 归客户所有",
          ownershipLabel: "源码与产权",
          ctaText: "咨询定制系统开发",
        },
      ],
    },
    physics: {
      badge: "商业价值实验室",
      instruction: "鼠标拖拽或抛掷，探索交付价值指标",
      items: [
        { id: "uptime", label: "99.9% 高可用", type: "pill" },
        { id: "seo", label: "SEO 满分", type: "pill" },
        { id: "zero-bug", label: "零缺陷交付", type: "pill" },
        { id: "fast-ux", label: "极致性能 (<50ms)", type: "pill" },
        { id: "scale", label: "全球化架构", type: "pill" },
        { id: "conversion", label: "高转化率", type: "pill" },
        { id: "code", label: "{ }", type: "badge" },
        { id: "rocket", label: "🚀", type: "badge" },
      ],
    },
  },
  showcase: {
    eyebrow: "05 — 代表作品",
    title: "工程实践与标杆",
    titleHighlight: "案例",
    intro: "以严谨工程纪律交付的高性能数字化系统。",
    items: [
      {
        id: "fintech",
        title: "企业级交易与风控引擎",
        client: "QuantEdge Global",
        industry: "金融科技与 SaaS",
        summary: "基于 Next.js 构建的亚毫秒级订单撮合路由与实时风控智能仪表盘。",
        image: "/images/FinTech.webp",
        tags: ["Next.js", "TypeScript", "WebSocket"],
        metrics: "+18.4%",
        metricsLabel: "执行效率提升",
      },
      {
        id: "luxury-store",
        title: "定制化 Headless 独立站",
        client: "Maison Éthique",
        industry: "电子商务",
        summary: "杂志级质感的奢品购物体验，瞬时页面响应，Stripe 多币种结算，Lighthouse SEO 满分。",
        image: "/images/Store.webp",
        tags: ["Headless", "Stripe", "Next.js"],
        metrics: "+140%",
        metricsLabel: "移动端转化率",
      },
      {
        id: "ai-workflow",
        title: "自主 AI Agent 编排系统",
        client: "CognitiveFlow AI",
        industry: "人工智能",
        summary: "基于 React Flow 节点画布的企业级 LLM 工作流与多智能体协作管理平台。",
        image: "/images/CognitiveFlow.webp",
        tags: ["AI Agents", "React Flow", "Full-Stack"],
        metrics: "10x",
        metricsLabel: "工作流提速",
      },
    ],
  },
  pricing: {
    eyebrow: "06 — 透明阶梯定价",
    title: "清晰透明的",
    titleHighlight: "工程投入",
    intro: "公开透明的起步基准。如需自定义规格，请使用下方的交互式预算计算器。",
    estimatorNote: "需要企业级定制系统、复杂数据迁移或专属里程碑？请使用下方交互估算器细化需求。",
    tiers: [
      {
        id: "showcase",
        name: "品牌展示与标杆官网",
        highlight: false,
        priceStarting: "Desde 1,800€",
        period: "一次性交付",
        summary: "高性能品牌官方网站，融合现代杂志级排版、三语静态架构与交互式物理微动效。",
        deliverables: [
          "杂志级视觉排版与定制工程设计",
          "中/西/英三语静态极速架构",
          "Lighthouse 100/100 满分性能与 SEO",
          "物理引擎交互式价值徽章组件",
          "GitHub Pages 零维护成本自动化托管",
        ],
        timeline: "1-2 周",
        cta: "预约技术沟通",
      },
      {
        id: "ecommerce",
        name: "高转化跨境独立站",
        highlight: true,
        priceStarting: "Desde 3,800€",
        period: "一次性交付",
        summary: "专为全球转化与极致速度打造的 Headless 电商独立站，集成 Stripe 全球多币种结算。",
        deliverables: [
          "超高流畅度 Headless 现代化前端",
          "Stripe 与全球主流多币种支付结算",
          "商品数据与库存自动化同步",
          "欧盟 GDPR 隐私合规与法律合规配置",
          "转化率专项优化的滑出式结账体验",
        ],
        timeline: "3-4 周",
        cta: "启动项目",
      },
      {
        id: "webapp",
        name: "企业定制系统与 SaaS",
        highlight: false,
        priceStarting: "Desde 6,500€",
        period: "里程碑交付",
        summary: "全流程端到端数字化产品开发，具备复杂状态管理、权限安全体系与定制高并发 API。",
        deliverables: [
          "高扩展性系统架构与数据库建模",
          "基于 RBAC 的权限系统与管理中台",
          "企业级 AI Agent 与自动化工作流集成",
          "实时数据流与专用 REST/GraphQL 接口",
          "专属 SLA 保障与持续演进技术支持",
        ],
        timeline: "4-8 周",
        cta: "预约架构方案评审",
      },
    ],
  },
  estimator: {
    eyebrow: "项目范围与预算评估器",
    title: "30秒快速评估您的数字化项目与交付周期。",
    intro: "在下方选择您的项目需求，实时获取架构配置与交付建议，并可一键通过 WhatsApp 或邮件直接与资深工程师对接。",
    projectTypes: [
      {
        id: "mvp",
        title: "初创企业 MVP 敏捷出海",
        badge: "快速上线验证",
        description: "3-4周内交付高品质全栈 Web 或移动产品，快速验证商业模式并向投资人演示。",
        baseTimeline: "3 – 4 周",
        stackSuggested: "Next.js 15 · Tailwind · Supabase / PostgreSQL",
      },
      {
        id: "web",
        title: "定制高转化品牌官网 & 平台",
        badge: "顶尖性能与 Google SEO",
        description: "专为海外获客打造的高性能官网、客户门户与业务后台，极速打开并在搜索引擎名列前茅。",
        baseTimeline: "2 – 3 周",
        stackSuggested: "Next.js · React 19 · TypeScript · Headless CMS",
      },
      {
        id: "ecommerce",
        title: "跨境电商独立站 (Shopify/Woo)",
        badge: "全球支付与多币种",
        description: "集成 Stripe、PayPal、Apple Pay 与微信支付，高转化结账流程与海外库存同步。",
        baseTimeline: "3 – 5 周",
        stackSuggested: "Shopify Headless · WooCommerce · Stripe / 微信支付",
      },
      {
        id: "app",
        title: "跨平台移动 App (iOS & Android)",
        badge: "双端同构交付",
        description: "一套高质量代码同时发布至苹果 App Store 与 Google Play，流畅原生体验与实时通知。",
        baseTimeline: "5 – 8 周",
        stackSuggested: "React Native · Expo · Node.js API · 云端同步",
      },
    ],
    featureOptions: [
      { id: "auth", name: "用户体系与权限", desc: "支持 Google/微信/Apple 快捷登录、多角色权限与个人中心", category: "core" },
      { id: "payments", name: "全球安全支付网关", desc: "集成 Stripe、Bizum、PayPal、订阅制自动扣费与发票系统", category: "core" },
      { id: "admin", name: "定制管理后台 / ERP", desc: "高效管理订单、会员、内容与实时多维度业务数据看板", category: "core" },
      { id: "ai", name: "AI 智能与业务自动化", desc: "接入 OpenAI/Claude 模型，实现智能客服与工作流自动处理", category: "integration" },
      { id: "i18n", name: "三语国际化与海外 SEO", desc: "中/西/英三语独立静态路由与 Schema.org 结构化数据优化", category: "integration" },
      { id: "api", name: "第三方 API / 现有系统打通", desc: "无缝对接外部 CRM、海外物流跟踪或企业现有数据库", category: "integration" },
    ],
    timelines: [
      { id: "express", label: "加急敏捷冲刺 (< 1个月)", badge: "优先交付" },
      { id: "standard", label: "标准交付周期 (1 – 2个月)", badge: "稳健规划" },
      { id: "flexible", label: "灵活迭代 / 长期技术伙伴", badge: "持续敏捷 Sprints" },
    ],
    ui: {
      step1Title: "1. 选择项目类型",
      step2Title: "2. 核心功能与第三方集成",
      step3Title: "3. 目标交付周期",
      summaryTitle: "您的项目规划概要",
      summaryScope: "所选需求范围",
      summaryTimeline: "预计交付周期",
      summaryStack: "推荐技术栈",
      whatsappButton: "通过 WhatsApp 快速发送需求",
      emailButton: "通过邮件发送",
      copyButton: "复制需求摘要",
      copiedNotice: "项目概要已复制到剪贴板！",
      whatsappMessagePrefix: "您好 OKCODE，我想咨询以下项目的开发方案与报价：",
    },
  },
  studio: {
    eyebrow: "01 — 关于工作室",
    title: "扎根西班牙、兼具国际化交付能力的专业技术团队。",
    body: [
      "我们是一支常驻西班牙马德里的全栈工程团队，既深耕欧洲本地数字化市场，也长期为出海企业及国际品牌提供技术开发。我们用中文、西班牙语和英语流利沟通，确保从第一份需求梳理到最终上线验收，没有任何沟通损耗。",
      "坚持由资深全栈工程师与产品设计师直接负责开发，拒绝层层外包与初级人员频繁交接。我们把你的产品路线图当作自己的来做，交付按时、架构清晰且易于长期维护与扩展。",
    ],
    stats: [
      { value: "10+", label: "年数字化开发经验" },
      { value: "120+", label: "已交付商业项目" },
      { value: "3", label: "工作语言（中/西/英）" },
      { value: "100%", label: "代码与知识产权完全归客户所有" },
    ],
  },
  services: {
    eyebrow: "02 — 核心服务",
    title: "围绕企业商业增长的全栈数字化开发服务。",
    intro: "从高转化品牌官网、跨平台移动应用，到跨境电商独立站与内部业务系统，提供全生命周期技术支持。",
    items: [
      {
        id: "web",
        icon: "web",
        title: "定制网站与 Web 应用开发",
        summary:
          "基于 Next.js 与 React 打造的高性能品牌官网、营销落地页与现代化 Web 应用，秒级加载、符合 WCAG 无障碍标准并深度优化 Google SEO 排名。",
        points: [
          "高端企业官网与高转化营销落地页（Landing Page）",
          "现代化 Web 交互应用开发（Next.js / React / TypeScript）",
          "Headless CMS 内容管理系统集成（Sanity, Strapi, WordPress）",
          "深度 Google SEO 技术优化、Core Web Vitals 满分体验",
        ],
        cta: "规划定制网站",
      },
      {
        id: "app",
        icon: "app",
        title: "iOS 与 Android 移动 App 开发",
        summary:
          "采用 React Native 开发原生质感的跨平台移动应用，一套代码覆盖苹果 iOS 与安卓平台，提供丝滑操作体验并负责上架审核。",
        points: [
          "React Native 跨平台开发（一套代码覆盖 iOS & Android）",
          "离线优先架构（Offline-first）与本地数据自动同步",
          "实时推送通知、地图定位、多语言与支付集成",
          "苹果 App Store 与 Google Play 官方上架与 ASO 优化",
        ],
        cta: "开发移动 App",
      },
      {
        id: "ecommerce",
        icon: "ecommerce",
        title: "跨境电商独立站开发",
        summary:
          "基于 Shopify、WooCommerce 或 Headless 架构搭建的品牌独立站，完美适配多语言、多币种国际结算、本地主流支付与物流跟踪系统。",
        points: [
          "Shopify 定制开发、WooCommerce 与 Headless 独立站",
          "集成 Stripe, Redsys, PayPal, Apple Pay, Bizum 等本地主流支付",
          "多语言、多币种自适应结算与 B2B 批发订阅功能",
          "平滑数据与店铺迁移，确保 0 停机时间与 0 流量损失",
        ],
        cta: "打造电商独立站",
      },
      {
        id: "software",
        icon: "software",
        title: "定制业务系统与 API 开发",
        summary:
          "针对企业痛点量身打造的内部管理平台、数据看板（Dashboard）、SaaS 平台与自动化接口，打通多系统孤岛并消除繁琐人工。",
        points: [
          "企业运营后台、客户门户与实时业务看板（Dashboard）",
          "高并发 REST & GraphQL API 设计、开发与第三方系统对接",
          "业务工作流自动化，显著削减人工操作与出错率",
          "长期技术维护、服务器监控与安全补丁支持",
        ],
        cta: "定制业务系统",
      },
    ],
  },
  techStack: {
    eyebrow: "03 — 技术栈",
    title: "现代化、安全且极具扩展性的技术体系。",
    intro: "精选全球经过大规模商业验证的成熟技术栈，兼顾开发效率、访问速度、搜索引擎爬取与长期可维护性。",
    groups: [
      {
        category: "前端与 Web 开发",
        items: [
          { name: "Next.js", desc: "服务端渲染与极速静态生成，SEO 体验极佳" },
          { name: "React", desc: "组件化架构，构建流畅动态交互" },
          { name: "TypeScript", desc: "严格类型系统，保障大型项目工程质量" },
          { name: "Tailwind CSS", desc: "现代化响应式样式设计，体积轻巧" },
        ],
      },
      {
        category: "移动端开发",
        items: [
          { name: "React Native", desc: "高质量跨平台开发，原生级流畅度" },
          { name: "Expo", desc: "敏捷迭代与热更新支持" },
          { name: "iOS / Swift", desc: "深度调用苹果生态原生特性" },
          { name: "Android / Kotlin", desc: "安卓系统深度优化与原生集成" },
        ],
      },
      {
        category: "电商与支付集成",
        items: [
          { name: "Shopify", desc: "全球领先的独立站生态与定制主题" },
          { name: "WooCommerce", desc: "灵活开源的 WordPress 电商解决方案" },
          { name: "Stripe & 本地支付", desc: "多币种、合规信用卡与本地电子钱包" },
          { name: "Headless Commerce", desc: "前后端分离的高性能商城架构" },
        ],
      },
      {
        category: "后端与云端架构",
        items: [
          { name: "Node.js", desc: "高并发异步后端服务" },
          { name: "PostgreSQL", desc: "安全可靠的企业级关系型数据库" },
          { name: "REST & GraphQL", desc: "规范化数据接口与第三方服务打通" },
          { name: "Vercel & AWS", desc: "全球 Edge CDN 加速与弹性云主机" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "04 — 精选案例",
    title: "用商业结果证明技术价值。",
    intro: "近期横跨零售、跨境电商与外勤服务等行业的真实数字化交付缩影。",
    note: "以下为示例案例——在项目启动时我们会根据你的业务提供详尽规划与指标对齐。",
    items: [
      {
        id: "p1",
        title: "某西班牙零售企业的实时物流运营看板",
        client: "Retail Co.",
        industry: "零售与供应链",
        year: "2025",
        summary:
          "为西班牙知名零售商打造的实时中控看板，将库存、车辆调度与订单流转聚合在一屏，每日报表整理时间从数小时骤降至几分钟。",
        tags: ["Web 应用", "Next.js", "数据看板", "REST API"],
        result: "报表处理时间 −70%",
        placeholder: true,
      },
      {
        id: "p2",
        title: "某知名时尚品牌的跨境电商双语独立站",
        client: "Fashion Brand",
        industry: "跨境电商",
        year: "2024",
        summary:
          "打造支持多语言、多币种与欧洲本地支付的品牌出海独立站，顺利打通西班牙及拉美主流市场并大幅提高购买转化率。",
        tags: ["电商独立站", "Shopify", "多语言", "Stripe"],
        result: "下单转化率 +38%",
        placeholder: true,
      },
      {
        id: "p3",
        title: "面向专业技术人员的外勤工单移动 App",
        client: "Service Co.",
        industry: "外勤与售后服务",
        year: "2024",
        summary:
          "离线优先的移动端解决方案，支持工程师在无网络环境下记录工单、拍照与电子签名，恢复网络后自动安全同步。",
        tags: ["移动 App", "React Native", "离线优先"],
        result: "事务性工作 −45%",
        placeholder: true,
      },
    ],
  },
  advantages: {
    eyebrow: "05 — 为什么选择 OKCODE",
    title: "合作中你能获得的实质性保障。",
    intro: "不仅在提案时令人信服，更在项目上线后持续发挥长效商业价值。",
    items: [
      {
        title: "扎根西班牙，中西英三语无缝沟通",
        description:
          "相同时区与本地化支持，中/西/英三语母语级交流，彻底消除跨国协作中的语言与文化壁垒。",
      },
      {
        title: "资深工程师直连，杜绝转包层级",
        description:
          "从技术方案评估到每一行代码，均由资深工程师亲自操刀，没有冗余的项目经理转达和初级团队试错。",
      },
      {
        title: "固定范围与透明报价，绝无隐形费用",
        description:
          "合同前明确各项交付物、排期与总费用，每周进度同步演示，绝不在中途产生任何意外加价。",
      },
      {
        title: "100% 源码与知识产权完全交付",
        description:
          "项目所有源码、设计文件、数据库及部署配置 100% 归你所有，绝不制造技术壁垒或强制绑定。",
      },
      {
        title: "内置搜索引擎 SEO 与极致性能优化",
        description:
          "从第一天起就遵循 Google 官方技术规范、Schema.org 结构化数据与 Core Web Vitals 速度标准。",
      },
      {
        title: "完善的上线后维护与长期陪伴",
        description:
          "产品发布只是起点，我们提供持续的服务器监控、安全补丁、性能调优与功能迭代支持。",
      },
    ],
  },
  process: {
    eyebrow: "06 — 合作流程",
    title: "清晰、可控、透明的五个交付步骤。",
    intro: "从首次需求沟通到最终稳定上线，每一步都有明确里程碑与验收标准。",
    steps: [
      {
        step: "01",
        title: "需求调研与可行性评估",
        description: "深入了解你的业务模式、目标用户群与功能要求，明确产品的核心成功指标。",
      },
      {
        step: "02",
        title: "方案设计与固定报价",
        description: "提供详细的技术架构方案、功能清单、交付排期与无隐形消费的固定报价。",
      },
      {
        step: "03",
        title: "原型设计与交互确认",
        description: "在编写正式代码前，提供可点击交互的高保真原型供你体验和最终确认。",
      },
      {
        step: "04",
        title: "敏捷编码与多轮质检",
        description: "分阶段开发与每周演示，配合自动化测试、跨设备兼容与性能压力测试。",
      },
      {
        step: "05",
        title: "平稳上线与持续维护",
        description: "生产环境无缝部署、数据接入、Google 搜索收录提交与长期售后保障。",
      },
    ],
  },
  faq: {
    eyebrow: "07 — 常见问题 (FAQ)",
    title: "关于项目开发，你关心的核心问题。",
    intro: "整理了客户在启动技术项目前最常咨询的问题与清晰解答。",
    items: [
      {
        question: "开发一个定制网站、独立站或移动 App 大致需要多少预算？",
        answer:
          "为了开拓马德里及欧洲初创市场并建立早期标杆客户案例，我们目前提供极具诚意的高性价比初期合作特惠价（同等享受资深工程师直连交付与 100% 源码交付）：企业展示官网与高转化营销页 490 € – 1,200 € 起；全功能跨境电商独立站（Shopify / WooCommerce）890 € – 1,950 € 起；定制开发的 iOS/Android 移动 App 或初创 MVP 业务系统 1,500 € – 3,500 € 起。支持按里程碑分期付款，签订一口价透明合同，绝无任何隐藏加价。",
      },
      {
        question: "从开始设计到最终上线通常需要多长时间？",
        answer:
          "标准的高端品牌官网或营销落地页通常在 2 到 4 周内完成上线；功能完善的电商独立站通常需要 4 到 8 周；而涉及复杂逻辑与跨平台特性的移动 App 或 SaaS 业务系统，周期一般在 6 到 12 周左右。",
      },
      {
        question: "你们主要使用哪些技术栈进行开发？",
        answer:
          "我们坚持使用国际主流、高性能且易于维护的技术栈：Web 端采用 Next.js、React、TypeScript 和 Tailwind CSS；移动 App 采用 React Native；电商系统采用 Shopify 与 WooCommerce；后端与数据层采用 Node.js、PostgreSQL 与 REST/GraphQL API。",
      },
      {
        question: "项目完成后，源码和知识产权归谁所有？",
        answer:
          "100% 归客户所有。项目交付验收后，我们会将所有 Git 源码仓库（GitHub/GitLab）、设计稿件、数据库及云端服务器权限完整移交给你的团队，无任何技术锁死或版权保留。",
      },
      {
        question: "网站开发是否包含 Google 搜索引擎 SEO 优化？",
        answer:
          "是的。我们开发的所有网站均深度贯彻 Google 搜索引擎规范：采用语义化 HTML5 标签、Schema.org 结构化数据、多语言 hreflang 声明、Core Web Vitals 秒开优化与移动端完美适配，为后续自然流量与获客打下坚实基础。",
      },
      {
        question: "如何与 OKCODE 开启首次合作咨询？",
        answer:
          "非常简单：通过页面下方的联系表单、发送邮件或通过 WhatsApp 留下你的需求，我们会在 24 小时内与你取得联系，并为你安排一次免费的需求梳理与方案评估。",
      },
    ],
  },
  testimonials: {
    eyebrow: "08 — 客户评价",
    title: "合作伙伴对我们的真实评价。",
    intro: "来自共同并肩打造数字化产品的团队的真实反馈。",
    note: "示例客户反馈。",
    items: [
      {
        quote: "OKCODE 准时交付了承诺的一切，代码非常整洁规范，沟通高效清晰，是我们在欧洲最省心的技术伙伴。",
        author: "Martina R.",
        role: "运营总监",
        company: "Retail Co.",
        placeholder: true,
      },
      {
        quote: "他们深谙欧洲与中国出海业务的实际需求，中西英三语交流完全无障碍，帮助我们的出海独立站顺利上线并快速起量。",
        author: "Wei L.",
        role: "创始人",
        company: "Fashion Brand",
        placeholder: true,
      },
      {
        quote: "资深工程师亲自把关，需求理解到位。我们的外勤管理 App 在弱网环境下依然表现稳健。",
        author: "Carlos M.",
        role: "CTO",
        company: "Service Co.",
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: "08 — 联系我们",
    title: "告诉我们你的项目想法，一起打造优质产品。",
    intro: "你可以使用中文、西班牙语或英语随时联系我们。通常在 24 小时内给到答复。",
    info: { ...sampleContact, address: "西班牙，马德里" },
    formNote: "本表单会调起你的本地邮件客户端并自动预填内容，不会在第三方服务器存储任何隐私数据。",
  },
  footer: {
    about:
      "OKCODE 是一支扎根西班牙的专业数字化开发工作室，为讲中文、西班牙语与英语的企业打造高质量 Web 网站、移动 App、跨境电商独立站与定制业务系统。",
    rights: "© " + new Date().getFullYear() + " OKCODE. 保留所有权利。",
    builtNote: "",
  },
  seo: {
    title: "OKCODE — 西班牙软件定制开发、移动App开发与出海电商独立站工作室",
    description:
      "扎根西班牙马德里的资深全栈工程团队。专注为全球讲中文、西语与英语的企业量身定制高性能 Web 应用、iOS/Android 跨平台 App（React Native）、Shopify 跨境独立站及数字化系统。100% 源码交付。",
    keywords: [
      "西班牙软件开发公司",
      "马德里华人软件开发团队",
      "欧洲定制网站与Web应用",
      "海外出海独立站搭建Shopify",
      "React Native 跨平台App开发",
      "西班牙移动应用开发公司",
      "欧洲企业业务管理系统定制",
      "初创企业MVP敏捷出海开发",
      "Next.js 独立站开发制作",
      "中西英三语软件外包团队",
    ],
    ogTitle: "OKCODE — 扎根西班牙的专业软件开发、移动 App 与跨境独立站工作室",
    ogDescription:
      "3-4周内将您的产品构想转化为高品质上线产品。100% 源码与知识产权交付，固定透明报价与30天售后质保。",
  },
};

export const content: Record<Locale, SiteContent> = {
  en,
  es,
  "zh-CN": zhCN,
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
