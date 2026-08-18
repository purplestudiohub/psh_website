import { Eyebrow } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const ICON = "h-7 w-7 text-purple";

function GridIcon() {
  return (
    <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function ReelIcon() {
  return (
    <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function HookIcon() {
  return (
    <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 4v8a6 6 0 01-12 0" strokeLinecap="round" />
      <circle cx="18" cy="4" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PriceIcon() {
  return (
    <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M14.5 9.3c-.6-.8-1.6-1.1-2.6-1.1-1.3 0-2.4.7-2.4 1.9 0 2.6 5 .9 5 3.6 0 1.2-1.1 2-2.5 2-1.1 0-2.1-.4-2.7-1.2" strokeLinecap="round" />
    </svg>
  );
}

const FEATURES = [
  { title: "Finest Grid", blurb: "A premium Instagram feed that builds trust and looks stunning.", Icon: GridIcon },
  { title: "Sharp Content Strategy", blurb: "Every post has a purpose to grow your reach, engagement & sales.", Icon: TargetIcon },
  { title: "High Quality Reels", blurb: "Professionally edited reels that stop the scroll and drive results.", Icon: ReelIcon },
  { title: "Hook-Based Reel Scripts", blurb: "Powerful hooks in the first 3 seconds that get more views.", Icon: HookIcon },
  { title: "Best Pricing", blurb: "Premium quality work at the most competitive and transparent pricing.", Icon: PriceIcon },
];

export default function WhyChooseUs() {
  const ref = useReveal();
  return (
    <section ref={ref} className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>Why Choose Purple Studio Hub?</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            We don&apos;t just post content. We build brands people remember.
          </h2>
        </div>
        <div className="reveal mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-black/10">
          {FEATURES.map(({ title, blurb, Icon }) => (
            <div key={title} className="text-center lg:px-5">
              <div className="flex justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
