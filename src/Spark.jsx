import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./sparkTracks";
import SparkIcon from "./slides/SparkIcons";
import ImagePlaceholder from "./slides/ImagePlaceholder";

const EXTENSIONS = ["png", "svg"];

function SparkPicture({ name, size = 64 }) {
  const [attempt, setAttempt] = useState(0);
  if (!name) return null;
  if (attempt >= EXTENSIONS.length) {
    return (
      <div style={{ width: size, height: size }}>
        <ImagePlaceholder note={name} compact />
      </div>
    );
  }
  return (
    <img
      src={`/spark-images/kids/${name}.${EXTENSIONS[attempt]}`}
      alt={name}
      onError={() => setAttempt((a) => a + 1)}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

const QUESTION_SLIDES = [
  { kind: "question", prompt: "What's your name?", starter: "My name is ___.", timing: "30 sec" },
  { kind: "question", prompt: "How old are you?", starter: "I am ___ years old.", timing: "30 sec" },
  { kind: "question", prompt: "What do you like to do for fun?", starter: "I like to ___.", timing: "30 sec" },
];

function CoverSlide({ lesson }) {
  return (
    <div className="spk-slide spk-slide--cover">
      <h1 className="spk-cover-title">{lesson.title}</h1>
      <span className="spk-cover-kicker">Trial Class</span>
      <span className="spk-cover-length">20 minutes</span>
    </div>
  );
}

function QuestionSlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="spk-slide spk-slide--question">
      <h2 className="spk-question-prompt">{slide.prompt}</h2>
      {revealed ? (
        <span className="spk-guide-pill">{slide.starter}</span>
      ) : (
        <button type="button" className="spk-reveal-btn" onClick={() => setRevealed(true)}>
          Show sentence starter
        </button>
      )}
    </div>
  );
}

