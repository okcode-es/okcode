# OKCODE 页面开发审查报告

审查对象：Next.js + React + TypeScript 三语静态官网（`/`、`/es/`、`/zh-cn/`）  
审查范围：代码规范、组件结构、布局与响应式、可访问性、交互、视觉设计与品牌一致性  
审查方式：源码静态审查 + 生成 HTML 检查 + TypeScript 检查 + lint 命令验证

## 一、结论摘要

当前页面已经具备较完整的内容结构、响应式骨架和统一的深色软件工作室视觉方向，适合作为继续打磨的基础版本。但距离“可作为专业工作室正式官网上线”的质量标准，仍有几项需要优先修复的问题：

1. **多语言页面的静态语义不完整**：西班牙语和中文 HTML 仍输出 `lang="en"`，HeroArt、联系表单、页脚等多个 UI 文案也硬编码为英文。
2. **滚动进入动画依赖 JavaScript**：`.reveal` 默认 `opacity: 0`，如果脚本加载失败、浏览器不支持 IntersectionObserver 或用户使用受限环境，主要内容会保持不可见。
3. **移动端菜单与语言切换器的 ARIA 模式不严谨**：当前 listbox 结构不符合常见键盘交互模式；折叠菜单关闭时仍可能进入 Tab 顺序。
4. **工程检查命令未完成生产化**：`npm run lint` 调用已废弃的 `next lint`，运行时进入交互式配置并以退出码 1 结束，无法用于 CI 或稳定的开发检查。
5. **视觉系统虽然方向正确，但存在“深色蓝紫 + 网格 + 指标面板”趋同风险**：需要增加更具 OKCODE 自身辨识度的案例证据、团队信息和真实品牌素材，减少泛化的科技装饰。

## 二、健康评分

| 维度 | 得分 | 结论 |
|---|---:|---|
| 可访问性 | 2/4 | 有 skip link、focus-visible、语义表单和 reduced-motion，但语言语义、菜单模式、Reveal 降级存在明显问题 |
| 性能 | 3/4 | 依赖少、静态导出、动画主要使用 transform/opacity；但多个 client 组件和滚动观察器需要控制，项目 hover 会触发布局变化 |
| 响应式布局 | 3/4 | 已覆盖桌面、平板、移动端；移动菜单焦点管理、极窄屏内容密度仍需加强 |
| 主题与设计系统 | 3/4 | CSS token 基础较好，但仍有大量局部硬编码颜色和未使用 token，存在维护漂移风险 |
| 反模式控制 | 3/4 | 整体比通用模板更有观点；但“蓝紫深色、网格、状态灯、指标面板”组合仍有一定 AI 科技模板感 |
| **总分** | **14/20** | **良好，但建议在上线前完成 P1 项** |

## 三、必须优先修复（P1）

### [P1] 多语言页面的 `html lang` 依赖客户端修正

- **位置**：`src/app/layout.tsx:19`、`src/components/LangSetter.tsx:6-12`
- **类别**：可访问性 / SEO / 国际化
- **现状**：所有静态页面都由根布局输出 `<html lang="en">`。生成结果已验证：`out/es/index.html` 和 `out/zh-cn/index.html` 仍为 `lang="en"`；只有浏览器执行客户端脚本后才会修改。
- **影响**：搜索引擎、屏幕阅读器、禁用脚本的用户和首屏解析阶段会得到错误语言信息，可能影响朗读语言、SEO 语言判断和自动翻译。
- **建议**：将路由改为共享的 `[locale]` 结构并在页面布局中生成对应 `lang`；如果必须保留英文根路径，可将英文根页和 `/es`、`/zh-cn` 分别放入带 locale 的 layout，或在构建时为每个页面提供独立 HTML shell。不要把 `lang` 修正完全交给 `useEffect`。
- **验收标准**：静态检查 `out/index.html`、`out/es/index.html`、`out/zh-cn/index.html` 分别得到 `en`、`es`、`zh-CN`；不执行 JavaScript 时仍正确。

### [P1] Reveal 动画的默认状态导致渐进增强失败

- **位置**：`src/app/globals.css:331-333` 附近的 `.reveal` 规则、`src/components/Reveal.tsx:18-39`
- **类别**：可访问性 / 稳健性 / 性能
- **现状**：`.reveal` 初始为 `opacity: 0; transform: translateY(18px)`，必须等待客户端 `IntersectionObserver` 才变成可见。
- **影响**：JavaScript 加载失败、IntersectionObserver 不可用、脚本被阻止或发生 hydration 错误时，Studio、Services、Projects 等主要内容会不可见。静态官网不应让核心内容依赖动效脚本。
- **建议**：采用“默认可见、JS 负责增强”的策略：通过一个极小的客户端初始化脚本给 `html` 增加 `.js-ready`，仅在 `.js-ready .reveal` 下启用隐藏和动画；或由 `Reveal` 在首屏渲染时先保持可见，进入观察后只追加动画类。增加 `typeof IntersectionObserver === "undefined"` 的立即可见 fallback。
- **验收标准**：关闭 JavaScript、移除 IntersectionObserver 或模拟脚本失败时，所有主要内容仍可读；启用动效时只增加淡入效果。

