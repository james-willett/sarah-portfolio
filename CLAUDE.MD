# Sarah's Portfolio - Project Instructions

## Quick Context

Building a portfolio website for Sarah (UX Designer) using Astro, TypeScript, and Tailwind CSS. Portfolio only - no blog.

**Deadline:** 2-3 weeks (hard)

## Key Documents

- **[TECHNICAL_PLAN.MD](./TECHNICAL_PLAN.MD)** - Full technical spec with all decisions
- **[PRD.MD](./PRD.MD)** - Product requirements and success criteria
- **[progress.txt](./progress.txt)** - Implementation tracker (update as you work)

## Tech Stack

- Astro 4.x + MDX
- TypeScript (strict)
- Tailwind CSS (dark mode via `class` strategy)
- Framer Motion (scroll animations)
- GLightbox (image lightbox)
- Netlify (hosting + forms)

## Important Conventions

1. **Update progress.txt** - Mark steps `[✓]` as you complete them
2. **Content uses MDX** - Projects are `.mdx` files in `src/content/`
3. **Config-driven** - Navigation, featured projects, and socials live in `astro.config.mjs`
4. **Dark mode required** - All components need `dark:` variants
5. **Drafts dev-only** - `published: false` content shows in dev, hidden in production

## File Structure

```
src/
├── components/     # Reusable UI (Header, Footer, Cards, etc.)
├── layouts/        # Page layouts (Base, Project)
├── pages/          # Routes
├── content/        # MDX content (projects/)
├── lib/            # Utilities (tags.ts)
└── assets/         # Images (optimized by Astro)
```

## Quick Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview production build
```

## When In Doubt

Refer to `TECHNICAL_PLAN.MD` - it has detailed specs for every feature, component schemas, animation configs, and the full implementation checklist.
