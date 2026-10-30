import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'New Empire Docs',
  tagline: 'Explore as mecânicas, os mods e os guias do New Empire',
  favicon: 'img/favicon.ico',
  url: 'https://new-empire-docs.vercel.app',
  baseUrl: '/',
  organizationName: 'gabrielpgava',
  projectName: 'new-empire-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/gabrielpgava/new-empire-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/gabrielpgava/new-empire-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    image: 'img/LogoNewEmpire.png',
    navbar: {
      title: 'New Empire Docs',
      logo: {
        alt: 'New Empire',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {to: '/blog', label: 'Histórico', position: 'left'},
        {
          href: 'https://github.com/gabrielpgava/new-empire-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guias',
          items: [
            {label: 'Comece aqui', to: '/docs/intro'},
            {label: 'Comandos', to: '/docs/basico/comandos'},
            {label: 'Catálogo de mods', to: '/docs/explicacao-mods/catalogo'},
          ],
        },
        {
          title: 'Projeto',
          items: [
            {label: 'GitHub', href: 'https://github.com/gabrielpgava/new-empire-docs'},
            {label: 'Histórico', to: '/blog'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} New Empire. Documentação mantida pela comunidade.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
