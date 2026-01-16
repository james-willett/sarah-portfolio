/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Semantic colors matching Sarah's Figma specs from global.css
        background: {
          DEFAULT: '#F8F8F8', // Matches Figma gradient base
        },
        foreground: {
          DEFAULT: '#3F3F3F', // Text color (Figma spec)
        },
        muted: {
          DEFAULT: '#6B6B6B', // Secondary text (Figma spec)
        },
        border: {
          DEFAULT: '#E5E5E5', // Borders (Figma spec)
        },
        accent: {
          DEFAULT: '#3F3F3F', // Matches primary text color (Figma spec)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['PP Radio Grotesk', 'system-ui', 'sans-serif'],
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
