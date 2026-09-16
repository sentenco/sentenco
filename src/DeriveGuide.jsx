import { useParams } from "react-router-dom";
import { getLesson } from "./deriveTracks";

// The six recurring grammar cues behind every Derive gap-fill answer. Every
// lesson's teacherGuide entries reference one of these by letter, so this
// key only needs to be written once and explained well -- a new teacher
// reads it top of the guide, then just needs the letter per sentence to
// know which rule to point the student to.
const DERIVE_CUES = [
  {
    letter: "A",
    label: "After “to”, a modal, or “let's” → base form",
    detail: "Right after “to” (“need to…”, “have to…”), a modal like will/can/could/should/must, or “let's” (“let us”), the verb stays in its plain, unconjugated form — no -s, no -ed, no -ing.",
  },
  {
    letter: "B",
    label: "After am/is/are/was/were → -ing form",
    detail: "Am/is/are/was/were followed by a verb builds the continuous tenses — something happening right now, or happening at a specific past moment.",
  },
  {
    letter: "C",
    label: "After have/has/had (+ been) → -ed / past-participle form",
    detail: "Have/has/had + the -ed form is the perfect tenses (“have you decided…”). Add “been” and it's the passive (“had already been decided”) — same spelling, two different jobs.",
  },
  {
    letter: "D",
    label: "No helping verb, subject goes straight to it → -ed form",
    detail: "No am/is/are/was/were/have/has/had before the blank, and the sentence is describing something already finished — that's the simple past.",
  },
  {
    letter: "E",
    label: "After a/an/the/every/each/my/her… → noun",
    detail: "An article, a possessive, or a quantity word (a lot of, every, each) is always followed by a naming word — a noun, not a verb.",
  },
  {
    letter: "F",
    label: "Describing a quality, not an action → adjective",
    detail: "“Is/are/was very…” or “needs to be…” describes what someone or something is LIKE, a trait — not something they're doing. Sitting directly in front of a noun it describes (“a ___ approach”) is the same job, just without “be.” Either way, that calls for the adjective form.",
  },
];

function CueKey() {
  return (
    <section className="dvg-section dvg-cuekey">
      <div className="dvg-section-head">
        <h2 className="dvg-section-title">How to Read the Blanks</h2>
      </div>
      <p className="dvg-cuekey-intro">
        Every answer in Derive follows one of these six patterns. When you ask the student to justify their choice, point to the words right before the blank — they almost always give it away.
      </p>
      <div className="dvg-cue-list">
        {DERIVE_CUES.map((cue) => (
          <div className="dvg-cue-row" key={cue.letter}>
            <span className="dvg-cue-letter">{cue.letter}</span>
            <div className="dvg-cue-body">
              <p className="dvg-cue-label">{cue.label}</p>
              <p className="dvg-cue-detail">{cue.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SentenceRow({ num, sentence, guide }) {
  const parts = sentence.text.split("___");
  const cue = DERIVE_CUES.find((c) => c.letter === guide?.cue);
  return (
    <div className="dvg-sent-row">
      <span className="dvg-sent-num">{num}</span>
      <div className="dvg-sent-body">
        <p className="dvg-sent-text">
          {parts[0]}
          <span className="dvg-sent-answer">{sentence.answer}</span>
          {parts[1]}
        </p>
        {cue ? (
          <div className="dvg-sent-cue">
            <span className="dvg-sent-cue-badge">Cue {cue.letter}</span>
            <p className="dvg-sent-note">{guide.note}</p>
          </div>
        ) : (
          <p className="dvg-sent-note dvg-sent-note--empty">No guide notes yet.</p>
        )}
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
        </div>

        <CueKey />

        <section className="dvg-section">
          <div className="dvg-section-head">
            <h2 className="dvg-section-title">Justify-the-Answer Breakdown</h2>
          </div>
          <p className="dvg-cuekey-intro">
            After the student picks a word-bank chip, ask why it fits before marking it correct. Each row below is one sentence, in order.
          </p>
          <div className="dvg-sent-list">
            {lesson.sentences.map((sentence, i) => (
              <SentenceRow key={i} num={i + 1} sentence={sentence} guide={lesson.teacherGuide?.[i]} />
            ))}
          </div>
        </section>
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

.dvg-hero { text-align: center; padding-bottom: 16px; margin-bottom: 20px; border-bottom: 1px solid #EFD9E4; }
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
.dvg-family-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; }
.dvg-family-chip {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 12px;
  color: #B23370;
  background: #F6D9E9;
  border-radius: 999px;
  padding: 4px 12px;
}

.dvg-section {
  background: #FFFFFF;
  border: 1px solid #F2E1EB;
  border-radius: 16px;
  padding: 16px 18px;
  margin-bottom: 18px;
}
.dvg-section-head { margin-bottom: 8px; }
.dvg-section-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 17px;
  color: #10646B;
  margin: 0;
}
.dvg-cuekey-intro {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  line-height: 1.5;
  color: #5A6B92;
  margin: 0 0 12px;
}

.dvg-cue-list { display: flex; flex-direction: column; gap: 10px; }
.dvg-cue-row { display: flex; gap: 10px; }
.dvg-cue-letter {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #B23370;
  color: #fff;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dvg-cue-body { flex: 1; min-width: 0; }
.dvg-cue-label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #1B2A4A;
  margin: 0 0 2px;
}
.dvg-cue-detail {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.45;
  color: #5A6B92;
  margin: 0;
}

.dvg-sent-list { display: flex; flex-direction: column; }
.dvg-sent-row {
  display: flex;
  gap: 10px;
  padding: 12px 0;
  border-top: 1px dashed #EFD9E4;
}
.dvg-sent-row:first-child { border-top: none; padding-top: 4px; }
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
  margin: 0 0 6px;
}
.dvg-sent-answer {
  color: #B23370;
  text-decoration: underline;
  text-decoration-color: #F6C9DF;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}
.dvg-sent-cue { display: flex; align-items: baseline; gap: 8px; }
.dvg-sent-cue-badge {
  flex-shrink: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
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
