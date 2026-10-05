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
      <img src="/logo-sentenco.png" alt="" className="fg-brand-logo" />
      <span className="fg-brand-name">entenco</span>
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
      <div className="fg-h fg-pc-word">{w.word}</div>
      <div className="fg-pc-rule" />
      <p className="fg-pc-question">{w.question}</p>
    </div>
  );
}

function StorytellingSlide({ lesson, usedWords, onToggle }) {
  return (
    <div className="fg-storytelling">
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
      <div className="fg-stage">
        <div className="fg-panel">
          <div className="fg-progress"><i style={{ width: `${((slideIdx + 1) / totalSlides) * 100}%` }} /></div>
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
  color: #14264A;
  font-family: 'IBM Plex Sans', sans-serif;
  box-sizing: border-box;
  padding: 1cm;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #F3F5FA;
}
.fg-shell * { box-sizing: border-box; }

.fg-missing { text-align: center; color: #6B7792; margin-top: 60px; }

.fg-stage { position: relative; z-index: 1; width: 100%; max-width: 780px; margin: 0 auto; }

.fg-panel {
  background: #fff; border-radius: 16px; overflow: hidden;
  border: 1px solid #E3E6EE;
  box-shadow: 0 24px 56px rgba(20,38,74,0.12);
}

.fg-progress { height: 5px; background: #E8ECF4; }
.fg-progress i { display: block; height: 5px; background: #FF5E45; border-radius: 0 3px 3px 0; transition: width 0.25s ease; }

.fg-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 28px; flex-shrink: 0; }
.fg-brand { display: inline-flex; align-items: center; font-weight: 700; font-size: 17px; letter-spacing: -0.01em; color: #14264A; }
.fg-brand-logo { height: 30px; width: auto; display: block; margin-right: -6px; }
.fg-stage-tag { font-weight: 800; font-size: 11px; letter-spacing: 0.09em; text-transform: uppercase; color: #FF5E45; }
.fg-count-pill { font-size: 11px; font-weight: 700; color: #14264A; background: #EEF1F8; border-radius: 999px; padding: 4px 12px; font-variant-numeric: tabular-nums; }

.fg-deck-body { min-height: 340px; display: flex; align-items: center; justify-content: center; padding: 28px 44px 36px; }

.fg-footer-nav { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 16px 28px; border-top: 1px solid #EEF1F8; }
.fg-navbtn {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 13px; border: none; cursor: pointer;
  border-radius: 999px; padding: 11px 26px; transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}
.fg-navbtn--prev { color: #6B7792; background: transparent; }
.fg-navbtn--prev:hover:not(:disabled) { color: #14264A; background: #F3F5FA; }
.fg-navbtn--next { color: #fff; background: #FF5E45; box-shadow: 0 3px 0 #C9432E; }
.fg-navbtn--next:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 5px 0 #C9432E; }
.fg-navbtn:disabled { opacity: 0.35; cursor: default; transform: none; box-shadow: none; }
.fg-navbtn:focus-visible { outline: 3px solid #14264A; outline-offset: 2px; }

/* ---- cover ---- */
.fg-cover { text-align: center; width: 100%; }
.fg-cover-path { display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 700; font-size: 11.5px; color: #6B7792; margin: 0 0 20px; }
.fg-sep { color: #FF5E45; }
.fg-cover-rule { width: 40px; height: 3px; border-radius: 2px; background: #FF5E45; margin: 0 auto 18px; }
.fg-cover-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 40px; color: #14264A; margin: 0 0 14px; text-wrap: balance; line-height: 1.15; }
.fg-cover-sub { font-size: 14px; color: #6B7792; margin: 0 auto; max-width: 400px; line-height: 1.55; }

/* ---- shared label + instruction ---- */
.fg-slide-label { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #FF5E45; display: block; text-align: center; margin: 0 0 18px; }
.fg-instruction { font-weight: 500; font-size: 16px; line-height: 1.6; color: #14264A; max-width: 480px; margin: 0 auto; text-align: center; }

/* ---- callback ---- */
.fg-callback { width: 100%; text-align: center; }
.fg-chiprow { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 24px 0 0; }
.fg-chip { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; background: #FAF7F5; border-left: 4px solid #FF5E45; border-radius: 0 10px 10px 0; padding: 8px 18px; color: #14264A; }

/* ---- word bank ---- */
.fg-wordintro { width: 100%; }
.fg-wordgrid { display: flex; flex-direction: column; gap: 12px; max-width: 520px; margin: 0 auto; width: 100%; }
.fg-wordcard { display: flex; align-items: center; gap: 14px; border-left: 4px solid #FF5E45; border-radius: 0 12px 12px 0; padding: 12px 18px; text-align: left; background: #FAF7F5; }
.fg-wnum { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: #14264A; color: #fff; font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; }
.fg-wbody { flex: 1; min-width: 0; }
.fg-w { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 24px; line-height: 1.1; color: #14264A; }
.fg-m { font-size: 13.5px; color: #4A5572; margin: 3px 0 2px; }
.fg-e { font-size: 13px; font-style: italic; color: #8892AA; }

/* ---- personal connection ---- */
.fg-pc { width: 100%; text-align: center; }
.fg-h.fg-pc-word { display: block; font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 56px; line-height: 1; color: #14264A; margin: 10px 0 14px; }
.fg-pc-rule { width: 38px; height: 3px; background: #FF5E45; border-radius: 2px; margin: 0 auto 20px; }
.fg-pc-question { font-weight: 500; font-size: 19px; color: #14264A; max-width: 460px; margin: 0 auto; line-height: 1.5; }

/* ---- storytelling ---- */
.fg-storytelling { width: 100%; text-align: center; }
.fg-checklist { display: flex; flex-wrap: wrap; gap: 9px; justify-content: center; margin-top: 26px; max-width: 480px; margin-inline: auto; }
.fg-cbox {
  display: flex; align-items: center; gap: 8px; font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 16px; color: #4A5572;
  background: #FAF7F5; border: none; border-left: 4px solid #D5DAE6; border-radius: 0 10px 10px 0; padding: 8px 18px; cursor: pointer;
  transition: all 0.12s ease;
}
.fg-cbox:hover { transform: translateY(-2px); }
.fg-cbox:focus-visible { outline: 3px solid #14264A; outline-offset: 2px; }
.fg-cdot { width: 8px; height: 8px; border-radius: 50%; background: #D5DAE6; flex: none; }
.fg-cbox.is-used { color: #1F7A4A; border-left-color: #2F9E58; background: #E6F5EC; }
.fg-cbox.is-used .fg-cdot { background: #2F9E58; }

/* ---- wrap ---- */
.fg-wrap { text-align: center; width: 100%; }
.fg-wrap-badge { width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 18px; background: #2F9E58; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(47,158,88,0.28); }
.fg-wrap-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 32px; color: #14264A; margin: 0 0 10px; }
.fg-wrap-line { font-size: 15px; color: #6B7792; max-width: 400px; margin: 0 auto; line-height: 1.6; }

@media (prefers-reduced-motion: reduce) {
  .fg-progress i, .fg-navbtn, .fg-cbox { transition: none; }
}
`;
