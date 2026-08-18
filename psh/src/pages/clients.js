import Image from "next/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/home/CtaBand";
import { Eyebrow } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const BRANDS = [
  { name: "detoxie", className: "font-extrabold lowercase tracking-tight" },
  { name: "AARANYA", className: "font-semibold tracking-[0.25em]" },
  { name: "Herbal Me", className: "font-bold" },
  { name: "INDUS ROOTS", className: "font-medium tracking-[0.2em]" },
  { name: "mimo", className: "font-black lowercase tracking-tight" },
  { name: "Littlebox", className: "font-bold italic" },
  { name: "D&K", className: "font-extrabold tracking-widest" },
  { name: "Brand Skin", className: "font-semibold" },
];

const CATEGORIES = ["Beauty", "Skincare", "Fashion", "Lifestyle", "Fitness", "E-commerce"];

const TESTIMONIALS = [
  {
    quote:
      "Purple Studio Hub completely transformed our Instagram presence. Their strategy, creatives and reels are top-notch!",
    name: "Aaranya Skincare",
    role: "Beauty & Skincare",
    avatar: "/assets/avatar-1.png",
  },
  {
    quote:
      "Consistent, high-quality content every single month. Our engagement more than doubled within the first quarter.",
    name: "Herbal Me",
    role: "Wellness Brand",
    avatar: "/assets/avatar-2.png",
  },
  {
    quote:
      "The hook-based reels actually work. We went from a few hundred views to consistently crossing 100K.",
    name: "Indus Roots",
    role: "Lifestyle Brand",
    avatar: "/assets/skincare2.png",
  },
  {
    quote:
      "A team that genuinely cares. They feel like an extension of our own marketing department.",
    name: "Littlebox Clothing",
    role: "Fashion & Lifestyle",
    avatar: "/assets/fashion.png",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Clients() {
  const brandsRef = useReveal();
  const catRef = useReveal();
  const testRef = useReveal();
  return (
    <Layout
      title="Clients — Purple Studio Hub"
      description="120+ brands trust Purple Studio Hub. See who we've worked with and what they say."
    >
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by 120+ brands and personal brands"
        subtitle="We boost retail and online brands across Beauty, Fashion, Lifestyle, Skincare and Fitness — turning followers into fiercely loyal advocates."
      />

      {/* Brands */}
      <section ref={brandsRef} className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>Brands We've Worked With</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Brands that grew with Purple
            </h2>
          </div>
          <div className="reveal mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {BRANDS.map((b) => (
              <div
                key={b.name}
                className="flex items-center justify-center rounded-xl2 border border-black/5 bg-purple-soft/30 py-8"
              >
                <span className={`text-xl text-ink/70 ${b.className}`}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section ref={catRef} className="bg-purple-soft/40 py-16">
        <div className="reveal mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Industries We Serve</Eyebrow>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((c) => (
              <span key={c} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink shadow-soft">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testRef} className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>What Our Clients Say</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Don't just take our word for it
            </h2>
          </div>
          <div className="reveal mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-xl2 bg-purple-soft/40 p-7">
                <Stars />
                <blockquote className="mt-4 text-base leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-purple">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
