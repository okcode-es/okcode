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

export interface HeroArtStep {
  title: string;
  detail: string;
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
  heroArt: {
    path: string;
    version: string;
    kicker: string;
    title: string;
    status: string;
    flowLabel: string;
    steps: [HeroArtStep, HeroArtStep, HeroArtStep];
    metrics: {
      stackLabel: string;
      stackValue: string;
      languagesLabel: string;
      languagesValue: string;
      baseLabel: string;
      baseValue: string;
    };
    onlineLabel: string;
    footerNote: string;
    caption: string;
  };
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
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string;
  };
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
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

// ---------------------------------------------------------------------------
// Shared sample contact details — REPLACE with the studio's real information.
// ---------------------------------------------------------------------------
const sampleContact: ContactInfo = {
  email: "hello@okcode.es", // TODO: REPLACE with the real studio email
  phone: "+34 600 000 000", // TODO: REPLACE with the real phone number
  whatsapp: "+34600000000", // TODO: REPLACE (no spaces) for the wa.me link
  address: "Madrid, Spain", // TODO: REPLACE with the real address / city
  socials: [
    { label: "GitHub", href: "https://github.com/okcode-es" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/okcode-es" }, // TODO: REPLACE
    { label: "X / Twitter", href: "https://twitter.com/okcode_" }, // TODO: REPLACE
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
      projectPlaceholder: "Tell us what you are building…",
    },
    footer: {
      menuLabel: "Menu",
      contactLabel: "Contact",
    },
    heroArt: {
      path: "okcode / product-system",
      version: "studio / ES",
      kicker: "Delivery system",
      title: "From brief to live.",
      status: "live",
      flowLabel: "OKCODE delivery flow",
      steps: [
        { title: "Discover", detail: "scope" },
        { title: "Build", detail: "ship with care" },
        { title: "Support", detail: "keep improving" },
      ],
      metrics: {
        stackLabel: "Stack",
        stackValue: "Web · API · App",
        languagesLabel: "Languages",
        languagesValue: "ES · EN · 中文",
        baseLabel: "Base",
        baseValue: "Madrid, ES",
      },
      onlineLabel: "systems online",
      footerNote: "senior team / clear process",
      caption: "A compact view of how OKCODE turns product ideas into maintainable software.",
    },
  },
  nav: [
    { anchor: "studio", label: "Studio" },
    { anchor: "services", label: "Services" },
    { anchor: "projects", label: "Work" },
    { anchor: "advantages", label: "Why us" },
    { anchor: "process", label: "Process" },
    { anchor: "testimonials", label: "Clients" },
    { anchor: "contact", label: "Contact" },
  ],
  ctaLabel: "Start a project",
  hero: {
    eyebrow: "Software studio · Based in Spain",
    title: "We build software that works for real businesses.",
    subtitle:
      "OKCODE is a development studio crafting web, e-commerce and mobile products for companies in Spain and around the world. Clear process, senior craft, no surprises.",
    primaryCta: "Start a project",
    secondaryCta: "See our work",
    trust: "Trusted by teams who speak Spanish, English and Chinese.",
  },
  studio: {
    eyebrow: "01 — The studio",
    title: "A small studio with international reach.",
    body: [
      "We are a Spain-based development team with deep experience serving both local businesses and international clients. We work in Spanish, English and Chinese, so nothing gets lost in translation — from the first brief to the final launch.",
      "We keep teams small and senior. You talk to the people who actually build your product, and we treat your roadmap as our own. The result is software that ships on time and stays easy to maintain.",
    ],
    stats: [
      { value: "10+", label: "Years building software" },
      { value: "120+", label: "Projects delivered" },
      { value: "3", label: "Working languages" },
      { value: "15+", label: "Countries served" },
    ],
  },
  services: {
    eyebrow: "02 — What we do",
    title: "Services built around your product.",
    intro:
      "Four core disciplines, one accountable team. We can run a single workstream or act as your long-term product partner.",
    items: [
      {
        id: "software",
        icon: "software",
        title: "Software Development",
        summary:
          "Custom internal tools, business platforms and APIs that connect your systems and remove manual work.",
        points: [
          "Custom web & desktop applications",
          "REST & GraphQL APIs, integrations",
          "Workflow & process automation",
          "Maintenance and long-term support",
        ],
        cta: "Scope a build",
      },
      {
        id: "web",
        icon: "web",
        title: "Web Development",
        summary:
          "Fast, accessible marketing sites and web apps that rank well and convert visitors into customers.",
        points: [
          "Corporate & marketing websites",
          "Web applications (React / Next.js)",
          "Headless CMS & content workflows",
          "Performance, SEO & accessibility",
        ],
        cta: "Plan a website",
      },
      {
        id: "ecommerce",
        icon: "ecommerce",
        title: "E-commerce Development",
        summary:
          "Storefronts and marketplaces that are easy to run and ready for international checkout and logistics.",
        points: [
          "Shopify, WooCommerce & custom stores",
          "Payments, tax & multi-currency",
          "Subscriptions & B2B catalogs",
          "Migrations with zero downtime",
        ],
        cta: "Grow your store",
      },
      {
        id: "app",
        icon: "app",
        title: "App Development",
        summary:
          "iOS, Android and cross-platform apps with a native feel and a shared, maintainable codebase.",
        points: [
          "React Native & cross-platform",
          "Native iOS / Android",
          "Offline-first & sync",
          "App Store & Play Store release",
        ],
        cta: "Design an app",
      },
    ],
  },
  projects: {
    eyebrow: "03 — Selected work",
    title: "Work we are proud of.",
    intro: "A snapshot of recent engagements across industries and languages.",
    note: "Sample entries below — replace with your real case studies and metrics.",
    items: [
      {
        id: "p1",
        title: "Logistics dashboard for a Spanish retailer",
        client: "Retail Co.",
        industry: "Retail & Logistics",
        year: "2025",
        summary:
          "A real-time operations dashboard that unified inventory, fleet and orders into one screen, cutting daily reporting from hours to minutes.",
        tags: ["Web app", "Dashboards", "APIs"],
        result: "−70% reporting time",
        placeholder: true,
      },
      {
        id: "p2",
        title: "Cross-border store for a fashion brand",
        client: "Fashion Brand",
        industry: "E-commerce",
        year: "2024",
        summary:
          "A bilingual storefront with local payment methods and multi-currency checkout, launched across ES and LATAM markets.",
        tags: ["E-commerce", "Shopify", "i18n"],
        result: "+38% conversion",
        placeholder: true,
      },
      {
        id: "p3",
        title: "Field service app for technicians",
        client: "Service Co.",
        industry: "Field Services",
        year: "2024",
        summary:
          "An offline-first mobile app letting technicians record jobs, signatures and photos without signal, syncing when back online.",
        tags: ["Mobile", "React Native", "Offline"],
        result: "−45% admin work",
        placeholder: true,
      },
    ],
  },
  advantages: {
    eyebrow: "04 — Why OKCODE",
    title: "What you get working with us.",
    intro: "Practical advantages that matter once the project is live, not just at the pitch.",
    items: [
      {
        title: "Spain-based, internationally fluent",
        description:
          "Local timezone and presence for Spanish clients, with equal fluency in English and Chinese for global teams.",
      },
      {
        title: "Senior people, no hand-offs",
        description:
          "The engineers and designers you meet are the ones who build. No layered agencies, no junior churn.",
      },
      {
        title: "Clear, fixed-scope process",
        description:
          "You always know what is being built, when and for how much. Weekly updates, no black boxes.",
      },
      {
        title: "Built to last and to scale",
        description:
          "Clean, documented code and a maintainable stack so your team can extend the product with confidence.",
      },
      {
        title: "Multilingual from day one",
        description:
          "Interfaces, content and support in Spanish, English and Chinese — no bolt-on translation later.",
      },
      {
        title: "Long-term partnership",
        description:
          "We stay after launch for support, iteration and growth, not just the first release.",
      },
    ],
  },
  process: {
    eyebrow: "05 — How we work",
    title: "A calm, predictable process.",
    intro: "Five steps from first call to a product your team trusts.",
    steps: [
      {
        step: "01",
        title: "Discovery & strategy",
        description:
          "We learn your business, users and constraints, then agree on outcomes — not just features.",
      },
      {
        step: "02",
        title: "Proposal & scope",
        description:
          "A clear fixed quote, timeline and milestones you can read without a glossary.",
      },
      {
        step: "03",
        title: "Design & prototype",
        description:
          "Interactive prototypes you can click through before a line of production code is written.",
      },
      {
        step: "04",
        title: "Build & QA",
        description:
          "Weekly demos, automated tests and accessibility checks throughout development.",
      },
      {
        step: "05",
        title: "Launch & support",
        description:
          "A smooth go-live plus ongoing maintenance, monitoring and iteration.",
      },
    ],
  },
  testimonials: {
    eyebrow: "06 — Client voices",
    title: "What clients say.",
    intro: "A few words from the teams we have shipped with.",
    note: "Sample quotes — replace with real client testimonials and permission.",
    items: [
      {
        quote:
          "OKCODE delivered exactly what was promised, in Spanish, on time. The clearest vendor relationship we have had.",
        author: "Martina R.",
        role: "Operations Director",
        company: "Retail Co.",
        placeholder: true,
      },
      {
        quote:
          "They understood our China + Europe roadmap immediately. Communication was never a problem, in any language.",
        author: "Wei L.",
        role: "Founder",
        company: "Fashion Brand",
        placeholder: true,
      },
      {
        quote:
          "Senior engineers, honest estimates, zero surprises. Our field app just works, even offline.",
        author: "Carlos M.",
        role: "CTO",
        company: "Service Co.",
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: "07 — Let's talk",
    title: "Tell us about your project.",
    intro:
      "Send a note in the language you prefer. We reply within two business days — usually sooner.",
    info: sampleContact,
    formNote: "This form opens your email app with the details pre-filled. No data is stored on a server.",
  },
  footer: {
    about:
      "OKCODE is a Spain-based software studio building web, e-commerce and mobile products for Spanish, English and Chinese speaking teams.",
    rights: "© " + new Date().getFullYear() + " OKCODE. All rights reserved.",
    builtNote: "Editorial studio site · Static Next.js",
  },
  seo: {
    title: "OKCODE — Software, Web, E-commerce & App Development Studio (Spain)",
    description:
      "OKCODE is a Spain-based development studio building web, e-commerce and mobile products for companies in Spanish, English and Chinese. Clear process, senior craft.",
    ogTitle: "OKCODE — Software Studio in Spain",
    ogDescription:
      "Web, e-commerce and mobile development for Spanish, English and Chinese speaking teams.",
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
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@empresa.com",
      projectPlaceholder: "Cuéntanos qué estás construyendo…",
    },
    footer: {
      menuLabel: "Menú",
      contactLabel: "Contacto",
    },
    heroArt: {
      path: "okcode / sistema-producto",
      version: "estudio / ES",
      kicker: "Sistema de entrega",
      title: "Del brief al lanzamiento.",
      status: "activo",
      flowLabel: "Flujo de entrega de OKCODE",
      steps: [
        { title: "Descubrir", detail: "alcance" },
        { title: "Construir", detail: "con cuidado" },
        { title: "Soporte", detail: "mejorar siempre" },
      ],
      metrics: {
        stackLabel: "Stack",
        stackValue: "Web · API · App",
        languagesLabel: "Idiomas",
        languagesValue: "ES · EN · 中文",
        baseLabel: "Base",
        baseValue: "Madrid, ES",
      },
      onlineLabel: "sistemas activos",
      footerNote: "equipo senior / proceso claro",
      caption: "Una vista compacta de cómo OKCODE convierte ideas de producto en software mantenible.",
    },
  },
  nav: [
    { anchor: "studio", label: "Estudio" },
    { anchor: "services", label: "Servicios" },
    { anchor: "projects", label: "Proyectos" },
    { anchor: "advantages", label: "Por qué" },
    { anchor: "process", label: "Proceso" },
    { anchor: "testimonials", label: "Clientes" },
    { anchor: "contact", label: "Contacto" },
  ],
  ctaLabel: "Iniciar proyecto",
  hero: {
    eyebrow: "Estudio de software · Con base en España",
    title: "Creamos software que funciona de verdad.",
    subtitle:
      "OKCODE es un estudio de desarrollo que crea productos web, de comercio electrónico y móviles para empresas de España y de todo el mundo. Proceso claro, trabajo de nivel senior, sin sorpresas.",
    primaryCta: "Iniciar proyecto",
    secondaryCta: "Ver proyectos",
    trust: "Con la confianza de equipos que hablan español, inglés y chino.",
  },
  studio: {
    eyebrow: "01 — El estudio",
    title: "Un estudio pequeño con alcance internacional.",
    body: [
      "Somos un equipo de desarrollo con base en España y gran experiencia tanto con empresas locales como con clientes internacionales. Trabajamos en español, inglés y chino, para que nada se pierda en la traducción: desde el primer brief hasta el lanzamiento.",
      "Mantenemos equipos pequeños y senior. Hablas con quienes realmente construyen tu producto, y tratamos tu hoja de ruta como propia. El resultado es software que se entrega a tiempo y que sigue siendo fácil de mantener.",
    ],
    stats: [
      { value: "10+", label: "Años desarrollando software" },
      { value: "120+", label: "Proyectos entregados" },
      { value: "3", label: "Idiomas de trabajo" },
      { value: "15+", label: "Países atendidos" },
    ],
  },
  services: {
    eyebrow: "02 — Qué hacemos",
    title: "Servicios centrados en tu producto.",
    intro:
      "Cuatro disciplinas principales, un mismo equipo responsable. Podemos llevar un solo flujo o ser tu socio de producto a largo plazo.",
    items: [
      {
        id: "software",
        icon: "software",
        title: "Desarrollo de software",
        summary:
          "Herramientas internas a medida, plataformas de negocio y APIs que conectan tus sistemas y eliminan trabajo manual.",
        points: [
          "Aplicaciones web y de escritorio a medida",
          "APIs REST y GraphQL, integraciones",
          "Automatización de procesos",
          "Mantenimiento y soporte continuo",
        ],
        cta: "Definir un desarrollo",
      },
      {
        id: "web",
        icon: "web",
        title: "Desarrollo web",
        summary:
          "Sitios y aplicaciones web rápidos y accesibles que posicionan bien y convierten visitas en clientes.",
        points: [
          "Web corporativas y de marketing",
          "Aplicaciones web (React / Next.js)",
          "CMS headless y flujos de contenido",
          "Rendimiento, SEO y accesibilidad",
        ],
        cta: "Planificar una web",
      },
      {
        id: "ecommerce",
        icon: "ecommerce",
        title: "Comercio electrónico",
        summary:
          "Tiendas y marketplaces fáciles de gestionar, listas para cobros y logística internacionales.",
        points: [
          "Shopify, WooCommerce y tiendas a medida",
          "Pagos, impuestos y multicadena",
          "Suscripciones y catálogos B2B",
          "Migraciones sin tiempo de caída",
        ],
        cta: "Hacer crecer tu tienda",
      },
      {
        id: "app",
        icon: "app",
        title: "Desarrollo de apps",
        summary:
          "Apps iOS, Android y multiplataforma con sensación nativa y un código compartido y mantenible.",
        points: [
          "React Native y multiplataforma",
          "iOS / Android nativos",
          "Offline-first y sincronización",
          "Publicación en App Store y Play Store",
        ],
        cta: "Diseñar una app",
      },
    ],
  },
  projects: {
    eyebrow: "03 — Proyectos destacados",
    title: "Trabajos de los que nos sentimos orgullosos.",
    intro: "Una muestra de colaboraciones recientes en distintos sectores e idiomas.",
    note: "Las entradas siguientes son de muestra; reemplázalas con tus casos y métricas reales.",
    items: [
      {
        id: "p1",
        title: "Panel de logística para un retailer español",
        client: "Retail Co.",
        industry: "Retail y logística",
        year: "2025",
        summary:
          "Un panel de operaciones en tiempo real que unificó inventario, flota y pedidos en una sola pantalla, reduciendo el reporte diario de horas a minutos.",
        tags: ["Web app", "Paneles", "APIs"],
        result: "−70% tiempo de reporte",
        placeholder: true,
      },
      {
        id: "p2",
        title: "Tienda transfronteriza para una marca de moda",
        client: "Fashion Brand",
        industry: "Comercio electrónico",
        year: "2024",
        summary:
          "Una tienda bilingüe con métodos de pago locales y checkout multicadena, lanzada en los mercados de ES y LATAM.",
        tags: ["E-commerce", "Shopify", "i18n"],
        result: "+38% conversión",
        placeholder: true,
      },
      {
        id: "p3",
        title: "App de servicios de campo para técnicos",
        client: "Service Co.",
        industry: "Servicios de campo",
        year: "2024",
        summary:
          "Una app móvil offline-first que permite a los técnicos registrar trabajos, firmas y fotos sin cobertura, sincronizando al volver en línea.",
        tags: ["Móvil", "React Native", "Offline"],
        result: "−45% trabajo administrativo",
        placeholder: true,
      },
    ],
  },
  advantages: {
    eyebrow: "04 — Por qué OKCODE",
    title: "Lo que obtienes trabajando con nosotros.",
    intro: "Ventajas prácticas que importan cuando el proyecto ya está en marcha, no solo en la propuesta.",
    items: [
      {
        title: "Con base en España, fluidez internacional",
        description:
          "Zona horaria y presencia local para clientes españoles, con la misma soltura en inglés y chino para equipos globales.",
      },
      {
        title: "Personas senior, sin intermediarios",
        description:
          "Quienes conoces son quienes construyen. Sin agencias por capas, sin rotación de junior.",
      },
      {
        title: "Proceso claro y con alcance fijo",
        description:
          "Siempre sabes qué se construye, cuándo y por cuánto. Actualizaciones semanales, sin cajas negras.",
      },
      {
        title: "Hecho para durar y escalar",
        description:
          "Código limpio y documentado y un stack mantenible para que tu equipo extienda el producto con confianza.",
      },
      {
        title: "Multilingüe desde el día uno",
        description:
          "Interfaces, contenido y soporte en español, inglés y chino; sin traducciones añadidas después.",
      },
      {
        title: "Socios a largo plazo",
        description:
          "Seguimos después del lanzamiento con soporte, iteración y crecimiento, no solo el primer release.",
      },
    ],
  },
  process: {
    eyebrow: "05 — Cómo trabajamos",
    title: "Un proceso calmado y predecible.",
    intro: "Cinco pasos, de la primera llamada a un producto en el que tu equipo confía.",
    steps: [
      {
        step: "01",
        title: "Descubrimiento y estrategia",
        description:
          "Conocemos tu negocio, usuarios y restricciones, y acordamos resultados, no solo funciones.",
      },
      {
        step: "02",
        title: "Propuesta y alcance",
        description:
          "Una cotización fija, plazos y hitos claros que lees sin diccionario.",
      },
      {
        step: "03",
        title: "Diseño y prototipo",
        description:
          "Prototipos interactivos por los que navegar antes de escribir código de producción.",
      },
      {
        step: "04",
        title: "Construcción y QA",
        description:
          "Demos semanales, pruebas automatizadas y chequeos de accesibilidad durante todo el desarrollo.",
      },
      {
        step: "05",
        title: "Lanzamiento y soporte",
        description:
          "Un go-live suave más mantenimiento, monitoreo e iteración continuos.",
      },
    ],
  },
  testimonials: {
    eyebrow: "06 — Voces de clientes",
    title: "Lo que dicen los clientes.",
    intro: "Algunas palabras de los equipos con los que hemos lanzado productos.",
    note: "Citas de muestra; reemplázalas con testimonios reales y permiso.",
    items: [
      {
        quote:
          "OKCODE entregó exactamente lo prometido, en español y a tiempo. La relación de proveedor más clara que hemos tenido.",
        author: "Martina R.",
        role: "Directora de Operaciones",
        company: "Retail Co.",
        placeholder: true,
      },
      {
        quote:
          "Entendieron nuestra hoja de ruta China + Europa de inmediato. La comunicación nunca fue un problema, en ningún idioma.",
        author: "Wei L.",
        role: "Fundadora",
        company: "Fashion Brand",
        placeholder: true,
      },
      {
        quote:
          "Ingenieros senior, estimaciones honestas, cero sorpresas. Nuestra app de campo simplemente funciona, incluso sin conexión.",
        author: "Carlos M.",
        role: "CTO",
        company: "Service Co.",
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: "07 — Hablemos",
    title: "Cuéntanos tu proyecto.",
    intro:
      "Envíanos una nota en el idioma que prefieras. Respondemos en dos días hábiles, normalmente antes.",
    info: { ...sampleContact, address: "Madrid, España" },
    formNote:
      "Este formulario abre tu cliente de correo con los datos precargados. No se guarda nada en un servidor.",
  },
  footer: {
    about:
      "OKCODE es un estudio de software con base en España que crea productos web, de comercio electrónico y móviles para equipos de habla española, inglesa y china.",
    rights: "© " + new Date().getFullYear() + " OKCODE. Todos los derechos reservados.",
    builtNote: "Sitio de estudio editorial · Next.js estático",
  },
  seo: {
    title: "OKCODE — Estudio de desarrollo de software, web, e-commerce y apps (España)",
    description:
      "OKCODE es un estudio de desarrollo con base en España que crea productos web, de comercio electrónico y móviles para empresas de habla española, inglesa y china. Proceso claro, trabajo senior.",
    ogTitle: "OKCODE — Estudio de software en España",
    ogDescription:
      "Desarrollo web, de comercio electrónico y móvil para equipos de habla española, inglesa y china.",
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
      nameLabel: "姓名",
      emailFieldLabel: "邮箱",
      projectLabel: "项目",
      namePlaceholder: "你的姓名",
      emailPlaceholder: "you@company.com",
      projectPlaceholder: "告诉我们你正在构建什么……",
    },
    footer: {
      menuLabel: "菜单",
      contactLabel: "联系",
    },
    heroArt: {
      path: "okcode / 产品系统",
      version: "工作室 / 西班牙",
      kicker: "交付系统",
      title: "从需求到上线。",
      status: "运行中",
      flowLabel: "OKCODE 交付流程",
      steps: [
        { title: "探索", detail: "明确范围" },
        { title: "构建", detail: "认真交付" },
        { title: "支持", detail: "持续优化" },
      ],
      metrics: {
        stackLabel: "技术栈",
        stackValue: "Web · API · App",
        languagesLabel: "语言",
        languagesValue: "ES · EN · 中文",
        baseLabel: "所在地",
        baseValue: "西班牙·马德里",
      },
      onlineLabel: "系统运行中",
      footerNote: "资深团队 / 流程清晰",
      caption: "用一张紧凑的流程图，展示 OKCODE 如何将产品想法变成易维护的软件。",
    },
  },
  nav: [
    { anchor: "studio", label: "工作室" },
    { anchor: "services", label: "服务" },
    { anchor: "projects", label: "案例" },
    { anchor: "advantages", label: "优势" },
    { anchor: "process", label: "流程" },
    { anchor: "testimonials", label: "客户" },
    { anchor: "contact", label: "联系" },
  ],
  ctaLabel: "启动项目",
  hero: {
    eyebrow: "软件开发工作室 · 扎根西班牙",
    title: "我们打造真正为业务所用的软件。",
    subtitle:
      "OKCODE 是一支开发工作室，为西班牙及全球企业构建 Web、电商与移动产品。流程清晰、资深工艺、绝无意外。",
    primaryCta: "启动项目",
    secondaryCta: "查看案例",
    trust: "深受讲中文、西班牙语与英语的团队信赖。",
  },
  studio: {
    eyebrow: "01 — 关于工作室",
    title: "小而精、兼具国际视野的工作室。",
    body: [
      "我们是一支扎根西班牙的开发团队，既服务本地企业，也拥有丰富的国际客户经验。我们用中文、西班牙语和英语工作，从第一份需求到最终上线，信息从不因语言而丢失。",
      "我们坚持小而资深的团队。与你沟通的人，正是真正构建产品的人；我们把你的路线图当作自己的来做。成果是按时交付、且易于长期维护的软件。",
    ],
    stats: [
      { value: "10+", label: "年软件开发经验" },
      { value: "120+", label: "已交付项目" },
      { value: "3", label: "工作语言" },
      { value: "15+", label: "服务国家" },
    ],
  },
  services: {
    eyebrow: "02 — 我们做什么",
    title: "围绕你的产品构建服务。",
    intro: "四大核心能力，同一支负责任的团队。我们可做单条工作流，也可成为你长期的产品伙伴。",
    items: [
      {
        id: "software",
        icon: "software",
        title: "软件开发",
        summary: "定制内部工具、业务平台与 API，打通你的系统、消除重复人工。",
        points: ["定制 Web 与桌面应用", "REST / GraphQL API 与集成", "流程与自动化", "维护与长期支持"],
        cta: "规划开发",
      },
      {
        id: "web",
        icon: "web",
        title: "Web 开发",
        summary: "快速、无障碍的营销站点与 Web 应用，利于排名，更能把访客转化为客户。",
        points: ["企业官网与营销站", "Web 应用（React / Next.js）", "Headless CMS 与内容流", "性能、SEO 与无障碍"],
        cta: "规划网站",
      },
      {
        id: "ecommerce",
        icon: "ecommerce",
        title: "电商开发",
        summary: "易于运营、面向国际结算与物流的店铺与商城。",
        points: ["Shopify、WooCommerce 与定制店铺", "支付、税费与多币种", "订阅与 B2B 目录", "零停机迁移"],
        cta: "增长店铺",
      },
      {
        id: "app",
        icon: "app",
        title: "App 开发",
        summary: "iOS、Android 与跨平台应用，原生手感，统一且可维护的代码库。",
        points: ["React Native 与跨平台", "原生 iOS / Android", "离线优先与同步", "上架 App Store 与 Play Store"],
        cta: "设计 App",
      },
    ],
  },
  projects: {
    eyebrow: "03 — 精选案例",
    title: "我们引以为傲的成果。",
    intro: "近期横跨多个行业与语言的部分合作缩影。",
    note: "以下为示例条目，请替换为你的真实案例与数据。",
    items: [
      {
        id: "p1",
        title: "某西班牙零售商的物流看板",
        client: "Retail Co.",
        industry: "零售与物流",
        year: "2025",
        summary:
          "实时运营看板将库存、车队与订单统一在一屏，把每日报表从数小时压缩到几分钟。",
        tags: ["Web 应用", "看板", "API"],
        result: "报表时间 −70%",
        placeholder: true,
      },
      {
        id: "p2",
        title: "某时尚品牌跨境店铺",
        client: "Fashion Brand",
        industry: "电商",
        year: "2024",
        summary:
          "双语店铺，支持本地支付方式与多币种结算，已在西班牙与拉美市场上线。",
        tags: ["电商", "Shopify", "i18n"],
        result: "转化 +38%",
        placeholder: true,
      },
      {
        id: "p3",
        title: "面向技师的外勤服务 App",
        client: "Service Co.",
        industry: "外勤服务",
        year: "2024",
        summary:
          "离线优先的移动应用，技师可在无信号时记录工单、签名与照片，恢复联网后自动同步。",
        tags: ["移动", "React Native", "离线"],
        result: "事务工作 −45%",
        placeholder: true,
      },
    ],
  },
  advantages: {
    eyebrow: "04 — 为什么选 OKCODE",
    title: "与我们合作你能得到什么。",
    intro: "项目上线后才真正重要的实用优势，而非只在提案里好看。",
    items: [
      {
        title: "扎根西班牙，国际无阻",
        description: "为西班牙本地客户提供相同时区与在地支持，对全球团队同样流利掌控英语与中文。",
      },
      {
        title: "资深团队，无层层转包",
        description: "你见到的工程师与设计师，就是真正构建产品的人。没有分层代理，没有初级人员流动。",
      },
      {
        title: "清晰、固定范围的过程",
        description: "你始终知道在构建什么、何时交付、花费多少。每周同步，没有黑箱。",
      },
      {
        title: "为持久与扩展而建",
        description: "干净、有文档的代码与可维护技术栈，让你的团队能自信地扩展产品。",
      },
      {
        title: "从第一天起多语言",
        description: "界面、内容与支持均提供中文、西班牙语与英语，无需事后补翻译。",
      },
      {
        title: "长期伙伴关系",
        description: "上线之后我们仍在，提供维护、迭代与增长，而非只做第一次发布。",
      },
    ],
  },
  process: {
    eyebrow: "05 — 我们的工作方式",
    title: "从容、可预期的过程。",
    intro: "从首次沟通到团队信赖的产品，五个步骤。",
    steps: [
      {
        step: "01",
        title: "调研与策略",
        description: "了解你的业务、用户与约束，先对齐结果，而不只是功能。",
      },
      {
        step: "02",
        title: "方案与范围",
        description: "清晰固定的报价、时间表与里程碑，无需术语表也能读懂。",
      },
      {
        step: "03",
        title: "设计与原型",
        description: "在写第一行生产代码前，提供可点击的交互原型供你体验。",
      },
      {
        step: "04",
        title: "构建与质量保障",
        description: "全程每周演示、自动化测试与无障碍检查。",
      },
      {
        step: "05",
        title: "上线与支持",
        description: "平稳上线，并提供持续的维护、监控与迭代。",
      },
    ],
  },
  testimonials: {
    eyebrow: "06 — 客户之声",
    title: "客户怎么说。",
    intro: "来自我们共同交付产品的团队的一些反馈。",
    note: "以下为示例评价，请替换为真实客户评价并取得授权。",
    items: [
      {
        quote: "OKCODE 准时交付了承诺的一切，用西班牙语、零意外。这是我们最清晰的一家供应商关系。",
        author: "Martina R.",
        role: "运营总监",
        company: "Retail Co.",
        placeholder: true,
      },
      {
        quote: "他们立刻理解了我们的中国 + 欧洲路线图。沟通在任何语言下都不是问题。",
        author: "Wei L.",
        role: "创始人",
        company: "Fashion Brand",
        placeholder: true,
      },
      {
        quote: "资深工程师、诚实的预估、零意外。我们的外勤 App 即便离线也稳稳运行。",
        author: "Carlos M.",
        role: "CTO",
        company: "Service Co.",
        placeholder: true,
      },
    ],
  },
  contact: {
    eyebrow: "07 — 聊聊吧",
    title: "告诉我们你的项目。",
    intro: "用你偏好的语言给我们留言。我们会在两个工作日内回复——通常更快。",
    info: { ...sampleContact, address: "西班牙，马德里" },
    formNote: "本表单会打开你的邮件客户端并预填内容，数据不会存储在任何服务器上。",
  },
  footer: {
    about:
      "OKCODE 是一支扎根西班牙的软件开发工作室，为讲中文、西班牙语与英语的团队构建 Web、电商与移动产品。",
    rights: "© " + new Date().getFullYear() + " OKCODE. 保留所有权利。",
    builtNote: "编辑风工作室站点 · 静态 Next.js",
  },
  seo: {
    title: "OKCODE — 软件开发、Web、电商与 App 开发工作室（西班牙）",
    description:
      "OKCODE 是一支扎根西班牙的开发工作室，为讲中文、西班牙语与英语的企业构建 Web、电商与移动产品。流程清晰、资深工艺。",
    ogTitle: "OKCODE — 西班牙软件开发工作室",
    ogDescription: "为讲中文、西班牙语与英语的团队提供 Web、电商与移动开发。",
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
