import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./deriveTracks";

// DERIVE player: a real slide deck (Previous/Next navigation, not a live
// evolving card like Shift). One word family per lesson. Cover -> Word
// Family -> one gap-fill sentence slide per item (2 per form) -> End.
// The word bank is the teacher's click-to-mark input: the student says the
// answer out loud first, the teacher clicks whichever chip matches what
// they heard. Previous/Next are both always free to click.

function TopBar() {
  return (
    <div className="dv-brand">
      <img src="/logo-sentivo.png" alt="" className="dv-brand-logo" />
      <span className="dv-brand-name">entenco</span>
    </div>
  );
}

// Faint branching line-art in the corners, echoing the root->forms idea
// behind the deck. Purely decorative, matches Relay's BgDecor pattern.
function BgDecor() {
  return (
    <div className="dv-bg" aria-hidden="true">
      <svg className="dv-bg-item dv-bg-item--1" width="150" height="120" viewBox="0 0 150 120" fill="none">
        <path d="M10 100 L10 60 M10 60 L40 30 M10 60 L10 20 M10 60 L-20 40" stroke="#D6478C" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="10" cy="100" r="4" fill="#D6478C" />
        <circle cx="40" cy="30" r="4" fill="#D6478C" />
        <circle cx="10" cy="20" r="4" fill="#D6478C" />
      </svg>
      <svg className="dv-bg-item dv-bg-item--2" width="130" height="110" viewBox="0 0 130 110" fill="none">
        <path d="M10 90 L10 55 M10 55 L38 25 M10 55 L10 15" stroke="#B23370" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="10" cy="90" r="4" fill="#B23370" />
        <circle cx="38" cy="25" r="4" fill="#B23370" />
      </svg>
    </div>
  );
}

function CoverSlide({ root }) {
  const label = root.charAt(0).toUpperCase() + root.slice(1);
  return (
    <div className="dv-cover">
      <p className="dv-cover-kicker">Word Family</p>
      <h2 className="dv-h dv-h--cover">{label}</h2>
      <p className="dv-cover-instruction">Choose the correct form to complete each sentence.</p>
    </div>
  );
}

