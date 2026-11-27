import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://revocalc.com',
  trailingSlash: 'always', // Forces consistent URLs (e.g., /tools/debt/ instead of /tools/debt)
  integrations: [sitemap()],
});
