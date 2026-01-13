# Product Requirements Document: Sarah's Portfolio Website

## Overview

Build a production-ready portfolio website for Sarah (UX Designer) that showcases her design work, hosts her blog/articles, and provides a way for visitors to contact her. The site must be easy for Sarah to maintain without needing to write code.

## Problem Statement

Sarah needs a professional online presence to showcase her UX design work and share her thoughts through blog posts. She needs to be able to add new projects and blog posts easily, customize the design, and have visitors contact her—all without requiring deep technical knowledge.

## Success Criteria

### Definition of "Done"

The project is complete when:

1. **Content Management** ✅
   - Sarah can add a new portfolio project by creating a markdown file
   - Sarah can add a new blog post by creating a markdown file
   - Sarah can edit existing projects and posts without breaking the site
   - TypeScript/Zod validation catches content errors before deployment

2. **Core Pages Working** ✅
   - Home page with introduction and featured projects
   - Design/Work page showing portfolio grid
   - Thinking/Blog page showing blog posts
   - Contact page with working form
   - Individual project detail pages (dynamic routes)
   - Individual blog post pages (dynamic routes)

3. **Dark Mode Implementation** ✅
   - Dark mode toggle works on all pages
   - Dark mode preference persists across browser sessions
   - No flash of wrong theme on page load
   - System preference respected on first visit

4. **Design Customization** ✅
   - Sarah can change site-wide colors by editing Tailwind config
   - Sarah can change fonts by editing Tailwind config
   - Sarah can modify component layouts by editing Astro files
   - Changes preview locally before deployment

5. **Responsive Design** ✅
   - Site works on mobile (320px+), tablet (768px+), and desktop (1024px+)
   - Navigation is usable on all screen sizes
   - Images scale properly without breaking layout
   - Content is readable at all breakpoints

6. **Performance Metrics** ✅
   - Lighthouse Performance score: 95+
   - Lighthouse Accessibility score: 95+
   - Lighthouse Best Practices score: 95+
   - Lighthouse SEO score: 95+
   - JavaScript bundle: < 50KB gzipped
   - Page load time: < 2 seconds on fast connection

7. **Contact Form** ✅
   - Form submissions work via Netlify Forms
   - Form has validation (required fields, email format)
   - Success message shows after submission
   - Submissions email Sarah and appear in Netlify dashboard

8. **SEO & Metadata** ✅
   - All pages have unique, descriptive titles
   - All pages have meta descriptions
   - Open Graph tags present for social sharing
   - `robots.txt` accessible
   - Sitemap generated

9. **Deployment** ✅
   - Site deploys automatically when pushing to main branch
   - Build succeeds on Netlify in < 3 minutes
   - Environment variables are secure (.env not in git)
   - Site is live and accessible

10. **Documentation** ✅
    - README explains how to run the site locally
    - README explains how to add projects and blog posts
    - README explains how to customize theme
    - Code is well-commented for future maintenance

## User Stories

### For Sarah (Content Creator)

**As Sarah, I want to...**

1. Add a new portfolio project so visitors can see my latest work
   - **Acceptance**: Create `.md` file in `src/content/projects/`, add frontmatter and content, push to GitHub, see project appear on `/design` page

2. Add a new blog post so I can share my thoughts
   - **Acceptance**: Create `.md` file in `src/content/blog/`, add frontmatter and content, push to GitHub, see post appear on `/thinking` page

3. Change the site's color scheme so it matches my brand
   - **Acceptance**: Edit color values in `tailwind.config.mjs`, see changes apply site-wide in both light and dark modes

4. Know when someone wants to contact me
   - **Acceptance**: Visitor fills out contact form, I receive an email notification

### For Visitors (End Users)

**As a visitor, I want to...**

1. See Sarah's portfolio work so I can evaluate her skills
   - **Acceptance**: Navigate to `/design`, see grid of projects with images and descriptions

2. Read Sarah's articles so I can learn from her insights
   - **Acceptance**: Navigate to `/thinking`, see list of blog posts, click to read full articles

3. Contact Sarah about potential work
   - **Acceptance**: Navigate to `/contact`, fill out form with name/email/message, submit successfully

4. View the site in dark mode so it's easier on my eyes
   - **Acceptance**: Click dark mode toggle, see entire site switch to dark theme, preference persists on page navigation and browser reopen

## Core Features

### Required Features (Must Have)