### [P1] 移动菜单关闭时没有真正从键盘顺序移除

- **位置**：`src/components/SiteHeader.tsx:57-81`
- **类别**：可访问性 / 移动端交互
- **现状**：关闭状态仅依赖 `.mobile-nav { max-height: 0; overflow: hidden; }`，容器仍在 DOM 中，内部链接没有 `hidden`、`inert` 或等效的焦点管理。
- **影响**：键盘用户可能 Tab 到不可见菜单项；屏幕阅读器也可能读取隐藏菜单；打开/关闭菜单时没有焦点转移，交互上下文不清晰。
- **建议**：将移动菜单改为真正的 `<nav>`，关闭时设置 `hidden={!menuOpen}` 或 `inert`；打开后将焦点移到第一个菜单项，关闭后将焦点还给菜单按钮；按 Escape 关闭。若使用动画，可通过外层状态类配合延迟设置 `hidden`，但不能让不可见链接长期可聚焦。
- **验收标准**：关闭菜单时 Tab 不会经过菜单项；打开后键盘能顺序访问；Escape 可以关闭并回焦按钮。

### [P1] `npm run lint` 不可用于自动化检查

- **位置**：`package.json:11`
- **类别**：代码规范 / CI
- **现状**：脚本仍为 `next lint`。当前 Next 版本执行时提示已废弃，并进入 ESLint 配置交互，最终退出码为 1。
- **影响**：开发者无法获得稳定 lint 结果，CI 也无法可靠阻断明显问题；“有 lint 脚本”但实际不可执行会降低工程可信度。
- **建议**：迁移至 ESLint CLI：添加 `eslint`、`eslint-config-next`（或明确的 flat config），新增 `eslint.config.mjs`，将脚本改为 `eslint .`；同时把 `npm run typecheck` 和 `npm run lint` 纳入 GitHub Actions build job。
- **验收标准**：`npm run lint` 非交互执行并返回 0；存在错误时返回非 0；CI 日志可直接显示规则和文件位置。

### [P1] 多语言内容层与组件层脱节

- **位置**：`src/components/HeroArt.tsx:10-71`、`src/components/ContactPanel.tsx:31-92`、`src/components/SiteFooter.tsx:24-35`
- **类别**：国际化 / 内容架构
- **现状**：虽然主要文案集中在 `src/content/site-content.ts`，但 HeroArt 的全部文案、联系信息字段名、表单 label/placeholder、页脚 `Menu` / `Contact` 仍直接写在组件中。
- **影响**：中文和西班牙语页面会出现明显的语言混杂；后续新增语言必须修改组件代码，违背当前“内容与结构分离”的设计目标。
- **建议**：扩充 `SiteContent` 类型，加入 `ui` 或各组件文案对象，例如 `heroArt`, `contact.fields`, `footer.menuLabel`；所有组件只接受 `content` 数据，不保留展示性英文常量。联系人字段的可读标签也应进入 locale 数据层。
- **验收标准**：`grep` 检查组件内不再存在面向用户的英文展示文案；切换三种语言时 HeroArt、表单、页脚全部同步切换。

## 四、重要优化（P2）

### [P2] LanguageSwitcher 的 ARIA 角色与键盘模型不匹配

- **位置**：`src/components/LanguageSwitcher.tsx:52-70`
- **类别**：可访问性 / 交互
- **现状**：容器使用 `role="listbox"`，但选项内部是 `<a>`；没有上下箭头键、Home/End、焦点管理或 `aria-activedescendant`。
- **影响**：屏幕阅读器可能把它识别为 listbox，但用户无法按标准 listbox 方式操作；链接和 option 语义叠加，行为预期不一致。
- **建议**：优先使用普通 `<nav aria-label="Language selection">` + `<ul>` + 链接，不需要伪造 listbox；或者完整实现 WAI-ARIA listbox，并让 option 本身成为可聚焦元素。对于语言切换，普通导航链接更简单、更可靠。

### [P2] Reveal 组件的 ref 类型通过强制转换掩盖了真实 DOM 类型

