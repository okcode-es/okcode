import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: "out" directory does not exist. Run "next build" first.');
  process.exit(1);
}

// 1. Ensure root index.html exists from es.html (default language for okcode.es)
const esHtml = path.join(outDir, 'es.html');
const indexHtml = path.join(outDir, 'index.html');

if (fs.existsSync(indexHtml)) {
  console.log('✓ Verified out/index.html for root route (https://okcode.es/)');
} else if (fs.existsSync(esHtml)) {
  fs.copyFileSync(esHtml, indexHtml);
  console.log('✓ Created out/index.html from es.html (https://okcode.es/)');
} else {
  console.warn('Warning: neither out/index.html nor out/es.html found');
}

// 2. Ensure /es/, /en/, /zh/ directories have index.html for strict static hosting
for (const lang of ['es', 'en', 'zh']) {
  const langHtml = path.join(outDir, `${lang}.html`);
  const langDir = path.join(outDir, lang);
  if (fs.existsSync(langHtml)) {
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }
    fs.copyFileSync(langHtml, path.join(langDir, 'index.html'));
    console.log(`✓ Created out/${lang}/index.html for https://okcode.es/${lang}/`);
  }
}

// 3. Ensure CNAME is verified in out directory
const cnamePath = path.join(outDir, 'CNAME');
if (fs.existsSync(cnamePath)) {
  console.log(`✓ Verified CNAME: ${fs.readFileSync(cnamePath, 'utf8').trim()}`);
}

console.log('✓ Static export preparation complete for GitHub Pages deployment.');
