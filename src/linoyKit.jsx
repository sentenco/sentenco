import React, { useState } from "react";
import { useStore, NAVY, CORAL_DEEP, GREEN, RED } from "./e8Kit.jsx";

// Shared building blocks for Linoy's exam-prep lessons (Stative Verbs, Present Simple, ...).
// They run inside <UnseenPlayer>, so they use its ScoreCtx store: going back to a slide shows it as she left it.
// The teacher-side buttons (Show choices, Show answers, ...) toggle and reset, so she can try again without the help.

export const KIT_STYLES = `
.sv-def { display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%; max-width: 840px; }
.sv-pos { font-family: 'Baloo 2', sans-serif; font-style: italic; font-weight: 600; font-size: 26px; color: ${CORAL_DEEP}; }
.sv-def-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 42px; line-height: 1.2; color: ${NAVY}; text-align: center; }
.sv-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 78px; line-height: 1; color: ${NAVY}; }
.sv-meaning { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 26px; font-size: 22px; font-weight: 700; color: #2F3C5A; text-align: center; }
.sv-choices { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.sv-choice { min-width: 200px; height: 62px; padding: 0 26px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 24px; color: ${NAVY}; background: rgba(255,255,255,0.94); border: 2px solid #DCE2F0; border-radius: 16px; cursor: pointer; }
.sv-choice:disabled { cursor: default; }
.sv-choice:not(:disabled):hover { border-color: #9AA6C4; }
.sv-choice.is-hidden { background: repeating-linear-gradient(135deg, #fff 0 8px, #F2EBE5 8px 16px); border: 2px dashed #C9CFE0; }
.sv-choice.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.sv-choice.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.sv-choice.is-dim { opacity: 0.45; }
.sv-tog { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 15px; color: ${NAVY}; background: #fff; border: 1.5px solid #DCE2F0; border-radius: 999px; padding: 8px 22px; cursor: pointer; }
.sv-tog:hover { border-color: ${NAVY}; }
.sv-chips { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.sv-chip { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 26px; color: ${NAVY}; background: #FFE9E1; border: 2px solid #F4C0AD; border-radius: 14px; padding: 10px 24px; }

.sv-listen { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 820px; align-items: stretch; }
.sv-msg { background: rgba(255,255,255,0.94); border: 1px solid #EBDFD0; border-radius: 22px; padding: 20px 28px 22px; box-shadow: 0 6px 16px rgba(27,42,74,0.08); }
.sv-msg-from { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; font-size: 15px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: ${CORAL_DEEP}; }
.sv-msg p { margin: 0; font-size: 28px; font-weight: 700; line-height: 1.5; color: ${NAVY}; }
.sv-qs { display: flex; flex-direction: column; gap: 10px; }
.sv-q { display: flex; align-items: baseline; gap: 14px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 14px; padding: 12px 22px; font-size: 26px; font-weight: 700; color: ${NAVY}; }
.sv-q i { font-style: normal; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: ${CORAL_DEEP}; }

.sv-sort { display: flex; flex-direction: column; align-items: center; gap: 22px; width: 100%; max-width: 840px; }
.sv-pool { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; min-height: 64px; }
.sv-sort-chip { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 26px; color: ${NAVY}; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; padding: 10px 24px; cursor: pointer; }
.sv-sort-chip.is-sel { border-color: ${NAVY}; box-shadow: 0 0 0 3px rgba(27,42,74,0.14); }
.sv-sort-chip.is-bad { background: ${RED}; border-color: ${RED}; color: #fff; }
.sv-sort-chip.is-ok { background: #E6F8F5; border-color: #A8E6DF; cursor: default; }
.sv-drops { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%; }
.sv-drop { min-height: 190px; display: flex; flex-direction: column; align-items: center; gap: 12px; background: rgba(255,255,255,0.9); border: 2px dashed #C9CFE0; border-radius: 18px; padding: 16px; font-family: 'Quicksand', sans-serif; cursor: pointer; }
.sv-drop:hover { border-color: ${NAVY}; }
.sv-drop b { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; font-weight: 800; }
.sv-drop-chips { display: flex; flex-direction: column; gap: 8px; align-items: center; }

.sv-rule { display: flex; flex-direction: column; align-items: center; gap: 24px; width: 100%; max-width: 840px; }
.sv-rule-big { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 56px; line-height: 1.15; color: ${NAVY}; text-align: center; }
.sv-eg { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 640px; }
.sv-eg div { display: flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 16px; padding: 14px 24px; font-size: 28px; font-weight: 700; color: ${NAVY}; }
.sv-eg .ok { color: ${GREEN}; font-size: 30px; }
.sv-eg .no { color: ${RED}; font-size: 30px; }

.sv-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; width: 100%; max-width: 860px; }
.sv-group { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 18px 20px; text-align: center; }
.sv-group b { display: block; font-family: 'Baloo 2', sans-serif; font-size: 26px; color: ${CORAL_DEEP}; margin-bottom: 8px; }
.sv-group span { display: block; font-size: 23px; font-weight: 700; line-height: 1.55; color: ${NAVY}; }

.sv-checks { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 860px; }
.sv-row { display: flex; align-items: center; gap: 14px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 14px 18px; }
.sv-n { width: 34px; height: 34px; border-radius: 50%; background: #E4E9F5; color: ${NAVY}; font-weight: 800; font-size: 16px; display: flex; align-items: center; justify-content: center; flex: none; }
.sv-s { flex: 1; font-size: 26px; font-weight: 700; color: ${NAVY}; line-height: 1.3; }
.sv-yn { min-width: 140px; height: 48px; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 17px; color: ${NAVY}; background: #fff; border: 2px solid #DCE2F0; border-radius: 14px; cursor: pointer; }
.sv-yn:disabled { cursor: default; }
.sv-yn:not(:disabled):hover { border-color: #9AA6C4; }
.sv-yn.is-correct { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
.sv-yn.is-wrong { background: ${RED}; border-color: ${RED}; color: #fff; }
.sv-yn.is-dim { opacity: 0.4; }

.sv-fix { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; max-width: 860px; }
.sv-fix-row { width: 100%; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 12px 22px; }
.sv-fix-wrong { font-size: 26px; font-weight: 700; color: ${NAVY}; }
.sv-fix-right { margin-top: 4px; font-size: 24px; font-weight: 800; color: #1E9C8F; }

.sv-two { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 860px; }
.sv-two-head, .sv-two-row { display: grid; grid-template-columns: 110px 1fr 1fr; gap: 14px; align-items: center; }
.sv-two-head span { font-weight: 800; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; text-align: center; }
.sv-two-verb { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 34px; color: ${NAVY}; }
.sv-two-cell { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 16px; padding: 16px 20px; font-size: 25px; font-weight: 700; color: ${NAVY}; text-align: center; }
.sv-two-cell em { font-style: normal; background: #FFE58A; border-radius: 4px; padding: 0 4px; }

.sv-talk { display: flex; flex-direction: column; align-items: center; gap: 22px; width: 100%; max-width: 820px; }
.sv-talk-row { display: flex; align-items: center; gap: 18px; width: 100%; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 16px 26px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 34px; color: ${NAVY}; }
.sv-talk-row i { font-style: normal; font-weight: 800; color: ${CORAL_DEEP}; font-size: 38px; min-width: 24px; }

.sv-wrap { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 820px; }
.sv-wrap div { display: flex; align-items: center; gap: 18px; background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 18px 26px; font-size: 28px; font-weight: 700; color: ${NAVY}; }
.sv-wrap i { font-style: normal; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: ${CORAL_DEEP}; font-size: 34px; }

.sv-syn { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; max-width: 860px; }
.sv-syn-row { display: grid; grid-template-columns: 1fr 44px 1fr; align-items: center; gap: 14px; width: 100%; }
.sv-syn-word { text-align: right; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; line-height: 1.1; color: ${NAVY}; }
.sv-syn-eq { text-align: center; font-size: 34px; font-weight: 800; color: ${CORAL_DEEP}; }
.sv-syn-ans { min-height: 62px; display: flex; align-items: center; padding: 0 22px; border-radius: 16px; border: 2px solid #A8E6DF; background: #E6F8F5; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 28px; color: ${NAVY}; }
.sv-syn-ans.is-hidden { border: 2px dashed #C9CFE0; background: repeating-linear-gradient(135deg, #fff 0 8px, #F2EBE5 8px 16px); }

.sv-cards { display: grid; grid-template-columns: 1fr; gap: 14px; width: 100%; max-width: 860px; }
.sv-cards.c2 { grid-template-columns: 1fr 1fr; }
.sv-card { background: rgba(255,255,255,0.92); border: 1px solid #EBDFD0; border-radius: 18px; padding: 16px 22px; }
.sv-card b { display: block; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${CORAL_DEEP}; font-weight: 800; margin-bottom: 4px; }
.sv-card span { display: block; font-size: 28px; font-weight: 700; line-height: 1.35; color: ${NAVY}; }
.sv-card em { font-style: normal; background: #FFE58A; border-radius: 4px; padding: 0 4px; }

.sv-blank { display: inline-block; min-width: 110px; padding: 0 6px; border-bottom: 3px solid ${NAVY}; text-align: center; font-weight: 800; }

.sv-orders { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 880px; }
.sv-order { display: flex; flex-direction: column; gap: 10px; background: rgba(255,255,255,0.9); border: 1px solid #EBDFD0; border-radius: 18px; padding: 14px 18px; }
.sv-order-pool { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; min-height: 52px; }
.sv-order-built { min-height: 54px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: center; border-bottom: 3px dashed #C9CFE0; padding-bottom: 8px; font-size: 26px; font-weight: 700; color: ${NAVY}; }
.sv-order-built.is-ok { border-bottom-color: ${GREEN}; color: #1E9C8F; }
.sv-order-built.is-bad { border-bottom-color: ${RED}; color: ${RED}; }
.sv-order .sv-tog { align-self: center; padding: 5px 16px; font-size: 13px; }
`;

