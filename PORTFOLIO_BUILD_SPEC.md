# PORTFOLIO_BUILD_SPEC.md

## Project: Maksymilian Dubowski – Engineering Portfolio Website

---

# 1. Overview

Build a modern, high-performance portfolio website using **Next.js (App Router), TypeScript, and TailwindCSS**.

This website must:

- Be light mode themed
- Use a subtle breadboard-inspired background design
- Focus primarily on engineering projects and real-world builds
- Present GitHub work in a structured, categorized way
- Reflect systems thinking, ownership, and technical depth

This is not a generic student template.  
It must feel intentional, engineered, and structured.

---

# 2. Design Requirements

## Theme

- Light mode only (default)
- Background: Off-white (#FAFAFA or similar)
- Neutral greys for structure
- Subtle shadows instead of heavy borders
- Clean, minimal, high-performance feel

## Breadboard Background Design

Create a reusable background component that includes:

- Subtle grid pattern
- Faint circular connection nodes
- Very low opacity (5–8%)
- Used behind widget sections, not the entire page
- Must not overpower content

Purpose: represent prototyping, experimentation, and engineering systems.

---

# 3. Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion (minimal animations)
- Optimized for Vercel deployment

Code must be modular and production-ready.

---

# 4. Site Structure

## Pages Required

- `/` (Home)
- `/projects`
- `/github`

---

# 5. Home Page (/)

## Hero Section

Include:

- Name: **Maksymilian Dubowski**
- Title: Aerospace Engineering Student | Systems Builder
- Short positioning paragraph derived from LinkedIn summary
- CTA Buttons:
  - View Projects
  - GitHub

Tone:
Confident, technical, structured. No fluff.

---

## Featured Projects Section

Show 3–4 highlighted builds:

- Car Project
- 3D Printer
- Missile Trajectory Tracker
- Storm Prediction System (if applicable)

Each displayed as a reusable `ProjectCard`.

---

## Engineering Philosophy Section

Short section describing:

- Systems thinking
- Precision
- Operational decision-making
- Ownership mindset
- Real responsibility

Keep it concise and structured.

---

## Footer

Include:

- GitHub link
- LinkedIn link
- Email

---

# 6. Projects Page (/projects)

This page focuses on real-world builds, not just code.

---

## Section A – Car Project

Include:

- Overview of the vehicle
- Mechanical diagnostics performed
- Modifications completed
- Lessons learned
- Future upgrades
- Image gallery support

Must feel technical and detailed.

---

## Section B – 3D Printer

Include:

- Printer model
- Modifications made
- Calibration improvements
- What is being built with it
- Future hardware upgrades
- Optional CAD file links

---

## Section C – Other Engineering Builds

Include:

- Arduino projects
- Electronics builds
- Storm tracking system
- Any experimental prototypes

This page should feel like an engineering lab notebook.

---

# 7. GitHub Page (/github)

Use content from:
https://github.com/Max11122006

Split into 3 categories:

---

## A. University Projects

Examples:

- Bending Beam (C++)
- Engineering simulations
- Coursework tools

---

## B. Hackathon Projects

Include:

- Team builds
- Tech stack badges
- Short problem statement

---

## C. Personal Projects

Examples:

- missile-trajectory-tracker
- stormwatch-ai
- portfolio website itself

---

## Each GitHub Project Card Must Include:

- Project name
- Description
- Tech stack tags
- GitHub link
- Optional demo link
- Category label

Do not display repositories as a simple list.

---

# 8. Required Components

Create reusable components:

- `ProjectCard`
- `CategorySection`
- `BreadboardBackground`
- `AnimatedSection`
- `Navbar`
- `Footer`

All components must be clean and modular.

---

# 9. Animations (Framer Motion)

Use sparingly:

- Fade-up on scroll
- Slight lift on hover
- Smooth page transitions

No excessive movement.

---

# 10. Performance Constraints

- Lighthouse target: 95+
- Optimized images
- Minimal dependencies
- No heavy UI frameworks

---

# 11. Typography

- Use Inter or similar clean sans-serif
- Strong hierarchy
- Large bold headings
- Medium-weight body text
- Generous spacing

---

# 12. Tone and Messaging

The website must communicate:

- Technical competence
- Real-world execution
- Systems thinking
- Engineering depth
- Long-term ambition in aerospace and aviation

Avoid:

- Overused startup buzzwords
- Generic template language
- Motivational clichés

---

# 13. Stretch Features (Optional)

If time allows:

- GitHub API integration for live repo data
- Animated schematic lines connecting project cards
- Engineering log / blog section
- Dark mode toggle (not default)

---

# Final Instruction

Build a structured, scalable engineering portfolio that prioritizes projects and technical depth over personality.

This should feel like it was built by someone who engineers systems — not someone who copied a portfolio template.
