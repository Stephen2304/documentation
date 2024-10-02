// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Residat API Documentation',
  tagline: 'Gestion des risques climatiques pour les communautés au Cameroun',
  favicon: 'img/favicon.ico',

  url: 'http://localhost:3000',  // Remplace avec l'URL de ton site
  baseUrl: "/C:/laragon/www/residat-api-doc/build/",

  organizationName: 'Residat',
  projectName: 'residat-api-doc',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',  // Changer la langue par défaut en français
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Map-Rank/residat-back-end/tree/main/documentation/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Map-Rank/residat-back-end/tree/main/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Residat API Documentation',
      logo: {
        alt: 'Residat Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Map-Rank/residat-back-end',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'API',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Map-Rank/residat-back-end',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/residat',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Residat, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};


export default config;
