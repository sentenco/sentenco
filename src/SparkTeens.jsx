import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./sparkTeensTracks";
import SparkIcon from "./slides/SparkIcons";

function StemReveal({ stems }) {
  const [revealed, setRevealed] = useState(false);
  if (!stems || stems.length === 0) return null;
  if (!revealed) {
    return (
      <button type="button" className="spkt-reveal-btn" onClick={() => setRevealed(true)}>
        Show sentence starter{stems.length > 1 ? "s" : ""}
      </button>
    );
  }
  return (
    <div className="spkt-stems">
      {stems.map((s, i) => (
        <span key={i} className="spkt-stem-pill">{s}</span>
      ))}
    </div>
  );
}

const INTRO_SLIDE = {
  title: "Before We Start",
  timing: "1 min",
  purpose: "Get to know the student and set expectations before the lesson begins",
  miniGameType: "Quick Q&A",
  cardTitle: "Quick Questions",
  questions: [
    "What's your name?",
    "How old are you?",
    "Do you want me to correct you while you speak, or after you finish?",
  ],
  sentenceStems: ["My name is ___.", "I'm ___ years old.", "Correct me ___."],
  teacherScript: [
    "Hi! Before we start, a few quick things.",
    "What's your name?",
    "How old are you?",
    "Do you want me to correct you while you're speaking, or wait until you finish?",
  ],
  likelyAnswers: ["My name is Alex.", "I'm 14.", "Correct me after, please. / It's OK to correct me anytime."],
  followUps: [],
  correctionNotes: [
    "This is about setting expectations, not correcting language here.",
    "Respect whatever the student prefers for the rest of the lesson.",
  ],
  pacingNote: "Keep this light and quick — it's rapport-building, not a test.",
};

function CoverSlide({ title }) {
  return (
    <div className="spkt-slide spkt-slide--cover">
      <h1 className="spkt-cover-title">{title}</h1>
      <span className="spkt-cover-kicker">Trial Class</span>
      <span className="spkt-cover-length">20 minutes</span>
    </div>
  );
}

function FeedbackWordSlide() {
  return (
    <div className="spkt-slide spkt-slide--feedback">
      <h1 className="spkt-feedback-word">Feedback</h1>
    </div>
  );
}

function FinalSlide({ slide }) {
  return (
    <div className="spkt-slide spkt-slide--final">
      <h1 className="spkt-final-title">{slide.title}</h1>
      {slide.subtitle && <p className="spkt-final-subtitle">{slide.subtitle}</p>}
    </div>
  );
}

function WordFlip({ wordCard }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`spkt-wordflip ${flipped ? "is-flipped" : ""}`} onClick={() => setFlipped((f) => !f)} role="button" tabIndex={0}>
      <div className="spkt-wordflip-inner">
        <div className="spkt-wordflip-face spkt-wordflip-face--front">{wordCard.word}</div>
        <div className="spkt-wordflip-face spkt-wordflip-face--back">{wordCard.meaning}</div>
      </div>
    </div>
  );
}

