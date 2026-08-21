import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/home/CtaBand";
import { Eyebrow } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const PROJECTS = [
  { img: "/assets/skincare2.png", title: "Skincare Brand Launch", category: "Social Media", metric: "+230% engagement" },
  { img: "/assets/fashion.png", title: "Fashion Label Feed", category: "Feeds", metric: "+180% reach" },
  { img: "/assets/blg1.png", title: "Founder Personal Brand", category: "Reels", metric: "128K views" },
  { img: "/assets/shoes.png", title: "Footwear Campaign", category: "Brand Shoots", metric: "48K profile visits" },
  { img: "/assets/ugc.png", title: "UGC Content Series", category: "UGC", metric: "122K views" },
  { img: "/assets/blg2.png", title: "Productivity Reel", category: "Reels", metric: "156K views" },
  { img: "/assets/men-brands.png", title: "Menswear Identity", category: "Brand Shoots", metric: "+120% saves" },
  { img: "/assets/fashion4.png", title: "Lifestyle Grid Revamp", category: "Feeds", metric: "+64K followers" },
  { img: "/assets/blg3.png", title: "Growth Case Study", category: "Reels", metric: "112K views" },
  { img: "/assets/brand-skin.png", title: "Beauty Product Shoot", category: "Brand Shoots", metric: "37K reach" },
  { img: "/assets/ugc4.png", title: "Creator Collab", category: "UGC", metric: "81K views" },
  { img: "/assets/blg5.png", title: "Colour Story Feed", category: "Feeds", metric: "+55K impressions" },
];

const FILTERS = ["All", "Reels", "Feeds", "UGC", "Brand Shoots", "Social Media"];

export default function Work() {
  const ref = useReveal();
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Layout
      title="Our Work — Purple Studio Hub"
      description="Creatives that look good and reels that get results. Explore a selection of our brand work."
    >
      <PageHero
        eyebrow="Our Work"
        title="Creatives that look good. Reels that get results."
        subtitle="A selection of the brands we've helped grow — across reels, feeds, user-generated content and brand shoots."
      />

      <section ref={ref} className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="reveal flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 ${
                  filter === f ? "bg-purple text-white" : "bg-purple-soft/60 text-ink hover:bg-purple-soft"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {shown.map((p, i) => (
              <article
                key={p.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl2 bg-ink"
              >
                <Image src={p.img} alt={p.title} fill priority={i < 4} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-purple-soft">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-sm font-bold leading-snug text-white">{p.title}</h3>
                  <p className="mt-0.5 text-xs text-white/70">{p.metric}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
