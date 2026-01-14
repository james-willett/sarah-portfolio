# Sarah's Portfolio Website - Technical Specification

> **Last Updated:** 2026-01-13
> **Status:** Finalized after stakeholder interview
> **Deadline:** 2-3 weeks (hard deadline)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Interview Summary - Key Decisions](#interview-summary---key-decisions)
3. [Tech Stack](#tech-stack)
4. [Site Structure](#site-structure)
5. [Project Architecture](#project-architecture)
6. [Content Management](#content-management)
7. [Design System](#design-system)
8. [Feature Specifications](#feature-specifications)
9. [Performance & Accessibility](#performance--accessibility)
10. [Development Setup](#development-setup)
11. [Deployment Strategy](#deployment-strategy)
12. [Implementation Phases](#implementation-phases)
13. [Testing & Validation](#testing--validation)
14. [Success Criteria](#success-criteria)

---

## Project Overview

Build a production-ready portfolio website for Sarah (UX Designer) that:
- Showcases her design work with custom thumbnail artwork
- Provides contact options (form + social links)
- Supports dark mode with polished experience
- Is easy for Sarah to maintain via markdown/MDX files

**Design Aesthetic:** Minimal & clean (Apple/Stripe style) with lots of whitespace, simple typography, and content-focused layouts.

---

## Interview Summary - Key Decisions

### Content & Case Studies
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Case study images | **Hybrid approach** | Hero image + key visuals inline, optional gallery for additional screenshots |
| Project thumbnails | **Full custom thumbnails** | Sarah provides custom-designed thumbnail images per project |
| Case study structure | **Suggested template** | Sample files show recommended headings, but schema doesn't enforce them |
| Rich embeds | **MDX with components** | .mdx files allow importing custom Astro components (Figma, video, etc.) |
| Draft handling | **Dev-only preview** | Unpublished content visible in dev mode, excluded from production |

### Navigation & Layout
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Mobile navigation | **Condensed top nav** | Shrink text/spacing to fit all items - keeps pill-button aesthetic |
| Nav flexibility | **Config-driven** | Nav items from astro.config.mjs - Sarah can add pages without code |
| Tag behavior | **Dedicated tag pages** | Each tag gets its own page (e.g., /tags/ux-design) |
| Tag handling | **Normalized slugs** | Tags normalized to slugs, displayed with proper casing from first use |


### Design & UX
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Dark mode style | **Pure inversion** | Same layout/type, just colors flipped - consistent and predictable |
| Card descriptions | **Show full text** | Display entire description, let card heights vary naturally |
| Page transitions | **Staggered reveals** | Elements animate when scrolled into view (Intersection Observer) |
| Animation library | **Framer Motion** | Full-featured (~30KB), powerful spring physics |
| Lightbox | **GLightbox** | Lightweight (~10KB), good balance of features and size |
| 404 page | **Branded with personality** | Custom designed with Sarah's voice |
| External links | **New tab** | Internal same tab, external opens new tab |
| Theme toggle | **Rotate/morph animation** | Icon rotates and morphs between sun/moon |

### Contact & Analytics
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Spam protection | **Netlify only** | Basic fields, rely on Netlify's built-in spam filtering |
| Contact page | **Form + socials** | Contact form plus prominent social links |
| Analytics | **Pageviews only** | Basic GA4, privacy-friendly |

### Homepage
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Featured projects | **Separate featured list** | Config in astro.config.mjs - controls homepage independently |
| Social sharing | **Basic OG tags** | Title + description + featured image |

### Accessibility
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Theme toggle a11y | **Icon + aria-label** | Minimal but functional |
| Print styles | **No optimization** | Not a priority for v1 |

### Technical
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Content volume | **Medium** | 15-30 projects over time |
| Error handling | **Friendly error overlay** | Dev mode shows user-friendly messages for frontmatter errors |
| Sarah's git comfort | **Comfortable** | Can commit, push, create branches |
| Documentation | **Text only** | Written README, no screenshots/videos needed |
| Canonical URLs | **Self-referential** | Each page points to itself |

---

## Tech Stack

### Core Framework

```
Astro 4.x        - Static site generator with MDX support
TypeScript       - Strict mode for type safety
Tailwind CSS 3.x - Utility-first styling with dark mode
```

### Dependencies

| Package | Purpose | Size |
|---------|---------|------|
| `@astrojs/mdx` | MDX support for rich content | ~10KB |
| `@astrojs/tailwind` | Tailwind integration | - |
| `framer-motion` | Scroll animations | ~30KB |
| `glightbox` | Image lightbox | ~10KB |
| `zod` | Content schema validation | ~12KB |

**Total JS Budget:** < 50KB gzipped (target)

### Development Tools

```
Prettier + plugins    - Code formatting (astro, tailwindcss)
ESLint               - Code linting
TypeScript           - Type checking
```

---

## Site Structure

### Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, about text, featured projects |
| `/design` | Portfolio | Full project grid with all work |
| `/contact` | Contact | Form + social links |
| `/projects/[slug]` | Project Detail | Individual case studies |
| `/tags/[tag]` | Tag Page | Projects filtered by tag |
| `/404` | Not Found | Branded error page |

### Navigation Structure (Config-Driven)

```typescript
// In astro.config.mjs
export const siteConfig = {
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Design', href: '/design' },
    { label: 'Contact', href: '/contact' },
  ],
  featuredProjects: ['higloss-energy', 'ibm', 'shipped-products'],
  social: {
    linkedin: 'https://linkedin.com/in/sarah',
    twitter: 'https://twitter.com/sarah',
    email: 'hello@sarah.design',
  },
};
```

---

## Project Architecture

```
sarah-portfolio/
├── .vscode/
│   ├── settings.json          # VS Code workspace settings
│   └── extensions.json        # Recommended extensions
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigation with config-driven items
│   │   ├── Footer.astro       # Footer with social links
│   │   ├── ThemeToggle.astro  # Dark/light mode with morph animation
│   │   ├── ProjectCard.astro  # Portfolio project card
│   │   ├── ContactForm.astro  # Netlify form
│   │   ├── Lightbox.astro     # GLightbox wrapper
│   │   ├── ScrollReveal.astro # Framer Motion scroll animation wrapper
│   │   └── mdx/               # MDX components for content
│   │       ├── Callout.astro  # Styled callout boxes
│   │       ├── ImageGrid.astro # Responsive image grid
│   │       └── VideoEmbed.astro # Responsive video embed
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base HTML + SEO + dark mode script
│   │   └── ProjectLayout.astro # Case study layout
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── design.astro       # Portfolio grid
│   │   ├── contact.astro      # Contact page
│   │   ├── 404.astro          # Branded 404 page
│   │   ├── projects/
│   │   │   └── [slug].astro   # Dynamic project pages
│   │   └── tags/
│   │       └── [tag].astro    # Dynamic tag pages
│   ├── content/
│   │   ├── config.ts          # Content collections schema
│   │   └── projects/          # Project .mdx files
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   ├── reading-time.ts    # Calculate reading time
│   │   └── tags.ts            # Tag normalization utilities
│   ├── styles/
│   │   └── global.css         # Global styles, font imports
│   └── assets/                # Images optimized by Astro
│       └── projects/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs           # Astro + site config (nav, featured, social)
├── tailwind.config.mjs        # Tailwind theme
├── tsconfig.json
├── package.json
├── .env.example
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
├── README.md
├── PRD.MD                     # Product requirements
├── TECHNICAL_PLAN.MD          # This file
└── progress.txt               # Implementation progress tracker
```

---

## Content Management

### Project Schema (Zod)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: image(), // Custom thumbnail image
    tags: z.array(z.string()),
    date: z.date(),
    order: z.number(), // For sorting on portfolio page
    published: z.boolean(),
    // Optional fields
    client: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
```

### Example Project (MDX)

```mdx
---
title: "HiGloss Energy"
description: "What if investing in people saved with how you save in food? Elevating the experience..."
thumbnail: "./thumbnails/higloss-thumb.png"
tags: ["UX Design", "Product Design", "Mobile App"]
date: 2024-03-15
order: 1
published: true
client: "HiGloss"
role: "Lead UX Designer"
timeline: "3 months"
---

import { Callout, ImageGrid, VideoEmbed } from '@/components/mdx';

## The Challenge

HiGloss needed a way to help users understand their energy usage...

<Callout type="insight">
  Key finding: Users felt disconnected from their energy consumption patterns.
</Callout>

## Research & Discovery

We conducted 15 user interviews and analyzed competitor apps...

<ImageGrid
  images={[
    { src: "./research-1.png", alt: "User interview insights" },
    { src: "./research-2.png", alt: "Competitive analysis" },
  ]}
/>

## The Solution

Our approach focused on three key principles...

<VideoEmbed url="https://www.figma.com/embed?embed_host=share&url=..." />

## Outcome

The redesigned app saw a 40% increase in daily active users...
```

---

## Design System

### Color Palette

```javascript
// tailwind.config.mjs
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic colors
        background: {
          DEFAULT: '#FFFFFF',  // Light mode
          dark: '#0A0A0A',     // Dark mode
        },
        foreground: {
          DEFAULT: '#1A1A1A',  // Light mode text
          dark: '#FFFFFF',     // Dark mode text
        },
        muted: {
          DEFAULT: '#6B7280',  // Light mode secondary text
          dark: '#9CA3AF',     // Dark mode secondary text
        },
        border: {
          DEFAULT: '#E5E7EB',  // Light mode borders
          dark: '#374151',     // Dark mode borders
        },
        // Accent (for links, buttons, etc.)
        accent: {
          DEFAULT: '#000000',
          dark: '#FFFFFF',
        },
      },
    },
  },
};
```

### Typography

```javascript
// tailwind.config.mjs - typography extension
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1.2' }],
  '6xl': ['3.75rem', { lineHeight: '1.1' }],
},
```

### Spacing & Layout

```javascript
// tailwind.config.mjs - spacing extension
spacing: {
  '18': '4.5rem',
  '88': '22rem',
  '128': '32rem',
},
maxWidth: {
  'content': '72rem',  // 1152px - max content width
},
```

### Animations (Framer Motion)

```typescript
// Animation variants for scroll reveal
export const scrollRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing
    },
  }),
};

// Theme toggle animation
export const themeToggleVariants = {
  light: { rotate: 0, scale: 1 },
  dark: { rotate: 180, scale: 1 },
  tap: { scale: 0.9 },
};
```

---

## Feature Specifications

### 1. Dark Mode

**Implementation:**
- Tailwind's `class` strategy (`dark:` prefix)
- Toggle adds/removes `dark` class on `<html>`
- Inline script in `<head>` prevents flash (runs before paint)
- Preference stored in `localStorage`
- Falls back to `prefers-color-scheme` on first visit

**Theme Toggle Component:**
- Framer Motion rotate/morph animation
- Sun icon (light mode) ↔ Moon icon (dark mode)
- `aria-label="Switch to dark/light mode"`
- 300ms transition duration

### 2. Scroll Animations

**Implementation:**
- Framer Motion for animation logic
- Intersection Observer triggers animations on scroll into view
- Staggered delays for grid items (0.1s between each)
- Spring physics for natural feel

**Usage:**
```astro
<ScrollReveal index={0}>
  <ProjectCard project={project} />
</ScrollReveal>
```

### 3. Image Lightbox

**Implementation:**
- GLightbox library (~10KB)
- Single image modal (click to open, click outside/X to close)
- No gallery navigation (simple use case)
- Accessible (keyboard navigation, focus trap)

**Trigger:**
- Images in case studies are automatically lightbox-enabled
- Add `data-lightbox` attribute to opt-in

### 4. Tag System

**Normalization:**
```typescript
// src/lib/tags.ts
export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function displayTag(slug: string, allTags: string[]): string {
  // Find first occurrence in content for proper casing
  const original = allTags.find(t => normalizeTag(t) === slug);
  return original || slug;
}
```

**Tag Pages:**
- Route: `/tags/[tag]`
- Shows projects with that tag

### 5. MDX Components

**Callout:**
```astro
---
interface Props {
  type?: 'info' | 'tip' | 'warning' | 'insight';
}
const { type = 'info' } = Astro.props;
---
<aside class={`callout callout-${type}`}>
  <slot />
</aside>
```

**ImageGrid:**
```astro
---
interface Props {
  images: Array<{ src: string; alt: string }>;
  columns?: 2 | 3;
}
---
<div class={`grid grid-cols-${columns} gap-4`}>
  {images.map(img => (
    <img src={img.src} alt={img.alt} data-lightbox />
  ))}
</div>
```

**VideoEmbed:**
```astro
---
interface Props {
  url: string;
  aspectRatio?: '16:9' | '4:3';
}
---
<div class="aspect-video">
  <iframe src={url} allowfullscreen />
</div>
```

### 6. Contact Form

**Fields:**
- Name (required)
- Email (required, validated)
- Message (required, textarea)

**Implementation:**
- Netlify Forms (add `data-netlify="true"`)
- Client-side validation before submit
- Success message after submission
- No CAPTCHA (rely on Netlify spam filtering)

### 7. 404 Page

**Design:**
- Branded with Sarah's personality
- Friendly, not generic error message
- Link back to homepage
- Maybe show latest projects as suggestions
- Consistent with site design (dark mode support)

---

## Performance & Accessibility

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| JS Bundle (gzipped) | < 50KB |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### Accessibility Requirements

- **Keyboard Navigation:** All interactive elements focusable and usable
- **Focus Indicators:** Visible focus states on all interactive elements
- **Color Contrast:** WCAG AA minimum (4.5:1 for text)
- **Alt Text:** All images have descriptive alt text
- **Heading Hierarchy:** Proper h1 → h2 → h3 structure
- **ARIA Labels:** Theme toggle and other icon buttons labeled
- **Reduced Motion:** Respect `prefers-reduced-motion` media query

### Image Optimization

- Astro's `<Image>` component for automatic optimization
- WebP conversion (automatic)
- Lazy loading (automatic)
- Responsive images (srcset generated)
- Explicit width/height to prevent layout shift

---

## Development Setup

### VS Code Configuration

**.vscode/settings.json:**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

**.vscode/extensions.json:**
```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

### Error Overlay

Configure Astro dev server to show friendly errors:
```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    plugins: [
      // Custom error overlay plugin if needed
    ],
  },
});
```

Zod validation errors will show in the browser during development with clear messages about what's wrong in frontmatter.

### Scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "eslint . --ext .js,.ts,.astro",
    "format": "prettier --write ."
  }
}
```

---

## Deployment Strategy

### Netlify Configuration

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

**Environment Variables:**
- `PUBLIC_GA_TRACKING_ID` - Google Analytics ID

**Automatic Deploys:**
- Trigger on push to `main` branch
- Build previews for pull requests

### Git Workflow

```
main (production)
  ↑
  └── feature/new-project
  └── feature/add-animations
  └── fix/mobile-nav
```

**Commit Style:**
```
Add HiGloss Energy project
Fix mobile navigation overflow
Update dark mode colors
Add scroll reveal animations
```

---

## Implementation Phases

### Phase 1: Foundation (Days 1-3)
- [ ] Initialize Astro project with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Set up development tools (Prettier, ESLint, VS Code)
- [ ] Create base configuration files
- [ ] Set up Content Collections schema
- [ ] Create BaseLayout with dark mode

### Phase 2: Core Components (Days 4-6)
- [ ] Build Header with config-driven nav
- [ ] Build Footer with social links
- [ ] Implement ThemeToggle with morph animation
- [ ] Create ProjectCard component
- [ ] Build ContactForm with Netlify integration

### Phase 3: Pages (Days 7-9)
- [ ] Build Home page with featured projects
- [ ] Build Design (portfolio) page with grid
- [ ] Build Contact page with form + socials
- [ ] Create branded 404 page

### Phase 4: Dynamic Routes (Days 10-11)
- [ ] Build project detail pages with ProjectLayout
- [ ] Build tag pages with filtering
- [ ] Implement proper SEO meta tags

### Phase 5: Polish (Days 12-14)
- [ ] Implement scroll reveal animations (Framer Motion)
- [ ] Add GLightbox for images
- [ ] Create MDX components (Callout, ImageGrid, VideoEmbed)
- [ ] Responsive design testing and fixes
- [ ] Dark mode polish
- [ ] Performance optimization

### Phase 6: Launch (Days 15-17)
- [ ] Create sample content (3 projects)
- [ ] Final testing (all browsers, devices)
- [ ] Lighthouse audits and fixes
- [ ] Deploy to Netlify
- [ ] Write README documentation
- [ ] Handoff to Sarah

---

## Testing & Validation

### Pre-Launch Checklist

**Content:**
- [ ] Add test project via MDX, verify it appears
- [ ] Test draft handling (published: false hidden in production)
- [ ] Test tag pages populate correctly
- [ ] Verify MDX components render properly

**Dark Mode:**
- [ ] Toggle works on all pages
- [ ] Preference persists in localStorage
- [ ] No flash of wrong theme on load
- [ ] System preference respected on first visit
- [ ] All components styled for both modes

**Responsive:**
- [ ] Test at 320px (small mobile)
- [ ] Test at 640px (large mobile)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (laptop)
- [ ] Test at 1280px+ (desktop)
- [ ] Navigation condensed properly on mobile

**Animations:**
- [ ] Scroll reveal triggers correctly
- [ ] Theme toggle morphs smoothly
- [ ] Staggered timing feels natural
- [ ] Reduced motion preference respected

**Accessibility:**
- [ ] Keyboard navigation works everywhere
- [ ] Focus indicators visible
- [ ] Screen reader announces theme changes
- [ ] Color contrast passes WCAG AA
- [ ] All images have alt text

**Performance:**
- [ ] Lighthouse Performance 95+
- [ ] Lighthouse Accessibility 95+
- [ ] JS bundle < 50KB gzipped
- [ ] Images lazy load correctly

**Forms:**
- [ ] Contact form submits successfully
- [ ] Validation works (required fields, email format)
- [ ] Success message appears
- [ ] Submission appears in Netlify dashboard

**SEO:**
- [ ] Unique titles on all pages
- [ ] Meta descriptions present
- [ ] OG tags render correct previews
- [ ] robots.txt accessible
- [ ] Canonical URLs correct

---

## Success Criteria

### Definition of Done

The project is **COMPLETE** when:

1. **All pages functional** - Home, Design, Contact, Project detail, Tag pages, 404
2. **Dark mode polished** - Toggle works, persists, no flash, both themes look great
3. **Animations smooth** - Scroll reveals, theme toggle morph, staggered timing
4. **Content workflow proven** - Sarah can add project via MDX, edit config, deploy
5. **Performance targets met** - Lighthouse 95+, bundle < 50KB
6. **Accessibility compliant** - Keyboard nav, screen reader, color contrast
7. **Responsive design** - Works on mobile, tablet, desktop
8. **Deployed and live** - Site accessible on Netlify
9. **Documentation complete** - README explains everything Sarah needs

### Sarah Can Independently:

- Add a new portfolio project (create .mdx file, push to GitHub)
- Add a new navigation item (edit astro.config.mjs)
- Change featured projects (edit astro.config.mjs)
- Update colors/fonts (edit tailwind.config.mjs)
- Preview drafts locally (npm run dev)

---

## Reference Images

See `/reference-images/` folder:
- **1.png** - Homepage design with hero and project showcase
- **2.png** - Design/portfolio page with project grid
- **3.png** - Project case study detail layout

---

## Notes

**For James:**
- Astro + MDX is beginner-friendly but powerful
- Framer Motion adds weight but the animations are worth it
- GLightbox is a solid choice - simple API, good a11y
- The 2-3 week deadline is tight - prioritize core features first, polish second
- Content Collections will catch Sarah's frontmatter mistakes early

**For Sarah:**
- Adding content is as simple as creating .mdx files
- Config changes (nav, featured, social) in one file
- Theme changes (colors, fonts) in tailwind.config.mjs
- Preview everything locally before pushing to GitHub
- Unpublished content is only visible in dev mode

**Architecture Decisions:**
- MDX over plain markdown for embedding components
- Framer Motion over lighter alternatives for animation quality
- GLightbox over custom for reliability and accessibility
- Config-driven nav for flexibility without code changes
- Normalized tag slugs for consistency across content

---

*Last updated: 2026-01-13 - Finalized after comprehensive stakeholder interview*
