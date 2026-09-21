import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./sequenceTracks";

// SEQUENCE player, implementing the "Anchor and Expand" mechanic. The
// student sees the question and an abstract pattern-shape guide (slot
// names only, no content) -- never the answer, unless the teacher taps
// "Show hidden answer". The full answer, the spoken example, and the
// push script all live in SequenceGuide.jsx, never here.

function buildSlides(lesson) {
  const slides = [{ type: "cover" }];
  lesson.patterns.forEach((p, pi) => {
    if (!p.isCallback) slides.push({ type: "example", patternIdx: pi });
    p.questions.forEach((_, qi) => slides.push({ type: "question", patternIdx: pi, qIdx: qi }));
  });
  slides.push({ type: "capstone" });
  slides.push({ type: "wrap" });
  return slides;
}

function stageLabel(slide, lesson) {
  if (slide.type === "cover") return "Cover";
  if (slide.type === "capstone") return "Put It Together";
  if (slide.type === "wrap") return "Wrap-up";
  const p = lesson.patterns[slide.patternIdx];
  const pnum = slide.patternIdx + 1;
  if (slide.type === "example") return `Pattern ${pnum} · Example`;
  return `Pattern ${pnum} · ${p.isCallback ? "Callback" : "Q"}${slide.qIdx + 1}`;
}

function PartsList({ parts }) {
  return (
    <div className="sq-parts-list">
      {parts.map((part, i) => (
        <div className="sq-part-row" key={i}>
          <span className="sq-part-label">{part.label}</span>
          <span className="sq-part-text">{part.text}</span>
        </div>
      ))}
    </div>
  );
}

