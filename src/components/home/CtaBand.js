import { Button, CheckIcon } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

const TICKS = ["No Commitment", "30-Min Strategy Call", "Personalized Plan"];

export default function CtaBand() {
  const ref = useReveal();
  return (
    <section ref={ref} id="contact" className="bg-white px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-xl2 bg-gradient-to-br from-ink to-ink-2 p-8 shadow-card sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Your business deserves better content.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-light">
              Stop worrying about what to post. We&apos;ll handle the strategy,
              creatives, reels and consistency—so you can focus on growing your
              business.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button href="#contact" variant="primary" className="text-base">
              Book Your Free Strategy Call
            </Button>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {TICKS.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm text-white">
                  <CheckIcon className="h-5 w-5" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
