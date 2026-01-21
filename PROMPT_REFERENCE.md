# Sarah's Portfolio - Prompt Reference Guide

A glossary and reference for communicating effectively with Claude about this codebase.

---

## Quick Reference Glossary

| Term | Meaning | When to Use in Prompts |
|------|---------|------------------------|
| **siteConfig** | Central configuration object in `astro.config.mjs` | "Update the siteConfig to add a new nav item" |
| **projects collection** | Content collection at `src/content/projects/` | "Add a new project to the projects collection" |
| **ProjectLayout** | Layout wrapper for case study pages | "Modify the ProjectLayout to add a new section" |
| **BaseLayout** | Root layout for all pages (SEO, header, footer) | "Add meta tags to the BaseLayout" |
| **FloatingIndex** | Sticky table of contents sidebar on project pages | "Update the FloatingIndex to detect more headings" |
| **ProjectCard** | Card component for displaying projects in grids | "Change ProjectCard hover animation" |
| **frontmatter** | YAML metadata at top of MDX files | "Add a new frontmatter field for project type" |
| **published** | Boolean flag controlling visibility (`published: false` = draft) | "Hide this project by setting published to false" |
| **order** | Number field for sorting projects | "Change the project order" |

---

## Component Names (Use These Exact Names)

### UI Components (`src/components/`)

| Component | Purpose | Props/Variants |
|-----------|---------|----------------|
| **Header** | Floating pill navigation | Reads from `siteConfig.nav` |
| **Footer** | Site footer with socials | Reads from `siteConfig.social` |
| **Button** | Multi-variant button/link | `variant`: primary/secondary/outline/ghost, `size`: sm/md/lg |
| **Card** | Generic container (underutilized) | `padding`, `shadow`, `rounded`, `hover` |
| **ProjectCard** | Project display card | `title`, `description`, `image`, `href`, `tags`, `featured` |
| **ContactForm** | Netlify forms integration | Self-contained |
| **FloatingIndex** | Sticky TOC for projects | Hardcoded sections: overview, problem, solution, outcome |

### Layouts (`src/layouts/`)

| Layout | Purpose |
|--------|---------|
| **BaseLayout** | Root wrapper (HTML structure, SEO, header/footer) |
| **ProjectLayout** | Extends BaseLayout for case studies (hero, TOC, prose) |

---

## Pages (File-Based Routing)

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.astro` | Homepage with bento grid |
| `/design` | `design.astro` | Portfolio grid of all projects |
| `/projects/[slug]` | `projects/[slug].astro` | Dynamic project detail pages |
| `/thinking` | `thinking.astro` | Placeholder for external blog |
| `/contact` | `contact.astro` | Contact form + social links |

---

## Configuration Terminology

### In `astro.config.mjs`

```javascript
siteConfig.nav              // Array of {label, href} navigation items
siteConfig.featuredProjects // Array of project slugs for homepage
siteConfig.social           // {linkedin, dribbble, email} URLs
```

### Content Schema Fields (projects collection)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Project name |
| `description` | string | Yes | Full description |
| `thumbnail` | image | Yes | Card/preview image |
| `tags` | string[] | Yes | Category tags |
| `date` | date | Yes | Project date |
| `order` | number | Yes | Sort order (1 = first) |
| `published` | boolean | Yes | Visibility flag |
| `client` | string | No | Client name |
| `role` | string | No | Designer's role |
| `timeline` | string | No | Project duration |
| `liveUrl` | url | No | Live site link |

---

## Styling System Terminology

### Color Tokens (Semantic Names)

| Token | Hex | Usage |
|-------|-----|-------|
| `foreground` | `#3F3F3F` | Primary text, headings, icons |
| `background` | `#F8F8F8` | Page background |
| `muted` | `#6B6B6B` | Secondary text |
| `border` | `#E5E5E5` | Dividers, card borders |
| `accent` | `#3F3F3F` | Same as foreground |
| `surface` | `#FFFFFF` | Cards, nav pill |

### Fonts

| Family | Variable | Usage |
|--------|----------|-------|
| **PP Radio Grotesk** | `font-heading` | Headings, nav, display text |
| **Inter** | `font-sans` | Body text |

### Project-Specific Design Terms

| Term | Meaning |
|------|---------|
| **Pill-shaped** / **Pill design** | Navigation style with `border-radius: 100px` |
| **Bento grid** | Homepage featured projects layout |
| **Pure inversion** | Dark mode approach (same layout, colors flipped) |
| **Semantic colors** | Colors named by function, not hue |
| **Figma specs** | Reference to Sarah's Figma file (nodes 1:283, 11:46, 1:772) |

---

## Case Study Section IDs

The **FloatingIndex** component expects these section IDs in MDX content:

- `#overview`
- `#problem`
- `#solution`
- `#outcome`

Use H2 headings with these exact IDs for TOC navigation to work.

---

## Abbreviations & Acronyms

| Abbreviation | Meaning |
|--------------|---------|
| **TOC** | Table of Contents (FloatingIndex component) |
| **MDX** | Markdown with JSX (project content format) |
| **a11y** | Accessibility |
| **WCAG** | Web Content Accessibility Guidelines |
| **OG** | Open Graph (meta tags for social sharing) |

---

## Prompt Examples for Common Tasks

### Adding Content

- "Add a new project to the **projects collection** with frontmatter for client IBM"
- "Mark the HiGloss project as **unpublished** (draft)"
- "Update the **order** field to show IBM first"

### Modifying Components

- "Update the **ProjectCard** hover animation to scale more"
- "Add a new variant to the **Button** component called 'danger'"
- "Make the **FloatingIndex** show on tablet breakpoints"

### Styling Changes

- "Change the **foreground** color token to a darker shade"
- "Update the **pill-shaped** nav to have a different border radius"
- "Modify the **bento grid** on the homepage to be 4 columns"

### Configuration

- "Add 'About' to the **siteConfig.nav** array"
- "Update the **featuredProjects** to include the new project"
- "Change the **siteConfig.social.email** address"

### Layout Changes

- "Add a breadcrumb to the **ProjectLayout**"
- "Include a skip link in **BaseLayout** for accessibility"
- "Add a back button to the **FloatingIndex**"

---

## Key Architectural Patterns

1. **Config-driven** - Site settings centralized in `siteConfig`
2. **Content Collections** - Projects stored as validated MDX files
3. **Layout hierarchy** - BaseLayout → ProjectLayout
4. **Zod schemas** - Type-safe frontmatter validation in `config.ts`
5. **View Transitions** - Smooth page transitions via Astro's ClientRouter
6. **Intersection Observer** - Used in FloatingIndex for scroll tracking

---

## Files You'll Reference Often

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Site config (nav, featured projects, socials) |
| `src/content/config.ts` | Content collection schema |
| `src/styles/global.css` | Theme, fonts, global styles |
| `tailwind.config.mjs` | Tailwind theme extensions |
| `progress.txt` | Development progress tracker |
| `TECHNICAL_PLAN.MD` | Full technical specifications |

---

## Dark Mode Reminder

Per CLAUDE.md: **All components require dark mode** - include `dark:` variants. This is a standing requirement for any component work.
