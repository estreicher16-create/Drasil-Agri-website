// Mini animated mockups for each product card.

function LivestockMockup() {
  return (
    <svg viewBox="0 0 400 260" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="lv-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.22 0.04 155)" />
          <stop offset="100%" stopColor="oklch(0.15 0.03 155)" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#lv-bg)" rx="8" />
      <text x="20" y="28" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.7 0.04 155)" letterSpacing="1">DRASIL · LIVESTOCK</text>
      <text x="20" y="60" fontFamily="Instrument Serif, serif" fontSize="22" fill="oklch(0.95 0.02 90)">Herd overview</text>
      <g fontFamily="Geist, sans-serif">
        <g transform="translate(20, 80)"><text fontSize="9" fill="oklch(0.6 0.02 155)" fontFamily="IBM Plex Mono, monospace">HEAD</text><text y="20" fontSize="22" fill="oklch(0.95 0.02 90)" fontFamily="Instrument Serif, serif">284</text></g>
        <g transform="translate(110, 80)"><text fontSize="9" fill="oklch(0.6 0.02 155)" fontFamily="IBM Plex Mono, monospace">CALVES</text><text y="20" fontSize="22" fill="oklch(0.95 0.02 90)" fontFamily="Instrument Serif, serif">47</text></g>
        <g transform="translate(200, 80)"><text fontSize="9" fill="oklch(0.6 0.02 155)" fontFamily="IBM Plex Mono, monospace">MILK YIELD</text><text y="20" fontSize="22" fill="oklch(0.74 0.12 155)" fontFamily="Instrument Serif, serif">+12%</text></g>
      </g>
      <g transform="translate(20, 140)">
        <rect width="360" height="90" rx="6" fill="oklch(0.1 0.02 155 / 0.6)" stroke="oklch(0.3 0.04 155 / 0.4)" />
        <polyline fill="none" stroke="oklch(0.74 0.12 155)" strokeWidth="1.5" points="10,70 50,58 90,62 130,48 170,52 210,40 250,44 290,30 330,34 350,22" />
        <polyline fill="oklch(0.74 0.12 155 / 0.15)" stroke="none" points="10,70 50,58 90,62 130,48 170,52 210,40 250,44 290,30 330,34 350,22 350,90 10,90" />
        <circle r="3" fill="oklch(0.9 0.08 155)"><animate attributeName="cx" values="10;350;10" dur="8s" repeatCount="indefinite" /><animate attributeName="cy" values="70;22;70" dur="8s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  );
}

function PoultryMockup() {
  return (
    <svg viewBox="0 0 400 260" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="pl-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.22 0.04 60)" />
          <stop offset="100%" stopColor="oklch(0.15 0.03 60)" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#pl-bg)" rx="8" />
      <text x="20" y="28" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.78 0.06 60)" letterSpacing="1">DRASIL · POULTRY · HOUSE 03</text>
      <text x="20" y="60" fontFamily="Instrument Serif, serif" fontSize="22" fill="oklch(0.95 0.02 90)">Flock at a glance</text>
      <g fontFamily="Geist, sans-serif">
        <g transform="translate(20, 80)"><text fontSize="9" fill="oklch(0.6 0.04 60)" fontFamily="IBM Plex Mono, monospace">BIRDS</text><text y="20" fontSize="22" fill="oklch(0.95 0.02 90)" fontFamily="Instrument Serif, serif">8,420</text></g>
        <g transform="translate(140, 80)"><text fontSize="9" fill="oklch(0.6 0.04 60)" fontFamily="IBM Plex Mono, monospace">EGGS / DAY</text><text y="20" fontSize="22" fill="oklch(0.82 0.14 75)" fontFamily="Instrument Serif, serif">7,612</text></g>
        <g transform="translate(280, 80)"><text fontSize="9" fill="oklch(0.6 0.04 60)" fontFamily="IBM Plex Mono, monospace">MORTALITY</text><text y="20" fontSize="22" fill="oklch(0.95 0.02 90)" fontFamily="Instrument Serif, serif">0.3%</text></g>
      </g>
      <g transform="translate(20, 140)">
        <rect width="360" height="90" rx="6" fill="oklch(0.1 0.02 60 / 0.6)" stroke="oklch(0.3 0.04 60 / 0.4)" />
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((x, i) => {
          const h = 20 + ((i * 13) % 50);
          return <rect key={i} x={x - 8} y={80 - h} width="14" height={h} rx="2" fill="oklch(0.78 0.12 75)" opacity={0.4 + (i % 3) * 0.2} />;
        })}
      </g>
    </svg>
  );
}