- **位置**：`src/components/Reveal.tsx:5-10、41-46`
- **类别**：TypeScript / 可维护性
- **现状**：组件支持 `div`、`li`、`section`，但 ref 固定为 `HTMLDivElement`，随后通过 `React.RefObject<HTMLDivElement>` 强制转换。
- **影响**：当前能编译，但类型系统无法保证不同标签的 ref 正确性；未来扩展到 `article`、`aside` 或带特殊属性的元素时容易出现隐藏错误。
- **建议**：如果只用于滚动观察，改为始终渲染 `<div>`；或者用泛型/独立的 `useReveal` hook，把 IntersectionObserver 绑定到真实元素 ref，再让渲染组件保持简单。

### [P2] 项目 hover 动画改变 padding，会触发布局重排

- **位置**：`src/app/globals.css:253-255`
- **类别**：性能 / 动效
- **现状**：`.project:hover { padding-inline: 0.7rem; }` 会改变元素布局尺寸，影响同一区域的其他内容。
- **影响**：鼠标在案例列表中移动时可能造成轻微抖动或重排，低性能设备上更明显；也可能造成键盘 focus 与 hover 的视觉不一致。
- **建议**：保留 padding 不变，仅动画 `border-color`、`transform` 或伪元素的 `opacity/transform`；例如用 `.project::before` 做左侧强调线，hover 时只缩放线条。

### [P2] 全局 token 与局部颜色值混用

- **位置**：`src/app/globals.css` 多处，例如 `.section--tint`、`.hero__art`、`.form`、`.hero-art__node--active`
- **类别**：设计系统 / 代码规范
- **现状**：已经有 `--bg`、`--panel`、`--blue`、`--violet` 等 token，但很多组件直接写 `oklch(...)`；同时 `--bg-raised`、`--bg-soft`、`--blue-strong`、`--violet-wash` 目前只定义未使用。
- **影响**：后续调整品牌色需要逐处搜索，容易出现不同区块色阶不一致；无用 token 也会增加认知负担。
- **建议**：把背景层级、边框、品牌 wash、阴影和状态色补齐为语义 token，例如 `--surface-hero`、`--surface-card`、`--surface-input`、`--border-focus`；组件 CSS 只消费语义 token。删除未使用 token 或实际应用它们。

### [P2] 表单提交缺少状态反馈和失败兜底

- **位置**：`src/components/ContactPanel.tsx:18-25、61-102`
- **类别**：交互 / 表单体验
- **现状**：提交后直接设置 `window.location.href = mailto:...`，没有成功提示、邮件客户端不可用时的替代路径，也没有确认用户的姓名是否填写。
- **影响**：用户点击后可能没有可见反馈，不知道是否已完成；移动端或没有配置邮件客户端的设备上容易误以为提交失败。
- **建议**：提交前显示“正在打开邮件客户端”的短状态；生成并显示可复制邮箱地址；对 name 增加合理校验；如果长期不引入服务端，可增加“复制邮件内容”或“直接发送邮件”链接作为静态 fallback。三语文案也应进入内容层。

### [P2] 页脚使用 inline style，且引用已废弃的 `--paper` token

- **位置**：`src/components/SiteFooter.tsx:16-20`
- **类别**：代码规范 / 主题一致性
- **现状**：品牌链接和介绍段落使用 `style={{ ... }}`；品牌链接仍引用 `var(--paper)`，但当前深色主题已不再定义 `--paper`。
- **影响**：样式规则分散，主题迁移时容易出现失效或被组件内联值覆盖；当前链接颜色主要依赖其他 CSS 规则偶然兜底。
- **建议**：改为 `.site-footer__brand`、`.site-footer__about` 等类名并统一使用 `--text`、`--text-soft`；清理所有旧主题 token 引用。

### [P2] 触控与小屏信息密度仍需实机验证

- **位置**：`src/app/globals.css:210-222、320-323`
- **类别**：响应式 / 可读性
- **现状**：HeroArt 在移动端仍保留三列流程节点和三列 metrics，同时使用大量 `0.61rem–0.72rem` 的等宽字体。
- **影响**：在 320px 宽度、系统字体放大或较长本地化文案下，节点和指标容易显得拥挤；中文/西语文本长度变化可能造成截断。
- **建议**：移动端将流程节点改为纵向或两列、metrics 改为两列/纵向；避免用 `text-overflow: ellipsis` 隐藏关键内容；对中文、西语长文案做真实设备和 200% 字体缩放测试。

### [P2] HeroArt 的装饰信息目前是展示性硬编码，不支持真实业务数据

