# OKCODE 官网升级设计规范 (Monos-Inspired Redesign Spec)

## 1. 目标与背景 (Goal & Context)

通过深度解构 [monos.pro](https://monos.pro/) 的视觉语言、交互动效与商业转化策略，为 **OKCODE (okcode.es)** 打造一套兼具**欧洲高端编辑杂志感（Editorial Luxury）**与**硬核工程专业力（Engineering Confidence）**的全新官网体验，杜绝代码臃肿与粗制抄袭，保持极速静态导出与 Clean Code 架构。

---

## 2. 全局架构与技术约束 (Global Architecture & Constraints)

* **技术栈**：Next.js 15 (App Router) + React 19 + TypeScript。
* **部署方式**：纯静态导出 (`output: 'export'`, `trailingSlash: true`)，无 Node.js 服务端运行时，自动化部署到 GitHub Pages (`public/CNAME` -> `okcode.es`)。
* **三语体系与单一数据源**：统一在 `src/content/site-content.ts` 中维护 `en`、`es`、`zh-CN` 数据，组件只消费强类型数据，杜绝多语言模板碎片化。
* **无障碍与性能标准**：
  * 零水合抖动（Hydration-safe），严格处理客户端挂载；
  * 全面支持 `prefers-reduced-motion`（降级为优雅静态展示）；
  * 移动端触控安全（禁止 Canvas 滚动劫持）；
  * Lighthouse 性能、SEO、可访问性指标保持在 95+。

---

## 3. 视觉与排版系统 (Visual & Typography System)

### 3.1 杂志级双字体系统 (Editorial Typography)
* **无衬线骨架 (Sans-serif)**：`Inter`, `Plus Jakarta Sans`, system-ui，用于正文、数据指标与技术标签。
* **衬线斜体高光 (Editorial Serif Italic Accents)**：
  * **EN/ES**：引入 `Noto Serif`, `Instrument Serif`, 或 `Playfair Display` 的 Italic 变体，用于标题中的情绪与价值关键词（如 *exceptional*, *precisión*, *cautivan*, *liderar*）。
  * **ZH-CN**：引入高品质宋体/明体强调样式（如 `Songti SC`, `Noto Serif CJK SC`），用于中文核心词汇（如 *卓越*、*极致*、*精工*、*可靠*）。

### 3.2 色彩与空间呼吸感 (Color & Spatial Ambiance)
* **主基底**：深邃墨蓝 `#080c16`，辅助深石墨碳灰 `#0f1422`。
* **高光点缀**：电光青蓝 `#38bdf8` 与微光翡翠绿 `#34d399`。
* **局部微光**：微弱渐变光晕（Radial gradients）与磨砂玻璃边框（`rgba(255, 255, 255, 0.08)`）。

---

## 4. 核心功能与交互模块设计 (Core Modules & Interactions)

### 4.1 交付价值物理沙盒 (Physics Value Playground)
* **组件位置**：`src/components/PhysicsPlayground.tsx`（挂载于 Hero 右侧/下方容器）。
* **物理机制**：
  * 2D 物理碰撞引擎模拟，带有真实重力、回弹阻尼与空气阻力；
  * 掉落物品池（8~10 个胶囊，支持三语自适应）：
    * **EN**: `99.9% Uptime`, `SEO 100`, `0-Bug Deploy`, `Fast UX`, `Global Scale`, `High Conversion`
    * **ES**: `99.9% Uptime`, `SEO 100`, `Despliegue 0-Bug`, `UX Ultrarrápida`, `Escala Global`, `Alta Conversión`
    * **ZH**: `99.9% 高可用`, `SEO 满分`, `零缺陷交付`, `极致性能`, `全球化架构`, `高转化率`
    * **微型几何工件**：`{ }` 代码芯片、火箭 `🚀` 动力微标、闪电芯片、上扬折线图。
* **移动端防滚动劫持策略 (Touch-Safe)**：
  * 仅当触摸点命中有效 Body 时捕获手势拖拽；
  * 滑动空白区域时透传原生 `window.scroll`，绝不造成页面卡顿或死锁。
* **性能优化**：
  * `IntersectionObserver` 监控：离开视口立即 `pause` 物理渲染循环，0% 闲置 CPU 占用。
  * `prefers-reduced-motion` 启用时直接呈现静态规整排列的高质感徽章展架。

### 4.2 编辑风 Hero 首屏 (Editorial Hero)
* **左侧高定排版**：
  * 实时状态指示微标：`● Accepting Projects for Q3/Q4 • Spain & Global`
  * 双字体大标题（中/英/西自适应）；
  * 双 CTA：`预约 30 分钟需求探索会 (Discovery Call)`（锚点/弹窗）+ `交互式预算估算`（锚点跳转）。
* **右侧互动装置**：
  * 搭载上述 `PhysicsPlayground`；
  * 衬托概念硬核工件背景图 `/images/hero.jpg`。

### 4.3 沉浸式横向案例画廊 (Horizontal Showcase Gallery)
* **展示载体**：原生流畅 CSS Scroll-Snap 横向画廊，支持鼠标滚轮与滑动手势。
* **3 个已生成实景案例展示**：
  1. **Enterprise FinTech SaaS**（`/images/FinTech.jpg`）— 量化金融交易与风控平台，毫秒级响应，TypeScript + Next.js 全栈。
  2. **Maison & Co. Luxury Store**（`/images/Store.jpg`）— 欧洲高奢定制电商独立站，Stripe 全球收单，100 分 SEO 杂志排版。
  3. **CognitiveFlow AI Workflow**（`/images/CognitiveFlow.jpg`）— 企业级 AI Agent 工作流中台，自动化编排调度。
* **卡片细节**：高精实拍样机图、浮动商业收益微标（如 `+180% 转化`、`12ms 延时`）、技术栈药丸标签。

### 4.4 透明阶梯定价与交互估算器联动 (Pricing & Estimator)
* **三档公开起步参考梯度 (Transparent Starting Benchmarks)**：
  * **Brand & Showcase Web**：*Desde 1,800€*（品牌展示、极速加载、三语架构、物理微动效）。
  * **High-Conversion E-Commerce**：*Desde 3,800€*（高端独立站、全球支付集成、库存流转）。
  * **Custom Web App & SaaS**：*Desde 6,500€*（复杂全栈平台、权限管理、AI 集成、定制后端）。
* **预算定制估算器联动**：
  * 保留并升级现有 `ProjectEstimator`，提供可多选的规格计算器；
  * 计算器底部一键直通 **「预约 30 分钟免费探索会 (Discovery Call)」** 或 WhatsApp 直聊。

---

## 5. 文件变更清单 (Files to Create & Modify)

1. **新建组件**：
   * `src/components/PhysicsPlayground.tsx`：2D 物理碰撞沙盒组件。
   * `src/components/ShowcaseGallery.tsx`：横向滚动的沉浸式案例展厅。
   * `src/components/PricingTiers.tsx`：三档透明阶梯起步价展示。
2. **修改现有文件**：
   * `src/content/site-content.ts`：扩充三语数据（Editorial 标题富文本结构、物理胶囊多语言文本、案例新数据、阶梯定价文案）。
   * `src/components/Hero.tsx`：重构为 Editorial 双栏排版并嵌入物理沙盒。
   * `src/components/HomePage.tsx`：整合全新案例画廊与定价模块布局。
   * `src/app/globals.css`：补充 Serif 字体变量、横向滚动 snap 工具类与沙盒微光样式。

---

## 6. 验证与验收准则 (Verification & Acceptance Criteria)

1. **构建与类型验证**：`npm run typecheck` 与 `npm run build` 100% 通过，成功生成 `./out` 静态文件。
2. **三语功能测试**：`/`（英文）、`/es/`（西文）、`/zh-cn/`（中文）三个路由均完整渲染新排版、物理沙盒胶囊、案例图片与定价信息。
3. **物理沙盒手势与性能**：
   * 桌面端鼠标拖拽、甩飞顺畅；
   * 移动端触控空白区域时上下滑动页面无卡顿；
   * 页面滚出视口后物理引擎自动暂停。
4. **图片资源完整性**：`/images/hero.jpg`、`/images/FinTech.jpg`、`/images/Store.jpg`、`/images/CognitiveFlow.jpg` 均能正常加载且自适应清晰。
