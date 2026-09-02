# Task 1: 升级多语言数据层与类型定义 (Data Layer & Type Expansion)

## Scope
- Modify: `src/content/site-content.ts`
- Create & Run: `tests/verify-content.ts`

## Interfaces to Produce
```ts
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
```

In `HeroData`:
```ts
editorialTitle?: {
  prefix: string;
  serif: string;
  suffix: string;
};
physics: PhysicsPlaygroundData;
```

In `SiteContent`:
```ts
pricing: PricingSectionData;
showcase: ShowcaseSectionData;
```

## Exact Trilingual Values Needed

### en (English)
- Hero editorialTitle:
  prefix: "Crafting"
  serif: "exceptional"
  suffix: "software for brands ready to lead."
- Hero physics:
  badge: "STUDIO VALUE LAB"
  instruction: "Drag and flick to explore client value tokens"
  items:
    - id: "uptime", label: "99.9% Uptime", type: "pill"
    - id: "seo", label: "SEO 100", type: "pill"
    - id: "zero-bug", label: "0-Bug Deploy", type: "pill"
    - id: "fast-ux", label: "Fast UX (<50ms)", type: "pill"
    - id: "scale", label: "Global Scale", type: "pill"
    - id: "conversion", label: "High Conversion", type: "pill"
    - id: "code", label: "{ }", type: "badge"
    - id: "rocket", label: "🚀", type: "badge"
- showcase:
  eyebrow: "05 — Selected Works"
  title: "Featured Engineering"
  titleHighlight: "Showcase"
  intro: "High-impact digital systems built for measurable business growth."
  items:
    1. id: "fintech", title: "Enterprise Trading & Risk Engine", client: "QuantEdge Global", industry: "FinTech & SaaS", summary: "Sub-millisecond latency order routing and live risk intelligence dashboard built on Next.js.", image: "/images/FinTech.webp", tags: ["Next.js", "TypeScript", "WebSocket"], metrics: "+18.4%", metricsLabel: "Execution Efficiency"
    2. id: "luxury-store", title: "Bespoke Headless Commerce", client: "Maison Éthique", industry: "E-Commerce", summary: "Editorial luxury shopping experience with instant page loads, multi-currency Stripe checkout, and 100 SEO score.", image: "/images/Store.webp", tags: ["Headless", "Stripe", "Next.js"], metrics: "+140%", metricsLabel: "Mobile Conversion"
    3. id: "ai-workflow", title: "Autonomous Agent Orchestrator", client: "CognitiveFlow AI", industry: "Artificial Intelligence", summary: "Visual node-based agent canvas managing enterprise LLM workflows and multi-agent coordination.", image: "/images/CognitiveFlow.webp", tags: ["AI Agents", "React Flow", "Full-Stack"], metrics: "10x", metricsLabel: "Workflow Speedup"
- pricing:
  eyebrow: "06 — Transparent Pricing"
  title: "Engineering-First"
  titleHighlight: "Investment"
  intro: "Transparent starting benchmarks. For custom scoping, use our interactive estimator below."
  estimatorNote: "Need custom enterprise scoping, legacy migration, or tailored milestones? Use our calculator below."
  tiers:
    1. id: "showcase", name: "Showcase & Brand Web", highlight: false, priceStarting: "Desde 1,800€", period: "one-time", summary: "High-performance brand web with editorial typography, trilingual architecture, and interactive physics.", deliverables: ["Editorial typography & bespoke design", "Trilingual (EN / ES / ZH) static setup", "100/100 Lighthouse SEO & Performance", "Physics value playground micro-interactions", "GitHub Pages static zero-maintenance host"], timeline: "1-2 Weeks", cta: "Book a Discovery Call"
    2. id: "ecommerce", name: "High-Conversion E-Commerce", highlight: true, priceStarting: "Desde 3,800€", period: "one-time", summary: "Headless store built for speed and global conversion with multi-currency Stripe checkout.", deliverables: ["Headless storefront with ultra-fast UX", "Stripe & global multi-currency checkout", "Product catalog & inventory synchronization", "GDPR compliance & legal privacy setup", "Conversion-optimized checkout drawer"], timeline: "3-4 Weeks", cta: "Start Project"
    3. id: "webapp", name: "Custom Web App & SaaS", highlight: false, priceStarting: "Desde 6,500€", period: "milestone-based", summary: "End-to-end full-stack digital product with complex state, authentication, and custom APIs.", deliverables: ["Scalable architecture & database design", "Role-based authentication & admin panel", "AI agent & workflow automation integration", "Real-time data feeds & custom REST/GraphQL", "Dedicated SLA & ongoing evolution retainer"], timeline: "4-8 Weeks", cta: "Schedule Architecture Review"

