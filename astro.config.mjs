import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightScrollToTop from 'starlight-scroll-to-top';

export default defineConfig({
    site: 'https://okcode.es',
    // ❌ 这里的 head 是无效的，请删除或移走
    integrations: [
        starlight({
            // ✅ head 必须放在 starlight 的配置对象里
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://www.googletagmanager.com/gtag/js?id=G-G63MSQ1CCE',
                        async: true,
                    },
                },
                {
                    tag: 'script',
                    content: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-G63MSQ1CCE');

                        // 职业建议：添加路由监听以支持 SPA 跳转统计
                        document.addEventListener('astro:page-load', () => {
                            gtag('config', 'G-G63MSQ1CCE', {
                                page_path: window.location.pathname,
                            });
                        });
                    `,
                },
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2072750546202515',
                        async: true,
                        crossorigin: 'anonymous',
                    },
                },
            ],
            defaultLocale: 'root',
            locales: {
                root: { label: '简体中文', lang: 'zh-CN' },
                en: { label: 'English', lang: 'en' },
                es: { label: 'Español', lang: 'es' },
            },
            title: 'okcode',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/okcode-es' },
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