import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { ScoreCtx, useStore, Marked, LETTERS, esc } from "./e8Kit.jsx";
import { CF_W, CF_H, CASE_TOPICS, vocabId } from "./caseKitData.js";

// The "Case file" player for the Unseen Reading lessons.
// Flow: title page, then for each text the article and its questions, then one vocabulary matching page
// for both texts, then the score. There is no picture background: a folder in the topic color holds a white sheet.
// Topic colors come from the lesson's shelf (see unseenShelfByPart.js).

const ScaleCtx = createContext(1);

function useFitScale() {
  const calc = () => Math.min(1, (window.innerWidth - 24) / CF_W, (window.innerHeight - 24) / CF_H);
  const [scale, setScale] = useState(calc);
  useEffect(() => {
    const on = () => setScale(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return scale;
}

// slides: [{ stage: string | ({ store, results }) => string, body }]
export function CasePlayer({ slides, caseNo, theme, topic = "older", level = "B1+ to low B2" }) {
  const [i, setI] = useState(0);
  const [results, setResults] = useState({});
  const [store, setStore] = useState({});
  const scale = useFitScale();
  const total = slides.length;
  const s = slides[i];
  const colors = CASE_TOPICS[topic] || CASE_TOPICS.older;
  const go = (d) => setI((cur) => Math.max(0, Math.min(total - 1, cur + d)));
  const report = (id, ok) => setResults((r) => (id in r ? r : { ...r, [id]: ok }));
  const stage = typeof s.stage === "function" ? s.stage({ store, results }) : s.stage;

  return (
    <ScoreCtx.Provider value={{ report, results, store, setStore }}>
      <ScaleCtx.Provider value={scale}>
        <style>{CSS}</style>
        <div className="cf-wrap" style={{ "--c": colors.c, "--deep": colors.deep, "--tint": colors.tint }}>
          <div className="cf-frame" style={{ width: CF_W * scale, height: CF_H * scale }}>
            <div className="cf-slide" style={{ transform: `scale(${scale})` }}>
              <div className="cf-folder" />
              <div className="cf-tabcase">Case {caseNo} · {theme}</div>
              <div className="cf-brand">
                <img src="/logo-sentenco.png" alt="" />
                <span>entenco</span>
              </div>
              <div className="cf-stage">{stage}</div>
              <button type="button" className="cf-x" onClick={() => window.close()} aria-label="Close">&times;</button>
              <div className="cf-sheet" key={i}>
                <div className="cf-dossier">
                  <span>Subject: {theme}</span><span>Level: {level}</span><span>Case No. {caseNo}</span>
                </div>
                {s.body}
              </div>
              <div className="cf-foot">
                <button type="button" className="cf-nb" onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
                <div className="cf-ticks" data-label={`Page ${i + 1} of ${total}`}>
                  {Array.from({ length: total }).map((_, k) => <i key={k} className={k === i ? "on" : k < i ? "done" : ""} />)}
                </div>
                <button type="button" className="cf-nb next" onClick={() => (i === total - 1 ? window.close() : go(1))}>
                  {i === total - 1 ? "Finish Lesson" : "Next →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScaleCtx.Provider>
    </ScoreCtx.Provider>
  );
}

// ---------- title page ----------
export function CTitle({ caseNo, theme, titleA, titleB }) {
  return (
    <div className="cf-cover">
      <h1><span className="cf-stamp">Unseen</span> <span>Case #{caseNo}</span></h1>
      <div className="cf-topic">{theme}</div>
      <div className="cf-files">
        <div className="cf-file"><small>File A · Text 1</small><b>{titleA}</b></div>
        <div className="cf-file"><small>File B · Text 2</small><b>{titleB}</b></div>
      </div>
    </div>
  );
}

// ---------- article with tap-for-meaning words ----------
function segmentText(text, pairs) {
  const hits = [];
  pairs.forEach(([w], wi) => {
    const m = new RegExp(`\\b${esc(w)}\\b`, "i").exec(text);
    if (m) hits.push({ start: m.index, end: m.index + m[0].length, wi });
  });
  hits.sort((a, b) => a.start - b.start);
  const clean = [];
  let last = 0;
  hits.forEach((h) => { if (h.start >= last) { clean.push(h); last = h.end; } });
  const paras = [[]];
  const pushText = (str) => {
    str.split("\n\n").forEach((part, k) => {
      if (k > 0) paras.push([]);
      if (part) paras[paras.length - 1].push({ text: part });
    });
  };
  let at = 0;
  clean.forEach((h) => {
    pushText(text.slice(at, h.start));
    paras[paras.length - 1].push({ text: text.slice(h.start, h.end), wi: h.wi });
    at = h.end;
  });
  pushText(text.slice(at));
  return paras;
}

export function CArticle({ label, title, text, pairs }) {
  const scale = useContext(ScaleCtx);
  const cardRef = useRef(null);
  const [pop, setPop] = useState(null);
  const paras = segmentText(text, pairs);

  useEffect(() => {
    if (!pop) return undefined;
    const close = (e) => { if (!e.target.closest?.(".cf-pop") && !e.target.closest?.(".cf-kw")) setPop(null); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [pop]);

  function openWord(e, wi) {
    if (pop && pop.wi === wi) { setPop(null); return; }
    const card = cardRef.current;
    const cr = card.getBoundingClientRect();
    const br = e.currentTarget.getBoundingClientRect();
    const cx = (br.left - cr.left + br.width / 2) / scale;
    const top = (br.top - cr.top) / scale;
    const bottom = (br.bottom - cr.top) / scale;
    const left = Math.max(8, Math.min(card.clientWidth - 268, cx - 130));
    const above = top > 100;
    setPop({ wi, left, ax: Math.max(14, Math.min(230, cx - left - 8)), above, y: above ? card.clientHeight - top + 12 : bottom + 12 });
  }

  return (
    <div className="cf-txt">
      <span className="cf-eyebrow">{label}</span>
      <h2>{title}</h2>
      <div className="cf-card" ref={cardRef}>
        {paras.map((p, k) => (
          <p key={k}>
            {p.map((n, j) => (n.wi === undefined
              ? <React.Fragment key={j}>{n.text}</React.Fragment>
              : <button key={j} type="button" className={`cf-kw ${pop && pop.wi === n.wi ? "open" : ""}`} onClick={(e) => openWord(e, n.wi)}>{n.text}</button>))}
          </p>
        ))}
        {pop && (
          <div className={`cf-pop ${pop.above ? "" : "is-below"}`} style={{ left: pop.left, "--ax": `${pop.ax}px`, ...(pop.above ? { bottom: pop.y } : { top: pop.y }) }}>
            <b>{pairs[pop.wi][0]}</b>
            <span>{pairs[pop.wi][1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- one question per page ----------
export function CQuestion({ id, n, total, kind, prompt, options, correct, explain, textTitle, text, evidence, textLabel }) {
  const { report } = useContext(ScoreCtx);
  const [picked, setPicked] = useStore("pick-" + id, null);
  const [checked, setChecked] = useStore("chk-" + id, false);
  const [showText, setShowText] = useState(false);
  const ok = picked === correct;
  const evs = (Array.isArray(evidence) ? evidence : evidence ? [evidence] : []);

  function check() {
    if (picked === null || checked) return;
    setChecked(true);
    report(id, picked === correct);
  }

  return (
    <div className="cf-q">
      <div className="cf-qh">
        <span className="cf-eyebrow">Question {n} of {total} · {kind}</span>
        <button type="button" className="cf-see" onClick={() => setShowText(true)}>See text</button>
      </div>
      <p className="cf-prompt">{prompt}</p>
      <div className="cf-opts">
        {options.map((o, k) => {
          let cls = "";
          if (checked) cls = k === correct ? "ok" : k === picked ? "bad" : "dim";
          else if (picked === k) cls = "pick";
          return (
            <button key={k} type="button" className={`cf-opt ${cls}`} disabled={checked} onClick={() => setPicked(k)}>
              <span className="l">{LETTERS[k]}</span>
              <span>{o}</span>
            </button>
          );
        })}
      </div>
      <div className="cf-qf">
        {!checked ? (
          <button type="button" className="cf-chk" disabled={picked === null} onClick={check}>Check answer</button>
        ) : (
          <div className="cf-why">
            <span><b>{ok ? "Correct." : `The answer is ${LETTERS[correct]}.`}</b> {explain}</span>
            {evs.length > 0 && <span className="cf-ev"><b>Evidence</b>{evs.map((e, k) => <mark key={k}>{e}</mark>)}</span>}
            {ok && <span className="cf-stamp cf-stamp--small">Solved</span>}
          </div>
        )}
      </div>
      {showText && (
        <div className="cf-overlay" role="dialog" aria-label="The text">
          <div className="cf-overlay-head">
            <span>{textLabel}: {textTitle}</span>
            <button type="button" onClick={() => setShowText(false)}>Close</button>
          </div>
          <div className="cf-overlay-text">
            {text.split("\n\n").map((para, k) => <p key={k}><Marked text={para} evidence={evidence} on={checked} /></p>)}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- vocabulary matching for both texts ----------
const sentenceWith = (text, word) => {
  const re = new RegExp(`\\b${esc(word)}\\b`, "i");
  return text.replace(/\n\n/g, " ").split(/(?<=[.!?])\s+/).find((x) => re.test(x)) || "";
};

export function CVocab({ textA, textB }) {
  const { report } = useContext(ScoreCtx);
  const [done, setDone] = useStore("cv-done", {});
  const [sel, setSel] = useState(null);
  const [flash, setFlash] = useState(null);
  const [shake, setShake] = useState(null);

  const words = [
    ...textA.pairs.map(([w, d]) => ({ w, d, t: "A", s: sentenceWith(textA.text, w) })),
    ...textB.pairs.map(([w, d]) => ({ w, d, t: "B", s: sentenceWith(textB.text, w) })),
  ];
  const trayOrder = [0, 5, 1, 6, 2, 7, 3, 8, 4, 9];
  const tray = trayOrder.filter((k) => !done[k]);

  function attempt(slotIdx) {
    if (sel === null || done[slotIdx]) return;
    if (sel === slotIdx) {
      setDone((d) => ({ ...d, [slotIdx]: true }));
      report(vocabId(slotIdx), true);
      setSel(null);
    } else {
      report(vocabId(sel), false);
      setFlash(slotIdx);
      setShake(sel);
      setTimeout(() => { setFlash(null); setShake(null); }, 450);
    }
  }

  const slot = (idx) => (
    <button
      key={idx}
      type="button"
      className={`cf-slot ${done[idx] ? "done" : ""} ${flash === idx ? "flash" : ""}`}
      disabled={!!done[idx]}
      onClick={() => attempt(idx)}
      onDragOver={(e) => { if (!done[idx]) { e.preventDefault(); e.currentTarget.classList.add("over"); } }}
      onDragLeave={(e) => e.currentTarget.classList.remove("over")}
      onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove("over"); attempt(idx); }}
    >
      <span className="w">{done[idx] ? words[idx].w : ""}</span>
      <span>{words[idx].d}</span>
    </button>
  );

  const ctxWord = sel !== null ? words[sel] : null;
  let ctxNode = <span className="hintc">Tap a word to see the sentence it came from.</span>;
  if (ctxWord) {
    const re = new RegExp(`\\b(${esc(ctxWord.w)})\\b`, "i");
    const parts = ctxWord.s.split(re);
    ctxNode = (
      <>
        <b>From the text</b>
        <span>{parts.map((p, k) => (k % 2 === 1 ? <mark key={k}>{p}</mark> : <React.Fragment key={k}>{p}</React.Fragment>))}</span>
      </>
    );
  }

  return (
    <div className="cf-vocab">
      <div className="cf-tray">
        {tray.length === 0 && <span className="cf-none">All ten matched.</span>}
        {tray.map((k) => (
          <span
            key={k}
            role="button"
            tabIndex={0}
            className={`cf-tag t-${words[k].t} ${sel === k ? "sel" : ""} ${shake === k ? "shake" : ""}`}
            draggable
            onDragStart={(e) => { setSel(k); e.dataTransfer.setData("text/plain", String(k)); e.dataTransfer.effectAllowed = "move"; }}
            onClick={() => setSel(sel === k ? null : k)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(sel === k ? null : k); } }}
          >
            <i>{words[k].t}</i>{words[k].w}
          </span>
        ))}
      </div>
      <div className="cf-ctx">{ctxNode}</div>
      <div className="cf-slots">
        <div className="cf-col"><small>Text 1 · {textA.title}</small>{textA.defs.map((k) => slot(k))}</div>
        <div className="cf-col"><small>Text 2 · {textB.title}</small>{textB.defs.map((k) => slot(5 + k))}</div>
      </div>
    </div>
  );
}

// ---------- score ----------
export function CEnd({ caseNo, total, parts }) {
  const { results } = useContext(ScoreCtx);
  const count = (ids) => ids.filter((id) => results[id] === true).length;
  const allIds = parts.flatMap((p) => p.ids);
  return (
    <div className="cf-end">
      <span className="cf-stamp">Case closed</span>
      <h2>You finished Unseen Case #{caseNo}</h2>
      <div className="cf-big"><span>{count(allIds)}</span><small>out of {total}</small></div>
      <div className="cf-tiles">
        {parts.map((p) => {
          const tried = p.ids.filter((id) => id in results).length;
          return (
            <div key={p.label} className="cf-tile">
              <small>{p.label}</small>
              <b>{tried === 0 ? "–" : `${count(p.ids)}/${p.ids.length}`}</b>
              <span>{p.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Fredoka:wght@500;600;700&family=Nunito:ital,wght@0,600;0,700;0,800;1,700&display=swap');

.cf-wrap { --navy: #1F3A5F; --blue: #4E7099; --coral: #FF6B5B; --bad: #D9453A; --mono: 'Courier Prime', 'Courier New', monospace; --soft: 'Fredoka', 'Arial Rounded MT Bold', sans-serif; --sans: 'Nunito', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh; width: 100%; background: #EEF1F6; color: var(--navy); font-family: var(--sans); font-weight: 700; padding: 12px; display: flex; align-items: center; justify-content: center; }
.cf-wrap * { box-sizing: border-box; }
.cf-wrap button { font-family: inherit; color: inherit; }
.cf-wrap :focus-visible { outline: 3px solid var(--coral); outline-offset: 2px; }
.cf-frame { flex-shrink: 0; position: relative; }
.cf-slide { position: absolute; top: 0; left: 0; width: ${CF_W}px; height: ${CF_H}px; transform-origin: top left; overflow: hidden; border-radius: 22px; box-shadow: 0 24px 50px rgba(27,42,74,.2);
  background-color: var(--tint); background-image: repeating-linear-gradient(0deg, rgba(31,58,95,.04) 0 1px, transparent 1px 30px), repeating-linear-gradient(90deg, rgba(31,58,95,.04) 0 1px, transparent 1px 30px); }

.cf-folder { position: absolute; z-index: 1; left: 48px; right: 48px; top: 80px; bottom: 98px; background: var(--c); border: 2px solid color-mix(in srgb, var(--deep) 55%, var(--c)); border-radius: 0 24px 24px 24px;
  box-shadow: 12px -9px 0 -3px color-mix(in srgb, var(--c) 62%, #fff), 22px -16px 0 -6px color-mix(in srgb, var(--c) 38%, #fff), 0 22px 44px rgba(31,58,95,.16); }
.cf-tabcase { position: absolute; z-index: 1; left: 70px; top: 46px; height: 36px; padding: 7px 24px 0; background: var(--c); border: 2px solid color-mix(in srgb, var(--deep) 55%, var(--c)); border-bottom: none; border-radius: 14px 14px 0 0; font: 700 14px var(--mono); letter-spacing: .08em; text-transform: uppercase; max-width: 560px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cf-tabcase::after { content: ""; position: absolute; left: 0; right: 0; bottom: -3px; height: 4px; background: var(--c); }
.cf-brand { position: absolute; z-index: 5; top: 8px; left: 44px; display: flex; align-items: center; color: var(--deep); font: 700 20px var(--soft); }
.cf-brand img { width: 40px; height: 40px; margin-right: -9px; object-fit: contain; }
.cf-x { position: absolute; z-index: 5; top: 12px; right: 48px; width: 32px; height: 32px; border-radius: 50%; border: none; background: #fff; font-size: 20px; line-height: 1; cursor: pointer; box-shadow: 0 3px 10px rgba(31,58,95,.14); }
.cf-stage { position: absolute; z-index: 1; top: 52px; right: 70px; height: 30px; padding: 5px 18px 0; background: #fff; color: var(--deep); border-radius: 12px 12px 0 0; font: 700 13px var(--mono); letter-spacing: .06em; text-transform: uppercase; white-space: nowrap; }
.cf-sheet { position: absolute; z-index: 2; top: 96px; bottom: 114px; left: 64px; right: 64px; background: #fff; border-radius: 14px; padding: 52px 44px 18px 52px; box-shadow: 0 2px 0 rgba(31,58,95,.08); display: flex; flex-direction: column; align-items: center; justify-content: center; }
.cf-sheet::before { content: ""; position: absolute; left: 14px; top: 56px; bottom: 30px; width: 16px; background: radial-gradient(circle, color-mix(in srgb, var(--c) 55%, #fff) 0 6px, transparent 7px) 0 0 / 16px 124px repeat-y; }
.cf-dossier { display: flex; justify-content: space-between; gap: 12px; position: absolute; top: 14px; left: 52px; right: 44px; padding-bottom: 8px; border-bottom: 2px dashed color-mix(in srgb, var(--c) 70%, #fff); font: 700 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; color: var(--deep); }
.cf-foot { position: absolute; z-index: 5; left: 48px; right: 48px; bottom: 28px; display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.cf-nb { font: 800 14px var(--sans); border: none; background: #fff; border-radius: 12px; padding: 10px 24px; cursor: pointer; box-shadow: 0 4px 12px rgba(31,58,95,.12); }
.cf-nb.next { background: var(--deep); color: #fff; }
.cf-nb:disabled { opacity: .4; cursor: default; }
.cf-ticks { display: flex; align-items: center; gap: 5px; }
.cf-ticks::before { content: attr(data-label); font: 700 14px var(--mono); letter-spacing: .08em; text-transform: uppercase; color: var(--deep); margin-right: 16px; }
.cf-ticks i { width: 9px; height: 20px; border-radius: 3px; background: color-mix(in srgb, var(--c) 50%, #fff); }
.cf-ticks i.done { background: var(--deep); }
.cf-ticks i.on { width: 11px; height: 30px; background: var(--coral); }

.cf-stamp { display: inline-block; font: 700 22px var(--mono); letter-spacing: .18em; padding: 6px 18px 4px 22px; text-transform: uppercase; color: var(--deep); border: 4px double var(--deep); border-radius: 10px; transform: rotate(-7deg); opacity: .88; mix-blend-mode: multiply; }
.cf-eyebrow { font: 700 14px var(--mono); letter-spacing: .08em; text-transform: uppercase; color: var(--deep); }
.cf-sheet h1, .cf-sheet h2 { font-family: var(--soft); font-weight: 700; margin: 0; }

.cf-cover { width: 100%; display: grid; justify-items: center; gap: 16px; text-align: center; }
.cf-cover h1 { font-size: 64px; line-height: 1.04; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 12px 26px; }
.cf-cover h1 .cf-stamp { font-size: 46px; letter-spacing: .14em; padding: 8px 20px 4px 28px; border-width: 5px; border-radius: 12px; transform: rotate(-5deg); }
.cf-topic { font: 700 24px var(--soft); background: var(--tint); color: var(--deep); border-radius: 999px; padding: 6px 24px; }
.cf-files { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; width: 100%; max-width: 760px; margin-top: 6px; }
.cf-file { text-align: left; background: #fff; border: 2px dashed color-mix(in srgb, var(--c) 80%, #fff); border-radius: 14px; padding: 12px 16px 14px; display: grid; gap: 4px; }
.cf-file small { font: 700 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; color: var(--deep); }
.cf-file b { font: 600 21px/1.15 var(--soft); }

.cf-txt { width: 100%; max-width: 900px; display: grid; gap: 8px; justify-items: center; }
.cf-txt h2 { font-size: 34px; line-height: 1.1; text-align: center; }
.cf-card { position: relative; width: 100%; background: var(--tint); border-radius: 16px; padding: 18px 30px; }
.cf-card p { margin: 0 0 10px; font-size: 18px; line-height: 1.62; font-weight: 600; color: #2A3B5C; text-align: justify; text-indent: 2em; }
.cf-card p:last-of-type { margin: 0; }
.cf-kw { font: inherit; color: inherit; background: color-mix(in srgb, var(--c) 55%, #fff); border: none; border-bottom: 2.5px solid var(--deep); border-radius: 4px 4px 0 0; padding: 0 3px; cursor: pointer; font-weight: 800; }
.cf-kw:hover, .cf-kw.open { background: var(--deep); color: #fff; }
.cf-pop { position: absolute; z-index: 20; width: 260px; background: var(--navy); color: #fff; border-radius: 14px; padding: 12px 16px 13px; box-shadow: 0 12px 28px rgba(31,58,95,.3); text-indent: 0; text-align: left; }
.cf-pop::after { content: ""; position: absolute; left: var(--ax, 40px); bottom: -8px; width: 16px; height: 16px; background: var(--navy); transform: rotate(45deg); border-radius: 3px; }
.cf-pop.is-below::after { bottom: auto; top: -8px; }
.cf-pop b { display: block; font: 700 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; color: color-mix(in srgb, var(--c) 80%, #fff); margin-bottom: 3px; }
.cf-pop span { font: 700 16px/1.35 var(--sans); }

.cf-q { width: 100%; max-width: 820px; display: grid; gap: 13px; }
.cf-qh { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.cf-see { font: 700 13px var(--mono); background: #fff; border: 2px solid var(--c); border-radius: 999px; padding: 6px 16px; cursor: pointer; }
.cf-prompt { margin: 0; font: 700 28px/1.3 var(--soft); }
.cf-opts { display: grid; gap: 10px; }
.cf-opt { display: flex; align-items: center; gap: 14px; text-align: left; font: 700 17.5px/1.35 var(--sans); background: #fff; border: 2px solid color-mix(in srgb, var(--c) 75%, #fff); border-radius: 14px; padding: 12px 18px; cursor: pointer; }
.cf-opt .l { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; font: 700 14px var(--mono); background: var(--c); }
.cf-opt.pick { border-color: var(--deep); background: var(--tint); }
.cf-opt.ok { background: #2FBF71; color: #fff; border-color: #2FBF71; }
.cf-opt.bad { background: var(--bad); color: #fff; border-color: var(--bad); }
.cf-opt.dim { opacity: .45; }
.cf-opt:disabled { cursor: default; }
.cf-qf { min-height: 58px; display: flex; align-items: center; }
.cf-chk { font: 700 15px var(--mono); letter-spacing: .06em; text-transform: uppercase; color: #fff; background: var(--deep); border: none; border-radius: 12px; padding: 12px 30px; cursor: pointer; }
.cf-chk:disabled { opacity: .35; cursor: default; }
.cf-why { width: 100%; border: 2px solid var(--c); background: var(--tint); border-radius: 14px; padding: 11px 190px 11px 18px; font-size: 15px; line-height: 1.5; font-weight: 600; display: grid; gap: 7px; }
.cf-why .cf-stamp--small { position: absolute; right: 56px; bottom: 36px; font-size: 24px; transform: rotate(-9deg); }
.cf-ev { font-size: 14.5px; }
.cf-ev b { font: 700 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; color: var(--deep); margin-right: 6px; }
.cf-ev mark { background: #FFE27A; color: inherit; padding: 1px 4px; border-radius: 3px; margin-right: 4px; }
.cf-overlay { position: absolute; z-index: 8; inset: 46px 16px 14px 40px; background: #fff; border: 2px solid var(--c); border-radius: 14px; padding: 16px 24px; overflow-y: auto; box-shadow: 0 12px 30px rgba(31,58,95,.25); }
.cf-overlay-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; font: 700 20px var(--soft); }
.cf-overlay-head button { font: 700 13px var(--mono); color: #fff; background: var(--deep); border: none; border-radius: 999px; padding: 6px 16px; cursor: pointer; }
.cf-overlay-text p { margin: 0 0 10px; text-align: justify; text-indent: 2em; font-size: 15.5px; font-weight: 600; line-height: 1.6; color: #2A3B5C; }
.cf-overlay-text p:last-child { margin: 0; }
.cf-wrap .e8-mark { background: #FFE27A; color: inherit; border-radius: 3px; padding: 0 2px; }

.cf-vocab { width: 100%; display: grid; gap: 9px; }
.cf-tray { display: flex; flex-wrap: wrap; gap: 8px; min-height: 80px; align-content: flex-start; padding: 10px 12px; border-radius: 14px; background: var(--tint); }
.cf-none { font: 700 15px var(--soft); color: var(--deep); margin: auto; }
.cf-tag { display: inline-flex; align-items: center; gap: 8px; height: 38px; padding: 0 14px 0 8px; font: 700 18px var(--soft); background: #fff; border: 2px solid color-mix(in srgb, var(--c) 80%, #fff); border-radius: 12px; cursor: grab; box-shadow: 0 3px 0 rgba(31,58,95,.1); user-select: none; }
.cf-tag i { font: 700 11px var(--mono); font-style: normal; width: 20px; height: 20px; border-radius: 50%; display: grid; place-items: center; background: var(--c); }
.cf-tag.t-B i { background: var(--navy); color: #fff; }
.cf-tag.sel { border-color: var(--deep); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 70%, transparent), 0 3px 0 rgba(31,58,95,.1); transform: translateY(-2px); }
.cf-tag.shake { animation: cf-shake .4s; }
.cf-ctx { min-height: 44px; border-radius: 12px; border: 2px dashed color-mix(in srgb, var(--c) 80%, #fff); padding: 7px 14px; font-size: 14.5px; line-height: 1.4; font-weight: 600; display: flex; gap: 10px; align-items: baseline; }
.cf-ctx b { font: 700 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; color: var(--deep); flex: 0 0 auto; }
.cf-ctx mark { background: #FFE27A; color: inherit; padding: 0 3px; border-radius: 3px; font-weight: 800; }
.cf-ctx .hintc { color: var(--blue); font-weight: 700; }
.cf-slots { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 18px; }
.cf-col { display: grid; gap: 8px; align-content: start; }
.cf-col > small { font: 700 12px var(--mono); letter-spacing: .1em; text-transform: uppercase; color: var(--deep); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cf-slot { display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 10px; min-height: 43px; padding: 4px 10px 4px 6px; border: 2px dashed color-mix(in srgb, var(--c) 80%, #fff); border-radius: 12px; background: #fff; text-align: left; font: 700 14.5px/1.3 var(--sans); cursor: pointer; }
.cf-slot .w { height: 32px; border-radius: 9px; background: var(--tint); display: grid; place-items: center; font: 700 17px var(--soft); color: var(--deep); }
.cf-slot.over { border-style: solid; border-color: var(--deep); background: var(--tint); }
.cf-slot.done { border: 2px solid #2FBF71; background: #E7F8EE; cursor: default; }
.cf-slot.done .w { background: #2FBF71; color: #fff; }
.cf-slot.flash { border: 2px solid var(--bad); background: #FFE9E7; animation: cf-shake .4s; }
@keyframes cf-shake { 0%, 100% { transform: none; } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }

.cf-end { display: grid; gap: 14px; justify-items: center; text-align: center; width: 100%; max-width: 720px; }
.cf-end h2 { font-size: 36px; line-height: 1.15; }
.cf-end .cf-stamp { font-size: 34px; margin-bottom: 16px; }
.cf-big { display: flex; align-items: baseline; gap: 10px; background: var(--deep); color: #fff; padding: 8px 34px; border-radius: 18px; }
.cf-big span { font: 700 58px/1.1 var(--soft); }
.cf-big small { font-size: 16px; opacity: .85; }
.cf-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; width: 100%; }
.cf-tile { background: var(--tint); padding: 12px 8px; display: grid; gap: 3px; border: 2px solid var(--c); border-radius: 16px; }
.cf-tile small { font: 700 12px var(--mono); letter-spacing: .08em; text-transform: uppercase; color: var(--deep); }
.cf-tile b { font: 700 28px var(--soft); }
.cf-tile span { font-size: 12.5px; color: var(--blue); line-height: 1.3; }

@media (prefers-reduced-motion: reduce) { .cf-tag.shake, .cf-slot.flash { animation: none; } }
`;
