import { Eyebrow, CheckIcon } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const AUDIENCES = [
  "Small Business Owners",
  "Beauty & Skincare Brands",
  "Personal Brands",
  "Fashion & Lifestyle Brands",
  "Coaches & Consultants",
  "E-commerce Brands",
  "Doctors & Clinics",
  "Restaurants & Cafés",
  "Real Estate Professionals",
  "And Many More…",
];

const DELIVERABLES = [
  "Premium Static Posts",
  "Captions",
  "High-Quality Reels",
  "Hashtag Research",
  "Story Content",
  "Posting & Scheduling",
  "Content Calendar",
  "Monthly Analytics",
  "Hook-Based Scripts",
  "Strategy Calls",
];

function Dot() {
  return <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple" />;
}

export default function WhoWeHelp() {
  const ref = useReveal();
  return (
    <section ref={ref} className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left */}
        <div className="reveal">
          <Eyebrow>Who We Help</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            We are the right people for small biz owners &amp; personal brands.
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {AUDIENCES.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-ink/80">
                <Dot />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right dark panel */}
        <div className="reveal rounded-xl2 bg-ink p-8 shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple">
            What You Get Every Month
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <li key={d} className="flex items-center gap-3 text-sm text-white">
                <CheckIcon className="h-5 w-5 shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
