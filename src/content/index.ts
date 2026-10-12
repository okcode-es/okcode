import { esContent } from './es';
import { enContent } from './en';
import { zhContent } from './zh';
import type { Language, SiteContent } from './schema';

export * from './schema';
export { esContent, enContent, zhContent };

const contentMap: Record<Language, SiteContent> = {
  es: esContent,
  en: enContent,
  zh: zhContent,
};

export function getContent(lang: Language = 'es'): SiteContent {
  return contentMap[lang] || esContent;
}
