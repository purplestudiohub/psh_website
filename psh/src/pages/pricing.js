import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/home/CtaBand";
import { Eyebrow, Button, CheckIcon } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const PLANS = [
  {
    name: "Starter",
    price: "₹22k",
    period: "/month",
    tagline: "For brands getting started on social media.",
    highlighted: false,
    features: [
      "Graphics, Page Management & Branding",
      "Hashtags, Captions & Aesthetic Creatives",
      "Grid Community & Festive Creatives",
      "Basic Community Engagement",
      "Monthly Analytics Report",
    ],
  },
  {
    name: "Growth",
    price: "₹40k",
    period: "/month",
    tagline: "Our most popular plan for scaling brands.",
    highlighted: true,
    features: [
      "Everything in Starter",
      "High-Quality Reels & Video Editing",
      "Hook-Based Reel Scripts",
      "Content Calendar & Story Content",
      "Advanced Community Engagement",
      "Strategy Calls & Consultation",
    ],
  },
  {
    name: "Pro",
    price: "Custom",
    period: "",
    tagline: "Influencer campaigns, UGC & brand shoots.",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Influencer Marketing Campaigns",
      "User-Generated Content (UGC)",
      "Brand Photo & Video Shoots",
      "Ad Campaign Management",
      "Dedicated Account Manager",
    ],
  },
];

const FAQS = [
  ["Is there a lock-in or commitment?", "No long-term lock-in. We work month to month and earn your business with results, not contracts."],
  ["What's included in the strategy call?", "A free 30-minute session where we review your current presence and map a personalized plan for your brand."],
  ["Can I customize a plan?", "Absolutely. The Pro plan is fully tailored — tell us your goals and we'll build a package around them."],
  ["Which platforms do you cover?", "Primarily Instagram, Facebook and LinkedIn, with support for other platforms based on your audience."],
];

function Faq({ q, a }) {
  return (
    <details className="group rounded-xl2 border border-black/5 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink">
        {q}
        <span className="ml-4 text-purple transition-transform group-open:rotate-45">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted">{a}</p>
    </details>
  );
}

export default function Pricing() {
  const plansRef = useReveal();
  const faqRef = useReveal();
  return (
    <Layout
      title="Pricing — Purple Studio Hub"
      description="Simple, transparent pricing for social media management, influencer marketing, UGC and brand shoots."
    >
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        subtitle="Premium quality work at the most competitive rates. No hidden fees, no long-term lock-in — just results."
      />

      {/* Plans */}
      <section ref={plansRef} className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-xl2 p-8 ${
                  p.highlighted
                    ? "bg-gradient-to-b from-ink to-ink-2 text-white shadow-card lg:-mt-4 lg:mb-4"
                    : "border border-black/10 bg-white text-ink shadow-soft"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-purple px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-bold ${p.highlighted ? "text-white" : "text-ink"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm ${p.highlighted ? "text-muted-light" : "text-muted"}`}>
                  {p.tagline}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className={`pb-1 text-sm ${p.highlighted ? "text-muted-light" : "text-muted"}`}>
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                      <span className={p.highlighted ? "text-white/90" : "text-ink/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={p.highlighted ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-center text-xs text-muted">
            * Prices are indicative starting points and may vary based on scope. Book a free call for an exact quote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="bg-purple-soft/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="reveal mt-10 space-y-4">
            {FAQS.map(([q, a]) => (
              <Faq key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
