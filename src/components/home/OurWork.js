import { useRef, useState } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const DATA = {
  Reels: [
    { img: "/assets/blg1.png", title: "3 Habits That Changed My Life", views: "128K" },
    { img: "/assets/skincare2.png", title: "Skincare Myths You Still Believe", views: "94K" },
    { img: "/assets/blg2.png", title: "How To Stay Productive As A Founder", views: "156K" },
    { img: "/assets/fashion.png", title: "3 Content Ideas That Never Go Out Of Trend", views: "87K" },
    { img: "/assets/blg3.png", title: "The Secret To Consistent Growth", views: "112K" },
    { img: "/assets/ugc.png", title: "Real Results, Real People", views: "122K" },
    { img: "/assets/blg4.png", title: "How We Helped This Brand 10X Their Reach", views: "203K" },
  ],
  "Instagram Feeds": [
    { img: "/assets/fashion4.png", title: "Fashion Brand Feed Revamp", views: "64K" },
    { img: "/assets/shoes.png", title: "Footwear Launch Grid", views: "48K" },
    { img: "/assets/skincare2.png", title: "Skincare Aesthetic Feed", views: "72K" },
    { img: "/assets/men-brands.png", title: "Menswear Brand Identity", views: "39K" },
    { img: "/assets/blg5.png", title: "Cohesive Colour Story", views: "55K" },
    { img: "/assets/ugc4.png", title: "UGC-Driven Feed", views: "81K" },
  ],
  "Static Posts": [
    { img: "/assets/blg6.png", title: "Carousel That Converted", views: "44K" },
    { img: "/assets/brand-skin.png", title: "Product Spotlight Post", views: "37K" },
    { img: "/assets/shoes2.png", title: "Sale Announcement Design", views: "52K" },
    { img: "/assets/blg2.png", title: "Educational Infographic", views: "61K" },
    { img: "/assets/fashion.png", title: "Brand Story Post", views: "29K" },
    { img: "/assets/blg3.png", title: "Testimonial Highlight", views: "33K" },
  ],
};

const TABS = Object.keys(DATA);

function PlayBadge({ views }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
      {views}
    </span>
  );
}

function ArrowBtn({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-purple text-white transition-colors hover:bg-purple-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function OurWork() {
  const ref = useReveal();
  const [tab, setTab] = useState(TABS[0]);
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="work" ref={ref} className="bg-purple-soft/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Creatives that look good. Reels that get results.
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 ${
                tab === t ? "bg-purple text-white" : "bg-white text-ink hover:bg-white/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="reveal relative mt-10">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {DATA[tab].map((card, i) => (
              <article
                key={`${tab}-${i}`}
                className="relative aspect-[9/16] w-40 shrink-0 snap-start overflow-hidden rounded-2xl bg-ink sm:w-48 lg:w-52"
              >
                <Image src={card.img} alt={card.title} fill className="object-cover" sizes="(max-width:640px) 40vw, 208px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />
                <p className="absolute left-3 right-3 top-3 text-sm font-bold leading-snug text-white">
                  {card.title}
                </p>
                <div className="absolute bottom-3 left-3">
                  <PlayBadge views={card.views} />
                </div>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <div className="mt-6 flex justify-center gap-3 lg:mt-0">
            <div className="lg:absolute lg:-left-4 lg:top-1/2 lg:-translate-y-1/2">
              <ArrowBtn dir="left" onClick={() => scroll("left")} />
            </div>
            <div className="lg:absolute lg:-right-4 lg:top-1/2 lg:-translate-y-1/2">
              <ArrowBtn dir="right" onClick={() => scroll("right")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
