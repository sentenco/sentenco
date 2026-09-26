import { useState } from "react";

// Cover-slide UNIT medal, LESSON ribbon, and track eyebrow.
// When drag handlers are supplied, all three can be dragged directly with
// the mouse (editing tool). Without them, renders as static positioned badges.

export function medalDefault(overrides) {
  return { left: 34, top: 56, size: 104, rot: -6, ...overrides };
}
export function ribbonDefault(overrides) {
  return { left: 250, top: 20, ...overrides };
}
export function eyebrowDefault(overrides) {
  return { left: 250, top: 132, ...overrides };
}

export function useBadgePositions(storageKey, defaults) {
  const [badges, setBadges] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem(storageKey));
      return v
        ? { medal: { ...defaults.medal, ...v.medal }, ribbon: { ...defaults.ribbon, ...v.ribbon }, eyebrow: { ...defaults.eyebrow, ...v.eyebrow } }
        : defaults;
    } catch (e) {
      return defaults;
    }
  });

  function patchBadge(key, patch) {
    setBadges((b) => {
      const next = { ...b, [key]: { ...b[key], ...patch } };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch (e) { /* not saved */ }
      return next;
    });
  }

  return {
    badges,
    dragMedal: (patch) => patchBadge("medal", patch),
    dragRibbon: (patch) => patchBadge("ribbon", patch),
    dragEyebrow: (patch) => patchBadge("eyebrow", patch),
  };
}

function useDrag(pos, onDrag) {
  if (!onDrag) return {};
  function down(e) {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.dataset.sx = e.clientX;
    e.currentTarget.dataset.sy = e.clientY;
    e.currentTarget.dataset.ox = pos.left;
    e.currentTarget.dataset.oy = pos.top;
  }
  function move(e) {
    if (e.currentTarget.dataset.sx === undefined || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const d = e.currentTarget.dataset;
    onDrag({ left: Math.round(+d.ox + e.clientX - +d.sx), top: Math.round(+d.oy + e.clientY - +d.sy) });
  }
  return { onPointerDown: down, onPointerMove: move };
}

const DEFAULT_BADGES = { medal: medalDefault(), ribbon: ribbonDefault(), eyebrow: eyebrowDefault() };

export function CoverBadges({ stage, eyebrowText, badges = DEFAULT_BADGES, onDragMedal, onDragRibbon, onDragEyebrow }) {
  const m = String(stage || "").match(/Unit (\d+)(?: · | )(?:Lesson (\d+)|Unit Review|Test)/);
  if (!m) return null;
  const unit = m[1];
  const lesson = m[2] || "R";
  const medal = badges.medal;
  const ribbon = badges.ribbon;
  const eyebrow = badges.eyebrow;
  const k = medal.size / 104;
  const draggable = !!(onDragMedal || onDragRibbon || onDragEyebrow);
  const ribbonHandlers = useDrag(ribbon, onDragRibbon);
  const medalHandlers = useDrag(medal, onDragMedal);
  const eyebrowHandlers = useDrag(eyebrow, onDragEyebrow);

  return (
    <>
      {eyebrowText != null && (
        <div
          className={`title-eyebrow ${draggable ? "is-draggable" : ""}`}
          style={{ position: "absolute", left: eyebrow.left, top: eyebrow.top, margin: 0, zIndex: 4 }}
          {...eyebrowHandlers}
        >
          {eyebrowText}
        </div>
      )}
      <div
        className={`cover-ribbon ${draggable ? "is-draggable" : ""}`}
        style={{ left: ribbon.left, top: ribbon.top }}
        {...ribbonHandlers}
      >
        <span className="cr-label">LESSON</span><span className="cr-num">{lesson}</span>
      </div>
      <div
        className={`unit-medal ${String(unit).length > 1 ? "is-long" : ""} ${draggable ? "is-draggable" : ""}`}
        style={{ left: medal.left, top: medal.top, width: medal.size, height: medal.size, transform: `rotate(${medal.rot}deg)`, "--k": k }}
        {...medalHandlers}
      >
        <span className="um-label">UNIT</span><span className="um-num">{unit}</span>
      </div>
      {draggable && (
        <div className="badge-panel">
          <div className="bp-title">Drag the badges into place</div>
          <div className="bp-values">eyebrow {eyebrow.left}, {eyebrow.top} · ribbon {ribbon.left}, {ribbon.top} · medal {medal.left}, {medal.top}</div>
        </div>
      )}
    </>
  );
}

export const badgeAdjustStyles = `
.unit-medal.is-draggable, .cover-ribbon.is-draggable, .title-eyebrow.is-draggable { cursor: grab; touch-action: none; user-select: none; outline: 2px dashed rgba(255,255,255,0.7); outline-offset: 4px; }
.unit-medal.is-draggable:active, .cover-ribbon.is-draggable:active, .title-eyebrow.is-draggable:active { cursor: grabbing; }
.badge-panel { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); background: rgba(20,28,54,0.92); color: #fff; padding: 8px 16px; border-radius: 12px; text-align: center; z-index: 10; font-family: 'Baloo 2', sans-serif; }
.badge-panel .bp-title { font-weight: 800; font-size: 12px; }
.badge-panel .bp-values { font-size: 11px; opacity: 0.85; margin-top: 2px; font-variant-numeric: tabular-nums; }
`;