// A dictionary-style definition. The choices stay hidden until the teacher presses Show choices.
// Hide choices puts them away again and clears the pick, so she can try once more without them.
export function Define({ id, pos, text, choices, correct }) {
  const [shown, setShown] = useStore("show-" + id, false);
  const [picked, setPicked] = useStore("pick-" + id, null);
  const toggle = () => {
    if (shown) { setShown(false); setPicked(null); } else setShown(true);
  };
  return (
    <div className="sv-def">
      {pos && <div className="sv-pos">{pos}</div>}
      <div className="sv-def-text">{text}</div>
      <div className="sv-choices">
        {choices.map((c, k) => {
          let cls = shown ? "" : "is-hidden";
          if (shown && picked !== null) cls = k === correct ? "is-correct" : k === picked ? "is-wrong" : "is-dim";
          return (
            <button key={k} type="button" className={`sv-choice ${cls}`} disabled={!shown || picked !== null} onClick={() => setPicked(k)} aria-label={shown ? c : "Hidden choice"}>
              {shown ? c : ""}
            </button>
          );
        })}
      </div>
      <button type="button" className="sv-tog" onClick={toggle}>{shown ? "Hide choices" : "Show choices"}</button>
    </div>
  );
}

export function OwnWords({ id, pos, word, meaning }) {
  const [shown, setShown] = useStore("show-" + id, false);
  return (
    <div className="sv-def">
      <div className="sv-pos">{pos}</div>
      <div className="sv-word">{word}</div>
      {shown && <div className="sv-meaning">{meaning}</div>}
      <button type="button" className="sv-tog" onClick={() => setShown(!shown)}>{shown ? "Hide definition" : "Show definition"}</button>
    </div>
  );
}

