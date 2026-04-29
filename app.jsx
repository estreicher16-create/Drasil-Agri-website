const { useState, useEffect } = React;

function App() {
  const [tweaks, setTweaks] = useState(() => window.DRASIL_TWEAKS || {
    heroCopyVariant: "mythic", heroVisualVariant: "tree", accentHue: 75,
  });
  const [tweaksOpen, setTweaksOpen] = useState(false);

  // Apply accent hue on mount
  useEffect(() => {
    document.documentElement.style.setProperty("--nova", `oklch(0.82 0.14 ${tweaks.accentHue})`);
    document.documentElement.style.setProperty("--nova-deep", `oklch(0.62 0.16 ${Math.max(0, tweaks.accentHue - 20)})`);
  }, []);

  // Tweaks protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksOpen(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const cycleVisual = () => {
    const order = ["tree", "constellation", "orbit"];
    const next = order[(order.indexOf(tweaks.heroVisualVariant) + 1) % order.length];
    setTweaks({ ...tweaks, heroVisualVariant: next });
  };

  return (
    <>
      <Nav />
      <Hero copyVariant={tweaks.heroCopyVariant}
            visualVariant={tweaks.heroVisualVariant}
            onCycleVisual={cycleVisual} />
      <Logos />
      <Products />
      <Features />
      <Footer />
      <Tweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
