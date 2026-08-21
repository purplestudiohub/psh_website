# PSH Homepage Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Purple Studio Hub homepage in Next.js + Tailwind to closely match the reference mockup, with reusable Navbar/Footer for future inner pages.

**Architecture:** Next.js 15 pages-router. Design tokens live in `tailwind.config.mjs` + `globals.css`. Each homepage section is an isolated component under `src/components/`; `src/pages/index.js` composes them between a shared `Navbar` and `Footer`. Images come from `/public/assets` (copied from the repo `assets/` folder) via `next/image`. Interactions (mobile menu, work-carousel, work-tabs, testimonial slider) use React `useState`/refs — no new dependencies. Subtle reveal-on-scroll via a small CSS/IntersectionObserver utility that respects `prefers-reduced-motion`.

**Tech Stack:** Next.js 15.1.5 (pages router), React 19, Tailwind CSS 3.4, `next/font` (Inter + a serif display face), `next/image`.

## Global Constraints

- No new runtime dependencies (no Framer Motion, no carousel lib, no icon lib that adds deps — use inline SVG for icons).
- Tailwind CSS 3.4 utility classes; shared tokens defined once in `tailwind.config.mjs` `theme.extend` and `globals.css` `:root`.
- Purple accent `#7C3AED` (hover `#6D28D9`); dark bg gradient `#0F0A1E → #171029`; light surface `#FFFFFF`; muted text `#6B7280`.
- Pill buttons; primary = purple fill + white text + right-arrow SVG; secondary = arrow text-link.
- All copy/stats from the reference are placeholder EXCEPT footer contact, which is real: phone `+91 7011182346`, email `hello@purplestudiohub.com`, site `www.purplestudiohub.com`, Instagram `instagram.com/purplestudiohub`, LinkedIn `linkedin.com/company/purple-studio-hub`.
- Copyright line: `© 2026 Purple Studio Hub. All Rights Reserved.`
- CTAs link to placeholder `#contact` / `mailto:hello@purplestudiohub.com` (no booking backend).
- Every image uses `next/image` with explicit `width`/`height` (or `fill` + sized parent) and descriptive `alt`.
- Fully responsive down to 360px; semantic landmarks; keyboard-operable interactive controls; visible focus states.
- Verification per task: `npm run build` succeeds AND the section renders correctly in `npm run dev` with no browser console errors. (No unit-test framework in this project by design.)

---

### Task 1: Design tokens, fonts, global styles, and asset copy

**Files:**
- Modify: `tailwind.config.mjs`
- Modify: `src/styles/globals.css`
- Modify: `src/pages/_app.js` (apply font variables at root)
- Create: `public/assets/` (copy selected images from repo `assets/`)
- Create: `public/psh-logo.png` (copy of `assets/PSH logo.png`)

**Interfaces:**
- Produces: Tailwind color tokens `purple`, `purple-dark`, `ink`, `ink-2`, `surface`, `muted`, `muted-light`; font CSS vars `--font-sans`, `--font-serif`; a `.reveal` utility class + `[data-revealed]` reveal animation; radius/shadow tokens. Consumed by all later tasks.

- [ ] **Step 1: Copy the images the homepage will reference into `public/assets`**

Run (from `psh/`):
```bash
mkdir -p public/assets
cp "assets/PSH logo.png" public/psh-logo.png
cp assets/Blg1.PNG assets/Blg2.PNG assets/Blg3.PNG assets/Blg4.PNG assets/Blg5.PNG assets/blg6.PNG public/assets/
cp assets/fashion.PNG assets/fashion4.PNG assets/shoes.PNG assets/shoes2.PNG assets/skincare2.PNG assets/brnd-skin.PNG assets/men-brnds.PNG public/assets/
cp assets/UGC.PNG "assets/UGC4 cp.PNG" "assets/about us 2.png" assets/c-us.PNG public/assets/
```
Note: filenames with spaces/caps are kept as-is; components reference the exact copied names (spaces URL-encoded by `next/image` automatically). Rename on copy any file with spaces to a hyphenated safe name to avoid friction: e.g. `cp "assets/UGC4 cp.PNG" public/assets/ugc4.png`, `cp "assets/about us 2.png" public/assets/about-us-2.png`. Record the final `/public/assets` filenames for use in later tasks.

