// ─────────────────────────────────────────────────────────────────────────────
// Hero visual variants: "tree" (default), "constellation", "orbit"
// All variants share the Drasil-Nova cosmology: trunk/roots + three stars
// representing the three SaaS products.
// ─────────────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { key: "agri",     label: "Drasil Agri", hue: 155, note: "I",   x: 120, y: 90 },
  { key: "karttly",  label: "Karttly",     hue: 340, note: "II",  x: 380, y: 60 },
  { key: "trade",    label: "Trade Worx",  hue: 200, note: "III", x: 100, y: 250 },
  { key: "cvready",  label: "CV Ready",    hue: 75,  note: "IV",  x: 260, y: 180 },
];

function Starfield({ count = 60, seed = 1 }) {
  const stars = React.useMemo(() => {
    const rng = (i) => ((Math.sin(i * 9301 + seed * 49297) * 233280) % 1 + 1) % 1;
    return Array.from({ length: count }, (_, i) => ({
      x: rng(i) * 100,
      y: rng(i + 100) * 100,
      r: 0.4 + rng(i + 200) * 1.2,
      o: 0.3 + rng(i + 300) * 0.7,
      d: 2 + rng(i + 400) * 4,
      dl: rng(i + 500) * 3,
    }));
  }, [count, seed]);
  return (
    <>
      {stars.map((s, i) => (
        <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r}
          fill="oklch(0.95 0.02 90)"
          style={{ opacity: s.o, animation: `twinkle ${s.d}s ease-in-out ${s.dl}s infinite` }} />
      ))}
    </>
  );
}

