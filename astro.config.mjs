import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { unified } from "@astrojs/markdown-remark";
import { remarkBasePath } from "./src/lib/remark-base-path.mjs";

export default defineConfig({
  site: "https://kazukiyoshida.github.io",
  integrations: [react()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkBasePath] }),
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
