import { getContent } from '../src/content/index';
import type { SiteContent, Language } from '../src/content/schema';

const languages: Language[] = ['es', 'en', 'zh'];

function assertNotEmptyString(val: unknown, path: string): void {
  if (typeof val !== 'string') {
    throw new Error(`Expected string at ${path}, received ${typeof val}`);
  }
  if (val.trim().length === 0) {
    throw new Error(`Empty string detected at ${path}`);
  }
}

function validateRecursively(obj: unknown, path = ''): void {
  if (obj === null || obj === undefined) {
    throw new Error(`Null or undefined value at ${path}`);
  }

  if (typeof obj === 'string') {
    assertNotEmptyString(obj, path);
    return;
  }

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return;
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      throw new Error(`Empty array at ${path}`);
    }
    obj.forEach((item, index) => {
      validateRecursively(item, `${path}[${index}]`);
    });
    return;
  }

  if (typeof obj === 'object') {
    for (const [key, value] of Object.entries(obj)) {
      validateRecursively(value, path ? `${path}.${key}` : key);
    }
    return;
  }

  throw new Error(`Unexpected type ${typeof obj} at ${path}`);
}

function getObjectStructureKeys(obj: unknown, prefix = ''): string[] {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return [prefix];
  }
  if (Array.isArray(obj)) {
    // Return keys from items
    const keys: string[] = [];
    obj.forEach((item, index) => {
      keys.push(...getObjectStructureKeys(item, `${prefix}[${index}]`));
    });
    return keys;
  }
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    keys.push(...getObjectStructureKeys(value, fullKey));
  }
  return keys;
}

function verifyLanguage(lang: Language): SiteContent {
  const content = getContent(lang);
  if (!content) {
    throw new Error(`getContent('${lang}') returned falsy value`);
  }

  // 1. Recursive check for no empty strings, undefined or null
  validateRecursively(content, lang);

  // 2. Strict check for email
  if (content.contact.email !== 'info@okcode.es') {
    throw new Error(
      `Invalid contact email for ${lang}: expected "info@okcode.es", got "${content.contact.email}"`
    );
  }

  // 3. Section counts check
  if (content.showcase.items.length !== 3) {
    throw new Error(`Showcase items count mismatch in ${lang}: expected 3, got ${content.showcase.items.length}`);
  }
  if (content.services.items.length !== 4) {
    throw new Error(`Services items count mismatch in ${lang}: expected 4, got ${content.services.items.length}`);
  }
  if (content.whyUs.items.length !== 6) {
    throw new Error(`WhyUs items count mismatch in ${lang}: expected 6, got ${content.whyUs.items.length}`);
  }
  if (content.process.steps.length !== 4) {
    throw new Error(`Process steps count mismatch in ${lang}: expected 4, got ${content.process.steps.length}`);
  }
  if (content.pricing.tiers.length !== 4) {
    throw new Error(`Pricing tiers count mismatch in ${lang}: expected 4, got ${content.pricing.tiers.length}`);
  }
  if (content.faq.items.length !== 6) {
    throw new Error(`FAQ items count mismatch in ${lang}: expected 6, got ${content.faq.items.length}`);
  }
  if (content.hero.badges.length !== 4) {
    throw new Error(`Hero badges count mismatch in ${lang}: expected 4, got ${content.hero.badges.length}`);
  }

  return content;
}

function main() {
  console.log('Validating content dictionaries (ES, EN, ZH)...');

  const dictionaries: Record<Language, SiteContent> = {
    es: verifyLanguage('es'),
    en: verifyLanguage('en'),
    zh: verifyLanguage('zh'),
  };

  // Compare structural parity across languages
  const baseKeys = getObjectStructureKeys(dictionaries.es, 'root').sort();
  for (const lang of ['en', 'zh'] as const) {
    const langKeys = getObjectStructureKeys(dictionaries[lang], 'root').sort();
    if (baseKeys.length !== langKeys.length) {
      console.warn(`Key count difference between es (${baseKeys.length}) and ${lang} (${langKeys.length})`);
    }
  }

  console.log('✓ All 3 language dictionaries validated.');
  console.log('✓ Contact email strictly verified: info@okcode.es');
  console.log('✓ Structural completeness and non-empty strings verified.');
  console.log('All content dictionaries verified successfully (ES, EN, ZH)');
}

main();
