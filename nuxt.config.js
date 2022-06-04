require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    strapiBaseUrl: process.env.strapiBaseUrl || 'https://admin.hei.ninja',
    GMAP_API_KEY: process.env.GMAP_API_KEY
  },
  head: {
    title: 'Hei Yeung: Web Developer',
    htmlAttrs: {
      lang: 'zh-HK'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Developer Portfolio' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author', name: 'author', content: 'Hei Yeung' },
      { hid: 'keywords', name: 'keywords', content: 'Web Developer, Portfolio' },
      { hid: 'robots', name: 'robots', content: 'index,follow,noodp' },
      { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
      { hid: 'subject', name: 'subject', content: 'Web Developer Portfolio' },
      { hid: 'url', name: 'url', content: 'http://portfolio.hei.ninja' },
      { hid: 'geo.placename', name: 'geo.placename', content: 'Hong Kong' },
      { hid: 'geo.region', name: 'geo.region', content: 'CN-HK' },
      { hid: 'geo.position', name: 'geo.position', content: '22.360673;114.125612' },
      { hid: 'ICBM', name: 'ICBM', content: '22.360673, 114.125612' },
      { hid: 'reply-to', name: 'reply-to', content: 'shinghei.yeung@gmail.com' },
      { hid: 'topic', name: 'topic', content: 'Web Developer Portfolio' },
      { hid: 'classification', name: 'classification', content: 'Web Development' },
      { hid: 'category', name: 'category', content: 'Web Development' },
      { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
      { hid: 'accept-language', name: 'accept-language',' http-equiv':'accept-language', content: 'en, zh-HK' },
      { hid: 'content-language', name: 'content-language',' http-equiv':'content-language', content: 'en, zh-HK' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/icos/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png',sizes: '180x180', href: '/icos/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png',sizes: '32x32', href: '/icos/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png',sizes: '16x16', href: '/icos/favicon-16x16.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css',
    // '~/assets/main.min.css',
    // '~/assets/atom-one-dark.min.css',
    '~/node_modules/boxicons/css/boxicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'service',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-resolve-url-loader',
    '@nuxt/image',
    //['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }],
    ['nuxt-gmaps', {
      key: process.env.GMAP_API_KEY,
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  

}