// ───── Variant 1: the Tree ─────────────────────────────────────────────────
function TreeVariant() {
  return (
    <svg viewBox="0 0 500 520" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="star-a" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.06 90)" stopOpacity="1" />
          <stop offset="35%" stopColor="oklch(0.82 0.14 75)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.6 0.14 60)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="star-b" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.06 160)" stopOpacity="1" />
          <stop offset="35%" stopColor="oklch(0.74 0.12 155)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.5 0.12 165)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="star-c" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.06 340)" stopOpacity="1" />
          <stop offset="35%" stopColor="oklch(0.72 0.14 340)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.5 0.14 340)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="trunk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.74 0.12 155)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.3 0.06 165)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <Starfield count={80} />

      {/* ground glow */}
      <ellipse cx="250" cy="470" rx="220" ry="20" fill="oklch(0.62 0.16 55 / 0.18)" />

      {/* trunk (grows up) */}
      <path d="M 250 480 C 248 400, 252 340, 250 270" stroke="url(#trunk)" strokeWidth="3" fill="none"
        strokeLinecap="round" />

      {/* branches */}
      <path d="M 250 270 C 230 230, 180 200, 120 170" stroke="oklch(0.55 0.09 160 / 0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 250 270 C 280 240, 340 215, 400 180" stroke="oklch(0.55 0.09 160 / 0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 250 270 C 252 220, 258 180, 260 120" stroke="oklch(0.55 0.09 160 / 0.5)" strokeWidth="1.5" strokeDasharray="2 4" fill="none" strokeLinecap="round" />
      <path d="M 250 320 C 220 340, 190 350, 160 360" stroke="oklch(0.55 0.09 160 / 0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* twigs */}
      <g stroke="oklch(0.55 0.09 160 / 0.35)" strokeWidth="0.8" fill="none" strokeLinecap="round">
        <path d="M 180 205 L 160 190" />
        <path d="M 180 205 L 170 220" />
        <path d="M 320 210 L 340 198" />
        <path d="M 320 210 L 328 225" />
        <path d="M 254 200 L 240 188" />
        <path d="M 254 200 L 268 192" />
      </g>

      {/* roots */}
      <g stroke="oklch(0.48 0.09 165 / 0.5)" strokeWidth="1" fill="none" strokeLinecap="round">
        <path d="M 250 480 C 230 490, 200 495, 170 500" />
        <path d="M 250 480 C 270 490, 300 495, 330 500" />
        <path d="M 250 480 L 250 510" />
      </g>

      {/* three stars (products) */}
      {/* Drasil Agri — left branch */}
      <g transform="translate(120, 170)">
        <circle r="32" fill="url(#star-b)" />
        <circle r="36" fill="none" stroke="oklch(0.74 0.12 155 / 0.4)"
          style={{ transformOrigin: "center", animation: "pulse-ring 3.5s ease-out infinite" }} />
        <circle r="4" fill="oklch(0.98 0.06 160)" />
        <text x="0" y="60" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.82 0.04 155)" letterSpacing="1">
          I · DRASIL AGRI
        </text>
      </g>
      {/* Karttly — right branch */}
      <g transform="translate(400, 180)">
        <circle r="30" fill="url(#star-c)" />
        <circle r="34" fill="none" stroke="oklch(0.72 0.14 340 / 0.4)"
          style={{ transformOrigin: "center", animation: "pulse-ring 4s ease-out 0.5s infinite" }} />
        <circle r="3.5" fill="oklch(0.98 0.06 340)" />
        <text x="0" y="58" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.82 0.04 340)" letterSpacing="1">
          II · KARTTLY
        </text>
      </g>
      {/* Trade Worx — lower left */}
      <g transform="translate(160, 360)">
        <circle r="26" fill="oklch(0.5 0.1 200 / 0.35)" />
        <circle r="30" fill="none" stroke="oklch(0.7 0.12 200 / 0.4)"
          style={{ transformOrigin: "center", animation: "pulse-ring 4.5s ease-out 1.5s infinite" }} />
        <circle r="3.5" fill="oklch(0.85 0.12 200)" />
        <text x="0" y="54" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.78 0.06 200)" letterSpacing="1">
          III · TRADE WORX
        </text>
      </g>

      {/* CV Ready — top / crown star (the Nova) */}
      <g transform="translate(260, 110)">
        <circle r="42" fill="url(#star-a)" opacity="0.6" />
        <circle r="46" fill="none" stroke="oklch(0.82 0.14 75 / 0.4)" strokeDasharray="2 3"
          style={{ transformOrigin: "center", animation: "pulse-ring 3s ease-out 1s infinite" }} />
        <circle r="5" fill="oklch(0.98 0.06 90)" opacity="0.7" />
        {/* nova rays */}
        <g stroke="oklch(0.95 0.08 90 / 0.5)" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="1 2">
          <line x1="0" y1="-14" x2="0" y2="-22" />
          <line x1="0" y1="14" x2="0" y2="22" />
          <line x1="-14" y1="0" x2="-22" y2="0" />
          <line x1="14" y1="0" x2="22" y2="0" />
        </g>
        <text x="0" y="70" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.78 0.04 75)" letterSpacing="1">
          IV · CV READY · SOON
        </text>
      </g>

      {/* orbiting new star (the "next app") */}
      <g style={{ transformOrigin: "250px 270px", animation: "orbit 26s linear infinite" }}>
        <circle cx="250" cy="90" r="2" fill="oklch(0.96 0.04 90)" opacity="0.8" />
      </g>

      {/* label for root */}
      <text x="250" y="515" textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="11" fill="oklch(0.5 0.02 260)">
        ~ rooted in Cape Town, growing worldwide ~
      </text>
    </svg>
  );
}

// ───── Variant 2: Constellation ────────────────────────────────────────────
function ConstellationVariant() {
  return (
    <svg viewBox="0 0 500 520" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="c-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.06 90)" stopOpacity="1" />
          <stop offset="40%" stopColor="oklch(0.82 0.14 75)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="oklch(0.5 0.14 60)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <Starfield count={120} seed={2} />

      {/* connecting lines */}
      <g stroke="oklch(0.82 0.06 75 / 0.35)" strokeWidth="0.8" strokeDasharray="2 4" fill="none">
        <line x1="110" y1="180" x2="260" y2="100" />
        <line x1="260" y1="100" x2="400" y2="200" />
        <line x1="110" y1="180" x2="220" y2="330" />
        <line x1="400" y1="200" x2="300" y2="350" />
        <line x1="220" y1="330" x2="300" y2="350" />
        <line x1="260" y1="100" x2="260" y2="240" strokeDasharray="none" stroke="oklch(0.82 0.06 75 / 0.15)" />
      </g>

      {/* central nova (company) */}
      <g transform="translate(260, 240)">
        <circle r="70" fill="url(#c-glow)" opacity="0.8" />
        <circle r="6" fill="oklch(0.98 0.04 90)" />
        <circle r="18" fill="none" stroke="oklch(0.82 0.14 75 / 0.5)"
          style={{ transformOrigin: "center", animation: "pulse-ring 4s ease-out infinite" }} />
        <text y="100" textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="16" fill="oklch(0.88 0.04 75)">
          Drasil Nova
        </text>
      </g>

      {/* product stars */}
      <ProductStar x={110} y={180} label="DRASIL LIVESTOCK" note="I" hue={155} />
      <ProductStar x={260} y={100} label="CV READY" note="III" hue={75} size={1.2} />
      <ProductStar x={400} y={200} label="KARTTLY" note="II" hue={340} />
      <ProductStar x={220} y={330} label="COMING SOON" note="IV" hue={220} faint />
      <ProductStar x={300} y={350} label="COMING SOON" note="V" hue={200} faint />
    </svg>
  );
}

