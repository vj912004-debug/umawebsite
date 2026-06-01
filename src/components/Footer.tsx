import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="logo-mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L4 8v8l8 5 8-5V8L12 3z" fill="rgba(27,58,107,.9)" />
                  <path d="M12 8l-4 2.5v5L12 18l4-2.5v-5L12 8z" fill="rgba(27,58,107,.5)" />
                  <circle cx="12" cy="13" r="2" fill="rgba(27,58,107,.7)" />
                </svg>
              </div>
              <div className="logo-text">
                <div className="logo-name">Uma Micron</div>
                <div className="logo-tagline">Vadodara · Gujarat</div>
              </div>
            </div>
            <div className="footer-about">
              Uma Micron, Vadodara is a Gujarat-based company offering CONTRACT MICRONIZATION SERVICES
              dedicated to the pharmaceutical industry. Operated under cGMP standards with 500+ sq.ft
              processing area and warehouse facility. Serving pharmaceutical manufacturers since 2011.
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.33.03.71-.24.99L6.6 10.8z" />
              </svg>
              <a href="tel:+919712000297">+91-9712000297</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <a href="mailto:info@umamicron.com">info@umamicron.com</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>Plot 1116, GIDC Ranoli, Vadodara – 391350</span>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/facility">Facility</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <Link href="/services">API Micronization</Link>
              <Link href="/services">Bulk Drug Processing</Link>
              <Link href="/services">Chemical Micronization</Link>
              <Link href="/services">R&amp;D Small Batches</Link>
              <Link href="/services">Contract Manufacturing</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Specifications</div>
            <div className="footer-links" style={{ gap: 6 }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>Particle size &lt;5µm D90</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>Recovery rate +99.9%</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>Zero heat build-up</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>cGMP certified</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>Air / N₂ stream process</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">Uma Micron © 2024 · All Rights Reserved · Vadodara, Gujarat, India</div>
          <div className="footer-bottom-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
