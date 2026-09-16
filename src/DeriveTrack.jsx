import { useParams } from "react-router-dom";
import { getTrack } from "./deriveTracks";

// DERIVE lessons open as a standalone popup player, matching Shift's
// chrome-less window.open pattern.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(856, screenW - 40);
  const h = Math.min(555, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/derive/${trackId}/${num}`,
    "sentivoDerivePlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Teacher Guide opens as its own separate popup, triggered by its own
// explicit click -- matches Shift's pattern.
function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/derive/${trackId}/${num}/guide`,
    "sentivoDeriveGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function DeriveTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="dvt-shell">
        <style>{CSS}</style>
      <div className="dvt-block"></div>
      <div className="dvt-block-b"></div>
      <div className="dvt-echo">DERIVE</div>
        <div className="dvt-stage">
          <p className="dvt-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dvt-shell">
      <style>{CSS}</style>
      <div className="dvt-block"></div>
      <div className="dvt-block-b"></div>
      <div className="dvt-echo">DERIVE</div>
      <div className="dvt-stage">
        <div className="dvt-hero">
          <span className="dvt-hero-kicker">Derive</span>
          <h1 className="dvt-hero-title">{track.title}</h1>
          <div className="dvt-hero-tags">
            <span className="dvt-tag">Word-Family Selection</span>
            <span className="dvt-tag dvt-tag--level">{track.level}</span>
          </div>
        </div>

        <div className="dvt-lesson-grid">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="dvt-box dvt-box--locked">
                  <span className="dvt-box-num">{String(num).padStart(2, "0")}</span>
                  <span className="dvt-box-word">Coming soon</span>
                </div>
              );
            }
            const word = lesson.root.charAt(0).toUpperCase() + lesson.root.slice(1);
            const isAdvanced = num > 10;
            return (
              <a key={num} className="dvt-box" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <span className="dvt-box-top">
                  <span className="dvt-box-num">{String(num).padStart(2, "0")}</span>
                  <span className={`dvt-box-dot${isAdvanced ? " dvt-box-dot--advanced" : ""}`} title={isAdvanced ? "Advanced vocabulary" : "Common vocabulary"} />
                </span>
                <span className="dvt-box-word">{word}</span>
                <span className="dvt-box-forms">{lesson.family.length} forms</span>
                <button
                  type="button"
                  className="dvt-box-guide"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); openGuide(track.id, num); }}
                >
                  Guide
                </button>
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

.dvt-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.dvt-shell * { box-sizing: border-box; }

.dvt-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #D6478C transparent transparent; z-index: 0;
}
.dvt-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #B23370 transparent transparent; z-index: 0;
}
.dvt-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #B23370; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.dvt-stage { position: relative; z-index: 1; width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.dvt-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.dvt-hero { text-align: center; margin-bottom: 40px; }
.dvt-hero-tags { display: flex; justify-content: center; gap: 8px; }
.dvt-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 12px;
}
.dvt-tag--level { color: #10646B; background: #F6C9DF; }
.dvt-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #B23370; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.dvt-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0 0 18px;
  padding: 12px 22px;
  background: #D6478C;
}
.dvt-hero-title::after {
  content: "";
  position: absolute;
  top: 8px; left: 8px; right: -8px; bottom: -8px;
  background: #B23370;
  z-index: -1;
}

.dvt-lesson-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
.dvt-box {
  position: relative;
  background: #FFFFFF;
  border: 1.5px solid #E7EEF0;
  border-radius: 16px;
  padding: 20px 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 108px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 18px rgba(16,100,107,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.dvt-box:hover { transform: translateY(-4px); box-shadow: 0 16px 30px rgba(178,51,112,0.22); border-color: transparent; }
.dvt-box--locked { opacity: 0.5; cursor: default; box-shadow: none; }
.dvt-box--locked:hover { transform: none; box-shadow: none; border-color: #E7EEF0; }

.dvt-box-top { position: absolute; top: 10px; left: 10px; right: 10px; display: flex; align-items: center; justify-content: space-between; }
.dvt-box-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #F6D9E9;
  color: #B23370;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 9.5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dvt-box--locked .dvt-box-num { background: #E7EEF0; color: #4B8B92; }
.dvt-box-dot { width: 7px; height: 7px; border-radius: 50%; background: #2F9E58; flex-shrink: 0; }
.dvt-box-dot--advanced { background: #E8B400; }

.dvt-box-word { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 19px; color: #10646B; margin-top: 8px; }
.dvt-box--locked .dvt-box-word { font-size: 14px; font-weight: 600; color: #4B8B92; margin-top: 0; }
.dvt-box-forms { font-family: 'IBM Plex Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; color: #4B8B92; opacity: 0.75; }
.dvt-box-guide {
  margin-top: 6px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border: none;
  border-radius: 999px;
  padding: 4px 12px;
  cursor: pointer;
}
.dvt-box-guide:hover { background: rgba(42,168,174,0.24); }
`;
