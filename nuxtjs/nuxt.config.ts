export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-12-05",
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
});
