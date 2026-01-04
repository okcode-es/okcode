import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightScrollToTop from 'starlight-scroll-to-top';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://okcode.es',
  integrations: [
      starlight({
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
              root: { label: 'English', lang: 'en' },
              'zh-cn': { label: '简体中文', lang: 'zh-CN' },
              es: { label: 'Español', lang: 'es' },
          },
          title: 'okcode',
          //logo: {
          //  src: './src/assets/logo.svg',
            //replacesTitle: false, 
          //},
          routeMiddleware: './src/routeData.ts',
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/okcode-es' },
              { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/okcode_' }
          ],
          sidebar: [
              {
                  label: 'Tutorials',
				  translations: {
					'zh-cn': '教程',
					'es': 'Tutoriales'
				},
                  autogenerate: { directory: 'guides' },
              },
              {
                  label: 'Services',
				    translations: {
					'zh-cn': '开发服务',
					'es': 'Servicios de Desarrollo'
				},
                  autogenerate: { directory: 'reference' },
              },
          ],
          customCss: [
              './src/styles/global.css',
          ],
          components: {
            Header: './src/components/CustomHeader.astro',
            Hero: './src/components/CustomHero.astro',
            Footer: './src/components/CustomFooter.astro',
          },
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

  vite: {
    plugins: [tailwindcss()],
  },
});