import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ximena.uk",
  base: "/",
  outDir: "dist",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
