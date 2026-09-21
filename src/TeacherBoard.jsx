import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

// Teacher Board: a single shareable canvas that holds several tools at
// once (Writing Board, Wheel, Translator) as draggable/resizable panels,
// so a teacher only has to share ONE window during a live class instead
// of alt-tabbing between separate apps. Writing Board and Wheel embed the
// real, already-built pages via same-origin iframes (no X-Frame-Options
// issue since it's Sentenco embedding Sentenco); Translator is a native
// panel wired to the existing /api/translate endpoint rather than trying
// to embed a third-party site, since most real translator sites (Google
// Translate included) block cross-origin framing outright.

const TRANSLATE_LANGUAGES = ["Filipino", "English", "Spanish", "Chinese", "Japanese", "Korean", "Vietnamese", "Polish", "Hebrew"];
const SOURCE_LANG_KEY = "sentenco_translate_source_lang";
const TARGET_LANG_KEY = "sentenco_translate_target_lang";

const PANEL_TYPES = {
  writing: { label: "Writing Board", icon: "✏️", hue: "coral", src: "/library/notebook/minimal", w: 460, h: 360 },
  wheel: { label: "Wheel", icon: "🎡", hue: "violet", src: "/library/wheel", w: 300, h: 340 },
  translator: { label: "Translator", icon: "🌐", hue: "orange", w: 300, h: 280 },
};

function defaultLayout() {
  return [
    { id: "p1", type: "writing", x: 24, y: 20, w: PANEL_TYPES.writing.w, h: PANEL_TYPES.writing.h, z: 1 },
    { id: "p2", type: "wheel", x: 510, y: 20, w: PANEL_TYPES.wheel.w, h: PANEL_TYPES.wheel.h, z: 2 },
    { id: "p3", type: "translator", x: 510, y: 372, w: PANEL_TYPES.translator.w, h: PANEL_TYPES.translator.h, z: 3 },
  ];
}

