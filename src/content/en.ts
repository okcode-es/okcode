import type { SiteContent } from './schema';

export const enContent: SiteContent = {
  meta: {
    title: 'OKCODE | High-Converting Websites & Tailored Mobile Apps · Madrid',
    description:
      'Madrid-based boutique software studio. We engineer high-impact corporate websites and native iOS & Android mobile apps. Direct senior engineers, fixed pricing, and 100% code ownership.',
    keywords: [
      'web development madrid',
      'custom mobile apps',
      'ios android development',
      'shopify ecommerce developers',
      'freelance software engineer europe',
      'bespoke software development',
      'frontend react development',
      'software development studio madrid',
      'OKCODE',
    ],
  },
  nav: {
    services: 'Services',
    projects: 'Showcase',
    whyUs: 'Why Us',
    process: 'Process',
    pricing: 'Pricing',
    faq: 'FAQ',
    contactCta: 'Get a Quote',
  },
  hero: {
    eyebrow: 'Global Delivery · Direct talk in EN · ES · ZH',
    title: 'High-Converting Websites & Tailored Mobile Apps Built for Growth\nTurn your business vision into a profitable digital product',
    subtitle:
      'Crafted specifically for ambitious brands, growing businesses, and funded startups. No sales reps, no agency markups: work directly with senior software engineers, transparent fixed pricing, launch in as little as 2 weeks, and retain 100% source code ownership.',
    badges: [
      { icon: 'Zap', text: 'Deliveries starting from 2 weeks' },
      { icon: 'ShieldCheck', text: 'Fixed-price contract, zero hidden fees' },
      { icon: 'PackageCheck', text: '100% Code & IP transferred to you' },
      { icon: 'Smartphone', text: 'App Store & Google Play launch included' },
    ],
    primaryCta: 'Get a Free Project Estimate',
    secondaryCta: 'View Case Studies & Live Demos',
    microCopy:
      'No need for complex technical specifications. Share your initial ideas with us and receive a structured scope breakdown and transparent estimate within 24 hours.',
  },
  showcase: {
    heading: 'Real Solutions & Proven Case Studies',
    subheading:
      'Practical digital systems engineered to drive revenue and streamline operations for real businesses',
    items: [
      {
        id: 'restaurant-ordering',
        title: 'Bilingual Corporate Website & Proprietary Mobile Ordering System',
        client: 'Expanding Restaurant Chain in Spain',
        category: 'Web & Mobile App',
        impactMetric: '0 → 40k € in direct orders, cutting out 25% third-party fees',
        summary:
          'Direct ordering channels liberated from predatory delivery aggregators, customer retention, and automated kitchen ticket printing.',
        image: '/images/showcase/restaurant.webp',
        tags: ['Corporate Web', 'Mobile App', 'Online Ordering', 'Local Payments & Bizum'],
        drawerDetails: {
          clientProblem:
            'Aggressive 25% commissions on delivery platforms, inability to retain customer loyalty, and frequent missed orders during peak dining hours.',
          solutionDelivered:
            'Engineered a bilingual brand portal paired with a responsive QR-code ordering app, integrating Bizum and card terminals with instant kitchen printer routing.',
          keyDeliverables: [
            'Responsive brand storefront frontend',
            'QR self-service order web app',
            'Bizum and Stripe payment gateway integrations',
            'Automated kitchen thermal printer dispatch',
          ],
          timeline: '3 weeks to launch',
          testimonial: {
            quote:
              'We eliminated costly platform fees and finally own our loyal customer relationships. The ordering flow is effortless.',
            author: 'Carlos M.',
            role: 'Head of Operations',
          },
        },
      },
      {
        id: 'crossborder-fashion',
        title: 'High-Conversion Multi-Currency International E-commerce',
        client: 'Global D2C Fashion & Apparel Brand',
        category: 'E-Commerce',
        impactMetric: 'Sub-second load times, bounce rate down 42%, conversion doubled',
        summary:
          'Ultra-fast online store featuring adaptive multi-currency checkouts, local European payment rails, and strict GDPR privacy compliance.',
        image: '/images/showcase/fashion.webp',
        tags: ['E-commerce', 'Shopify / Headless', 'Multi-Currency', 'Global SEO'],
        drawerDetails: {
          clientProblem:
            'Legacy website took over 4 seconds to load on mobile devices, suffering a 70% bounce rate and frequent payment declines across European regions.',
          solutionDelivered:
            'Rebuilt with ultra-performant modern architecture, Core Web Vitals optimization, Stripe multi-currency processing (EUR, USD, GBP), and a frictionless slide-out mobile checkout.',
          keyDeliverables: [
            'High-performance storefront and interactive catalog',
            'Multi-currency & localization architecture',
            'Stripe, PayPal, and Apple Pay payment pipelines',
            'GDPR compliance and technical Google SEO setup',
          ],
          timeline: '4 weeks delivery',
          testimonial: {
            quote:
              'The site speed improvement transformed customer retention. Our European mobile checkout conversion doubled within weeks.',
            author: 'Elena R.',
            role: 'Brand Founder & Head of E-commerce',
          },
        },
      },
      {
        id: 'field-service-app',
        title: 'Cross-Platform Work Order & Field Service Dispatch App',
        client: 'European Technical Installation & Maintenance Provider',
        category: 'iOS & Android App',
        impactMetric: '-80% administrative paperwork, +120% dispatch efficiency',
        summary:
          'Offline-first mobile application for field engineers coupled with a centralized web management console, electronic signatures, and live tracking.',
        image: '/images/showcase/service.webp',
        tags: ['iOS & Android App', 'React Native', 'Offline Sync', 'Admin Dashboard'],
        drawerDetails: {
          clientProblem:
            'Field technicians frequently worked in basements with zero reception; paper invoices were lost, and dispatch dispatchers had zero real-time visibility.',
          solutionDelivered:
            'Delivered an offline-first iOS and Android app with on-site photo capture, customer biometric signature collection, and millisecond background sync upon reconnection.',
          keyDeliverables: [
            'iOS & Android mobile apps for field technicians',
            'Web admin dispatching and routing dashboard',
            'Local database persistence and offline synchronization',
            'Automated PDF work order invoice generation',
          ],
          timeline: '6 weeks delivery',
          testimonial: {
            quote:
              'Our engineers can process service calls in underground facilities with zero hiccups. The dispatching speed has more than doubled.',
            author: 'Mateo S.',
            role: 'Operations & Service Lead',
          },
        },
      },
    ],
  },
  services: {
    heading: 'Core Services',
    subheading:
      'Delivering tangible business outcomes and sustainable revenue growth through solid digital engineering',
    items: [
      {
        id: 'web-development',
        title: 'Custom Corporate Websites & High-Converting Landing Pages',
        subtitle: 'Your frontline digital asset for brand authority and client acquisition',
        forWho:
          'Global exporters, professional firms, consulting agencies, clinics, and businesses requiring polished, trustworthy presentation.',
        deliverables: [
          'Editorial custom layouts tailored for desktop, tablet, and mobile displays',
          'Lightning-fast load performance adhering to Core Web Vitals standards',
          'Technical Google SEO setup, semantic Schema.org, and social sharing cards',
          'Intuitive content management dashboard to update copy and media without code',
        ],
        turnaround: '1 – 3 weeks',
        ctaText: 'Discuss Web Development',
      },
      {
        id: 'mobile-app',
        title: 'iOS & Android Cross-Platform Mobile Apps',
        subtitle: 'High-performance native feel with a single codebase, saving 40% in development costs',
        forWho:
          'Loyalty clubs, scheduling & booking platforms, e-commerce, on-demand services, and teams needing dedicated mobile products.',
        deliverables: [
          'React Native cross-platform engineering covering iPhone and Android',
          'Fluid 60fps animations, robust offline support, and push notifications',
          'Social/OTP logins, geolocation maps, multi-language, and in-app checkout',
          'End-to-end guidance through Apple App Store and Google Play publishing review',
        ],
        turnaround: '4 – 8 weeks',
        ctaText: 'Discuss Mobile App',
      },
      {
        id: 'ecommerce',
        title: 'Global E-Commerce Stores & Multi-Language Portals',
        subtitle: 'Seamless buying experiences connected to preferred international and local payment rails',
        forWho:
          'Direct-to-consumer (D2C) brands, cross-border exporters, and wholesalers expanding internationally.',
        deliverables: [
          'Shopify / WooCommerce or bespoke headless storefronts with instant slide-out carts',
          'Stripe, PayPal, Apple Pay, Google Pay, and European local payment integration',
          'Adaptive multi-currency conversion, localization, and European GDPR compliance',
          'Automated stock synchronization and end-to-end shipping carrier tracking',
        ],
        turnaround: '2 – 4 weeks',
        ctaText: 'Build Global Store',
      },
      {
        id: 'business-software',
        title: 'Custom Web Dashboards & Internal Business Systems',
        subtitle: 'Eliminate spreadsheet chaos and streamline operations with a tailored digital backbone',
        forWho:
          'Companies with complex workflows seeking a purpose-built ERP, CRM, or client portal.',
        deliverables: [
          'Custom operational dashboards providing real-time visibility on orders and metrics',
          'Role-based access controls (RBAC) ensuring corporate data security',
          'Seamless integration with your legacy databases and third-party APIs',
          'Bank-grade data encryption with automated daily cloud backups',
        ],
        turnaround: '3 – 6 weeks',
        ctaText: 'Build Custom System',
      },
    ],
  },
  whyUs: {
    heading: 'Why Partner with OKCODE',
    subheading:
      'Direct engineering accountability and transparent honesty instead of agency bureaucracy',
    items: [
      {
        number: '01',
        title: 'Direct senior engineer collaboration, zero middlemen',
        description:
          'You consult directly with the full-stack engineer coding your project. No non-technical account managers or outsourced subcontractor markups: faster iteration, crystal-clear communication.',
      },
      {
        number: '02',
        title: 'Fixed-price contracts with zero hidden fees',
        description:
          'Every scope item is documented and contractually locked before writing code. Transparent milestone pricing guarantees no surprise bills or sudden budget inflation.',
      },
      {
        number: '03',
        title: '100% Source code ownership and intellectual property',
        description:
          'No proprietary lock-in or recurring hostage fees. We transfer full source repositories, design assets, and server credentials directly to you upon completion.',
      },
      {
        number: '04',
        title: 'Global reach with European standards: EN, ES, ZH',
        description:
          'Based in Madrid, we combine strict European data and payment compliance (GDPR) with agile dedication. Trilingual communication with zero friction.',
      },
      {
        number: '05',
        title: 'We see your product through to actual launch',
        description:
          'No abandoned half-deliveries. We handle mobile app submission to the App Store and Google Play, configure your custom domain, and secure initial Google search indexing.',
      },
      {
        number: '06',
        title: 'Comprehensive warranty & post-launch support',
        description:
          'Every deployment includes 30 to 60 days of complimentary bug-fixing warranty, recorded training walkthroughs, and flexible roadmap extension options.',
      },
    ],
  },
  process: {
    heading: 'Transparent Methodology',
    subheading:
      '4 milestone-driven development phases structured to protect your timeline and investment',
    steps: [
      {
        step: '01',
        title: 'Initial consultation & scope blueprint',
        duration: '1 – 2 days',
        description:
          'We connect via WhatsApp, call, or email to unpack your business requirements. We produce a comprehensive functional breakdown and fixed-price proposal completely free of charge.',
      },
      {
        step: '02',
        title: 'Prototype validation & fixed contract',
        duration: '3 – 5 days',
        description:
          'Before touching code, we validate page layouts and core user journeys. We sign a formal contract detailing deliverables, deadlines, and milestone-linked payment terms.',
      },
      {
        step: '03',
        title: 'Agile sprints & weekly live demos',
        duration: '2 – 6 weeks',
        description:
          'We build your product in iterative sprints. You receive test builds every week on your own device, ensuring you verify progress and suggest adjustments along the way.',
      },
      {
        step: '04',
        title: 'Review, app submission & full handover',
        duration: 'Launch',
        description:
          'We configure your production hosting, submit mobile apps for store approvals, and transfer all source code, assets, and credentials alongside the complimentary warranty period.',
      },
    ],
  },
  pricing: {
    heading: 'Transparent Pricing & Timelines',
    subheading:
      'Predictable investment brackets based on concrete feature scopes, never vague hourly estimates',
    tiers: [
      {
        name: 'Corporate Brand Website',
        target: 'Local businesses, professional firms, consulting agencies, and independent studios',
        includes: [
          '5 to 8 bespoke corporate pages designed from scratch',
          'Full responsive design optimized for mobile and desktop',
          'Multi-language architecture (EN, ES, ZH)',
          'Technical SEO foundations and Google search submission',
          'Lightweight CMS dashboard for hassle-free content updates',
          '30-day warranty and recorded training video walkthrough',
        ],
        turnaround: '1 – 2 weeks',
        startingPrice: 'From 100 €',
        highlighted: false,
      },
      {
        name: 'High-Converting E-Commerce',
        target: 'D2C brands, international cross-border merchants, and wholesalers',
        includes: [
          'Product catalog and automated inventory management',
          'Adaptive multi-currency checkout (EUR, USD, GBP, etc.)',
          'Full integration with Stripe, PayPal, and regional rails',
          'European GDPR privacy policy and cookie banner setup',
          'Automated order confirmation emails and shipping tracking',
          '30-day post-launch technical warranty',
        ],
        turnaround: '2 – 4 weeks',
        startingPrice: 'From 800 €',
        highlighted: true,
      },
      {
        name: 'Custom Mobile App (iOS + Android)',
        target: 'Funded startups, loyalty clubs, booking platforms, and field services',
        includes: [
          'Single performant codebase covering iPhone and Android (React Native)',
          'User authentication, push notifications, and offline data sync',
          'Mobile payment processing and geolocation features',
          'End-to-end publishing handling for App Store & Google Play',
          'Dedicated web administration console for operators',
          '60-day complimentary bug-fix warranty',
        ],
        turnaround: '4 – 8 weeks',
        startingPrice: 'From 3,500 €',
        highlighted: false,
      },
      {
        name: 'Custom Business Portal & ERP',
        target: 'Growing enterprises replacing fragmented spreadsheets and legacy tools',
        includes: [
          'Role-based permission architecture (RBAC) and security controls',
          'Custom business dashboards and automated reporting exports',
          'Bi-directional integration with legacy systems and third-party APIs',
          'High-availability cloud architecture with automated daily backups',
          'Tailor-made business workflows designed around your team',
          'Dedicated ongoing SLA support and continuous roadmap iterations',
        ],
        turnaround: 'Agile sprints',
        startingPrice: 'Custom scope',
        highlighted: false,
      },
    ],
    guaranteeText:
      '💡 Milestone payment protection: Payments are divided into clear deliverables. You only disburse each phase upon verifying and approving the preceding milestone.',
  },
  faq: {
    heading: 'Frequently Asked Questions',
    subheading:
      'Direct and honest answers to key questions before launching your development project',
    items: [
      {
        question: 'We do not have a technical team or detailed specifications. Can we still work together?',
        answer:
          'Absolutely! Over 80% of our clients are non-technical entrepreneurs and business owners. All you need to share is your business vision, competitor references, or the workflow problem you want solved. We translate everything into clear technical proposals and actionable blueprints.',
      },
      {
        question: 'Will the project price increase during development?',
        answer:
          'Never. We work strictly under fixed-price contracts. Every single deliverable is agreed upon and documented in writing beforehand. If you later request new features outside the initial agreement, we evaluate and quote them separately for your prior approval.',
      },
      {
        question: 'Who owns the code and intellectual property once the project is finished?',
        answer:
          'You own 100% of everything: source code, UI designs, databases, and server configurations. We never impose proprietary vendor lock-in or recurring licensing penalties. You only cover standard direct hosting fees with providers like Cloudflare, AWS, or your preferred host.',
      },
      {
        question: 'Do you handle the App Store and Google Play app submission process?',
        answer:
          'Yes, our mobile app development services include complete submission support. We configure compliance with Apples Human Interface Guidelines and Google Play developer policies, prepare store graphics, and handle reviewer inquiries until your app is live.',
      },
      {
        question: 'Will our new website appear in Google search results?',
        answer:
          'Yes. Every website we build includes foundational technical SEO: rapid sub-second load times, structured Schema.org markup, multilingual hreflang tagging, and sitemap registration via Google Search Console for accelerated indexing.',
      },
      {
        question: 'How do we collaborate smoothly across different time zones or countries?',
        answer:
          'We routinely partner with businesses across Europe, North America, and Asia. Using WhatsApp, video conferences, and weekly live demo links, communication is faster, more transparent, and significantly more productive than traditional local agency meetings.',
      },
    ],
  },
  contact: {
    heading: 'Ready to Launch Your Next Website or Mobile App?',
    subheading:
      'Share your vision with us today and receive a structured technical breakdown and transparent estimate within 24 hours.',
    email: 'info@okcode.es',
    whatsappText: '+34 684 252 130',
    wechatLabel: 'WeChat: okcode_ (Scan QR code)',
    locationText: 'Madrid, Spain · Global Delivery',
    copyPromptLabel: 'Quick Project Brief Template',
    copyPromptText:
      'Hi OKCODE, I would like to consult on developing [a corporate website / a mobile app / an e-commerce store]. Our core objective is [brief 1-2 sentence description], aiming to launch around [target timeline, e.g. 1 month]. Could you provide a preliminary technical scope and budget reference?',
    form: {
      namePlaceholder: 'Your name or company',
      messagePlaceholder: 'Briefly outline your project idea, key features, or reference links...',
      contactPlaceholder: 'Email, WhatsApp, or phone number',
      submitButton: 'Get Free Project Estimate',
      successMessage: 'Message received! We will follow up within 24 hours with an actionable project outline.',
    },
  },
  footer: {
    editorialSignoff: 'OKCODE · High-converting web and mobile engineering boutique',
    statusBadge: '🟢 Currently accepting new project bookings',
    rights: '© 2026 OKCODE. All rights reserved.',
  },
};
