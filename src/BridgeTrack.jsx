import { useParams } from "react-router-dom";
import { getTrack } from "./bridgeTracks";

function slideCount(lesson) {
  // Cover + Wrap + Capstone, plus 2 questions per phrase
  const questionSlides = lesson.phrases.reduce((sum, p) => sum + p.questions.length, 0);
  return questionSlides + 3;
}

// BRIDGE lessons open as a standalone popup player, matching the site's
// established chrome-less window.open pattern. Sized to fit the portrait
// deck (see feedback_popup_size_fits_content) rather than an oversized
// default window.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(536, screenW - 40);
  const h = Math.min(619, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/bridge/${trackId}/${num}`,
    "sentencoBridgePlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(720, screenW - 40);
  const h = Math.min(780, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/bridge/${trackId}/${num}/guide`,
    "sentencoBridgeGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function BridgeTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="brt-shell">
        <style>{CSS}</style>
        <div className="brt-stage">
          <p className="brt-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="brt-shell">
      <style>{CSS}</style>
      <div className="brt-stage">
        <div className="brt-hero">
          <span className="brt-tag">Filler Phrase Drill</span>
          <h1 className="brt-hero-title">{track.title}</h1>
        </div>

        <div className="brt-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="brt-row brt-row--locked">
                  <div className="brt-row-badge brt-row-badge--locked">{num}</div>
                  <div className="brt-row-body">
                    <h3 className="brt-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            return (
              <a key={num} className="brt-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="brt-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="brt-row-body">
                  <div className="brt-row-topline">
                    <span className="brt-row-tag">3 phrases</span>
                    <span className="brt-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="brt-row-title">{lesson.situation}</h3>
                </div>
                <div className="brt-row-actions">
                  <button type="button" className="brt-btn-guide" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openGuide(track.id, num); }}>
                    Guide
                  </button>
                  <button type="button" className="brt-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.brt-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(79,174,122,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(79,174,122,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.brt-shell * { box-sizing: border-box; }

.brt-stage { width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.brt-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.brt-hero { text-align: center; margin-bottom: 40px; }
.brt-tag {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #2C7A46;
  background: rgba(79,174,122,0.14);
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 16px;
}
.brt-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0;
  text-shadow:
    1.2px 1.2px 0 rgba(79,174,122,0.32),
    2.4px 2.4px 0 rgba(79,174,122,0.32),
    3.6px 3.6px 0 rgba(79,174,122,0.32),
    4px 8px 18px rgba(16,100,107,0.2);
}

.brt-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.brt-row {
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
.brt-row:hover { transform: translateY(-2px); }
.brt-row--locked { opacity: 0.55; box-shadow: none; }

.brt-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4FAE7A 0%, #368F5F 100%);
  color: #FFFFFF;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brt-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.brt-row-body { flex: 1; min-width: 0; }
.brt-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap; }
.brt-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #2C7A46;
  background: rgba(79,174,122,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.brt-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.brt-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0; color: #10646B; }

.brt-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.brt-btn-guide, .brt-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}
.brt-btn-guide { background: rgba(42,168,174,0.14); color: #10646B; }
.brt-btn-start { background: #4FAE7A; color: #FFFFFF; }

@media (max-width: 640px) {
  .brt-row { flex-wrap: wrap; padding: 16px; }
  .brt-row-actions { width: 100%; padding-left: 64px; }
}
`;
