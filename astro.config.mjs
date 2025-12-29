import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightScrollToTop from 'starlight-scroll-to-top';

export default defineConfig({
	site: 'https://okcode.es',
	integrations: [
		starlight({
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
				en: { label: 'English', lang: 'en' },
				es: { label: 'Español',lang: 'es' },
			},
			title: 'okcode',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/okcode-es' },
			{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/okcode_' }
			],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				starlightDocSearch({
				appId: 'RGT6K369RP',
				apiKey: '5547540b5fb5ecae5c37cb6f142de6a5',
				indexName: 'okcode',
				}),
				starlightScrollToTop(),
			],
		}),
	],
});
