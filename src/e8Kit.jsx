import React, { createContext, useContext, useEffect, useState } from "react";

export const NAVY = "#1B2A4A";
export const CORAL = "#FF6B4A";
export const CORAL_DEEP = "#E0502F";
export const GREEN = "#2EC4B6";
export const RED = "#E5484D";

// Shared pieces for the E8 exam-prep lessons (Alice). One item per slide, all English, answers are our own key.
// A lesson is a list of slides {stage, time, note, body}; <E8Player slides={...} /> plays it.

export const ScoreCtx = createContext({ report: () => {}, results: {}, store: {}, setStore: () => {} });

// Answers and typed text live in the lesson, so going back to a slide shows it as the student left it.
export function useStore(id, init) {
  const { store, setStore } = useContext(ScoreCtx);
  const val = id in store ? store[id] : init;
  const set = (v) => setStore((s) => ({ ...s, [id]: typeof v === "function" ? v(id in s ? s[id] : init) : v }));
  return [val, set];
}

export const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function Marked({ text, evidence, on }) {
  const evs = (Array.isArray(evidence) ? evidence : evidence ? [evidence] : []).filter((e) => text.includes(e));
  if (!on || evs.length === 0) return <>{text}</>;
  const parts = text.split(new RegExp(`(${evs.map(esc).join("|")})`, "g"));
  return (
    <>
      {parts.map((p, i) => (evs.includes(p) ? <mark key={i} className="e8-mark">{p}</mark> : <React.Fragment key={i}>{p}</React.Fragment>))}
    </>
  );
}

export const LETTERS = ["A", "B", "C", "D", "E"];