1. **Portfolio Project Showcase**
   - Grid layout showing all projects
   - Project cards with images, titles, descriptions, tags
   - Individual project detail pages with case study content
   - Projects managed via markdown files with frontmatter

2. **Blog/Thinking Section**
   - List view showing all blog posts
   - Blog cards with titles, dates, descriptions
   - Individual blog post pages with full content
   - Posts managed via markdown files with frontmatter

3. **Dark Mode**
   - Toggle button in header
   - Preference persists to localStorage
   - Respects system preference on first visit
   - All components styled for both modes
   - No flash of wrong theme

4. **Contact Form**
   - Form with name, email, message fields
   - Client-side validation
   - Netlify Forms integration (zero backend)
   - Success message on submission
   - Email notifications to Sarah

5. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 640px, 768px, 1024px, 1280px
   - Touch-friendly navigation on mobile
   - Optimized layouts for each screen size

6. **Image Optimization**
   - Automatic optimization via Astro Image component
   - Lazy loading (images load as you scroll)
   - Responsive images (right size for each screen)
   - WebP conversion for better performance

7. **SEO Optimization**
   - Unique meta titles and descriptions for each page
   - Open Graph tags for social sharing
   - Semantic HTML structure
   - Sitemap and robots.txt

### Nice to Have (Future Enhancements)

- Project filtering/search on portfolio page
- Newsletter signup integration
- Instagram/Behance feed
- Project category pages
- Blog category/tag pages
- Reading time estimates for blog posts
- Related posts suggestions

## Technical Specifications

### Tech Stack

- **Framework**: Astro 4.x (static site generator)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.x
- **Content Management**: Astro Content Collections
- **Deployment**: Netlify
- **Forms**: Netlify Forms
- **Analytics**: Google Analytics 4

### Project Structure

```
src/
├── components/       # Reusable UI components
├── layouts/          # Page layouts (Base, Project, Blog)
├── pages/            # Routes (index, design, thinking, contact, dynamic routes)
├── content/          # Markdown content (projects, blog)
│   ├── config.ts     # Content Collections schema
│   ├── projects/     # Project markdown files
│   └── blog/         # Blog post markdown files
├── lib/              # Utility functions and types
├── scripts/          # Client-side scripts (theme toggle)
├── styles/           # Global styles
└── assets/           # Images (optimized by Astro)
```

### Content Schema

**Project Frontmatter:**
```yaml
title: string (required)
description: string (required)
featuredImage: string (required, relative path)
tags: string[] (required)
date: date (required)
order: number (required, for sorting)
published: boolean (required)
```

**Blog Post Frontmatter:**
```yaml
title: string (required)
description: string (required)
date: date (required)
tags: string[] (optional)
featuredImage: string (optional, relative path)
author: string (default: "Sarah")
published: boolean (required)
```

### Design System