function KarttlyMockup() {
  return (
    <svg viewBox="0 0 400 260" style={{ width: "100%", height: "100%" }}>
      <defs><linearGradient id="kt-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="oklch(0.2 0.04 340)" /><stop offset="100%" stopColor="oklch(0.14 0.03 340)" /></linearGradient></defs>
      <rect width="400" height="260" fill="url(#kt-bg)" rx="8" />
      <text x="20" y="28" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.72 0.06 340)" letterSpacing="1">KARTTLY · WEEK 17</text>
      <text x="20" y="60" fontFamily="Instrument Serif, serif" fontSize="22" fill="oklch(0.95 0.02 90)">Grocery budget</text>
      <g transform="translate(20, 78)">
        <rect width="360" height="8" rx="4" fill="oklch(0.15 0.02 340)" />
        <rect width="230" height="8" rx="4" fill="oklch(0.72 0.14 340)"><animate attributeName="width" values="0;230" dur="1.6s" fill="freeze" /></rect>
        <text y="28" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="oklch(0.72 0.06 340)">R 1,420 / R 2,200</text>
      </g>
      <g fontFamily="Geist, sans-serif" fontSize="11" fill="oklch(0.88 0.02 90)">
        {[["MON", "Chakalaka & pap"], ["TUE", "Bobotie bowl"], ["WED", "Bunny chow (veg)"], ["THU", "Peri-peri chicken"]].map(([d, m], i) =>
          <g key={i} transform={`translate(20, ${130 + i * 28})`}>
            <rect width="360" height="22" rx="4" fill="oklch(0.15 0.02 340 / 0.6)" stroke="oklch(0.3 0.04 340 / 0.3)" />
            <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.6 0.04 340)">{d}</text>
            <text x="50" y="15">{m}</text>
            <circle cx="345" cy="11" r="2" fill="oklch(0.82 0.14 340)"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" /></circle>
          </g>
        )}
      </g>
    </svg>
  );
}

function TradeWorxMockup() {
  return (
    <svg viewBox="0 0 400 260" style={{ width: "100%", height: "100%" }}>
      <defs><linearGradient id="tw-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="oklch(0.22 0.04 200)" /><stop offset="100%" stopColor="oklch(0.14 0.03 200)" /></linearGradient></defs>
      <rect width="400" height="260" fill="url(#tw-bg)" rx="8" />
      <text x="20" y="28" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.78 0.06 200)" letterSpacing="1">TRADE WORX · INVOICE #0428</text>
      <text x="20" y="60" fontFamily="Instrument Serif, serif" fontSize="22" fill="oklch(0.95 0.02 90)">Naidoo Plumbing</text>
      <g fontFamily="Geist, sans-serif" fontSize="10" fill="oklch(0.88 0.02 90)">
        {[["Geyser replacement", "R 4,200"], ["Call-out + labour (2h)", "R   850"], ["Copper fittings", "R   320"]].map(([d, v], i) =>
          <g key={i} transform={`translate(20, ${85 + i * 24})`}>
            <line x1="0" y1="16" x2="360" y2="16" stroke="oklch(0.3 0.04 200 / 0.4)" strokeDasharray="2 3" />
            <text x="0" y="10">{d}</text>
            <text x="360" y="10" textAnchor="end" fontFamily="IBM Plex Mono, monospace">{v}</text>
          </g>
        )}
      </g>
      <g transform="translate(20, 175)">
        <rect width="360" height="36" rx="6" fill="oklch(0.18 0.04 200 / 0.7)" stroke="oklch(0.5 0.08 200 / 0.4)" />
        <text x="12" y="22" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.7 0.04 200)">TOTAL DUE</text>
        <text x="348" y="24" textAnchor="end" fontFamily="Instrument Serif, serif" fontSize="22" fill="oklch(0.82 0.14 200)">R 5,370</text>
      </g>
      <g transform="translate(20, 225)">
        <rect width="170" height="22" rx="11" fill="oklch(0.15 0.03 200)" stroke="oklch(0.3 0.04 200 / 0.4)" />
        <rect x="2" y="2" width="82" height="18" rx="9" fill="oklch(0.5 0.1 200 / 0.5)" />
        <text x="43" y="15" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.95 0.02 90)">INVOICE</text>
        <text x="127" y="15" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.6 0.04 200)">RETAIL · POS</text>
      </g>
    </svg>
  );
}