function TeenSlide({ slide }) {
  return (
    <div className="spkt-slide">
      <span className="spkt-badge">{slide.miniGameType}</span>
      <h2 className="spkt-slide-title">{slide.title}</h2>

      {slide.sceneIcons && slide.sceneIcons.length > 0 && (
        <div className="spkt-scene-row">
          {slide.sceneIcons.map((name, i) => (
            <div key={i} className="spkt-scene-icon">
              <SparkIcon name={name} size={56} />
            </div>
          ))}
        </div>
      )}

      {slide.wordCard && <WordFlip wordCard={slide.wordCard} />}

      {slide.prompt && <p className="spkt-prompt">{slide.prompt}</p>}

      {slide.choices && (
        <div className="spkt-choice-list">
          {slide.choices.map((c, i) => <span key={i} className="spkt-choice-chip">{c}</span>)}
        </div>
      )}

      {slide.questions && (
        <div className="spkt-card">
          <span className="spkt-card-title">{slide.cardTitle}</span>
          <ol className="spkt-question-list">
            {slide.questions.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </div>
      )}

      {slide.statements && (
        <div className="spkt-tfm">
          {slide.instructions && <p className="spkt-tfm-instructions">{slide.instructions}</p>}
          <div className="spkt-statement-list">
            {slide.statements.map((s, i) => <span key={i} className="spkt-statement-chip">{s}</span>)}
          </div>
        </div>
      )}

      <StemReveal stems={slide.sentenceStems} />
    </div>
  );
}

const STAGE_LABELS = {
  cover: "Cover",
  feedback: "Feedback",
  final: "Wrap-up",
};

function stageLabel(slide) {
  return STAGE_LABELS[slide.kind] || "Activity";
}

function renderSlide(slide) {
  switch (slide.kind) {
    case "cover": return <CoverSlide title={slide.title} />;
    case "feedback": return <FeedbackWordSlide />;
    case "final": return <FinalSlide slide={slide} />;
    default: return <TeenSlide slide={slide} />;
  }
}

export default function SparkTeens() {
  const { lessonId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const lesson = getLesson(lessonId);

  // Mirror the slide position into the URL so a refresh mid-lesson lands
  // back on the same slide instead of the cover.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (slideIdx > 0) next.set("slide", String(slideIdx));
    else next.delete("slide");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIdx]);

  if (!lesson) {
    return (
      <div className="spkt-shell">
        <style>{CSS}</style>
        <div className="spkt-stage">
          <p className="spkt-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = [{ kind: "cover", title: lesson.title }, INTRO_SLIDE, ...lesson.slides];
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  return (
    <div className="spkt-shell">
      <style>{CSS}</style>
      <header className="spkt-topbar">
        <span className="spkt-topbar-title">{lesson.code} · {lesson.title}</span>
      </header>

      <div className="spkt-stage">
        <div className="spkt-deck">
          <div className="spkt-deck-header">
            <span className="spkt-brand"><img src="/logo-sentivo.png" alt="" className="spkt-brand-logo" />entenco</span>
            <span className="spkt-stage-label">{stageLabel(slide)}</span>
          </div>
          <div className="spkt-deck-body" key={slideIdx}>
            {renderSlide(slide)}
          </div>
          <div className="spkt-nav-row">
            <button type="button" className="spkt-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="spkt-nav-dots">
              {slides.map((_, i) => (
                <span key={i} className={`spkt-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spkt-nav-btn spkt-nav-btn--primary"
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.spkt-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFFBEA 0%, #FFF0BE 55%, #FFE28A 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spkt-shell * { box-sizing: border-box; }

.spkt-topbar {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 24px 0;
  flex-shrink: 0;
}
.spkt-topbar-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #4A3B12; text-align: center; }

.spkt-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spkt-stage { flex: 1; width: 100%; display: flex; align-items: center; justify-content: center; padding: 16px 24px 24px; min-height: 0; }

.spkt-deck {
  position: relative;
  width: 1080px;
  max-width: 100%;
  height: 100%;
  max-height: 640px;
  background-color: #FFFFFF;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg stroke='%23FFB800' stroke-opacity='0.14' stroke-width='4' stroke-linecap='round'%3E%3Cline x1='16' y1='10' x2='16' y2='34'/%3E%3Cline x1='4' y1='22' x2='28' y2='22'/%3E%3C/g%3E%3Ccircle cx='100' cy='34' r='6' fill='%23FF4FA3' fill-opacity='0.10'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg stroke='%23FFB800' stroke-opacity='0.14' stroke-width='4' stroke-linecap='round'%3E%3Cline x1='124' y1='106' x2='124' y2='130'/%3E%3Cline x1='112' y1='118' x2='136' y2='118'/%3E%3C/g%3E%3Ccircle cx='36' cy='108' r='6' fill='%23FF4FA3' fill-opacity='0.10'/%3E%3C/svg%3E");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  background-size: 160px 160px, 160px 160px;
  border: 1px solid #FFE28A;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(180,140,0,0.16);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.spkt-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 1px solid #FFE28A;
  flex-shrink: 0;
}
.spkt-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #4A3B12;
}
.spkt-brand-logo { height: 22px; width: auto; display: block; margin-right: -4px; }

.spkt-stage-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C98A00;
  white-space: nowrap;
  flex-shrink: 0;
}

.spkt-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; padding: 24px 48px; }

.spkt-slide { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 16px; width: 100%; margin: auto; }

.spkt-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C98A00;
  background: #FFF3D0;
  border-radius: 999px;
  padding: 5px 14px;
}
.spkt-slide-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 42px; color: #4A3B12; margin: 0; }

.spkt-scene-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.spkt-scene-icon {
  width: 76px;
  height: 76px;
  border-radius: 14px;
  background: #FFF9E5;
  border: 2px solid #FFE28A;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cover */
.spkt-slide--cover { gap: 12px; }
.spkt-cover-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 58px; color: #4A3B12; margin: 0; }
.spkt-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #C98A00;
}
.spkt-cover-length { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 16px; color: #8A7233; }

/* Feedback / final */
.spkt-feedback-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 56px; color: #4A3B12; margin: 0; }
.spkt-final-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 50px; color: #4A3B12; margin: 0; }
.spkt-final-subtitle { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 22px; color: #8A7233; margin: 0; }

/* Word flip */
.spkt-wordflip { width: 260px; height: 130px; cursor: pointer; perspective: 1000px; }
.spkt-wordflip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.spkt-wordflip.is-flipped .spkt-wordflip-inner { transform: rotateY(180deg); }
.spkt-wordflip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  text-align: center;
}
.spkt-wordflip-face--front {
  background: #FFB800;
  border: 2px solid #E09E00;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 38px;
  color: #FFFFFF;
  text-transform: capitalize;
}
.spkt-wordflip-face--back {
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  transform: rotateY(180deg);
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #4A3B12;
}

.spkt-prompt { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 26px; color: #4A3B12; margin: 0; max-width: 700px; }

.spkt-choice-list { display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 520px; }
.spkt-choice-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 19px;
  color: #4A3B12;
  background: #FFF3D0;
  border-radius: 10px;
  padding: 10px 16px;
}

.spkt-card { width: 100%; max-width: 560px; background: #FFF3D0; border-radius: 14px; padding: 16px 22px; display: flex; flex-direction: column; gap: 8px; }
.spkt-card-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 17px; color: #C98A00; }
.spkt-question-list { margin: 0; padding-left: 20px; text-align: left; display: flex; flex-direction: column; gap: 6px; }
.spkt-question-list li { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 19px; color: #4A3B12; }

.spkt-tfm { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; }
.spkt-tfm-instructions { font-family: 'Quicksand', sans-serif; font-weight: 600; font-style: italic; font-size: 15px; color: #8A7233; margin: 0; }
.spkt-statement-list { display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 560px; }
.spkt-statement-chip { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 18px; color: #4A3B12; background: #FFF3D0; border-radius: 10px; padding: 10px 16px; }

.spkt-reveal-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FF4FA3;
  background: #FFF0F7;
  border: 2px dashed #FFB8DA;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
}

.spkt-stems { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 700px; }
.spkt-stem-pill {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A3B12;
  background: #FFF3D0;
  border: 1.5px solid #FFDD7A;
  border-radius: 999px;
  padding: 8px 16px;
}

.spkt-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 48px 24px; border-top: 1px solid #FFF3D0; flex-shrink: 0; }
.spkt-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A3B12;
  background: #FFF3D0;
  border: 1px solid #FFDD7A;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.spkt-nav-btn--primary { background: #FFB800; color: #4A3B12; border-color: #FFB800; }
.spkt-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spkt-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.spkt-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #FFE28A; }
.spkt-nav-dot.is-active { width: 16px; background: #FFB800; }
`;
