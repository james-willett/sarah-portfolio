// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sarah-portfolio.netlify.app', // Update this with actual domain later
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  image: {
    // Enable image optimization with Sharp service
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