function TranslatorPanel() {
  const { plan } = useAuth();
  const isPro = plan === "pro_plus";
  const [sourceLang, setSourceLang] = useState(() => localStorage.getItem(SOURCE_LANG_KEY) || "English");
  const [targetLang, setTargetLang] = useState(() => localStorage.getItem(TARGET_LANG_KEY) || "Filipino");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => { localStorage.setItem(SOURCE_LANG_KEY, sourceLang); }, [sourceLang]);
  useEffect(() => { localStorage.setItem(TARGET_LANG_KEY, targetLang); }, [targetLang]);

  function swap() {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  }

  async function go() {
    const trimmed = text.trim();
    if (!trimmed) return;
    setStatus("loading");
    setError("");
    try {
      const { data } = await supabase.auth.getSession();
      const token = data?.session?.access_token;
      const headers = token
        ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        : { "Content-Type": "application/json" };
      const res = await fetch("/api/translate", {
        method: "POST",
        headers,
        body: JSON.stringify({ text: trimmed, sourceLang, targetLang }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.translation) throw new Error(json?.error || "Translation failed.");
      setResult(json.translation);
      setStatus("done");
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (!isPro) {
    return (
      <div className="tb-tr-locked">
        <p>Translator needs a Pro+ plan.</p>
      </div>
    );
  }

  return (
    <div className="tb-translator">
      <div className="tb-tr-langs">
        <select className="tb-tr-select" value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          {TRANSLATE_LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <button type="button" className="tb-tr-swap" onClick={swap} aria-label="Swap languages">⇄</button>
        <select className="tb-tr-select" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          {TRANSLATE_LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div className="tb-tr-form">
        <textarea
          className="tb-tr-input"
          placeholder="Type a word or sentence…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); go(); } }}
          rows={2}
        />
        <button type="button" className="tb-tr-go" onClick={go} disabled={!text.trim() || status === "loading"}>
          {status === "loading" ? "…" : "Go"}
        </button>
      </div>

      <div className="tb-tr-result">
        {status === "loading" && <span className="tb-tr-hint">Translating…</span>}
        {status === "error" && <span className="tb-tr-error">{error}</span>}
        {status === "done" && <span className="tb-tr-text">{result}</span>}
        {status === "idle" && <span className="tb-tr-hint">Translation appears here.</span>}
      </div>
    </div>
  );
}

function Panel({ panel, onPointerDownHeader, onPointerDownResize, onClose }) {
  const meta = PANEL_TYPES[panel.type];
  return (
    <div
      className={`tb-panel tb-panel--${meta.hue}`}
      style={{ left: panel.x, top: panel.y, width: panel.w, height: panel.h, zIndex: panel.z }}
    >
      <div className="tb-panel-head" onPointerDown={(e) => onPointerDownHeader(e, panel)}>
        <span className="tb-panel-icon">{meta.icon}</span>
        <span className="tb-panel-title">{meta.label}</span>
        <button type="button" className="tb-panel-close" onClick={() => onClose(panel.id)} aria-label="Close">×</button>
      </div>
      <div className="tb-panel-body">
        {panel.type === "translator" ? (
          <TranslatorPanel />
        ) : (
          <iframe className="tb-panel-iframe" src={meta.src} title={meta.label} />
        )}
      </div>
      <div className="tb-resize-handle" onPointerDown={(e) => onPointerDownResize(e, panel)} />
    </div>
  );
}

export default function TeacherBoard() {
  const navigate = useNavigate();
  const [panels, setPanels] = useState(defaultLayout);
  const boardRef = useRef(null);
  const zRef = useRef(10);
  const seqRef = useRef(0);
  const dragRef = useRef(null);
  const resizeRef = useRef(null);

  function bringToFront(id) {
    zRef.current += 1;
    const z = zRef.current;
    setPanels((ps) => ps.map((p) => (p.id === id ? { ...p, z } : p)));
  }

  function addPanel(type) {
    seqRef.current += 1;
    zRef.current += 1;
    const meta = PANEL_TYPES[type];
    setPanels((ps) => [...ps, {
      id: `p${Date.now()}_${seqRef.current}`,
      type,
      x: 30 + Math.random() * 100,
      y: 24 + Math.random() * 70,
      w: meta.w,
      h: meta.h,
      z: zRef.current,
    }]);
  }

  function closePanel(id) {
    setPanels((ps) => ps.filter((p) => p.id !== id));
  }

  function handleHeaderDown(e, panel) {
    bringToFront(panel.id);
    dragRef.current = { id: panel.id, startX: e.clientX, startY: e.clientY, startLeft: panel.x, startTop: panel.y };
  }

  function handleResizeDown(e, panel) {
    e.stopPropagation();
    bringToFront(panel.id);
    resizeRef.current = { id: panel.id, startX: e.clientX, startY: e.clientY, startW: panel.w, startH: panel.h };
  }

  useEffect(() => {
    function onMove(e) {
      const board = boardRef.current;
      if (dragRef.current) {
        const d = dragRef.current;
        const bw = board ? board.clientWidth : 2000;
        const bh = board ? board.clientHeight : 2000;
        setPanels((ps) => ps.map((p) => {
          if (p.id !== d.id) return p;
          const nx = Math.min(Math.max(0, d.startLeft + (e.clientX - d.startX)), Math.max(0, bw - p.w));
          const ny = Math.min(Math.max(0, d.startTop + (e.clientY - d.startY)), Math.max(0, bh - p.h));
          return { ...p, x: nx, y: ny };
        }));
      } else if (resizeRef.current) {
        const r = resizeRef.current;
        setPanels((ps) => ps.map((p) => {
          if (p.id !== r.id) return p;
          const nw = Math.max(220, r.startW + (e.clientX - r.startX));
          const nh = Math.max(160, r.startH + (e.clientY - r.startY));
          return { ...p, w: nw, h: nh };
        }));
      }
    }
    function onUp() {
      dragRef.current = null;
      resizeRef.current = null;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div className="tb-shell">
      <style>{CSS}</style>

      <div className="tb-topbar">
        <button type="button" className="tb-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentenco.png" alt="" className="tb-brand-logo" />entenco
        </button>
        <div className="tb-topbar-title">
          <h1>Teacher Board</h1>
          <p>One window for your live class — share this whole tab.</p>
        </div>
      </div>

      <div className="tb-toolbar">
        <span className="tb-toolbar-label">Add:</span>
        <button className="tb-add-btn tb-add-btn--coral" onClick={() => addPanel("writing")}>✏️ Writing Board</button>
        <button className="tb-add-btn tb-add-btn--violet" onClick={() => addPanel("wheel")}>🎡 Wheel</button>
        <button className="tb-add-btn tb-add-btn--orange" onClick={() => addPanel("translator")}>🌐 Translator</button>
        <button className="tb-reset-btn" onClick={() => setPanels(defaultLayout())}>Reset layout</button>
      </div>

      <div className="tb-board" ref={boardRef}>
        {panels.map((panel) => (
          <Panel
            key={panel.id}
            panel={panel}
            onPointerDownHeader={handleHeaderDown}
            onPointerDownResize={handleResizeDown}
            onClose={closePanel}
          />
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.tb-shell {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #FCF9F1;
  font-family: 'Quicksand', sans-serif;
  overflow: hidden;
}
.tb-shell * { box-sizing: border-box; }

.tb-topbar {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 22px;
  border-bottom: 1px solid #EEE6D2;
  flex-shrink: 0;
}
.tb-brand {
  display: flex;
  align-items: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #2B2A4A;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}
.tb-brand-logo { height: 26px; width: auto; display: block; margin-right: -4px; }
.tb-topbar-title h1 { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 17px; color: #2B2A4A; margin: 0; }
.tb-topbar-title p { font-size: 12px; color: #8B84A3; margin: 2px 0 0; }

.tb-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 10px 22px;
  border-bottom: 1px solid #EEE6D2;
  background: #FFFDF8;
  flex-shrink: 0;
}
.tb-toolbar-label { font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #9A93A8; margin-right: 4px; }
.tb-add-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  border: 1px solid;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
  background: #FFFFFF;
}
.tb-add-btn--coral { color: #B03D24; border-color: #F3C4B0; }
.tb-add-btn--coral:hover { background: #FBE4DC; }
.tb-add-btn--violet { color: #4E3AA6; border-color: #D9D2F3; }
.tb-add-btn--violet:hover { background: #EFEBFC; }
.tb-add-btn--orange { color: #C25E1E; border-color: #FCD9B8; }
.tb-add-btn--orange:hover { background: #FDEBD8; }
.tb-reset-btn {
  margin-left: auto;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #9A93A8;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.tb-board {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background:
    radial-gradient(circle, #EEE6D2 1px, transparent 1.4px) 0 0/22px 22px,
    #FAF6EA;
}

.tb-panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(43,42,74,0.16);
  border: 1px solid #EEE6D2;
  overflow: hidden;
}
.tb-panel-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 10px 9px 14px;
  cursor: grab;
  user-select: none;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #FFFFFF;
  flex-shrink: 0;
  touch-action: none;
}
.tb-panel-head:active { cursor: grabbing; }
.tb-panel--coral .tb-panel-head { background: linear-gradient(135deg, #FF8A6B, #D9542E); }
.tb-panel--violet .tb-panel-head { background: linear-gradient(135deg, #8D7AE0, #6E5DC6); }
.tb-panel--orange .tb-panel-head { background: linear-gradient(135deg, #FFAB6E, #FF8A4C); }
.tb-panel-icon { font-size: 14px; }
.tb-panel-title { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tb-panel-close {
  width: 20px; height: 20px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.22);
  color: #fff;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.tb-panel-close:hover { background: rgba(255,255,255,0.4); }
.tb-panel-body { flex: 1; min-height: 0; position: relative; }
.tb-panel-iframe { width: 100%; height: 100%; border: none; display: block; }

.tb-resize-handle {
  position: absolute;
  right: 0; bottom: 0;
  width: 18px; height: 18px;
  cursor: nwse-resize;
  background: linear-gradient(135deg, transparent 50%, #D8CDA8 50%);
  border-radius: 0 0 14px 0;
  touch-action: none;
}

.tb-translator { padding: 12px; display: flex; flex-direction: column; gap: 8px; height: 100%; }
.tb-tr-locked { padding: 20px; text-align: center; font-size: 13px; color: #8B84A3; }
.tb-tr-langs { display: flex; align-items: center; gap: 6px; }
.tb-tr-select {
  flex: 1;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #2B2A4A;
  background: #FFFDF8;
  border: 1px solid #FCD9B8;
  border-radius: 999px;
  padding: 5px 10px;
  min-width: 0;
}
.tb-tr-swap {
  flex-shrink: 0;
  width: 26px; height: 26px;
  border-radius: 50%;
  border: 1.5px solid #FCD9B8;
  background: #FFFFFF;
  color: #FF8A4C;
  font-size: 13px;
  cursor: pointer;
}
.tb-tr-form { display: flex; gap: 6px; }
.tb-tr-input {
  flex: 1;
  border: 1px solid #FCD9B8;
  border-radius: 10px;
  padding: 8px 10px;
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  color: #2B2A4A;
  background: #FFFDF8;
  resize: none;
}
.tb-tr-input:focus { outline: none; border-color: #FF8A4C; }
.tb-tr-go {
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0 14px;
  cursor: pointer;
  background: linear-gradient(135deg, #FFAB6E, #FF8A4C);
}
.tb-tr-go:disabled { opacity: 0.5; cursor: default; }
.tb-tr-result { flex: 1; min-height: 0; overflow: auto; border-radius: 10px; padding: 10px 12px; background: #FDEBD8; }
.tb-tr-hint { font-size: 12px; color: #B3803F; }
.tb-tr-error { font-size: 12px; color: #C24E3A; }
.tb-tr-text { font-size: 13.5px; font-weight: 700; color: #7A3F14; line-height: 1.5; }
`;