function CVReadyMockup() {
  return (
    <svg viewBox="0 0 400 260" style={{ width: "100%", height: "100%" }}>
      <defs><linearGradient id="cv-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="oklch(0.22 0.04 75)" /><stop offset="100%" stopColor="oklch(0.14 0.03 75)" /></linearGradient></defs>
      <rect width="400" height="260" fill="url(#cv-bg)" rx="8" />
      <text x="20" y="28" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.78 0.06 75)" letterSpacing="1">CV READY · INTERVIEW COACH</text>
      <text x="20" y="60" fontFamily="Instrument Serif, serif" fontSize="22" fill="oklch(0.95 0.02 90)">Tell me about yourself.</text>
      <g fontFamily="Geist, sans-serif" fontSize="10">
        <g transform="translate(20, 90)">
          <rect width="200" height="40" rx="8" fill="oklch(0.28 0.04 75 / 0.5)" stroke="oklch(0.4 0.06 75 / 0.4)" />
          <text x="12" y="16" fill="oklch(0.78 0.06 75)" fontFamily="IBM Plex Mono, monospace" fontSize="8">COACH</text>
          <text x="12" y="30" fill="oklch(0.92 0.02 90)">Open with your strongest skill.</text>
        </g>
        <g transform="translate(180, 140)">
          <rect width="200" height="52" rx="8" fill="oklch(0.18 0.02 75)" stroke="oklch(0.3 0.03 75 / 0.4)" />
          <text x="12" y="16" fill="oklch(0.6 0.04 75)" fontFamily="IBM Plex Mono, monospace" fontSize="8">THANDIWE · JOB SEEKER</text>
          <text x="12" y="30" fill="oklch(0.92 0.02 90)">I'm a logistics coordinator</text>
          <text x="12" y="42" fill="oklch(0.92 0.02 90)">with 4 years at Shoprite…</text>
        </g>
        <g transform="translate(20, 200)">
          <text fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.78 0.06 75)">INTERVIEW SCORE</text>
          <text y="24" fontFamily="Instrument Serif, serif" fontSize="26" fill="oklch(0.95 0.02 90)">82<tspan fontSize="13" fill="oklch(0.7 0.04 75)"> / 100</tspan></text>
          <rect x="120" y="18" width="240" height="6" rx="3" fill="oklch(0.15 0.02 75)" />
          <rect x="120" y="18" width="197" height="6" rx="3" fill="oklch(0.82 0.14 75)"><animate attributeName="width" values="0;197" dur="1.8s" fill="freeze" /></rect>
        </g>
      </g>
    </svg>
  );
}

