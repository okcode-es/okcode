import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APP_DIR = fs.existsSync(path.join(ROOT_DIR, 'out'))
  ? path.join(ROOT_DIR, 'out')
  : path.join(ROOT_DIR, '.next', 'server', 'app');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const LANGUAGES = ['es', 'en', 'zh'] as const;
type Language = (typeof LANGUAGES)[number];

const REQUIRED_ANCHORS = [
  'servicios',
  'proyectos',
  'ventajas',
  'proceso',
  'precios',
  'faq',
  'contacto',
];

interface CheckResult {
  category: string;
  name: string;
  passed: boolean;
  details?: string;
}

const results: CheckResult[] = [];

function check(
  category: string,
  name: string,
  fn: () => { passed: boolean; details?: string }
): void {
  try {
    const res = fn();
    results.push({ category, name, ...res });
  } catch (err) {
    results.push({
      category,
      name,
      passed: false,
      details: err instanceof Error ? err.message : String(err),
    });
  }
}

console.log('='.repeat(70));
console.log('OKCODE.ES - AUTOMATED PRODUCTION BUILD & AUDIT VERIFICATION');
console.log('='.repeat(70));
console.log(`Target build directory: ${APP_DIR}\n`);

// --------------------------------------------------------------------------
// 1. Build Artifacts & SSG Presence
// --------------------------------------------------------------------------
for (const lang of LANGUAGES) {
  check('Build Artifacts', `Static HTML for [${lang}] exists & non-empty`, () => {
    const htmlPath = path.join(APP_DIR, `${lang}.html`);
    if (!fs.existsSync(htmlPath)) {
      return { passed: false, details: `Missing file: ${htmlPath}` };
    }
    const stat = fs.statSync(htmlPath);
    if (stat.size < 50000) {
      return {
        passed: false,
        details: `File size too small: ${stat.size} bytes (expected > 50KB for complete SSG page)`,
      };
    }
    return { passed: true, details: `${(stat.size / 1024).toFixed(1)} KB` };
  });
}

check('Build Artifacts', 'Static robots.txt exists & valid content', () => {
  const robotsPath = fs.existsSync(path.join(APP_DIR, 'robots.txt.body'))
    ? path.join(APP_DIR, 'robots.txt.body')
    : path.join(APP_DIR, 'robots.txt');

  if (!fs.existsSync(robotsPath)) {
    return { passed: false, details: 'robots.txt build output not found' };
  }
  const content = fs.readFileSync(robotsPath, 'utf-8');
  if (!content.toLowerCase().includes('user-agent: *')) {
    return { passed: false, details: 'Missing User-agent directive' };
  }
  if (!content.includes('https://okcode.es/sitemap.xml')) {
    return { passed: false, details: 'Missing Sitemap directive' };
  }
  if (!content.includes('Host: https://okcode.es')) {
    return { passed: false, details: 'Missing Host directive' };
  }
  return { passed: true, details: 'Directives User-agent, Host, Sitemap confirmed' };
});

check('Build Artifacts', 'Static sitemap.xml exists & valid entries', () => {
  const sitemapPath = fs.existsSync(path.join(APP_DIR, 'sitemap.xml.body'))
    ? path.join(APP_DIR, 'sitemap.xml.body')
    : path.join(APP_DIR, 'sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    return { passed: false, details: 'sitemap.xml build output not found' };
  }
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const requiredLocs = [
    'https://okcode.es/',
    'https://okcode.es/en',
    'https://okcode.es/zh',
  ];
  for (const loc of requiredLocs) {
    if (!content.includes(`<loc>${loc}</loc>`)) {
      return { passed: false, details: `Missing loc entry: ${loc}` };
    }
  }
  if (!content.includes('hreflang="es"') || !content.includes('hreflang="x-default"')) {
    return { passed: false, details: 'Missing xhtml:link hreflang alternates in sitemap' };
  }
  return { passed: true, details: 'Contains entries for /, /en, /zh with hreflang alternates' };
});

