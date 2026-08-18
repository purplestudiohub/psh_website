import { Eyebrow } from "@/components/ui";
import { useReveal } from "@/components/useReveal";

/**
 * Dark banner used at the top of every inner page. Sits below the fixed
 * navbar (pt to clear it) and provides the eyebrow / title / subtitle.
 */
export default function PageHero({ eyebrow, title, subtitle }) {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-ink to-ink-2 pt-32 pb-16 sm:pt-40 sm:pb-20"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple/10 blur-3xl" />
      <div className="reveal mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && <Eyebrow className="justify-center">{eyebrow}</Eyebrow>}
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
