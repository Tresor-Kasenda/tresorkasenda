// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import service from 'astro/assets/services/squoosh';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://tresorkasenda.vercel.app",
  prefetch: {
    prefetchAll: true
  }
});