import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = {
    class:
      'text-sm antialiased leading-relaxed tracking-wider text-gray-200 bg-black font-fira'
  }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Code&display=swap'
  })

  head.script.push({
    src: 'https://kit.fontawesome.com/864d2ee3a6.js',
    crossorigin: 'anonymous'
  })
}