- **位置**：`src/components/HeroArt.tsx:10-66`
- **类别**：内容架构 / 品牌真实性
- **现状**：`v1.4`、`Madrid, ES`、`Web · API · App`、`systems online` 都是固定展示数据；其中 `v1.4` 看起来像产品版本，但没有实际含义。
- **影响**：视觉上像产品控制台，但会给访客造成“这是实时系统/真实产品状态”的暗示，降低内容可信度；如果地址或服务范围更新，容易遗漏。
- **建议**：将其改为明确的品牌信息（例如“Spain-based studio”“3 languages”“Static by design”），或全部进入内容数据层，并避免没有业务依据的版本号。

## 五、轻量改进（P3）

### [P3] `BrandMark` 仍使用旧主题变量

- **位置**：`src/components/Icons.tsx:92-93`
- **问题**：路径使用 `stroke="var(--accent)"`，而新的设计系统未定义 `--accent`；目前依赖 `.brand__mark path { stroke: var(--blue); }` 的 CSS 覆盖。
- **建议**：将 SVG 默认 stroke 改为 `currentColor`，或明确使用现有 `--blue`；不要让组件依赖外部选择器偶然修正。

### [P3] 组件中的可见文案与 aria-label 没有统一 locale 来源

- **位置**：`SiteHeader.tsx:21、26、46`、`LanguageSwitcher.tsx:44、53`
- **问题**：`OKCODE — home`、`Primary`、`Toggle menu`、`Change language`、`Language` 均为英文固定字符串。
- **建议**：把可见或辅助技术文案统一放入 `content.ui`，并为每种语言提供翻译；品牌名可以保持不变，但上下文说明应本地化。

### [P3] `Reveal` 的 delay API 没有设计成可配置的 CSS 变量

- **位置**：`src/components/Reveal.tsx:46`
- **问题**：通过 React inline style 写 `transitionDelay`，不利于统一管理和 CSP/样式审查。
- **建议**：输出 `style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}`，CSS 统一使用 `transition-delay: var(--reveal-delay, 0ms)`；或使用有限的 `data-delay` 类。

### [P3] 项目中缺少自动化 UI/可访问性回归检查

- **位置**：项目级工程配置
- **问题**：当前只有 TypeScript 检查，lint 也未配置成功；没有针对三语路由、关键链接、表单和移动导航的自动化测试。
- **建议**：至少增加静态 smoke test：检查三语页面 200、各语言 `html lang`、canonical/hreflang、主要锚点和 `mailto`；条件允许时加入 Playwright + axe 检查键盘导航和可访问性。

## 六、值得保留的优点

- 内容已集中在 `src/content/site-content.ts`，具备类型约束，适合持续增加服务和案例。
- GitHub Pages 静态导出配置清晰，`output: "export"`、`trailingSlash` 和 `images.unoptimized` 符合无服务端部署目标。
- 页面结构使用 `header`、`nav`、`main`、`section`、`footer`、`figure`、`form` 等语义元素，基础结构良好。
- 已提供 skip link、可见焦点状态、表单 label、键盘 Escape 关闭语言菜单和 reduced-motion 处理。
- 视觉系统已有明确观点：深色墨蓝、蓝紫强调、工程网格、状态线和流程节点比默认模板更有品牌方向。
- HeroArt 已从单纯装饰 SVG 升级为能够表达工作室交付方法的结构化信息模块，这是正确的品牌叙事方向。

## 七、推荐实施顺序

1. **先修 P1 国际化与无障碍**：正确输出静态 `html lang`，移除 Reveal 对 JS 的硬依赖，修正移动菜单焦点行为。
2. **修复工程检查链路**：迁移 `next lint` 到 ESLint CLI，并接入 CI。
3. **完成内容数据化**：把 HeroArt、联系表单、页脚和 aria 文案全部纳入三语内容模型。
4. **做一次响应式实机打磨**：重点测试 320px、375px、768px、1024px、1440px，以及 200% 字体缩放和键盘操作。
5. **再做视觉差异化**：减少装饰性“控制台”语言，增加真实案例缩略图、团队工作方式、技术栈证据或真实客户结果。
6. **最后做性能与视觉 polish**：去除无用 token、抽取局部颜色、避免 hover 布局变化，补充 smoke/a11y 回归测试。

## 八、验证记录

- `./node_modules/.bin/tsc --noEmit --incremental false`：通过。
- `npm run lint`：未通过；命令进入 `next lint` 交互式 ESLint 配置，且 Next 已提示该命令废弃。
- 静态输出检查：`out/index.html`、`out/es/index.html`、`out/zh-cn/index.html` 均存在；当前三页静态 HTML 的 `lang` 均为 `en`，验证了 P1 问题。
- 既有构建记录：最近一次 `NODE_OPTIONS="" npm run build` 已成功完成静态导出，包含 `/`、`/es`、`/zh-cn` 和 `sitemap.xml`。
