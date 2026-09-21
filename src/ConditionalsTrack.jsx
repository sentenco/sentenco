import LESSONS from "./cndTracks";

// Conditionals lessons open as a standalone popup player, matching the
// Parts of Speech / Verb Tenses / Sentence Patterns / Modals chrome-less
// window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/conditionals/${code}`,
    "sentencoConditionals",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function ConditionalsTrack() {
  return (
    <div className="cnt-shell">
      <style>{CSS}</style>
      <div className="cnt-stage">
        <div className="cnt-hero">
          <h1 className="cnt-hero-title">Conditionals</h1>
          <p className="cnt-hero-blurb">
            The 5 conditional types (Zero, First, Second, Third, and Mixed) across 5 lessons. Each one teaches
            the formula, then walks through guided and production practice.
          </p>
        </div>

        <div className="cnt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="cnt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="cnt-lesson-top">
                <span className="cnt-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="cnt-lesson-name">{lesson.title}</h3>
              <span className="cnt-lesson-formula">{lesson.formula}</span>
              <span className="cnt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.cnt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF1F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.cnt-shell * { box-sizing: border-box; }

.cnt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.cnt-hero { margin-bottom: 34px; }
.cnt-hero-title {
  text-align: center;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1;
  text-shadow: 3px 3px 0 #FFC300;
}
.cnt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A2530;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.cnt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.cnt-lesson-card {
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
.cnt-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.cnt-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.cnt-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.cnt-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #C2255C;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.cnt-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.cnt-lesson-formula {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #C2255C;
  line-height: 1.4;
}

.cnt-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #F5D3E0;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #C2255C;
}

@media (max-width: 900px) {
  .cnt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .cnt-lessons-grid { grid-template-columns: 1fr; }
}
`;
