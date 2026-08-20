# OKCODE

A trilingual (中文 / Español / English) studio website for **OKCODE**, a Spain-based
software development studio. Built with **Next.js (App Router) + React + TypeScript**
and deployed as a **fully static site on GitHub Pages** — no server runtime.

## Highlights

- **Static export** — `output: 'export'`, `trailingSlash: true`, unoptimized images.
  Nothing is sent to or read from a server at runtime.
- **Three languages, one data layer** — all copy lives in
  `src/content/site-content.ts`. Components consume typed content only, so adding a
  service, case study, or even a new language means editing data, not markup.
- **Clean URL structure** — `/` (English), `/es/`, `/zh-cn/`, each with its own
  `title`, `description`, `canonical`, `hreflang` alternates, and Open Graph tags.
- **Accessible & responsive** — semantic HTML, skip link, keyboard-operable language
  switcher, visible focus states, `prefers-reduced-motion` support, mobile-first layout.
- **Dark systems-studio design** — deep ink-blue surfaces, restrained blue/violet
  accents, technical grid, status signals, responsive cards, and purposeful motion.
  All styling lives in `src/app/globals.css`; the design context is documented in
  `.impeccable.md`.

## Project structure

```
src/
  app/
    (en)/layout.tsx   # English root document shell, static lang="en"
    (en)/page.tsx     # English home (/)
    (en)/sitemap.ts   # generated sitemap.xml with hreflang
    (es)/layout.tsx   # Spanish root document shell, static lang="es"
    (es)/es/page.tsx  # Spanish home (/es/)
    (zh-cn)/layout.tsx # Chinese root document shell, static lang="zh-CN"
    (zh-cn)/zh-cn/page.tsx # Chinese home (/zh-cn/)
    globals.css       # design system
  components/         # DocumentShell, Header, Hero, LanguageSwitcher, …
  content/site-content.ts  # ALL trilingual copy + sample data + UI labels
  lib/i18n.ts         # locale config + routing helpers
  lib/seo.ts          # per-locale metadata builder
  lib/root-metadata.ts # shared root metadata
public/               # CNAME, robots.txt, favicon.svg, og.svg, ads.txt
.github/workflows/deploy.yml  # GitHub Pages build + deploy
```

## Develop & build

```bash
npm install
npm run dev        # local dev server (http://localhost:3000)
npm run build      # static export -> ./out
npm run typecheck  # tsc --noEmit
```

> Note: after changing App Router layouts or route groups, stop the running dev server
> before restarting it. If the browser shows the page without CSS, remove the generated
> `.next` cache and run `NODE_OPTIONS="" npm run dev` again. This is a development cache
> issue; the source stylesheet is imported by each locale root layout and is included in
> the static production build.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs deps, runs
`next build`, and publishes `./out` to GitHub Pages. The custom domain `okcode.es` is
preserved via `public/CNAME`. No `basePath` is needed because of the custom domain.

## Replacing sample content

The following are **clearly marked placeholders** — replace with real data:

- `src/content/site-content.ts` → `sampleContact` (email, phone, WhatsApp, address, socials).
- Project case studies (`projects.items`) and testimonials (`testimonials.items`) carry
  `placeholder: true` and a visible "Sample" note in the UI.
- Brand tagline / stats in `studio.stats` are illustrative.
