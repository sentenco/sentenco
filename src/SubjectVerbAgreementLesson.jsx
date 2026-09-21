import { useState } from "react";

const LESSON = {
  title: "Subject-Verb Agreement",
  formula: "singular subject → singular verb  ·  plural subject → plural verb  ·  or/nor agrees with the nearer subject",
  leadIn: "Quick check: “Neither the manager nor the staff ___ (be) available today.” Which verb form feels right, and why?",
  importance: [
    "Subject-verb agreement mistakes are one of the fastest ways to sound careless in writing, even when every other part of a sentence is correct — readers notice it instantly.",
    "The trickier cases here (or/nor, indefinite pronouns, phrases sitting in between) are exactly where even advanced students slip, because the surface word order fools the ear.",
    "This isn't just a writing-class rule — it's tested constantly in formal English exams and professional communication, so getting the exceptions solid pays off well beyond the classroom.",
  ],
  traps: [
    { tag: "S+V", word: "Basic Agreement", usage: "A singular subject (he, she, it, or any singular noun) takes a verb with -s in the present tense; a plural subject drops it.", examples: ["She walks to school.", "The students walk to school."] },
    { tag: "AND", word: "Compound Subjects with And", usage: "Two subjects joined by and act as one plural subject, even if each one is singular on its own.", examples: ["Tom and Jerry are best friends.", "Rice and beans are on the menu."] },
    { tag: "OR", word: "Compound Subjects with Or/Nor", usage: "With or or nor, the verb agrees with whichever subject is closer to it, not the first one.", examples: ["Neither the teacher nor the students are ready.", "Either my parents or my sister is picking me up."] },
    { tag: "ANY1", word: "Indefinite Pronouns", usage: "Everyone, everybody, someone, anybody, nobody, and each are always singular, even though they sound like they mean 'many people.'", examples: ["Everyone is welcome.", "Each of the players has a locker."] },
    { tag: "GAP", word: "Ignore the Words In Between", usage: "A phrase sitting between the subject and the verb, usually starting with of, with, or including, doesn't change the agreement. Match the verb to the real subject, not the nearest noun.", examples: ["The box of chocolates is on the table.", "One of my friends is a doctor."] },
  ],
  compareLeftLabel: "And: always plural",
  compareRightLabel: "Or / Nor: agrees with the nearer subject",
  compareNote: "And always makes a plural subject. Or and nor don't combine the subjects: the verb just matches whichever one sits closest to it.",
  comparePairs: [
    { left: "My mom and dad are both teachers.", right: "Neither my mom nor my dad is a teacher." },
    { left: "The dog and the cat are asleep.", right: "Either the dog or the cats are making that noise." },
  ],
  guided: [
    { prompt: "She ___ (walk) to school every day. (basic agreement)", answer: "walks" },
    { prompt: "Tom and Jerry ___ (be) best friends. (and, always plural)", answer: "are" },
    { prompt: "Neither the teacher nor the students ___ (be) ready. (or/nor, nearer subject)", answer: "are" },
    { prompt: "Either my parents or my sister ___ (be) picking me up. (or/nor, nearer subject)", answer: "is" },
    { prompt: "Everyone ___ (be) welcome at the party. (indefinite pronoun)", answer: "is" },
    { prompt: "The box of chocolates ___ (be) on the table. (ignore the words in between)", answer: "is" },
  ],
  practice: [
    "Write one sentence with a compound subject joined by and.",
    "Write one sentence using neither...nor or either...or, checking which subject is closer to the verb.",
    "Write one sentence using everyone, everybody, or nobody as the subject.",
  ],
  wrapup: "Subjects and verbs must match in number. And always makes a plural subject; or/nor agrees with whichever subject sits closer to the verb; indefinite pronouns like everyone are always singular; and a phrase between the subject and verb never changes the agreement.",
};

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.importance) slides.push("importance");
  lesson.traps.forEach((_, i) => slides.push(`trap${i}`));
  if (lesson.comparePairs) slides.push("predict", "compare");
  if (lesson.guided) {
    const guidedChunks = Math.ceil(lesson.guided.length / 3);
    for (let i = 0; i < guidedChunks; i++) slides.push(`guided${i}`);
  }
  slides.push("practice", "wrapup");
  return slides;
}

