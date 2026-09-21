import LESSONS from "./csTracks";

// Comparatives & Superlatives lessons open as a standalone popup player,
// matching the other Grammar Garden modules' chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/comparatives-superlatives/${code}`,
    "sentencoComparatives",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function ComparativesTrack() {
  return (
    <div className="cst-shell">
      <style>{CSS}</style>
      <div className="cst-stage">
        <div className="cst-hero">
          <h1 className="cst-hero-title">Comparatives &amp; Superlatives</h1>
          <p className="cst-hero-blurb">
            Short adjectives, long adjectives, irregular forms, equal comparison, degree modifiers, and double
            comparatives: 4 lessons, one rule per slide, no cramming.
          </p>
        </div>

        <div className="cst-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="cst-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="cst-lesson-top">
                <span className="cst-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="cst-lesson-name">{lesson.title}</h3>
              <span className="cst-lesson-formula">{lesson.formula}</span>
              <span className="cst-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.cst-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBF0F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cst-shell * { box-sizing: border-box; }

.cst-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.cst-hero { margin-bottom: 34px; }
.cst-hero-title {
  text-align: center;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 44px;
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1.05;
  text-shadow: 3px 3px 0 #FFC300;
}
.cst-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1E33;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.cst-lessons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.cst-lesson-card {
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
.cst-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.cst-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.cst-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.cst-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #A6238C;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.cst-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.cst-lesson-formula {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #A6238C;
  line-height: 1.4;
}

.cst-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #F3D6EC;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #A6238C;
}

@media (max-width: 900px) {
  .cst-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .cst-lessons-grid { grid-template-columns: 1fr; }
}
`;
