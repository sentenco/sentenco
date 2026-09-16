import { useParams } from "react-router-dom";
import { getLesson } from "./deriveTracks";

// Kept short on purpose: a teacher opens this mid-class, not before it.
// Each sentence's explanation is fully self-contained (no shared rule
// list to flip back to), so it reads in the moment the student needs
// to justify their word-bank pick, right before it gets marked.
function SentenceRow({ num, sentence, guide }) {
  const parts = sentence.text.split("___");
  return (
    <div className="dvg-sent-row">
      <span className="dvg-sent-num">{num}</span>
      <div className="dvg-sent-body">
        <p className="dvg-sent-text">
          {parts[0]}
          <span className="dvg-sent-answer">{sentence.answer}</span>
          {parts[1]}
        </p>
        <p className={`dvg-sent-note ${!guide ? "dvg-sent-note--empty" : ""}`}>
          {guide ? guide.note : "No guide notes yet."}
        </p>
      </div>
    </div>
  );
}

export default function DeriveGuide() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="dvg-shell">
        <style>{CSS}</style>
        <div className="dvg-stage">
          <p className="dvg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dvg-shell">
      <style>{CSS}</style>
      <header className="dvg-topbar">
        <span className="dvg-topbar-title">Teacher Guide</span>
      </header>

      <div className="dvg-stage">
        <div className="dvg-hero">
          <span className="dvg-hero-kicker">{lesson.code} · Word Family</span>
          <h1 className="dvg-hero-title">{lesson.title}</h1>
          <div className="dvg-family-row">
            {lesson.family.map((form) => (
              <span className="dvg-family-chip" key={form}>{form}</span>
            ))}
          </div>
          <p className="dvg-hero-hint">Ask the student why before you mark each answer correct. The reason is right under each sentence.</p>
        </div>

        <div className="dvg-sent-list">
          {lesson.sentences.map((sentence, i) => (
            <SentenceRow key={i} num={i + 1} sentence={sentence} guide={lesson.teacherGuide?.[i]} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.dvg-shell {
  width: 100%;
  min-height: 100vh;
  background: #FBF3E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.dvg-shell * { box-sizing: border-box; }

.dvg-topbar {
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 22px 0;
  position: sticky;
  top: 0;
  background: #FBF3E9;
  z-index: 5;
}
.dvg-topbar-title {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B23370;
}

.dvg-stage {
  width: 100%;
  max-width: 620px;
  padding: 14px 22px 48px;
  font-family: 'IBM Plex Sans', sans-serif;
}

.dvg-missing {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #4B8B92;
  text-align: center;
  margin-top: 60px;
}

.dvg-hero { text-align: center; padding-bottom: 16px; margin-bottom: 16px; border-bottom: 1px solid #EFD9E4; }
.dvg-hero-kicker {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #10646B;
  margin-bottom: 8px;
}
.dvg-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 26px;
  color: #10646B;
  margin: 0 0 14px;
}
.dvg-family-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; margin-bottom: 12px; }
.dvg-family-chip {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 12px;
  color: #B23370;
  background: #F6D9E9;
  border-radius: 999px;
  padding: 4px 12px;
}
.dvg-hero-hint {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  line-height: 1.5;
  color: #5A6B92;
  margin: 0;
}

.dvg-sent-list {
  background: #FFFFFF;
  border: 1px solid #F2E1EB;
  border-radius: 16px;
  padding: 4px 18px;
  display: flex;
  flex-direction: column;
}
.dvg-sent-row {
  display: flex;
  gap: 10px;
  padding: 12px 0;
  border-top: 1px dashed #EFD9E4;
}
.dvg-sent-row:first-child { border-top: none; }
.dvg-sent-num {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #F6D9E9;
  color: #B23370;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 10.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.dvg-sent-body { flex: 1; min-width: 0; }
.dvg-sent-text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  color: #1B2A4A;
  margin: 0 0 4px;
}
.dvg-sent-answer {
  color: #B23370;
  text-decoration: underline;
  text-decoration-color: #F6C9DF;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}
.dvg-sent-note {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  line-height: 1.5;
  color: #5A6B92;
  margin: 0;
}
.dvg-sent-note--empty { color: #B5A7A0; font-style: italic; }

@media (max-width: 480px) {
  .dvg-hero-title { font-size: 22px; }
}
`;
