# PSA Tanzania Website

The official website of **Patient Safety Alliance Tanzania (PSA)**, a youth-led nonprofit promoting patient safety, strengthening patient voices, and supporting a more responsive, inclusive, and accountable healthcare system in Tanzania.

**Live site:** [psatanzania.org](https://psatanzania.org)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (tokens in `app/globals.css`, no config file) |
| Animation | Framer Motion + `@paper-design/shaders-react` (hero background) |
| Smooth scroll | Lenis |
| Fonts | Geist 600 (headings) and Satoshi (body, self-hosted) |
| Email | Nodemailer via Gmail SMTP (API routes) |
| Hosting | Vercel, DNS and email routing on Cloudflare |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run build      # production build, must pass with 0 errors
npm run lint       # ESLint
```

## Project Structure

```
app/                    Pages (App Router)
  api/                  Contact and volunteer form endpoints
  causes/               Programs listing + program detail pages
  legal-pages/          Privacy policy, terms of use
  sitemap.ts            Auto-generated sitemap
  robots.ts             Auto-generated robots.txt
  icon.png              Favicon
  opengraph-image.png   Social share card
components/
  layout/               Navigation, Footer, SmoothScroll, ScrollToTop
  sections/             Hero, PageHero, MissionSection, StickyValueStack, ...
  cards/                CauseCard, VolunteerCard, CounterCard
  ui/                   Button, Badge, Accordion, StackingCards, ProgramCover, ...
  illustrations/        Custom SVG illustrations
data/                   All site content (TypeScript files)
lib/
  site.ts               Canonical site URL and metadata constants
  types.ts              Shared content interfaces
  pillar-icons.tsx      Icons for the six strategic pillars, keyed by slug
  mailer.ts             Nodemailer transport (Gmail SMTP)
public/
  team/                 Team member photos
  fonts/                Satoshi woff2 files
```

## Editing Content

All content lives in plain TypeScript files under `data/`. No CMS is required.

| File | Controls |
|---|---|
| `data/causes.ts` | The six strategic pillars shown on Home, Programs, and detail pages |
| `data/volunteers.ts` | Team members. Set `rank` to `leadership` or `member` |
| `data/faqs.ts` | FAQ questions grouped by category |
| `data/legal.ts` | Privacy policy and terms of use text |

Adding a team member: drop the photo in `public/team/`, add an entry in `data/volunteers.ts`, done. If a photo has no space above the head, generate a padded version rather than letting the crop cut it.

Content is aligned with the PSA Strategic Plan 2026-2029. If the plan changes, update `data/causes.ts` (pillars), `components/sections/StickyValueStack.tsx` (mission, vision, values), and `components/sections/MissionSection.tsx` (pillar accordion).

## Brand

Colors are defined as Tailwind tokens in `app/globals.css`:

| Token | Hex | Use |
|---|---|---|
| `navy-blue` | `#1B3888` | Hero, dark sections, footer |
| `sky-blue` | `#2E8FD0` | Buttons, links, icons |
| `light-blue` | `#45B3E8` | Accents, hover states |
| `ice-blue` | `#EBF5FC` | Light section backgrounds, covers |
| `carbon-black` | `#181618` | Body text |
| `steel-gray` | `#575757` | Secondary text |

Rules: max 3 colors visible per screen, headings use `font-heading`, body uses `font-body`, no decorative stock imagery. Yellow is not part of the brand.

## Forms and Email

- Inbound mail: `info@psatanzania.org` forwards to the org Gmail via Cloudflare Email Routing.
- Outbound (form submissions): `app/api/contact` and `app/api/volunteer` send email through Gmail SMTP using `lib/mailer.ts`.

Required environment variables (in `.env.local` locally, and in Vercel project settings for production):

```
GMAIL_USER=psatz2026@gmail.com
GMAIL_APP_PASSWORD=<16-character Google App Password>
```

The App Password requires 2-Step Verification on the Google account (Google Account, then Security, then App passwords). Note: the front-end forms still need to be wired to these API routes.

Never commit `.env.local`. It is gitignored along with `.mcp.json` and internal documents.

## Deployment

- Push to `main` deploys automatically via Vercel.
- DNS is managed on Cloudflare. The Vercel records (`A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`) must stay set to **DNS only** (grey cloud), not proxied.
- If the production domain ever changes, update `SITE_URL` in `lib/site.ts`. The sitemap, robots, canonical URLs, and Open Graph tags all derive from it.

## QA

Production build must pass cleanly before merging:

```bash
npm run build
```

For visual checks, Puppeteer scripts (using the system Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe` on Windows) have been used throughout development. Check pages at 390px width for mobile: no horizontal overflow is the rule.
