import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./forgeTracks";

// FORGE player: a real slide deck (Previous/Next navigation). One category,
// one situation per lesson, drilled through Callback (lessons 2+ only) ->
// Word Bank -> Personal Connection (one question per word) -> Storytelling
// -> Wrap-up. Only what the student needs to see appears on a slide -- no
// "say this" teacher-script boxes; the teacher runs the deck directly.

function TopBar() {
  return (
    <div className="fg-brand">
      <img src="/logo-sentivo.png" alt="" className="fg-brand-logo" />
      <span className="fg-brand-name">entenco</span>
    </div>
  );
}

function BgDecor() {
  return (
    <div className="fg-sparks" aria-hidden="true">
      <svg className="fg-spark fg-spark--1" width="90" height="90" viewBox="0 0 90 90" fill="none">
        <path d="M45 45 L45 10" stroke="#E8544E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M45 45 L74 26" stroke="#E8544E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M45 45 L20 66" stroke="#E8544E" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="45" cy="10" r="3.5" fill="#E8544E" />
        <circle cx="74" cy="26" r="3.5" fill="#E8544E" />
        <circle cx="20" cy="66" r="3.5" fill="#E8544E" />
      </svg>
      <svg className="fg-spark fg-spark--2" width="76" height="76" viewBox="0 0 76 76" fill="none">
        <path d="M38 38 L38 8" stroke="#C93F3A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M38 38 L62 52" stroke="#C93F3A" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="38" cy="8" r="3" fill="#C93F3A" />
        <circle cx="62" cy="52" r="3" fill="#C93F3A" />
      </svg>
    </div>
  );
}

function StageChip({ children }) {
  return <span className="fg-slide-label">{children}</span>;
}

function CoverSlide({ lesson }) {
  return (
    <div className="fg-cover">
      <p className="fg-cover-path">
        {lesson.category}
        <span className="fg-sep">&rsaquo;</span>
        {lesson.situation}
        <span className="fg-sep">&rsaquo;</span>
        {lesson.words.length} words
      </p>
      <div className="fg-cover-rule"></div>
      <h2 className="fg-cover-title">{lesson.situation}</h2>
      <p className="fg-cover-sub">{lesson.words.length} words you'll actually need in this exact moment.</p>
    </div>
  );
}

function CallbackSlide({ lesson }) {
  const cb = lesson.callback;
  return (
    <div className="fg-callback">
      <StageChip>Callback Warm-up</StageChip>
      <p className="fg-instruction">Last lesson: {cb.fromSituation}. Use one of these words in a sentence.</p>
      <div className="fg-chiprow">
        {cb.words.map((w) => <span key={w} className="fg-chip">{w}</span>)}
      </div>
    </div>
  );
}

