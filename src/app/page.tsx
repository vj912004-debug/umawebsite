import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="anim">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <div className="hero-badge-text">cGMP Certified Facility · Accepting New Contracts</div>
            </div>
            <h1>
              Leader in <span>Contract</span>
              <br />
              Micronization
            </h1>
            <p className="hero-sub">
              Uma Micron, Vadodara is a Gujarat-based company offering CONTRACT MICRONIZATION SERVICES
              dedicated to the pharmaceutical industry. Operated at Ranoli, Vadodara with 500+ sq.ft
              processing area and big warehouse facility, under strict cGMP standards.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-gold">Request a Quote</Link>
              <Link href="/services" className="btn-outline-white">Our Services →</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">&lt;5µm</div>
                <div className="hero-stat-label">Particle Size D90</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">99.9%</div>
                <div className="hero-stat-label">Recovery Rate</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">cGMP</div>
                <div className="hero-stat-label">Certified Facility</div>
              </div>
            </div>
          </div>

          {/* Hero panel */}
          <div className="anim d2 hero-panel">
            <div className="hero-panel-head">
              <div className="hero-panel-title">Technical Specifications</div>
              <div className="hero-panel-tag">Active</div>
            </div>
            <div className="spec-grid">
              <div className="spec-item">
                <div className="spec-lbl">Particle Size D90</div>
                <div className="spec-val gold">&lt;5µm</div>
                <div className="spec-note">Jet mill target</div>
              </div>
              <div className="spec-item">
                <div className="spec-lbl">Recovery Rate</div>
                <div className="spec-val">+99.9%</div>
                <div className="spec-note">Per batch</div>
              </div>
              <div className="spec-item">
                <div className="spec-lbl">Heat Build-up</div>
                <div className="spec-val gold">Zero</div>
                <div className="spec-note">Cold process</div>
              </div>
              <div className="spec-item">
                <div className="spec-lbl">Contamination</div>
                <div className="spec-val">None</div>
                <div className="spec-note">P-to-P collision only</div>
              </div>
              <div className="spec-item">
                <div className="spec-lbl">Certification</div>
                <div className="spec-val">cGMP</div>
                <div className="spec-note">Pharma grade</div>
              </div>
              <div className="spec-item">
                <div className="spec-lbl">Scale</div>
                <div className="spec-val">R&amp;D+</div>
                <div className="spec-note">To large volume</div>
              </div>
            </div>
            <div className="hero-panel-footer">
              <div className="hpf-dot" />
              <div className="hpf-text">
                Facility <b>operational</b> · GIDC Ranoli, Vadodara
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS BAND */}
      <div className="specs-band">
        <div className="container">
          <div className="spec-band-item anim">
            <div className="sbi-num">&lt;5µm</div>
            <div className="sbi-label">Particle Size</div>
            <div className="sbi-desc">D90 jet mill target for pharmaceutical-grade micronization</div>
          </div>
          <div className="spec-band-item anim d1">
            <div className="sbi-num">99.9%</div>
            <div className="sbi-label">Recovery Rate</div>
            <div className="sbi-desc">Reverse-pulse dust collector with rotary air lock valve</div>
          </div>
          <div className="spec-band-item anim d2">
            <div className="sbi-num">0°</div>
            <div className="sbi-label">Heat Build-up</div>
            <div className="sbi-desc">Cold process — no thermal degradation of sensitive APIs</div>
          </div>
          <div className="spec-band-item anim d3">
            <div className="sbi-num">GMP</div>
            <div className="sbi-label">Certification</div>
            <div className="sbi-desc">Full cGMP compliance with complete documentation per batch</div>
          </div>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="services-section">
        <div className="container">
          <div className="section-label">
            <div className="section-label-line" />
            <div className="section-label-text">What We Do</div>
          </div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-body">
            Contract micronization services for pharmaceutical manufacturers, bulk drug producers, and
            specialty chemical companies across India and internationally.
          </p>
          <div className="services-grid">
            <div className="svc-card anim">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 2h4v6l4 8H6l4-8V2z" />
                  <line x1="10" y1="2" x2="14" y2="2" />
                </svg>
              </div>
              <div className="svc-title">API Micronization</div>
              <div className="svc-text">
                Precision particle size reduction of Active Pharmaceutical Ingredients to controlled D90
                specifications. Full batch records and Certificate of Analysis with every batch.
              </div>
              <span className="svc-tag">cGMP Certified</span>
            </div>
            <div className="svc-card anim d1">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="9" y="3" width="6" height="10" rx="2" />
                  <path d="M6 13h12l2 8H4l2-8z" />
                </svg>
              </div>
              <div className="svc-title">Bulk Drug Processing</div>
              <div className="svc-text">
                Large-volume contract micronization in dedicated air-locked process suites. Batch-to-batch
                consistency guaranteed with complete containment integrity.
              </div>
              <span className="svc-tag">High Volume</span>
            </div>
            <div className="svc-card anim d2">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                </svg>
              </div>
              <div className="svc-title">Chemical Micronization</div>
              <div className="svc-text">
                Fine chemical and specialty compound particle size reduction with controlled particle
                distribution. Suitable for both pharma and industrial applications.
              </div>
              <span className="svc-tag">Fine Chemicals</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/services" className="btn-gold">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <div className="about-img-inner">
                <div className="about-img-num">UM</div>
                <div className="about-img-label">Established · Vadodara</div>
                <div className="about-badges">
                  <div className="about-badge">
                    <div className="about-badge-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="about-badge-title">cGMP Certified</div>
                      <div className="about-badge-sub">Pharmaceutical grade conditions</div>
                    </div>
                  </div>
                  <div className="about-badge">
                    <div className="about-badge-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" />
                      </svg>
                    </div>
                    <div>
                      <div className="about-badge-title">GIDC Ranoli, Vadodara</div>
                      <div className="about-badge-sub">Plot 1116, Gujarat, India</div>
                    </div>
                  </div>
                  <div className="about-badge">
                    <div className="about-badge-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                      </svg>
                    </div>
                    <div>
                      <div className="about-badge-title">Amit Patel</div>
                      <div className="about-badge-sub">Contact Person · +91-9712000297</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-label">
                <div className="section-label-line" />
                <div className="section-label-text">About Us</div>
              </div>
              <h2 className="section-title">What Is Micronization?</h2>
              <p className="section-body">
                Micronization is a proven technology of reducing the particle size of active pharmaceutical
                ingredients (API) for increasing the bioavailability of the products. Particle size reduction
                is accomplished through collision of the different particles in air or nitrogen stream. Larger
                particles are retained in the mill by centrifugal forces while smaller particles are carried
                out and collected in an explosive-resistant collector system.
              </p>
              <div className="about-points">
                {[
                  {
                    num: "01",
                    title: "No Heat Build-up",
                    text: "A completely cold process — thermal energy is never introduced. Heat-sensitive APIs are processed without any risk of degradation or loss of potency.",
                  },
                  {
                    num: "02",
                    title: "No Abrasion-Generated Contamination",
                    text: "Particle-to-particle collision only — zero contact with mill surfaces means zero abrasion-generated contamination of the product.",
                  },
                  {
                    num: "03",
                    title: "+99.9% Product Recovery",
                    text: "Reverse-pulse dust collector with rotary air lock valve discharge to product containers ensures maximum containment and recovery per batch.",
                  },
                  {
                    num: "04",
                    title: "Reduce Time-to-Market",
                    text: "Flexible resources for R&D projects in small quantities through to large volume routine productions — helping reduce time-to-market for your projects.",
                  },
                ].map((p, i) => (
                  <div key={p.num} className={`about-point anim d${i}`}>
                    <div className="about-point-num">{p.num}</div>
                    <div>
                      <div className="about-point-title">{p.title}</div>
                      <div className="about-point-text">{p.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE & QUALITY */}
      <section style={{ padding: "72px 0", background: "#fff", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="section-label">
                <div className="section-label-line" />
                <div className="section-label-text">Technical Expertise</div>
              </div>
              <h2 className="section-title" style={{ fontSize: 26 }}>Professional Team &amp; Management</h2>
              <p className="section-body">
                Our team includes management by professionals with long years of experience in the
                pharmaceutical and API industry, as well as experienced and trained employees. The entire
                staff and management are thoroughly professional — they stick to deadlines and deliver
                quality services.
              </p>
              <p className="section-body" style={{ marginTop: 14 }}>
                Uma Micron understands and enjoys the entrepreneurial spirit inherent in the pharmaceutical
                industry. Our goal is to provide consistent, reliable and exceptional services to our
                customers with focus on particle size reduction.
              </p>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Associate analytical laboratory with modern instrumentation",
                  "Particle sizer for particle size determination",
                  "Periodic GMP training for all employees",
                  "Customers invited to perform regulatory audits",
                  "Small quantity R&D through large volume production",
                  "Complete shipping and documentation provided",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--muted)" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label">
                <div className="section-label-line" />
                <div className="section-label-text">Quality System</div>
              </div>
              <h2 className="section-title" style={{ fontSize: 26 }}>Quality System Compliance</h2>
              <p className="section-body">
                Our Quality Management System is fundamental to the business and ensures the provision of
                highest quality in production and services. Uma Micron is committed to meet and exceed
                customer requirements through well-documented Quality Management Systems.
              </p>
              <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { title: "cGMP Operations", text: "Company operates according to current Good Manufacturing Practice standards throughout all processes.", accent: "var(--navy)" },
                  { title: "Facility Inspection", text: "Quality assured by regularly inspecting facilities, systems, and procedures to meet current GMP norms.", accent: "var(--gold)" },
                  { title: "Regulatory Audits", text: "Customers are welcomed to perform regulatory audits on procedures and processes at any time.", accent: "var(--navy)" },
                  { title: "Employee Training", text: "Employees are trained periodically on GMP requirements ensuring consistent compliance.", accent: "var(--gold)" },
                ].map((q) => (
                  <div key={q.title} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 16, borderLeft: `3px solid ${q.accent}` }}>
                    <div style={{ fontFamily: "var(--ff-head)", fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{q.title}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>{q.text}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, background: "var(--navy)", borderRadius: "var(--radius)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, background: "var(--gold)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(27,58,107,1)" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.7)", lineHeight: 1.5 }}>
                  Uma Micron has gained excellent clients in a short time due to effective working style and
                  consistently high quality service delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="section-label">
            <div className="section-label-line" />
            <div className="section-label-text">How We Work</div>
          </div>
          <h2 className="section-title">Manufacturing Process</h2>
          <p className="section-body">
            Every batch follows a strict 4-step process under cGMP conditions from raw material receipt to
            final dispatch.
          </p>
          <div className="process-steps">
            {[
              {
                num: "01",
                title: "Raw Material Receipt",
                body: "Bulk drug or API received with full documentation. Certificate of Analysis verified and material identity confirmed before any processing begins.",
              },
              {
                num: "02",
                title: "Jet Mill Micronization",
                body: "Particles reduced below 5 microns via air-stream collision. Loss-in-weight feeder controls throughput. Zero heat, zero contamination from equipment abrasion.",
              },
              {
                num: "03",
                title: "Particle Size Analysis",
                body: "D10, D50, D90 measurements verified against specification. Reverse-pulse dust collector with rotary air lock confirms +99.9% product recovery.",
              },
              {
                num: "04",
                title: "GMP Release & Dispatch",
                body: "Complete cGMP documentation package issued — batch record, CoA, particle size report. Complete shipping documentation for all batch sizes.",
              },
            ].map((s, i) => (
              <div key={s.num} className={`process-step anim d${i}`}>
                <div className="ps-num">
                  <div className="ps-num-badge">{s.num}</div>
                  {i < 3 && <div className="ps-num-line" />}
                </div>
                <div className="ps-title">{s.title}</div>
                <div className="ps-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
