# PSH Homepage Revamp — Design Spec

**Date:** 2026-08-18
**Status:** Approved (design) — pending spec review
**Scope of this spec:** The **homepage** + shared layout (Navbar, Footer) + design-token foundation. Inner pages (About, Services, Our Work, Clients, Pricing) are **out of scope here** and will be brainstormed separately, restyling recovered content from the old HTML site (git history).

## 1. Goal

Rebuild the Purple Studio Hub homepage to closely match the provided reference mockup: a modern, dark-hero SaaS-style landing page for a social-media-management agency, with a purple accent, phone + analytics mockup, feature grids, a work carousel, testimonials, and footer.

- **Fidelity:** Match the reference closely (layout, sections, colors, copy).
- **Copy/stats:** Reproduced from the reference as **placeholder** content the user will edit later — **except** footer contact, which uses **real** details.
- **Media:** Use real images from the existing `/assets` folder where they fit; styled CSS/SVG for elements with no matching asset (brand wordmarks, analytics graphs, avatar cluster).
- **Motion:** Subtle only — hover states, button transitions, gentle CSS fade/rise on section reveal. No animation library.

## 2. Tech approach

- Existing **Next.js 15 (pages router) + Tailwind CSS 3** scaffold. Replace the starter `src/pages/index.js`.
- **Componentized**: each section is its own component in `src/components/`, composed in `index.js`.
- Shared **`Navbar`** and **`Footer`** built to be reused across future inner pages.
- Design tokens (colors, radius, fonts) defined once in `tailwind.config.mjs` (`theme.extend`) + `globals.css`.
- Fonts via `next/font`: a clean sans (Inter or Geist) for body/UI; a serif (e.g. Playfair Display / DM Serif Display) for the accent serif headlines used in the reference (e.g. "Your business deserves better content").
- No new runtime dependencies. Interactions (carousel, tab filter, mobile menu) via React state + CSS scroll-snap.

### File structure
```
src/
  pages/
    index.js            # composes the homepage sections
  components/
    Navbar.js
    Footer.js
    home/
      Hero.js           # includes PhoneMockup + AnalyticsCards
      StatsBar.js
      WhyChooseUs.js
      WhoWeHelp.js
      OurWork.js        # carousel + tab filters
      BrandsTestimonials.js
      CtaBand.js
  styles/
    globals.css         # tokens, base, reveal-animation utility
```
PSH logo copied from `assets/PSH logo.png` into `public/` for clean serving.

## 3. Design tokens

| Token | Value (approx) | Use |
|---|---|---|
| `--purple` | `#7C3AED` | primary accent: buttons, eyebrow labels, icons, highlighted headline text, check bullets |
| `--purple-dark` | `#6D28D9` | button hover |
| `--ink` / dark bg | `#0F0A1E` → `#171029` gradient | hero, dark panels, CTA band, footer |
| `--surface` | `#FFFFFF` | mid-section background, stat card |
| `--muted` | `#6B7280` | body/subtext on light |
| `--muted-light` | `#C4B5FD`/`#9CA3AF` | subtext on dark |
| radius | `xl` (cards ~16px), `full` (pill buttons) | |
| shadow | soft, low-opacity purple-tinted | floating cards, stat bar |

Buttons: pill-shaped; primary = purple fill + white text + right-arrow icon; secondary = text/underline link with arrow.

## 4. Sections (top → bottom)

1. **Navbar** — sticky, transparent-over-hero → solid on scroll. Left: PSH logo. Center/right: links `Home, About Us, Services, Our Work, Clients, Pricing`. Right: purple-outline "Book a Free Call" pill. Mobile: hamburger toggling a menu (React state).

2. **Hero** (dark gradient) — two-column.
   - Left: eyebrow pill ("SOCIAL MEDIA MANAGEMENT THAT DRIVES REAL GROWTH"), H1 "We Create Content." + purple "You Get Results.", subtext paragraph, primary CTA "Book a Free Strategy Call" + secondary "View Our Work →", then an avatar cluster + "120+ Brands Trust Us".
   - Right: **PhoneMockup** — CSS phone frame containing an Instagram-profile layout (avatar, counts 480/12.1K/230, bio, Follow/Message, a 3×3 grid of images pulled from `/assets` — e.g. blog/brand/fashion shots). Three floating **AnalyticsCards** (Reach 1.2M+ +320%, Engagement 8.6% +230%, Profile Visits 48K+ +180%) each with a small inline SVG sparkline/bar graphic (styled, not from assets).

3. **StatsBar** — white rounded card overlapping hero bottom: purple star badge + "Trusted by 120+ Businesses", then 4 stats (120+ Brands Managed · 5+ Years Experience · 5000+ Creatives Delivered · Millions Organic Views) with purple numbers and divider lines.

