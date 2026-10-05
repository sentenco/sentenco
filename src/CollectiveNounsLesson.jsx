import { useState } from "react";

const LESSON = {
  title: "Collective Nouns",
  formula: "one word naming a whole group → usually takes a singular verb",
  leadIn: "\"The team is winning.\" How many people are on a team? More than one. So why does the sentence use \"is,\" not \"are\"?",
  importance: [
    "Collective nouns trip people up constantly in subject-verb agreement — the noun describes many members, but grammatically it behaves as one unit.",
    "They appear everywhere in real English: team, family, staff, audience, committee, jury — you'll use these words in school, work, and everyday conversation regularly.",
    "Once this clicks, it also explains why phrases like \"the team is\" and \"the players are\" are both correct — they're just talking about the group two different ways.",
  ],
  teach: [
    {
      name: "What Is a Collective Noun?",
      definition: "A collective noun is a single noun that refers to a group of people, animals, or things treated as one unit — not to the individual members separately.",
      examples: ["team", "family", "audience", "herd"],
    },
    {
      name: "Singular Agreement (the Standard Rule)",
      definition: "In standard English, a collective noun usually takes a singular verb, because you're treating the group as one single thing, not as many separate people.",
      examples: ["The team is winning.", "My family is proud of me.", "The audience was silent."],
    },
  ],
  compareLeftLabel: "Collective noun (one unit)",
  compareRightLabel: "Individual members (many people)",
  compareNote: "Both sentences can describe the same real-world group — the difference is whether you're speaking about it as one unit or about its separate members.",
  comparePairs: [
    { left: "The team is happy with the result.", right: "The players are happy with the result." },
    { left: "My family is coming to visit.", right: "My relatives are coming to visit." },
    { left: "The committee has made a decision.", right: "The committee members have made their decisions." },
  ],
  guided: [
    { prompt: "\"The class ___ (is/are) taking a test right now.\" Choose the standard form.", answer: "is" },
    { prompt: "Name 3 collective nouns for groups of people.", answer: "e.g., team, family, staff, audience, committee" },
    { prompt: "\"A herd of elephants ___ (was/were) crossing the river.\" Choose the standard form.", answer: "was" },
    { prompt: "Is \"jury\" a collective noun? What does it refer to?", answer: "Yes — a group of people who decide a legal case together." },
    { prompt: "\"The staff ___ (is/are) working late tonight.\" Choose the standard form.", answer: "is" },
    { prompt: "Rewrite \"The band is\" to talk about its individual members instead.", answer: "The band members are" },
  ],
  practice: [
    "Write 3 sentences using 3 different collective nouns (team, family, audience, etc.), each with a correctly matching singular verb.",
    "Pick one collective noun and write it two ways: once as a group (singular verb), once talking about its members (plural verb).",
    "Find a collective noun that describes a group you belong to, and write one sentence about it.",
  ],
  wrapup: "A collective noun names a whole group with one word — and usually takes a singular verb, because you're describing the group as one single unit.",
};

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.importance) slides.push("importance");
  lesson.teach.forEach((_, i) => slides.push(`teach${i}`));
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
    <div className="coln-slide coln-slide--cover">
      <span className="coln-kind-badge">Lesson Time!</span>
      <h2 className="coln-cover-title">{lesson.title}</h2>
      <span className="coln-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="coln-slide">
      <span className="coln-eyebrow">Warm-up</span>
      <div className="coln-bubble coln-bubble--solo">
        <p className="coln-bubble-text coln-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function ImportanceSlide({ lesson }) {
  return (
    <div className="coln-slide coln-slide--part">
      <h3 className="coln-h">Why It Matters</h3>
      <div className="coln-importance-list">
        {lesson.importance.map((line, i) => (
          <div key={i} className="coln-importance-item">
            <span className="coln-importance-num">{i + 1}</span>
            <p className="coln-importance-text">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="coln-slide">
      <h3 className="coln-h">{concept.name}</h3>
      <p className="coln-definition">{concept.definition}</p>
      <div className="coln-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="coln-bubble">
            <p className="coln-bubble-text">{ex}</p>
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
    <div className="coln-slide">
      <span className="coln-eyebrow">Think About It</span>
      <h3 className="coln-h">{left} <span className="coln-vs">vs</span> {right}</h3>
      <p className="coln-compare-note">You've just seen both. In your own words, how would you explain the difference?</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="coln-slide">
      <h3 className="coln-h">{lesson.compareLeftLabel} <span className="coln-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="coln-compare-note">{lesson.compareNote}</p>
      <div className="coln-compare-grid">
        <div className="coln-panel">
          <span className="coln-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="coln-compare-line">{pair.left}</p>)}
        </div>
        <div className="coln-panel coln-panel--right">
          <span className="coln-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="coln-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="coln-quiz-item">
      <p className="coln-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="coln-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="coln-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson, index }) {
  const chunk = lesson.guided.slice(index * 3, index * 3 + 3);
  const totalChunks = Math.ceil(lesson.guided.length / 3);
  return (
    <div className="coln-slide coln-slide--part">
      <h3 className="coln-h">Guided practice{totalChunks > 1 ? ` (${index + 1} of ${totalChunks})` : ""}</h3>
      <div className="coln-quiz-list">
        {chunk.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="coln-slide coln-slide--part">
      <h3 className="coln-h">Speaking &amp; writing practice</h3>
      <ul className="coln-list coln-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="coln-slide">
      <h3 className="coln-h">Wrap-up</h3>
      <p className="coln-definition">{lesson.wrapup}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType === "importance") return <ImportanceSlide lesson={lesson} />;
  if (slideType.startsWith("teach")) return <TeachSlide lesson={lesson} index={Number(slideType.replace("teach", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType.startsWith("guided")) return <GuidedSlide lesson={lesson} index={Number(slideType.replace("guided", ""))} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

const STAGE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  importance: "Why It Matters",
  predict: "Think About It",
  compare: "Compare",
  practice: "Practice",
  wrapup: "Wrap-up",
};

function stageLabel(slideType) {
  if (slideType.startsWith("teach")) return "Teach";
  if (slideType.startsWith("guided")) return "Guided Practice";
  return STAGE_LABELS[slideType] || "";
}

export default function CollectiveNounsLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="coln-shell">
      <style>{CSS}</style>
      <div className="coln-stage">
        <div className="coln-deck">
          <div className="coln-deck-header">
            <span className="coln-brand"><img src="/logo-sentenco.png" alt="" className="coln-brand-logo" />entenco</span>
            <span className="coln-stage-label">{stageLabel(slideType)}</span>
          </div>
          <div className="coln-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="coln-nav-row">
            <button type="button" className="coln-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="coln-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`coln-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="coln-nav-btn coln-nav-btn--primary"
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

.coln-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #E7F6F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.coln-shell * { box-sizing: border-box; }

.coln-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 56px;
  background: #FFFFFF;
  border-bottom: 3px dashed #CDEAE7;
  flex-shrink: 0;
}
.coln-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.coln-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.coln-stage-label {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7FC2BC;
  white-space: nowrap;
  flex-shrink: 0;
}

.coln-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.coln-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
  overflow: hidden;
}

.coln-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 20px 56px;
}

.coln-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.coln-slide--cover { gap: 14px; }
.coln-slide--part { justify-content: flex-start; }

.coln-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #1E8E85;
}

.coln-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #1E8E85;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.coln-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #1E8E85;
}

.coln-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #146560;
  background: #E7F6F4;
  border: 2.5px solid #1E8E85;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.coln-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #1E8E85;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.coln-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.coln-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #0F3D39;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.coln-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #1E8E85;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.coln-bubble--solo { max-width: 720px; }
.coln-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.coln-bubble-text--big { font-size: 24px; font-style: italic; }

.coln-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.coln-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #7FC2BC;
  margin: 0;
  max-width: 620px;
}
.coln-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.coln-panel { background: #E7F6F4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.coln-panel--right { border-color: #1E8E85; }
.coln-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #146560;
  margin-bottom: 8px;
}
.coln-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.coln-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #0F3D39;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.coln-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.coln-speaking-list li { margin-bottom: 8px; }

.coln-importance-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 720px; text-align: left; }
.coln-importance-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #E7F6F4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
}
.coln-importance-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bangers', cursive;
  font-size: 16px;
  color: #FFFFFF;
  background: #1E8E85;
  border: 2.5px solid #1A1A1A;
  border-radius: 50%;
}
.coln-importance-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16.5px;
  color: #1A1A1A;
  line-height: 1.5;
  margin: 4px 0 0;
}

.coln-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.coln-quiz-item {
  background: #E7F6F4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.coln-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.coln-reveal-btn {
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
.coln-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.coln-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.coln-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 56px 20px; border-top: 3px dashed #CDEAE7; flex-shrink: 0; }
.coln-nav-btn {
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
.coln-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.coln-nav-btn--primary { background: #FFC300; }
.coln-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.coln-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.coln-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.coln-nav-dot.is-active { background: #1E8E85; }
`;
