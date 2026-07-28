# AGENTS.md

> ⚠️ **READ `SKILL.md` FIRST.** It is the authoritative, up-to-date guide for AI
> agents working on this site (site map, SEO rules, Hashnode blog integration,
> content recipes, deployment constraints). This file is only a quick summary.

## Quick facts

- Personal portfolio of **Anik Das** — live at https://anikdascodes.github.io
- Astro 6 + Tailwind CSS v4 + TypeScript, deployed via GitHub Actions (Pages)
- Pages: About `/` · Projects · Education (incl. courses + skills) · Blog (Hashnode RSS) · Contact

## Commands

- `npm run dev` - Start dev server (localhost:4321)
- `npm run build` - Production build (must pass before finishing any task)
- `npm run preview` - Preview build

## Requirements

- Node.js >= 22.12.0

## Hard rules (details in SKILL.md)

1. **Never `git push`** — the owner pushes manually.
2. **Never remove** Google Search Console verification (meta tag in `src/layouts/BaseLayout.astro`, file `public/googlec8391c95fcf8300e.html`).
3. Never commit `node_modules/`, `dist/`, `.astro/`.
4. No `<style>` in `.astro` files — Tailwind classes / `src/styles/global.css` only.
5. Don't re-add removed template pages (publications, talks, teaching, CV, local posts, `/skills`).
6. New pages need unique `title` + `description` passed to `BaseLayout` (SEO).
