import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sdawka.github.io",
  base: "/ximena",
  outDir: "dist",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