function FamilySlide({ family }) {
  const [root, ...rest] = family;
  const n = rest.length;
  return (
    <div className="dv-fam-slide">
      <p className="dv-fam-label">Today's Family</p>
      <div className="dv-tree">
        <span className="dv-h dv-h--fam dv-tree-root">{root}</span>
        <svg className="dv-tree-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {rest.map((_, i) => {
            const y = n === 1 ? 50 : (i / (n - 1)) * 100;
            return (
              <path
                key={i}
                d={`M0 50 C 40 50, 40 ${y}, 100 ${y}`}
                stroke="#EBB8D4"
                strokeWidth="1.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>
        <div className="dv-tree-branches">
          {rest.map((w) => (
            <span key={w} className="dv-branch-chip">{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SentenceSlide({ sentence, family, slideNum, totalSentences }) {
  const [selected, setSelected] = useState(null);
  const [isRight, setIsRight] = useState(false);

  function pick(word) {
    if (isRight) return;
    setSelected(word);
    if (word === sentence.answer) {
      setIsRight(true);
    }
  }

  const [before, after] = sentence.text.split("___");

  return (
    <div className="dv-sent-slide">
      <p className="dv-sent-label">Sentence {slideNum} of {totalSentences}</p>
      <div className="dv-quote-card">
        <span className="dv-quote-mark" aria-hidden="true">&ldquo;</span>
        <p className="dv-sentence">
          {before}
        <span className={`dv-blank${isRight ? " filled" : ""}`}>{isRight ? sentence.answer : "    "}</span>
        {after}
        </p>
        <span className="dv-quote-mark dv-quote-mark--end" aria-hidden="true">&ldquo;</span>
      </div>
      <p className="dv-bank-label">Word Bank</p>
      <div className="dv-bank">
        {family.map((word) => {
          let cls = "dv-chip";
          if (word === selected) cls += isRight ? " is-correct" : " is-wrong";
          return (
            <button type="button" key={word} className={cls} onClick={() => pick(word)}>
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EndSlide({ family, onFinish }) {
  return (
    <div className="dv-end-slide">
      <div className="dv-end-badge" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="dv-h dv-h--end">Thanks for practicing. Goodbye!</h2>
      <div className="dv-end-family">
        {family.map((w) => <span key={w} className="dv-end-chip">{w}</span>)}
      </div>
      <button type="button" className="dv-btn" onClick={onFinish}>Finish</button>
    </div>
  );
}

export default function Derive() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);

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
      <div className="dv-shell">
        <style>{CSS}</style>
        <BgDecor />
        <div className="dv-stage">
          <p className="dv-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const { root, family, sentences } = lesson;
  const totalSlides = sentences.length + 3; // cover + family + sentences + end
  const isCover = slideIdx === 0;
  const isFamily = slideIdx === 1;
  const isEnd = slideIdx === totalSlides - 1;
  const isSentence = !isCover && !isFamily && !isEnd;
  const sentenceIdx = slideIdx - 2;

  const atStart = slideIdx === 0;
  const atEnd = slideIdx === totalSlides - 1;

  function goNext() {
    if (!atEnd) setSlideIdx((i) => i + 1);
  }
  function goPrev() {
    if (!atStart) setSlideIdx((i) => i - 1);
  }

  return (
    <div className="dv-shell">
      <style>{CSS}</style>
      <BgDecor />
      <div className="dv-stage">
        <div className="dv-panel">
          <div className="dv-header">
            <TopBar />
            <span className="dv-slide-count">{slideIdx + 1} / {totalSlides}</span>
          </div>

          <div className="dv-deck-body" key={slideIdx}>
            {isCover && <CoverSlide root={root} />}
            {isFamily && <FamilySlide family={family} />}
            {isSentence && (
              <SentenceSlide
                key={sentenceIdx}
                sentence={sentences[sentenceIdx]}
                family={family}
                slideNum={sentenceIdx + 1}
                totalSentences={sentences.length}
              />
            )}
            {isEnd && <EndSlide family={family} onFinish={() => window.close()} />}
          </div>

          <div className="dv-footer-nav">
            <button type="button" className="dv-bubble dv-bubble--prev" onClick={goPrev} disabled={atStart}>
              Previous
            </button>
            <span className="dv-dots">
              {Array.from({ length: totalSlides }, (_, i) => (
                <span key={i} className={`dv-dot${i < slideIdx ? " done" : i === slideIdx ? " current" : ""}`} />
              ))}
            </span>
            <button type="button" className="dv-bubble dv-bubble--next" onClick={goNext} disabled={atEnd}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

:root { color-scheme: light; }

.dv-shell {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #FDF3F8 0%, #FBE3EF 100%);
  color: #241422;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 1cm;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.dv-shell * { box-sizing: border-box; }

.dv-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.dv-bg-item { position: absolute; opacity: 0.14; }
.dv-bg-item--1 { top: 8%; left: 3%; }
.dv-bg-item--2 { bottom: 6%; right: 4%; transform: scaleX(-1); }

.dv-missing { text-align: center; color: #86677E; margin-top: 60px; }

.dv-stage { position: relative; z-index: 1; width: 100%; max-width: 780px; margin: 0 auto; }

.dv-panel {
  background: #FFFCF7; border-radius: 16px; overflow: hidden;
  border: 1px solid #F2DCE9;
  box-shadow: 0 30px 70px rgba(178,51,112,0.18), 0 2px 0 rgba(255,255,255,0.6) inset;
}

.dv-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 30px; border-bottom: 1px solid #F2DCE9; flex-shrink: 0; }
.dv-brand { display: flex; align-items: center; gap: 6px; }
.dv-brand-logo { height: 18px; width: auto; display: block; }
.dv-brand-name { font-weight: 800; font-size: 13px; color: #1B2A4A; }
.dv-slide-count { font-family: 'Inter', sans-serif; font-size: 10.5px; font-weight: 700; color: #B23370; background: #FBE0EE; border-radius: 999px; padding: 3px 10px; }

/* ---- Shared deck body: fixed min-height so every slide type renders at
   the same card size, matching Relay's tuned 260px value ---- */
.dv-deck-body { min-height: 260px; display: flex; align-items: center; justify-content: center; padding: 36px 34px 28px; }

/* ---- Highlighted heading, used on Cover / Word Family / End -- same
   gradient-pill treatment as Relay's .rl-h, in Derive's rose palette ---- */
.dv-h {
  display: inline-flex;
  align-items: center;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 26px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #D6478C 0%, #B23370 100%);
  border-radius: 12px;
  padding: 8px 22px;
  margin: 0;
  line-height: 1.25;
  box-shadow: 0 10px 22px rgba(178,51,112,0.32);
  text-wrap: balance;
}
.dv-h--cover { font-size: 36px; padding: 10px 28px; }
.dv-h--fam { font-size: 22px; padding: 9px 22px; }
.dv-h--end { font-size: 24px; padding: 9px 24px; }

/* ---- Cover ---- */
.dv-cover { text-align: center; width: 100%; }
.dv-cover-kicker { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #86677E; margin: 0 0 16px; }
.dv-cover-instruction { font-family: 'Fraunces', serif; font-style: italic; font-size: 14.5px; color: #5A6B92; margin: 18px 0 0; }

/* ---- Word Family: root -> branches diagram ---- */
.dv-fam-slide { text-align: center; width: 100%; }
.dv-fam-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #B23370; margin: 0 0 22px; }
.dv-tree { display: flex; align-items: center; justify-content: center; gap: 0; }
.dv-tree-root { flex-shrink: 0; }
.dv-tree-lines { width: 64px; height: 170px; flex-shrink: 0; }
.dv-tree-branches { display: flex; flex-direction: column; justify-content: space-between; gap: 10px; min-height: 170px; padding: 4px 0; }
.dv-branch-chip {
  font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #1B2A4A;
  background: #FFFFFF; border: 1.5px solid #F2DCE9; border-radius: 10px; padding: 9px 18px;
  box-shadow: 0 4px 10px rgba(178,51,112,0.08); text-align: left;
}

/* ---- Sentence + word bank ---- */
.dv-sent-slide { width: 100%; }
.dv-sent-label { font-size: 11px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #5A6B92; text-align: center; margin: 0 0 16px; }
.dv-quote-card {
  position: relative; background: #F6D9E9; border: 1px solid #EBB8D4; border-radius: 16px;
  padding: 26px 46px; margin: 0 auto 26px; max-width: 600px;
}
.dv-quote-mark { position: absolute; top: 4px; left: 16px; font-family: 'Fraunces', serif; font-size: 52px; color: #EBB8D4; line-height: 1; user-select: none; }
.dv-quote-mark--end { left: auto; right: 16px; top: auto; bottom: -10px; transform: rotate(180deg); }
.dv-sentence { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; line-height: 1.55; color: #1B2A4A; text-align: center; margin: 0; position: relative; z-index: 1; }
.dv-blank { display: inline-block; min-width: 100px; border-bottom: 2.5px dashed #D6478C; padding: 0 4px; }
.dv-blank.filled { border-bottom: 2.5px solid #2F9E58; font-weight: 700; color: #2F9E58; }

.dv-bank-label { font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #86677E; text-align: center; margin: 0 0 12px; }
.dv-bank { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.dv-chip {
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 15px; padding: 10px 20px; border-radius: 999px;
  background: #FFFFFF; border: 1.5px solid #EDE1DB; color: #1B2A4A; cursor: pointer;
}
.dv-chip.is-correct { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.dv-chip.is-wrong { border-color: #D6536D; color: #D6536D; }

/* ---- End ---- */
.dv-end-slide { text-align: center; width: 100%; }
.dv-end-badge {
  width: 46px; height: 46px; border-radius: 50%; margin: 0 auto 16px;
  background: linear-gradient(135deg, #2F9E58 0%, #227A43 100%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 10px 20px rgba(47,158,88,0.32);
}
.dv-end-family { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 22px 0; }
.dv-end-chip { font-family: 'Fraunces', serif; font-weight: 700; font-size: 13px; padding: 7px 15px; border-radius: 999px; background: #1B2A4A; color: #fff; }

.dv-btn { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 10px 22px; border: none; cursor: pointer; background: #1B2A4A; color: #fff; }

/* ---- Footer nav: bubble buttons, no arrows, depth via a solid drop
   edge plus a soft diffuse shadow, matching the approved mockup ---- */
.dv-footer-nav { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 16px 30px 20px; border-top: 1px solid #F2DCE9; }
.dv-bubble {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.01em;
  border: none; cursor: pointer; border-radius: 999px; padding: 11px 24px;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.dv-bubble--prev {
  color: #1B2A4A; background: #FFFFFF; border: 1.5px solid #F2DCE9;
  box-shadow: 0 3px 0 #F2DCE9, 0 8px 16px rgba(178,51,112,0.08);
}
.dv-bubble--prev:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 5px 0 #F2DCE9, 0 12px 20px rgba(178,51,112,0.12); }
.dv-bubble--next {
  color: #FFFFFF; background: linear-gradient(135deg, #D6478C 0%, #B23370 100%);
  box-shadow: 0 3px 0 #8F2758, 0 10px 20px rgba(178,51,112,0.34);
}
.dv-bubble--next:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 5px 0 #8F2758, 0 14px 24px rgba(178,51,112,0.4); }
.dv-bubble:disabled { opacity: 0.4; cursor: default; transform: none; box-shadow: none; }
.dv-dots { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; justify-content: center; max-width: 400px; }
.dv-dot { width: 6px; height: 6px; border-radius: 50%; background: #EDE1DB; flex: none; }
.dv-dot.done { background: #2F9E58; }
.dv-dot.current { background: #1B2A4A; }
`;