check('Build Artifacts', 'Editorial 404 page exists (404.html or _not-found.html)', () => {
  const notFoundPath = fs.existsSync(path.join(APP_DIR, '404.html'))
    ? path.join(APP_DIR, '404.html')
    : path.join(APP_DIR, '_not-found.html');
  if (!fs.existsSync(notFoundPath)) {
    return { passed: false, details: 'Missing 404.html / _not-found.html' };
  }
  const stat = fs.statSync(notFoundPath);
  return { passed: true, details: `${(stat.size / 1024).toFixed(1)} KB` };
});

// Cache HTML files for subsequent checks
const htmlCache: Record<Language, string> = {
  es: '',
  en: '',
  zh: '',
};

for (const lang of LANGUAGES) {
  const htmlPath = path.join(APP_DIR, `${lang}.html`);
  if (fs.existsSync(htmlPath)) {
    htmlCache[lang] = fs.readFileSync(htmlPath, 'utf-8');
  }
}

// --------------------------------------------------------------------------
// 2. SEO, Canonical URLs, and Hreflang Alternates
// --------------------------------------------------------------------------
for (const lang of LANGUAGES) {
  const html = htmlCache[lang];

  check('SEO & Alternates', `[${lang}] <html lang="${lang}"> attribute`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };
    const langAttrRegex = new RegExp(`<html[^>]*lang=["']${lang}["']`, 'i');
    if (!langAttrRegex.test(html)) {
      return { passed: false, details: `HTML tag does not have lang="${lang}"` };
    }
    return { passed: true };
  });

  check('SEO & Alternates', `[${lang}] Canonical URL points to correct route`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };
    const expectedCanonical =
      lang === 'es' ? 'https://okcode.es' : `https://okcode.es/${lang}`;
    
    // Canonical link tag
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
      html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);

    if (!canonicalMatch) {
      return { passed: false, details: 'Missing <link rel="canonical">' };
    }

    const actual = canonicalMatch[1].replace(/\/$/, '');
    const expected = expectedCanonical.replace(/\/$/, '');
    if (actual !== expected) {
      return {
        passed: false,
        details: `Canonical mismatch: expected ${expected}, got ${actual}`,
      };
    }
    return { passed: true, details: actual };
  });

  check('SEO & Alternates', `[${lang}] All 4 hreflang alternates present (es, en, zh, x-default)`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };

    const hreflangs: Record<string, string> = {
      es: 'https://okcode.es',
      en: 'https://okcode.es/en',
      zh: 'https://okcode.es/zh',
      'x-default': 'https://okcode.es',
    };

    for (const [code, expectedUrl] of Object.entries(hreflangs)) {
      // Look for hreflang tag (case-insensitive on hrefLang attribute in Next.js JSX)
      const regex = new RegExp(
        `<link[^>]*rel=["']alternate["'][^>]*href[Ll]ang=["']${code}["'][^>]*href=["']([^"']+)["']|<link[^>]*href[Ll]ang=["']${code}["'][^>]*href=["']([^"']+)["'][^>]*rel=["']alternate["']|<link[^>]*href=["']([^"']+)["'][^>]*href[Ll]ang=["']${code}["']`,
        'i'
      );
      const match = html.match(regex);
      if (!match) {
        return { passed: false, details: `Missing hreflang link for ${code}` };
      }
      const foundHref = (match[1] || match[2] || match[3] || '').replace(/\/$/, '');
      const cleanExpected = expectedUrl.replace(/\/$/, '');
      if (foundHref !== cleanExpected) {
        return {
          passed: false,
          details: `Hreflang ${code} points to ${foundHref}, expected ${cleanExpected}`,
        };
      }
    }

    return { passed: true, details: 'es, en, zh, x-default verified' };
  });

  check('SEO & Contact', `[${lang}] info@okcode.es verified & no placeholder emails`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };
    if (!html.includes('info@okcode.es')) {
      return { passed: false, details: 'Missing authoritative contact email: info@okcode.es' };
    }
    if (!html.includes('mailto:info@okcode.es')) {
      return { passed: false, details: 'Missing mailto:info@okcode.es hyperlink' };
    }
    const forbiddenPlaceholders = ['example.com', 'test@', 'dummy', 'yourname@', 'user@'];
    for (const placeholder of forbiddenPlaceholders) {
      if (html.includes(placeholder)) {
        return { passed: false, details: `Found placeholder email/domain: "${placeholder}"` };
      }
    }
    return { passed: true, details: 'info@okcode.es present in Schema and mailto links' };
  });
}

