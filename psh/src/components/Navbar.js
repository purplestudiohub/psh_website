import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Clients", href: "/clients" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const textColor = solid ? "text-ink" : "text-white";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="Purple Studio Hub home">
            <Image
              src="/psh-logo.png"
              alt="Purple Studio Hub logo"
              width={40}
              height={40}
              className="h-9 w-9 lg:h-10 lg:w-10 object-contain"
              priority
            />
            <span className={`leading-tight ${textColor}`}>
              <span className="block text-sm font-extrabold tracking-wide">PURPLE</span>
              <span className="block text-[10px] font-semibold tracking-[0.25em]">STUDIO HUB</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-purple ${textColor}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="#contact" variant="outline" className="text-sm">
              Book a Free Call
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${textColor}`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5">
          <ul className="px-4 py-4 space-y-1">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-purple-soft hover:text-purple"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contact" variant="primary" className="w-full justify-center">
                Book a Free Call
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
