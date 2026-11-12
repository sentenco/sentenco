import { useCallback, useEffect, useRef } from "react";

// Shared board drawing layer for the Just Talk Boards (A1-A2 and B1-B2):
// Ink = pen / eraser strokes on a canvas, Items = typed text, stamps and pictures you can drag.
// Each board styles .ink, .items and .item itself.

const Ms = ({ n }) => <span className="ms" aria-hidden="true">{n}</span>;

export function Ink({ strokes, tool, color, onStroke, height }) {
  const ref = useRef(null);
  const cur = useRef(null);
  const draw = useCallback(() => {
    const c = ref.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    const w = c.parentElement.clientWidth;
    if (c.width !== Math.round(w * dpr) || c.height !== Math.round(height * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(height * dpr); }
    const ctx = c.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    for (const s of [...strokes, ...(cur.current ? [cur.current] : [])]) {
      if (!s.pts.length) continue;
      ctx.save();
      ctx.globalCompositeOperation = s.erase ? "destination-out" : "source-over";
      ctx.strokeStyle = s.color; ctx.lineWidth = s.erase ? 28 : 4; ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(s.pts[0][0], s.pts[0][1]);
      for (const [x, y] of s.pts.slice(1)) ctx.lineTo(x, y);
      if (s.pts.length === 1) ctx.lineTo(s.pts[0][0] + 0.1, s.pts[0][1]);
      ctx.stroke();
      ctx.restore();
    }
  }, [strokes, height]);
  useEffect(() => { draw(); }, [draw]);
  useEffect(() => { const r = () => draw(); window.addEventListener("resize", r); return () => window.removeEventListener("resize", r); }, [draw]);
  const pt = (e) => { const r = ref.current.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const drawing = tool === "pen" || tool === "eraser";
  return (
    <canvas
      ref={ref}
      className="ink"
      style={{ height, pointerEvents: drawing ? "auto" : "none", cursor: drawing ? "crosshair" : undefined }}
      onPointerDown={(e) => { if (!drawing) return; e.currentTarget.setPointerCapture(e.pointerId); cur.current = { color, erase: tool === "eraser", pts: [pt(e)] }; draw(); }}
      onPointerMove={(e) => { if (!cur.current) return; cur.current.pts.push(pt(e)); draw(); }}
      onPointerUp={() => { if (cur.current) { onStroke(cur.current); cur.current = null; } }}
      onPointerCancel={() => { cur.current = null; draw(); }}
    />
  );
}
export function Items({ items, tool, onChange }) {
  const set = (id, patch) => onChange(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  const del = (id) => onChange(items.filter((it) => it.id !== id));
  function drag(e, it, mode) {
    if (tool !== "move") return;
    if (mode === "move" && it.type === "txt" && document.activeElement === e.currentTarget) return;
    e.stopPropagation();
    const sx = e.clientX, sy = e.clientY, ox = it.x, oy = it.y, ow = it.w;
    let moved = false;
    const mv = (ev) => {
      if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 4) moved = true;
      if (!moved) return;
      if (mode === "move") set(it.id, { x: ox + ev.clientX - sx, y: oy + ev.clientY - sy });
      else set(it.id, { w: Math.max(80, ow + ev.clientX - sx) });
    };
    const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerup", up);
  }
  const off = tool === "pen" || tool === "eraser";
  return (
    <div className="items">
      {items.map((it) => (
        <div key={it.id} className={`item ${it.type}`} style={{ left: it.x, top: it.y, width: it.type === "img" ? it.w : undefined, background: it.type === "stamp" ? it.bg : undefined, pointerEvents: off ? "none" : "auto" }} onPointerDown={(e) => drag(e, it, "move")}>
          {it.type === "txt" && <span contentEditable suppressContentEditableWarning className="txt-ed" onBlur={(e) => { const t = e.currentTarget.textContent; if (!t.trim()) del(it.id); else set(it.id, { text: t }); }} ref={(el) => { if (el && it.focus) { el.focus(); set(it.id, { focus: false }); } }}>{it.text}</span>}
          {it.type === "stamp" && it.text}
          {it.type === "img" && <img src={it.src} alt="Added" draggable={false} />}
          {it.type === "img" && <button type="button" className="grip" aria-label="Resize" onPointerDown={(e) => drag(e, it, "size")}><Ms n="open_in_full" /></button>}
          <button type="button" className="del" aria-label="Delete" onPointerDown={(e) => e.stopPropagation()} onClick={() => del(it.id)}><Ms n="close" /></button>
        </div>
      ))}
    </div>
  );
}