export default function Sequence() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const [answerRevealed, setAnswerRevealed] = useState(false);

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
      <div className="sq-shell">
        <style>{CSS}</style>
        <div className="sq-page">
          <p className="sq-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = buildSlides(lesson);
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  function goNext() { if (!isLast) { setSlideIdx((i) => i + 1); setAnswerRevealed(false); } }
  function goPrev() { if (!isFirst) { setSlideIdx((i) => i - 1); setAnswerRevealed(false); } }

  let nextLabel = "Next →";
  if (slide.type === "cover" || slide.type === "example") nextLabel = "Continue →";
  if (isLast) nextLabel = "Finish";

  return (
    <div className="sq-shell">
      <style>{CSS}</style>
      <div className="sq-page">
        <svg className="sq-bg-decor sq-bg-decor--tl" width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="30" cy="110" r="5" fill="#5C6BC0" opacity="0.35" />
          <circle cx="58" cy="82" r="5" fill="#5C6BC0" opacity="0.35" />
          <circle cx="90" cy="60" r="5" fill="#5C6BC0" opacity="0.35" />
          <circle cx="120" cy="34" r="5" fill="#5C6BC0" opacity="0.35" />
          <path d="M30 110 L58 82 L90 60 L120 34" stroke="#5C6BC0" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 10" opacity="0.35" />
        </svg>
        <svg className="sq-bg-decor sq-bg-decor--br" width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="20" cy="106" r="5" fill="#5C6BC0" opacity="0.3" />
          <circle cx="52" cy="78" r="5" fill="#5C6BC0" opacity="0.3" />
          <circle cx="84" cy="52" r="5" fill="#5C6BC0" opacity="0.3" />
          <circle cx="112" cy="24" r="5" fill="#5C6BC0" opacity="0.3" />
          <path d="M20 106 L52 78 L84 52 L112 24" stroke="#5C6BC0" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 10" opacity="0.3" />
        </svg>

        <div className="sq-deck">
          <div className="sq-deck-header">
            <div className="sq-brand"><span className="sq-brand-mark">S</span>entenco</div>
            <div className="sq-header-right">
              <span className="sq-stage-pill">{stageLabel(slide, lesson)}</span>
              <span className="sq-count-pill">Sequence</span>
            </div>
          </div>

          <div className="sq-deck-body">
            {slide.type === "cover" && (
              <div className="sq-slide" key={slideIdx}>
                <div className="sq-cover-crumb">Word Order Drill &rsaquo; {lesson.situation}</div>
                <div className="sq-cover-rule" />
                <h2 className="sq-cover-title sq-h">{lesson.situation}</h2>
              </div>
            )}

            {slide.type === "example" && (() => {
              const p = lesson.patterns[slide.patternIdx];
              return (
                <div className="sq-slide" key={slideIdx}>
                  <div className="sq-pattern-tag">Pattern {slide.patternIdx + 1}: {p.name}</div>
                  <div className="sq-slide-flag">Example</div>
                  <div className="sq-q-text sq-h">{p.example.q}</div>
                  <PartsList parts={p.example.parts} />
                </div>
              );
            })()}

            {slide.type === "question" && (() => {
              const p = lesson.patterns[slide.patternIdx];
              const item = p.questions[slide.qIdx];
              const isUnaided = slide.qIdx === p.questions.length - 1;
              return (
                <div className="sq-slide" key={slideIdx}>
                  <div className="sq-slide-flag">
                    Pattern {slide.patternIdx + 1}{p.isCallback ? " · Callback" : ""} &middot; Question {slide.qIdx + 1}{isUnaided ? " · Unaided" : ""}
                  </div>
                  <div className="sq-q-text sq-h">{item.q}</div>
                  {isUnaided ? (
                    <p className="sq-unaided-hint">No shape guide this time. Build it from memory.</p>
                  ) : (
                    <div className="sq-guide-row">
                      {p.slots.map((s, i) => (
                        <span key={s}>
                          {i > 0 && <span className="sq-guide-arrow">→</span>}
                          <span className="sq-guide-chip">{s}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  {answerRevealed ? (
                    <div className="sq-answer-block"><PartsList parts={item.parts} /></div>
                  ) : (
                    <button type="button" className="sq-reveal-btn" onClick={() => setAnswerRevealed(true)}>
                      Show hidden answer
                    </button>
                  )}
                </div>
              );
            })()}

            {slide.type === "capstone" && (
              <div className="sq-slide" key={slideIdx}>
                <div className="sq-slide-flag">Put It Together</div>
                <div className="sq-q-text sq-h">Tell me more about this: {lesson.situation}.</div>
                <p className="sq-capstone-hint">Speak freely, no shape guide. Try to naturally use pieces from both patterns you practiced today.</p>
              </div>
            )}

            {slide.type === "wrap" && (
              <div className="sq-slide" key={slideIdx}>
                <div className="sq-wrap-title">Great job today!</div>
                <div className="sq-wrap-sub">Thank you for practicing.</div>
                <button type="button" className="sq-close-btn" onClick={() => window.close()}>Close</button>
              </div>
            )}
          </div>

          <div className="sq-deck-footer">
            <button type="button" className="sq-nbtn sq-nbtn--prev" onClick={goPrev} disabled={isFirst}>← Previous</button>
            <div className="sq-dots">
              {slides.map((_, i) => (
                <span key={i} className={`sq-dot ${i === slideIdx ? "current" : i < slideIdx ? "done" : ""}`} />
              ))}
            </div>
            <button type="button" className="sq-nbtn sq-nbtn--primary" onClick={goNext} disabled={isLast}>{nextLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.sq-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #ECEEFA;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(92,107,192,0.14), transparent 30%),
    radial-gradient(circle at 96% 90%, rgba(92,107,192,0.10), transparent 34%),
    radial-gradient(rgba(38,42,74,0.06) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #F4F5FC 0%, #ECEEFA 100%);
  background-repeat: no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, 26px 26px, auto;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #262A4A;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1cm;
  box-sizing: border-box;
}
.sq-shell * { box-sizing: border-box; }

.sq-page { width: 100%; max-width: 460px; position: relative; }
.sq-bg-decor { position: absolute; pointer-events: none; z-index: 0; opacity: 0.5; }
.sq-bg-decor--tl { top: -6px; left: -46px; }
.sq-bg-decor--br { bottom: 10px; right: -46px; }

.sq-deck {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 24px 54px rgba(38,42,74,0.20), 0 4px 14px rgba(38,42,74,0.08);
  border: 1px solid rgba(92,107,192,0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.sq-deck-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; flex-shrink: 0; border-bottom: 1px solid #F0F1FB; }
.sq-brand { display: inline-flex; align-items: center; gap: 6px; font-weight: 800; font-size: 13.5px; color: #262A4A; }
.sq-brand-mark {
  width: 22px; height: 22px; border-radius: 7px;
  background: linear-gradient(135deg, #5C6BC0, #3F4C9E);
  color: #fff; display: flex; align-items: center; justify-content: center;
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 12px;
}
.sq-stage-pill { font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #3F4C9E; background: #E4E6F7; border-radius: 999px; padding: 4px 10px; }
.sq-count-pill { font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #262A4A; background: #F4F5FC; border-radius: 999px; padding: 4px 9px; margin-left: 6px; }
.sq-header-right { display: flex; align-items: center; }

.sq-missing { font-family: 'IBM Plex Sans', sans-serif; color: #6B70A0; text-align: center; margin-top: 60px; }

.sq-deck-body { min-height: 360px; display: flex; align-items: center; justify-content: center; padding: 28px 26px; overflow-y: auto; }
.sq-slide { width: 100%; text-align: center; animation: sqSlideIn 0.32s cubic-bezier(.25,.8,.3,1); }
@keyframes sqSlideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.sq-cover-crumb { font-weight: 700; font-size: 11.5px; color: #6B70A0; margin-bottom: 14px; }
.sq-cover-rule { width: 40px; height: 3px; background: #5C6BC0; border-radius: 3px; margin: 0 auto 16px; }

.sq-h {
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #5C6BC0, #3F4C9E);
  border-radius: 14px;
  box-shadow: 0 5px 14px rgba(63,76,158,0.28);
  line-height: 1.3;
}
.sq-cover-title.sq-h { font-size: 22px; padding: 12px 22px; margin: 0; }
.sq-q-text.sq-h { font-size: 16.5px; padding: 12px 18px; margin-bottom: 20px; max-width: 340px; }

.sq-pattern-tag {
  display: inline-block;
  font-weight: 800;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #3F4C9E;
  background: #fff;
  border: 1.5px solid #C9CDF0;
  border-radius: 999px;
  padding: 5px 13px;
  margin-bottom: 14px;
}
.sq-slide-flag { font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B70A0; margin-bottom: 8px; }

.sq-parts-list { display: flex; flex-direction: column; gap: 9px; text-align: left; }
.sq-part-row {
  display: flex; align-items: center; gap: 12px;
  background: linear-gradient(135deg, #FAFAFF 0%, #F0F1FB 100%);
  border: 1px solid #C9CDF0;
  box-shadow: 0 2px 8px rgba(38,42,74,0.05);
  border-radius: 14px; padding: 9px 14px;
  opacity: 0; transform: translateY(6px);
  animation: sqPartIn 0.4s cubic-bezier(.25,.8,.3,1) forwards;
}
.sq-part-row:nth-child(1) { animation-delay: 0.02s; }
.sq-part-row:nth-child(2) { animation-delay: 0.09s; }
.sq-part-row:nth-child(3) { animation-delay: 0.16s; }
.sq-part-row:nth-child(4) { animation-delay: 0.23s; }
@keyframes sqPartIn { to { opacity: 1; transform: translateY(0); } }
.sq-part-label {
  flex-shrink: 0; width: 68px; text-align: center;
  font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.03em;
  color: #fff; background: linear-gradient(135deg, #5C6BC0, #3F4C9E);
  box-shadow: 0 2px 6px rgba(63,76,158,0.25);
  border-radius: 999px; padding: 4px 0;
}
.sq-part-text { font-size: 13px; font-weight: 600; color: #262A4A; }

.sq-guide-row { display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: 18px; }
.sq-guide-chip {
  font-weight: 800; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.03em;
  color: #3F4C9E; background: #E4E6F7; border: 1.5px dashed #C9CDF0;
  border-radius: 999px; padding: 6px 13px;
}
.sq-guide-arrow { color: #6B70A0; font-size: 12px; margin: 0 6px; }

.sq-unaided-hint { font-size: 11.5px; font-weight: 700; font-style: italic; color: #6B70A0; margin: 0 0 18px; }
.sq-capstone-hint { font-size: 13px; font-weight: 600; color: #6B70A0; max-width: 320px; margin: 0 auto; line-height: 1.55; }

.sq-reveal-btn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11.5px;
  color: #3F4C9E; background: none; border: 1.5px solid #C9CDF0;
  border-radius: 999px; padding: 7px 16px; cursor: pointer;
  transition: transform 0.12s ease, border-color 0.15s ease;
}
.sq-reveal-btn:hover { border-color: #5C6BC0; transform: translateY(-1px); }
.sq-answer-block { margin-top: 14px; animation: sqBlockIn 0.3s ease; }
@keyframes sqBlockIn { from { opacity: 0; } to { opacity: 1; } }

.sq-wrap-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 22px; margin: 6px 0 4px; }
.sq-wrap-sub { font-size: 13px; color: #6B70A0; margin-bottom: 16px; }
.sq-close-btn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12.5px; color: #fff;
  background: linear-gradient(135deg, #5C6BC0, #3F4C9E); border: none; border-radius: 999px;
  padding: 9px 22px; cursor: pointer; box-shadow: 0 3px 0 #2E3A80;
}

.sq-deck-footer { display: flex; align-items: center; justify-content: space-between; padding: 14px 22px 20px; gap: 10px; flex-shrink: 0; }
.sq-nbtn { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12.5px; border: none; border-radius: 999px; padding: 10px 18px; cursor: pointer; transition: transform 0.12s ease; }
.sq-nbtn--prev { background: #fff; color: #3F4C9E; box-shadow: 0 3px 0 #DCDFF5, 0 6px 12px rgba(38,42,74,0.08); }
.sq-nbtn--prev:hover { transform: translateY(-2px); }
.sq-nbtn--primary { background: linear-gradient(135deg, #5C6BC0, #3F4C9E); color: #fff; box-shadow: 0 3px 0 #2E3A80, 0 6px 14px rgba(63,76,158,0.26); }
.sq-nbtn--primary:hover { transform: translateY(-2px); }
.sq-nbtn:disabled { opacity: 0.35; cursor: default; transform: none; box-shadow: none; }

.sq-dots { display: flex; gap: 5px; flex-wrap: wrap; justify-content: center; max-width: 160px; }
.sq-dot { width: 6px; height: 6px; border-radius: 50%; background: #C9CDF0; }
.sq-dot.done { background: #5C6BC0; }
.sq-dot.current { background: #3F4C9E; width: 14px; border-radius: 4px; }
`;
