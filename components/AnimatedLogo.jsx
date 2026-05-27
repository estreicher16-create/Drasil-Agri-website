// Animated Drasil Nova logo — uses the static PNG as a base and layers
// CSS/SVG animation on top: slow rotating outer ring, pulsing star core,
// and a subtle radial glow. Used in the nav and the hero label.

function AnimatedLogo({ size = 38, showWordmark = false, intensity = 1 }) {
  // The PNG includes the wordmark; we crop to the emblem (top ~62% of the image).
  const wrapStyle = {
    position: "relative",
    width: size,
    height: size,
    borderRadius: 8,
    overflow: "hidden",
    flexShrink: 0,
  };

  if (showWordmark) {
    // Full logo with wordmark, animations layered on top
    return (
      <div style={{ position: "relative", display: "inline-block", width: size, height: "auto" }}>
        <img
          src="assets/drasil-nova-logo.png"
          alt="Drasil Nova"
          style={{
            width: size,
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 0 24px oklch(0.7 0.14 75 / 0.25))",
          }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 32%, oklch(0.95 0.12 75 / ${0.18 * intensity}), transparent 35%)`,
          mixBlendMode: "screen",
          pointerEvents: "none",
          animation: "logoStarPulse 3.4s ease-in-out infinite",
        }} />
      </div>
    );
  }

  // Emblem-only mode (cropped)
  return (
    <div style={wrapStyle} className="animated-logo-emblem">
      <img
        src="assets/drasil-nova-logo.png"
        alt="Drasil Nova"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          objectPosition: "center 30%",
          transform: "scale(1.55) translateY(-12%)",
          transformOrigin: "center 35%",
          mixBlendMode: "screen",
        }}
      />
      {/* slow-rotating ring overlay (subtle) */}
      <div className="logo-ring-rotate" style={{
        position: "absolute",
        inset: 0,
        borderRadius: 8,
        background: `conic-gradient(from 0deg, transparent 0%, oklch(0.85 0.14 75 / ${0.22 * intensity}) 25%, transparent 50%, oklch(0.85 0.14 200 / ${0.18 * intensity}) 75%, transparent 100%)`,
        mixBlendMode: "screen",
        pointerEvents: "none",
      }} />
      {/* central star pulse */}
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: 8,
        background: `radial-gradient(circle at 50% 50%, oklch(0.98 0.1 75 / ${0.45 * intensity}) 0%, transparent 25%)`,
        mixBlendMode: "screen",
        pointerEvents: "none",
        animation: "logoStarPulse 2.8s ease-in-out infinite",
      }} />
      {/* faint vignette to keep edges contained */}
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: 8,
        boxShadow: "inset 0 0 12px oklch(0.06 0.02 260 / 0.8)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

// Larger animated version with the wordmark visible — for the footer.
function AnimatedLogoFull({ width = 200 }) {
  return (
    <div style={{ position: "relative", display: "inline-block", width, lineHeight: 0 }}>
      <img
        src="assets/drasil-nova-logo.png"
        alt="Drasil Nova"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: 12,
          filter: "drop-shadow(0 0 30px oklch(0.7 0.14 75 / 0.2))",
        }}
      />
      {/* star pulse over emblem area */}
      <div style={{
        position: "absolute",
        left: 0, right: 0,
        top: "8%", height: "55%",
        background: "radial-gradient(circle at 50% 35%, oklch(0.98 0.12 75 / 0.35) 0%, transparent 30%)",
        mixBlendMode: "screen",
        pointerEvents: "none",
        animation: "logoStarPulse 3.2s ease-in-out infinite",
        borderRadius: 12,
      }} />
      {/* slow conic shimmer */}
      <div className="logo-ring-rotate" style={{
        position: "absolute",
        left: "50%", top: "8%",
        width: "62%", aspectRatio: "1",
        transform: "translateX(-50%)",
        borderRadius: "50%",
        background: "conic-gradient(from 0deg, transparent 0%, oklch(0.9 0.14 75 / 0.25) 18%, transparent 40%, transparent 60%, oklch(0.9 0.14 200 / 0.18) 78%, transparent 100%)",
        mixBlendMode: "screen",
        pointerEvents: "none",
        filter: "blur(6px)",
      }} />
    </div>
  );
}

Object.assign(window, { AnimatedLogo, AnimatedLogoFull });