**Colors:**
- Light mode: White background (#FFFFFF), dark text (#1A1A1A)
- Dark mode: Dark background (#0A0A0A), light text (#FFFFFF)
- Accent colors: Customizable via Tailwind config

**Typography:**
- Font family: Inter (web font)
- Type scale: Tailwind's default extended with custom sizes
- Line height: 1.5 for body, 1.2 for headings

**Spacing:**
- Based on Tailwind's spacing scale (4px increments)
- Container max-width: 1280px
- Section padding: responsive (4rem on desktop, 2rem on mobile)

**Components:**
- Pill-button navigation (as shown in reference images)
- Clean, minimal card designs for projects and blog posts
- Subtle hover states and transitions
- Accessible focus indicators

## Constraints

### Hard Constraints (Must Not Violate)

1. **No Server-Side Code**
   - Must be 100% static (pre-rendered at build time)
   - No Node.js server, no serverless functions (except Netlify Forms)
   - Reason: Simplicity and cost (free hosting)

2. **Easy Content Management**
   - Sarah must be able to add content by creating markdown files only
   - No database, no CMS GUI in initial version
   - Reason: Sarah is comfortable with markdown and git

3. **Performance First**
   - JavaScript bundle must stay under 50KB gzipped
   - Lighthouse scores must be 95+ across all metrics
   - Reason: Portfolio site must showcase quality and attention to detail

4. **Accessibility**
   - WCAG 2.1 AA compliance minimum
   - Keyboard navigation must work for all interactive elements
   - Screen reader compatible
   - Reason: Sarah is a UX designer and cares about inclusive design

5. **Dark Mode Required**
   - Not optional—must be fully implemented from day one
   - Both themes must be equally polished
   - Reason: Explicitly stated requirement

### Soft Constraints (Preferences)

1. Use Tailwind utility classes over custom CSS where possible
2. Keep component complexity low (easy to understand and modify)
3. Use Astro's built-in features over third-party solutions when available
4. Write code that James (who is rusty) can maintain
5. Document architectural decisions in code comments

## Non-Goals (Out of Scope)

### Will NOT Include

1. **User Authentication/Login**
   - No user accounts, no protected content
   - Reason: Adds complexity, not needed for portfolio

2. **Comments on Blog Posts**
   - No comment system (can add later via third-party service)
   - Reason: Moderation overhead, not essential for v1

3. **E-commerce/Payments**
   - No ability to sell products or services directly
   - Reason: Not requested, adds significant complexity

4. **Multi-language Support (i18n)**
   - English only for initial version
   - Reason: Not requested, adds complexity

5. **Real-time Features**
   - No live chat, no real-time notifications
   - Reason: Static site, not required

6. **Search Functionality**
   - No site-wide search (can add later)
   - Reason: With limited content, browse is sufficient

7. **Admin Dashboard**
   - No visual CMS interface
   - Content managed via markdown files only
   - Reason: Sarah is comfortable with files/git, saves complexity

## Validation & Testing

### Testing Checklist

Before considering the project "done," verify:

- [ ] Add a test project via markdown, verify it appears correctly
- [ ] Add a test blog post via markdown, verify it appears correctly
- [ ] Toggle dark mode on all pages, verify styling is correct
- [ ] Test on real mobile device (iOS and Android)
- [ ] Test on real tablet (iPad or Android tablet)
- [ ] Test in Chrome, Firefox, Safari
- [ ] Run Lighthouse audit on all page types, verify 95+ scores
- [ ] Submit contact form, verify email received
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Test with screen reader (VoiceOver or NVDA)
- [ ] Clone repo fresh, run `npm install && npm run dev`, verify it works
- [ ] Build and deploy to Netlify, verify live site works
- [ ] Test all links on live site, verify no 404s
- [ ] Share a project page on social media, verify Open Graph image/text correct

### Quality Gates

**Code Quality:**
- TypeScript must compile with zero errors
- ESLint must pass with zero errors
- Prettier formatting must be consistent
- No console errors in browser (except dev mode warnings)

**Content Quality:**
- All text proofread (no typos)
- All images have descriptive alt text
- All links work (no broken links)
- Placeholder content clearly marked for Sarah to replace

**Performance Quality:**
- Total JavaScript < 50KB gzipped
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- First Input Delay < 100ms

## Dependencies

### External Services Required

1. **GitHub** - Code repository and version control (free)
2. **Netlify** - Hosting and deployment (free tier sufficient)
3. **Google Analytics** - Website analytics (free)
4. **Custom Domain** (optional) - Sarah's domain name if she has one

### API Keys / Environment Variables

- `PUBLIC_GA_TRACKING_ID` - Google Analytics tracking ID
- Stored in `.env` locally, Netlify dashboard for production
- Never committed to git

## Deployment Strategy

### Development Workflow

1. **Local Development**
   - `npm run dev` - Start dev server on localhost:4321
   - `npm run build` - Create production build
   - `npm run preview` - Preview production build locally

2. **Git Workflow**
   - `main` branch = production (auto-deploys)
   - Feature branches for larger changes
   - Commit regularly with clear messages

3. **Deployment**
   - Push to `main` → Netlify auto-deploys
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Build time target: < 3 minutes

### Success Metrics

**Post-Launch (Nice to Have)**
- Page views per month
- Average time on site
- Contact form submission rate
- Dark mode usage percentage
- Mobile vs desktop traffic split

## References

- Technical implementation details: See `TECHNICAL_PLAN.MD`
- Design mockups: See `reference-images/` folder
- Astro documentation: https://docs.astro.build
- Tailwind documentation: https://tailwindcss.com/docs

## Approval & Sign-off

**Definition of Done Confirmed:**
- All "Success Criteria" items marked ✅
- All "Testing Checklist" items verified
- Site is live and accessible
- Sarah can add content independently
- Documentation is complete

Once these criteria are met, the project is considered **DONE** and ready for handoff to Sarah.
