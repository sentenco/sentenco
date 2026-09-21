import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./bridgeTracks";

// BRIDGE player. The student sees only the question and a write-in box for
// the teacher to note what was actually said -- the filler phrase itself
// is never shown except through an optional, hidden-by-default reveal.
// Full phrase/question content lives in BridgeGuide.jsx.

function buildSlides(lesson) {
  const slides = [{ type: "cover" }];
  lesson.phrases.forEach((p, pi) => {
    p.questions.forEach((_, qi) => slides.push({ type: "question", phraseIdx: pi, qIdx: qi }));
  });
  slides.push({ type: "capstone" });
  slides.push({ type: "wrap" });
  return slides;
}

function stageLabel(slide) {
  if (slide.type === "cover") return "Cover";
  if (slide.type === "capstone") return "Capstone";
  if (slide.type === "wrap") return "Wrap-up";
  return `Round ${slide.phraseIdx + 1} · Q${slide.qIdx + 1}`;
}

export default function Bridge() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState({});

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
      <div className="br-shell">
        <style>{CSS}</style>
        <div className="br-page">
          <p className="br-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = buildSlides(lesson);
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  function goNext() { if (!isLast) { setSlideIdx((i) => i + 1); setRevealed(false); } }
  function goPrev() { if (!isFirst) { setSlideIdx((i) => i - 1); setRevealed(false); } }

  function answerKey(s) {
    return s.type === "capstone" ? "capstone" : `${s.phraseIdx}-${s.qIdx}`;
  }

  let nextLabel = "Next →";
  if (slide.type === "cover") nextLabel = "Continue →";
  if (isLast) nextLabel = "Finish";

  return (
    <div className="br-shell">
      <style>{CSS}</style>
      <div className="br-page">
        <svg className="br-bg-decor br-bg-decor--tl" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M10 100 Q40 60 60 60 T110 20" stroke="#4FAE7A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 10" opacity="0.35" />
        </svg>
        <svg className="br-bg-decor br-bg-decor--br" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M10 100 Q40 60 60 60 T110 20" stroke="#4FAE7A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 10" opacity="0.3" />
        </svg>

        <div className="br-deck">
          <div className="br-deck-header">
            <div className="br-brand"><img src="/logo-sentenco.png" alt="" className="br-brand-logo" />entenco</div>
            <div className="br-header-right">
              <span className="br-stage-pill">{stageLabel(slide)}</span>
              <span className="br-count-pill">Bridge</span>
            </div>
          </div>

          <div className="br-deck-body">
            {slide.type === "cover" && (
              <div className="br-slide" key={slideIdx}>
                <div className="br-cover-crumb">Filler Phrase Drill &rsaquo; {lesson.situation}</div>
                <div className="br-cover-rule" />
                <h2 className="br-cover-title br-h">{lesson.situation}</h2>
              </div>
            )}

            {slide.type === "question" && (() => {
              const p = lesson.phrases[slide.phraseIdx];
              const key = answerKey(slide);
              return (
                <div className="br-slide" key={slideIdx}>
                  <div className="br-slide-flag">Round {slide.phraseIdx + 1} &middot; Question {slide.qIdx + 1}</div>
                  <div className="br-q-text br-h">{p.questions[slide.qIdx]}</div>
                  <textarea
                    className="br-write-box"
                    placeholder="Write what the student said"
                    value={answers[key] || ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [key]: e.target.value }))}
                  />
                  {revealed ? (
                    <div className="br-phrase-block"><span className="br-phrase-chip">{p.text}</span></div>
                  ) : (
                    <button type="button" className="br-reveal-btn" onClick={() => setRevealed(true)}>
                      Show filler phrase
                    </button>
                  )}
                </div>
              );
            })()}

            {slide.type === "capstone" && (
              <div className="br-slide" key={slideIdx}>
                <span className="br-capstone-label">Capstone</span>
                <div className="br-q-text br-h">{lesson.capstone}</div>
                <p className="br-capstone-sub">Take your time. Use any of today's phrases as many times as you need. No notes, no reveal this time.</p>
                <textarea
                  className="br-write-box"
                  style={{ minHeight: 76 }}
                  placeholder="Write what the student said"
                  value={answers.capstone || ""}
                  onChange={(e) => setAnswers((a) => ({ ...a, capstone: e.target.value }))}
                />
              </div>
            )}

            {slide.type === "wrap" && (
              <div className="br-slide" key={slideIdx}>
                <div className="br-wrap-title">Great job today!</div>
                <div className="br-wrap-sub">Thank you for practicing.</div>
                <button type="button" className="br-close-btn" onClick={() => window.close()}>Close</button>
              </div>
            )}
          </div>

          <div className="br-deck-footer">
            <button type="button" className="br-nbtn br-nbtn--prev" onClick={goPrev} disabled={isFirst}>← Previous</button>
            <div className="br-dots">
              {slides.map((_, i) => (
                <span key={i} className={`br-dot ${i === slideIdx ? "current" : i < slideIdx ? "done" : ""}`} />
              ))}
            </div>
            <button type="button" className="br-nbtn br-nbtn--primary" onClick={goNext} disabled={isLast}>{nextLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.br-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #E9F7EF;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(79,174,122,0.16), transparent 30%),
    radial-gradient(circle at 96% 90%, rgba(79,174,122,0.10), transparent 34%),
    radial-gradient(rgba(16,100,107,0.06) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #F1FAF5 0%, #E9F7EF 100%);
  background-repeat: no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, 26px 26px, auto;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #10646B;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1cm;
  box-sizing: border-box;
}
.br-shell * { box-sizing: border-box; }

.br-page { width: 100%; max-width: 460px; position: relative; }
.br-bg-decor { position: absolute; pointer-events: none; z-index: 0; opacity: 0.5; }
.br-bg-decor--tl { top: -6px; left: -46px; }
.br-bg-decor--br { bottom: 10px; right: -46px; }

.br-deck {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 24px 54px rgba(16,100,107,0.18), 0 4px 14px rgba(16,100,107,0.08);
  border: 1px solid rgba(79,174,122,0.22);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.br-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.br-deck-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; flex-shrink: 0; border-bottom: 1px solid #F0FAF4; }
.br-brand { display: inline-flex; align-items: center; gap: 6px; font-weight: 800; font-size: 13.5px; color: #10646B; }
.br-brand-logo { height: 22px; width: auto; display: block; margin-right: -2px; }
.br-stage-pill { font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #368F5F; background: #E3F5EA; border-radius: 999px; padding: 4px 10px; }
.br-count-pill { font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #10646B; background: #F1FAF5; border-radius: 999px; padding: 4px 9px; margin-left: 6px; }
.br-header-right { display: flex; align-items: center; }

.br-deck-body { min-height: 400px; display: flex; align-items: center; justify-content: center; padding: 30px 26px; overflow-y: auto; }
.br-slide { width: 100%; text-align: center; animation: brSlideIn 0.32s cubic-bezier(.25,.8,.3,1); }
@keyframes brSlideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.br-cover-crumb { font-weight: 700; font-size: 11.5px; color: #4B8B92; margin-bottom: 14px; }
.br-cover-rule { width: 40px; height: 3px; background: #4FAE7A; border-radius: 3px; margin: 0 auto 16px; }

.br-h {
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #4FAE7A, #368F5F);
  border-radius: 14px;
  box-shadow: 0 5px 14px rgba(38,107,71,0.28);
  line-height: 1.3;
}
.br-cover-title.br-h { font-size: 22px; padding: 12px 22px; margin: 0; }
.br-q-text.br-h { font-size: 17px; padding: 14px 20px; margin-bottom: 20px; max-width: 340px; }

.br-slide-flag { font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #4B8B92; margin-bottom: 10px; }

.br-write-box {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 13px;
  color: #10646B;
  background: #fff;
  border: 1.5px dashed #C3E8D2;
  border-radius: 12px;
  padding: 10px 14px;
  resize: none;
  outline: none;
  min-height: 58px;
  display: block;
}
.br-write-box:focus { border-color: #4FAE7A; border-style: solid; }
.br-write-box::placeholder { color: #A9C9BA; }

.br-reveal-btn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11.5px;
  color: #368F5F; background: none; border: 1.5px solid #C3E8D2;
  border-radius: 999px; padding: 7px 16px; cursor: pointer; margin-top: 12px;
  transition: transform 0.12s ease, border-color 0.15s ease;
}
.br-reveal-btn:hover { border-color: #4FAE7A; transform: translateY(-1px); }
.br-phrase-block { margin-top: 12px; animation: brBlockIn 0.3s ease; }
@keyframes brBlockIn { from { opacity: 0; } to { opacity: 1; } }
.br-phrase-chip {
  display: inline-block; font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 14px;
  color: #368F5F; background: #E3F5EA; border: 1.5px solid #C3E8D2;
  border-radius: 12px; padding: 8px 16px;
}

.br-capstone-label { font-weight: 800; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #368F5F; background: #E3F5EA; border-radius: 999px; padding: 5px 14px; margin-bottom: 14px; display: inline-block; }
.br-capstone-sub { font-size: 12.5px; color: #4B8B92; max-width: 320px; margin: 0 auto 18px; line-height: 1.5; }

.br-wrap-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 22px; margin: 6px 0 4px; }
.br-wrap-sub { font-size: 13px; color: #4B8B92; margin-bottom: 16px; }
.br-close-btn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12.5px; color: #fff;
  background: linear-gradient(135deg, #4FAE7A, #368F5F); border: none; border-radius: 999px;
  padding: 9px 22px; cursor: pointer; box-shadow: 0 3px 0 #266B47;
}

.br-deck-footer { display: flex; align-items: center; justify-content: space-between; padding: 14px 22px 20px; gap: 10px; flex-shrink: 0; }
.br-nbtn { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 12.5px; border: none; border-radius: 999px; padding: 10px 18px; cursor: pointer; transition: transform 0.12s ease; }
.br-nbtn--prev { background: #fff; color: #368F5F; box-shadow: 0 3px 0 #D7EFE1, 0 6px 12px rgba(16,100,107,0.08); }
.br-nbtn--prev:hover { transform: translateY(-2px); }
.br-nbtn--primary { background: linear-gradient(135deg, #4FAE7A, #368F5F); color: #fff; box-shadow: 0 3px 0 #266B47, 0 6px 14px rgba(38,107,71,0.26); }
.br-nbtn--primary:hover { transform: translateY(-2px); }
.br-nbtn:disabled { opacity: 0.35; cursor: default; transform: none; box-shadow: none; }

.br-dots { display: flex; gap: 5px; flex-wrap: wrap; justify-content: center; max-width: 160px; }
.br-dot { width: 6px; height: 6px; border-radius: 50%; background: #C3E8D2; }
.br-dot.done { background: #4FAE7A; }
.br-dot.current { background: #368F5F; width: 14px; border-radius: 4px; }
`;
