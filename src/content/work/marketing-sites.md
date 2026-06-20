---
title: "Marketing & Docs Sites"
kicker: "Web · Static"
summary: "Fast static sites and product docs built with Astro — component-driven, content in Markdown, auto-deployed on push. This site is the reference implementation."
outcomes:
  - "95–100 Lighthouse score on performance, accessibility, and SEO — consistently"
  - "Content authors update copy in Markdown — no CMS login, no build step on their end"
  - "Sub-2-second TTFB from Thailand via GitHub Pages CDN, zero server to maintain"
stack: ["Astro", "Tailwind CSS", "GitHub Actions", "Cloudflare DNS", "Markdown"]
previewType: "browser"
link: "https://codedmark.com"
linkLabel: "View this site"
order: 4
---

## The work

A collection of marketing and documentation sites built for products and studios across Thailand. Every project is static — HTML, CSS, and minimal JavaScript — built with Astro and deployed to GitHub Pages or Cloudflare Pages.

The goal is always the same: a site that loads fast on a 4G connection, scores clean on Lighthouse, and lets a non-technical client update copy in a Markdown file without touching code.

**This site is the reference implementation.**

## What we build

**Product landing pages.** Single-page marketing sites for SaaS products and mobile apps. Optimised for conversion — above-the-fold load under one second, clear CTA hierarchy, structured metadata for App Store and Open Graph previews.

**Technical documentation.** Docs sites built with Astro content collections — versioned, searchable, and auto-deployed on every push to the docs branch. Writers contribute in Markdown; the CI pipeline handles the rest.

**Company sites.** codedmark.com itself: Astro 5, Tailwind CSS, GitHub Actions → GitHub Pages. Dark/light theme with FOUC-safe localStorage persistence. Scroll-reveal animations with IntersectionObserver. Deploys in under 60 seconds end to end.

## Technical approach

**Astro for static output.** Zero JavaScript shipped by default. Interactivity — theme toggle, mobile menu, scroll reveal — is a small inline script, never a framework bundle. Pages build in milliseconds.

**Design tokens via CSS custom properties.** All colour, spacing, and typography values are `--custom-property` definitions. Dark mode switches a single `data-theme` attribute on `<html>`. No runtime CSS-in-JS, no theme provider.

**GitHub Actions CI/CD.** Build and deploy on every push to `main`. A failing build blocks the deploy — the live site is always the last passing build.

**Cloudflare DNS + GitHub Pages TLS.** CNAME flattening at the zone apex with DNS-only (grey cloud) so GitHub issues and renews Let's Encrypt certificates automatically. No Cloudflare proxy, no TLS mismatch.

## Outcomes

- Consistent 95–100 Lighthouse scores across performance, accessibility, and best practices
- Sub-2-second TTFB from Thailand and Southeast Asia
- Zero maintenance overhead: no server to patch, no database to back up, no CMS to update
- Non-technical clients update copy by editing a Markdown file — no developer required