// --------------------------------------------------------------------------
// 3. Schema.org JSON-LD Verification
// --------------------------------------------------------------------------
for (const lang of LANGUAGES) {
  const html = htmlCache[lang];

  check('Schema.org JSON-LD', `[${lang}] ProfessionalService schema valid`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };

    const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
    let match;
    let profService: Record<string, unknown> | null = null;

    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed['@type'] === 'ProfessionalService') {
          profService = parsed;
          break;
        }
      } catch {
        // Continue searching
      }
    }

    if (!profService) {
      return { passed: false, details: 'ProfessionalService JSON-LD script not found or invalid JSON' };
    }

    if (profService.name !== 'OKCODE') {
      return { passed: false, details: `Invalid organization name: ${profService.name}` };
    }
    if (profService.url !== 'https://okcode.es') {
      return { passed: false, details: `Invalid url: ${profService.url}` };
    }
    if (profService.email !== 'info@okcode.es') {
      return { passed: false, details: `Invalid email: ${profService.email}` };
    }

    const address = profService.address as Record<string, unknown> | undefined;
    if (!address || address.addressLocality !== 'Madrid' || address.addressCountry !== 'ES') {
      return { passed: false, details: 'Address must be Madrid, ES' };
    }

    const offerCatalog = profService.hasOfferCatalog as Record<string, unknown> | undefined;
    const items = offerCatalog?.itemListElement as unknown[] | undefined;
    if (!Array.isArray(items) || items.length < 4) {
      return { passed: false, details: `OfferCatalog must have >= 4 services, found ${items?.length}` };
    }

    return {
      passed: true,
      details: `name=${profService.name}, email=${profService.email}, services=${items.length}`,
    };
  });

  check('Schema.org JSON-LD', `[${lang}] FAQPage schema valid`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };

    const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
    let match;
    let faqSchema: Record<string, unknown> | null = null;

    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed['@type'] === 'FAQPage') {
          faqSchema = parsed;
          break;
        }
      } catch {
        // Continue searching
      }
    }

    if (!faqSchema) {
      return { passed: false, details: 'FAQPage JSON-LD script not found or invalid JSON' };
    }

    const mainEntity = faqSchema.mainEntity as unknown[] | undefined;
    if (!Array.isArray(mainEntity) || mainEntity.length < 4) {
      return {
        passed: false,
        details: `FAQPage mainEntity must have >= 4 Q&As, found ${mainEntity?.length}`,
      };
    }

    for (let i = 0; i < mainEntity.length; i++) {
      const q = mainEntity[i] as {
        '@type': string;
        name: string;
        acceptedAnswer: { '@type': string; text: string };
      };
      if (q['@type'] !== 'Question' || !q.name || q.name.trim().length === 0) {
        return { passed: false, details: `FAQ item #${i} has invalid question` };
      }
      if (
        !q.acceptedAnswer ||
        q.acceptedAnswer['@type'] !== 'Answer' ||
        !q.acceptedAnswer.text ||
        q.acceptedAnswer.text.trim().length === 0
      ) {
        return { passed: false, details: `FAQ item #${i} has invalid answer` };
      }
    }

    return { passed: true, details: `${mainEntity.length} Q&A items validated` };
  });
}

