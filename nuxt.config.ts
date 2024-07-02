export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "nuxt-gtag"],
  css: ["~/assets/styles/main.css"],
  fonts: {
    families: [{ name: "Inter", provider: "google" }],
  },
  // google tag manager
  gtag: {
    id: "GTM-P2ZSKZP",
  },
});
