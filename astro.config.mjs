import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.revocalc.com', // Forces www
  trailingSlash: 'always',          // Forces the trailing slash
  integrations: [sitemap()],
});
