function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="page">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 20 }}>
              <img src="assets/drasil-nova-logo.png" alt="Drasil Nova" style={{ width: 180, height: "auto", display: "block", borderRadius: 12 }} />
            </div>
            <p style={{ color: "var(--fg-dim)", maxWidth: "40ch", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, lineHeight: 1.4 }}>
              "A young South African app studio,<br/>building quiet software<br/>for loud lives."
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <a href="#contact" className="btn btn-ghost">hello@drasilnova.co.za</a>
            </div>
          </div>
          <div>
            <h5>Apps</h5>
            <a href="https://farm-dairy-ten.vercel.app/" target="_blank" rel="noopener">Drasil Agri · Livestock ↗</a>
            <a href="https://farm-dairy-poultry.vercel.app/" target="_blank" rel="noopener">Drasil Agri · Poultry ↗</a>
            <a href="https://karttly-lctp.vercel.app/" target="_blank" rel="noopener">Karttly ↗</a>
            <a href="https://trade-worx.vercel.app/" target="_blank" rel="noopener">Trade Worx · <span style={{ color: "var(--nova)" }}>beta</span> ↗</a>
            <a href="#" style={{ color: "var(--fg-faint)" }}>CV Ready · <span style={{ fontStyle: "italic" }}>soon</span></a>
          </div>
          <div>
            <h5>Studio</h5>
            <a href="#">About</a>
            <a href="#">Roadmap</a>
            <a href="#">Changelog</a>
            <a href="#">Press kit</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h5>Help</h5>
            <a href="#">Docs</a>
            <a href="#">Status</a>
            <a href="#">Privacy (POPIA)</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footer-sig h-serif italic">Drasil Nova</div>

        <div className="footer-meta">
          <span>© MMXXVI · DRASIL NOVA (PTY) LTD</span>
          <span>DRASILNOVA.CO.ZA</span>
          <span>SOUTH AFRICAN APP STUDIO</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
