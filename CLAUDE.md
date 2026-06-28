# PSA Tanzania — Claude Code Guide

## Project Overview
Patient Safety Alliance Tanzania (PSA) is a youth-led nonprofit promoting patient safety and patient-centred care in Tanzania. This is a Next.js website implementing a design created in Framer.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 — configured via `@theme` in `app/globals.css`, no separate config file
- **Animations**: Framer Motion
- **Fonts**: Geist 600 (headings, via `next/font/google`) + Satoshi medium/bold (body, self-hosted via `next/font/local`)
- **Images**: `next/image` — Framer CDN URLs used directly as `src`
- **Content**: Static TypeScript data files in `data/`
- **QA**: Puppeteer screenshots (`scripts/screenshot.ts`)

## Path Alias
`@/*` maps to the project root. Always use this for imports:
```ts
import { Button } from "@/components/ui/Button"
import { events } from "@/data/events"
```

## Brand Colors
Defined as Tailwind tokens in `app/globals.css`. Use these class names:

| Class | Hex | Use |
|---|---|---|
| `navy-blue` | `#1B3888` | Hero bg, mission bg, dark sections |
| `sky-blue` | `#2E8FD0` | Buttons, links, icons |
| `light-blue` | `#45B3E8` | Hover states, badges |
| `yellow` | `#FFD166` | Accent CTA card, highlights |
| `ice-blue` | `#EBF5FC` | Alternating section backgrounds |
| `carbon-black` | `#181618` | Body text |
| `steel-gray` | `#575757` | Secondary text |

Example: `bg-navy-blue`, `text-sky-blue`, `border-yellow`

**Rule: Max 3 colors visible per screen.**

## Typography
- Headings: `font-heading` (Geist 600)
- Body: `font-body` (Satoshi medium)
- Never mix heading and body fonts within the same text node

| Style | Class pattern |
|---|---|
| Heading 1 | `font-heading text-[80px] leading-[1.1]` |
| Heading 2 | `font-heading text-[56px] leading-[1.1]` |
| Heading 4 | `font-heading text-[34px] leading-[1.3]` |
| Body | `font-body text-[18px] leading-[1.4]` |
| Lead | `font-body text-[20px] leading-[1.4]` |

## Design Rules
- **No decorative SVG backgrounds** — sections are clean and flat
- **White space is the primary design element** — be generous with padding
- **Tailwind utilities only** — no inline styles
- **Mostly white site** — navy used only for Hero, Mission/Pillars, and one CTA section
- All section containers: `max-w-[1460px] mx-auto px-[30px]`

## Framer MCP Connection
The original Framer design is accessible via MCP tools (`mcp__framer__*`). Use `getNodeXml` with a page or component `nodeId` to read design details when implementing a new page or component. Key node IDs:

| Page/Component | nodeId |
|---|---|
| Home | `augiA20Il` |
| About | `GPkShz2h3` |
| Blog listing | `tRXUFZoEG` |
| Blog post | `Fa7NxsszE` |
| Event listing | `PJqkanoxW` |
| Event detail | `x52gzxgle` |
| Contact | `Ozwo_ttiE` |
| Gallery | `ZqWxI86Jm` |
| FAQs | `SiHRMxPdj` |
| Volunteers | `ocoUvfugl` |
| Causes listing | `NjhLF3WGU` |
| Cause detail | `V10nJjoWh` |
| Become a Volunteer | `alhz1Ac66` |
| Causes static | `YFo5u1JRX` |
| 404 | `s7nQtp8_d` |
| Navigation component | `TLpAjTH_9` |
| Footer component | `Uox8ErlrU` |

## File Structure
```
app/                    # Next.js App Router pages
components/
  layout/               # Navigation, Footer, Dropdown
  ui/                   # Button, Badge, Avatar, Accordion, etc.
  cards/                # BlogCard, EventCard, CauseCard, etc.
  sections/             # Hero, MissionSection, CTASection, etc.
data/                   # Static TS content files
lib/
  types.ts              # Shared TypeScript interfaces
  fonts.ts              # Font configuration exports
public/
  fonts/                # Satoshi woff2 files
  logo.png              # PSA Tanzania logo
scripts/
  screenshot.ts         # Puppeteer QA screenshots
```

## Commands
```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Production build (must pass with 0 errors)
npm run lint      # ESLint check
npx ts-node scripts/screenshot.ts   # Take QA screenshots of all pages
```

## Content Types (lib/types.ts)
All content lives in `data/*.ts` files. Key interfaces:
- `BlogPost` — title, slug, date, excerpt, content, image, author
- `Event` — title, slug, date, location, description, image
- `Cause` — title, slug, description, image, category
- `Volunteer` — name, role, image, bio
- `FAQ` — question, answer, category
- `GalleryItem` — image, caption, category
- `LegalPage` — title, slug, content

## Framer Source Images
Images are served from `https://framerusercontent.com/`. Use them directly with `next/image`:
```tsx
<Image
  src="https://framerusercontent.com/images/..."
  alt="..."
  width={600}
  height={400}
/>
```
Add `framerusercontent.com` to `next.config.ts` image domains.
