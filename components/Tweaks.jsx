function Tweaks({ open, tweaks, setTweaks }) {
  if (!open) return null;

  const set = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    } catch (e) {}
  };

  return (
    <div className="tweaks-panel">
      <h6>TWEAKS <span>◑ live</span></h6>

      <div className="tweak-group">
        <label>Hero copy</label>
        <div className="tweak-opts">
          {["mythic", "mythic", "bold"].map(v => (
            <button key={v} className={"tweak-opt" + (tweaks.heroCopyVariant === v ? " on" : "")}
              onClick={() => set({ heroCopyVariant: v })}>{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-group">
        <label>Hero visual</label>
        <div className="tweak-opts">
          {["tree", "constellation", "orbit"].map(v => (
            <button key={v} className={"tweak-opt" + (tweaks.heroVisualVariant === v ? " on" : "")}
              onClick={() => set({ heroVisualVariant: v })}>{v}</button>
          ))}
        </div>
      </div>

      <div className="tweak-group">
        <label>Nova accent hue</label>
        <input type="range" min="0" max="360" step="5"
          value={tweaks.accentHue}
          onChange={e => {
            const h = Number(e.target.value);
            set({ accentHue: h });
            document.documentElement.style.setProperty("--nova", `oklch(0.82 0.14 ${h})`);
            document.documentElement.style.setProperty("--nova-deep", `oklch(0.62 0.16 ${Math.max(0, h - 20)})`);
          }}
          style={{ width: "100%" }}
        />
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-faint)", marginTop: 4 }}>
          hue {tweaks.accentHue}°
        </div>
      </div>

      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-faint)", lineHeight: 1.5, marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border-soft)" }}>
        Toggle Tweaks in the toolbar<br/>to hide this panel.
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
