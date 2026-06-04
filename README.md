# HerbGuide

Lightweight Astro site for `herbguide.store`, designed to stay simple enough for Cloudflare Pages free hosting.

## Stack

- Astro
- Static output
- Cloudflare adapter
- Sitemap generation

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Optional verification tokens

Copy `.env.example` to `.env` and fill in any tokens you want to use:

```bash
PUBLIC_GOOGLE_SITE_VERIFICATION=
PUBLIC_BING_SITE_VERIFICATION=
```

If these are present, the shared site layout will add the matching meta tags automatically.

## AdSense

The site layout already includes this global AdSense client:

- `ca-pub-4966684354825438`

## Cloudflare Pages deployment

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist/client`

If Cloudflare detects Astro automatically, keep its generated defaults only if the output directory still points to the built static client files.
