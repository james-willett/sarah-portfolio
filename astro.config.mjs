// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Site configuration - navigation, featured projects, social links
export const siteConfig = {
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Design', href: '/design' },
    { label: 'Contact', href: '/contact' },
  ],
  featuredProjects: ['higloss-energy', 'ibm', 'shipped-products'],
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
    // Enable image optimization with Sharp service
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
