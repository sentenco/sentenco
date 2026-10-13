import { useRef, useState } from "react";

const STAGE = 300;   // the whole photo is fitted inside this box
const OUT = 512;     // saved picture size
const MIN = 48;      // smallest crop edge on screen

// Shows the whole photo with a resizable crop box on top: drag the box to move
// it, drag a corner (or use the slider) to make it bigger or smaller. What is
// inside the box is saved as a square JPEG; every screen that shows avatar_url
// already rounds it into a circle, so the circle guide shows the final look.
export default function AvatarCropper({ src, onCancel, onDone }) {
  const imgRef = useRef(null);
  const drag = useRef(null);
  const [nat, setNat] = useState(null);
  const [box, setBox] = useState({ x: 0, y: 0, s: 0 });   // crop square in displayed px
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const fit = nat ? Math.min(STAGE / nat.w, STAGE / nat.h) : 1;
  const dw = nat ? nat.w * fit : STAGE;   // displayed photo size
  const dh = nat ? nat.h * fit : STAGE;

  function onLoad() {
    const el = imgRef.current;
    const n = { w: el.naturalWidth, h: el.naturalHeight };
    const f = Math.min(STAGE / n.w, STAGE / n.h);
    const w = n.w * f, h = n.h * f;
    const s = Math.min(w, h);
    setNat(n);
    setBox({ x: (w - s) / 2, y: (h - s) / 2, s });
  }

  const clampBox = (b) => {
    const s = Math.max(MIN, Math.min(b.s, dw, dh));
    return { s, x: Math.min(dw - s, Math.max(0, b.x)), y: Math.min(dh - s, Math.max(0, b.y)) };
  };

  function start(e, mode) {
    e.stopPropagation();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    drag.current = { mode, sx: e.clientX, sy: e.clientY, b: { ...box } };
  }
  function move(e) {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
    const b = d.b;
    if (d.mode === "move") { setBox(clampBox({ ...b, x: b.x + dx, y: b.y + dy })); return; }
    // Corner resize: the opposite corner stays put.
    const left = d.mode.includes("w"), top = d.mode.includes("n");
    const delta = ((left ? -dx : dx) + (top ? -dy : dy)) / 2;
    const fx = left ? b.x + b.s : b.x;        // fixed corner
    const fy = top ? b.y + b.s : b.y;
    const maxS = Math.min(left ? fx : dw - fx, top ? fy : dh - fy);
    const s = Math.max(MIN, Math.min(b.s + delta, maxS));
    setBox({ s, x: left ? fx - s : fx, y: top ? fy - s : fy });
  }
  function end() { drag.current = null; }

  // Slider resizes around the box's centre.
  function sizeTo(s) {
    const cx = box.x + box.s / 2, cy = box.y + box.s / 2;
    setBox(clampBox({ s, x: cx - s / 2, y: cy - s / 2 }));
  }

  function onKey(e) {
    const step = 6;
    const m = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
    if (m) { e.preventDefault(); setBox((b) => clampBox({ ...b, x: b.x + m[0], y: b.y + m[1] })); }
    else if (e.key === "+" || e.key === "=") sizeTo(box.s + 10);
    else if (e.key === "-") sizeTo(box.s - 10);
  }

  function apply() {
    if (!nat || busy) return;
    setBusy(true);
    const k = 1 / fit;                       // displayed px -> source px
    const sx = box.x * k, sy = box.y * k, ss = box.s * k;
    const out = Math.min(OUT, Math.round(ss));
    const canvas = document.createElement("canvas");
    canvas.width = out; canvas.height = out;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, out, out);
    ctx.drawImage(imgRef.current, sx, sy, ss, ss, 0, 0, out, out);
    canvas.toBlob((blob) => {
      setBusy(false);
      if (!blob) { setFailed(true); return; }
      onDone(blob);
    }, "image/jpeg", 0.9);
  }

  const maxS = Math.min(dw, dh);
  return (
    <div className="ac-wrap" role="dialog" aria-label="Crop your photo">
      <style>{CSS}</style>
      <h3 className="ac-title">Crop your photo</h3>
      <p className="ac-hint">Drag the circle to choose what shows. Drag a corner to resize it.</p>
      <div className="ac-stage" style={{ width: dw, height: dh }}>
        <img ref={imgRef} src={src} alt="" draggable={false} onLoad={onLoad} onError={() => setFailed(true)}
          style={{ width: dw, height: dh, opacity: nat ? 1 : 0 }} />
        {nat && (
          <div
            className="ac-box"
            tabIndex={0}
            style={{ left: box.x, top: box.y, width: box.s, height: box.s }}
            onPointerDown={(e) => start(e, "move")}
            onPointerMove={move}
            onPointerUp={end}
            onPointerCancel={end}
            onKeyDown={onKey}
          >
            <span className="ac-grid" aria-hidden="true" />
            {["nw", "ne", "sw", "se"].map((c) => (
              <span
                key={c}
                className={`ac-handle ac-handle--${c}`}
                onPointerDown={(e) => start(e, c)}
                onPointerMove={move}
                onPointerUp={end}
                onPointerCancel={end}
              />
            ))}
          </div>
        )}
      </div>
      <div className="ac-zoom">
        <span aria-hidden="true">Small</span>
        <input type="range" min={MIN} max={Math.max(MIN + 1, maxS)} step="1" value={box.s}
          onChange={(e) => sizeTo(Number(e.target.value))} aria-label="Crop size" disabled={!nat} />
        <span aria-hidden="true">Large</span>
      </div>
      {failed && <p className="ac-error">That photo couldn't be loaded. Choose it again from your device.</p>}
      <div className="ac-actions">
        <button type="button" className="ac-btn ac-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="button" className="ac-btn" onClick={apply} disabled={!nat || busy}>
          {busy ? "Working…" : "Use this crop"}
        </button>
      </div>
    </div>
  );
}