function WordIntroSlide({ words, startIndex }) {
  return (
    <div className="fg-wordintro">
      <StageChip>Today's Situation</StageChip>
      <div className="fg-wordgrid">
        {words.map((w, i) => (
          <div key={w.word} className="fg-wordcard">
            <span className="fg-wnum">{startIndex + i + 1}</span>
            <div className="fg-wbody">
              <div className="fg-w">{w.word}</div>
              <div className="fg-m">{w.meaning}</div>
              <div className="fg-e">&ldquo;{w.example}&rdquo;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonalConnectionSlide({ w }) {
  return (
    <div className="fg-pc">
      <StageChip>Personal Connection</StageChip>
      <div className="fg-h fg-pc-word">{w.word}</div>
      <p className="fg-pc-question">{w.question}</p>
    </div>
  );
}

function StorytellingSlide({ lesson, usedWords, onToggle }) {
  return (
    <div className="fg-storytelling">
      <StageChip>Word Bank Storytelling</StageChip>
      <p className="fg-instruction">{lesson.storytellingPrompt}</p>
      <div className="fg-checklist">
        {lesson.words.map((w) => {
          const on = usedWords.has(w.word);
          return (
            <button
              type="button"
              key={w.word}
              className={`fg-cbox${on ? " is-used" : ""}`}
              onClick={() => onToggle(w.word)}
            >
              <span className="fg-cdot" />{w.word}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WrapSlide() {
  return (
    <div className="fg-wrap">
      <div className="fg-wrap-badge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="fg-wrap-title">Great job today!</h2>
      <p className="fg-wrap-line">Thank you for practicing.</p>
    </div>
  );
}

function buildSlides(lesson) {
  const slides = [{ type: "cover" }];
  if (lesson.hasCallback) slides.push({ type: "callback" });
  for (let i = 0; i < lesson.words.length; i += 3) {
    slides.push({ type: "wordintro", startIndex: i, words: lesson.words.slice(i, i + 3) });
  }
  lesson.words.forEach((w) => slides.push({ type: "pc", word: w }));
  slides.push({ type: "storytelling" });
  slides.push({ type: "wrap" });
  return slides;
}

const STAGE_LABELS = {
  cover: "Cover",
  callback: "Callback",
  wordintro: "Word Bank",
  pc: "Personal Connection",
  storytelling: "Storytelling",
  wrap: "Wrap-up",
};

export default function Forge() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const [usedWords, setUsedWords] = useState(() => new Set());

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
      <div className="fg-shell">
        <style>{CSS}</style>
        <div className="fg-stage">
          <p className="fg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = buildSlides(lesson);
  const totalSlides = slides.length;
  const slide = slides[slideIdx];
  const atStart = slideIdx === 0;
  const atEnd = slideIdx === totalSlides - 1;

  function goNext() {
    if (!atEnd) setSlideIdx((i) => i + 1);
  }
  function goPrev() {
    if (!atStart) setSlideIdx((i) => i - 1);
  }
  function toggleWord(word) {
    setUsedWords((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word); else next.add(word);
      return next;
    });
  }

  return (
    <div className="fg-shell">
      <style>{CSS}</style>
      <BgDecor />
      <div className="fg-stage">
        <div className="fg-panel">
          <div className="fg-header">
            <TopBar />
            <span className="fg-stage-tag">{STAGE_LABELS[slide.type]}</span>
            <span className="fg-count-pill">{slideIdx + 1} / {totalSlides}</span>
          </div>

          <div className="fg-deck-body" key={slideIdx}>
            {slide.type === "cover" && <CoverSlide lesson={lesson} />}
            {slide.type === "callback" && <CallbackSlide lesson={lesson} />}
            {slide.type === "wordintro" && <WordIntroSlide words={slide.words} startIndex={slide.startIndex} />}
            {slide.type === "pc" && <PersonalConnectionSlide w={slide.word} />}
            {slide.type === "storytelling" && (
              <StorytellingSlide lesson={lesson} usedWords={usedWords} onToggle={toggleWord} />
            )}
            {slide.type === "wrap" && <WrapSlide />}
          </div>

          <div className="fg-footer-nav">
            <button type="button" className="fg-navbtn fg-navbtn--prev" onClick={goPrev} disabled={atStart}>
              ← Previous
            </button>
            <span className="fg-dots">
              {slides.map((_, i) => (
                <span key={i} className={`fg-dot${i < slideIdx ? " done" : i === slideIdx ? " current" : ""}`} />
              ))}
            </span>
            <button type="button" className="fg-navbtn fg-navbtn--next" onClick={goNext} disabled={atEnd}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap');

:root { color-scheme: light; }

.fg-shell {
  position: relative;
  width: 100%;
  min-height: 100vh;
  color: #3A2420;
  font-family: 'IBM Plex Sans', sans-serif;
  box-sizing: border-box;
  padding: 1cm;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #FDECEA;
  background-image:
    radial-gradient(circle at 8% 12%, rgba(232,84,78,0.16), transparent 32%),
    radial-gradient(circle at 94% 18%, rgba(232,84,78,0.10), transparent 30%),
    radial-gradient(rgba(58,36,32,0.05) 1.4px, transparent 1.4px),
    linear-gradient(160deg, #FFF6EE 0%, #FDECEA 100%);
  background-repeat: no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, 26px 26px, auto;
}
.fg-shell * { box-sizing: border-box; }

.fg-sparks { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.fg-spark { position: absolute; opacity: 0.5; }
.fg-spark--1 { top: 9%; left: 5%; transform: rotate(-8deg); }
.fg-spark--2 { bottom: 8%; right: 6%; transform: rotate(14deg); }

.fg-missing { text-align: center; color: #8A6A62; margin-top: 60px; }

.fg-stage { position: relative; z-index: 1; width: 100%; max-width: 780px; margin: 0 auto; }

.fg-panel {
  background: #FFFCF9; border-radius: 18px; overflow: hidden;
  border: 1px solid #F0E0DC;
  box-shadow: 0 34px 74px rgba(201,63,58,0.18), 0 2px 0 rgba(255,255,255,0.7) inset;
}

.fg-header { display: flex; align-items: center; justify-content: space-between; padding: 17px 30px; border-bottom: 1px solid #F0E0DC; flex-shrink: 0; }
.fg-brand { display: flex; align-items: center; gap: 6px; }
.fg-brand-logo { height: 18px; width: auto; display: block; }
.fg-brand-name { font-weight: 800; font-size: 13px; color: #3A2420; }
.fg-stage-tag { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.09em; text-transform: uppercase; color: #8A6A62; }
.fg-count-pill { font-family: 'IBM Plex Sans', sans-serif; font-size: 10.5px; font-weight: 700; color: #C93F3A; background: #FBE3E1; border-radius: 999px; padding: 4px 11px; }

.fg-deck-body { min-height: 340px; display: flex; align-items: center; justify-content: center; padding: 40px 44px; }

.fg-footer-nav { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 17px 28px; border-top: 1px solid #F0E0DC; }
.fg-navbtn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 13px; border: none; cursor: pointer;
  border-radius: 999px; padding: 11px 24px; transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.fg-navbtn--prev { color: #3A2420; background: #fff; border: 1.5px solid #F0E0DC; box-shadow: 0 3px 0 #F0E0DC; }
.fg-navbtn--prev:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 5px 0 #F0E0DC; }
.fg-navbtn--next { color: #fff; background: linear-gradient(135deg, #E8544E 0%, #C93F3A 100%); box-shadow: 0 3px 0 #8f2a26, 0 10px 20px rgba(201,63,58,0.32); }
.fg-navbtn--next:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 5px 0 #8f2a26, 0 14px 24px rgba(201,63,58,0.38); }
.fg-navbtn:disabled { opacity: 0.35; cursor: default; transform: none; box-shadow: none; }
.fg-dots { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; justify-content: center; max-width: 280px; }
.fg-dot { width: 6px; height: 6px; border-radius: 50%; background: #F0E0DC; flex: none; }
.fg-dot.done { background: #2F9E58; }
.fg-dot.current { background: #C93F3A; width: 15px; border-radius: 4px; }

.fg-h {
  display: inline-flex; align-items: center; font-family: 'Baloo 2', cursive; font-weight: 700; color: #fff;
  background: linear-gradient(135deg, #E8544E 0%, #C93F3A 100%); border-radius: 13px;
  box-shadow: 0 12px 24px rgba(201,63,58,0.32);
}

/* ---- cover ---- */
.fg-cover { text-align: center; width: 100%; }
.fg-cover-path { display: flex; align-items: center; justify-content: center; gap: 8px; font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11.5px; color: #8A6A62; margin: 0 0 20px; }
.fg-sep { color: #F3B9B3; }
.fg-cover-rule { width: 40px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, #E8544E 0%, #C93F3A 100%); margin: 0 auto 18px; }
.fg-cover-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 28px; color: #3A2420; margin: 0 0 14px; text-wrap: balance; line-height: 1.3; }
.fg-cover-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 13.5px; color: #8A6A62; margin: 0; max-width: 400px; margin-inline: auto; line-height: 1.55; }

/* ---- shared label + instruction ---- */
.fg-slide-label { font-size: 11px; font-weight: 800; letter-spacing: 0.07em; text-transform: uppercase; color: #C93F3A; display: block; text-align: center; margin: 0 0 20px; }
.fg-instruction { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 15.5px; line-height: 1.6; color: #3A2420; max-width: 480px; margin: 0 auto; text-align: center; }

/* ---- callback ---- */
.fg-callback { width: 100%; text-align: center; }
.fg-chiprow { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 24px 0 0; }
.fg-chip { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 15px; background: #fff; border: 1.5px solid #F0E0DC; border-radius: 999px; padding: 10px 22px; color: #3A2420; box-shadow: 0 4px 10px rgba(58,36,32,0.06); }

/* ---- word intro ---- */
.fg-wordintro { width: 100%; }
.fg-wordgrid { display: flex; flex-direction: column; gap: 12px; max-width: 480px; margin: 0 auto; width: 100%; }
.fg-wordcard { display: flex; align-items: center; gap: 14px; border: 1px solid #F0E0DC; border-radius: 13px; padding: 13px 18px; text-align: left; background: #fff; }
.fg-wnum { flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: #FBE3E1; color: #C93F3A; font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; }
.fg-wbody { flex: 1; min-width: 0; }
.fg-w { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #3A2420; }
.fg-m { font-size: 12.5px; color: #8A6A62; margin: 2px 0; }
.fg-e { font-size: 12px; font-style: italic; color: #B79890; }

/* ---- personal connection ---- */
.fg-pc { width: 100%; text-align: center; }
.fg-pc-word { font-size: 24px; padding: 10px 28px; margin: 0 0 24px; }
.fg-pc-question { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 17px; color: #3A2420; max-width: 440px; margin: 0 auto; line-height: 1.55; }

/* ---- storytelling ---- */
.fg-storytelling { width: 100%; text-align: center; }
.fg-checklist { display: flex; flex-wrap: wrap; gap: 9px; justify-content: center; margin-top: 26px; max-width: 460px; margin-inline: auto; }
.fg-cbox {
  display: flex; align-items: center; gap: 7px; font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 14px; color: #8A6A62;
  background: #fff; border: 1.5px solid #F0E0DC; border-radius: 999px; padding: 9px 17px; cursor: pointer;
  transition: all 0.12s ease; box-shadow: 0 4px 10px rgba(58,36,32,0.06);
}
.fg-cbox:hover { transform: translateY(-2px); }
.fg-cdot { width: 7px; height: 7px; border-radius: 50%; background: #F0E0DC; flex: none; }
.fg-cbox.is-used { color: #2F9E58; border-color: transparent; background: #E3F5EA; box-shadow: none; }
.fg-cbox.is-used .fg-cdot { background: #2F9E58; }

/* ---- wrap ---- */
.fg-wrap { text-align: center; width: 100%; }
.fg-wrap-badge { width: 54px; height: 54px; border-radius: 50%; margin: 0 auto 18px; background: linear-gradient(135deg, #2F9E58 0%, #227A43 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 22px rgba(47,158,88,0.32); }
.fg-wrap-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 25px; color: #3A2420; margin: 0 0 10px; }
.fg-wrap-line { font-size: 14.5px; color: #8A6A62; max-width: 400px; margin: 0 auto; line-height: 1.6; }
`;