function CoverSlide({ lesson }) {
  return (
    <div className="sval-slide sval-slide--cover">
      <span className="sval-kind-badge">Lesson Time!</span>
      <h2 className="sval-cover-title">{lesson.title}</h2>
      <span className="sval-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="sval-slide">
      <span className="sval-eyebrow">Warm-up</span>
      <div className="sval-bubble sval-bubble--solo">
        <p className="sval-bubble-text sval-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="sval-slide sval-slide--part">
      <h3 className="sval-h">Why Subject-Verb Agreement Matters</h3>
      <div className="sval-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="sval-importance-item">
            <span className="sval-importance-num">{i + 1}</span>
            <p className="sval-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrapSlide({ lesson, index }) {
  const t = lesson.traps[index];
  return (
    <div className="sval-slide">
      <span className="sval-osc-eyebrow">Trap {index + 1} of {lesson.traps.length}</span>
      <div className="sval-osc-sticker">
        <span className="sval-osc-sticker-letter">{t.tag}</span>
        <h3 className="sval-osc-sticker-word">{t.word}</h3>
      </div>
      <p className="sval-definition">{t.usage}</p>
      <div className="sval-example-list">
        {t.examples.map((ex, i) => (
          <div key={i} className="sval-bubble">
            <p className="sval-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PredictSlide({ lesson }) {
  const left = lesson.compareLeftLabel.split(": ")[0].trim();
  const right = lesson.compareRightLabel.split(": ")[0].trim();
  return (
    <div className="sval-slide">
      <span className="sval-eyebrow">Think About It</span>
      <h3 className="sval-h">{left} <span className="sval-vs">vs</span> {right}</h3>
      <p className="sval-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="sval-slide">
      <h3 className="sval-h">{lesson.compareLeftLabel} <span className="sval-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="sval-compare-note">{lesson.compareNote}</p>
      <div className="sval-compare-grid">
        <div className="sval-panel">
          <span className="sval-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="sval-compare-line">{pair.left}</p>)}
        </div>
        <div className="sval-panel sval-panel--right">
          <span className="sval-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="sval-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="sval-quiz-item">
      <p className="sval-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="sval-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="sval-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="sval-slide sval-slide--part">
      <h3 className="sval-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="sval-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="sval-slide sval-slide--part">
      <h3 className="sval-h">Speaking &amp; writing practice</h3>
      <ul className="sval-list sval-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="sval-slide">
      <h3 className="sval-h">Wrap-up</h3>
      <p className="sval-definition">{lesson.wrapup}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType === "importance") return <ImportanceSlide lesson={lesson} />;
  if (slideType.startsWith("trap")) return <TrapSlide lesson={lesson} index={Number(slideType.replace("trap", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType.startsWith("guided")) return <GuidedSlide lesson={lesson} index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

function stageLabel(slideType) {
  if (slideType.startsWith("trap")) return "Teach";
  if (slideType.startsWith("guided")) return "Guided Practice";
  switch (slideType) {
    case "cover": return "Cover";
    case "warmup": return "Warm-up";
    case "importance": return "Why It Matters";
    case "predict": return "Think About It";
    case "compare": return "Compare";
    case "practice": return "Practice";
    case "wrapup": return "Wrap-up";
    default: return "";
  }
}

export default function SubjectVerbAgreementLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="sval-shell">
      <style>{CSS}</style>

      <div className="sval-stage">
        <div className="sval-deck">
          <div className="sval-deck-header">
            <span className="sval-brand"><img src="/logo-sentenco.png" alt="" className="sval-brand-logo" />entenco</span>
            <span className="sval-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="sval-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="sval-nav-row">
            <button type="button" className="sval-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="sval-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`sval-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="sval-nav-btn sval-nav-btn--primary"
              onClick={() => setSlideIdx((i) => i + 1)}
              disabled={isLast}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.sval-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F7F2E4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.sval-shell * { box-sizing: border-box; }

.sval-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: -20px -56px 18px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 2px solid #E8DFC5;
  flex-shrink: 0;
}
.sval-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.sval-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.sval-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #96762B;
  white-space: nowrap;
  flex-shrink: 0;
}

.sval-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.sval-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  padding: 20px 56px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
  overflow: hidden;
}

.sval-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 8px 0;
}

.sval-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.sval-slide--cover { gap: 14px; }
.sval-slide--part { justify-content: flex-start; }

.sval-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #96762B;
}

.sval-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #96762B;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.sval-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 58px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #96762B;
}

.sval-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #6E5A1F;
  background: #F7F2E4;
  border: 2.5px solid #96762B;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.sval-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #96762B;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.sval-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.sval-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #332B14;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.sval-osc-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #96762B;
}
.sval-osc-sticker {
  display: flex;
  align-items: center;
  gap: 14px;
  transform: rotate(-2deg);
}
.sval-osc-sticker-letter {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 19px;
  color: #FFFFFF;
  background: #96762B;
  border: 3px solid #1A1A1A;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 5px 5px 0 #1A1A1A;
  text-align: center;
  padding: 4px;
}
.sval-osc-sticker-word {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 38px;
  letter-spacing: 0.5px;
  color: #1A1A1A;
  margin: 0;
  text-shadow: 3px 3px 0 #96762B;
}

.sval-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #96762B;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.sval-bubble--solo { max-width: 720px; }
.sval-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.sval-bubble-text--big { font-size: 24px; font-style: italic; }

.sval-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.sval-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A88E4F;
  margin: 0;
  max-width: 620px;
}
.sval-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.sval-panel { background: #F7F2E4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.sval-panel--right { border-color: #96762B; }
.sval-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #6E5A1F;
  margin-bottom: 8px;
}
.sval-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.sval-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #332B14;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.sval-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.sval-speaking-list li { margin-bottom: 8px; }

.sval-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.sval-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #F7F2E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.sval-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #96762B;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.sval-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.sval-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.sval-quiz-item {
  background: #F7F2E4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sval-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.sval-reveal-btn {
  align-self: flex-start;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #1A1A1A;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.sval-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.sval-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.sval-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E8DFC5; flex-shrink: 0; }
.sval-nav-btn {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 10px;
  padding: 9px 18px;
  cursor: pointer;
  box-shadow: 4px 4px 0 #1A1A1A;
}
.sval-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.sval-nav-btn--primary { background: #FFC300; }
.sval-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.sval-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.sval-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.sval-nav-dot.is-active { background: #96762B; }
`;
