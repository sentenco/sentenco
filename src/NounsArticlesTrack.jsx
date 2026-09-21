import LESSONS from "./naqTracks";

// Nouns, Articles & Quantifiers lessons open as a standalone popup player,
// matching the other Grammar Garden modules' chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/nouns-articles-quantifiers/${code}`,
    "sentencoNounsArticles",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function NounsArticlesTrack() {
  return (
    <div className="naqt-shell">
      <style>{CSS}</style>
      <div className="naqt-stage">
        <div className="naqt-hero">
          <h1 className="naqt-hero-title">Nouns, Articles &amp; Quantifiers</h1>
          <p className="naqt-hero-blurb">
            Countable vs uncountable, a/an vs the, zero article, and the quantifiers that trip students up:
            5 lessons covering the words that shape almost every sentence.
          </p>
        </div>

        <div className="naqt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="naqt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="naqt-lesson-top">
                <span className="naqt-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="naqt-lesson-name">{lesson.title}</h3>
              <span className="naqt-lesson-formula">{lesson.formula}</span>
              <span className="naqt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.naqt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF0E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.naqt-shell * { box-sizing: border-box; }

.naqt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.naqt-hero { margin-bottom: 34px; }
.naqt-hero-title {
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
.naqt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3D2416;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.naqt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.naqt-lesson-card {
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
.naqt-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.naqt-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.naqt-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.naqt-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #E1592A;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.naqt-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.naqt-lesson-formula {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #E1592A;
  line-height: 1.4;
}

.naqt-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #F6DCC7;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #E1592A;
}

@media (max-width: 900px) {
  .naqt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .naqt-lessons-grid { grid-template-columns: 1fr; }
}
`;