4. **WhyChooseUs** — centered eyebrow "WHY CHOOSE PURPLE STUDIO HUB?" + H2 + a 5-column row of icon features (Finest Grid, Sharp Content Strategy, High Quality Reels, Hook-Based Reel Scripts, Best Pricing), each: purple line-icon, title, short blurb; thin vertical dividers between. Collapses to 2-col / 1-col on smaller screens.

5. **WhoWeHelp** — two columns.
   - Left: eyebrow "WHO WE HELP" + H2 + two-column checklist of audiences (Small Business Owners, Personal Brands, Coaches & Consultants, Doctors & Clinics, Real Estate, Beauty & Skincare, Fashion & Lifestyle, E-commerce, Restaurants & Cafés, And Many More…) each with a small purple line-icon.
   - Right: **dark panel** "WHAT YOU GET EVERY MONTH" with two columns of purple-check bullets (Premium Static Posts, High-Quality Reels, Story Content, Content Calendar, Hook-Based Scripts, Captions, Hashtag Research, Posting & Scheduling, Monthly Analytics, Strategy Calls).

6. **OurWork** — eyebrow "OUR WORK" + H2 "Creatives that look good. Reels that get results." + filter pills (Reels / Instagram Feeds / Static Posts; active = purple). Horizontal **carousel** of vertical reel cards (dark thumbnail from `/assets` images/videos, overlay title text, ▶ view-count badge). Prev/next circular purple arrow buttons; CSS scroll-snap; drag/scroll on touch. Tabs swap the card set (using different asset groupings).

7. **BrandsTestimonials** — two parts.
   - "BRANDS WE'VE WORKED WITH": a row of **styled wordmarks** (detoxie, AARANYA, Herbal Me, INDUS ROOTS, mimo, & More) — text-based since no logo files exist (placeholder to swap later).
   - "WHAT OUR CLIENTS SAY": testimonial card with 5-star rating, quote, avatar + name, prev/next arrows and slider dots. Multiple testimonials cycled via React state.

8. **CtaBand** — dark rounded panel: serif headline "Your business deserves better content." + subtext, "Book Your Free Strategy Call" purple button, and 3 trust ticks (No Commitment · 30-Min Strategy Call · Personalized Plan).

9. **Footer** (dark) — 4 columns: (a) PSH logo + tagline "Social Media Management for Brands & Personal Brands" + social icons (Instagram, LinkedIn, YouTube, email); (b) Quick Links (Home, About Us, Services, Our Work, Pricing); (c) Services (Social Media Management, Content Creation, Reels & Video Editing, Content Strategy, Personal Branding); (d) "Let's Connect" with **real** details:
   - Phone: **+91 7011182346**
   - Email: **hello@purplestudiohub.com**
   - Site: **www.purplestudiohub.com**
   - Instagram: instagram.com/purplestudiohub · LinkedIn: linkedin.com/company/purple-studio-hub
   Bottom bar: "© 2026 Purple Studio Hub. All Rights Reserved."

## 5. Asset mapping (from `/assets`)

- **Logo:** `PSH logo.png` → `public/psh-logo.png` (Navbar + Footer).
- **Phone IG grid (9 imgs):** mix of `Blg1–6.PNG`, `fashion.PNG`, `shoes.PNG`, `skincare2.PNG`, `UGC.PNG`, `brnd-skin.PNG`.
- **Our Work reel cards:** `Blg1–6.PNG`, `fashion4.PNG`, `shoes2.PNG`, `UGC4 cp.PNG`, `men-brnds.PNG`, plus videos (`vid.mp4`, `Littlebox Clothing.mp4`) as poster/hover where convenient.
- **Testimonial avatar:** `about us 2.png` / `c-us.PNG` / a WhatsApp photo (whichever reads as a headshot).
- **No asset (styled placeholders):** analytics sparklines/bars, brand wordmarks, hero avatar cluster.

Images served from `/public/assets/…` (copy the referenced files) via `next/image` with width/height + `alt`.

## 6. Responsiveness & accessibility

- Breakpoints: desktop (≥1024) full layout; tablet (≥640) 2-col grids; mobile single column, hamburger nav, horizontally-scrollable carousel and stats.
- Semantic landmarks (`header/nav/main/section/footer`), heading hierarchy, `alt` on all images, keyboard-operable buttons/tabs/carousel, visible focus states, respects `prefers-reduced-motion` (disables reveal animation).

## 7. Out of scope (this spec)

- Inner pages (About, Services, Our Work, Clients, Pricing) — separate brainstorm, restyling old HTML content.
- Real brand logo images, final copy, backend/forms (CTAs link to a placeholder booking URL / `mailto` for now).
- Blog/resources pages.

## 8. Success criteria

- Homepage visually matches the reference across all 9 sections on desktop.
- Fully responsive with no layout breakage down to ~360px.
- No new dependencies; `next build` succeeds; no console errors.
- Navbar/Footer are reusable components for future inner pages.