// --------------------------------------------------------------------------
// 4. Anchor IDs & Navigation Integrity
// --------------------------------------------------------------------------
for (const lang of LANGUAGES) {
  const html = htmlCache[lang];

  check('Navigation & Anchors', `[${lang}] All 7 required section IDs exist`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };

    const missingAnchors: string[] = [];
    for (const anchor of REQUIRED_ANCHORS) {
      const idPattern = new RegExp(`id=["']${anchor}["']`, 'i');
      if (!idPattern.test(html)) {
        missingAnchors.push(anchor);
      }
    }

    if (missingAnchors.length > 0) {
      return {
        passed: false,
        details: `Missing section anchor IDs: ${missingAnchors.join(', ')}`,
      };
    }
    return { passed: true, details: REQUIRED_ANCHORS.join(', ') };
  });

  check('Navigation & Anchors', `[${lang}] In-page hash links resolve to valid IDs`, () => {
    if (!html) return { passed: false, details: 'HTML file missing' };

    // Find all href="#target" or href="#target?param=val"
    const hashRegex = /href=["']#([^"'?#]+)(?:\?[^"']*)?["']/gi;
    const brokenLinks: string[] = [];
    let match;

    while ((match = hashRegex.exec(html)) !== null) {
      const targetId = match[1];
      if (targetId && targetId !== '') {
        const idPattern = new RegExp(`id=["']${targetId}["']`, 'i');
        if (!idPattern.test(html)) {
          brokenLinks.push(`#${targetId}`);
        }
      }
    }

    const uniqueBroken = Array.from(new Set(brokenLinks));
    if (uniqueBroken.length > 0) {
      return {
        passed: false,
        details: `Broken in-page anchor links: ${uniqueBroken.join(', ')}`,
      };
    }
    return { passed: true, details: 'All hash navigation targets resolve properly' };
  });
}

// --------------------------------------------------------------------------
// 5. Static Assets Existence in /public
// --------------------------------------------------------------------------
check('Static Assets', 'Public assets referenced in metadata exist', () => {
  const criticalAssets = [
    'ok-logo-mark.webp',
    'favicon.svg',
    'favicon.png',
    'apple-touch-icon.png',
    'og.svg',
    'site.webmanifest',
    'images/showcase/restaurant.webp',
    'images/showcase/fashion.webp',
    'images/showcase/service.webp',
  ];

  const missingAssets: string[] = [];
  for (const asset of criticalAssets) {
    const fullPath = path.join(PUBLIC_DIR, asset);
    if (!fs.existsSync(fullPath)) {
      missingAssets.push(asset);
    }
  }

  if (missingAssets.length > 0) {
    return { passed: false, details: `Missing public assets: ${missingAssets.join(', ')}` };
  }
  return { passed: true, details: `${criticalAssets.length} critical assets present` };
});

// --------------------------------------------------------------------------
// Summary and Report
// --------------------------------------------------------------------------
console.log('Test Results by Category:\n');

const categories = Array.from(new Set(results.map((r) => r.category)));
let totalPassed = 0;
let totalFailed = 0;

for (const cat of categories) {
  console.log(`[${cat}]`);
  const catResults = results.filter((r) => r.category === cat);
  for (const r of catResults) {
    if (r.passed) {
      totalPassed++;
      const detailStr = r.details ? ` (${r.details})` : '';
      console.log(`  ✓ PASS: ${r.name}${detailStr}`);
    } else {
      totalFailed++;
      console.log(`  ✗ FAIL: ${r.name} -> ${r.details}`);
    }
  }
  console.log('');
}

console.log('='.repeat(70));
console.log(`SUMMARY: ${totalPassed} PASSED, ${totalFailed} FAILED (${totalPassed + totalFailed} Total Checks)`);
console.log('='.repeat(70));

if (totalFailed > 0) {
  console.error(`\nBuild verification failed with ${totalFailed} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll build, metadata, schema, and routing checks PASSED with 100% success!');
  process.exit(0);
}
