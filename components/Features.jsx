function Features() {
  return (
    <section className="section page" id="features" data-screen-label="Features">
      <div className="section-head">
        <h2 className="h-serif">Same <em>studio</em>.<br/>Same standards.</h2>
        <div className="sub">
          <span>III · THE STUDIO</span>
          <span>What every Drasil Nova app shares</span>
        </div>
        <div className="meta-right">
          Each app is its own product, with its own sign-in and its own price. But every one of them is built to the same standards — quiet interfaces, private data, offline-first, and honest pricing.
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card col-5">
          <div>
            <div className="fnum">F.01 · PRIVACY</div>
            <h3 className="h-serif">Your data stays <em>yours</em>.</h3>
          </div>
          <p>No ad pixels. No training on your content. Encrypted at rest, POPIA-aligned, and exportable to CSV or JSON at any time.</p>
        </div>
        <div className="feature-card col-7" style={{ background: "linear-gradient(160deg, oklch(0.62 0.16 55 / 0.12), var(--surface))" }}>
          <div>
            <div className="fnum">F.02 · OFFLINE-FIRST</div>
            <h3 className="h-serif">Built for the places <em>bandwidth forgets</em>.</h3>
          </div>
          <p>From load-shedding to deep-rural farms — every Drasil Nova app works fully offline and reconciles when you're back online. No spinning, no lost work.</p>
          <OfflineGlyph />
        </div>

        <div className="feature-card col-4">
          <div>
            <div className="fnum">F.03 · PAY YOUR WAY</div>
            <h3 className="h-serif">Each app, its <em>own price</em>.</h3>
          </div>
          <p>No bundles, no upsells. Pick the apps you need. Drasil Agri and Karttly bill internationally; Trade Worx bills in Rand.</p>
        </div>
        <div className="feature-card col-4">
          <div>
            <div className="fnum">F.04 · TWO WORLDS</div>
            <h3 className="h-serif">Global where it <em>helps</em>. Local where it <em>matters</em>.</h3>
          </div>
          <p>Drasil Agri and Karttly ship worldwide. Trade Worx and CV Ready are built specifically for South Africa.</p>
        </div>
        <div className="feature-card col-4">
          <div>
            <div className="fnum">F.05 · OPEN DATA</div>
            <h3 className="h-serif"><em>Export</em>, always.</h3>
          </div>
          <p>Every record — herd book, recipes, invoices — exports cleanly. Your work is never held hostage.</p>
        </div>

        <div className="feature-card col-12" style={{ minHeight: 160, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
          <div>
            <div className="fnum">F.06 · THE ROADMAP</div>
            <h3 className="h-serif" style={{ fontSize: 36 }}>CV Ready next, plus more <em>stars</em> beyond. A small studio, building one honest app at a time.</h3>
          </div>
          <a href="#roadmap" className="btn btn-ghost">See roadmap →</a>
        </div>
      </div>
    </section>
  );
}

function OfflineGlyph() {
  return (
    <svg viewBox="0 0 260 60" style={{ width: "100%", marginTop: 16 }}>
      <g fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="oklch(0.6 0.04 60)" letterSpacing="1">
        <text x="0" y="10">OFFLINE</text>
        <text x="220" y="10" textAnchor="end">SYNCED</text>
      </g>
      <line x1="0" y1="30" x2="260" y2="30" stroke="oklch(0.3 0.03 260 / 0.5)" strokeDasharray="2 3" />
      {[0.1, 0.28, 0.48, 0.72, 0.9].map((p, i) => (
        <g key={i}>
          <circle cx={p * 260} cy={30} r={4} fill={i < 3 ? "oklch(0.4 0.04 260)" : "oklch(0.82 0.14 75)"} />
          {i >= 3 && <circle cx={p * 260} cy={30} r={8} fill="none" stroke="oklch(0.82 0.14 75 / 0.5)">
            <animate attributeName="r" values="4;12;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
          </circle>}
        </g>
      ))}
      <text x="130" y="55" textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="11" fill="oklch(0.7 0.04 60)">
        The signal returns — the work catches up.
      </text>
    </svg>
  );
}

Object.assign(window, { Features });
