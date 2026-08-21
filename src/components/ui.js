export function ArrowIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#7C3AED" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.2em] uppercase text-purple ${className}`}
    >
      {children}
    </p>
  );
}

export function Button({
  href = "#contact",
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2";
  const styles = {
    primary: "bg-purple text-white hover:bg-purple-dark px-6 py-3",
    outline:
      "border border-purple text-purple hover:bg-purple hover:text-white px-6 py-3",
    link: "text-current hover:text-purple underline underline-offset-4 px-0 py-0",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <ArrowIcon />
    </a>
  );
}
