// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://amplifycreativelab.github.io",
  base: "/demo-local-trader/",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
