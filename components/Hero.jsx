const HERO_COPY = {
  mythic: {
    eyebrow: "A NEW STAR · EST. 2026",
    h1: <>Software, <em>rooted deep</em>,<br />growing <span className="sap">bright</span>.</>,
    lede: "Drasil Nova is a South African app studio building a small constellation of SaaS apps. Each one stands on its own — its own sign-in, its own price, its own purpose. Two reach the world; two solve South African problems."
  },
  direct: {
    eyebrow: "DRASIL NOVA · SA APP STUDIO",
    h1: <>Four apps.<br />One <em>small studio</em>.</>,
    lede: "A South African app builder shipping focused SaaS — for farmers, households, tradespeople and job-seekers. Each app is independent: its own sign-in, its own pricing, its own focus."
  },
  bold: {
    eyebrow: "SOUTH AFRICAN APP STUDIO",
    h1: <>We make the <em>tools</em><br />your <span className="sap">day</span> deserves.</>,
    lede: "Farms. Kitchens. Workshops. Job interviews. Drasil Nova is a South African app builder making serious SaaS — Drasil Agri and Karttly worldwide, Trade Worx and CV Ready built for SA."
  }
};

function Hero({ copyVariant, visualVariant, onCycleVisual }) {
  const copy = HERO_COPY[copyVariant] || HERO_COPY.mythic;
  return (
    <section className="hero page" data-screen-label="Hero">
      <div className="hero-text">
        <div className="hero-label">
          <span className="dot" />
          <span className="eyebrow">{copy.eyebrow}</span>
        </div>
        <h1 className="h-serif" style={{ textAlign: "center" }}>{copy.h1}</h1>
        <p className="lede">{copy.lede}</p>
        <div className="hero-ctas">
          <a href="#products" className="btn btn-primary">See the apps ↓</a>
          <button className="btn btn-ghost" onClick={onCycleVisual} title="Cycle hero visual" style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em" }}>
            ◑ {visualVariant}
          </button>
        </div>
        <div className="hero-meta">
          <div>
            <b>02</b>
            apps live
          </div>
          <div>
            <b>01</b>
            in beta · 90%
          </div>
          <div>
            <b>01</b>
            in development
          </div>
          <div>
            <b>ZA</b>
            built · 2 worldwide
          </div>
        </div>
      </div>
      <HeroVisual variant={visualVariant} />
    </section>);

}

Object.assign(window, { Hero, HERO_COPY });