- [ ] **Step 2: Add design tokens to `tailwind.config.mjs`**

Replace `theme.extend` with:
```js
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      purple: { DEFAULT: "#7C3AED", dark: "#6D28D9", soft: "#EDE9FE" },
      ink: { DEFAULT: "#0F0A1E", 2: "#171029" },
      surface: "#FFFFFF",
      muted: { DEFAULT: "#6B7280", light: "#9CA3AF" },
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      serif: ["var(--font-serif)", "Georgia", "serif"],
    },
    boxShadow: {
      card: "0 10px 40px -10px rgba(124,58,237,0.25)",
      soft: "0 8px 30px rgba(15,10,30,0.08)",
    },
    borderRadius: { xl2: "1.25rem" },
  },
},
```

- [ ] **Step 3: Set up fonts in `src/pages/_app.js`**

```js
import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
```

- [ ] **Step 4: Replace `src/styles/globals.css` base + reveal utility**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

body { color: var(--foreground); background: var(--background); }

/* Scroll-reveal: hidden by default, shown when [data-revealed] set by IntersectionObserver */
.reveal { opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
.reveal[data-revealed="true"] { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* Hide scrollbar on horizontal carousels while keeping scroll */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: build succeeds (index.js still the starter is fine at this point).

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.mjs src/styles/globals.css src/pages/_app.js public/assets public/psh-logo.png
git commit -m "chore: add design tokens, fonts, global styles, and homepage assets"
```

---

### Task 2: Reveal hook + shared UI primitives

**Files:**
- Create: `src/components/useReveal.js`
- Create: `src/components/ui.js`

**Interfaces:**
- Produces:
  - `useReveal()` → returns a `ref` to attach to a section; sets `data-revealed="true"` when it enters the viewport (via IntersectionObserver, once).
  - `Button({ href, children, variant = "primary", className })` → pill button; `variant` in `"primary" | "outline" | "link"`; renders an `<a>` with a right-arrow SVG.
  - `Eyebrow({ children })` → uppercase purple tracking-wide label.
  - `ArrowIcon({ className })`, `CheckIcon({ className })` → inline SVGs.
- Consumed by all section tasks.

- [ ] **Step 1: Create `src/components/useReveal.js`**

```js
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-revealed", "true");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}
```

- [ ] **Step 2: Create `src/components/ui.js`**

```js
export function ArrowIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#7C3AED" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.2em] uppercase text-purple ${className}`}>
      {children}
    </p>
  );
}

