// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkEncadres from './src/remark-plugins/remark-encadres.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://hydrodidac.com',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkEncadres],
  },
});
