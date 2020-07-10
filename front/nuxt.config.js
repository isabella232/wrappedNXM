/* eslint-disable no-console */
const modifyHtml = (html) => {
  return html.replace(/data-n-head=""|data-n-head="true"/g, '')
}

const modules = [
  ['nuxt-buefy', { css: false, materialDesignIcons: false }],
  ['nuxt-validate', { events: '' }]
]

export default {
  mode: 'spa',
  render: { resourceHints: false },
  /*
  ** Headers of the page
  */
  hooks: {
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'wNXM Token',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'wNXM Token' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'wNXM Token'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'wNXM Token'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://erc20faucet.com'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://erc20faucet.com/fb.png'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'wNXM Token'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'wNXM Token'
      }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'apple-touch-icon-180x180.png' },
      { rel: 'apple-touch-icon', href: 'apple-touch-icon-180x180.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,600,700'
      }
    ],
    script: [{
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: ''
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  // ...routerBase,
  // router: {
  //   base: '/erc20faucet/'
  // },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/styles.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */

  /*
  ** Nuxt.js modules
  */
  modules,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
