import { useReveal } from "@/components/useReveal";

const STATS = [
  ["120+", "Brands Managed"],
  ["5+", "Years Experience"],
  ["5000+", "Creatives Delivered"],
  ["Millions", "Organic Views Generated"],
];

function StarBadge() {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-soft">
      <svg className="h-6 w-6 fill-purple" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z" />
      </svg>
    </span>
  );
}

export default function StatsBar() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative z-10 -mt-24 px-4 sm:px-6 lg:px-8">
      <div className="reveal mx-auto max-w-6xl rounded-xl2 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-5 md:divide-x md:divide-black/10">
          <div className="col-span-2 flex items-center gap-3 md:col-span-1 md:pr-6">
            <StarBadge />
            <div>
              <p className="text-sm font-semibold text-ink">Trusted by</p>
              <p className="text-sm text-muted">120+ Businesses</p>
            </div>
          </div>
          {STATS.map(([num, label]) => (
            <div key={label} className="text-center md:px-4">
              <p className="text-2xl font-extrabold text-purple sm:text-3xl">{num}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
