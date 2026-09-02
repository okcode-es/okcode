# OKCODE 官网升级实施计划 (Monos-Inspired Redesign Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 深度借鉴 monos.pro 的设计哲学（编辑部杂志排版、2D 物理碰撞微交互、大图沉浸展厅、透明阶梯定价），重塑 OKCODE 静态官网的前端感官与商业转化率。

**Architecture:** 保持 Next.js 15 App Router 的纯静态导出 (`output: 'export'`) 架构，在单一数据层 `src/content/site-content.ts` 扩展三语数据；新建响应式 2D 物理沙盒组件 `PhysicsPlayground.tsx`、横向滚动案例画廊 `ShowcaseGallery.tsx`、透明阶梯定价 `PricingTiers.tsx`；在 `globals.css` 引入 Editorial Serif 字体栈与流动微光样式。

**Tech Stack:** Next.js 15.5, React 19, TypeScript 5.6, HTML5 Canvas 2D Physics, CSS Scroll-Snap, WebP 优化资源。

**Spec:** [docs/superpowers/specs/2026-09-02-monos-inspired-redesign.md](file:///C:/Users/Lwh77/Desktop/workspace/okcode/docs/superpowers/specs/2026-09-02-monos-inspired-redesign.md)

## Global Constraints

- 静态导出约束：必须维持 `output: 'export'` 与 `trailingSlash: true`，不使用任何 Node.js 服务端 API 或运行时。
- 多语言单一数据源：所有文案、标题、物理胶囊标签、阶梯报价数据必须集中在 `src/content/site-content.ts`，禁止在组件内硬编码多语言文本。
- 动效安全与无障碍：物理引擎离开视口必须自动暂停（0% 闲置 CPU），必须支持 `prefers-reduced-motion` 降级，移动端触控禁止劫持正常网页纵向滚动。
- 零水合抖动：所有客户端交互组件必须安全处理 Hydration，无控制台警告与报错。

---

### Task 1: 升级多语言数据层与类型定义 (Data Layer & Type Expansion)

**Files:**
- Modify: `src/content/site-content.ts:1-200` (扩充 Types)
- Modify: `src/content/site-content.ts:250-1990` (扩充 en, es, zh-CN 三语数据)
- Test: `tests/verify-content.ts`

**Interfaces:**
- Consumes: 现有 `SiteContent` 结构
- Produces:
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

- [ ] **Step 1: 编写测试脚本验证类型与三语数据完整性**

创建 `tests/verify-content.ts`：
```ts
import { siteContent } from "../src/content/site-content";

function verify() {
  const locales = ["en", "es", "zh-CN"] as const;
  for (const loc of locales) {
    const data = siteContent[loc];
    if (!data.hero.physics || data.hero.physics.items.length < 6) {
      throw new Error(`Missing or insufficient physics items in locale: ${loc}`);
    }
    if (!data.pricing || data.pricing.tiers.length !== 3) {
      throw new Error(`Missing or invalid pricing tiers in locale: ${loc}`);
    }
    if (!data.showcase || data.showcase.items.length !== 3) {
      throw new Error(`Missing or invalid showcase items in locale: ${loc}`);
    }
    for (const item of data.showcase.items) {
      if (!item.image.endsWith(".webp")) {
        throw new Error(`Showcase image must be .webp: ${item.image}`);
      }
    }
  }
  console.log("PASS: Content verification succeeded across all 3 locales.");
}

verify();
```

- [ ] **Step 2: 运行测试确保失败（RED）**

运行：`node --loader ts-node/esm tests/verify-content.ts` 或 `npx tsx tests/verify-content.ts`
预期：FAIL，报错提示属性未定义。

- [ ] **Step 3: 在 `src/content/site-content.ts` 中实现类型与三语数据**

在 `src/content/site-content.ts` 中：
1. 增加 `PhysicsItem`, `PhysicsPlaygroundData`, `PricingTier`, `PricingSectionData`, `ShowcaseItem`, `ShowcaseSectionData` 接口；
2. 在 `HeroData` 中增加 `physics: PhysicsPlaygroundData` 以及 `editorialTitle?: { prefix: string; serif: string; suffix: string }`；
3. 在 `SiteContent` 中增加 `pricing: PricingSectionData` 与 `showcase: ShowcaseSectionData`；
4. 为 `en`、`es`、`zh-CN` 分别填入对应的数据项（引用 `/images/hero.webp`、`/images/FinTech.webp`、`/images/Store.webp`、`/images/CognitiveFlow.webp`）。

- [ ] **Step 4: 运行测试确保通过（GREEN）**

运行：`npx tsx tests/verify-content.ts && npm run typecheck`
预期：PASS，所有三语数据和 TypeScript 类型检查完全通过。

- [ ] **Step 5: Git 提交**

```bash
git add src/content/site-content.ts tests/verify-content.ts
git commit -m "feat(content): add types and trilingual copy for physics sandbox, showcase and pricing"
```

---

### Task 2: 升级排版与样式系统 (Editorial Typography & Visual Tokens)

**Files:**
- Modify: `src/app/globals.css`
- Test: `tests/verify-styles.js`

**Interfaces:**
- Consumes: CSS Custom Properties
- Produces:
  - `--font-serif`: 高品质衬线斜体回退栈
  - `.font-editorial`: 衬线强调字工具类
  - `.physics-canvas-container`: 物理沙盒边框与微光样式
  - `.showcase-gallery`: 横向 CSS Scroll-Snap 容器样式
  - `.pricing-grid`: 三列阶梯定价卡片流

- [ ] **Step 1: 编写样式验证脚本**

创建 `tests/verify-styles.js`：
```js
const fs = require('fs');
const css = fs.readFileSync('src/app/globals.css', 'utf8');

const requiredClasses = [
  '--font-serif',
  'font-editorial',
  'physics-canvas',
  'showcase-gallery',
  'pricing-grid'
];

for (const cls of requiredClasses) {
  if (!css.includes(cls)) {
    throw new Error(`Missing required CSS token: ${cls}`);
  }
}
console.log('PASS: Required CSS tokens and classes are present.');
```

- [ ] **Step 2: 运行测试确保失败（RED）**

运行：`node tests/verify-styles.js`
预期：FAIL，提示缺少 `--font-serif`。

- [ ] **Step 3: 在 `src/app/globals.css` 中注入样式与排版工具类**

在 `src/app/globals.css` 中添加：
```css
:root {
  --font-serif: "Newsreader", "Playfair Display", "Instrument Serif", "Noto Serif", "Songti SC", "SimSun", serif;
}

.font-editorial {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--accent-glow, #38bdf8);
}

/* Physics Playground Container */
.physics-container {
  position: relative;
  width: 100%;
  height: 440px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.06), transparent 70%),
              linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 22, 0.9) 100%);
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Horizontal Showcase Scroll-Snap */
.showcase-gallery {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 24px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(56, 189, 248, 0.3) transparent;
}
.showcase-gallery::-webkit-scrollbar {
  height: 6px;
}
.showcase-gallery::-webkit-scrollbar-thumb {
  background: rgba(56, 189, 248, 0.3);
  border-radius: 999px;
}
.showcase-card {
  flex: 0 0 85%;
  max-width: 640px;
  scroll-snap-align: start;
}
@media (min-width: 1024px) {
  .showcase-card {
    flex: 0 0 520px;
  }
}

/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 900px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 4: 运行测试确保通过（GREEN）**

运行：`node tests/verify-styles.js`
预期：PASS。

- [ ] **Step 5: Git 提交**

```bash
git add src/app/globals.css tests/verify-styles.js
git commit -m "style: add editorial serif typography, physics container, and showcase scroll classes"
```

---

### Task 3: 构建 2D 物理沙盒组件 (Physics Value Playground)

**Files:**
- Create: `src/components/PhysicsPlayground.tsx`
- Test: `tests/verify-physics.ts`

**Interfaces:**
- Consumes: `data: PhysicsPlaygroundData`, `heroImage: string`
- Produces: `<PhysicsPlayground data={...} heroImage="..." />` React 组件，挂载 2D Canvas 物理仿真。

- [ ] **Step 1: 编写组件导出与安全测试**

创建 `tests/verify-physics.ts`：
```ts
import React from "react";
import PhysicsPlayground from "../src/components/PhysicsPlayground";

if (typeof PhysicsPlayground !== "function") {
  throw new Error("PhysicsPlayground must be a valid React functional component");
}
console.log("PASS: PhysicsPlayground component exported correctly.");
```

- [ ] **Step 2: 运行测试确保失败（RED）**

运行：`npx tsx tests/verify-physics.ts`
Expected: FAIL，提示模块 `PhysicsPlayground` 不存在。

- [ ] **Step 3: 编写 `PhysicsPlayground.tsx` 完整实现**

在 `src/components/PhysicsPlayground.tsx`：
1. `'use client'` 指令，确保纯客户端水合；
2. 包含高性能轻量 2D 物理引擎（重力 `gravity = 0.4`、弹性碰撞 `restitution = 0.65`、摩擦力 `friction = 0.98`、空气阻力）；
3. 胶囊形状 `roundRect` 碰撞箱与文字绘制（Retina 2x 分辨率自动缩放）；
4. 鼠标与触控拖拽监听：
   - 触控事件计算是否击中实体，未命中时透传滚动；
5. `IntersectionObserver` 启停逻辑：离开视口调用 `cancelAnimationFrame`；
6. `window.matchMedia('(prefers-reduced-motion: reduce)')` 监听：开启时展示整齐排布的高质感徽章卡片。

- [ ] **Step 4: 运行测试与类型检查确保通过（GREEN）**

运行：`npx tsx tests/verify-physics.ts && npm run typecheck`
Expected: PASS。

- [ ] **Step 5: Git 提交**

```bash
git add src/components/PhysicsPlayground.tsx tests/verify-physics.ts
git commit -m "feat(ui): implement touch-safe 2D physics value playground component"
```

---

### Task 4: 重构 Hero 首屏为编辑双栏布局 (Editorial Hero Refactor)

**Files:**
- Modify: `src/components/Hero.tsx`
- Test: `tests/verify-hero.ts`

**Interfaces:**
- Consumes: `content: SiteContent`
- Produces: `<Hero content={content} />`，左侧为 Editorial 杂志排版 + 双 CTA，右侧为 `PhysicsPlayground`。

- [ ] **Step 1: 编写 Hero 渲染测试**

创建 `tests/verify-hero.ts`：
```ts
import Hero from "../src/components/Hero";
import { siteContent } from "../src/content/site-content";

if (typeof Hero !== "function") {
  throw new Error("Hero must be exported as a React component");
}
console.log("PASS: Hero component verified.");
```

- [ ] **Step 2: 运行测试验证**

运行：`npx tsx tests/verify-hero.ts`

- [ ] **Step 3: 重构 `src/components/Hero.tsx`**

在 `src/components/Hero.tsx` 中：
1. 采用两栏式网格布局 `hero__editorial-grid`（桌面端 55% 文本排版 + 45% 物理沙盒，移动端纵向堆叠）；
2. 渲染状态微标 `● Accepting Projects for Q3/Q4 • Spain & Global`；
3. 大标题采用混合字体渲染：
   ```tsx
   <h1 className="hero__title">
     {h.titlePrefix}{" "}
     <span className="font-editorial">{h.titleSerif}</span>{" "}
     {h.titleSuffix}
   </h1>
   ```
4. 主 CTA「预约 30 分钟需求探索会」锚点直接连接到 `#contact`，次 CTA「估算预算」平滑滚动到 `#pricing`；
5. 右侧容器嵌入 `<PhysicsPlayground data={h.physics} heroImage="/images/hero.webp" />`。

- [ ] **Step 4: 运行类型与构建检查（GREEN）**

运行：`npm run typecheck`
Expected: PASS。

- [ ] **Step 5: Git 提交**

```bash
git add src/components/Hero.tsx tests/verify-hero.ts
git commit -m "feat(hero): refactor hero into editorial split layout with physics playground"
```

---

### Task 5: 构建沉浸式横向案例画廊 (Showcase Gallery Component)

**Files:**
- Create: `src/components/ShowcaseGallery.tsx`
- Test: `tests/verify-showcase.ts`

**Interfaces:**
- Consumes: `showcase: ShowcaseSectionData`
- Produces: `<ShowcaseGallery showcase={showcase} />`

- [ ] **Step 1: 编写案例组件验证测试**

创建 `tests/verify-showcase.ts`：
```ts
import ShowcaseGallery from "../src/components/ShowcaseGallery";

if (typeof ShowcaseGallery !== "function") {
  throw new Error("ShowcaseGallery component must be exported");
}
console.log("PASS: ShowcaseGallery exported.");
```

- [ ] **Step 2: 运行测试确保失败（RED）**

运行：`npx tsx tests/verify-showcase.ts`
Expected: FAIL，提示找不到该模块。

- [ ] **Step 3: 实现 `src/components/ShowcaseGallery.tsx`**

在 `src/components/ShowcaseGallery.tsx` 中：
1. 包含 `SectionHeading`（带 Editorial Serif 强调字）；
2. 容器应用 `.showcase-gallery`（CSS Scroll-Snap）；
3. 循环渲染 3 个案例卡片（`FinTech.webp`、`Store.webp`、`CognitiveFlow.webp`）；
4. 卡片包含：
   - 高清封面图（带悬浮微光与轻微缩放）；
   - 商业指标浮动胶囊（例如 `+180% 转化`、`12ms 延时`、`99.99% 高可用`）；
   - 技术栈药丸徽章（Next.js, TypeScript, Stripe, LLM 等）；
   - 咨询直通链接。

- [ ] **Step 4: 运行测试与类型检查（GREEN）**

运行：`npx tsx tests/verify-showcase.ts && npm run typecheck`
Expected: PASS。

- [ ] **Step 5: Git 提交**

```bash
git add src/components/ShowcaseGallery.tsx tests/verify-showcase.ts
git commit -m "feat(showcase): implement horizontal scroll-snap showcase gallery"
```

---

### Task 6: 构建透明阶梯定价组件 (Transparent Pricing Tiers)

**Files:**
- Create: `src/components/PricingTiers.tsx`
- Test: `tests/verify-pricing.ts`

**Interfaces:**
- Consumes: `pricing: PricingSectionData`, `contact: ContactInfo`
- Produces: `<PricingTiers pricing={pricing} contact={contact} />`

- [ ] **Step 1: 编写定价组件验证测试**

创建 `tests/verify-pricing.ts`：
```ts
import PricingTiers from "../src/components/PricingTiers";

if (typeof PricingTiers !== "function") {
  throw new Error("PricingTiers component must be exported");
}
console.log("PASS: PricingTiers exported.");
```

- [ ] **Step 2: 运行测试确保失败（RED）**

运行：`npx tsx tests/verify-pricing.ts`
Expected: FAIL。

- [ ] **Step 3: 实现 `src/components/PricingTiers.tsx`**

在 `src/components/PricingTiers.tsx` 中：
1. 渲染模块标头，突出透明工程定价理念；
2. 3 列卡片网格（展示型网站 *Desde 1,800€*、高转化独立站 *Desde 3,800€*、定制 Web App *Desde 6,500€*）；
3. 突出高亮卡片（中间推荐档添加微光边框与 `Popular / 推荐` 标签）；
4. 包含功能清单打钩列表与预期交付周期；
5. 底部提供过渡提示引导，与下方的 `ProjectEstimator`（自选规格细算）无缝结合。

- [ ] **Step 4: 运行测试与类型检查（GREEN）**

运行：`npx tsx tests/verify-pricing.ts && npm run typecheck`
Expected: PASS。

- [ ] **Step 5: Git 提交**

```bash
git add src/components/PricingTiers.tsx tests/verify-pricing.ts
git commit -m "feat(pricing): implement 3-tier transparent pricing component"
```

---

### Task 7: 整合全站落地与完整静态构建验证 (Full Integration & Static Verification)

**Files:**
- Modify: `src/components/HomePage.tsx`
- Test: 全站构建与三语静态输出核验

**Interfaces:**
- Consumes: `Hero`, `PhysicsPlayground`, `ShowcaseGallery`, `PricingTiers`, `ProjectEstimator`
- Produces: 完整渲染的高质感三语首页

- [ ] **Step 1: 在 `src/components/HomePage.tsx` 中组装全新模块**

在 `src/components/HomePage.tsx` 中：
1. 引入 `<ShowcaseGallery showcase={c.showcase} />` 替换原有单调案例堆叠；
2. 在 `id="pricing"` 区域将 `<PricingTiers pricing={c.pricing} contact={c.contact.info} />` 与现有的 `<ProjectEstimator />` 组合成一体化定价方案；
3. 核查导航锚点跳转与平滑滚动。

- [ ] **Step 2: 运行本地全量测试与类型检查**

运行：
```bash
npm run typecheck
```
Expected: 0 errors.

- [ ] **Step 3: 执行生产静态导出构建**

运行：
```bash
npm run build
```
Expected: 构建成功，并在 `./out` 目录生成静态 HTML：
- `./out/index.html` (英语)
- `./out/es/index.html` (西语)
- `./out/zh-cn/index.html` (中文)
- 所有 `.webp` 静态资源正常复制。

- [ ] **Step 4: 清理临时测试脚本**

```bash
git rm tests/verify-content.ts tests/verify-styles.js tests/verify-physics.ts tests/verify-hero.ts tests/verify-showcase.ts tests/verify-pricing.ts
```

- [ ] **Step 5: 最终 Git 提交**

```bash
git add src/components/HomePage.tsx
git commit -m "feat(home): integrate editorial hero, showcase gallery, and transparent pricing"
```