export function Recap({ words }) {
  return <div className="sv-chips">{words.map((w) => <span key={w} className="sv-chip">{w}</span>)}</div>;
}

// The message she reads first, with two easy questions under it.
export function Message({ text, questions }) {
  return (
    <div className="sv-listen">
      <div className="sv-msg">
        <div className="sv-msg-from">Message</div>
        <p>{text}</p>
      </div>
      <div className="sv-qs">{questions.map((q, k) => <div key={k} className="sv-q"><i>?</i>{q}</div>)}</div>
    </div>
  );
}

// Tap a verb, then tap the box it belongs in. A wrong box flashes red and the verb goes back.
export function Sort({ id, cats, items }) {
  const [placed, setPlaced] = useStore("sort-" + id, {});
  const [sel, setSel] = useState(null);
  const [bad, setBad] = useState(null);
  const pool = items.filter((it) => !placed[it.w]);
  const drop = (cat) => {
    if (sel === null) return;
    const it = items.find((x) => x.w === sel);
    if (it.cat === cat) {
      setPlaced((p) => ({ ...p, [sel]: true }));
      setSel(null);
    } else {
      const w = sel;
      setBad(w);
      setSel(null);
      setTimeout(() => setBad(null), 700);
    }
  };
  return (
    <div className="sv-sort">
      <div className="sv-pool">
        {pool.map((it) => (
          <button key={it.w} type="button" className={`sv-sort-chip ${sel === it.w ? "is-sel" : ""} ${bad === it.w ? "is-bad" : ""}`} onClick={() => setSel(sel === it.w ? null : it.w)}>{it.w}</button>
        ))}
      </div>
      <div className="sv-drops">
        {cats.map((c) => (
          <button key={c.key} type="button" className="sv-drop" onClick={() => drop(c.key)}>
            <b>{c.label}</b>
            <div className="sv-drop-chips">
              {items.filter((it) => it.cat === c.key && placed[it.w]).map((it) => <span key={it.w} className="sv-sort-chip is-ok">{it.w}</span>)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function CheckRow({ id, n, s, ok }) {
  const [pick, setPick] = useStore("chk-" + id, null);
  const done = pick !== null;
  const btn = (val, label) => {
    let cls = "";
    if (done) cls = val === ok ? "is-correct" : val === pick ? "is-wrong" : "is-dim";
    return <button type="button" className={`sv-yn ${cls}`} disabled={done} onClick={() => setPick(val)}>{label}</button>;
  };
  return (
    <div className="sv-row">
      <span className="sv-n">{n}</span>
      <span className="sv-s">{s}</span>
      {btn(true, "Correct")}
      {btn(false, "Not correct")}
    </div>
  );
}

export function Check({ id, items }) {
  return <div className="sv-checks">{items.map((it) => <CheckRow key={it.n} id={`${id}-${it.n}`} {...it} />)}</div>;
}

export function Fix({ id, items }) {
  const [shown, setShown] = useStore("show-" + id, false);
  return (
    <div className="sv-fix">
      {items.map((it) => (
        <div key={it.wrong} className="sv-fix-row">
          <div className="sv-fix-wrong">{it.wrong}</div>
          {shown && <div className="sv-fix-right">{it.right}</div>}
        </div>
      ))}
      <button type="button" className="sv-tog" onClick={() => setShown(!shown)}>{shown ? "Hide answers" : "Show answers"}</button>
    </div>
  );
}

export function Talk({ rows }) {
  return <div className="sv-talk">{rows.map((r, k) => <div key={k} className="sv-talk-row"><i>{k + 1}</i>{r}</div>)}</div>;
}

export function Wrap({ rows }) {
  return <div className="sv-wrap">{rows.map((r, k) => <div key={k}><i>{k + 1}</i>{r}</div>)}</div>;
}


// Synonym rows: the word is shown, the synonym stays hidden until the teacher reveals it.
export function Synonyms({ id, pos, rows }) {
  const [shown, setShown] = useStore("show-" + id, false);
  return (
    <div className="sv-syn">
      <div className="sv-pos">{pos}</div>
      {rows.map((r) => (
        <div key={r.word} className="sv-syn-row">
          <div className="sv-syn-word">{r.word}</div>
          <div className="sv-syn-eq">=</div>
          <div className={`sv-syn-ans ${shown ? "" : "is-hidden"}`}>{shown ? r.syn : ""}</div>
        </div>
      ))}
      <button type="button" className="sv-tog" onClick={() => setShown(!shown)}>{shown ? "Hide answers" : "Show answers"}</button>
    </div>
  );
}

// A stack of label + text cards. cols = 1 or 2. Use <em> in the text to highlight a word.
export function Cards({ rows, cols = 1 }) {
  return (
    <div className={`sv-cards ${cols === 2 ? "c2" : ""}`}>
      {rows.map((r) => (
        <div key={r.label} className="sv-card"><b>{r.label}</b><span>{r.text}</span></div>
      ))}
    </div>
  );
}

function PickRow({ id, n, before, after, options, correct }) {
  const [pick, setPick] = useStore("pk-" + id, null);
  const done = pick !== null;
  return (
    <div className="sv-row">
      <span className="sv-n">{n}</span>
      <span className="sv-s">{before} <span className="sv-blank">{done ? options[pick] : ""}</span> {after}</span>
      {options.map((o, k) => {
        let cls = "";
        if (done) cls = k === correct ? "is-correct" : k === pick ? "is-wrong" : "is-dim";
        return <button key={o} type="button" className={`sv-yn ${cls}`} disabled={done} onClick={() => setPick(k)}>{o}</button>;
      })}
    </div>
  );
}

// "Choose the right form": each row has a gap in the sentence and two buttons.
export function Pick({ id, items }) {
  return <div className="sv-checks">{items.map((it) => <PickRow key={it.n} id={`${id}-${it.n}`} {...it} />)}</div>;
}

function OrderOne({ id, words, answer }) {
  const [picked, setPicked] = useStore("ord-" + id, []);
  const done = picked.length === words.length;
  const built = picked.map((i) => words[i]);
  const ok = done && built.join(" ").toLowerCase() === answer.toLowerCase();
  const text = built.join(" ");
  const shownText = done && ok ? text.charAt(0).toUpperCase() + text.slice(1) + "." : null;
  return (
    <div className="sv-order">
      <div className="sv-order-pool">
        {words.map((w, i) => (picked.includes(i) ? null : (
          <button key={i} type="button" className="sv-sort-chip" disabled={done} onClick={() => setPicked((p) => [...p, i])}>{w}</button>
        )))}
      </div>
      <div className={`sv-order-built ${done ? (ok ? "is-ok" : "is-bad") : ""}`}>
        {shownText ? shownText : built.map((w, k) => <span key={k}>{w}</span>)}
      </div>
      {picked.length > 0 && <button type="button" className="sv-tog" onClick={() => setPicked([])}>Start again</button>}
    </div>
  );
}

// Put the words in order: tap them one by one. A full wrong order turns red; Start again clears it.
export function Order({ id, sentences }) {
  return <div className="sv-orders">{sentences.map((s, k) => <OrderOne key={k} id={`${id}-${k}`} {...s} />)}</div>;
}
