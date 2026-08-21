import { useState } from "react";
import Image from "next/image";
import { Eyebrow, Stars } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const BRANDS = [
  { name: "detoxie", className: "font-extrabold lowercase tracking-tight" },
  { name: "AARANYA", className: "font-semibold tracking-[0.25em]" },
  { name: "Herbal Me", className: "font-bold" },
  { name: "INDUS ROOTS", className: "font-medium tracking-[0.2em]" },
  { name: "mimo", className: "font-black lowercase tracking-tight" },
  { name: "& More", className: "italic text-muted" },
];

const TESTIMONIALS = [
  {
    quote:
      "Purple Studio Hub completely transformed our Instagram presence. Their strategy, creatives and reels are top-notch!",
    name: "Aaranya Skincare",
    avatar: "/assets/avatar-1.png",
  },
  {
    quote:
      "Consistent, high-quality content every single month. Our engagement more than doubled within the first quarter.",
    name: "Herbal Me",
    avatar: "/assets/avatar-2.png",
  },
  {
    quote:
      "The hook-based reels actually work. We went from a few hundred views to consistently crossing 100K.",
    name: "Indus Roots",
    avatar: "/assets/skincare2.png",
  },
];

function NavArrow({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink transition-colors hover:border-purple hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-purple"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function BrandsTestimonials() {
  const ref = useReveal();
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const go = (d) =>
    setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section ref={ref} className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Brands */}
          <div className="reveal">
            <Eyebrow>Brands We&apos;ve Worked With</Eyebrow>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
              {BRANDS.map((b) => (
                <span key={b.name} className={`text-xl text-ink/70 ${b.className}`}>
                  {b.name}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="reveal">
            <Eyebrow>What Our Clients Say</Eyebrow>
            <div className="mt-6 rounded-xl2 bg-purple-soft/50 p-6 sm:p-8" aria-live="polite">
              <Stars />
              <p className="mt-4 text-lg leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                  </span>
                  <span className="text-sm font-semibold text-purple">– {t.name}</span>
                </div>
                <div className="flex gap-2">
                  <NavArrow dir="left" onClick={() => go(-1)} />
                  <NavArrow dir="right" onClick={() => go(1)} />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === idx}
                  className="flex h-6 w-6 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      i === idx ? "w-6 bg-purple" : "w-2 bg-purple/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
