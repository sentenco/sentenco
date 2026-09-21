import { useNavigate } from "react-router-dom";
import DESIGNS, { NOTEBOOK_STAGE_MARGIN } from "./notebookDesigns";

// A per-card accent color for each design -- separate from the design's
// own `frame`/`ink` (which are tuned for the writable page itself, not a
// UI chip) so the selection grid can hint at each notebook's real palette.
const CARD_ACCENT = {
  kids: "#FF6F91",
  minimal: "#8B95A1",
  elegant: "#C9A227",
  "soccer-stadium": "#2E9E63",
  "soccer-coach": "#D4AF37",
};

// Opens the writable notebook as a standalone popup -- matching the
// FORGE/ASCEND/Article Player chrome-less window.open pattern. The window
// is sized to the chosen design's own aspect ratio (plus the same stage
// margin NotebookPage pads the paper with) so it hugs the page instead of
// leaving a boxy leftover window around it.
function openNotebook(design) {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const chromeH = 34; // fudge for the OS/browser title bar on a toolbar=no popup

  const maxPaperH = Math.min(920, screenH - chromeH - NOTEBOOK_STAGE_MARGIN * 2 - 20);
  const maxPaperW = screenW - NOTEBOOK_STAGE_MARGIN * 2 - 40;

  let paperH = maxPaperH;
  let paperW = paperH * design.aspect;
  if (paperW > maxPaperW) {
    paperW = maxPaperW;
    paperH = paperW / design.aspect;
  }

  const w = Math.round(paperW + NOTEBOOK_STAGE_MARGIN * 2);
  const h = Math.round(paperH + NOTEBOOK_STAGE_MARGIN * 2 + chromeH);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/notebook/${design.key}`,
    "sentencoNotebook",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function PopOutIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 3H3.3A1.3 1.3 0 0 0 2 4.3v8.4A1.3 1.3 0 0 0 3.3 14h8.4A1.3 1.3 0 0 0 13 12.7V9.5" />
      <path d="M9.5 2H14v4.5" />
      <path d="M14 2 7.3 8.7" />
    </svg>
  );
}

export default function NotebookHub() {
  const navigate = useNavigate();

  return (
    <div className="nbh-shell">
      <style>{CSS}</style>

      <div className="nbh-stage">
        <div className="nbh-topbar">
          <button type="button" className="nbh-brand" onClick={() => navigate("/library")} title="Back to Library">
            <img src="/logo-sentenco.png" alt="" className="nbh-brand-logo" />entenco
          </button>
          <span className="nbh-topbar-title">Digital Notebook</span>
        </div>

        <div className="nbh-header">
          <div className="nbh-header-blob" />
          <div className="nbh-hero">
            <span className="nbh-eyebrow">Sentenco · Homeroom</span>
            <h1 className="nbh-hero-title">Pick a page</h1>
            <p className="nbh-hero-blurb">
              Choose a design, then write live on it in its own window while you teach. Nothing is saved — it clears when the window closes.
            </p>
          </div>
        </div>

        <div className="nbh-grid">
          {DESIGNS.map((d) => (
            <button
              key={d.key}
              type="button"
              className="nbh-card"
              style={{ "--accent": CARD_ACCENT[d.key] || "#1B2A4A" }}
              onClick={() => openNotebook(d)}
            >
              <div className="nbh-card-thumb">
                <img src={d.image} alt={`${d.label} notebook design`} />
              </div>
              <div className="nbh-card-body">
                <h3 className="nbh-card-title">{d.label}</h3>
                <p className="nbh-card-blurb">{d.blurb}</p>
                <span className="nbh-card-cta">
                  Open in new window
                  <PopOutIcon />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.nbh-shell { min-height: 100vh; background: #FBF4F1; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.nbh-shell * { box-sizing: border-box; }

.nbh-stage { max-width: 1040px; margin: 0 auto; padding: 24px 24px 40px; }

.nbh-topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.nbh-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-family: 'Inter', sans-serif; font-weight: 800; font-size: 19px;
  color: #1B2A4A; text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
}
.nbh-brand-logo { height: 28px; width: auto; display: block; margin-right: -4px; }
.nbh-topbar-title { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; letter-spacing: 0.04em; text-transform: uppercase; color: #5A6B92; }

.nbh-header {
  background: #1B2A4A; border-radius: 22px; padding: 32px 26px 36px; margin-bottom: 28px;
  position: relative; overflow: hidden; box-shadow: 0 18px 36px rgba(27,42,74,0.2);
}
.nbh-header-blob {
  position: absolute; width: 240px; height: 240px; border-radius: 50%;
  background: #FF6B4A; opacity: 0.16; top: -100px; right: -80px; pointer-events: none;
}

.nbh-hero { text-align: center; position: relative; }
.nbh-eyebrow {
  display: inline-block; font-weight: 700; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #FF6B4A; background: rgba(255,107,74,0.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px;
}
.nbh-hero-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(30px, 3.6vw, 40px); margin: 0 0 10px; color: #FFFFFF; letter-spacing: -0.01em; }
.nbh-hero-blurb { font-size: 15px; color: #B9C3DC; margin: 0 auto; max-width: 520px; line-height: 1.55; }

.nbh-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.nbh-card {
  position: relative; display: flex; flex-direction: column; text-align: left;
  background: #FFFFFF; border: none; border-top: 4px solid var(--accent); border-radius: 16px;
  overflow: hidden; cursor: pointer; padding: 0;
  box-shadow: 0 8px 18px rgba(27,42,74,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.nbh-card:hover { transform: translateY(-3px); box-shadow: 0 14px 26px rgba(27,42,74,0.14); }

.nbh-card-thumb { height: 176px; background: #FBF4F1; overflow: hidden; }
.nbh-card-thumb img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }

.nbh-card-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 6px; }
.nbh-card-title { font-family: 'Fraunces', serif; font-size: 17px; font-weight: 600; margin: 0; color: #1B2A4A; }
.nbh-card-blurb { font-size: 12.5px; line-height: 1.5; color: #5A6B92; margin: 0; }
.nbh-card-cta {
  display: flex; align-items: center; gap: 5px; margin-top: 8px;
  font-size: 11.5px; font-weight: 700; letter-spacing: 0.03em; color: var(--accent);
}
.nbh-card-cta svg { width: 12px; height: 12px; flex-shrink: 0; }

@media (max-width: 900px) {
  .nbh-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .nbh-grid { grid-template-columns: 1fr; }
  .nbh-stage { padding: 16px 16px 28px; }
  .nbh-topbar-title { display: none; }
}
`;
