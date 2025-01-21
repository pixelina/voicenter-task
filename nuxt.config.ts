// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
compatibilityDate: '2024-11-01',
devtools: { enabled: true },

  ssr: false, 
  app: {
    baseURL: '/voicenter-task/', 
    head: {
      title: 'VoicenterTask',
    },
  },

  css: [
    "@/assets/scss/tailwind.css",
    "@/assets/scss/global.scss"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/fonts/_fonts.scss" as *;
            @use "@/assets/scss/utils/_variables.scss" as *; 
          `,
        },
      },
    },
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  modules: ['@pinia/nuxt'],
})
