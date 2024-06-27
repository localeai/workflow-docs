export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },
  modules: ["@nuxt/fonts"],
  css: ['~/assets/styles/main.css'],
  fonts: {
    families: [{ name: "Inter", provider: "google" }],
  },
});
