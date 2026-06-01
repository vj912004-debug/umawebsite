import Link from "next/link";

const services = [
  {
    title: "API Micronization",
    text: "Jet micronization is used to mill particles below 5 microns. Particle-to-particle impact facilitated by air flow allows for producing particles less than 5 microns in size. Performed under cGMP conditions with full batch documentation.",
    points: [
      "Particle sizes below 5 microns D90 achievable",
      "No heat build-up — cold process only",
      "No abrasion-generated contamination",
      "Full batch manufacturing records and CoA per batch",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2h4v6l4 8H6l4-8V2z" />
        <line x1="10" y1="2" x2="14" y2="2" />
      </svg>
    ),
  },
  {
    title: "Bulk Drug Processing",
    text: "Our production-scale jet milling systems are located in a dedicated air-locked process suite. Mills are fed via loss-in-weight or volumetric feeders; micronized product is collected in a reverse-pulse dust collector and discharged through a rotary air lock valve — ensuring significant product containment and recoveries of +99.9%.",
    points: [
      "Dedicated air-locked process suites",
      "+99.9% product recovery guaranteed",
      "Explosive-resistant collector systems",
      "Loss-in-weight feeder controlled throughput",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="9" y="3" width="6" height="10" rx="2" />
        <path d="M6 13h12l2 8H4l2-8z" />
      </svg>
    ),
  },
  {
    title: "Chemical Micronization",
    text: "Fine chemical and specialty compound particle size reduction with controlled distribution and purity analysis. Suitable for pharmaceutical and industrial specialty chemical applications.",
    points: [
      "Fine chemical particle distribution control",
      "Purity analysis certification",
      "Industrial and pharma applications",
      "Custom particle size specifications",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "R&D Small Batches",
    text: "Flexible resources for research and development projects requiring small quantities. Prototype formulation runs with the same GMP documentation as full production.",
    points: [
      "Small quantity R&D batches accepted",
      "Same GMP docs as production runs",
      "Prototype to scale-up under one roof",
      "Fast turnaround for R&D timelines",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    title: "GMP Documentation",
    text: "Complete cGMP documentation package per batch ensuring full regulatory compliance for all markets. All documentation prepared by professional team.",
    points: [
      "Batch manufacturing record",
      "Certificate of Analysis (CoA)",
      "Particle size analysis report (D10/D50/D90)",
      "Complete shipping documentation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Contract Manufacturing",
    text: "Uma Micron offers consistent, reliable and cost-effective contract micronization services for small quantities up to large volume routine productions. The entire staff and management are thoroughly professional — they stick to deadlines and deliver quality services. The company has gained excellent clients due to effective working style and good service.",
    points: [
      "Deadline-committed delivery schedule",
      "Small to large volume flexibility",
      "Complete shipping and export documentation",
      "Professional staff and management",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="inner-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Contract micronization services for pharmaceutical manufacturers, bulk drug producers, and
            specialty chemical companies.
          </p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <Link href="/" className="bc-item">Home</Link>
          <span className="bc-sep">›</span>
          <span className="bc-item current">Services</span>
        </div>
      </div>

      <div className="services-full">
        <div className="container">
          <div className="section-label">
            <div className="section-label-line" />
            <div className="section-label-text">Capabilities</div>
          </div>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-body">
            Uma Micron offers flexible resources for R&amp;D projects in small quantities and provides
            reliable contract services for small and large volume production quantities including complete
            shipping and documentation. Micronization is performed under cGMP conditions using
            state-of-the-art jet mills.
          </p>

          <div className="services-full-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`sfg-card anim d${i % 4}`}>
                <div className="sfg-icon">{s.icon}</div>
                <div className="sfg-title">{s.title}</div>
                <div className="sfg-text">{s.text}</div>
                <div className="sfg-points">
                  {s.points.map((p) => (
                    <div key={p} className="sfg-point">{p}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/contact" className="btn-gold">
              Request a Quote for Your Requirements →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
