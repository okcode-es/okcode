import type { Locale } from "../lib/i18n";

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

export interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  trust: string;
  interactive: HeroInteractiveData;
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
  email: "hello@okcode.es",
  phone: "+34 600 000 000",
  whatsapp: "+34600000000",
  address: "Madrid, Spain",
  socials: [
    { label: "GitHub", href: "https://github.com/okcode-es" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/okcode-es" },
    { label: "X / Twitter", href: "https://twitter.com/okcode_" },
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
          "Project costs depend on scope, complexity, and specific requirements. Landing pages and marketing websites typically start around €1,500–€3,500, comprehensive e-commerce stores range from €3,000–€7,000, and custom mobile apps or software platforms start from €5,000. We provide fixed, transparent estimates with no unexpected overages.",
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
    builtNote: "Engineered for speed, accessibility & SEO · Static Next.js",
  },
  seo: {
    title: "OKCODE — Custom Web, Mobile App & Software Development Studio (Spain)",
    description:
      "Spain-based development studio building custom websites, iOS/Android mobile apps, e-commerce storefronts (Shopify/WooCommerce), and bespoke business software. Get a free quote.",
    keywords: [
      "custom software development",
      "web development studio spain",
      "mobile app development agency",
      "react native app developers",
      "shopify ecommerce development",
      "next.js web development madrid",
      "custom business applications",
    ],
    ogTitle: "OKCODE — Custom Web, Mobile App & Software Development Studio",
    ogDescription:
      "We build high-performance websites, iOS/Android apps, e-commerce stores and custom software for modern businesses.",
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
          "El precio varía según el alcance y las funcionalidades requeridas. Páginas web corporativas y landing pages profesionales suelen oscilar entre 1.500 € y 3.500 €. Tiendas online completas en Shopify o WooCommerce suelen situarse entre 3.000 € y 7.000 €. Aplicaciones móviles (iOS/Android) o desarrollos de software a medida parten generalmente desde 5.000 €. Siempre proporcionamos un presupuesto cerrado y detallado sin sorpresas.",
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
    builtNote: "Optimizado para velocidad, accesibilidad y SEO · Next.js estático",
  },
  seo: {
    title: "OKCODE — Desarrollo Web a Medida, Apps Móviles y Tiendas Online en España",
    description:
      "Estudio de desarrollo en España especializado en creación de páginas web a medida, aplicaciones móviles iOS/Android, tiendas online Shopify/WooCommerce y software empresarial. Presupuesto sin compromiso.",
    keywords: [
      "desarrollo web a medida",
      "crear pagina web profesional",
      "desarrollo aplicaciones moviles",
      "empresa desarrollo apps madrid",
      "crear tienda online shopify",
      "desarrollo ecommerce españa",
      "software a medida empresas",
      "programacion react nextjs",
      "estudio desarrollo software",
    ],
    ogTitle: "OKCODE — Desarrollo Web, Apps Móviles y Tiendas Online en España",
    ogDescription:
      "Creamos páginas web de alto rendimiento, aplicaciones móviles (iOS/Android), tiendas online y software a medida para empresas y startups.",
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
          "费用取决于项目的具体功能、复杂度与交付周期。标准的企业展示官网或高转化落地页通常在 1,500 € – 3,500 € 之间；具备完整支付与物流功能的 Shopify/WooCommerce 独立站通常在 3,000 € – 7,000 € 之间；定制开发的 iOS/Android 移动 App 或企业业务系统通常从 5,000 € 起。我们在立项前会提供详尽透明的固定报价单，绝无任何隐藏加价。",
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
    builtNote: "极速性能、无障碍与 Google SEO 深度优化 · 静态 Next.js",
  },
  seo: {
    title: "OKCODE — 软件定制开发、出海电商独立站与移动 App 开发工作室（西班牙）",
    description:
      "扎根西班牙的专业软件与数字化开发工作室，为企业量身打造高性能定制网站、iOS/Android 移动应用、跨境电商独立站（Shopify/WooCommerce）与业务管理系统。欢迎咨询报价。",
    keywords: [
      "西班牙软件开发公司",
      "定制网站开发",
      "出海独立站搭建",
      "移动应用开发公司",
      "React Native 开发",
      "Shopify 电商开发",
      "西班牙华人技术团队",
      "企业管理软件定制",
      "Next.js 网站制作",
    ],
    ogTitle: "OKCODE — 西班牙专业软件开发、出海独立站与移动 App 定制工作室",
    ogDescription:
      "为全球讲中文、西班牙语与英语的企业打造高质量 Web 网站、移动 App、跨境电商与定制业务系统。",
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
