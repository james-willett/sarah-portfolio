/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        // Semantic colors for light/dark mode
        background: {
          DEFAULT: '#FFFFFF', // Light mode
          dark: '#0A0A0A', // Dark mode
        },
        foreground: {
          DEFAULT: '#1A1A1A', // Light mode text
          dark: '#FFFFFF', // Dark mode text
        },
        muted: {
          DEFAULT: '#6B7280', // Light mode secondary text
          dark: '#9CA3AF', // Dark mode secondary text
        },
        border: {
          DEFAULT: '#E5E7EB', // Light mode borders
          dark: '#374151', // Dark mode borders
        },
        accent: {
          DEFAULT: '#000000',
          dark: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      maxWidth: {
        content: '72rem', // 1152px - max content width
      },
    },
  },
  plugins: [],
};