function ProductStar({ x, y, label, note, hue, size = 1, faint = false }) {
  const r = 22 * size;
  const color = `oklch(${faint ? 0.5 : 0.82} ${faint ? 0.04 : 0.14} ${hue})`;
  return (
    <g transform={`translate(${x}, ${y})`} opacity={faint ? 0.4 : 1}>
      <circle r={r} fill={`oklch(${faint ? 0.3 : 0.6} 0.1 ${hue} / 0.25)`} />
      <circle r={r + 4} fill="none" stroke={`oklch(0.7 0.1 ${hue} / 0.3)`}
        style={{ transformOrigin: "center", animation: `pulse-ring ${3 + (hue % 3)}s ease-out ${hue / 200}s infinite` }} />
      <circle r={3 * size} fill={color} />
      <text y={r + 18} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill={color} letterSpacing="1.5">
        {note} · {label}
      </text>
    </g>
  );
}

// ───── Variant 3: Orbit ────────────────────────────────────────────────────
function OrbitVariant() {
  return (
    <svg viewBox="0 0 500 520" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="o-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.08 90)" />
          <stop offset="40%" stopColor="oklch(0.78 0.16 65)" />
          <stop offset="100%" stopColor="oklch(0.4 0.14 50 / 0)" />
        </radialGradient>
      </defs>
      <Starfield count={100} seed={3} />

      {/* orbit rings */}
      <g fill="none" stroke="oklch(0.6 0.04 260 / 0.25)" strokeDasharray="1 3">
        <ellipse cx="250" cy="260" rx="100" ry="98" />
        <ellipse cx="250" cy="260" rx="160" ry="156" />
        <ellipse cx="250" cy="260" rx="220" ry="214" />
      </g>

      {/* center star */}
      <g transform="translate(250, 260)">
        <circle r="60" fill="url(#o-sun)" />
        <circle r="8" fill="oklch(0.98 0.04 90)" />
      </g>

      {/* orbiting products */}
      <g style={{ transformOrigin: "250px 260px", animation: "orbit 30s linear infinite" }}>
        <g transform="translate(350, 260)">
          <circle r="14" fill="oklch(0.5 0.12 155 / 0.3)" />
          <circle r="4" fill="oklch(0.74 0.12 155)" />
        </g>
      </g>
      <g style={{ transformOrigin: "250px 260px", animation: "orbit 45s linear infinite reverse" }}>
        <g transform="translate(90, 260)">
          <circle r="16" fill="oklch(0.5 0.14 340 / 0.3)" />
          <circle r="4.5" fill="oklch(0.72 0.14 340)" />
        </g>
      </g>
      <g style={{ transformOrigin: "250px 260px", animation: "orbit 60s linear infinite" }}>
        <g transform="translate(470, 260)">
          <circle r="18" fill="oklch(0.5 0.14 75 / 0.35)" />
          <circle r="5" fill="oklch(0.82 0.14 75)" />
        </g>
      </g>

      {/* static labels */}
      <text x="250" y="150" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.7 0.04 155)" letterSpacing="1.5">I · DRASIL LIVESTOCK</text>
      <text x="250" y="380" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.7 0.04 340)" letterSpacing="1.5">II · KARTTLY</text>
      <text x="250" y="450" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="oklch(0.75 0.04 75)" letterSpacing="1.5">III · CV READY</text>
    </svg>
  );
}

function HeroVisual({ variant = "tree" }) {
  const Comp = variant === "constellation" ? ConstellationVariant
             : variant === "orbit" ? OrbitVariant
             : TreeVariant;
  return (
    <div className="hero-visual" style={{ position: "relative" }}>
      <Comp />
    </div>
  );
}

Object.assign(window, { HeroVisual, Starfield });
