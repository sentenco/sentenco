import LESSONS from "./ppTracks";

// Pronouns & Possessives lessons open as a standalone popup player, matching
// the other Grammar Garden modules' chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/pronouns-possessives/${code}`,
    "sentencoPronouns",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function PronounsTrack() {
  return (
    <div className="ppt-shell">
      <style>{CSS}</style>
      <div className="ppt-stage">
        <div className="ppt-hero">
          <h1 className="ppt-hero-title">Pronouns &amp; Possessives</h1>
          <p className="ppt-hero-blurb">
            I vs me, my vs mine, myself vs himself, this vs that, and the apostrophe that shows ownership: 5
            lessons covering the small words that carry a lot of weight.
          </p>
        </div>

        <div className="ppt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="ppt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="ppt-lesson-top">
                <span className="ppt-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="ppt-lesson-name">{lesson.title}</h3>
              <span className="ppt-lesson-formula">{lesson.formula}</span>
              <span className="ppt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.ppt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F5F9E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ppt-shell * { box-sizing: border-box; }

.ppt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.ppt-hero { margin-bottom: 34px; }
.ppt-hero-title {
  text-align: center;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1.05;
  text-shadow: 3px 3px 0 #FFC300;
}
.ppt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2A3517;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.ppt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.ppt-lesson-card {
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
.ppt-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.ppt-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.ppt-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.ppt-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #6B9E1E;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.ppt-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.ppt-lesson-formula {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #6B9E1E;
  line-height: 1.4;
}

.ppt-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #E4EFCB;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #6B9E1E;
}

@media (max-width: 900px) {
  .ppt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .ppt-lessons-grid { grid-template-columns: 1fr; }
}
`;