const CSS = `
.ac-wrap {
  position: absolute; inset: 0; z-index: 5; background: #fff; border-radius: 20px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 24px 24px; gap: 10px;
}
.ac-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 0; color: #2B2A4A; }
.ac-hint { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: #8B84A3; margin: 0 0 4px; text-align: center; }
.ac-stage { position: relative; overflow: hidden; background: #EFEAF6; flex-shrink: 0; user-select: none; touch-action: none; }
.ac-stage img { display: block; max-width: none; pointer-events: none; }
.ac-box {
  position: absolute; border-radius: 50%; cursor: move; outline: 2px solid #fff;
  box-shadow: 0 0 0 9999px rgba(43,42,74,0.55), 0 0 0 2px #FF6B4A;
}
.ac-box:focus-visible { outline: 3px solid #FF6B4A; }
.ac-handle {
  position: absolute; width: 18px; height: 18px; background: #fff; border: 2px solid #FF6B4A;
  border-radius: 4px; touch-action: none;
}
.ac-handle--nw { left: -4px; top: -4px; cursor: nwse-resize; }
.ac-handle--ne { right: -4px; top: -4px; cursor: nesw-resize; }
.ac-handle--sw { left: -4px; bottom: -4px; cursor: nesw-resize; }
.ac-handle--se { right: -4px; bottom: -4px; cursor: nwse-resize; }
.ac-zoom { display: flex; align-items: center; gap: 10px; width: 280px; margin-top: 6px; color: #8B84A3; font: 700 11.5px 'Quicksand', sans-serif; }
.ac-zoom input { flex: 1; accent-color: #FF6B4A; }
.ac-error { font-family: 'Quicksand', sans-serif; color: #C0392B; font-size: 12.5px; margin: 0; text-align: center; }
.ac-actions { display: flex; gap: 10px; margin-top: 8px; }
.ac-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; border: none; border-radius: 999px;
  padding: 11px 22px; cursor: pointer; background: #FF6B4A; color: #fff;
}
.ac-btn:hover { background: #E0502F; }
.ac-btn:disabled { opacity: 0.5; cursor: default; }
.ac-btn--ghost { background: #FDECE5; color: #FF6B4A; }
.ac-btn--ghost:hover { background: #fbdcd0; }
`;
