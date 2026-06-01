import Link from "next/link";

const facilityFeatures = [
  "State-of-the-Art Clean Room Technology including material and personal sluices",
  "Dedicated HVAC Systems providing Environmental Control for Storage & Processing areas",
  "Modern Jet Milling Area with production-scale and R&D scale equipment",
  "Air treated and filtered — dew point maintained at -40°C, complying with ISO 8573 compressed air purity class 2",
  "Cleaning Verification Program ensuring cross-contamination prevention",
  "Laboratory services including Particle size testing (D10, D50, D90)",
  "Effective Quality Management System in compliance with cGMP Documentation system — full batch records per every production run",
];

const advantages = [
  {
    title: "Air-Locked Process Suite",
    text: "Dedicated suite with full containment integrity for pharmaceutical processing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Zero Heat Build-up",
    text: "Cold process jet milling — no thermal degradation of heat-sensitive APIs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Explosive-Resistant Systems",
    text: "Collector systems designed for safe processing of sensitive pharmaceutical compounds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Complete Documentation",
    text: "Full cGMP batch records, CoA, particle size reports, and shipping documentation per batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function FacilityPage() {
  return (
    <>
      <div className="inner-hero">
        <div className="container">
          <h1>Our Facility</h1>
          <p>State-of-the-art jet milling facility in GIDC Ranoli, Vadodara — cGMP certified and fully operational.</p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <Link href="/" className="bc-item">Home</Link>
          <span className="bc-sep">›</span>
          <span className="bc-item current">Facility</span>
        </div>
      </div>

      <section className="facility-section" style={{ paddingTop: 48, paddingBottom: 72 }}>
        <div className="container">
          <div className="section-label">
            <div className="section-label-line" />
            <div className="section-label-text">Infrastructure</div>
          </div>
          <h2 className="section-title">Facility Overview</h2>
          <p className="section-body">
            Our modern state-of-the-art facility is located in GIDC Ranoli, Vadodara. Production-scale jet
            milling systems in a dedicated air-locked process suite — designed for maximum product
            containment, purity, and recovery across all batch sizes.
          </p>

          {/* Feature list */}
          <div
            style={{
              marginTop: 32,
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: 28,
              borderLeft: "4px solid var(--navy)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--ff-head)",
                fontSize: 16,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 16,
              }}
            >
              State-of-the-Art Facility Features
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {facilityFeatures.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: 10,
                    background: "var(--bg)",
                    borderRadius: "var(--radius)",
                    gridColumn: f === facilityFeatures[facilityFeatures.length - 1] ? "1 / -1" : undefined,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      flexShrink: 0,
                      marginTop: 5,
                    }}
                  />
                  <div style={{ fontSize: 13, color: "var(--text)" }}>{f}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Facility cards */}
          <div className="facility-full-grid" style={{ marginTop: 40 }}>
            <div className="facility-full-card anim">
              <div className="fc-head">
                <div className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
                  </svg>
                </div>
                <div>
                  <div className="fc-title">Factory Address</div>
                  <div className="fc-sub">GIDC Ranoli, Vadodara</div>
                </div>
              </div>
              <div className="facility-info-list">
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Address</div>
                    <div className="fil-val">
                      Plot No. 1116, GIDC Ranoli
                      <br />
                      Vadodara – 391350
                      <br />
                      State: Gujarat, India
                    </div>
                  </div>
                </div>
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Certification</div>
                    <div className="fil-val">cGMP Certified · Pharmaceutical Grade</div>
                  </div>
                </div>
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 2h4v6l4 8H6l4-8V2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Milling Technology</div>
                    <div className="fil-val">
                      Production-Scale Jet Mills
                      <br />
                      Air / Nitrogen Stream Process
                    </div>
                  </div>
                </div>
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Status</div>
                    <div className="fil-val" style={{ color: "var(--success)", fontWeight: 600 }}>
                      Operational · Accepting New Contracts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="facility-full-card anim d1">
              <div className="fc-head">
                <div className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                </div>
                <div>
                  <div className="fc-title">Contact Details</div>
                  <div className="fc-sub">Get in Touch</div>
                </div>
              </div>
              <div className="facility-info-list">
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Contact Person</div>
                    <div className="fil-val">Amit Patel</div>
                  </div>
                </div>
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.33.03.71-.24.99L6.6 10.8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Phone</div>
                    <div className="fil-val">
                      <a href="tel:+919712000297" style={{ color: "var(--navy)" }}>+91-9712000297</a>
                    </div>
                  </div>
                </div>
                <div className="fil-row">
                  <div className="fil-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </div>
                  <div>
                    <div className="fil-label">Email</div>
                    <div className="fil-val">
                      <a href="mailto:info@umamicron.com" style={{ color: "var(--navy)" }}>info@umamicron.com</a>
                      <br />
                      <a href="mailto:umamicron@gmail.com" style={{ color: "var(--navy)" }}>umamicron@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="form-submit"
                style={{ marginTop: 20, display: "block", textAlign: "center", textDecoration: "none" }}
              >
                Send an Inquiry →
              </Link>
            </div>
          </div>

          {/* Advantages */}
          <div className="section-label" style={{ marginTop: 56 }}>
            <div className="section-label-line" />
            <div className="section-label-text">Key Advantages</div>
          </div>
          <h2 className="section-title">Facility Advantages</h2>
          <div className="advantage-grid">
            {advantages.map((a, i) => (
              <div key={a.title} className={`adv-item anim d${i}`}>
                <div className="adv-icon">{a.icon}</div>
                <div className="adv-title">{a.title}</div>
                <div className="adv-text">{a.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
