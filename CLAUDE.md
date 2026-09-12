# Agent Development Guide

A file for [guiding coding agents](https://agents.md/).

## Commands

- **Dev server:** `npm run dev` (Astro dev server, default port 4321)
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Type check:** `npx tsc --noEmit`

## Tech Stack

- **Framework:** Astro 7.x (Island Architecture, Node >=22.12)
- **UI:** React 18 (hydrated with `client:load`)
- **Styling:** Tailwind CSS 3 (via PostCSS, `postcss.config.mjs`) + custom CSS (Terminal Noir design system)
- **State:** nanostores + @nanostores/react
- **Content:** Astro Content Collections (Markdown, `glob` loader)
- **Syntax Highlighting:** Shiki (github-dark)

## Directory Structure

- `src/pages/` — Astro file-based routing (index, about, blog/[slug])
- `src/components/` — React components (islands) and Astro components
- `src/content/blog/{YYYYMMDD}-{slug}/` — Blog posts (ja.md, en.md, zh.md per post)
- `src/content.config.ts` — Content Collection schema (glob loader)
- `src/layouts/` — Astro layout (Layout.astro)
- `src/lib/` — Shared logic (blog-data.ts, i18n.ts)
- `src/styles/` — Global CSS (Terminal Noir design system)
- `public/images/` — Static images (sidebar bg, blog post images)
- `docs/` — Design notes and work log

## Blog Post Structure

Each blog post lives in `src/content/blog/{YYYYMMDD}-{slug}/` with 3 files
(e.g. `20210126-actor-model-di/`). The date prefix is only for sorting
directories internally; the public URL comes from the `postSlug` frontmatter
field and the displayed date from `date`, so the prefix may differ from them
without affecting the site.
- `ja.md` — Japanese (primary)
- `en.md` — English translation
- `zh.md` — Chinese translation

Frontmatter schema:
```yaml
---
title: "記事タイトル"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
excerpt: "記事の概要"
lang: "ja"        # ja | en | zh
postSlug: "slug"  # shared across languages; determines the URL /blog/{slug}
draft: false      # optional, hides from listing
---
```

When adding a new post, also add its metadata to `src/lib/blog-data.ts`.

## Design System

- Theme: "Terminal Noir" — dark terminal aesthetic with amber accent
- Fonts: JetBrains Mono (headings/code), IBM Plex Sans JP (body)
- Accent color: oklch(0.73 0.17 65) (amber)
- Layout: Fixed left sidebar (280px) + scrollable right content
- Markdown styles: `.prose` class in global.css
