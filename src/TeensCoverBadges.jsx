import { useEffect, useState } from "react";

// Cover-slide UNIT medal + LESSON ribbon, both freely draggable.
// Press "M" on a title slide (or open with ?adjust=1) to enter adjust mode,
// then drag either badge. Position is saved per track in localStorage.

export function medalDefault(overrides) {
  return { left: 34, top: 56, size: 104, rot: -6, ...overrides };
}
export function ribbonDefault(overrides) {
  return { left: 250, top: 20, ...overrides };
}

export function useBadgePositions(storageKey, defaults) {
  const [badges, setBadges] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem(storageKey));
      return v ? { medal: { ...defaults.medal, ...v.medal }, ribbon: { ...defaults.ribbon, ...v.ribbon } } : defaults;
    } catch (e) {
      return defaults;
    }
  });
  const [adjust, setAdjust] = useState(() => new URLSearchParams(window.location.search).get("adjust") === "1");
  const [copied, setCopied] = useState(false);

  function patchBadge(key, patch) {
    setBadges((b) => {
      const next = { ...b, [key]: { ...b[key], ...patch } };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch (e) { /* not saved */ }
      return next;
    });
  }
  function reset() {
    setBadges(defaults);
    try { localStorage.removeItem(storageKey); } catch (e) { /* nothing saved */ }
  }
  function copy() {
    const text = `medal: left ${badges.medal.left}, top ${badges.medal.top}, size ${badges.medal.size}, tilt ${badges.medal.rot}\nribbon: left ${badges.ribbon.left}, top ${badges.ribbon.top}`;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  useEffect(() => {
    function onKey(e) {
      const onCover = document.querySelector(".slide .unit-medal");
      if (!onCover) return;
      if (e.key === "m" || e.key === "M") { setAdjust((a) => !a); return; }
      if (e.key === "Escape") setAdjust(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return {
    badges,
    adjust,
    setAdjust,
    dragMedal: (patch) => patchBadge("medal", patch),
    dragRibbon: (patch) => patchBadge("ribbon", patch),
    reset,
    copy,
    copied,
  };
}

function useDrag(pos, adjust, onDrag) {
  function down(e) {
    if (!adjust) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.dataset.sx = e.clientX;
    e.currentTarget.dataset.sy = e.clientY;
    e.currentTarget.dataset.ox = pos.left;
    e.currentTarget.dataset.oy = pos.top;
  }
  function move(e) {
    if (!adjust || e.currentTarget.dataset.sx === undefined || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const d = e.currentTarget.dataset;
    onDrag({ left: Math.round(+d.ox + e.clientX - +d.sx), top: Math.round(+d.oy + e.clientY - +d.sy) });
  }
  return { onPointerDown: down, onPointerMove: move };
}

export function CoverBadges({ stage, badges, adjust, onDragMedal, onDragRibbon }) {
  const m = String(stage || "").match(/Unit (\d+)(?: · | )(?:Lesson (\d+)|Unit Review|Test)/);
  if (!m) return null;
  const unit = m[1];
  const lesson = m[2] || "R";
  const medal = badges.medal;
  const ribbon = badges.ribbon;
  const k = medal.size / 104;
  const ribbonHandlers = useDrag(ribbon, adjust, onDragRibbon);
  const medalHandlers = useDrag(medal, adjust, onDragMedal);

  return (
    <>
      <div
        className={`cover-ribbon ${adjust ? "is-adjusting" : ""}`}
        style={{ left: ribbon.left, top: ribbon.top }}
        {...ribbonHandlers}
      >
        <span className="cr-label">LESSON</span><span className="cr-num">{lesson}</span>
      </div>
      <div
        className={`unit-medal ${String(unit).length > 1 ? "is-long" : ""} ${adjust ? "is-adjusting" : ""}`}
        style={{ left: medal.left, top: medal.top, width: medal.size, height: medal.size, transform: `rotate(${medal.rot}deg)`, "--k": k }}
        {...medalHandlers}
      >
        <span className="um-label">UNIT</span><span className="um-num">{unit}</span>
      </div>
      {adjust && (
        <div className="badge-panel">
          <div className="bp-title">Drag the badges into place</div>
          <div className="bp-values">medal {medal.left}, {medal.top} · ribbon {ribbon.left}, {ribbon.top}</div>
          <div className="bp-hint">Drag either badge · M toggles · Esc closes</div>
        </div>
      )}
    </>
  );
}

export const badgeAdjustStyles = `
.unit-medal.is-adjusting, .cover-ribbon.is-adjusting { cursor: grab; outline: 3px dashed #fff; outline-offset: 4px; touch-action: none; user-select: none; }
.unit-medal.is-adjusting:active, .cover-ribbon.is-adjusting:active { cursor: grabbing; }
.badge-panel { position: absolute; left: 50%; bottom: 18px; transform: translateX(-50%); background: rgba(20,28,54,0.92); color: #fff; padding: 10px 18px; border-radius: 12px; text-align: center; z-index: 10; font-family: 'Baloo 2', sans-serif; }
.badge-panel .bp-title { font-weight: 800; font-size: 13px; }
.badge-panel .bp-values { font-size: 12px; opacity: 0.85; margin-top: 2px; font-variant-numeric: tabular-nums; }
.badge-panel .bp-hint { font-size: 11px; opacity: 0.65; margin-top: 4px; }
`;
