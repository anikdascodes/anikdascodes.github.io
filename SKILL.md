# SKILL.md — AI Agent Guide for anikdascodes.github.io

> **Read this fully before changing anything.** This is the personal portfolio of
> **Anik Das** (Data Science & AI student, Kolkata, India), deployed to
> **https://anikdascodes.github.io** via GitHub Actions. Do not start editing
> randomly — every visible element is mapped below.

---

## 1. Golden Rules

1. **NEVER run `git push`.** The owner pushes manually. Commit if asked, then tell the owner it's ready to push.
2. **NEVER remove** the Google Search Console verification (meta tag in `src/layouts/BaseLayout.astro` and `public/googlec8391c95fcf8300e.html`) — the site loses Search Console access if removed.
3. **Always run `npm run build` after changes** — it must pass before declaring work done.
4. No `<style>` blocks in `.astro` files — use Tailwind utility classes or `src/styles/global.css`.
5. Content is Markdown-driven with YAML frontmatter; validate against schemas in `src/content.config.ts` (zod). A frontmatter field not in the schema will fail the build.
6. Keep placeholders marked with `<!-- TODO -->` intact unless the owner supplies real data.

## 2. Tech Stack & Commands

- **Astro 6** (static output) + **Tailwind CSS v4** (via `@tailwindcss/vite`, no tailwind.config.js) + TypeScript
- Node.js >= 22.12.0
- `npm run dev` → dev server at `localhost:4321` | `npm run build` → `dist/` | `npm run preview`
- No lint/test scripts; verification = successful build + manual page checks

## 3. Site Map — Which File Controls What

| Page (URL) | Page file | Content source |
|---|---|---|
| About `/` | `src/pages/index.astro` | `src/content/bio.md` (also feeds the sidebar) |
| Projects `/projects` | `src/pages/projects/index.astro` (uses `BaseListing`) | `src/content/projects/*.md` (one file = one card) |
| Project detail `/projects/<id>` | `src/pages/projects/[id].astro` (uses `BaseDetail`) | same `.md` files, body rendered |
| Education `/education` | `src/pages/education/index.astro` | `src/content/education.md` + `src/config/skills.ts` |
| Blog `/blog` | `src/pages/blog/index.astro` | **Hashnode RSS, fetched at build time** (see §5) |
| Contact `/contact` | `src/pages/contact/index.astro` | `src/config/social.ts` (SOCIALS) |
| Tags `/tags`, `/tags/<tag>` | `src/pages/tags/` | tags from projects only (`src/utils/tags.ts`) |
| 404 | `src/pages/404.astro` | — |
| Dev tools `/dev-tools` | `src/pages/dev-tools/` | dev-only (hidden in production via `SETTINGS`) |

**Removed on purpose (do NOT re-add):** publications, talks, teaching, CV pages; local
blog posts collection; RSS feed (`rss.xml`); standalone `/skills` page (skills live
inside Education).

### Layout & shared components

- `src/layouts/BaseLayout.astro` — `<head>` (ALL SEO tags), theme CSS variables, sidebar+main shell
- `src/layouts/BaseListing.astro` / `BaseDetail.astro` — listing & detail wrappers (projects)
- `src/components/layout/LeftSidebar.astro` — avatar, name, location, social icons (data from `bio.md` + `social.ts`)
- `src/components/layout/Navbar.astro` — reads `NAV_LINKS`; order: About · Projects · Education · Blog · Contact
- `src/components/layout/Footer.astro` — © year (auto-updates via client script — keep the `data-footer-year` span) + theme toggle ONLY. Owner wants nothing else in the footer.
- `src/components/ui/Timeline.astro` — education timeline; supports optional `logo` per item (48px circular badge, falls back to a dot)
- `src/components/ui/Icon.astro` + `src/assets/icons/*.svg` — Tabler-outline style SVGs (stroke `currentColor`, 1.5 width). New icons must match this style and be registered in `src/config/social.ts` `SOCIAL_ICONS` if social.

### Config barrel (`src/config/index.ts` re-exports everything)

