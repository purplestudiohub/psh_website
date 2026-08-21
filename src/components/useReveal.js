import { useEffect, useRef } from "react";

/**
 * Attach the returned ref to a section element. The ref element itself (if it
 * has the `.reveal` class) and any descendant with `.reveal` get
 * `data-revealed="true"` set once they scroll into view, triggering the CSS
 * fade/rise defined in globals.css.
 */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Include the ref element itself so callers can put `ref` and `.reveal`
    // on the same node, not only on a plain wrapper with `.reveal` children.
    const targets = [
      ...(el.classList.contains("reveal") ? [el] : []),
      ...el.querySelectorAll(".reveal"),
    ];
    // Fallback: if IntersectionObserver is unavailable, reveal everything now
    // so content is never left hidden.
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((n) => n.setAttribute("data-revealed", "true"));
      return;
    }
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
    targets.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}
