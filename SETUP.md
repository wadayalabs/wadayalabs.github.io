# Wadaya Labs — Website

A product studio portfolio site for Wadaya Labs, built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Run locally

Requires [Node.js 18+](https://nodejs.org/) and either [npm](https://www.npmjs.com/) (comes with Node) or [Bun](https://bun.sh/).

```bash
# install dependencies
npm install        # or: bun install

# start the dev server
npm run dev        # or: bun run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build      # or: bun run build
npm run start      # or: bun run start
```

## Tech stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York style)
- **Fonts**: Geist (sans) + Fraunces (serif) via next/font
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Prisma ORM (SQLite) — configured but not used on the public site

## Project structure

```
src/
  app/
    page.tsx          — Home (Hero, Products, FeaturedGame, Contact)
    privacy/page.tsx  — Website Privacy Policy (website-only; GlowMind app has its own)
    layout.tsx        — Root layout, fonts, metadata
    globals.css       — Theme tokens, paper background, glass styles
  components/
    site/             — Navbar, Hero, Products, FeaturedGame, Contact, Footer, etc.
    wadaya-logo.tsx   — The "Rising Crown" logo mark (animated + static)
    ui/               — shadcn/ui component library
  lib/
    site-data.ts      — Products, game modes, stats, content
    utils.ts          — cn() helper
public/
  wadaya-logo.svg     — Favicon / mark (scalable)
  wadaya-icon.svg     — 512 Play Store icon source (branded bg)
  wadaya-icon-512.png — Play Store icon (512×512 PNG)
  wadaya-mark-512.png — Mark only, transparent (512×512 PNG)
  wadaya-lockup.svg   — Horizontal lockup (mark + wordmark)
  hero-bg.png         — Hero background texture
  games/              — GlowMind screenshots
.env                  — SQLite database URL (relative path, cross-platform)
```

## Important notes

### Privacy Policy
The `/privacy` page covers the **website only**. The GlowMind mobile app has its own
separate Privacy Policy (the detailed one with AdMob, permissions, UMP consent).
Host the app policy separately (Notion / GitHub Pages) and use THAT URL in
Google Play Console — not the website `/privacy` URL.

### Social media images
A separate `social-images.zip` is included with profile pictures and banners
for X, Instagram, YouTube, and TikTok. See its README for which image to use
where.

### Colors
The wordmark in the navbar uses:
- "Wadaya" = `--foreground` (deep ink, oklch(0.26 0.02 60) ≈ #2b221a)
- "Labs" = `--muted-foreground` (muted gray, oklch(0.48 0.018 70) ≈ #645c53)

The logo mark uses an ascending gradient: teal roots → emerald → amber → gold peak,
with a glossy white shine and a gold arrowhead crown.

### Cross-platform
The npm scripts (`dev`, `build`, `start`) use only standard Next.js commands —
no Unix-specific shell features. Works on Windows, macOS, and Linux.