- `site.ts` — `SITE` (author, title, desc, website, ogImage, favicon), `THEME_CONFIG`, `SETTINGS`, `ANALYTICS` (GA4/Umami ids, currently empty)
- `pages.ts` — `PAGES` (per-page title/subtitle/isActive; subtitles double as **meta descriptions**)
- `navigation.ts` — `NAV_LINKS`
- `social.ts` — `SOCIALS` (GitHub, Mail, LinkedIn, Twitter/X, Hashnode) + `SOCIAL_ICONS` map
- `skills.ts` — `SKILL_CATEGORIES` (icon ids from https://skillicons.dev, rendered as `https://skillicons.dev/icons?i=<id>`)

## 4. SEO — How to Update (all of it lives in `src/layouts/BaseLayout.astro` + `src/config/site.ts`)

**Current state: fully configured and verified. Change carefully, never delete.**

| SEO element | Where | Notes |
|---|---|---|
| Title pattern `{page} \| Anik Das` | `BaseLayout.astro` `<title>` | page title comes from `PAGES.x.title` |
| Meta description | `BaseLayout` prop `description`; pages pass `PAGES.x.subtitle`; project details pass their own `description` frontmatter | when adding a page, ALWAYS pass a unique `description` |
| Canonical URL | `BaseLayout` (from `Astro.site` = `https://anikdascodes.github.io` in `astro.config.mjs`) | never add a `base` path — this is a user site served at root |
| Open Graph / Twitter cards | `BaseLayout` (`og:*`, `twitter:*`, `twitter:creator` = `@AnikCodes`) | default image `public/og-image.png` (1200×630) |
| OG image | `SITE.ogImage` = `og-image.png` | if the avatar/role changes, regenerate the banner (ImageMagick; dark gradient + circular avatar + name/role text) |
| JSON-LD Person schema | `BaseLayout` `jsonLd` object | jobTitle, Kolkata address, alumniOf (MAKAUT, BITS Pilani Digital), `knowsAbout`, `sameAs` auto-built from `SOCIALS` — update when bio facts change |
| robots.txt | `public/robots.txt` | sitemap URL must stay **absolute** |
| Sitemap | auto-generated by `@astrojs/sitemap` → `/sitemap-index.xml` | submitted in Search Console; nothing to maintain |
| Google verification | meta tag in `BaseLayout` + `public/googlec8391c95fcf8300e.html` | **NEVER remove either** |
| Robots meta | `BaseLayout` prop `robots` (default `index, follow`) | pass `noindex, nofollow` for pages that shouldn't rank |

**When adding a new page, the SEO checklist is:** unique `title` + `description` passed
to `BaseLayout` → appears in sitemap automatically → add to `NAV_LINKS` and `PAGES`.

## 5. Blog / Hashnode Integration

- Posts come from the owner's Hashnode publication **"Anik Das"**: `https://codeanik.hashnode.dev` (profile: `hashnode.com/@codeanik`).
- `src/pages/blog/index.astro` fetches `https://codeanik.hashnode.dev/rss.xml` **at build time** (server-side; the feed has no CORS so client-side fetching does NOT work). It parses `<item>` blocks with regex, renders up to 12 post cards, and falls back to a friendly message if the feed is empty/unreachable (must never break the build).
- **Freshness**: `.github/workflows/deploy.yml` has a `schedule` cron (`30 2 * * *` UTC daily) that rebuilds so new posts appear within a day. Keep this cron when editing the workflow.
- Hashnode's **GraphQL API is paid now** — do not "upgrade" the integration to `gql.hashnode.com`; RSS is the free, working approach.
- If the publication URL ever changes: update `HASHNODE_BLOG` in `blog/index.astro` (nothing else hardcodes it except `SOCIALS` Hashnode link).

## 6. Content Editing Recipes

- **Bio/About**: edit `src/content/bio.md` (frontmatter: name, avatar, shortBio, institution = "location line" in sidebar; body = About page).
- **Add a project**: create `src/content/projects/<slug>.md` with frontmatter `title`, `description`, `tags[]`, `external_url`, optional `image`. Card + detail page appear automatically. The 3 current projects are placeholders to be replaced.
- **Education entry**: append to `education:` list in `src/content/education.md` (`degree`, `institution`, `period`, optional `description`, optional `logo`). Logos live in `public/logos/*.png` — add the image there and reference as `logos/<file>.png`. Institution names use full form + abbreviation, e.g. "West Bengal Council of Higher Secondary Education (WBCHSE)".
- **Courses**: `courses:` list in the same file (`name`, `provider`, `year`, `url`, `description`). Currently placeholders.
- **Skills**: edit `SKILL_CATEGORIES` in `src/config/skills.ts` (categories: Languages / Web & Frameworks / Data & Databases / Tools & Platforms). Icon ids must exist on skillicons.dev. Currently generic defaults — owner is a data science person, so prefer Python/Pandas/sklearn-type stacks when given real data.
- **Order on Education page (fixed by owner):** 1) Education timeline → 2) Courses & Certifications → 3) Skills grid.

## 7. Images & Branding

- `public/avatar.png` — owner's real photo (sidebar + JSON-LD image). If replaced, regenerate ALL of: `favicon.png` (32px), `favicon.ico` (16/32/48 multi-size), `apple-touch-icon.png` (180px), `og-image.png` (1200×630) — ImageMagick `convert` is available on the owner's machine.
- `public/logos/` — education institution logos (bits-pilani-digital, makaut, wbchse, wbbse).
- Icons in `src/assets/icons/` auto-register by filename via `src/assets/icons.ts` glob.

## 8. Deployment & Git

- Workflow: `.github/workflows/deploy.yml` — builds with `withastro/action@v3` (Node 22) and deploys to GitHub Pages on: push to `main`, daily cron, manual dispatch. Pages source is set to "GitHub Actions" in repo settings.
- `node_modules/`, `dist/`, `.astro/` are gitignored and were purged from history-tracking once — **never `git add` them**.
- The workspace lives on a USB stick (`/media/anik/USB STICK2/...`) — always quote paths in shell commands.
- Repo: `github.com/anikdascodes/anikdascodes.github.io` (branch `main`). A Vercel deployment also exists but GitHub Pages is the primary target.

## 9. Verification Checklist (do this before saying "done")

1. `npm run build` succeeds (21+ pages).
2. If dev server is running: curl key routes → `/, /projects, /education, /blog, /contact` all return 200.
3. If SEO touched: check `dist/index.html` head for description/OG/JSON-LD correctness and confirm the google-site-verification tag is still present.
4. If blog touched: confirm post cards render (or fallback message) — build must not fail when the feed is down.
5. Tell the owner what changed and that it is **ready for them to push manually**.
