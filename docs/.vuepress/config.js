const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Document Processing Group',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: './',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Projects',
        link: '/projects/',
      },
      {
        text: 'Research',
        link: '/research/',
      },
      {
        text: 'People',
        link: '/people/',
      },
      {
        text: 'Scanner Group Legacy Site',
        link: 'http://web.mit.edu/profit/home.html'
      }
    ],
    sidebar: {
      '/projects/': [
        {
          title: 'Projects',
          collapsable: false,
          children: [
            '',
            'form-processing',
            'robust-preprocessing',
            'key-value-pair-extraction'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
