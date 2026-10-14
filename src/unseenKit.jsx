import React, { useContext, useEffect, useState } from "react";
import { ScoreCtx, useStore, Marked, LETTERS, NAVY, CORAL, CORAL_DEEP, GREEN, RED } from "./e8Kit.jsx";

// Shared pieces for the Unseen Reading lessons (Part 2, 3, 4 ...).
// Each lesson: a title page, a plan, then for every text one page with the article and one page per question
// (pick an answer, press Check, see the right answer and a short explanation), then an end page.
// The slide is 3:2 so the new background pictures are not stretched.

export const U_W = 1120;
export const U_H = 747;

function useFitScale() {
  const calc = () => Math.min(1, (window.innerWidth - 24) / U_W, (window.innerHeight - 24) / U_H);
  const [scale, setScale] = useState(calc);
  useEffect(() => {
    const on = () => setScale(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return scale;
}

// slides: [{ stage, note, title?: true, body }]
export function UnseenPlayer({ slides: SLIDES, extraStyles = "" }) {
  const [i, setI] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [results, setResults] = useState({});
  const [store, setStore] = useState({});
  const scale = useFitScale();
  const total = SLIDES.length;
  const s = SLIDES[i];

  // Load both backgrounds up front so the first page of each kind never flashes without its picture.
  useEffect(() => {
    ["/curriculum/unseen/title-bg.jpg", "/curriculum/unseen/slide-bg.jpg"].forEach((src) => { const im = new Image(); im.src = src; });
  }, []);

  useEffect(() => {
    const styleId = "un-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles + extraStyles;
    document.head.appendChild(tag);
  }, []);

  const go = (d) => setI((cur) => Math.max(0, Math.min(total - 1, cur + d)));
  const report = (id, ok) => setResults((r) => (id in r ? r : { ...r, [id]: ok }));

  return (
    <ScoreCtx.Provider value={{ report, results, store, setStore }}>
      <div className="un-wrap">
        <div className="un-frame" style={{ width: U_W * scale, height: U_H * scale }}>
          <div className={`un-slide ${s.title ? "is-title" : ""}`} style={{ transform: `scale(${scale})` }}>
            <div className="un-brand-bubble">
              <img className="un-brand-logo" src="/logo-sentenco.png" alt="" />
              <span className="un-brand-word">entenco</span>
            </div>
            <div className="un-top">
              <div className="un-stage">{s.stage}</div>
              <div className="un-top-right">
                <button type="button" className={`un-tnotes ${showNotes ? "on" : ""}`} onClick={() => setShowNotes((v) => !v)}>Teacher notes</button>
                <button type="button" className="un-close" onClick={() => window.close()} aria-label="Close">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>
              </div>
            </div>
            <div className="un-body" key={i}>{s.body}</div>
            {showNotes && <div className="un-notes"><b>Teacher notes.</b> {s.note}</div>}
            <div className="un-nav-row">
              <button type="button" className={`un-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
              <div className="un-progress">
                {Array.from({ length: total }).map((_, idx) => <span key={idx} className={`un-dot ${idx === i ? "on" : ""}`} />)}
              </div>
              <button type="button" className="un-nav next" onClick={() => (i === total - 1 ? window.close() : go(1))}>
                {i === total - 1 ? "Finish Lesson" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScoreCtx.Provider>
  );
}

export function UCover({ title, module }) {
  return (
    <div className="un-cover">
      <h1 className="un-h1">{title}</h1>
      <div className="un-module">{module}</div>
    </div>
  );
}

export function UPlan({ goal, text, items }) {
  return (
    <div className="un-plan">
      <h2 className="un-h2">{goal}</h2>
      <p className="un-p">{text}</p>
      <div className="un-plan-list">
        {items.map(([k, d, t]) => (
          <div key={k} className="un-plan-item"><b>{k}</b><span>{d}</span><small>{t}</small></div>
        ))}
      </div>
    </div>
  );
}

// The article on its own page.
export function UText({ eyebrow, title, text }) {
  return (
    <div className="un-text">
      <span className="un-eyebrow">{eyebrow}</span>
      <h2 className="un-text-title">{title}</h2>
      <div className="un-text-card">
        {text.split("\n\n").map((para, k) => <p key={k}>{para}</p>)}
      </div>
    </div>
  );
}

// One question on its own page. Pick an answer, press Check, then the right answer and a short explanation appear.
export function UQuestion({ id, n, total, kind, prompt, options, correct, explain, textTitle, text, evidence }) {
  const { report } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("pick-" + id, null);
  const [checked, setChecked] = useStore("chk-" + id, false);
  const [showText, setShowText] = useState(false);
  const ok = picked === correct;

  function check() {
    if (picked === null || checked) return;
    setChecked(true);
    report(id, picked === correct);
  }

  return (
    <div className="un-q">
      <div className="un-q-head">
        <span className="un-eyebrow">Question {n} of {total} · {kind}</span>
        <button type="button" className="un-seetext" onClick={() => setShowText(true)}>See text</button>
      </div>
      <p className="un-prompt">{prompt}</p>
      <div className="un-options">
        {options.map((o, k) => {
          let cls = "";
          if (checked) cls = k === correct ? "is-correct" : k === picked ? "is-wrong" : "is-dim";
          else if (picked === k) cls = "is-picked";
          return (
            <button key={k} type="button" className={`un-opt ${cls}`} disabled={checked} onClick={() => setPicked(k)}>
              <span className="un-opt-letter">{LETTERS[k]}</span>
              <span>{o}</span>
            </button>
          );
        })}
      </div>
      <div className="un-q-foot">
        {!checked ? (
          <button type="button" className="un-check" disabled={picked === null} onClick={check}>Check answer</button>
        ) : (
          <div className={`un-why ${ok ? "is-ok" : "is-bad"}`}>
            <b>{ok ? "Correct." : `The answer is ${LETTERS[correct]}.`}</b> {explain}
          </div>
        )}
      </div>
      {showText && (
        <div className="un-overlay" role="dialog" aria-label="The text">
          <div className="un-overlay-card">
            <div className="un-overlay-head">
              <span className="un-overlay-title">{textTitle}</span>
              <button type="button" className="un-overlay-x" onClick={() => setShowText(false)}>Close</button>
            </div>
            <div className="un-overlay-text">
              {text.split("\n\n").map((para, k) => <p key={k}><Marked text={para} evidence={evidence} on={checked} /></p>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// The end page: the student finished, with the score.
export function UEnd({ title, ids, parts }) {
  const { results } = useContext(ScoreCtx);
  const got = ids.filter((id) => results[id] === true).length;
  return (
    <div className="un-end">
      <div className="un-end-badge" aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
      </div>
      <h2 className="un-end-h">You finished {title}</h2>
      <div className="un-score-total"><span>{got}</span><small>out of {ids.length}</small></div>
      <div className="un-score-tiles">
        {parts.map((p) => {
          const mine = p.ids;
          const g = mine.filter((id) => results[id] === true).length;
          const tried = mine.filter((id) => id in results).length;
          return (
            <div key={p.label} className={`un-score-tile ${tried === mine.length && g === mine.length ? "is-full" : ""}`}>
              <small>{p.label}</small><b>{tried === 0 ? "–" : `${g}/${mine.length}`}</b><span>{p.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

.un-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: ${NAVY}; font-family: 'Quicksand', sans-serif; padding: 12px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.un-wrap * { box-sizing: border-box; }
.un-frame { flex-shrink: 0; position: relative; }
.un-slide {
  position: absolute; top: 0; left: 0; width: ${U_W}px; height: ${U_H}px; transform-origin: top left; overflow: hidden;
  background: #FDF8EE url('/curriculum/unseen/slide-bg.jpg') center / 100% 100% no-repeat;
  border-radius: 18px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
}
.un-slide.is-title { background-image: url('/curriculum/unseen/title-bg.jpg'); }

/* the Sentenco tab hangs from the top-left corner, the same as the Ignite lessons */
.un-brand-bubble { position: absolute; top: 0; left: 30px; z-index: 3; display: flex; align-items: center; background: #FFF6EC; border-radius: 0 0 20px 20px; padding: 12px 20px 10px 10px; border-bottom: 5px solid ${CORAL}; box-shadow: 0 6px 12px rgba(10,18,40,0.25); }
.un-brand-logo { width: 48px; height: 48px; margin: -7px -11px -7px -6px; object-fit: contain; }
.un-brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 22px; color: ${NAVY}; }

/* header sits on the navy wave at the top of the picture */
.un-top { position: absolute; top: 12px; left: 0; right: 0; height: 30px; display: flex; align-items: center; justify-content: center; z-index: 3; }
.un-stage { background: rgba(255,255,255,0.16); color: #fff; font-weight: 700; font-size: 12.5px; letter-spacing: 0.02em; padding: 5px 16px; border-radius: 999px; white-space: nowrap; }
/* Teacher notes and Close sit in the cream strip under the top wave, where they stay readable */
.un-top-right { position: absolute; right: 108px; top: 84px; display: flex; align-items: center; gap: 8px; z-index: 3; }
.un-tnotes { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px; color: ${NAVY}; background: rgba(255,255,255,0.85); border: 1px solid #C9D0E0; border-radius: 999px; padding: 5px 13px; cursor: pointer; white-space: nowrap; }
.un-tnotes.on { background: ${NAVY}; border-color: ${NAVY}; color: #fff; }
.un-close { width: 28px; height: 28px; border-radius: 50%; border: 1px solid #C9D0E0; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.85); color: ${NAVY}; }

/* content area = the cream part of the picture */
.un-body { position: absolute; top: 112px; bottom: 132px; left: 96px; right: 96px; display: flex; flex-direction: column; align-items: center; justify-content: center; }

.un-notes { position: absolute; left: 96px; right: 96px; bottom: 136px; z-index: 4; background: #FFF6E5; border: 2px solid #F2A900; border-radius: 12px; padding: 9px 16px; font-size: 13px; font-weight: 600; color: #6B5310; line-height: 1.5; max-height: 100px; overflow-y: auto; box-shadow: 0 8px 20px rgba(27,42,74,0.18); }

/* nav buttons sit on the navy band at the bottom */
.un-nav-row { position: absolute; left: 190px; right: 190px; bottom: 26px; height: 42px; display: flex; align-items: center; justify-content: space-between; gap: 12px; z-index: 3; }
.un-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; padding: 10px 22px; border-radius: 12px; border: none; cursor: pointer; background: #fff; color: ${NAVY}; white-space: nowrap; }
.un-nav.next { background: ${CORAL}; color: #fff; }
.un-nav.is-off, .un-nav:disabled { opacity: 0.4; cursor: default; }
.un-progress { display: flex; align-items: center; gap: 4px; justify-content: center; }
.un-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.35); flex-shrink: 0; }
.un-dot.on { width: 16px; border-radius: 4px; background: ${CORAL}; }

.un-eyebrow { font-weight: 800; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.un-h1 { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 60px; line-height: 1.1; color: ${NAVY}; margin: 0; text-align: center; }
.un-h2 { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 32px; color: ${NAVY}; margin: 0 0 6px; text-align: center; }
.un-p { font-size: 17px; font-weight: 600; color: #4A5878; line-height: 1.6; margin: 0; text-align: center; max-width: 660px; }

.un-cover { display: flex; flex-direction: column; align-items: center; gap: 18px; }
.un-module { font-weight: 800; font-size: 20px; letter-spacing: 0.32em; color: ${CORAL_DEEP}; padding-left: 0.32em; }

.un-plan { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; max-width: 680px; }
.un-plan-list { display: flex; flex-direction: column; gap: 9px; width: 100%; margin-top: 8px; }
.un-plan-item { display: grid; grid-template-columns: 96px 1fr 70px; align-items: center; gap: 12px; background: rgba(255,255,255,0.82); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 18px; font-size: 15.5px; font-weight: 600; color: #4A5878; }
.un-plan-item b { color: ${NAVY}; font-weight: 800; }
.un-plan-item small { font-weight: 800; font-size: 13px; color: ${CORAL_DEEP}; text-align: right; }

.un-text { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 900px; }
.un-text-title { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 34px; color: ${NAVY}; margin: 0 0 4px; text-align: center; }
.un-text-card { background: rgba(255,255,255,0.9); border: 1px solid #EBDFD0; border-radius: 18px; padding: 22px 32px; width: 100%; }
.un-text-card p { margin: 0 0 12px; text-align: justify; text-justify: inter-word; font-size: 18.5px; font-weight: 600; line-height: 1.65; color: #2F3C5A; }
.un-text-card p:last-child { margin-bottom: 0; }

.un-q { position: relative; width: 100%; max-width: 820px; display: flex; flex-direction: column; gap: 14px; }
.un-q-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.un-seetext { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 12.5px; color: ${NAVY}; background: #fff; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 6px 16px; cursor: pointer; }
.un-seetext:hover { border-color: ${NAVY}; }
.un-prompt { margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 27px; line-height: 1.35; color: ${NAVY}; }
.un-options { display: flex; flex-direction: column; gap: 10px; }
.un-opt { display: flex; align-items: center; gap: 14px; text-align: left; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 17px; line-height: 1.4; color: ${NAVY}; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 16px; padding: 12px 18px; cursor: pointer; }
.un-opt:disabled { cursor: default; }
.un-opt:not(:disabled):hover { border-color: #9AA6C4; }
.un-opt-letter { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: #E4E9F5; color: ${NAVY}; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; }
.un-opt.is-picked { border-color: ${NAVY}; background: #fff; box-shadow: 0 0 0 3px rgba(27,42,74,0.12); }
.un-opt.is-picked .un-opt-letter { background: ${NAVY}; color: #fff; }
.un-opt.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.un-opt.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.un-opt.is-correct .un-opt-letter, .un-opt.is-wrong .un-opt-letter { background: rgba(255,255,255,0.28); color: #fff; }
.un-opt.is-dim { opacity: 0.5; }
.un-q-foot { min-height: 62px; display: flex; align-items: center; }
.un-check { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 15px; background: ${NAVY}; color: #fff; border: none; border-radius: 12px; padding: 12px 30px; cursor: pointer; }
.un-check:disabled { opacity: 0.35; cursor: default; }
.un-why { width: 100%; border-radius: 14px; padding: 12px 18px; font-size: 15px; font-weight: 600; line-height: 1.5; color: ${NAVY}; }
.un-why.is-ok { background: #E6F8F5; border: 1px solid #A8E6DF; }
.un-why.is-bad { background: #FDECEC; border: 1px solid #F5B8BA; }

.un-overlay { position: absolute; left: -24px; right: -24px; top: -16px; bottom: -22px; z-index: 5; background: rgba(27,42,74,0.35); border-radius: 22px; display: flex; align-items: center; justify-content: center; padding: 14px; }
.un-overlay-card { background: #fff; border-radius: 18px; padding: 18px 26px 20px; width: 100%; max-height: 100%; overflow-y: auto; box-shadow: 0 16px 40px rgba(27,42,74,0.3); }
.un-overlay-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; }
.un-overlay-title { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 20px; color: ${NAVY}; }
.un-overlay-x { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 12.5px; color: #fff; background: ${NAVY}; border: none; border-radius: 999px; padding: 6px 16px; cursor: pointer; }
.un-overlay-text p { margin: 0 0 10px; text-align: justify; text-justify: inter-word; font-size: 15.5px; font-weight: 600; line-height: 1.6; color: #2F3C5A; }
.un-overlay-text p:last-child { margin-bottom: 0; }
.e8-mark { background: #FFE58A; color: inherit; border-radius: 3px; padding: 0 2px; }

.un-end { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; max-width: 700px; }
.un-end-badge { width: 64px; height: 64px; border-radius: 50%; background: ${GREEN}; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(46,196,182,0.35); }
.un-end-h { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 36px; line-height: 1.2; color: ${NAVY}; margin: 0; text-align: center; }
.un-score-total { display: flex; align-items: baseline; gap: 10px; background: ${NAVY}; color: #fff; border-radius: 22px; padding: 10px 34px; }
.un-score-total span { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 56px; line-height: 1; }
.un-score-total small { font-size: 16px; font-weight: 700; opacity: 0.75; }
.un-score-tiles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; max-width: 560px; }
.un-score-tile { display: flex; flex-direction: column; align-items: center; gap: 4px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 8px; text-align: center; }
.un-score-tile.is-full { background: #E6F8F5; border-color: #A8E6DF; }
.un-score-tile small { font-size: 12px; font-weight: 800; color: ${CORAL_DEEP}; }
.un-score-tile b { font-family: 'Baloo 2', sans-serif; font-size: 26px; color: ${NAVY}; }
.un-score-tile span { font-size: 12px; font-weight: 700; color: #5A6B92; line-height: 1.3; }
`;
