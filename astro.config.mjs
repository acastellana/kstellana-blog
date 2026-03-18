import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.kstellana.com',
  integrations: [sitemap()],
  output: 'static',
});
