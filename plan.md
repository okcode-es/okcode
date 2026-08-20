# okcode.es 官网重建实施计划

## 当前检查结论
- 工作区项目：`C:\Users\Lwh77\Desktop\workspace\okcode`
- 当前技术栈不是 Next.js，而是 Astro 5 + Starlight；现有 `package.json` 无 React/Next/TypeScript 直接依赖。
- 现有构建脚本：`npm run dev`、`npm run build`、`npm run preview`。
- 现有 GitHub Pages 流程：`.github/workflows/deploy.yml` 使用 `withastro/action@v5` 构建并用 `actions/deploy-pages@v4` 发布；`main` push 和手动触发；`public/CNAME` 为 `okcode.es`。
- 当前工作区干净，分支为 `main`，本次已确认目标为当前本地远程 `https://github.com/okcode-es/okcode_es.git`。
- 当前内容主要是 Starlight 文档页、旧教程/生活内容和自定义 Header/Hero/Footer；现有三语 locale 为英语根路径、`/zh-cn/`、`/es/`。
- 已发现旧链接、背景资源引用、第三方配置硬编码等遗留问题。重建后将以新官网结构替代，不继续保留失效内容入口。

## 推荐实施方案（目标仓库已确认，可进入实施）
1. **安全重建边界**
   - 在确认目标仓库后清理旧 Astro/Starlight 应用源码与依赖，但保留 Git 元数据、`.github/workflows/deploy.yml` 的 GitHub Pages 发布职责、`public/CNAME`，并将 workflow 的构建 action 改为适配 Next.js 静态导出的官方/稳定构建方式；不引入服务端运行时。
   - 新增/保留 `README.md`、`.gitignore`、Node 版本约束和可重复的 npm lockfile。

2. **Next.js 静态架构**
   - 使用 Next.js App Router + React + TypeScript。
   - `next.config.ts` 配置 `output: 'export'`、`trailingSlash: true`、必要的静态资源策略；不使用 API routes、Server Actions、动态服务端数据或图片优化服务。
   - 以可复用布局和 section 组件构建单页官网，并为服务、案例等内容预留可扩展的数据模型。

3. **三语内容与路由**
   - 采用显式静态路由：`/`（英文默认）、`/es/`、`/zh-cn/`，每个语言页均生成完整 SEO 元数据和可直接访问的静态 HTML。
   - 在 `src/content/site-content.ts`（或同等单一数据层）维护 `en`、`es`、`zh-CN` 文案、服务、案例、优势、流程、评价和联系信息；组件只消费类型化数据，避免三份结构重复。
   - 语言切换使用清晰可见、键盘可操作、移动端友好的 `<select>`/菜单，切换到对应语言首页；导航锚点和 CTA 在三语中保持一致。

4. **页面与组件结构**
   - `src/app/[locale]/page.tsx`（或等效显式页面）组织：首页 Hero、工作室介绍、服务总览、项目案例、工作室优势、合作流程、客户评价、联系咨询入口。
   - 可复用组件：`SiteHeader`、`LanguageSwitcher`、`Hero`、`SectionHeading`、`ServiceCard`、`ProjectCard`、`ProcessSteps`、`TestimonialCard`、`ContactPanel`、`SiteFooter`。
   - 通过类型化数组支持后续新增服务/案例/语言，示例数据明确标注为可替换内容。

5. **视觉与体验**
   - 按用户确认的“编辑杂志感 + 轻工业技术感”实现：米白/深墨基底，暖红或橙色重点色，强排版层级、网格/几何线条和少量克制动效；避免通用深色科技渐变、万物圆角卡片和无意义发光。
   - 使用独特展示字体与可读正文字体的系统/本地回退栈，流式字号和间距；响应式覆盖移动、平板、桌面。
   - 遵循 WCAG 基础要求：语义 HTML、明显焦点态、对比度、跳过链接、`prefers-reduced-motion`、移动端触控尺寸、图片 alt。

6. **静态联系与 SEO**
   - 联系入口仅使用 `mailto:`、`tel:`、WhatsApp/社交链接等静态链接，不提交到服务端；示例联系信息集中在内容数据层并标注替换位置。
   - 使用 Next Metadata 生成 title、description、Open Graph、Twitter、canonical、语言 alternates；静态生成 sitemap/robots（或以 public 静态文件实现），保留 `CNAME`。
   - 所有图片从 `public/` 或静态可打包资源引用，避免运行时外部依赖和错误绝对路径。

7. **验证与交付**
   - 安装依赖后执行类型检查、lint（如配置）、生产构建和静态导出检查。
   - 本地预览 `out/`，核验三语言首页、导航/CTA、锚点、语言切换、SEO 文件、资源路径和移动布局；必要时做基础链接扫描。
   - 检查 GitHub Actions YAML、Node 版本、artifact 目录与 Pages 部署兼容性；最终汇总修改文件、构建/测试结果和剩余可替换示例信息。

## 执行前提
- 已确认修改当前本地仓库及其远程 `okcode_es.git`。
- 进入实施后，先保留并核对 GitHub Pages 发布职责与 `public/CNAME`，再清理旧 Astro/Starlight 应用代码。