const PRODUCT_DATA = [
  {
    num: "I",
    name: <>Drasil Agri · <em>Livestock</em></>,
    tagline: "Cattle, sheep & goat management for working farmers.",
    desc: "Drasil Agri Livestock is the herd book in your pocket. Tag every animal, log weights and births, schedule vaccinations and dosing, and track which mother bore which calf. Built offline-first for the kraal — your phone records everything in the field, then syncs the moment you're back in signal.",
    bullets: [
      "Individual animal profiles — ear-tag, breed, weight history, lineage, photos.",
      "Vaccination & dosing scheduler with reminders and a full medication log.",
      "Breeding records — pairings, due dates, calving notes, mother–offspring links.",
      "Sales, purchases and movement tracking, ready for SARS and stock-theft cases.",
      "Multi-farm and multi-user support for co-ops and family operations.",
      "Offline-first design — full functionality without a signal, automatic sync when online.",
    ],
    hue: 155,
    Mockup: LivestockMockup,
    status: "LIVE",
    region: "INTERNATIONAL",
    logo: "assets/drasil-agri-logo.png",
    url: "https://farm-dairy-ten.vercel.app/",
  },
  {
    num: "II",
    name: <>Drasil Agri · <em>Poultry</em></>,
    tagline: "Layer & broiler management, flock by flock.",
    desc: "Drasil Agri Poultry is the layer-house and broiler-cycle companion. Track flocks from day-old chick to slaughter, monitor feed conversion, daily egg counts, mortality and house conditions — all on one screen. Designed for commercial growers who need numbers they can trust at the end of every day.",
    bullets: [
      "Flock-level tracking with daily counts, mortality, culls and transfers.",
      "Egg production logging by house, including grade A / B / cracked breakdowns.",
      "Feed consumption + FCR (feed conversion ratio) calculated automatically.",
      "Vaccination programmes for layers and broilers, with calendar reminders.",
      "House environment notes — temperature, humidity, lighting hours.",
      "Reports per flock cycle for cost, yield, mortality and profit per bird.",
    ],
    hue: 60,
    Mockup: PoultryMockup,
    status: "LIVE",
    region: "INTERNATIONAL",
    logo: "assets/drasil-agri-logo.png",
    url: "https://farm-dairy-poultry.vercel.app/",
  },
  {
    num: "III",
    name: <>Karttly</>,
    tagline: "Grocery budgets, meal prep, and an AI that actually cooks.",
    desc: "Karttly is the kitchen companion that turns a weekly grocery budget into a real plan. Set what you can spend, log what you buy, and Karttly suggests a week of meals that fit your trolley — not the other way around. Ask the AI for substitutions, scaled-down portions, or what to make from last night's leftovers.",
    bullets: [
      "Weekly and monthly grocery budgeting with overspend alerts.",
      "Smart shopping lists that learn your household's staples.",
      "AI-powered recipe suggestions based on what you actually have at home.",
      "Meal-prep mode — turn a weekend cook into five workday lunches.",
      "Pantry tracking so nothing expires forgotten at the back of the cupboard.",
      "Shared lists for households and flatmates, available worldwide.",
    ],
    hue: 340,
    Mockup: KarttlyMockup,
    status: "LIVE",
    region: "INTERNATIONAL",
    logo: "assets/karttly-logo.png",
    url: "https://karttly-lctp.vercel.app/",
  },
  {
    num: "IV",
    name: <>Trade <em>Worx</em></>,
    tagline: "Invoicing for trades. POS for small retail. One app, two modes.",
    desc: "Trade Worx is built for the South African small business — the plumber writing quotes from the bakkie, the spaza shop running a busy Saturday, the electrician chasing late invoices. Switch between Trade mode for site-based work and Retail mode for over-the-counter sales without leaving the app.",
    bullets: [
      "Professional quotes and invoices in your colours, with VAT-ready totals.",
      "Job tracking — quote → accepted → in progress → invoiced → paid.",
      "Customer database with payment history and outstanding balances.",
      "Retail / POS mode for small shops: barcode scanning, cash-up, daily Z-reads.",
      "Stock control with low-stock warnings and supplier reorder suggestions.",
      "Built specifically for South African trades and retailers — Rand, VAT, EFT.",
    ],
    hue: 200,
    Mockup: TradeWorxMockup,
    status: "90% — JOIN BETA",
    region: "SOUTH AFRICA ONLY",
    logo: "assets/tradeworx-logo.jpg",
    url: "https://trade-worx.vercel.app/",
  },
  {
    num: "V",
    name: <>CV <em>Ready</em></>,
    tagline: "Recruiter-ready CVs and an interview coach for the SA market.",
    desc: "CV Ready helps South African job seekers move from \"I'm looking\" to \"I got the offer.\" Build an ATS-friendly CV in minutes, then practise the interview with an AI coach that understands local industries — mining, fintech, retail, public sector — and the questions that actually come up.",
    bullets: [
      "Guided CV builder with templates that pass automated screening.",
      "Targeted CVs per role — same profile, tailored output for each application.",
      "AI interview coach trained on SA industries, with feedback after each answer.",
      "Salary-range research for South African roles, by city and experience.",
      "Cover-letter generator that doesn't sound like a robot wrote it.",
      "Aimed squarely at the SA market — TVET, NQF, learnerships, B-BBEE context.",
    ],
    hue: 75,
    Mockup: CVReadyMockup,
    status: "IN DEVELOPMENT",
    region: "SOUTH AFRICA ONLY",
  },
];

