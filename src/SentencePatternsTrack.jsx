import LESSONS from "./spTracks";

// Sentence Patterns lessons open as a standalone popup player, matching the
// Parts of Speech / Verb Tenses / FORGE / ASCEND chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/sentence-patterns/${code}`,
    "sentencoSentencePatterns",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function SentencePatternsTrack() {
  return (
    <div className="spt-shell">
      <style>{CSS}</style>
      <div className="spt-stage">
        <div className="spt-hero">
          <h1 className="spt-hero-title">Sentence Patterns</h1>
          <p className="spt-hero-blurb">
            The 7 core English sentence patterns (SV, SVO, SVC, SVA, SVOA, SVOO, SVOC) across 6 lessons. Each one
            teaches the pattern, then walks through guided and production practice.
          </p>
        </div>

        <div className="spt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="spt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="spt-lesson-top">
                <span className="spt-lesson-num">Lesson {lesson.number}</span>
                <span className="spt-lesson-pattern">{lesson.patternLabel}</span>
              </div>
              <h3 className="spt-lesson-name">{lesson.title}</h3>
              <span className="spt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.spt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FFF6E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.spt-shell * { box-sizing: border-box; }

.spt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.spt-hero { margin-bottom: 34px; }
.spt-hero-title {
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
.spt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A3226;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.spt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.spt-lesson-card {
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
.spt-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.spt-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.spt-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.spt-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #8B5E34;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}
.spt-lesson-pattern {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.3px;
  color: #8B5E34;
}

.spt-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.spt-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #EFE7D3;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #8B5E34;
}

@media (max-width: 900px) {
  .spt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .spt-lessons-grid { grid-template-columns: 1fr; }
}
`;
