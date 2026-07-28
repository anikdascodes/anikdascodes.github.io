# 👋 Anik Das — Personal Portfolio

[![Astro](https://img.shields.io/badge/ASTRO-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind](https://img.shields.io/badge/TAILWIND-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deploy](https://github.com/anikdascodes/anikdascodes.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/anikdascodes/anikdascodes.github.io/actions/workflows/deploy.yml)

Personal portfolio and blog of **Anik Das** — Data Science & AI student from Kolkata, India.

> 🌐 **Live site: [anikdascodes.github.io](https://anikdascodes.github.io)**

## 📄 Pages

| Page | What's there |
| :--- | :--- |
| **About** (`/`) | Who I am, what I do |
| **Projects** (`/projects`) | Things I've built |
| **Education** (`/education`) | Degrees, courses & certifications, and my skills |
| **Blog** (`/blog`) | Latest posts, auto-synced from my [Hashnode blog](https://codeanik.hashnode.dev) |
| **Contact** (`/contact`) | Email, GitHub, LinkedIn, X, Hashnode |

## ✨ How it works

- **Astro 6 + Tailwind CSS v4** — static site, minimal client-side JavaScript
- **Markdown-driven content** — bio, projects, and education live in `src/content/*.md`
- **Hashnode blog integration** — the Blog page fetches my Hashnode RSS feed at build time; a scheduled GitHub Actions rebuild (daily) keeps it fresh automatically
- **Auto-deploy** — every push to `main` builds and deploys to GitHub Pages
- **SEO-ready** — sitemap, Open Graph/Twitter cards, JSON-LD structured data, Google Search Console verified
- **Light/Dark mode** — theme toggle in the footer

## 🚀 Run locally

Requires **Node.js >= 22.12.0**.

```bash
git clone https://github.com/anikdascodes/anikdascodes.github.io.git
cd anikdascodes.github.io
npm install
npm run dev     # http://localhost:4321
```

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production into `./dist/` |
| `npm run preview` | Preview the production build locally |

## 📂 Project structure

```text
/
├── public/                 # Static assets (avatar, favicons, og-image, logos/, robots.txt)
├── src/
│   ├── config/             # ⚙️ Site config: site.ts, pages.ts, navigation.ts, social.ts, skills.ts, themes.ts
│   ├── content/            # 📝 Markdown content: bio.md, education.md, projects/
│   ├── layouts/            # BaseLayout (SEO head), listing/detail wrappers
│   ├── components/         # Sidebar, navbar, footer, timeline, cards, icons
│   ├── pages/              # Routes: index, projects, education, blog, contact, tags
│   └── styles/global.css   # Theme colors & base styles
├── SKILL.md                # 🤖 Guide for AI agents editing this repo (read first!)
└── .github/workflows/      # Build & deploy to GitHub Pages (push + daily cron)
```

## 🤖 For AI agents

If you're an AI coding agent working on this repository, **read [`SKILL.md`](SKILL.md) before making any changes.** It documents the full site map, SEO rules, the Hashnode integration, and hard constraints.

## 🙏 Credits

Built on top of the excellent [academic-portfolio-astro](https://github.com/rubzip/academic-portfolio-astro) template by [@rubzip](https://github.com/rubzip), heavily customized.
