// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Site configuration - navigation, featured projects, social links
export const siteConfig = {
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Design', href: '/design' },
    // TODO: Update 'Thinking' href to point to Sarah's external blog/thinking site
    // Current placeholder: /thinking (local page)
    // Future: Replace with actual external URL (e.g., 'https://thinking.sarah.design')
    { label: 'Thinking', href: '/thinking' },
    { label: 'Contact', href: '/contact' },
  ],
  social: {
    linkedin: 'https://linkedin.com/in/sarah',
    dribbble: 'https://dribbble.com/sarah',
    email: 'hello@sarah.design',
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://sarah-portfolio.netlify.app', // Update this with actual domain later
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  image: {
    // Use Sharp for image optimization
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