function RegularSlide({ slide }) {
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      {slide.sceneIcons && slide.sceneIcons.length > 0 && (
        <div className="spk-scene-row">
          {slide.sceneIcons.map((name, i) => (
            <div key={i} className="spk-scene-icon">
              <SparkPicture name={name} size={84} />
            </div>
          ))}
        </div>
      )}
      <div className="spk-guide-block">
        <span className="spk-guide-label">Kid Guide</span>
        <div className="spk-guide-list">
          {slide.kidGuide.map((line, i) => (
            <span key={i} className="spk-guide-pill">{line}</span>
          ))}
        </div>
      </div>
      {slide.promptOptions && slide.promptOptions.length > 0 && (
        <div className="spk-prompt-chips">
          {slide.promptOptions.map((p, i) => (
            <span key={i} className="spk-prompt-chip">{p}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function FlipCardsSlide({ slide }) {
  const [flipped, setFlipped] = useState(() => slide.cards.map(() => false));
  const [zoomed, setZoomed] = useState(null);

  function flip(i) {
    if (flipped[i]) return;
    setFlipped((f) => f.map((v, idx) => (idx === i ? true : v)));
  }

  return (
    <div className="spk-slide spk-slide--flip">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-flip-layout">
        <div className="spk-flip-cards">
          {slide.cards.map((c, i) => (
            <div
              key={i}
              className={`spk-flip-card ${flipped[i] ? "is-flipped" : ""}`}
              onClick={() => flip(i)}
              role="button"
              tabIndex={0}
            >
              <div className="spk-flip-card-inner">
                <div className="spk-flip-face spk-flip-face--front">
                  <span className="spk-flip-ribbon-v" />
                  <span className="spk-flip-ribbon-h" />
                  <span className="spk-flip-sparkle spk-flip-sparkle--a"><SparkIcon name="star" size={16} /></span>
                  <span className="spk-flip-number">{c.number}</span>
                  <span className="spk-flip-sparkle spk-flip-sparkle--b"><SparkIcon name="star" size={12} /></span>
                </div>
                <div className="spk-flip-face spk-flip-face--back">
                  <SparkPicture name={c.icon} size={78} />
                  <button
                    type="button"
                    className="spk-flip-zoom-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomed(i);
                    }}
                  >
                    <SparkIcon name="magnifier" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="spk-flip-starters">
          {slide.starters.map((s, i) => (
            <span key={i} className="spk-guide-pill">{s}</span>
          ))}
        </div>
      </div>
      {zoomed !== null && (
        <div className="spk-zoom-overlay" onClick={() => setZoomed(null)}>
          <div className="spk-zoom-card" onClick={(e) => e.stopPropagation()}>
            <SparkPicture name={slide.cards[zoomed].icon} size={160} />
            <button type="button" className="spk-reveal-btn" onClick={() => setZoomed(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function SortSlide({ slide }) {
  const [placement, setPlacement] = useState({});

  function onDrop(e, box) {
    e.preventDefault();
    const idx = Number(e.dataTransfer.getData("text/plain"));
    setPlacement((p) => {
      const next = { ...p };
      if (box === "bank") delete next[idx];
      else next[idx] = box;
      return next;
    });
  }
  function onDragStart(e, idx) {
    e.dataTransfer.setData("text/plain", String(idx));
  }

  const allIdx = slide.items.map((_, i) => i);
  const bankIdx = allIdx.filter((i) => !placement[i]);
  const likeIdx = allIdx.filter((i) => placement[i] === "like");
  const dislikeIdx = allIdx.filter((i) => placement[i] === "dislike");

  function Chip({ i }) {
    return (
      <div className="spk-sort-chip" draggable onDragStart={(e) => onDragStart(e, i)}>
        <SparkPicture name={slide.items[i].icon} size={44} />
      </div>
    );
  }

  return (
    <div className="spk-slide spk-slide--sort">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <span className="spk-guide-pill">{slide.idStarter}</span>
      <div
        className="spk-sort-bank"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, "bank")}
      >
        {bankIdx.map((i) => <Chip key={i} i={i} />)}
      </div>
      <div className="spk-sort-boxes">
        <div className="spk-sort-box" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, "like")}>
          <span className="spk-sort-box-label">I Like</span>
          <div className="spk-sort-box-items">
            {likeIdx.map((i) => <Chip key={i} i={i} />)}
          </div>
          <span className="spk-sort-box-starter">{slide.likeStarter}</span>
        </div>
        <div className="spk-sort-box" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, "dislike")}>
          <span className="spk-sort-box-label">I Don&apos;t Like</span>
          <div className="spk-sort-box-items">
            {dislikeIdx.map((i) => <Chip key={i} i={i} />)}
          </div>
          <span className="spk-sort-box-starter">{slide.dislikeStarter}</span>
        </div>
      </div>
    </div>
  );
}

function MysterySlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div
        className="spk-mystery-box"
        onClick={() => revealed && setZoomed(true)}
        role={revealed ? "button" : undefined}
        tabIndex={revealed ? 0 : undefined}
      >
        {revealed ? <SparkPicture name={slide.icon} size={72} /> : <span className="spk-mystery-question">?</span>}
      </div>
      {!revealed && (
        <button type="button" className="spk-reveal-btn" onClick={() => setRevealed(true)}>
          Reveal
        </button>
      )}
      {revealed && (
        <button type="button" className="spk-reveal-btn" onClick={() => setZoomed(true)}>
          Zoom in
        </button>
      )}
      <span className="spk-guide-pill">{slide.starter}</span>
      {zoomed && (
        <div className="spk-zoom-overlay" onClick={() => setZoomed(false)}>
          <div className="spk-zoom-card" onClick={(e) => e.stopPropagation()}>
            <SparkPicture name={slide.icon} size={140} />
            <button type="button" className="spk-reveal-btn" onClick={() => setZoomed(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function FindShowSlide({ slide }) {
  const [starred, setStarred] = useState(false);
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-prompt-chips">
        {slide.prompts.map((p, i) => (
          <span key={i} className="spk-prompt-chip">{p}</span>
        ))}
      </div>
      <span className="spk-guide-pill">{slide.starter}</span>
      <button type="button" className={`spk-star-btn ${starred ? "is-starred" : ""}`} onClick={() => setStarred((s) => !s)}>
        <SparkIcon name={starred ? "star" : "starOutline"} size={20} />
        {starred ? "Great job!" : "Give a star"}
      </button>
    </div>
  );
}

function FeedbackSlide({ slide }) {
  return (
    <div className="spk-slide spk-slide--feedback">
      <SparkPicture name="trophy" size={72} />
      <div className="spk-child-lines">
        {slide.childText.map((line, i) => (
          <p key={i} className="spk-child-line">{line}</p>
        ))}
      </div>
    </div>
  );
}

const STAGE_LABELS = {
  cover: "Cover",
  question: "Warm-up",
  flipcards: "Flip Cards",
  sort: "Sort",
  mystery: "Mystery Box",
  findshow: "Find & Show",
  feedback: "Feedback",
};

function stageLabel(slide) {
  return STAGE_LABELS[slide.kind] || "Activity";
}

function renderSlide(slide, lesson) {
  switch (slide.kind) {
    case "cover": return <CoverSlide lesson={lesson} />;
    case "question": return <QuestionSlide slide={slide} />;
    case "flipcards": return <FlipCardsSlide slide={slide} />;
    case "sort": return <SortSlide slide={slide} />;
    case "mystery": return <MysterySlide slide={slide} />;
    case "findshow": return <FindShowSlide slide={slide} />;
    case "feedback": return <FeedbackSlide slide={slide} />;
    default: return <RegularSlide slide={slide} />;
  }
}

export default function Spark() {
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
      <div className="spk-shell">
        <style>{CSS}</style>
        <div className="spk-stage">
          <p className="spk-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = [{ kind: "cover" }, ...QUESTION_SLIDES, ...lesson.slides];
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  return (
    <div className="spk-shell">
      <style>{CSS}</style>
      <header className="spk-topbar">
        <span className="spk-topbar-title">{lesson.code} · {lesson.title}</span>
      </header>

      <div className="spk-stage">
        <div className="spk-deck">
          <div className="spk-deck-header">
            <span className="spk-brand"><img src="/logo-sentivo.png" alt="" className="spk-brand-logo" />entenco</span>
            <span className="spk-stage-label">{stageLabel(slide)}</span>
          </div>
          <div className="spk-deck-body" key={slideIdx}>
            {renderSlide(slide, lesson)}
          </div>
          <div className="spk-nav-row">
            <button type="button" className="spk-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="spk-nav-dots">
              {slides.map((_, i) => (
                <span key={i} className={`spk-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spk-nav-btn spk-nav-btn--primary"
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

.spk-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFFBEA 0%, #FFF0BE 55%, #FFE28A 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spk-shell * { box-sizing: border-box; }

.spk-topbar {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 24px 0;
  flex-shrink: 0;
}
.spk-topbar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A3B12;
  text-align: center;
}

.spk-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spk-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px 24px;
  min-height: 0;
}

.spk-deck {
  position: relative;
  width: 1080px;
  max-width: 100%;
  height: 100%;
  max-height: 620px;
  background: #FFFFFF;
  border: 1px solid #FFE28A;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(180,140,0,0.16);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.spk-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 32px;
  background: #FFFFFF;
  border-bottom: 1px solid #FFE28A;
  flex-shrink: 0;
}
.spk-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #4A3B12;
}
.spk-brand-logo { height: 22px; width: auto; display: block; margin-right: -4px; }

.spk-stage-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C98A00;
  white-space: nowrap;
  flex-shrink: 0;
}

.spk-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; padding: 26px 48px; }

.spk-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 18px;
  width: 100%;
  margin: auto;
}

.spk-slide-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #4A3B12;
  margin: 0;
}

.spk-guide-block { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.spk-guide-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #C98A00;
}
.spk-guide-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 760px; }
.spk-guide-pill {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #4A3B12;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 999px;
  padding: 10px 22px;
}

.spk-scene-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
.spk-scene-icon {
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background: #FFF9E5;
  border: 2px solid #FFE28A;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spk-prompt-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 640px; }
.spk-prompt-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #C98A00;
  background: #FFF9E5;
  border: 1px solid #FFE28A;
  border-radius: 999px;
  padding: 8px 16px;
}

/* Cover */
.spk-slide--cover { gap: 12px; }
.spk-cover-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 54px; color: #4A3B12; margin: 0; }
.spk-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #C98A00;
}
.spk-cover-length { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: #8A7233; }

/* Question */
.spk-slide--question { gap: 24px; }
.spk-question-prompt { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 38px; color: #4A3B12; margin: 0; max-width: 780px; }
.spk-reveal-btn {
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

/* Flip cards */
.spk-flip-layout { display: flex; flex-direction: column; align-items: center; gap: 22px; width: 100%; }
.spk-flip-cards { display: flex; flex-wrap: wrap; gap: 18px; max-width: 800px; justify-content: center; }
.spk-flip-card { width: 132px; height: 168px; cursor: pointer; perspective: 1100px; }
.spk-flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.spk-flip-card:hover .spk-flip-card-inner { transform: translateY(-4px); }
.spk-flip-card.is-flipped:hover .spk-flip-card-inner { transform: rotateY(180deg) translateY(-4px); }
.spk-flip-card.is-flipped .spk-flip-card-inner { transform: rotateY(180deg); }
.spk-flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.spk-flip-face--front {
  background: linear-gradient(150deg, #FFD35C 0%, #FFB800 55%, #F5890A 100%);
  border: 3px solid #E8850A;
  box-shadow: 0 7px 0 #D97706, 0 16px 26px rgba(217,119,6,0.35);
  transition: box-shadow 0.2s ease;
  overflow: hidden;
}
.spk-flip-card:hover .spk-flip-face--front { box-shadow: 0 3px 0 #D97706, 0 10px 18px rgba(217,119,6,0.3); }
.spk-flip-ribbon-v {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 26%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #FFF8E6 0%, #FFE9B8 100%);
  box-shadow: inset 0 0 0 1px rgba(217,119,6,0.15);
}
.spk-flip-ribbon-h {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 26%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #FFF8E6 0%, #FFE9B8 100%);
  box-shadow: inset 0 0 0 1px rgba(217,119,6,0.15);
}
.spk-flip-number {
  position: relative;
  z-index: 1;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 46px;
  color: #FFFFFF;
  text-shadow: 0 3px 0 rgba(180,90,0,0.4);
}
.spk-flip-sparkle { position: absolute; z-index: 1; opacity: 0.85; }
.spk-flip-sparkle--a { top: 10px; right: 12px; }
.spk-flip-sparkle--b { bottom: 12px; left: 12px; }
.spk-flip-face--back {
  background: linear-gradient(165deg, #FFFDF6 0%, #FFF3D0 100%);
  border: 3px solid #FFDD7A;
  box-shadow: 0 10px 20px rgba(180,140,0,0.16);
  transform: rotateY(180deg);
  position: relative;
}
.spk-flip-zoom-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid #FFDD7A;
  background: #FFFFFF;
  box-shadow: 0 2px 6px rgba(180,140,0,0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.spk-flip-starters { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }

.spk-zoom-overlay {
  position: absolute;
  inset: 0;
  background: rgba(74,59,18,0.45);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.spk-zoom-card {
  background: #FFFFFF;
  border: 3px solid #FFDD7A;
  border-radius: 20px;
  padding: 28px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

/* Sort */
.spk-slide--sort { gap: 14px; }
.spk-sort-bank {
  min-height: 74px;
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 10px;
  border: 2px dashed #FFDD7A;
  border-radius: 14px;
  padding: 10px;
}
.spk-sort-chip {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}
.spk-sort-boxes { display: flex; gap: 20px; width: 100%; max-width: 640px; justify-content: center; }
.spk-sort-box {
  flex: 1;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #FFF9E5;
  border: 2px solid #FFE28A;
  border-radius: 14px;
  padding: 14px;
}
.spk-sort-box-label { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 22px; color: #4A3B12; }
.spk-sort-box-items { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; min-height: 60px; }
.spk-sort-box-starter { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 16px; color: #C98A00; }

/* Mystery */
.spk-mystery-box {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: #FFF3D0;
  border: 3px dashed #FFDD7A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.spk-mystery-question { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 56px; color: #FFB800; }

/* Find and show */
.spk-star-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #C98A00;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.spk-star-btn.is-starred { background: #FFB800; color: #FFFFFF; border-color: #E09E00; }

/* Feedback slide */
.spk-slide--feedback { gap: 14px; }
.spk-child-lines { display: flex; flex-direction: column; gap: 4px; }
.spk-child-line {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #4A3B12;
  margin: 0;
}
/* Nav */
.spk-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 48px 20px; border-top: 1px solid #FFF3D0; flex-shrink: 0; }
.spk-nav-btn {
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
.spk-nav-btn--primary { background: #FFB800; color: #4A3B12; border-color: #FFB800; }
.spk-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spk-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.spk-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #FFE28A; }
.spk-nav-dot.is-active { width: 16px; background: #FFB800; }
`;
