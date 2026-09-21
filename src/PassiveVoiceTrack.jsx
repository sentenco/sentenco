import LESSONS from "./pvTracks";

// Passive Voice lessons open as a standalone popup player, matching the
// Parts of Speech / Verb Tenses / Sentence Patterns / Modals / Conditionals
// chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/passive-voice/${code}`,
    "sentencoPassiveVoice",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function PassiveVoiceTrack() {
  return (
    <div className="pvt-shell">
      <style>{CSS}</style>
      <div className="pvt-stage">
        <div className="pvt-hero">
          <h1 className="pvt-hero-title">Passive Voice</h1>
          <p className="pvt-hero-blurb">
            From basics to the by-agent: 6 lessons covering present, past, perfect, future, and modal passive
            forms, plus when passive is actually the right choice.
          </p>
        </div>

        <div className="pvt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="pvt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="pvt-lesson-top">
                <span className="pvt-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="pvt-lesson-name">{lesson.title}</h3>
              <span className="pvt-lesson-formula">{lesson.formula}</span>
              <span className="pvt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.pvt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F4F0FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.pvt-shell * { box-sizing: border-box; }

.pvt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.pvt-hero { margin-bottom: 34px; }
.pvt-hero-title {
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
.pvt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2E2542;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.pvt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.pvt-lesson-card {
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
.pvt-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.pvt-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.pvt-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.pvt-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #6247AA;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.pvt-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.pvt-lesson-formula {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #6247AA;
  line-height: 1.4;
}

.pvt-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #E1D8F5;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #6247AA;
}

@media (max-width: 900px) {
  .pvt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pvt-lessons-grid { grid-template-columns: 1fr; }
}
`;
