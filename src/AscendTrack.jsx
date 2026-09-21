import { useParams } from "react-router-dom";
import { getTrack } from "./ascendTracks";

function slideCount(lesson) {
  return 1 + lesson.prompts.length + lesson.recall.length + 1;
}

// ASCEND lessons open as a standalone popup player, matching FORGE's
// chrome-less window.open pattern (itself mirroring LessonsGrid.jsx's
// curriculum player) -- an independent window, not embedded in the Library.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(500, screenW - 40);
  const h = Math.min(690, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/ascend/${trackId}/${num}`,
    "sentencoAscendPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Teacher Guide opens as its own separate popup, triggered by its own
// explicit click -- not paired automatically with the student window.
function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/ascend/${trackId}/${num}/guide`,
    "sentencoAscendGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function AscendTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="as-shell">
        <style>{CSS}</style>
      <div className="as-block"></div>
      <div className="as-block-b"></div>
      <div className="as-echo">ASCEND</div>
        <div className="as-stage">
          <p className="as-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="as-shell">
      <style>{CSS}</style>
      <div className="as-block"></div>
      <div className="as-block-b"></div>
      <div className="as-echo">ASCEND</div>
      <div className="as-stage">
        <div className="as-hero">
          <span className="as-hero-kicker">Ascend</span>
          <h1 className="as-hero-title">{track.title}</h1>
          <div className="as-hero-tags">
            <span className="as-tag">{track.theme}</span>
            <span className="as-tag as-tag--level">{track.level}</span>
          </div>
        </div>

        <div className="as-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="as-row as-row--locked">
                  <div className="as-row-badge as-row-badge--locked">{num}</div>
                  <div className="as-row-body">
                    <h3 className="as-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            return (
              <a key={num} className="as-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="as-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="as-row-body">
                  <div className="as-row-topline">
                    <span className="as-row-tag">{lesson.tag}</span>
                    <span className="as-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="as-row-title">{lesson.title}</h3>
                  <p className="as-row-desc">{lesson.subtitle}</p>
                </div>
                <div className="as-row-actions">
                  <button type="button" className="as-btn-guide" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openGuide(track.id, num); }}>
                    Guide
                  </button>
                  <button type="button" className="as-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
                    Start →
                  </button>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.as-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.as-shell * { box-sizing: border-box; }

.as-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #F2994A transparent transparent; z-index: 0;
}
.as-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #D97D2E transparent transparent; z-index: 0;
}
.as-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #D97D2E; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.as-stage { position: relative; z-index: 1; width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.as-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.as-hero { text-align: center; margin-bottom: 40px; }
.as-hero-tags { display: flex; justify-content: center; gap: 8px; }
.as-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 12px;
}
.as-tag--level { color: #FFFFFF; background: #F2994A; }
.as-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #D97D2E; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.as-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0 0 18px;
  padding: 12px 22px;
  background: #F2994A;
}
.as-hero-title::after {
  content: "";
  position: absolute;
  top: 8px; left: 8px; right: -8px; bottom: -8px;
  background: #D97D2E;
  z-index: -1;
}

.as-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.as-row {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #FFFFFF;
  border-radius: 18px;
  padding: 14px 20px 14px 14px;
  box-shadow: 0 10px 22px rgba(16,100,107,0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease;
}
.as-row:hover { transform: translateY(-2px); }
.as-row--locked { opacity: 0.55; box-shadow: none; }

.as-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F2994A 0%, #D97D2E 100%);
  color: #FFFFFF;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.as-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.as-row-body { flex: 1; min-width: 0; }
.as-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
.as-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #D97D2E;
  background: rgba(242,153,74,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.as-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.as-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0 0 2px; color: #10646B; }
.as-row-desc { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; color: #4B8B92; margin: 0; }

.as-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.as-btn-guide, .as-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}
.as-btn-guide { background: rgba(42,168,174,0.14); color: #10646B; }
.as-btn-start { background: #F2994A; color: #FFFFFF; }

@media (max-width: 640px) {
  .as-row { flex-wrap: wrap; padding: 16px; }
  .as-row-actions { width: 100%; padding-left: 64px; }
}
`;
