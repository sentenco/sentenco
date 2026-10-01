import { useState, useEffect, useRef, createContext, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./sparkTracks";
import SparkIcon from "./slides/SparkIcons";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import sparkTitleBg from "./assets/spark/title-bg.jpg";
import sparkRegularBg from "./assets/spark/regular-bg.jpg";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const EXTENSIONS = ["png", "svg"];

// Pictures can live deep inside transformed/flipped cards, where a
// locally-nested zoom overlay would get clipped or mispositioned. A
// single zoom overlay rendered once at the deck level (via context)
// sidesteps that entirely.
const ZoomContext = createContext(() => {});

function SparkPicture({ name, size = 64, zoomable = true }) {
  const [attempt, setAttempt] = useState(0);
  const openZoom = useContext(ZoomContext);
  if (!name) return null;
  if (attempt >= EXTENSIONS.length) {
    return (
      <div style={{ width: size, height: size }}>
        <ImagePlaceholder note={name} compact />
      </div>
    );
  }
  const src = `/spark-images/kids/${name}.${EXTENSIONS[attempt]}`;
  return (
    <img
      src={src}
      alt={name}
      onError={() => setAttempt((a) => a + 1)}
      onClick={zoomable ? (e) => { e.stopPropagation(); openZoom(src, name); } : undefined}
      style={{ width: size, height: size, objectFit: "contain", cursor: zoomable ? "zoom-in" : undefined }}
    />
  );
}

function ZoomOverlay({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="spk-zoom-overlay" onClick={onClose}>
      <div className="spk-zoom-card" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" className="spk-zoom-img" />
        <button type="button" className="spk-reveal-btn" onClick={onClose}>Close</button>
      </div>
    </div>
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
              <SparkPicture name={name} size="min(84px, 15vh, 18vw)" />
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
  const isText = slide.cardMode === "text";

  function flip(i) {
    if (flipped[i]) return;
    setFlipped((f) => f.map((v, idx) => (idx === i ? true : v)));
  }

  return (
    <div className="spk-slide spk-slide--flip">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-flip-layout">
        <div className={`spk-flip-cards ${isText ? "spk-flip-cards--text" : ""}`}>
          {slide.cards.map((c, i) => (
            <div
              key={i}
              className={`spk-flip-card ${isText ? "spk-flip-card--text" : ""} ${flipped[i] ? "is-flipped" : ""}`}
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
                  {isText ? (
                    <p className="spk-flip-sentence">{c.text}</p>
                  ) : (
                    <SparkPicture name={c.icon} size={56} />
                  )}
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
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-mystery-box">
        {revealed ? (
          slide.icon ? <SparkPicture name={slide.icon} size={72} /> : <span className="spk-mystery-text">{slide.revealText}</span>
        ) : (
          <span className="spk-mystery-question">?</span>
        )}
      </div>
      {!revealed && (
        <button type="button" className="spk-reveal-btn" onClick={() => setRevealed(true)}>
          Reveal
        </button>
      )}
      <span className="spk-guide-pill">{slide.starter}</span>
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

const WHEEL_COLORS = ["#FF6B4A", "#1B2A4A", "#FFB800", "#2E4269", "#FF8F6B", "#FFD36E"];

function WheelSlide({ slide }) {
  const n = slide.items.length;
  const seg = 360 / n;
  const R = 94;
  const [rot, setRot] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const pool = useRef([]);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  function spin() {
    if (spinning) return;
    if (pool.current.length === 0) pool.current = shuffle([...Array(n).keys()]);
    const idx = pool.current.pop();
    const target = 360 - (idx * seg + seg / 2);
    const cur = ((rot % 360) + 360) % 360;
    const delta = ((target - cur) + 360) % 360 + 360 * 4;
    setResult(null);
    setSpinning(true);
    setRot(rot + delta);
    timer.current = setTimeout(() => { setSpinning(false); setResult(idx); }, 2600);
  }

  const pt = (deg, r) => [100 + r * Math.sin((deg * Math.PI) / 180), 100 - r * Math.cos((deg * Math.PI) / 180)];
  const got = result !== null ? slide.items[result] : null;

  return (
    <div className="spk-slide spk-slide--wheel">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-wheel-row">
        <div className="spk-wheel-wrap">
          <svg className="spk-wheel-marker" viewBox="0 0 34 39" aria-hidden="true">
            <path d="M17 39 2.5 12.7A15.3 15.3 0 1 1 31.5 12.7Z" fill="#FF6B4A" stroke="#fff" strokeWidth="2.6" />
            <circle cx="17" cy="14.3" r="5.5" fill="#fff" />
          </svg>
          <svg
            viewBox="0 0 200 200"
            className="spk-wheel"
            style={{ transform: `rotate(${rot}deg)`, transition: spinning ? "transform 2.5s cubic-bezier(.12,.6,.12,1)" : "none" }}
          >
            {slide.items.map((it, i) => {
              const [x0, y0] = pt(i * seg, R);
              const [x1, y1] = pt((i + 1) * seg, R);
              const [tx, ty] = pt(i * seg + seg / 2, 62);
              return (
                <g key={i}>
                  <path d={`M100 100 L${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} Z`} fill={WHEEL_COLORS[i % WHEEL_COLORS.length]} stroke="#fff" strokeWidth="3.5" />
                  <text
                    x={tx}
                    y={ty}
                    transform={`rotate(${i * seg + seg / 2} ${tx} ${ty})`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="spk-wheel-text"
                  >
                    {it.wheel || it.label}
                  </text>
                </g>
              );
            })}
            <circle cx="100" cy="100" r="19" fill="#fff" />
            <circle cx="100" cy="100" r="19" fill="none" stroke="#1B2A4A" strokeWidth="3.5" />
            <circle cx="100" cy="100" r="8" fill="#FF6B4A" />
          </svg>
        </div>
        <div className="spk-wheel-panel">
          {got ? (
            <div className="spk-wheel-result">
              <SparkPicture name={got.icon} size={64} />
              <div className="spk-wheel-word">{got.label}</div>
              {slide.starter && <span className="spk-guide-pill">{slide.starter}</span>}
            </div>
          ) : (
            <div className="spk-wheel-prompt">{spinning ? "Round and round…" : (slide.question || "Spin the wheel!")}</div>
          )}
          <button type="button" className="spk-reveal-btn spk-reveal-btn--wheel" onClick={spin} disabled={spinning}>
            {result === null && !spinning ? "Spin!" : "Spin again"}
          </button>
        </div>
      </div>
    </div>
  );
}

function WriteSlide({ slide }) {
  const [done, setDone] = useState(false);
  return (
    <div className="spk-slide spk-slide--write">
      <h2 className="spk-slide-title">{slide.title}</h2>
      {slide.icon && <SparkPicture name={slide.icon} size="min(88px, 18vh, 22vw)" />}
      <span className="spk-write-word">{slide.word}</span>
      <div className="spk-write-lines" aria-hidden="true">
        <span className="spk-write-line" />
        <span className="spk-write-line" />
      </div>
      <p className="spk-write-instruction">{slide.instruction}</p>
      <button type="button" className={`spk-star-btn ${done ? "is-starred" : ""}`} onClick={() => setDone((d) => !d)}>
        <SparkIcon name={done ? "star" : "starOutline"} size={20} />
        {done ? "Great writing!" : "I wrote it!"}
      </button>
    </div>
  );
}

function LetterSlide({ slide }) {
  return (
    <div className="spk-slide spk-slide--letter">
      <span className="spk-big-letter">{slide.letter}</span>
      <SparkPicture name={slide.icon} size="min(128px, 26vh, 30vw)" />
      <span className="spk-letter-word">{slide.word}</span>
    </div>
  );
}

function IntroSlide({ slide }) {
  return (
    <div className="spk-slide spk-slide--intro">
      <h2 className="spk-slide-title">{slide.title}</h2>
      {slide.lead && <p className="spk-intro-lead">{slide.lead}</p>}
      {slide.steps && slide.steps.length > 0 && (
        <div className="spk-intro-steps">
          {slide.steps.map((s, i) => (
            <div key={i} className="spk-intro-step">
              <span className="spk-intro-step-num">{i + 1}</span>
              <span className="spk-intro-step-text">{s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const STAGE_LABELS = {
  cover: "Cover",
  intro: "Let's Begin",
  question: "Warm-up",
  flipcards: "Flip Cards",
  sort: "Sort",
  mystery: "Mystery Box",
  wheel: "Spin the Wheel",
  findshow: "Find & Show",
  write: "Writing Time",
  letter: "Letter Time",
  feedback: "Feedback",
};

function stageLabel(slide) {
  return STAGE_LABELS[slide.kind] || "Activity";
}

function renderSlide(slide, lesson) {
  switch (slide.kind) {
    case "cover": return <CoverSlide lesson={lesson} />;
    case "intro": return <IntroSlide slide={slide} />;
    case "question": return <QuestionSlide slide={slide} />;
    case "flipcards": return <FlipCardsSlide slide={slide} />;
    case "sort": return <SortSlide slide={slide} />;
    case "mystery": return <MysterySlide slide={slide} />;
    case "wheel": return <WheelSlide slide={slide} />;
    case "findshow": return <FindShowSlide slide={slide} />;
    case "write": return <WriteSlide slide={slide} />;
    case "letter": return <LetterSlide slide={slide} />;
    case "feedback": return <FeedbackSlide slide={slide} />;
    default: return <RegularSlide slide={slide} />;
  }
}

export default function Spark() {
  const { lessonId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const [zoomSrc, setZoomSrc] = useState(null);
  const lesson = getLesson(lessonId);
  const openZoom = (src) => setZoomSrc(src);

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

  const slides = [{ kind: "cover" }, ...(lesson.introSlides || []), ...QUESTION_SLIDES, ...lesson.slides];
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;
  const bgImage = slide.kind === "cover" ? sparkTitleBg : sparkRegularBg;

  return (
    <ZoomContext.Provider value={openZoom}>
      <div className="spk-shell">
        <style>{CSS}</style>
        <div className="spk-stage">
          <div className="spk-deck">
            <div className="spk-deck-art spk-deck-art--top">
              <img src={bgImage} alt="" className="spk-deck-art-img spk-deck-art-img--top" />
              <div className="spk-deck-header">
                <span className="spk-brand">
                  <img src="/logo-sentenco.png" alt="" className="spk-brand-logo" />
                  <span className="spk-brand-text">Sentenco</span>
                </span>
                <span className="spk-stage-label">{lesson.code} · {stageLabel(slide)}</span>
              </div>
            </div>
            <div className="spk-deck-body" key={slideIdx}>
              {slide.topInstruction && <p className="spk-top-instruction">{slide.topInstruction}</p>}
              {renderSlide(slide, lesson)}
            </div>
            <div className="spk-deck-art spk-deck-art--bottom">
              <img src={bgImage} alt="" className="spk-deck-art-img spk-deck-art-img--bottom" />
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
        <ZoomOverlay src={zoomSrc} onClose={() => setZoomSrc(null)} />
      </div>
    </ZoomContext.Provider>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.spk-shell {
  width: 100%;
  height: 100vh;
  background: #FEF6E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spk-shell * { box-sizing: border-box; }

.spk-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spk-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 0;
}

.spk-deck {
  position: relative;
  width: 1080px;
  max-width: 100%;
  height: 100%;
  max-height: 620px;
  background: #FEF6E6;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(27,42,74,0.22);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Fixed-aspect art bands (top and bottom) instead of a stretched cover
   image -- aspect-ratio keeps the same slice of the artwork visible at
   any deck width, so the header/footer never drift or show too much
   of the plain middle of the source image on a narrow deck. */
.spk-deck-art { position: relative; width: 100%; flex-shrink: 0; overflow: hidden; }
.spk-deck-art--top { aspect-ratio: 1920 / 210; }
.spk-deck-art--bottom { aspect-ratio: 1920 / 175; }
.spk-deck-art-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.spk-deck-art-img--top { object-position: top; }
.spk-deck-art-img--bottom { object-position: bottom; }

.spk-deck-header {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 clamp(10px, 2.2vw, 24px);
}
.spk-brand {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 999px;
  padding: clamp(3px, 1vh, 5px) clamp(8px, 2vw, 14px) clamp(3px, 1vh, 5px) clamp(4px, 1vw, 7px);
  box-shadow: 0 4px 10px rgba(27,42,74,0.2);
}
.spk-brand-logo { height: clamp(13px, 3.2vh, 20px); width: auto; display: block; }
.spk-brand-text { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(10px, 2.4vh, 14px); color: #1B2A4A; white-space: nowrap; }

.spk-stage-label {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(9px, 2.1vh, 12.5px);
  color: #1B2A4A;
  background: #FFFFFF;
  border-radius: 999px;
  padding: clamp(4px, 1.2vh, 7px) clamp(8px, 2vw, 16px);
  box-shadow: 0 4px 10px rgba(27,42,74,0.2);
  white-space: nowrap;
  flex-shrink: 0;
}

.spk-deck-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(6px, 1.6vh, 14px);
  padding: clamp(10px, 2vh, 20px) clamp(20px, 4vw, 48px);
}

.spk-top-instruction {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: clamp(12px, 2.4vh, 16px);
  color: #C98A00;
  background: #FFF3D0;
  border-radius: 999px;
  padding: clamp(5px, 1.2vh, 8px) clamp(14px, 3vw, 20px);
  margin: 0;
  text-align: center;
  flex-shrink: 0;
}

.spk-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: clamp(8px, 2vh, 18px);
  width: 100%;
  margin: auto;
  min-height: 0;
}

.spk-slide-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(22px, 5vh, 36px);
  line-height: 1.15;
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
  font-size: clamp(13px, 3.2vh, 22px);
  color: #4A3B12;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 999px;
  padding: clamp(6px, 1.6vh, 10px) clamp(12px, 3vw, 22px);
}

.spk-scene-row { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(8px, 2vw, 16px); }
.spk-scene-icon {
  width: min(100px, 18vh, 22vw);
  height: min(100px, 18vh, 22vw);
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
.spk-slide--flip .spk-slide-title { font-size: clamp(20px, 4.2vh, 34px); }
.spk-flip-layout { display: flex; flex-direction: column; align-items: center; gap: clamp(6px, 1.6vh, 22px); width: 100%; }
.spk-flip-cards { display: flex; flex-wrap: wrap; gap: clamp(6px, 1.8vmin, 18px); max-width: 800px; justify-content: center; }
.spk-flip-card { width: min(132px, 14vmin); height: min(168px, 18vmin); cursor: pointer; perspective: 1100px; }
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
  font-size: clamp(22px, 7vh, 46px);
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
  top: 6px;
  right: 6px;
  width: clamp(22px, 5vh, 32px);
  height: clamp(22px, 5vh, 32px);
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
.spk-flip-starters { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(6px, 1.6vh, 12px); }
.spk-flip-cards--text { max-width: 620px; }
.spk-flip-card--text { width: min(190px, 30vmin); height: min(126px, 20vmin); }
.spk-flip-sentence { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(13px, 3vh, 19px); color: #4A3B12; margin: 0; padding: 0 14px; text-align: center; line-height: 1.3; }

.spk-zoom-overlay {
  position: fixed;
  inset: 0;
  background: rgba(27,42,74,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: zoom-out;
}
.spk-zoom-card {
  background: #FFFFFF;
  border: 3px solid #FFDD7A;
  border-radius: 20px;
  padding: clamp(18px, 4vh, 28px) clamp(24px, 5vw, 36px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  max-width: 85vw;
  max-height: 85vh;
  cursor: default;
}
.spk-zoom-img { width: min(50vw, 50vh, 320px); height: min(50vw, 50vh, 320px); object-fit: contain; display: block; }

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
.spk-mystery-text { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 19px; color: #1B2A4A; text-align: center; padding: 0 12px; line-height: 1.25; }

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

/* Wheel */
.spk-slide--wheel { gap: clamp(6px, 1.6vh, 14px); }
.spk-slide--wheel .spk-slide-title { font-size: clamp(20px, 4vw, 34px); line-height: 1.15; }
.spk-wheel-row { display: flex; align-items: center; justify-content: center; gap: clamp(10px, 3vw, 36px); flex-wrap: nowrap; width: 100%; }
.spk-wheel-wrap { position: relative; width: min(200px, 32vw, 28vh); height: min(200px, 32vw, 28vh); flex-shrink: 0; }
.spk-wheel-marker { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 24px; height: 27px; z-index: 2; }
.spk-wheel { width: 100%; height: 100%; display: block; filter: drop-shadow(0 10px 20px rgba(27,42,74,0.25)); }
.spk-wheel-text { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 15px; fill: #FFFFFF; }
.spk-wheel-panel { display: flex; flex-direction: column; align-items: center; gap: clamp(6px, 1.4vh, 14px); min-width: 0; flex: 1; }
.spk-wheel-prompt { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: clamp(14px, 3vw, 20px); color: #4A3B12; text-align: center; }
.spk-wheel-result { display: flex; flex-direction: column; align-items: center; gap: clamp(4px, 1vh, 10px); }
.spk-wheel-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(16px, 3.4vw, 24px); color: #1B2A4A; text-align: center; line-height: 1.25; }
.spk-reveal-btn--wheel {
  color: #FFFFFF;
  background: #FF6B4A;
  border: 2px solid #E85A3A;
  font-size: clamp(12px, 2.6vw, 15px);
  padding: clamp(8px, 1.6vh, 12px) clamp(16px, 4vw, 28px);
}

/* Intro */
.spk-slide--intro { gap: clamp(6px, 1.6vh, 20px); max-width: 640px; }
.spk-slide--intro .spk-slide-title { font-size: clamp(22px, 4.5vh, 36px); }
.spk-intro-lead { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: clamp(13px, 2.2vh, 19px); color: #6B5520; margin: 0; max-width: 560px; }
.spk-intro-steps { display: flex; flex-direction: column; gap: clamp(5px, 1vh, 10px); width: 100%; max-width: 460px; }
.spk-intro-step {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #FFF9E5;
  border: 2px solid #FFE28A;
  border-radius: 12px;
  padding: clamp(5px, 1.1vh, 12px) 16px;
  text-align: left;
}
.spk-intro-step-num {
  flex-shrink: 0;
  width: clamp(20px, 3.2vh, 28px);
  height: clamp(20px, 3.2vh, 28px);
  border-radius: 50%;
  background: #FF6B4A;
  color: #FFFFFF;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(11px, 1.8vh, 14px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.spk-intro-step-text { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: clamp(13px, 2.1vh, 18px); color: #4A3B12; }

/* Write */
.spk-slide--write { gap: clamp(4px, 1vh, 10px); }
.spk-write-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(32px, 8vh, 56px); color: #1B2A4A; letter-spacing: 0.02em; }
.spk-write-lines { display: flex; flex-direction: column; gap: clamp(5px, 1.2vh, 10px); width: min(220px, 50vw); margin: 2px 0; }
.spk-write-line { height: 2px; background: #FFDD7A; border-radius: 2px; }

/* Letter (one letter + one picture per slide) */
.spk-slide--letter { gap: clamp(6px, 1.6vh, 16px); }
.spk-big-letter {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(60px, 18vh, 140px);
  line-height: 1;
  color: #FF6B4A;
  text-shadow: 0 4px 0 rgba(27,42,74,0.14);
}
.spk-letter-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(20px, 4.4vh, 32px); color: #4A3B12; }
.spk-write-instruction { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 16px; color: #8A7233; margin: 0; }

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
.spk-nav-row {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 clamp(10px, 2.2vw, 24px);
}
.spk-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: clamp(11px, 2.4vh, 14px);
  color: #4A3B12;
  background: #FFF3D0;
  border: 1px solid #FFDD7A;
  border-radius: 999px;
  padding: clamp(5px, 1.4vh, 8px) clamp(10px, 2.6vw, 16px);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}
.spk-nav-btn--primary { background: #FFB800; color: #4A3B12; border-color: #FFB800; }
.spk-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spk-nav-dots { display: flex; flex-wrap: nowrap; justify-content: center; align-items: center; gap: 4px; max-width: 100%; overflow: hidden; flex: 1; }
.spk-nav-dot { width: clamp(4px, 1vh, 6px); height: clamp(4px, 1vh, 6px); border-radius: 999px; background: #FFE28A; flex-shrink: 0; }
.spk-nav-dot.is-active { width: 16px; background: #FFB800; }
`;
