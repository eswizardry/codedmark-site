# codedmark.com

Company website for **CodeDMark** — a software studio in Thailand. Single-page marketing and portfolio site.

**Live:** https://codedmark.com  
**Repo:** https://github.com/eswizardry/codedmark-site  
**Design reference:** https://claude.ai/design/p/eeeeb37a-bb14-4b4e-8bc9-3e54fb58bf70

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | [Astro 5](https://astro.build) — static output, zero JS by default |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) + CSS custom properties for tokens |
| Content | Astro Content Collections (Markdown frontmatter) |
| Fonts | Google Fonts CDN — Plus Jakarta Sans, JetBrains Mono, IBM Plex Sans Thai |
| Deploy | GitHub Actions → GitHub Pages |
| Domain | `codedmark.com` via Cloudflare DNS (CNAME flattening, DNS-only) |

---

## Local development

```bash
# Install dependencies (first time only)
npm install

# Start dev server at http://localhost:4321
npm run dev

# Type-check all Astro files
npm run check

# Build for production (output to dist/)
npm run build

# Preview the production build locally
npm run preview
```

Requires Node.js 18+.

---

## Project structure

```
src/
  layouts/
    BaseLayout.astro       # <head>, fonts, FOUC-safe theme script
  pages/
    index.astro            # Single page — composes all section components
  components/
    Mark.astro             # Reusable SVG logo mark (props: size)
    Nav.astro              # Sticky nav + theme toggle + mobile menu
    Hero.astro             # Hero headline, lead, Thai tagline, CTA
    DomainStrip.astro      # "We work across…" chip row
    Services.astro         # 6-card service grid
    Work.astro             # Portfolio grid — reads from content collection
    Stack.astro            # 4-col tech stack cards
    Process.astro          # 4-step process strip
    About.astro            # Studio bio + identity card
    Contact.astro          # Dark contact panel with mailto CTA
    Footer.astro           # Links + legal
    previews/
      PhoneMock.astro      # CSS phone mock (M1 Hero card)
      TerminalMock.astro   # CSS terminal mock (Firmware card)
      WindowMock.astro     # CSS desktop window mock (Qt HMI card)
      BrowserMock.astro    # CSS browser mock (Marketing sites card)
  content/
    config.ts              # Zod schema for the "work" collection
    work/                  # One .md file per portfolio entry
      01-m1-hero.md
      02-sensor-node.md
      03-industrial-panel.md
      04-marketing-sites.md
  styles/
    global.css             # All CSS: tokens, layout, components, breakpoints
public/
  CNAME                    # codedmark.com (GitHub Pages custom domain)
  favicon.svg
.github/
  workflows/
    deploy.yml             # Build + deploy to GitHub Pages on push to main
```

---

## How to add a portfolio project

Create a new `.md` file in `src/content/work/`. Name it with a numeric prefix so ordering is predictable:

```bash
touch src/content/work/05-my-new-project.md
```

Fill in the frontmatter — no body content needed:

```markdown
---
title: "Your project title"
kicker: "Category · Type"        # e.g. "Mobile · EdTech" — shown above the title
summary: "One or two sentences describing what was built and why it matters."
stack: ["Flutter", "Dart", "Firebase"]   # Tech chips shown below the summary
previewType: "phone"             # phone | terminal | window | browser
order: 5                         # Controls sort order in the grid
---
```

**`previewType` options:**

| Value | Renders |
|---|---|
| `phone` | CSS phone device with learning-card UI (green gradient bg) |
| `terminal` | CSS terminal with a build log (dark bg) |
| `window` | CSS desktop window with sidebar + bar chart (page bg) |
| `browser` | CSS browser with a "Deploy ✓" button (green gradient bg) |

To use a real screenshot instead of a CSS mock, add the image to `public/` and edit `Work.astro` to render an `<img>` when a `screenshot` frontmatter field is present.

Push to `main` — the site redeploys automatically.

---

## How to edit site copy

Every piece of copy lives in its component file. Open the relevant file in `src/components/` and edit directly — no CMS, no database.

| What to change | File |
|---|---|
| Headline ("Software, marked good.") | `src/components/Hero.astro` |
| Lead paragraph + Thai tagline | `src/components/Hero.astro` |
| "We work across" chips | `src/components/DomainStrip.astro` — edit the `chips` array |
| Service cards (title, desc, tags, icon) | `src/components/Services.astro` — edit the `services` array |
| Tech stack columns | `src/components/Stack.astro` — edit the `cols` array |
| Process steps (Scope / Build / Test / Ship) | `src/components/Process.astro` — edit the `steps` array |
| About paragraphs + identity card rows | `src/components/About.astro` |
| Contact heading + CTA links | `src/components/Contact.astro` |
| Footer links + legal line | `src/components/Footer.astro` |
| `<title>` + meta description | `src/layouts/BaseLayout.astro` (defaults) or `src/pages/index.astro` |

---

## How to change the email / contact

Open `src/components/Contact.astro` and update the `href` on the Email button:

```html
href="mailto:your@email.com?subject=Project%20enquiry%20%E2%80%94%20CodeDMark"
```

The same email appears in `src/components/About.astro` (identity card) and `src/components/Footer.astro`. Update all three to stay consistent.

---

## How to add a service card

Open `src/components/Services.astro` and add an entry to the `services` array:

```js
{
  title: 'AI integrations',
  desc: 'LLM-powered features wired into your existing product — retrieval, agents, and structured output.',
  tags: ['Python', 'Claude API', 'RAG'],
  icon: `<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>`,  // inline SVG path
},
```

The icon is an inline SVG path string. Browse [Heroicons](https://heroicons.com) (outline, 24px) or [Lucide](https://lucide.dev) for stroke-based icons — copy just the inner `<path>`/`<circle>` elements (not the outer `<svg>`).

---

## How to change the color scheme / design tokens

All colors are CSS custom properties in `src/styles/global.css`. The `:root` block is light mode; `[data-theme="dark"]` is dark mode:

```css
:root {
  --green: #2E8C50;        /* primary accent */
  --green-ink: #1F6A3A;   /* accent on light backgrounds */
  --green-bright: #3DBA6B; /* accent on dark backgrounds */
  --ink: #16181D;          /* body text */
  --bg: #F2F4F6;           /* page background */
  /* ... */
}
```

Change a token here and it propagates everywhere — nav, buttons, cards, section backgrounds.

---

## How to add a new page section

1. Create `src/components/MySection.astro`
2. Use existing CSS classes (`.blk` for section padding, `.wrap` for max-width, `.sec-head` for heading + subtext, `.eyebrow` for the mono label, `.reveal` for scroll-reveal)
3. Import and add `<MySection />` in `src/pages/index.astro` at the position you want

Example skeleton:

```astro
---
---
<section class="blk" id="my-section">
  <div class="wrap">
    <div class="sec-head reveal">
      <div>
        <span class="eyebrow">Label</span>
        <h2>Section heading.</h2>
      </div>
      <p class="sub">Supporting text here.</p>
    </div>
    <!-- content -->
  </div>
</section>
```

---

## Dark mode

The theme toggle in the nav flips `data-theme="dark"` on `<html>` and persists the choice to `localStorage['cdm-theme']`. An inline script in `BaseLayout.astro` reads this before first paint to avoid a flash.

All color switching is handled by the CSS custom properties in `global.css` — no Tailwind `dark:` variants needed.

---

## Deployment

Deploys automatically on every push to `main` via `.github/workflows/deploy.yml`:

1. **build** job — installs deps, runs `npm run build`, uploads `dist/` as a Pages artifact
2. **deploy** job — deploys the artifact to GitHub Pages

To deploy manually: go to **Actions → Deploy codedmark.com to GitHub Pages → Run workflow**.

To preview a change locally before pushing:
```bash
npm run build && npm run preview
```

---

## Domain & DNS

| Setting | Value |
|---|---|
| Registrar / DNS | Cloudflare (CNAME flattening at zone apex, DNS-only) |
| CNAME record | `codedmark.com → eswizardry.github.io` |
| GitHub Pages custom domain | Set in repo Settings → Pages |
| CNAME file | `public/CNAME` — must contain `codedmark.com` |
| TLS | Issued by GitHub (Let's Encrypt) — auto-renews |

**Do not proxy the Cloudflare record** (keep it grey cloud / DNS-only). If switched to orange cloud, GitHub can't verify the domain to issue/renew the TLS cert.

---

## Design reference

The pixel-reference HTML prototype lives at:
`claude.ai/design/p/eeeeb37a-bb14-4b4e-8bc9-3e54fb58bf70`

It contains the full identity sheet (`CodeDMark Identity v4 - Black Green.html`) with logo construction, color tokens, and favicon specs. The handoff README (`design_handoff_codedmark_site/README.md`) documents every section's spacing, typography, and interaction in detail.

---

## Fonts

Three font families loaded from Google Fonts:

| Family | Use |
|---|---|
| Plus Jakarta Sans | All body and display text |
| JetBrains Mono | Labels, eyebrows, code chips, tags |
| IBM Plex Sans Thai | Thai language text (tagline, legal, identity card) |

To self-host (better performance, no external request): install the [`@fontsource`](https://fontsource.org) packages and import in `BaseLayout.astro` instead of the Google Fonts `<link>`.

---

## Logo mark

The logo is an inline SVG — two round-cap strokes:

```
Chevron: M 47 28 L 23 50 L 47 72   stroke #FFFFFF   (white, both themes)
Check:   M 45 55 L 58 68 L 86 32   stroke #3DBA6B   (green)
```

Sits in a rounded-square tile (`.mk`, `border-radius: 26%`, bg `--icon-bg`). Rendered by `src/components/Mark.astro`. Pass `size` prop to scale:

```astro
<Mark size={54} />   <!-- identity card -->
<Mark size={38} />   <!-- nav / footer -->
```
