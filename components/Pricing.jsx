const APP_PRICING = [
  {
    name: <>Drasil <em>Agri</em></>,
    hue: 155,
    region: "Available worldwide",
    status: "LIVE",
    desc: "Livestock & poultry management.",
    tiers: [
      { name: "Smallholder", price: "$9", unit: "/ mo", desc: "Up to 50 head" },
      { name: "Farm", price: "$29", unit: "/ mo", desc: "Unlimited herd · poultry · 3 users", featured: true },
      { name: "Co-op", price: "$89", unit: "/ mo", desc: "Multi-farm · SSO · API" },
    ],
    cta: "Start free trial →",
    url: "https://farm-dairy-ten.vercel.app/",
  },
  {
    name: <>Karttly</>,
    hue: 340,
    region: "Available worldwide",
    status: "LIVE",
    desc: "Grocery budgets, meal prep & AI recipes.",
    tiers: [
      { name: "Free", price: "$0", unit: "forever", desc: "1 budget · 7 recipes / wk" },
      { name: "Plus", price: "$4", unit: "/ mo", desc: "Unlimited recipes · meal-prep AI · shared lists", featured: true },
      { name: "Family", price: "$8", unit: "/ mo", desc: "Up to 6 people · pantry sync" },
    ],
    cta: "Start free →",
    url: "https://karttly-lctp.vercel.app/",
  },
  {
    name: <>Trade <em>Worx</em></>,
    hue: 200,
    region: "South Africa only",
    status: "90% — JOIN BETA",
    desc: "Invoicing for trades · POS for small retail.",
    tiers: [
      { name: "Solo", price: "R 99", unit: "/ mo", desc: "Quotes, invoices, 1 user" },
      { name: "Crew", price: "R 249", unit: "/ mo", desc: "Up to 5 users · job tracking", featured: true },
      { name: "Retail", price: "R 349", unit: "/ mo", desc: "POS mode · 2 tills · stock" },
    ],
    cta: "Join the beta →",
    url: "https://trade-worx.vercel.app/",
  },
  {
    name: <>CV <em>Ready</em></>,
    hue: 75,
    region: "South Africa only",
    status: "IN DEVELOPMENT",
    desc: "Recruiter-ready CVs + AI interview coach.",
    tiers: [
      { name: "Coming", price: "TBA", unit: "", desc: "Pricing announced at launch", featured: true, soon: true },
    ],
    cta: "Notify me →",
  },
];

function Pricing() {
  return (
    <section className="section page" id="pricing" data-screen-label="Pricing">
      <div className="section-head">
        <h2 className="h-serif">Each app, its <em>own price</em>.</h2>
        <div className="sub">
          <span>IV · PRICING</span>
          <span>No bundles · pay only for what you use</span>
        </div>
        <div className="meta-right">
          Drasil Agri and Karttly bill internationally in USD. Trade Worx and CV Ready bill in Rand. Each app has its own sign-in — sign up only for what you need.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
        {APP_PRICING.map((app, i) => (
          <div key={i} className="app-pricing-block">
            <div className="app-pricing-head">
              <div>
                <h3 className="h-serif" style={{ fontSize: 44, lineHeight: 1 }}>{app.name}</h3>
                <p style={{ color: "var(--fg-dim)", fontSize: 15, marginTop: 8 }}>{app.desc}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                <span className="tag" style={{ borderColor: `oklch(0.6 0.1 ${app.hue} / 0.6)`, color: `oklch(0.82 0.1 ${app.hue})` }}>● {app.status}</span>
                <span className="tag">{app.region}</span>
              </div>
            </div>

            <div className={"pricing-grid " + (app.tiers.length === 1 ? "pricing-single" : "")}>
              {app.tiers.map((t, j) => (
                <div key={j} className={"pricing-card" + (t.featured ? " featured" : "")}
                  style={t.featured ? {
                    borderColor: `oklch(0.6 0.1 ${app.hue} / 0.5)`,
                    background: `linear-gradient(180deg, oklch(0.5 0.12 ${app.hue} / 0.15), oklch(0.19 0.025 260 / 0.6))`,
                    boxShadow: `0 0 80px oklch(0.5 0.12 ${app.hue} / 0.18)`,
                  } : {}}>
                  <div>
                    <h4 className="h-serif">{t.name}</h4>
                    <p style={{ color: "var(--fg-dim)", fontSize: 13, marginTop: 6 }}>{t.desc}</p>
                  </div>
                  <div className="price h-serif">
                    {t.price}
                    {t.unit && <span>{t.unit}</span>}
                  </div>
                  <a href={app.url || "#"} target={app.url ? "_blank" : undefined} rel={app.url ? "noopener" : undefined} className={"btn " + (t.featured ? "btn-primary" : "btn-ghost")}
                    style={{ justifyContent: "center", ...(t.featured ? {
                      background: `linear-gradient(180deg, oklch(0.85 0.12 ${app.hue}), oklch(0.65 0.14 ${Math.max(0, app.hue - 15)}))`,
                      borderColor: `oklch(0.65 0.14 ${app.hue})`,
                      color: "oklch(0.16 0.04 260)",
                    } : {}) }}>
                    {t.soon ? "Notify me" : (j === 0 ? (t.price === "$0" ? "Start free" : "Choose " + t.name) : app.cta)}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
