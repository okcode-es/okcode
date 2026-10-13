import type { SiteContent } from './schema';

export const esContent: SiteContent = {
  meta: {
    title: 'OKCODE | Desarrollo Web a Medida y Apps Móviles de Alto Impacto · Madrid',
    description:
      'Estudio de desarrollo de software en Madrid. Creamos sitios web corporativos de alto impacto y aplicaciones móviles nativas iOS y Android. Trato directo, precio cerrado y 100% código propio.',
    keywords: [
      'desarrollo web madrid',
      'creacion de apps',
      'apps moviles ios android',
      'tiendas online shopify',
      'programador freelance madrid',
      'desarrollo software a medida',
      'desarrollo frontend react',
      'estudio desarrollo software madrid',
      'OKCODE',
    ],
  },
  nav: {
    services: 'Servicios',
    projects: 'Casos de Éxito',
    whyUs: 'Por qué nosotros',
    process: 'Metodología',
    pricing: 'Tarifas',
    faq: 'Preguntas Frecuentes',
    contactCta: 'Pedir Presupuesto',
  },
  hero: {
    eyebrow: 'Proyectos Globales · Trato directo en ES · EN · ZH',
    title: 'Desarrollo Web a Medida y Apps Móviles de Alto Rendimiento\nTransformamos tu idea en un producto digital rentable',
    subtitle:
      'Especializados en empresas, marcas en expansión y startups que buscan resultados tangibles. Sin intermediarios comerciales ni agencias infladas: trato directo con ingenieros senior, presupuesto cerrado sin sobrecostes, entregas desde 2 semanas y 100% de propiedad del código.',
    badges: [
      { icon: 'Zap', text: 'Lanzamiento desde 2 semanas' },
      { icon: 'ShieldCheck', text: 'Presupuesto fijo garantizado, 0 sorpresas' },
      { icon: 'PackageCheck', text: '100% Código fuente y propiedad intelectual' },
      { icon: 'Smartphone', text: 'Publicación en App Store y Google Play incluida' },
    ],
    primaryCta: 'Solicitar Presupuesto Gratuito',
    secondaryCta: 'Ver Casos de Éxito y Demos',
    microCopy:
      'No necesitas un documento técnico complejo. Cuéntanos tu idea inicial y en menos de 24 horas te entregamos un desglose funcional y una estimación sin compromiso.',
  },
  showcase: {
    heading: 'Casos de Éxito y Soluciones Reales',
    subheading:
      'Soluciones digitales diseñadas para generar ingresos directos y optimizar operaciones en negocios reales',
    items: [
      {
        id: 'restaurant-ordering',
        title: 'Web Corporativa Bilingüe y Sistema Propio de Pedidos Móviles',
        client: 'Grupo de Restauración en Expansión',
        category: 'Web & Mobile App',
        impactMetric: '0 → 40.000 € en pedidos directos, ahorrando un 25% en comisiones',
        summary:
          'Canal de venta directa independiente de plataformas delivery, fidelización de clientes y comanderas automáticas de cocina.',
        image: '/images/showcase/restaurant.webp',
        tags: ['Web Corporativa', 'App Móvil', 'Pedidos Online', 'Pagos Bizum & TPV'],
        drawerDetails: {
          clientProblem:
            'Comisiones abusivas del 25% en plataformas de entrega rápida, pérdida del control de clientes y fallos en la recepción de comandas en horas punta.',
          solutionDelivered:
            'Desarrollo de portal web bilingüe y aplicación web/móvil optimizada para pedidos con código QR, integración con Bizum y TPV virtual, y conexión automática a impresoras térmicas de cocina.',
          keyDeliverables: [
            'Frontend web corporativo responsive',
            'Sistema de pedidos con código QR y carta digital',
            'Pasarela de pago Bizum y Stripe',
            'Conexión directa con impresoras de cocina',
          ],
          timeline: '3 semanas hasta lanzamiento',
          testimonial: {
            quote:
              'Dejamos de depender de comisiones abusivas y ahora gestionamos directamente a nuestros clientes habituales con una fluidez impecable.',
            author: 'Carlos M.',
            role: 'Director de Operaciones',
          },
        },
      },
      {
        id: 'crossborder-fashion',
        title: 'E-commerce Internacional Multidivisa de Alta Conversión',
        client: 'Marca de Moda y Accesorios D2C',
        category: 'E-Commerce',
        impactMetric: 'Carga inferior a 1s, rebote reducido un 42% y conversión duplicada',
        summary:
          'Tienda online ultra-rápida con pagos multidivisa adaptativos, pasarelas locales europeas y cumplimiento estricto de RGPD.',
        image: '/images/showcase/fashion.webp',
        tags: ['Tienda Online', 'Shopify / Headless', 'Multidivisa', 'SEO Internacional'],
        drawerDetails: {
          clientProblem:
            'La tienda anterior tardaba más de 4 segundos en cargar en móvil, con un 70% de tasa de abandono y continuos rechazos en pagos internacionales.',
          solutionDelivered:
            'Reconstrucción con arquitectura ultra-rápida, optimización Core Web Vitals, integración con Stripe y PayPal multidivisa (EUR, USD, GBP) y checkout deslizante optimizado para móvil.',
          keyDeliverables: [
            'Tienda online moderna y catálogo interactivo',
            'Arquitectura multidivisa y multiidioma',
            'Integración Stripe, PayPal y Apple Pay',
            'Cumplimiento RGPD y optimización SEO técnica',
          ],
          timeline: '4 semanas de desarrollo',
          testimonial: {
            quote:
              'La velocidad de la tienda cambió por completo la experiencia de nuestros clientes europeos. Las ventas móviles se dispararon de inmediato.',
            author: 'Elena R.',
            role: 'Fundadora y Directora de E-commerce',
          },
        },
      },
      {
        id: 'field-service-app',
        title: 'App Móvil Multiplataforma de Partes de Trabajo y Citas',
        client: 'Empresa de Servicios Técnicos e Instalaciones',
        category: 'iOS & Android App',
        impactMetric: '-80% en papeleo administrativo y +120% en velocidad de despacho',
        summary:
          'Aplicación móvil offline-first para técnicos de campo y panel de control centralizado con firma digital y geolocalización.',
        image: '/images/showcase/service.webp',
        tags: ['App iOS & Android', 'React Native', 'Sincronización Offline', 'Panel de Control'],
        drawerDetails: {
          clientProblem:
            'Los técnicos operaban habitualmente en sótanos o zonas sin cobertura, perdiendo partes en papel y generando retrasos en la facturación y asignación de trabajos.',
          solutionDelivered:
            'Creación de app móvil nativa (iOS y Android) con soporte offline total, captura fotográfica, firma biométrica del cliente y sincronización instantánea al recuperar conexión.',
          keyDeliverables: [
            'App móvil para operarios en iOS y Android',
            'Panel web de gestión y asignación de rutas',
            'Mecanismo de base de datos local y sincronización offline',
            'Generación automática de partes de trabajo en PDF',
          ],
          timeline: '6 semanas de desarrollo',
          testimonial: {
            quote:
              'Nuestros técnicos trabajan sin interrupciones incluso en parkings subterráneos. La administración centralizada nos ha ahorrado cientos de horas al mes.',
            author: 'Mateo S.',
            role: 'Responsable de Operaciones y Soporte',
          },
        },
      },
    ],
  },
  services: {
    heading: 'Servicios Especializados',
    subheading:
      'Soluciones tecnológicas enfocadas en resolver necesidades comerciales reales, sin humo ni costes inflados',
    items: [
      {
        id: 'web-development',
        title: 'Desarrollo Web & Landing Pages Corporativas',
        subtitle: 'Tu principal canal de autoridad, posicionamiento y captación de clientes',
        forWho:
          'Empresas en expansión, despachos profesionales, clínicas, consultorías y marcas que necesitan transmitir máxima confianza.',
        deliverables: [
          'Diseño editorial a medida, totalmente adaptativo para móvil, tablet y escritorio',
          'Rendimiento extremo con puntuación sobresaliente en Core Web Vitals',
          'Estructura SEO avanzada para posicionamiento en Google y tarjetas sociales',
          'Panel de administración intuitivo para actualizar textos, fotos y contenidos',
        ],
        turnaround: '1 – 3 semanas',
        ctaText: 'Consultar Desarrollo Web',
      },
      {
        id: 'mobile-app',
        title: 'Apps Móviles Nativas para iOS y Android',
        subtitle: 'Una base de código de máximo rendimiento con un ahorro del 40% en costes',
        forWho:
          'Startups, clubes de fidelización, reservas y citas, pedidos o equipos de campo que necesitan una presencia móvil sólida.',
        deliverables: [
          'Desarrollo multiplataforma en React Native para iPhone y Android',
          'Experiencia táctil fluida con funcionamiento offline y notificaciones push',
          'Inicio de sesión rápido, geolocalización, soporte multiidioma y pagos integrados',
          'Gestión completa de publicación y homologación en App Store y Google Play',
        ],
        turnaround: '4 – 8 semanas',
        ctaText: 'Consultar Desarrollo de App',
      },
      {
        id: 'ecommerce',
        title: 'E-commerce & Tiendas Online Internacionales',
        subtitle: 'Ventas sin fricción conectadas a los métodos de pago preferidos en Europa y el mundo',
        forWho:
          'Marcas directas al consumidor (D2C), vendedores internacionales y comercios locales con venta a domicilio o distribución.',
        deliverables: [
          'Desarrollo sobre Shopify / WooCommerce o tienda a medida con checkout ultra-rápido',
          'Integración de cobros con Stripe, PayPal, Apple Pay, Google Pay y Bizum',
          'Soporte multidivisa, multiidioma y configuración de privacidad RGPD europea',
          'Sincronización automatizada de inventario y seguimiento de envíos en tiempo real',
        ],
        turnaround: '2 – 4 semanas',
        ctaText: 'Crear Tienda Online',
      },
      {
        id: 'business-software',
        title: 'Software de Gestión a Medida, Paneles y Portales',
        subtitle: 'Automatiza procesos repetitivos, elimina hojas de cálculo y centraliza tu información',
        forWho:
          'Empresas con flujos de trabajo particulares que necesitan un ERP, CRM o portal de clientes personalizado.',
        deliverables: [
          'Cuadros de mando y paneles interactivos adaptados a tus métricas clave',
          'Control de accesos y permisos por roles de usuario (RBAC seguro)',
          'Integración bidireccional con tus bases de datos actuales y APIs de terceros',
          'Cifrado de datos sensible y copias de seguridad automáticas diarias',
        ],
        turnaround: '3 – 6 semanas',
        ctaText: 'Solicitar Software a Medida',
      },
    ],
  },
  whyUs: {
    heading: 'Por Qué Elegir OKCODE',
    subheading:
      'Garantías claras y honestidad técnica frente a las malas prácticas habituales del sector',
    items: [
      {
        number: '01',
        title: 'Trato directo con ingenieros senior, sin intermediarios',
        description:
          'Hablas directamente con quien programa tu producto. Sin comerciales sin criterio técnico ni reventas en cascada: comunicación directa, ágil y precisa.',
      },
      {
        number: '02',
        title: 'Presupuesto cerrado sin costes ocultos ni sorpresas',
        description:
          'Definimos cada funcionalidad en contrato antes de empezar. El importe acordado es el final: sin sobrecostes sobre la marcha ni falsos presupuestos gancho.',
      },
      {
        number: '03',
        title: '100% Código fuente y propiedad intelectual para ti',
        description:
          'Sin suscripciones forzosas ni rehenes técnicos. Te entregamos todo el código fuente, diseños y accesos raíz a tus servidores. Tu proyecto es tuyo al 100%.',
      },
      {
        number: '04',
        title: 'Enfoque internacional: Dominio de ES, EN y ZH',
        description:
          'Con base en Madrid, unificamos el rigor normativo europeo (RGPD, pagos) con la agilidad y dedicación de equipos globales. Comunicación fluida en tu idioma.',
      },
      {
        number: '05',
        title: 'Te acompañamos hasta el lanzamiento efectivo',
        description:
          'No dejamos entregas a medias. Publicamos tu app en App Store y Google Play, configuramos tu dominio y garantizamos la indexación inicial en Google.',
      },
      {
        number: '06',
        title: 'Garantía post-entrega y soporte continuo',
        description:
          'Incluimos de 30 a 60 días de garantía para corrección de incidencias y soporte técnico gratuito, junto a tutoriales en vídeo grabados para tu equipo.',
      },
    ],
  },
  process: {
    heading: 'Metodología Transparente',
    subheading:
      '4 fases ordenadas y estructuradas con pagos por hitos que protegen tu inversión',
    steps: [
      {
        step: '01',
        title: 'Contacto inicial y propuesta de alcance',
        duration: '1 – 2 días',
        description:
          'Conversamos por WhatsApp, email o videollamada para entender tu modelo. Redactamos una especificación clara con alcance, tecnologías recomendadas y presupuesto cerrado, sin coste alguno.',
      },
      {
        step: '02',
        title: 'Validación de prototipo y firma contractual',
        duration: '3 – 5 días',
        description:
          'Diseñamos la estructura y las pantallas clave para que apruebes el producto antes de programar una sola línea. Firmamos el contrato con calendario y pagos escalonados por hitos.',
      },
      {
        step: '03',
        title: 'Desarrollo ágil y demostraciones semanales',
        duration: '2 – 6 semanas',
        description:
          'Construimos tu aplicación de manera iterativa. Cada semana dispondrás de una versión de prueba funcional para revisar avances y validar la dirección sin sorpresas finales.',
      },
      {
        step: '04',
        title: 'Homologación, despliegue y entrega de código',
        duration: 'Lanzamiento',
        description:
          'Configuramos servidores, publicamos en tiendas de apps o dominio definitivo y traspasamos el 100% del código fuente y credenciales, activando el periodo de garantía técnica.',
      },
    ],
  },
  pricing: {
    heading: 'Tarifas Transparentes y Plazos de Entrega',
    subheading:
      'Rangos de inversión claros para que tomes decisiones informadas desde el primer día',
    tiers: [
      {
        name: 'Web Corporativa Profesional',
        target: 'Negocios locales, despachos, restaurantes, clínicas y marcas personales',
        includes: [
          '5 a 8 páginas corporativas esenciales a medida',
          'Diseño responsive optimizado para móvil y escritorio',
          'Arquitectura preparada para idiomas (ES, EN, ZH)',
          'SEO técnico de salida e indexación en Google',
          'Panel de gestión sencillo para actualizar contenidos',
          '30 días de garantía y sesión de formación grabada',
        ],
        turnaround: '1 – 2 semanas',
        startingPrice: 'Desde 100 €',
        highlighted: false,
      },
      {
        name: 'E-commerce & Tienda Internacional',
        target: 'Marcas directas al consumidor, exportadores y tiendas multicanal',
        includes: [
          'Catálogo de productos y gestión de stock integrada',
          'Cobros multidivisa (EUR, USD, GBP) y pasarelas locales',
          'Integración completa con Stripe, PayPal y Bizum',
          'Configuración legal y aviso de cookies según RGPD',
          'Notificaciones automáticas de pedidos y seguimiento de envíos',
          '30 días de soporte post-lanzamiento',
        ],
        turnaround: '2 – 4 semanas',
        startingPrice: 'Desde 800 €',
        highlighted: true,
      },
      {
        name: 'App Móvil a Medida (iOS + Android)',
        target: 'Startups, sistemas de fidelización, reservas y operativa de campo',
        includes: [
          'Una sola base de código para iPhone y Android (React Native)',
          'Cuentas de usuario, notificaciones push y modo offline',
          'Integración con pasarelas de pago y mapas',
          'Gestión de publicación y aprobación en App Store y Google Play',
          'Panel web de administración para gestión de datos',
          '60 días de garantía técnica y resolución de bugs',
        ],
        turnaround: '4 – 8 semanas',
        startingPrice: 'Desde 3.500 €',
        highlighted: false,
      },
      {
        name: 'Software de Gestión & Panel Interno',
        target: 'Empresas con operativa compleja que necesitan sustituir hojas de cálculo',
        includes: [
          'Control de accesos y seguridad según roles de usuario (RBAC)',
          'Panel analítico y exportación de informes personalizados',
          'Conexión con bases de datos heredadas y APIs externas',
          'Arquitectura en la nube y copias de seguridad automáticas',
          'Flujos de trabajo completamente personalizados para tu negocio',
          'Acuerdo de soporte y mantenimiento evolutivo continuo',
        ],
        turnaround: 'Sprints ágiles',
        startingPrice: 'A medida según alcance',
        highlighted: false,
      },
    ],
    guaranteeText:
      '💡 Garantía de pago seguro: Esquema de pagos vinculado a hitos tangibles de entrega. Validas cada fase antes de abonar la siguiente.',
  },
  faq: {
    heading: 'Preguntas Frecuentes',
    subheading:
      'Respuestas claras y honestas a las dudas más habituales antes de arrancar un proyecto',
    items: [
      {
        question: 'No tengo conocimientos técnicos ni especificaciones previas, ¿podéis ayudarme?',
        answer:
          'Por supuesto. La gran mayoría de nuestros clientes son empresarios y emprendedores sin perfil técnico. Nos basta con que nos expliques qué quieres lograr o qué referencias tienes; nosotros traduciremos tus objetivos a una propuesta funcional clara y sencilla.',
      },
      {
        question: '¿El presupuesto acordado puede sufrir incrementos durante el proyecto?',
        answer:
          'No. Trabajamos bajo la modalidad de precio cerrado. Todas las características quedan acordadas y detalladas en contrato antes de empezar. Si durante el proceso decides añadir nuevas funcionalidades no contempladas, se presupuestarán por separado de común acuerdo.',
      },
      {
        question: '¿De quién es la propiedad del código fuente y del proyecto una vez finalizado?',
        answer:
          'El 100% de la propiedad intelectual, código fuente, accesos a servidores y credenciales te pertenecen a ti de forma irrestricta. No cobramos cuotas de permanencia ni licencias cautivas. Sólo abonarás el coste directo del hosting que elijas.',
      },
      {
        question: '¿Os encargáis del proceso de publicación en Apple App Store y Google Play?',
        answer:
          'Sí. El servicio de desarrollo de aplicaciones móviles incluye el acompañamiento integral: cumplimiento de directrices de revisión, preparación de capturas, fichas de tienda y resolución de cualquier requerimiento de los evaluadores hasta su publicación efectiva.',
      },
      {
        question: '¿Los sitios web desarrollados aparecen en los resultados de Google?',
        answer:
          'Sí, todos nuestros desarrollos incluyen SEO técnico de serie: velocidad de carga optimizada, marcado semántico Schema.org, etiquetas hreflang para proyectos multilingües y envío de sitemaps a Google Search Console para una indexación rápida.',
      },
      {
        question: '¿Cómo se gestiona la comunicación si nos encontramos en otra ciudad o país?',
        answer:
          'Trabajamos habitualmente en remoto con clientes de toda Europa, América y Asia. Mediante WhatsApp, videollamadas periódicas y enlaces de demostración semanales, el seguimiento es ágil, transparente y mucho más eficiente que con reuniones presenciales innecesarias.',
      },
    ],
  },
  contact: {
    heading: '¿Listo para dar vida a tu nuevo sitio web o app?',
    subheading:
      'Cuéntanos tu proyecto hoy mismo y recibe una valoración técnica y propuesta detallada en menos de 24 horas.',
    email: 'info@okcode.es',
    whatsappText: 'Iniciar chat directo',
    wechatLabel: 'WeChat: okcode_ (escanea código QR)',
    locationText: 'Madrid, España · Cobertura internacional',
    copyPromptLabel: 'Plantilla de mensaje rápido',
    copyPromptText:
      'Hola OKCODE, me gustaría consultar la posibilidad de desarrollar [un sitio web / una app móvil / un e-commerce]. Nuestra necesidad principal es [descripción breve de 1 o 2 frases], con fecha objetivo para [plazo deseado, ej. 1 mes]. Quisiera conocer vuestra propuesta técnica y presupuesto estimado.',
    form: {
      namePlaceholder: 'Tu nombre o empresa',
      messagePlaceholder: 'Describe brevemente tu idea de proyecto o funcionalidades esperadas...',
      contactPlaceholder: 'Email, teléfono o WhatsApp',
      submitButton: 'Pedir Presupuesto Gratuito',
      successMessage: '¡Mensaje recibido! Nos pondremos en contacto contigo en menos de 24 horas.',
    },
  },
  footer: {
    editorialSignoff: 'OKCODE · Desarrollo de software de alto impacto para web y móvil',
    statusBadge: '🟢 Disponibilidad actual para nuevos proyectos',
    rights: '© 2026 OKCODE. Todos los derechos reservados.',
  },
};
