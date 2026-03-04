# Maksymilian Dubowski — Portfolio Website

Engineering portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** — App Router with Turbopack
- **TypeScript** — strict typing throughout
- **Tailwind CSS v4** — CSS-first `@theme` configuration, no `tailwind.config.js`
- **Motion** (Framer Motion) — scroll-triggered fade-ups, hover-lift cards, page transitions
- **Inter** — loaded via `next/font/google`

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  app/
    page.tsx              # Home — hero, featured projects, philosophy
    projects/page.tsx     # Projects — car build, 3D printer, other builds
    github/page.tsx       # GitHub — repos by category
    not-found.tsx         # Custom 404
    layout.tsx            # Root layout with Navbar + Footer
    globals.css           # Tailwind v4 theme tokens
  components/             # Reusable UI components
  data/                   # Static content (projects, repos, site metadata)
  types/                  # TypeScript interfaces
  lib/                    # Animation variants
public/
  images/projects/        # Project images
```

## Deployment

Optimized for [Vercel](https://vercel.com). Push to `main` and it deploys automatically.
