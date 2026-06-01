"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    drug: "",
    size: "",
    details: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company || !form.email) {
      alert("Please fill in at least Company Name and Email Address.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <div className="inner-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Send us an inquiry for micronization services — we respond within one business day.</p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <Link href="/" className="bc-item">Home</Link>
          <span className="bc-sep">›</span>
          <span className="bc-item current">Contact Us</span>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info column */}
            <div className="contact-info">
              <div className="section-label">
                <div className="section-label-line" />
                <div className="section-label-text">Get in Touch</div>
              </div>
              <h2 className="section-title" style={{ fontSize: 28 }}>Contact Details</h2>

              <div className="ci-card anim">
                <div className="ci-head">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5" />
                  </svg>
                  Factory Address
                </div>
                <div className="ci-row">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="ci-lbl">Address</div>
                    <div className="ci-val">
                      Plot No. 1116, GIDC Ranoli
                      <br />
                      Vadodara – 391350
                      <br />
                      Gujarat, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="ci-card anim d1">
                <div className="ci-head">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  Contact Person
                </div>
                <div className="ci-row">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="ci-lbl">Name</div>
                    <div className="ci-val">Amit Patel</div>
                  </div>
                </div>
                <div className="ci-row">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.33.03.71-.24.99L6.6 10.8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="ci-lbl">Phone</div>
                    <div className="ci-val">
                      <a href="tel:+919712000297">+91-9712000297</a>
                    </div>
                  </div>
                </div>
                <div className="ci-row">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </div>
                  <div>
                    <div className="ci-lbl">Email</div>
                    <div className="ci-val">
                      <a href="mailto:info@umamicron.com">info@umamicron.com</a>
                      <br />
                      <a href="mailto:umamicron@gmail.com">umamicron@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)", marginTop: 8 }}>
                <div style={{ background: "var(--navy)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.7)", letterSpacing: ".06em" }}>
                    GIDC Ranoli, Vadodara — Plot No. 1116
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d118077.84578753248!2d73.09891396447459!3d22.35617060708338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x395fc8b2a798a37f%3A0xf48761c1300253a7!2sVadodara+Railway+Station%2C+Maharaja+Sayajirao+University%2C+Sayajiganj%2C+Vadodara%2C+Gujarat%2C+India!3m2!1d22.3104294!2d73.1813327!4m5!1s0x395fcbccdc2a814f%3A0x5095e7bafb732a3f!2sUma+Micron%2C+Plot+No.+1116%2C%2C+GIDC+Ranoli%2C%2C+GIDC+Industrial+Estate%2C+Ranoli+GIDC%2C+Ranoli%2C+Vadodara%2C+Gujarat+391350%2C+India!3m2!1d22.4011708!2d73.13627439999999!5e0!3m2!1sen!2sau!4v1542539574568"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div style={{ padding: "10px 16px", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>Uma Micron, GIDC Industrial Estate, Ranoli, Vadodara – 391350</span>
                  <a
                    href="https://maps.google.com/?q=Uma+Micron+Plot+1116+GIDC+Ranoli+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 11, fontWeight: 600, color: "var(--navy)", textDecoration: "none" }}
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="form-card anim d1">
              {submitted ? (
                <div className="form-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="form-success-title">Inquiry Submitted!</div>
                  <div className="form-success-sub">
                    Thank you. We&apos;ll respond within 1 business day at your email address.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-title">Send an Inquiry</div>
                  <div className="form-sub">
                    For micronization contracts, particle size specifications, or any service enquiry. We
                    respond within 1 business day.
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label>Company Name</label>
                      <input
                        type="text"
                        placeholder="Your company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label>Contact Person</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="email@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label>Phone / Mobile</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Drug / Material Name</label>
                    <input
                      type="text"
                      placeholder="API or chemical name"
                      value={form.drug}
                      onChange={(e) => setForm({ ...form, drug: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Required Particle Size (D90)</label>
                    <select value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}>
                      <option value="">Select specification</option>
                      <option>Below 5 microns</option>
                      <option>5 – 10 microns</option>
                      <option>10 – 20 microns</option>
                      <option>Custom specification</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Inquiry Details</label>
                    <textarea
                      placeholder="Quantity required, batch frequency, timeline, any special requirements..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="form-submit">Submit Inquiry</button>
                  <div className="form-note">We respond within 1 business day · info@umamicron.com</div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