### es (Spanish)
- Hero editorialTitle:
  prefix: "Diseñamos software"
  serif: "excepcional"
  suffix: "para marcas que buscan liderar."
- Hero physics:
  badge: "LABORATORIO DE VALOR"
  instruction: "Arrastra y lanza los tokens de valor comercial"
  items:
    - id: "uptime", label: "99.9% Uptime", type: "pill"
    - id: "seo", label: "SEO 100", type: "pill"
    - id: "zero-bug", label: "Despliegue 0-Bug", type: "pill"
    - id: "fast-ux", label: "UX Ultrarrápida (<50ms)", type: "pill"
    - id: "scale", label: "Escala Global", type: "pill"
    - id: "conversion", label: "Alta Conversión", type: "pill"
    - id: "code", label: "{ }", type: "badge"
    - id: "rocket", label: "🚀", type: "badge"
- showcase:
  eyebrow: "05 — Proyectos Destacados"
  title: "Ingeniería de Alto"
  titleHighlight: "Impacto"
  intro: "Sistemas digitales diseñados para generar un impacto comercial medible."
  items: (similar Spanish translation, images pointing to .webp)
- pricing:
  eyebrow: "06 — Precios Transparentes"
  title: "Inversión Clara en"
  titleHighlight: "Ingeniería"
  intro: "Precios base transparentes. Para presupuestos a medida, utiliza nuestro estimador interactivo."
  estimatorNote: "¿Necesitas un desarrollo a medida o migración compleja? Utiliza nuestra calculadora interactiva."
  tiers: (Spanish equivalents, starting prices Desde 1,800€, 3,800€, 6,500€)

### zh-CN (Chinese)
- Hero editorialTitle:
  prefix: "为追求"
  serif: "卓越"
  suffix: "的品牌，构筑极致可靠的数字工程。"
- Hero physics:
  badge: "商业价值实验室"
  instruction: "鼠标拖拽或抛掷，探索交付价值指标"
  items:
    - id: "uptime", label: "99.9% 高可用", type: "pill"
    - id: "seo", label: "SEO 满分", type: "pill"
    - id: "zero-bug", label: "零缺陷交付", type: "pill"
    - id: "fast-ux", label: "极致性能 (<50ms)", type: "pill"
    - id: "scale", label: "全球化架构", type: "pill"
    - id: "conversion", label: "高转化率", type: "pill"
    - id: "code", label: "{ }", type: "badge"
    - id: "rocket", label: "🚀", type: "badge"
- showcase:
  eyebrow: "05 — 代表作品"
  title: "工程实践与标杆"
  titleHighlight: "案例"
  intro: "以严谨工程纪律交付的高性能数字化系统。"
  items: (Chinese translation, images pointing to .webp)
- pricing:
  eyebrow: "06 — 透明阶梯定价"
  title: "清晰透明的"
  titleHighlight: "工程投入"
  intro: "公开透明的起步基准。如需自定义规格，请使用下方的交互式预算计算器。"
  estimatorNote: "需要企业级定制系统、复杂数据迁移或专属里程碑？请使用下方交互估算器细化需求。"
  tiers: (Chinese equivalents, starting prices Desde 1,800€, 3,800€, 6,500€)

## Test & Verification
- `tests/verify-content.ts` must pass with `npx tsx tests/verify-content.ts`
- `npm run typecheck` must succeed with 0 errors
