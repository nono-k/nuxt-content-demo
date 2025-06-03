// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'Nuxt Content Demo',
    }
  },

  css: ['@/styles/styles.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/mixin.scss";',
        }
      }
    }
  },

  nitro: {
    preset: 'cloudflare-pages'
  }
});
