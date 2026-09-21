import LESSONS from "./rcTracks";

// Relative Clauses lessons open as a standalone popup player, matching the
// other Grammar Garden modules' chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/relative-clauses/${code}`,
    "sentencoRelativeClauses",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function RelativeClausesTrack() {
  return (
    <div className="rct-shell">
      <style>{CSS}</style>
      <div className="rct-stage">
        <div className="rct-hero">
          <h1 className="rct-hero-title">Relative Clauses</h1>
          <p className="rct-hero-blurb">
            Who, which, that, whose, where, when, the comma rule, and shrinking a clause down to a phrase: 4
            lessons, one rule per slide.
          </p>
        </div>

        <div className="rct-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="rct-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="rct-lesson-top">
                <span className="rct-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="rct-lesson-name">{lesson.title}</h3>
              <span className="rct-lesson-formula">{lesson.formula}</span>
              <span className="rct-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.rct-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EFF3F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.rct-shell * { box-sizing: border-box; }

.rct-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.rct-hero { margin-bottom: 34px; }
.rct-hero-title {
  text-align: center;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 48px;
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1.05;
  text-shadow: 3px 3px 0 #FFC300;
}
.rct-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #22303A;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.rct-lessons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.rct-lesson-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #FFFFFF;
  border: 3px solid #1A1A1A;
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 6px 6px 0 #1A1A1A;
  cursor: pointer;
  text-align: left;
  font: inherit;
  transition: transform 0.16s cubic-bezier(.34,1.56,.64,1), box-shadow 0.16s ease;
}
.rct-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.rct-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.rct-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.rct-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #55707F;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.rct-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.rct-lesson-formula {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #55707F;
  line-height: 1.4;
}

.rct-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #DCE5E8;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #55707F;
}

@media (max-width: 900px) {
  .rct-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .rct-lessons-grid { grid-template-columns: 1fr; }
}
`;
