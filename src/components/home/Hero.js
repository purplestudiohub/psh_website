import Image from "next/image";
import { Button } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const GRID_IMAGES = [
  "/assets/blg1.png",
  "/assets/fashion.png",
  "/assets/shoes.png",
  "/assets/skincare2.png",
  "/assets/blg3.png",
  "/assets/ugc.png",
  "/assets/blg5.png",
  "/assets/men-brands.png",
  "/assets/blg6.png",
];

const AVATARS = [
  "/assets/avatar-1.png",
  "/assets/avatar-2.png",
  "/assets/skincare2.png",
  "/assets/fashion.png",
];

function Sparkline({ className = "" }) {
  return (
    <svg viewBox="0 0 120 36" className={`${className} text-purple-light`} fill="none" aria-hidden="true">
      <path
        d="M2 30 L18 24 L34 27 L50 16 L66 20 L82 10 L98 13 L118 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 30 L18 24 L34 27 L50 16 L66 20 L82 10 L98 13 L118 3 V36 H2 Z"
        fill="url(#spark)"
        opacity="0.35"
      />
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7C3AED" stopOpacity="0.6" />
          <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Bars({ className = "" }) {
  const heights = [10, 16, 12, 22, 18, 28, 24, 32];
  return (
    <svg viewBox="0 0 120 36" className={`${className} text-purple-light`} aria-hidden="true">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 15 + 2}
          y={36 - h}
          width="9"
          height={h}
          rx="2"
          fill="currentColor"
          opacity={0.55 + i * 0.05}
        />
      ))}
    </svg>
  );
}

function AnalyticsCard({ label, value, delta, chart, className = "" }) {
  return (
    <div
      className={`w-52 rounded-2xl border border-white/10 bg-ink-2/90 p-4 shadow-card backdrop-blur ${className}`}
    >
      <p className="text-xs font-medium text-muted-light">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-white">{value}</p>
      <div className="mt-2 h-9 w-full">{chart}</div>
      <p className="mt-1 text-xs font-semibold text-positive">{delta}</p>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-ink-2 bg-ink shadow-card sm:w-[300px]" aria-hidden="true">
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-2" />
      <div className="overflow-hidden rounded-[2rem] bg-ink-3 pt-8 text-white">
        {/* profile header */}
        <div className="px-4">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-purple">
              <Image src="/assets/avatar-1.png" alt="Profile" fill className="object-cover" sizes="64px" />
            </div>
            <div className="flex flex-1 justify-around text-center">
              {[
                ["480", "Posts"],
                ["12.1K", "Followers"],
                ["230", "Following"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-sm font-bold">{n}</p>
                  <p className="text-[10px] text-white/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <p className="text-sm font-semibold">purplestudiohub</p>
            <p className="text-[11px] leading-snug text-white/70">
              Helping Brands &amp; Personal Brands Grow on Social Media
              <br />
              Strategy • Content • Reels
            </p>
            <p className="text-[11px] text-purple">purplestudiohub.com</p>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="flex-1 rounded-md bg-purple py-1.5 text-center text-[11px] font-semibold">
              Follow
            </span>
            <span className="flex-1 rounded-md bg-white/10 py-1.5 text-center text-[11px] font-semibold">
              Message
            </span>
          </div>
        </div>
        {/* grid */}
        <div className="mt-3 grid grid-cols-3 gap-0.5">
          {GRID_IMAGES.map((src, i) => (
            <div key={i} className="relative aspect-square">
              <Image src={src} alt="" fill className="object-cover" sizes="100px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-ink to-ink-2 pt-28 pb-40 lg:pt-36"
    >
      {/* soft purple glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-purple/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div className="reveal">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] tracking-wide text-white/80">
            <span className="font-bold text-white">SOCIAL MEDIA MANAGEMENT</span>
            <span className="ml-1 uppercase">that drives real growth</span>
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            We Create Content.
            <br />
            <span className="text-purple">You Get Results.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-light">
            We help brands and personal brands build a powerful online presence
            with strategy-driven content, high-quality reels, and stunning
            Instagram feeds.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href="#contact" variant="primary">
              Book a Free Strategy Call
            </Button>
            <Button href="#work" variant="link" className="text-white">
              View Our Work
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <span
                  key={i}
                  className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-ink"
                >
                  <Image src={src} alt="" fill priority={i === 0} className="object-cover" sizes="44px" />
                </span>
              ))}
            </div>
            <div className="text-white">
              <p className="text-lg font-bold leading-none">120+</p>
              <p className="text-xs text-muted-light">Brands Trust Us</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="reveal relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[340px] lg:max-w-none">
            <PhoneMockup />
            {/* Analytics cards: stacked below on mobile, floating on lg */}
            <div
              className="mt-6 flex gap-3 overflow-x-auto no-scrollbar pb-1 lg:mt-0 lg:block lg:overflow-visible"
              tabIndex={0}
              role="group"
              aria-label="Account performance metrics"
            >
              <AnalyticsCard
                label="Reach"
                value="1.2M+"
                delta="+320%"
                chart={<Sparkline className="h-full w-full" />}
                className="shrink-0 lg:absolute lg:-right-6 lg:top-0 lg:shrink"
              />
              <AnalyticsCard
                label="Engagement"
                value="8.6%"
                delta="+230%"
                chart={<Bars className="h-full w-full" />}
                className="shrink-0 lg:absolute lg:-right-10 lg:top-1/2 lg:-translate-y-1/2 lg:shrink"
              />
              <AnalyticsCard
                label="Profile Visits"
                value="48K+"
                delta="+180%"
                chart={<Sparkline className="h-full w-full" />}
                className="shrink-0 lg:absolute lg:-right-6 lg:bottom-0 lg:shrink"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
