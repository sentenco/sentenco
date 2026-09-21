import { useParams } from "react-router-dom";
import { getTrack } from "./shiftTracks";

// SHIFT lessons open as a standalone popup player, matching the FORGE/ASCEND
// chrome-less window.open pattern -- an independent window, not embedded in
// the Library's tab/page flow. Sized to fit the player's own card (a narrow,
// tall panel, not the old wide fixed-aspect deck) rather than a fixed
// landscape size -- the card scrolls internally for longer chain history.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(720, screenW - 40);
  const h = Math.min(840, screenH - 60);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/shift/${trackId}/${num}`,
    "sentencoShiftPlayer",
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
    `/library/shift/${trackId}/${num}/guide`,
    "sentencoShiftGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function ShiftTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="sht-shell">
        <style>{CSS}</style>
        <div className="sht-stage">
          <p className="sht-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sht-shell">
      <style>{CSS}</style>
      <div className="sht-block"></div>
      <div className="sht-block-b"></div>
      <div className="sht-echo">SHIFT</div>
      <div className="sht-stage">
        <div className="sht-hero">
          <span className="sht-hero-kicker">Shift</span>
          <h1 className="sht-hero-title">{track.title}</h1>
          <div className="sht-hero-tags">
            <span className="sht-tag">{track.gapFocus}</span>
            <span className="sht-tag sht-tag--level">{track.level}</span>
          </div>
        </div>

        <div className="sht-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="sht-row sht-row--locked">
                  <div className="sht-row-badge sht-row-badge--locked">{num}</div>
                  <div className="sht-row-body">
                    <h3 className="sht-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            return (
              <a key={num} className="sht-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="sht-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="sht-row-body">
                  <div className="sht-row-topline">
                    <span className="sht-row-tag">{lesson.tag}</span>
                    <span className="sht-row-meta">{lesson.tenses}</span>
                  </div>
                  <h3 className="sht-row-title">{lesson.title}</h3>
                  <p className="sht-row-desc">{lesson.scene.context}</p>
                </div>
                <div className="sht-row-actions">
                  <button type="button" className="sht-btn-guide" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openGuide(track.id, num); }}>
                    Guide
                  </button>
                  <button type="button" className="sht-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
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

.sht-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.sht-shell * { box-sizing: border-box; }

.sht-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #FFDE70 transparent transparent; z-index: 0;
}
.sht-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #FFCF3D transparent transparent; z-index: 0;
}
.sht-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #FFCF3D; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.sht-stage { position: relative; z-index: 1; width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.sht-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.sht-hero { text-align: center; margin-bottom: 40px; }
.sht-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #FFCF3D; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.sht-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0 0 18px;
  padding: 12px 22px;
  background: #FFDE70;
}
.sht-hero-title::after {
  content: "";
  position: absolute;
  top: 8px; left: 8px; right: -8px; bottom: -8px;
  background: #FFCF3D;
  z-index: -1;
}
.sht-hero-tags { display: flex; justify-content: center; gap: 8px; }
.sht-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 12px;
}
.sht-tag--level { color: #10646B; background: #FFDE70; }

.sht-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.sht-row {
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
.sht-row:hover { transform: translateY(-2px); }
.sht-row--locked { opacity: 0.55; box-shadow: none; }

.sht-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFDE70 0%, #FFCF3D 100%);
  color: #10646B;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sht-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.sht-row-body { flex: 1; min-width: 0; }
.sht-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
.sht-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #10646B;
  background: rgba(255,207,61,0.22);
  border-radius: 999px;
  padding: 2px 9px;
}
.sht-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.sht-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0 0 2px; color: #10646B; }
.sht-row-desc { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; color: #4B8B92; margin: 0; }

.sht-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.sht-btn-guide, .sht-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}
.sht-btn-guide { background: rgba(42,168,174,0.14); color: #10646B; }
.sht-btn-start { background: #FFCF3D; color: #10646B; }

@media (max-width: 640px) {
  .sht-row { flex-wrap: wrap; padding: 16px; }
  .sht-row-actions { width: 100%; padding-left: 64px; }
}
`;
