import Image from "next/image";

const QUICK_LINKS = [
  ["Home", "#"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Our Work", "#work"],
  ["Pricing", "/pricing"],
];

const SERVICES = [
  "Social Media Management",
  "Content Creation",
  "Reels & Video Editing",
  "Content Strategy",
  "Personal Branding",
];

function Social({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-purple"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/psh-logo.png" alt="Purple Studio Hub logo" width={40} height={40} className="h-9 w-9 object-contain" />
              <span className="leading-tight">
                <span className="block text-sm font-extrabold tracking-wide">PURPLE</span>
                <span className="block text-[10px] font-semibold tracking-[0.25em]">STUDIO HUB</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-light">
              Social Media Management for Brands &amp; Personal Brands
            </p>
            <div className="mt-5 flex gap-3">
              <Social label="Instagram" href="https://instagram.com/purplestudiohub">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1018.75 12 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1116.38 12 4.38 4.38 0 0112 16.38zm6.96-11.4a1.58 1.58 0 11-1.58-1.57 1.58 1.58 0 011.58 1.57z"/></svg>
              </Social>
              <Social label="LinkedIn" href="https://linkedin.com/company/purple-studio-hub">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"/></svg>
              </Social>
              <Social label="YouTube" href="#">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.77-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.83.43A2.5 2.5 0 001.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 001.77 1.77c1.53.43 8.83.43 8.83.43s7.3 0 8.83-.43a2.5 2.5 0 001.77-1.77C23 15.2 23 12 23 12zM9.75 15.5v-7l6 3.5z"/></svg>
              </Social>
              <Social label="Email" href="mailto:hello@purplestudiohub.com">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6" strokeLinecap="round"/></svg>
              </Social>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-light">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-light">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Let&apos;s Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-light">
              <li>
                <a href="tel:+917011182346" className="flex items-center gap-2 transition-colors hover:text-white">
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/></svg>
                  +91 7011182346
                </a>
              </li>
              <li>
                <a href="mailto:hello@purplestudiohub.com" className="flex items-center gap-2 transition-colors hover:text-white">
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6" strokeLinecap="round"/></svg>
                  hello@purplestudiohub.com
                </a>
              </li>
              <li>
                <a href="https://www.purplestudiohub.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>
                  www.purplestudiohub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-muted-light">
          © 2026 Purple Studio Hub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
