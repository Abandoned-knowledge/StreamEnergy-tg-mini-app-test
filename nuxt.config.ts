// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["~/app/css/normalize.css", "~/app/css/main.css"],
  srcDir: "src/",

  i18n: {
    vueI18n: '~~/i18n.config.ts',
  },

  dir: {
    layouts: "./app/layouts/",
  },

  imports: {
    dirs: [
      'app/composables',
      'shared/api',
      'shared/icons',
      'shared/types',
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      script: [
        {
          src: "https://telegram.org/js/telegram-web-app.js",
          defer: true,
        },
      ],
    },
  },
});