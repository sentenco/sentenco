import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./sparkAdultsTracks";

const WHEEL_COLORS = ["#8B2E3F", "#C8863A", "#1F6F5C", "#3B5B8C", "#6B4226"];

const INTRO_SLIDE = {
  kind: "list",
  title: "Before we begin",
  instruction: "A few quick questions to get started.",
  items: ["Your name?", "Your age?", "Correct you while you speak, or after you finish?"],
  timing: "1 min",
  purpose: "Set the tone and learn the student's correction preference before the lesson begins.",
  teacherNote: "Respect whatever the student says for the rest of the trial — this isn't a language test, it's rapport and expectation-setting.",
};

function CoverSlide({ lesson, slide }) {
  return (
    <div className="spa-slide spa-slide--cover">
      <span className="spa-cover-series">SPARK Adults</span>
      <h1 className="spa-cover-title">{lesson.code.replace("SPARK Adults ", "Lesson ")}: {slide.title}</h1>
      <span className="spa-cover-length">{lesson.length}</span>
    </div>
  );
}

function ZoomableChips({ items, compact }) {
  const [zoomed, setZoomed] = useState(null);
  return (
    <>
      <div className={`spa-item-list ${compact ? "spa-item-list--compact" : ""}`}>
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            className={`spa-item-chip ${compact ? "spa-item-chip--muted" : ""}`}
            onClick={() => setZoomed(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {zoomed !== null && (
        <div className="spa-zoom-overlay" onClick={() => setZoomed(null)}>
          <div className="spa-zoom-card" onClick={(e) => e.stopPropagation()}>
            <span className="spa-zoom-text">{zoomed}</span>
            <button type="button" className="spa-zoom-close" onClick={() => setZoomed(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

function ListSlide({ slide }) {
  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <ZoomableChips items={slide.items} />
    </div>
  );
}

function wrapWheelLabel(text, maxLen = 13) {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (test.length > maxLen && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

const WHEEL_SIZE = 260;
const WHEEL_C = WHEEL_SIZE / 2;
const WHEEL_R = 115;

function wheelPolar(angleDeg, r) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [WHEEL_C + r * Math.cos(rad), WHEEL_C + r * Math.sin(rad)];
}

function WheelSlide({ slide }) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const options = slide.wheelOptions;
  const wedgeAngle = 360 / options.length;

  function spin() {
    if (spinning) return;
    const idx = Math.floor(Math.random() * options.length);
    const middle = idx * wedgeAngle + wedgeAngle / 2;
    const targetMod = ((360 - middle) % 360 + 360) % 360;
    const base = rotation - (((rotation % 360) + 360) % 360);
    const newRotation = base + 5 * 360 + targetMod;
    setSpinning(true);
    setResult(null);
    setZoomed(false);
    setRotation(newRotation);
    setTimeout(() => {
      setSpinning(false);
      setResult(options[idx]);
    }, 3200);
  }

  return (
    <div className="spa-slide spa-slide--wheel">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-wheel-area">
        <div className="spa-wheel-wrap-lg">
          <span className="spa-wheel-pointer-lg" />
          <svg
            className="spa-wheel-svg"
            viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? "transform 3.2s cubic-bezier(0.17,0.67,0.1,0.99)" : "none",
            }}
          >
            {options.map((opt, i) => {
              const start = i * wedgeAngle;
              const end = (i + 1) * wedgeAngle;
              const mid = start + wedgeAngle / 2;
              const [x1, y1] = wheelPolar(start, WHEEL_R);
              const [x2, y2] = wheelPolar(end, WHEEL_R);
              const largeArc = wedgeAngle > 180 ? 1 : 0;
              const lines = wrapWheelLabel(opt);
              const firstY = WHEEL_C - 98;
              return (
                <g key={i}>
                  <path
                    d={`M${WHEEL_C},${WHEEL_C} L${x1},${y1} A${WHEEL_R},${WHEEL_R} 0 ${largeArc} 1 ${x2},${y2} Z`}
                    fill={WHEEL_COLORS[i % WHEEL_COLORS.length]}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  />
                  <g transform={`rotate(${mid}, ${WHEEL_C}, ${WHEEL_C})`}>
                    <text x={WHEEL_C} y={firstY} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10.5" fill="#FFFFFF">
                      {lines.map((line, li) => (
                        <tspan key={li} x={WHEEL_C} dy={li === 0 ? 0 : 12}>{line}</tspan>
                      ))}
                    </text>
                  </g>
                </g>
              );
            })}
            <circle cx={WHEEL_C} cy={WHEEL_C} r="24" fill="#FFFFFF" stroke="#2A2621" strokeWidth="2.5" />
          </svg>
          <button type="button" className="spa-wheel-hub-lg" onClick={spin} disabled={spinning}>
            {spinning ? "…" : "Spin"}
          </button>
        </div>
        <div className="spa-wheel-result">
          {result ? (
            <button type="button" className="spa-wheel-result-btn" onClick={() => setZoomed(true)}>
              {result}
            </button>
          ) : (
            <p className="spa-wheel-result-placeholder">Spin to get a description.</p>
          )}
        </div>
      </div>
      <ZoomableChips items={slide.items} compact />
      {zoomed && (
        <div className="spa-zoom-overlay" onClick={() => setZoomed(false)}>
          <div className="spa-zoom-card" onClick={(e) => e.stopPropagation()}>
            <span className="spa-zoom-text">{result}</span>
            <button type="button" className="spa-zoom-close" onClick={() => setZoomed(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function BoardingPassSlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);

  function checkIn() {
    const dest = slide.destinations[Math.floor(Math.random() * slide.destinations.length)];
    setSelected(dest);
    setRevealed(true);
  }

  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-bp-perspective">
        <div className={`spa-bp-inner ${revealed ? "is-revealed" : ""}`}>
          <div className="spa-bp-face spa-bp-face--front">
            <span className="spa-bp-kicker">Boarding Pass</span>
            <span className="spa-bp-front-text">Tap to check in</span>
          </div>
          <div className="spa-bp-face spa-bp-face--back">
            <span className="spa-bp-kicker">Boarding Pass</span>
            {selected && (
              <>
                <span className="spa-bp-place">{selected.place}</span>
                <span className="spa-bp-tag">{selected.tag}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button type="button" className="spa-primary-btn" onClick={checkIn}>Check in</button>
    </div>
  );
}

function MenuSlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  const [chosen, setChosen] = useState(null);

  function reveal() {
    const dish = slide.mysteryOptions[Math.floor(Math.random() * slide.mysteryOptions.length)];
    setChosen(dish);
    setRevealed(true);
  }

  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-menu-card">
        {slide.dishes.map((d, i) => (
          <div key={i} className="spa-menu-row">{d}</div>
        ))}
        <div className="spa-menu-row spa-menu-row--mystery">
          {slide.revealHere ? (
            revealed ? <span>{chosen}</span> : <button type="button" className="spa-reveal-btn" onClick={reveal}>Reveal mystery dish</button>
          ) : (
            <span className="spa-menu-locked">Mystery dish (hidden)</span>
          )}
        </div>
      </div>
    </div>
  );
}

function FeedbackSlide() {
  return (
    <div className="spa-slide spa-slide--feedback">
      <h1 className="spa-feedback-word">Feedback</h1>
    </div>
  );
}

const STAGE_LABELS = {
  cover: "Cover",
  list: "Discussion",
  wheel: "Wheel",
  boardingpass: "Boarding Pass",
  menu: "Menu",
  feedback: "Feedback",
};

function stageLabel(slide) {
  return STAGE_LABELS[slide.kind] || "Activity";
}

function renderSlide(slide, lesson) {
  switch (slide.kind) {
    case "cover": return <CoverSlide lesson={lesson} slide={slide} />;
    case "wheel": return <WheelSlide slide={slide} />;
    case "boardingpass": return <BoardingPassSlide slide={slide} />;
    case "menu": return <MenuSlide slide={slide} />;
    case "feedback": return <FeedbackSlide />;
    default: return <ListSlide slide={slide} />;
  }
}

export default function SparkAdults() {
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
      <div className="spa-shell">
        <style>{CSS}</style>
        <div className="spa-stage">
          <p className="spa-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = [lesson.slides[0], INTRO_SLIDE, ...lesson.slides.slice(1)];
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  return (
    <div className="spa-shell">
      <style>{CSS}</style>
      <header className="spa-topbar">
        <span className="spa-topbar-title">{lesson.code}</span>
      </header>

      <div className="spa-stage">
        <div className="spa-deck">
          <div className="spa-deck-header">
            <span className="spa-brand"><img src="/logo-sentivo.png" alt="" className="spa-brand-logo" />entenco</span>
            <span className="spa-stage-label">{stageLabel(slide)}</span>
          </div>
          <div className="spa-deck-body" key={slideIdx}>
            {renderSlide(slide, lesson)}
          </div>
          <div className="spa-nav-row">
            <button type="button" className="spa-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              Previous
            </button>
            <div className="spa-nav-dots">
              {slides.map((_, i) => (
                <span key={i} className={`spa-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spa-nav-btn spa-nav-btn--primary"
              onClick={() => setSlideIdx((i) => i + 1)}
              disabled={isLast}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap');

.spa-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 12% -10%, #FDF6EA 0%, #F6DFB4 42%, #E5B478 78%, #D89A5C 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spa-shell * { box-sizing: border-box; }

.spa-topbar {
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 28px 0;
  flex-shrink: 0;
}
.spa-topbar-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #7A4A1F;
}

.spa-missing { font-family: 'Inter', sans-serif; color: #8B8171; text-align: center; margin-top: 60px; }

.spa-stage { flex: 1; width: 100%; display: flex; align-items: center; justify-content: center; padding: 20px 28px 28px; min-height: 0; }

.spa-deck {
  position: relative;
  width: 900px;
  max-width: 100%;
  height: 100%;
  max-height: 600px;
  background-color: #FFFFFF;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cpath d='M20 70 V30 H60' stroke='%23C8863A' stroke-opacity='0.18' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='20' cy='30' r='2.5' fill='%23C8863A' fill-opacity='0.2'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cpath d='M130 80 V120 H90' stroke='%23C8863A' stroke-opacity='0.18' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='130' cy='120' r='2.5' fill='%23C8863A' fill-opacity='0.2'/%3E%3C/svg%3E");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  background-size: 150px 150px, 150px 150px;
  border: 1px solid #EDD3A5;
  border-radius: 8px;
  box-shadow: 0 24px 60px rgba(139,60,20,0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.spa-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 32px;
  background: #FFFFFF;
  border-bottom: 1px solid #EDD3A5;
  flex-shrink: 0;
}
.spa-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 17px;
  color: #7A4A1F;
}
.spa-brand-logo { height: 22px; width: auto; display: block; margin-right: -4px; }

.spa-stage-label {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8B6A3F;
  white-space: nowrap;
  flex-shrink: 0;
}

.spa-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; padding: 48px 64px; }

.spa-slide { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 22px; width: 100%; margin: auto; }

.spa-slide-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 30px;
  color: #2A2621;
  margin: 0;
}
.spa-instruction {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #4A4438;
  margin: 0;
}

.spa-item-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 640px; }
.spa-item-list--compact { margin-top: 6px; }
.spa-item-chip {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #2A2621;
  background: linear-gradient(180deg, #FDF3DF 0%, #FAEACB 100%);
  border: 1px solid #E3BE7C;
  border-radius: 8px;
  padding: 9px 17px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.spa-item-chip:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(139,60,20,0.16); border-color: #C8863A; }
.spa-item-chip--muted { font-size: 13px; color: #8B6A3F; background: transparent; border-color: #E9D3A6; }
.spa-item-chip--muted:hover { background: #FDF3DF; }

/* Zoom overlay */
.spa-zoom-overlay {
  position: absolute;
  inset: 0;
  background: rgba(38,16,10,0.6);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.spa-zoom-card {
  max-width: 80%;
  background: linear-gradient(155deg, #8B2E3F 0%, #5C1F29 100%);
  border-radius: 14px;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 30px 70px rgba(30,10,10,0.4);
}
.spa-zoom-text {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 34px;
  color: #FBEFDB;
  line-height: 1.25;
}
.spa-zoom-close {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #F6DFB4;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(246,223,180,0.5);
  border-radius: 999px;
  padding: 7px 20px;
  cursor: pointer;
}

/* Cover */
.spa-slide--cover { gap: 16px; }
.spa-cover-series {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C8863A;
}
.spa-cover-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 40px;
  color: #2A2621;
  margin: 0;
  max-width: 700px;
}
.spa-cover-length {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #8B6A3F;
}

/* Feedback */
.spa-slide--feedback { gap: 0; }
.spa-feedback-word {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 48px;
  color: #2A2621;
  margin: 0;
}

/* Wheel */
.spa-wheel-area { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.spa-slide--wheel { gap: 12px; }
.spa-wheel-wrap-lg { position: relative; width: 260px; height: 260px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.spa-wheel-pointer-lg {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 18px solid #2A2621;
  z-index: 3;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
}
.spa-wheel-svg {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #FFFFFF, 0 0 0 5px #EDD3A5, 0 14px 30px rgba(139,60,20,0.26);
}
.spa-wheel-hub-lg {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 3px solid #2A2621;
  color: #2A2621;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  z-index: 2;
}
.spa-wheel-hub-lg:disabled { opacity: 0.6; cursor: default; }
.spa-wheel-result { min-height: 30px; }
.spa-wheel-result-btn {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 19px;
  color: #FFFFFF;
  background: #8B2E3F;
  border: none;
  border-radius: 999px;
  padding: 10px 24px;
  margin: 0;
  cursor: pointer;
}
.spa-wheel-result-placeholder { font-family: 'Inter', sans-serif; font-size: 13px; color: #8B8171; margin: 0; }

/* Boarding pass */
.spa-bp-perspective { width: 320px; height: 160px; perspective: 1200px; }
.spa-bp-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.spa-bp-inner.is-revealed { transform: rotateY(180deg); }
.spa-bp-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px solid #EDD3A5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
}
.spa-bp-face--front { background: linear-gradient(180deg, #FDF3DF 0%, #F6DFB4 100%); }
.spa-bp-face--back { background: linear-gradient(155deg, #3B1220 0%, #1C0B10 100%); transform: rotateY(180deg); border-color: #5C1F29; }
.spa-bp-kicker {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C8863A;
}
.spa-bp-front-text { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px; color: #8B6A3F; }
.spa-bp-place { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 26px; color: #FBEFDB; }
.spa-bp-tag {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #E8B87A;
  border: 1px solid #8B5A2F;
  border-radius: 999px;
  padding: 3px 12px;
}

.spa-primary-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  background: #8B2E3F;
  border: none;
  border-radius: 6px;
  padding: 11px 26px;
  cursor: pointer;
}

/* Menu */
.spa-menu-card {
  width: 100%;
  max-width: 380px;
  background: linear-gradient(180deg, #FDF3DF 0%, #FAEACB 100%);
  border: 1px solid #E3BE7C;
  border-radius: 8px;
  padding: 8px 22px;
  display: flex;
  flex-direction: column;
}
.spa-menu-row {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #2A2621;
  padding: 12px 0;
  border-bottom: 1px solid #E9D3A6;
}
.spa-menu-row:last-child { border-bottom: none; }
.spa-menu-row--mystery { display: flex; justify-content: center; }
.spa-menu-locked { font-style: italic; color: #8B6A3F; }
.spa-reveal-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #8B2E3F;
  background: transparent;
  border: 1px solid #8B2E3F;
  border-radius: 999px;
  padding: 6px 16px;
  cursor: pointer;
}

/* Nav */
.spa-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 20px 64px 48px; border-top: 1px solid #EDD3A5; flex-shrink: 0; }
.spa-nav-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2A2621;
  background: #FBEFDB;
  border: 1px solid #E3BE7C;
  border-radius: 6px;
  padding: 9px 18px;
  cursor: pointer;
}
.spa-nav-btn--primary { background: #8B2E3F; color: #FFFFFF; border-color: #8B2E3F; }
.spa-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spa-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 300px; }
.spa-nav-dot { width: 5px; height: 5px; border-radius: 999px; background: #E9D3A6; }
.spa-nav-dot.is-active { width: 16px; border-radius: 999px; background: #C8863A; }
`;
