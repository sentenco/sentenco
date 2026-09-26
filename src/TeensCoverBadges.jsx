import { useState } from "react";

// Cover-slide UNIT medal + LESSON ribbon. Both are always draggable directly
// with the mouse, no mode switch needed. Position is saved per track in
// localStorage.

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
  };
}

function useDrag(pos, onDrag) {
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

export function CoverBadges({ stage, badges, onDragMedal, onDragRibbon }) {
  const m = String(stage || "").match(/Unit (\d+)(?: · | )(?:Lesson (\d+)|Unit Review|Test)/);
  if (!m) return null;
  const unit = m[1];
  const lesson = m[2] || "R";
  const medal = badges.medal;
  const ribbon = badges.ribbon;
  const k = medal.size / 104;
  const ribbonHandlers = useDrag(ribbon, onDragRibbon);
  const medalHandlers = useDrag(medal, onDragMedal);

  return (
    <>
      <div
        className="cover-ribbon is-draggable"
        style={{ left: ribbon.left, top: ribbon.top }}
        {...ribbonHandlers}
      >
        <span className="cr-label">LESSON</span><span className="cr-num">{lesson}</span>
      </div>
      <div
        className={`unit-medal is-draggable ${String(unit).length > 1 ? "is-long" : ""}`}
        style={{ left: medal.left, top: medal.top, width: medal.size, height: medal.size, transform: `rotate(${medal.rot}deg)`, "--k": k }}
        {...medalHandlers}
      >
        <span className="um-label">UNIT</span><span className="um-num">{unit}</span>
      </div>
    </>
  );
}

export const badgeAdjustStyles = `
.unit-medal.is-draggable, .cover-ribbon.is-draggable { cursor: grab; touch-action: none; user-select: none; }
.unit-medal.is-draggable:active, .cover-ribbon.is-draggable:active { cursor: grabbing; }
`;
