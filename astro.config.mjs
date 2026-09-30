import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { publishedLocales } from "./src/data/locales.ts";

const localePrefixes = new Set(["ja", "ko", "zh-hant", "es", "pt-br", "ru", "de", "fr", "ar"]);

export default defineConfig({
  site: "https://spicychatai.fun",
  output: "static",
  outDir: "./dist/client",
  trailingSlash: "always",
  integrations: [sitemap({
    filter: (url) => {
      const prefix = new URL(url).pathname.split("/")[1];
      return !localePrefixes.has(prefix) || publishedLocales.includes(prefix);
    },
  })],
  build: { format: "directory" },
});
