import LESSONS from "./mdTracks";

// Modals lessons open as a standalone popup player, matching the Parts of
// Speech / Verb Tenses / Sentence Patterns chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/modals/${code}`,
    "sentencoModals",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function ModalsTrack() {
  return (
    <div className="mdt-shell">
      <style>{CSS}</style>
      <div className="mdt-stage">
        <div className="mdt-hero">
          <h1 className="mdt-hero-title">Modals</h1>
          <p className="mdt-hero-blurb">
            The 9 core modal verbs (can, could, may, might, will, would, must, shall, should) grouped by what
            they actually do: ability, permission, possibility, obligation, advice, and deduction, across 7 lessons.
          </p>
        </div>

        <div className="mdt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="mdt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <div className="mdt-lesson-top">
                <span className="mdt-lesson-num">Lesson {lesson.number}</span>
              </div>
              <h3 className="mdt-lesson-name">{lesson.title}</h3>
              <div className="mdt-lesson-modals">
                {lesson.modals.map((m) => (
                  <span key={m} className="mdt-modal-chip">{m}</span>
                ))}
              </div>
              <span className="mdt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.mdt-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F2FBEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.mdt-shell * { box-sizing: border-box; }

.mdt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.mdt-hero { margin-bottom: 34px; }
.mdt-hero-title {
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
.mdt-hero-blurb {
  text-align: center;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2C3A2A;
  margin: 0 auto;
  max-width: 640px;
  line-height: 1.55;
}

.mdt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.mdt-lesson-card {
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
.mdt-lesson-card:hover { transform: translate(-2px, -3px); box-shadow: 8px 9px 0 #1A1A1A; }
.mdt-lesson-card:active { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #1A1A1A; }

.mdt-lesson-top { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.mdt-lesson-num {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #2F9E44;
  border: 1.5px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.mdt-lesson-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.2;
}

.mdt-lesson-modals { display: flex; flex-wrap: wrap; gap: 6px; }
.mdt-modal-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #2F9E44;
  background: #F2FBEF;
  border: 1.5px solid #2F9E44;
  border-radius: 999px;
  padding: 2px 10px;
}

.mdt-lesson-cta {
  margin-top: auto;
  padding-top: 10px;
  border-top: 2px dashed #E1F3DC;
  width: 100%;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #2F9E44;
}

@media (max-width: 900px) {
  .mdt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .mdt-lessons-grid { grid-template-columns: 1fr; }
}
`;
