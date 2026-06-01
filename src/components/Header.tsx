"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/facility", label: "Facility" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div className="topbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.33.03.71-.24.99L6.6 10.8z" />
              </svg>
              <a href="tel:+919712000297">+91-9712000297</a>
            </div>
            <div className="topbar-sep" />
            <div className="topbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <a href="mailto:info@umamicron.com">info@umamicron.com</a>
            </div>
          </div>
          <div className="topbar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Plot 1116, GIDC Ranoli, Vadodara – 391350, Gujarat
          </div>
        </div>
      </div>

      {/* Main header */}
      <header>
        <div className="container">
          <Link href="/" className="logo">
            <div className="logo-mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3L4 8v8l8 5 8-5V8L12 3z" fill="rgba(27,58,107,.9)" />
                <path d="M12 8l-4 2.5v5L12 18l4-2.5v-5L12 8z" fill="rgba(27,58,107,.5)" />
                <circle cx="12" cy="13" r="2" fill="rgba(27,58,107,.7)" />
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-name">Uma Micron</div>
              <div className="logo-tagline">Vadodara · Gujarat · India</div>
            </div>
          </Link>

          <nav>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="nav-cta" style={{ textDecoration: "none" }}>
            Get a Quote
          </Link>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