// One multiple-choice question: optional situation or reading passage, locks on tap, explains the trap.
export function Choice({ id, prompt, situation, passage, passageTitle, evidence, options, correct, trap }) {
  const { report } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("pick-" + id, null);
  const answered = picked !== null;
  function pick(i) {
    if (answered) return;
    setPicked(i);
    report(id, i === correct);
  }
  const ok = picked === correct;
  const optionsBlock = (
    <>
      {prompt && <p className="e8-prompt">{prompt}</p>}
      <div className="e8-options">
        {options.map((o, i) => {
          if (answered && i !== correct && i !== picked) return null;
          const cls = answered && i === correct ? "is-correct" : answered && i === picked ? "is-wrong" : "";
          return (
            <button key={i} type="button" className={`e8-opt ${cls}`} onClick={() => pick(i)} disabled={answered}>
              <span className="e8-opt-letter">{LETTERS[i]}</span>
              <span>{o.text}</span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`e8-why ${ok ? "is-ok" : "is-bad"}`}>
          {ok ? (
            <p><b>Correct.</b> {options[correct].why}</p>
          ) : (
            <>
              <p><b>Tempting, but no.</b> {options[picked].why}</p>
              <p><b>Answer: {LETTERS[correct]}.</b> {options[correct].why}</p>
            </>
          )}
          {trap && <p className="e8-trap"><b>The trap:</b> {trap}</p>}
        </div>
      )}
    </>
  );
  if (passage) {
    return (
      <div className="e8-split">
        <div className="e8-passage">
          {passageTitle && <div className="e8-passage-title">{passageTitle}</div>}
          <p><Marked text={passage} evidence={evidence} on={answered} /></p>
        </div>
        <div className="e8-side">{optionsBlock}</div>
      </div>
    );
  }
  return (
    <div className="e8-choice">
      {situation && <p className="e8-situation">{situation}</p>}
      {optionsBlock}
    </div>
  );
}

export function Strategy({ n, title, steps, example }) {
  return (
    <div className="e8-strategy">
      <span className="e8-eyebrow">Exam strategy {n}</span>
      <h2 className="e8-h2">{title}</h2>
      <ol className="e8-steps">
        {steps.map((s, i) => (
          <li key={i}><span className="e8-step-n">{i + 1}</span><span>{s}</span></li>
        ))}
      </ol>
      {example && <div className="e8-example">{example}</div>}
    </div>
  );
}

// The slide is drawn at 1120 x 630 (16:9, the same shape as the background picture) and scaled to fit the window.
export const SLIDE_W = 1120;
export const SLIDE_H = 630;

function useFitScale() {
  const calc = () => Math.min(1, (window.innerWidth - 24) / SLIDE_W, (window.innerHeight - 24) / SLIDE_H);
  const [scale, setScale] = useState(calc);
  useEffect(() => {
    const on = () => setScale(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return scale;
}

export function E8Player({ slides: SLIDES, extraStyles = "" }) {
  const [i, setI] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [results, setResults] = useState({});
  const [store, setStore] = useState({});
  const scale = useFitScale();
  const total = SLIDES.length;
  const s = SLIDES[i];

  useEffect(() => {
    const styleId = "e8-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles + extraStyles;
    document.head.appendChild(tag);
  }, []);

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }
  function exit() {
    window.close();
  }
  const report = (id, ok) => setResults((r) => (id in r ? r : { ...r, [id]: ok }));

  return (
    <ScoreCtx.Provider value={{ report, results, store, setStore }}>
      <div className="e8-wrap">
        <div className="e8-frame" style={{ width: SLIDE_W * scale, height: SLIDE_H * scale }}>
          <div className="e8-slide" style={{ transform: `scale(${scale})` }}>
            <div className="e8-top">
              <div className="e8-brand">
                <span className="e8-brand-badge"><img className="e8-brand-logo" src="/logo-sentenco.png" alt="" /></span>
                <span>entenco</span>
              </div>
              <div className="e8-stage-chip">
                <span className="e8-stage-name">{s.stage}</span>
                {s.time && <span className="e8-stage-time">{s.time}</span>}
              </div>
              <div className="e8-top-right">
                <button type="button" className={`e8-tnotes ${showNotes ? "on" : ""}`} onClick={() => setShowNotes((v) => !v)}>Teacher notes</button>
                <button className="e8-close" onClick={exit} aria-label="Close">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>
              </div>
            </div>
            <div className="e8-body" key={i}>{s.body}</div>
            {showNotes && (
              <div className="e8-notes">
                <b>Teacher notes.</b> {s.note}
              </div>
            )}
            <div className="e8-nav-row">
              <button className={`e8-nav ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
              <div className="e8-progress">
                {Array.from({ length: total }).map((_, idx) => (
                  <span key={idx} className={`e8-dot ${idx === i ? "on" : ""}`} />
                ))}
              </div>
              <button className="e8-nav next" onClick={() => (i === total - 1 ? exit() : go(1))}>
                {i === total - 1 ? "Finish Lesson" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScoreCtx.Provider>
  );
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Quicksand:wght@500;600;700&display=swap');

.e8-wrap { min-height: 100vh; width: 100%; background: #EEF1F6; color: ${NAVY}; font-family: 'Quicksand', sans-serif; padding: 12px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.e8-wrap * { box-sizing: border-box; }
.e8-frame { flex-shrink: 0; position: relative; }

.e8-slide {
  position: absolute; top: 0; left: 0; width: ${SLIDE_W}px; height: ${SLIDE_H}px; transform-origin: top left; overflow: hidden;
  background: #FDF4E7 url('/curriculum/e8/slide-bg.jpg') center / 100% 100% no-repeat;
  border-radius: 18px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
}

/* header row sits on the navy wave at the top of the picture */
.e8-top { position: absolute; top: 10px; left: 26px; right: 16px; height: 30px; display: flex; align-items: center; gap: 14px; z-index: 3; }
.e8-brand { display: flex; align-items: center; gap: 8px; font-family: 'Fraunces', serif; font-weight: 700; font-size: 18px; color: #fff; }
.e8-brand-badge { display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #fff; flex-shrink: 0; }
.e8-brand-logo { height: 17px; width: auto; display: block; }
.e8-stage-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.16); padding: 5px 14px; border-radius: 999px; }
.e8-stage-name { font-weight: 700; font-size: 12px; color: #fff; letter-spacing: 0.02em; white-space: nowrap; }
.e8-stage-time { font-size: 10.5px; font-weight: 800; color: #FFD9CC; white-space: nowrap; }
.e8-top-right { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.e8-tnotes { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; color: rgba(255,255,255,0.9); background: transparent; border: 1px solid rgba(255,255,255,0.4); border-radius: 999px; padding: 5px 12px; cursor: pointer; white-space: nowrap; margin-right: 46px; }
.e8-tnotes.on { background: #fff; color: ${NAVY}; }
.e8-close { width: 28px; height: 28px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

/* content area = the cream part of the picture */
.e8-body { position: absolute; top: 104px; bottom: 100px; left: 78px; right: 78px; overflow-y: auto; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.e8-body > * { margin-top: auto; margin-bottom: auto; }

.e8-notes { position: absolute; left: 78px; right: 78px; bottom: 104px; z-index: 4; background: #FFF6E5; border: 2px solid #F2A900; border-radius: 12px; padding: 9px 16px; font-size: 12.5px; font-weight: 600; color: #6B5310; line-height: 1.5; max-height: 92px; overflow-y: auto; box-shadow: 0 8px 20px rgba(27,42,74,0.18); }

/* nav buttons sit on the navy band at the bottom of the picture */
.e8-nav-row { position: absolute; left: 190px; right: 120px; bottom: 22px; height: 42px; display: flex; align-items: center; justify-content: space-between; gap: 12px; z-index: 3; }
.e8-nav { display: inline-flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; padding: 10px 22px; border-radius: 12px; border: none; cursor: pointer; background: #fff; color: ${NAVY}; white-space: nowrap; }
.e8-nav.next { background: ${CORAL}; color: #fff; }
.e8-nav.is-off, .e8-nav:disabled { opacity: 0.4; cursor: default; }
.e8-progress { display: flex; align-items: center; gap: 4px; flex-wrap: nowrap; justify-content: center; }
.e8-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.35); flex-shrink: 0; }
.e8-dot.on { width: 16px; border-radius: 4px; background: ${CORAL}; }

.e8-eyebrow { font-weight: 800; font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.e8-h1 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 44px; color: ${NAVY}; margin: 6px 0 0; text-align: center; }
.e8-h2 { font-family: 'Fraunces', serif; font-weight: 700; font-size: 28px; color: ${NAVY}; margin: 0 0 6px; text-align: center; }
.e8-p { font-size: 16px; font-weight: 600; color: #4A5878; line-height: 1.6; margin: 0; text-align: center; max-width: 640px; }
.e8-cover { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }
.e8-cover-p { font-size: 17px; font-weight: 600; color: #5A6B92; max-width: 560px; line-height: 1.6; margin: 0; }
.e8-source { font-size: 11.5px; font-weight: 700; color: #8892AC; margin-top: 8px; max-width: 520px; }

.e8-plan { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 640px; }
.e8-plan-list { display: flex; flex-direction: column; gap: 7px; width: 100%; margin-top: 6px; }
.e8-plan-item { display: grid; grid-template-columns: 84px 1fr 60px; align-items: center; gap: 12px; background: rgba(255,255,255,0.78); border: 1px solid #EBDFD0; border-radius: 12px; padding: 9px 16px; font-size: 14.5px; font-weight: 600; color: #4A5878; }
.e8-plan-item b { color: ${NAVY}; font-weight: 800; }
.e8-plan-item small { font-weight: 800; font-size: 12px; color: ${CORAL_DEEP}; text-align: right; }

.e8-strategy { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 660px; }
.e8-steps { list-style: none; margin: 6px 0 0; padding: 0; display: flex; flex-direction: column; gap: 10px; width: 100%; }
.e8-steps li { display: flex; gap: 14px; align-items: center; font-size: 17px; font-weight: 600; line-height: 1.5; color: ${NAVY}; background: rgba(255,255,255,0.82); border: 1px solid #EBDFD0; border-radius: 14px; padding: 13px 18px; }
.e8-step-n { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: ${CORAL}; color: #fff; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; }
.e8-example { font-size: 13.5px; font-weight: 700; color: #8A5A00; background: #FFF6E5; border: 1px dashed #F2A900; border-radius: 12px; padding: 10px 16px; width: 100%; line-height: 1.5; }

.e8-choice { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 12px; }
.e8-split { width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 22px; align-items: center; }
.e8-side { display: flex; flex-direction: column; gap: 10px; }
.e8-passage { background: rgba(255,255,255,0.86); border: 1px solid #EBDFD0; border-radius: 14px; padding: 14px 18px; }
.e8-passage p { margin: 0; font-size: 13.5px; font-weight: 600; line-height: 1.62; color: #33415E; white-space: pre-line; }
.e8-passage-title { font-family: 'Fraunces', serif; font-weight: 700; font-size: 13.5px; letter-spacing: 0.02em; color: ${NAVY}; margin-bottom: 5px; }
.e8-situation { margin: 0; font-family: 'Fraunces', serif; font-weight: 600; font-size: 24px; line-height: 1.45; color: ${NAVY}; text-align: center; padding: 0 8px 4px; }
.e8-prompt { margin: 0; font-weight: 800; font-size: 15px; color: ${NAVY}; }
.e8-options { display: flex; flex-direction: column; gap: 9px; }
.e8-opt { display: flex; align-items: flex-start; gap: 12px; text-align: left; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; line-height: 1.4; color: ${NAVY}; background: rgba(255,255,255,0.92); border: 1.5px solid #DCE2F0; border-radius: 14px; padding: 10px 15px; cursor: pointer; }
.e8-opt:disabled { cursor: default; }
.e8-opt-letter { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #E4E9F5; color: ${NAVY}; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center; }
.e8-opt.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.e8-opt.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.e8-opt.is-correct .e8-opt-letter, .e8-opt.is-wrong .e8-opt-letter { background: rgba(255,255,255,0.28); color: #fff; }
.e8-why { border-radius: 14px; padding: 10px 15px; font-size: 13px; font-weight: 600; line-height: 1.5; color: ${NAVY}; }
.e8-why p { margin: 0 0 4px; }
.e8-why p:last-child { margin-bottom: 0; }
.e8-why.is-ok { background: #E6F8F5; border: 1px solid #A8E6DF; }
.e8-why.is-bad { background: #FDECEC; border: 1px solid #F5B8BA; }
.e8-trap { color: #8A5A00; }
.e8-mark { background: #FFE58A; color: inherit; border-radius: 3px; padding: 0 2px; }

.e8-match1 { width: 100%; display: flex; flex-direction: column; gap: 10px; }
.e8-bigq { margin: 0; display: flex; align-items: baseline; gap: 10px; font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; line-height: 1.3; color: ${NAVY}; }
.e8-qid { flex-shrink: 0; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 13px; color: ${CORAL_DEEP}; }
.e8-texts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.e8-textcard { background: rgba(255,255,255,0.88); border: 1.5px solid #EBDFD0; border-radius: 14px; padding: 10px 14px 12px; }
.e8-textcard.is-correct { border-color: ${GREEN}; box-shadow: 0 0 0 2px rgba(46,196,182,0.25); }
.e8-textcard.is-wrong { border-color: ${RED}; box-shadow: 0 0 0 2px rgba(229,72,77,0.2); }
.e8-textcard-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; min-height: 26px; }
.e8-textcard-id { font-family: 'Fraunces', serif; font-weight: 700; font-size: 14px; color: ${NAVY}; }
.e8-textcard p { margin: 0; font-size: 12px; font-weight: 600; line-height: 1.5; color: #33415E; }
.e8-pick { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11.5px; background: ${NAVY}; color: #fff; border: none; border-radius: 999px; padding: 5px 14px; cursor: pointer; }
.e8-tag { font-size: 10.5px; font-weight: 800; border-radius: 999px; padding: 3px 10px; color: #fff; }
.e8-tag.is-ok { background: ${GREEN}; }
.e8-tag.is-bad { background: ${RED}; }

.e8-check { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 14px; background: ${NAVY}; color: #fff; border: none; border-radius: 12px; padding: 11px 26px; cursor: pointer; align-self: center; }
.e8-check:disabled { opacity: 0.35; cursor: default; }

.e8-gap { display: inline-flex; align-items: center; gap: 5px; vertical-align: baseline; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 12px; color: ${NAVY}; background: #fff; border: 1.5px dashed #9AA6C4; border-radius: 8px; padding: 0 8px; margin: 0 2px; }
.e8-gap.is-active { border-color: ${CORAL}; background: #FFF1EC; }
.e8-gap.is-later { border-color: #C9D0E0; color: #9AA6C4; }
.e8-gap.is-correct { background: ${GREEN}; border: 1.5px solid ${GREEN}; color: #fff; }
.e8-gap.is-wrong { background: ${RED}; border: 1.5px solid ${RED}; color: #fff; }
.e8-gap-n { font-size: 10.5px; opacity: 0.75; }
.e8-gap-empty { letter-spacing: 1px; color: #9AA6C4; }
.e8-filled { background: #E6F8F5; border-radius: 4px; padding: 0 3px; }

.e8-wt { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 12px; }
.e8-wt-help { margin: 0; font-size: 13px; font-weight: 700; color: #5A6B92; text-align: center; }
.e8-wt-card { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; background: rgba(255,255,255,0.88); border: 1px solid #EBDFD0; border-radius: 16px; padding: 18px 26px; }
.e8-wt-sentence { margin: 0; font-family: 'Fraunces', serif; font-weight: 600; font-size: 22px; line-height: 1.5; color: ${NAVY}; }
.e8-wt-words { color: ${CORAL_DEEP}; font-family: 'Quicksand', sans-serif; font-size: 18px; }
.e8-input { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 18px; color: ${NAVY}; border: 0; border-bottom: 3px solid #9AA6C4; background: #fff; border-radius: 8px 8px 0 0; padding: 8px 12px; width: 100%; max-width: 380px; outline: none; }
.e8-input:focus { border-bottom-color: ${CORAL}; }
.e8-input.is-correct { background: #E6F8F5; border-bottom-color: ${GREEN}; }
.e8-input.is-wrong { background: #FDECEC; border-bottom-color: ${RED}; }

.e8-score { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
.e8-score-total { display: flex; align-items: baseline; gap: 10px; background: ${NAVY}; color: #fff; border-radius: 22px; padding: 12px 36px; }
.e8-score-total span { font-family: 'Fraunces', serif; font-weight: 700; font-size: 60px; line-height: 1; }
.e8-score-total small { font-size: 16px; font-weight: 700; opacity: 0.75; }
.e8-score-tiles { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; width: 100%; }
.e8-score-tile { display: flex; flex-direction: column; align-items: center; gap: 4px; background: rgba(255,255,255,0.86); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 6px; text-align: center; }
.e8-score-tile.is-full { background: #E6F8F5; border-color: #A8E6DF; }
.e8-score-tile small { font-size: 11.5px; font-weight: 800; color: ${CORAL_DEEP}; }
.e8-score-tile b { font-family: 'Fraunces', serif; font-size: 24px; color: ${NAVY}; }
.e8-score-tile span { font-size: 11px; font-weight: 700; color: #5A6B92; line-height: 1.3; }

.e8-traps { width: 100%; max-width: 760px; display: flex; flex-direction: column; gap: 8px; }
.e8-trap-row { display: grid; grid-template-columns: 80px 1fr; gap: 12px; align-items: start; background: rgba(255,255,255,0.86); border: 1px solid #EBDFD0; border-radius: 12px; padding: 9px 16px; font-size: 13.5px; font-weight: 600; line-height: 1.45; color: #4A5878; }
.e8-trap-row b { color: ${CORAL_DEEP}; font-weight: 800; }

.e8-takehome { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; max-width: 640px; }
.e8-th-list { margin: 0; padding: 12px 20px 12px 40px; width: 100%; background: #FFF6E5; border: 1px dashed #F2A900; border-radius: 14px; font-size: 15.5px; font-weight: 700; line-height: 1.7; color: #6B5310; }
`;
