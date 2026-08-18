import { useEffect, useRef } from "react";

/**
 * Attach the returned ref to a section element. Any descendant with the
 * `.reveal` class gets `data-revealed="true"` set once it scrolls into view,
 * triggering the CSS fade/rise defined in globals.css.
 */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-revealed", "true");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}
