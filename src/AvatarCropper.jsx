import { useEffect, useRef, useState } from "react";

const FRAME = 240;      // on-screen circle diameter
const OUT = 512;        // saved picture size
const MAX_ZOOM = 4;

// Lets a person drag and zoom their photo inside a circle, then bakes exactly
// what the circle shows into a square JPEG. Everything that shows avatar_url
// (header, Homeroom, Messenger, mentors) crops it to a circle already, so no
// other screen needs to know about positions.
export default function AvatarCropper({ src, onCancel, onDone }) {
  const imgRef = useRef(null);
  const drag = useRef(null);
  const [nat, setNat] = useState(null);          // natural size once loaded
  const [zoom, setZoom] = useState(1);           // 1 = just covers the circle
  const [pos, setPos] = useState({ x: 0, y: 0 }); // image center offset from circle center, px
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const base = nat ? Math.max(FRAME / nat.w, FRAME / nat.h) : 1;
  const scale = base * zoom;

  function clamp(p, z = zoom) {
    if (!nat) return p;
    const s = base * z;
    const mx = Math.max(0, (nat.w * s - FRAME) / 2);
    const my = Math.max(0, (nat.h * s - FRAME) / 2);
    return { x: Math.min(mx, Math.max(-mx, p.x)), y: Math.min(my, Math.max(-my, p.y)) };
  }

  function onLoad() {
    const el = imgRef.current;
    setNat({ w: el.naturalWidth, h: el.naturalHeight });
  }

  function changeZoom(z) {
    const nz = Math.min(MAX_ZOOM, Math.max(1, z));
    setZoom(nz);
    setPos((p) => clamp(p, nz));
  }

  function onPointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
  }
  function onPointerMove(e) {
    const d = drag.current;
    if (!d) return;
    setPos(clamp({ x: d.ox + e.clientX - d.sx, y: d.oy + e.clientY - d.sy }));
  }
  function onPointerUp() { drag.current = null; }

  // Wheel zoom needs a non-passive listener to stop the page scrolling.
  const frameRef = useRef(null);
  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return undefined;
    const h = (e) => { e.preventDefault(); changeZoom(zoomRef.current - e.deltaY * 0.002); };
    el.addEventListener("wheel", h, { passive: false });
    return () => el.removeEventListener("wheel", h);
  });

  function nudge(dx, dy) { setPos((p) => clamp({ x: p.x + dx, y: p.y + dy })); }
  function onKey(e) {
    const step = 8;
    if (e.key === "ArrowLeft") { e.preventDefault(); nudge(-step, 0); }
    else if (e.key === "ArrowRight") { e.preventDefault(); nudge(step, 0); }
    else if (e.key === "ArrowUp") { e.preventDefault(); nudge(0, -step); }
    else if (e.key === "ArrowDown") { e.preventDefault(); nudge(0, step); }
    else if (e.key === "+" || e.key === "=") changeZoom(zoom + 0.1);
    else if (e.key === "-") changeZoom(zoom - 0.1);
  }

  function apply() {
    if (!nat || busy) return;
    setBusy(true);
    const canvas = document.createElement("canvas");
    canvas.width = OUT; canvas.height = OUT;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, OUT, OUT);
    const k = OUT / FRAME;
    const w = nat.w * scale * k;
    const h = nat.h * scale * k;
    ctx.drawImage(imgRef.current, OUT / 2 + pos.x * k - w / 2, OUT / 2 + pos.y * k - h / 2, w, h);
    canvas.toBlob((blob) => {
      setBusy(false);
      if (!blob) { setFailed(true); return; }
      onDone(blob);
    }, "image/jpeg", 0.9);
  }

  return (
    <div className="ac-wrap" role="dialog" aria-label="Adjust your photo">
      <style>{CSS}</style>
      <h3 className="ac-title">Adjust your photo</h3>
      <p className="ac-hint">Drag to move. Use the slider to zoom.</p>
      <div
        ref={frameRef}
        className="ac-frame"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKey}
      >
        <img
          ref={imgRef}
          src={src}
          alt=""
          draggable={false}
          onLoad={onLoad}
          onError={() => setFailed(true)}
          style={nat ? {
            width: nat.w * scale,
            height: nat.h * scale,
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
          } : { opacity: 0 }}
        />
      </div>
      <div className="ac-zoom">
        <span aria-hidden="true">–</span>
        <input
          type="range" min="1" max={MAX_ZOOM} step="0.01" value={zoom}
          onChange={(e) => changeZoom(Number(e.target.value))}
          aria-label="Zoom"
        />
        <span aria-hidden="true">+</span>
      </div>
      {failed && <p className="ac-error">That photo couldn't be loaded. Choose it again from your device.</p>}
      <div className="ac-actions">
        <button type="button" className="ac-btn ac-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="button" className="ac-btn" onClick={apply} disabled={!nat || busy}>
          {busy ? "Working…" : "Use this photo"}
        </button>
      </div>
    </div>
  );
}

const CSS = `
.ac-wrap {
  position: absolute; inset: 0; z-index: 5; background: #fff; border-radius: 20px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 28px 30px; gap: 10px;
}
.ac-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 0; color: #2B2A4A; }
.ac-hint { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: #8B84A3; margin: 0 0 6px; }
.ac-frame {
  position: relative; width: ${FRAME}px; height: ${FRAME}px; border-radius: 50%; overflow: hidden;
  background: #EFEAF6; cursor: grab; touch-action: none; user-select: none; flex-shrink: 0;
  box-shadow: 0 0 0 3px #FDECE5, 0 0 0 4px #FF6B4A;
}
.ac-frame:active { cursor: grabbing; }
.ac-frame:focus-visible { outline: 3px solid #2B2A4A; outline-offset: 5px; }
.ac-frame img { position: absolute; left: 50%; top: 50%; max-width: none; pointer-events: none; }
.ac-zoom { display: flex; align-items: center; gap: 10px; width: ${FRAME}px; margin-top: 8px; color: #8B84A3; font-weight: 700; }
.ac-zoom input { flex: 1; accent-color: #FF6B4A; }
.ac-error { font-family: 'Quicksand', sans-serif; color: #C0392B; font-size: 12.5px; margin: 0; text-align: center; }
.ac-actions { display: flex; gap: 10px; margin-top: 10px; }
.ac-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; border: none; border-radius: 999px;
  padding: 11px 22px; cursor: pointer; background: #FF6B4A; color: #fff;
}
.ac-btn:hover { background: #E0502F; }
.ac-btn:disabled { opacity: 0.5; cursor: default; }
.ac-btn--ghost { background: #FDECE5; color: #FF6B4A; }
.ac-btn--ghost:hover { background: #fbdcd0; }
`;
