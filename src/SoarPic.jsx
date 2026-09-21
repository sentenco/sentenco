import React, { createContext, useContext, useEffect, useState } from "react";

// The lesson player provides this so every picture can be enlarged. Call it with { src, label, count, failed }.
export const ZoomContext = createContext(null);

// A picture slot. `src` empty (or a file that is not there yet) shows a dashed placeholder with the label.
// zoom: "tile" (default) the whole picture opens the big view and a small magnifier shows;
//       "icon" only the magnifier opens it (for pictures inside game buttons, where a click means something else);
//       "off" no zoom.
export function SoarPic({ src, label, size = 96, count = 1, zoom = "tile" }) {
  const openZoom = useContext(ZoomContext);
  const [state, setState] = useState(src ? "loading" : "failed");
  useEffect(() => { setState(src ? "loading" : "failed"); }, [src]);
  const canZoom = !!openZoom && zoom !== "off";
  const open = (e) => { e.stopPropagation(); openZoom({ src, label, count, failed: state === "failed" }); };
  return (
    <div
      className={`sp-tile ${canZoom && zoom === "tile" ? "is-zoomable" : ""}`}
      style={{ width: count > 1 ? Math.round(size * (1 + 0.55 * (count - 1))) : size, height: size }}
      onClick={canZoom && zoom === "tile" ? open : undefined}
    >
      {state !== "ok" && <span className="sp-missing"><span>{label}</span></span>}
      {src && state !== "failed" && (count > 1
        ? (
          <div className="sp-multi" style={state === "ok" ? undefined : { position: "absolute", width: 1, height: 1, opacity: 0 }}>
            {Array.from({ length: count }).map((_, k) => (
              <img key={k} src={src} alt={label} draggable={false} onLoad={k === 0 ? () => setState("ok") : undefined} onError={k === 0 ? () => setState("failed") : undefined} />
            ))}
          </div>
        )
        : (
          <img
            src={src}
            alt={label}
            draggable={false}
            onLoad={() => setState("ok")}
            onError={() => setState("failed")}
            style={state === "ok" ? undefined : { position: "absolute", width: 1, height: 1, opacity: 0 }}
          />
        ))}
      {canZoom && size >= 64 && (
        <span className="zoom-badge" role="button" aria-label="Enlarge the picture" onClick={open}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 L21 21" /></svg>
        </span>
      )}
    </div>
  );
}

// The big view. Clicking outside, the close button or Escape closes it.
export function ZoomOverlay({ zoom, onClose }) {
  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, onClose]);
  if (!zoom) return null;
  const n = zoom.count || 1;
  return (
    <div className="zoom-overlay" onClick={onClose}>
      <div className="zoom-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="zoom-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <div className="zoom-imgs" style={{ "--n": n }}>
          {zoom.failed || !zoom.src
            ? <div className="zoom-missing"><span>{zoom.label}</span></div>
            : Array.from({ length: n }).map((_, k) => <img key={k} src={zoom.src} alt={zoom.label} draggable={false} />)}
        </div>
      </div>
    </div>
  );
}

export const zoomStyles = `
.sp-tile.is-zoomable { cursor: zoom-in; }
.zoom-badge { position: absolute; top: 4px; right: 4px; z-index: 3; width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,0.92); color: #1B2A4A; box-shadow: 0 1px 4px rgba(27,42,74,0.3); display: flex; align-items: center; justify-content: center; cursor: zoom-in; opacity: 0.85; }
.zoom-badge:hover { opacity: 1; background: #fff; }
.zoom-overlay { position: fixed; inset: 0; z-index: 60; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; padding: 16px; }
.zoom-box { position: relative; background: #fff; border-radius: 24px; padding: 14px; box-shadow: 0 24px 60px rgba(0,0,0,0.4); }
.zoom-close { position: absolute; top: -12px; right: -12px; width: 34px; height: 34px; border-radius: 50%; border: none; cursor: pointer; background: #E0502F; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 8px rgba(0,0,0,0.3); }
.zoom-imgs { display: flex; gap: 8px; width: min(84vw, calc(74vh * var(--n, 1))); height: min(74vh, 84vw); align-items: center; justify-content: center; }
.zoom-imgs img { flex: 1 1 0; min-width: 0; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px; }
.zoom-missing { width: 100%; height: 100%; border: 4px dashed #C9C2DD; border-radius: 16px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 16px; }
.zoom-missing span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 34px; color: #A79FC0; }
`;