function ProductBlock({ p, idx }) {
  const reverse = idx % 2 === 1;
  const M = p.Mockup;
  const accent = `oklch(0.82 0.1 ${p.hue})`;
  const accentSoft = `oklch(0.5 0.08 ${p.hue} / 0.5)`;
  const statusColor = p.status === "LIVE" ? "oklch(0.74 0.12 155)"
                    : p.status.startsWith("90%") ? "oklch(0.82 0.14 75)"
                    : "oklch(0.62 0.04 260)";
  return (
    <article className="product-block" data-screen-label={`Product · ${p.num}`}
      style={{ "--hue": p.hue, gridTemplateAreas: reverse ? `"visual text"` : `"text visual"` }}>
      <div className="pb-text" style={{ gridArea: "text" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 18 }}>
          {p.logo && <img src={p.logo} alt="" style={{ width: 64, height: 64, borderRadius: 14, objectFit: "cover", background: "oklch(0.08 0.02 260)", border: "1px solid var(--border-soft)" }} />}
          <div className="roman" style={{ fontSize: 18, color: accent }}>{p.num}</div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <span className="tag" style={{ borderColor: statusColor, color: statusColor }}>● {p.status}</span>
          <span className="tag">{p.region}</span>
        </div>
        <h3 className="h-serif" style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, marginBottom: 14 }}>{p.name}</h3>
        <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: accent, letterSpacing: "0.02em", marginBottom: 20 }}>{p.tagline}</p>
        <p style={{ color: "var(--fg-dim)", fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: "52ch" }}>{p.desc}</p>
        <ul className="pb-bullets">
          {p.bullets.map((b, j) => <li key={j}><span style={{ color: accent }}>✦</span> {b}</li>)}
        </ul>
        {p.url && (
          <a href={p.url} target="_blank" rel="noopener" className="btn btn-ghost"
            style={{ marginTop: 28, borderColor: accentSoft, color: accent }}>
            Open {p.name.props ? "the app" : "app"} ↗
          </a>
        )}
      </div>
      <div className="pb-visual" style={{ gridArea: "visual" }}>
        <div className="product-mockup" style={{ aspectRatio: "400/260" }}>
          <M />
        </div>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section className="section page" id="products" data-screen-label="Products">
      <div className="section-head">
        <h2 className="h-serif"><em>Five</em><br />branches,<br />each its own.</h2>
        <div className="sub">
          <span>II · THE CATALOGUE</span>
          <span>Drasil Nova SaaS apps</span>
        </div>
        <div className="meta-right">Every app stands on its own — its own sign-in, its own focus, its own audience. Two reach the world; three are built for South Africa specifically.</div>
      </div>

      <div className="product-blocks">
        {PRODUCT_DATA.map((p, i) => <ProductBlock key={i} p={p} idx={i} />)}
      </div>
    </section>
  );
}

Object.assign(window, { Products, PRODUCT_DATA });
