export default {
  head: {
    titleTemplate: '%s – Log1x',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Brandon Nifong, a full-stack developer and internet marketer.'
      },
      { property: 'og:image', content: '/android-chrome-512x512.png' },
      { property: 'og:locale', content: 'en-US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Brandon Nifong – Log1x' },
      {
        property: 'og:description',
        content: 'Brandon Nifong, a full-stack developer and internet marketer.'
      },
      { property: 'og:url', content: 'https://log1x.com' },
      { property: 'og:site_name', content: 'Log1x' },
      { name: 'twitter:site', content: '@log1x' },
      { name: 'twitter:title', content: 'Brandon Nifong – Log1x' },
      {
        name: 'twitter:description',
        content: 'Brandon Nifong, a full-stack developer and internet marketer.'
      },
      { name: 'twitter:url', content: 'https://log1x.com' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: '/android-chrome-512x512.png' },
      { name: 'msapplication-TileColor', content: '#8df1d3f' },
      { name: 'theme-color', content: '#8df1d3f' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#8d1d3f' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Fira+Code&display=swap'
      }
    ]
  },
  plugins: ['~/plugins/console.js'],
  modules: [],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  router: { base: '' },
  loading: { color: '#8d1d3f' },
  build: {
    extend(config, ctx) {
      //
    }
  }
}