export function Button({ href = "#contact", children, variant = "primary", className = "" }) {
  const base = "inline-flex items-center gap-2 rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2";
  const styles = {
    primary: "bg-purple text-white hover:bg-purple-dark px-6 py-3",
    outline: "border border-purple text-purple hover:bg-purple hover:text-white px-6 py-3",
    link: "text-current hover:text-purple underline underline-offset-4 px-0 py-0",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <ArrowIcon />
    </a>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds (components unused yet — that's fine; Next tree-shakes).

- [ ] **Step 4: Commit**

```bash
git add src/components/useReveal.js src/components/ui.js
git commit -m "feat: add reveal hook and shared UI primitives"
```

---

### Task 3: Navbar (shared)

**Files:**
- Create: `src/components/Navbar.js`
- Modify: `src/pages/index.js` (temporarily render `<Navbar />` to verify)

**Interfaces:**
- Consumes: `Button` from `ui.js`.
- Produces: `Navbar()` default export. Links array `[Home #, About Us /about, Services /services, Our Work /work, Clients /clients, Pricing /pricing]` (hrefs are placeholders for future routes). Sticky, transparent, dark text-on-light after scroll handled with a scroll listener toggling a `scrolled` state.

- [ ] **Step 1: Create `src/components/Navbar.js`**

Requirements to implement:
- `<header>` fixed top, full width, `z-50`. Transparent over hero (white text) initially; on `window.scrollY > 20` switch to solid white bg + dark text + `shadow-soft` (React `useState` + scroll `useEffect`).
- Left: `next/image` PSH logo (`/psh-logo.png`, e.g. 40×40) + wordmark "PURPLE STUDIO HUB" (two lines like the ref, bold).
- Center (≥lg): nav links from the array.
- Right (≥lg): `<Button variant="outline">Book a Free Call</Button>`.
- Mobile (<lg): hamburger button toggling `open` state; when open, a full-width dropdown panel lists links + the CTA. Close on link click.
- Logo/wordmark color must remain legible in both transparent and solid states (use conditional text color).
- Interactive elements keyboard-focusable with visible focus ring; hamburger has `aria-label` and `aria-expanded`.

- [ ] **Step 2: Temporarily render in `index.js`**

```js
import Navbar from "@/components/Navbar";
export default function Home() {
  return (<div><Navbar /><div style={{ height: "150vh" }} /></div>);
}
```

- [ ] **Step 3: Verify render**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: navbar transparent at top, turns solid white on scroll; mobile menu opens/closes; no console errors. Then `npm run build` succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.js src/pages/index.js
git commit -m "feat: add shared responsive navbar"
```

---

### Task 4: Hero (with phone mockup + analytics cards)

**Files:**
- Create: `src/components/home/Hero.js`
- Modify: `src/pages/index.js` (render `<Hero />` under Navbar)

**Interfaces:**
- Consumes: `Button`, `Eyebrow`, `ArrowIcon` from `ui.js`; `useReveal`.
- Produces: `Hero()` default export. Self-contained; internal helper components `PhoneMockup` and `AnalyticsCard({ label, value, delta, chart })` may live in the same file.

- [ ] **Step 1: Create `src/components/home/Hero.js`**

Requirements to implement:
- `<section>` with dark gradient bg (`bg-gradient-to-b from-ink to-ink-2`) covering top of page; add top padding so content clears the fixed navbar (~pt-32). Attach `useReveal()` ref; wrap major blocks in `.reveal`.
- Two-column grid (`lg:grid-cols-2`, single column on mobile with phone below text).
- Left column: `<Eyebrow>` "SOCIAL MEDIA MANAGEMENT THAT DRIVES REAL GROWTH"; `<h1>` with "We Create Content." (white) and "You Get Results." (`text-purple`) on a new line, large/bold; subtext paragraph (`text-muted-light`, max-w-md); button row: `<Button>Book a Free Strategy Call</Button>` + `<Button variant="link">View Our Work</Button>`; avatar cluster: 4–5 overlapping round avatars (`next/image` from `/public/assets` headshots or CSS gradient circles as fallback) + "120+ / Brands Trust Us" text.
- Right column: `PhoneMockup` — a CSS phone frame (rounded, border, dark screen) containing an Instagram-profile layout: top bar with `@purplestudiohub`, a round avatar, counts "480 Posts / 12.1K Followers / 230 Following", a one-line bio, Follow (purple) + Message buttons, then a 3×3 grid of `next/image` thumbnails from `/public/assets`. Position three `AnalyticsCard`s absolutely, overlapping the phone's right/edges: Reach `1.2M+` `+320%`, Engagement `8.6%` `+230%`, Profile Visits `48K+` `+180%`. Each card: label, big value, green delta, and a small inline SVG chart (sparkline path for Reach/Profile Visits, tiny bars for Engagement) — pure SVG, no assets.
- Responsive: on mobile the analytics cards may stack below or reduce to 2; the phone scales down; ensure no horizontal overflow at 360px.

- [ ] **Step 2: Render in `index.js`**

```js
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
export default function Home() {
  return (<><Navbar /><main><Hero /></main></>);
}
```

- [ ] **Step 3: Verify render**

Run: `npm run dev`. Expected: hero matches reference layout desktop + mobile; analytics cards float over phone; no overflow; no console errors. `npm run build` succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Hero.js src/pages/index.js
git commit -m "feat: add hero with phone mockup and analytics cards"
```

---

### Task 5: Stats bar

**Files:**
- Create: `src/components/home/StatsBar.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `useReveal`. Produces `StatsBar()` default export.

- [ ] **Step 1: Create `src/components/home/StatsBar.js`**

Requirements:
- White rounded card (`rounded-xl2 shadow-soft`) that visually overlaps the hero bottom (negative top margin, `relative z-10`, centered container).
- Left cell: purple circular star badge (inline SVG star on `bg-purple-soft`) + "Trusted by / 120+ Businesses".
- Then 4 stat cells separated by vertical dividers (hidden on mobile): `120+` Brands Managed · `5+` Years Experience · `5000+` Creatives Delivered · `Millions` Organic Views Generated. Numbers in `text-purple` bold, labels in `text-muted`.
- Responsive: wraps to 2 columns on mobile, dividers hidden.

- [ ] **Step 2: Render `<StatsBar />` after `<Hero />` in `index.js`.**

- [ ] **Step 3: Verify render + `npm run build`.** Expected: card overlaps hero; responsive wrap works.

- [ ] **Step 4: Commit**
```bash
git add src/components/home/StatsBar.js src/pages/index.js
git commit -m "feat: add overlapping stats bar"
```

---

### Task 6: Why Choose Us

**Files:**
- Create: `src/components/home/WhyChooseUs.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `Eyebrow`, `useReveal`. Produces `WhyChooseUs()` default export.

- [ ] **Step 1: Create `src/components/home/WhyChooseUs.js`**

Requirements:
- Light section, centered header: `<Eyebrow>` "WHY CHOOSE PURPLE STUDIO HUB?" + `<h2>` "We don't just post content. We build brands people remember."
- A `features` array of 5 objects `{ title, blurb, icon }` where `icon` is an inline SVG (purple, ~28px): Finest Grid (grid icon), Sharp Content Strategy (target icon), High Quality Reels (play-rectangle icon), Hook-Based Reel Scripts (hook/fishhook icon), Best Pricing ($ badge icon).
- Render as a 5-column row on `lg`, 2-col on `sm`, 1-col on mobile, with thin vertical dividers between columns on `lg` only. Each: centered icon, bold title, muted blurb (copy from reference).
- Wrap items in `.reveal`.

- [ ] **Step 2: Render `<WhyChooseUs />` in `index.js`.**
- [ ] **Step 3: Verify render + build.**
- [ ] **Step 4: Commit**
```bash
git add src/components/home/WhyChooseUs.js src/pages/index.js
git commit -m "feat: add why-choose-us feature row"
```

---

### Task 7: Who We Help

**Files:**
- Create: `src/components/home/WhoWeHelp.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `Eyebrow`, `CheckIcon`, `useReveal`. Produces `WhoWeHelp()` default export.

- [ ] **Step 1: Create `src/components/home/WhoWeHelp.js`**

Requirements:
- Two-column layout (`lg:grid-cols-2`, stacks on mobile).
- Left: `<Eyebrow>` "WHO WE HELP" + `<h2>` "We are the right people for small biz owners & personal brands." + an `audiences` array rendered as a two-column list, each item = small purple inline-SVG icon + label: Small Business Owners, Personal Brands, Coaches & Consultants, Doctors & Clinics, Real Estate Professionals, Beauty & Skincare Brands, Fashion & Lifestyle Brands, E-commerce Brands, Restaurants & Cafés, And Many More…
- Right: dark panel (`bg-ink rounded-xl2 p-8`): `<Eyebrow>` (light variant) "WHAT YOU GET EVERY MONTH" + a `deliverables` array rendered as two columns of rows, each = `<CheckIcon />` + white label: Premium Static Posts, High-Quality Reels, Story Content, Content Calendar, Hook-Based Scripts, Captions, Hashtag Research, Posting & Scheduling, Monthly Analytics, Strategy Calls.
- Wrap blocks in `.reveal`.

- [ ] **Step 2: Render `<WhoWeHelp />` in `index.js`.**
- [ ] **Step 3: Verify render + build.**
- [ ] **Step 4: Commit**
```bash
git add src/components/home/WhoWeHelp.js src/pages/index.js
git commit -m "feat: add who-we-help section with monthly deliverables panel"
```

---

### Task 8: Our Work (tabs + carousel)

**Files:**
- Create: `src/components/home/OurWork.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `Eyebrow`, `useReveal`. Produces `OurWork()` default export.

- [ ] **Step 1: Create `src/components/home/OurWork.js`**

Requirements:
- Centered header: `<Eyebrow>` "OUR WORK" + `<h2>` "Creatives that look good. Reels that get results."
- Tab filter pills: `["Reels", "Instagram Feeds", "Static Posts"]` with active state (`bg-purple text-white`) driven by `useState`. A `data` object keyed by tab → array of `{ img, title, views }` items using `/public/assets` images (Reels: portrait blog/fashion/shoes/UGC shots with titles like "3 Habits That Changed My Life" and view counts "128K"; Feeds & Static reuse other asset groupings). At least 6–7 cards per tab.
- Carousel: a horizontally scrollable flex row (`overflow-x-auto no-scrollbar snap-x`) of portrait cards (`next/image` fill, aspect-[9/16], rounded, dark gradient overlay, overlay title text top-left, ▶ + views badge bottom-left). Cards `snap-start`.
- Circular purple prev/next buttons (`aria-label`) that scroll the row by one card width via a `ref` (`scrollBy`). On mobile, native touch scroll; arrows still work.
- Changing tabs swaps the card set; wrap in `.reveal`.

- [ ] **Step 2: Render `<OurWork />` in `index.js`.**
- [ ] **Step 3: Verify render + build.** Expected: tabs switch card sets; arrows scroll; touch scroll works; no overflow.
- [ ] **Step 4: Commit**
```bash
git add src/components/home/OurWork.js src/pages/index.js
git commit -m "feat: add our-work section with tabs and scroll carousel"
```

---

### Task 9: Brands + Testimonials

**Files:**
- Create: `src/components/home/BrandsTestimonials.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `Eyebrow`, `useReveal`. Produces `BrandsTestimonials()` default export.

- [ ] **Step 1: Create `src/components/home/BrandsTestimonials.js`**

Requirements:
- Two-part light section.
- Part A "BRANDS WE'VE WORKED WITH": a row of styled text wordmarks (`detoxie`, `AARANYA`, `Herbal Me`, `INDUS ROOTS`, `mimo`, `& More`) using distinct font weights/tracking to read as logos (grayscale, muted). Wraps on mobile.
- Part B "WHAT OUR CLIENTS SAY": a `testimonials` array of `{ quote, name, avatar, rating }` (3 entries, placeholder quotes; avatar from `/public/assets`). Card shows 5 star SVGs, the quote, avatar + name (purple). `useState` index with circular prev/next arrow buttons and clickable slider dots below. `aria-label` on controls.
- Wrap in `.reveal`.

- [ ] **Step 2: Render `<BrandsTestimonials />` in `index.js`.**
- [ ] **Step 3: Verify render + build.** Expected: testimonial cycles via arrows and dots.
- [ ] **Step 4: Commit**
```bash
git add src/components/home/BrandsTestimonials.js src/pages/index.js
git commit -m "feat: add brands row and testimonial slider"
```

---

### Task 10: CTA band

**Files:**
- Create: `src/components/home/CtaBand.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `Button`, `CheckIcon`, `useReveal`. Produces `CtaBand()` default export.

- [ ] **Step 1: Create `src/components/home/CtaBand.js`**

Requirements:
- Centered container holding a dark rounded panel (`bg-ink rounded-xl2 p-10 lg:p-14`).
- Left: `<h2 className="font-serif">` "Your business deserves better content." + muted-light subtext "Stop worrying about what to post. We'll handle the strategy, creatives, reels and consistency—so you can focus on growing your business."
- Right: `<Button>Book Your Free Strategy Call</Button>` and a row of 3 trust ticks (`<CheckIcon />` + label): "No Commitment", "30-Min Strategy Call", "Personalized Plan".
- Two-column on `lg`, stacked on mobile. Wrap in `.reveal`.

- [ ] **Step 2: Render `<CtaBand />` in `index.js`.**
- [ ] **Step 3: Verify render + build.**
- [ ] **Step 4: Commit**
```bash
git add src/components/home/CtaBand.js src/pages/index.js
git commit -m "feat: add closing CTA band"
```

---

### Task 11: Footer (shared)

**Files:**
- Create: `src/components/Footer.js`
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `next/image`. Produces `Footer()` default export (reusable site-wide).

- [ ] **Step 1: Create `src/components/Footer.js`**

Requirements:
- Dark `<footer>`, 4-column grid (stacks on mobile):
  1. PSH logo + wordmark, tagline "Social Media Management for Brands & Personal Brands", and a row of social icon links (inline SVGs): Instagram → `https://instagram.com/purplestudiohub`, LinkedIn → `https://linkedin.com/company/purple-studio-hub`, YouTube → `#`, Email → `mailto:hello@purplestudiohub.com`. Each `<a>` has `aria-label`, `target="_blank"` + `rel="noopener noreferrer"` for external.
  2. "Quick Links": Home, About Us, Services, Our Work, Pricing (placeholder hrefs).
  3. "Services": Social Media Management, Content Creation, Reels & Video Editing, Content Strategy, Personal Branding.
  4. "Let's Connect": phone `+91 7011182346` (`tel:+917011182346`), email `hello@purplestudiohub.com` (`mailto:`), site `www.purplestudiohub.com`, each with a small inline SVG icon.
- Bottom bar (divider): `© 2026 Purple Studio Hub. All Rights Reserved.` centered.

- [ ] **Step 2: Render `<Footer />` at bottom of `index.js`.**
- [ ] **Step 3: Verify render + build.** Expected: real contact links work; external links open in new tab.
- [ ] **Step 4: Commit**
```bash
git add src/components/Footer.js src/pages/index.js
git commit -m "feat: add shared footer with real contact details"
```

---

### Task 12: Final composition, polish, and full-page QA

**Files:**
- Modify: `src/pages/index.js` (final order + `<Head>` metadata)
- Modify: `src/pages/_document.js` (lang, base metadata if needed)

**Interfaces:**
- Consumes: all section components.

- [ ] **Step 1: Finalize `src/pages/index.js`**

```js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import OurWork from "@/components/home/OurWork";
import BrandsTestimonials from "@/components/home/BrandsTestimonials";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Studio Hub — Social Media Management That Drives Real Growth</title>
        <meta name="description" content="We help brands and personal brands build a powerful online presence with strategy-driven content, high-quality reels, and stunning Instagram feeds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyChooseUs />
        <WhoWeHelp />
        <OurWork />
        <BrandsTestimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Set `lang="en"` in `_document.js`** (confirm `<Html lang="en">`).

- [ ] **Step 3: Full-page QA pass** in `npm run dev`:
  - Desktop (1440), tablet (768), mobile (360) — no horizontal overflow, all sections match reference, spacing rhythm consistent.
  - Section reveal animations fire once; `prefers-reduced-motion` disables them (test via devtools rendering emulation).
  - Keyboard: tab through navbar, buttons, tabs, carousel arrows, testimonial controls — visible focus everywhere.
  - No console errors/warnings (watch for `next/image` sizing warnings — fix by adding `sizes`).

- [ ] **Step 4: Production build + lint**

Run: `npm run build && npm run lint`
Expected: build succeeds, no lint errors.

- [ ] **Step 5: Commit**
```bash
git add src/pages/index.js src/pages/_document.js
git commit -m "feat: compose homepage, add metadata, final QA polish"
```

---

## Self-Review

**Spec coverage:** All 9 reference sections map to tasks (Navbar T3, Hero T4, StatsBar T5, WhyChooseUs T6, WhoWeHelp T7, OurWork T8, Brands+Testimonials T9, CtaBand T10, Footer T11); tokens/fonts/assets T1; primitives/reveal T2; composition/QA T12. Responsiveness, a11y, subtle motion, real footer contact, asset usage, no-new-deps — all covered by Global Constraints + per-task requirements.

**Placeholder scan:** No "TBD/TODO". Code-heavy shared pieces (tokens, ui.js, reveal hook, index.js) are given in full. Section components are specified as detailed requirement lists rather than full JSX because their markup is long, repetitive Tailwind and follows the shared primitives — acceptable given the visual reference is the source of truth; each lists exact copy, data arrays, structure, responsive behavior, and asset sources.

**Type consistency:** `Button` variants (`primary/outline/link`), `useReveal()` ref usage, `Eyebrow`/`CheckIcon`/`ArrowIcon` signatures are consistent across all consuming tasks. Asset filenames resolved to `/public/assets` in Task 1 and referenced thereafter.

## Notes on git

The working tree has pre-existing unrelated pending deletions (the old HTML site). Each task's `git add` lists only that task's files, so commits stay scoped. Do not `git add -A`.
