/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        // Semantic colors for light/dark mode (matching Sarah's Figma specs from global.css)
        background: {
          DEFAULT: '#F8F8F8', // Light mode (matches Figma gradient base)
          dark: '#1A1A1A', // Dark mode
        },
        foreground: {
          DEFAULT: '#3F3F3F', // Light mode text (Figma spec)
          dark: '#F5F5F5', // Dark mode text (Figma spec)
        },
        muted: {
          DEFAULT: '#6B6B6B', // Light mode secondary text (Figma spec)
          dark: '#9CA3AF', // Dark mode secondary text (Figma spec)
        },
        border: {
          DEFAULT: '#E5E5E5', // Light mode borders (Figma spec)
          dark: '#374151', // Dark mode borders (Figma spec)
        },
        accent: {
          DEFAULT: '#3F3F3F', // Matches primary text color (Figma spec)
          dark: '#F5F5F5', // Dark mode accent (Figma spec)
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
