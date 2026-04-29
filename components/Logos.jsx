const LOGOS = [
  "Du Plessis Farms",
  "Karoo Co-op",
  "UCT Careers",
  "Silver Stream Dairy",
  "Kasi Kitchen",
  "Harambee",
  "Cape Poultry",
  "Du Plessis Farms",
];

function Logos() {
  return (
    <section className="page" style={{ padding: "40px 0" }}>
      <div className="logos">
        <div className="eyebrow">TRUSTED BY A SMALL BUT GROWING CONSTELLATION</div>
        <div className="logos-row">
          {LOGOS.map((l, i) => (
            <div key={i} className="logo-item">
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" fill="oklch(0.6 0.08 75)" /></svg>
              <span style={{ fontStyle: "italic" }}>{l}</span>
            </div>
          ))}
        </div>
        <div className="roman" style={{ fontStyle: "italic" }}>— and a handful we're not allowed to name yet.</div>
      </div>
    </section>
  );
}

Object.assign(window, { Logos });
