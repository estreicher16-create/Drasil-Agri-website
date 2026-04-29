function LogoMark({ size = 26 }) {
  return (
    <svg className="logo-mark" viewBox="0 0 26 26" width={size} height={size} fill="none">
      <defs>
        <radialGradient id="nova-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.95 0.12 80)" />
          <stop offset="60%" stopColor="oklch(0.72 0.16 60)" />
          <stop offset="100%" stopColor="oklch(0.5 0.14 50 / 0)" />
        </radialGradient>
      </defs>
      {/* trunk */}
      <path d="M13 26 L13 13" stroke="oklch(0.74 0.12 155)" strokeWidth="1.1" strokeLinecap="round" />
      {/* branches */}
      <path d="M13 15 L6 9" stroke="oklch(0.74 0.12 155)" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      <path d="M13 15 L20 9" stroke="oklch(0.74 0.12 155)" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      <path d="M13 13 L13 5" stroke="oklch(0.74 0.12 155)" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      {/* stars */}
      <circle cx="13" cy="4" r="3" fill="url(#nova-grad)" />
      <circle cx="13" cy="4" r="1.2" fill="oklch(0.98 0.05 90)" />
      <circle cx="6" cy="9" r="1.4" fill="oklch(0.82 0.14 75)" opacity="0.9" />
      <circle cx="20" cy="9" r="1.4" fill="oklch(0.82 0.14 75)" opacity="0.9" />
    </svg>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="page nav-inner">
        <a href="#" className="logo">
          <img src="assets/drasil-nova-logo.png" alt="Drasil Nova" style={{ width: 38, height: 38, objectFit: "cover", objectPosition: "center 35%", borderRadius: 8, background: "oklch(0.08 0.02 260)" }} />
          <span>Drasil <em>Nova</em></span>
        </a>
        <div className="nav-links">
          <a href="#products">Apps</a>
          <a href="#features">The Studio</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-ghost">Contact</a>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { Nav, LogoMark });
