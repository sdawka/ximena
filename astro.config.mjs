import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "dist",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
