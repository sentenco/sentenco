import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import { B1_LESSONS } from "./justTalkB1Data";
import { B1_BOARDS, B1_PHRASES, B1_REACT } from "./justTalkB1Boards";
import { Ink, Items } from "./JustTalkInk.jsx";
import { readPhoto } from "./justTalkPhoto.js";
import { fitBoardWindow } from "./justTalkWindow.js";
import { ONAIR_CSS as CSS } from "./justTalkOnAirCss.js";

// Just Talk Board for B1-B2: a lighter board for students who can talk without a translator.
// One step at a time (hook, facts, words, grammar, discuss, challenge, wrap-up), a "Fix it" drawer
// for live corrections. Saved per lesson in just_talk_boards (student "B1-B2", key "b1/<lesson>"); no student picker.
// Look: "On Air" in the B1-B2 banner colors (deep teal, mint, bulb yellow). One slim centered top bar; steps live in a floating bar at the bottom (a talk-show studio: ON AIR light, rundown of steps, cue cards, prompter, caption bars; Bricolage Grotesque + Outfit), 25-minute lessons,
// with the A1-A2 annotation rail on the left (pen, text, eraser, spotlight, stamps, picture). Drawings are kept per step.

const OWNER_EMAIL = "caldrin1999@gmail.com";

const LESSON_STEPS = [["hook", "Hook", "0-2 min"], ["facts", "Facts", "2-5 min"], ["words", "Words", "5-8 min"], ["grammar", "Grammar", "8-11 min"], ["discuss", "Discuss", "11-18 min"], ["challenge", "Challenge", "18-23 min"], ["wrap", "Wrap-up", "23-25 min"]];
const CHECK_STEPS = [["recap", "Recap", "0-5 min"], ["wordquiz", "Words", "5-8 min"], ["gmix", "Grammar", "8-12 min"], ["talk", "Talk", "12-18 min"], ["discuss", "Discuss", "18-23 min"], ["wrap", "Wrap-up", "23-25 min"]];
const LANGS = ["Hebrew", "Polish", "Spanish", "Portuguese", "French", "German", "Italian", "Russian", "Ukrainian", "Turkish", "Arabic", "Chinese", "Japanese", "Korean"];
const GT = { Hebrew: "iw", Polish: "pl", Spanish: "es", Portuguese: "pt", French: "fr", German: "de", Italian: "it", Russian: "ru", Ukrainian: "uk", Turkish: "tr", Arabic: "ar", Chinese: "zh-CN", Japanese: "ja", Korean: "ko" };
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } };
const uid = () => Math.random().toString(36).slice(2, 9);
const EMPTY = () => ({ step: 0, hookGuess: null, hookShown: false, fi: 0, wi: null, seen: {}, wtr: {}, ws: {}, gi: 0, gAns: {}, qi: 0, rev: {}, ci: 0, cg: {}, cr: {}, gs: {}, rk: [], rkShow: false, side: null, ideas: {}, sum: ["", "", ""], fixes: [], fixRev: {}, used: {}, mi: 0, mrev: {}, ri: 0, recRev: {}, qz: 0, qzRev: {}, topic: null, ticks: {}, strokes: {}, items: {} });
const BOARD_STUDENT = "B1-B2";
const STAMPS = [["Great point!", "#2C7A6E"], ["Nice phrase!", "#E0A21F"], ["Wow!", "#1F5E55"]];
const INKS = ["#15302A", "#2C7A6E", "#E0A21F"];

function seededOrder(n, seed) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { h = (h * 1103515245 + 12345) >>> 0; const j = h % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  if (a.every((v, i) => v === i) && n > 1) a.reverse();
  return a;
}
function say(text) {
  try { const u = new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g, "")); u.lang = "en-US"; u.rate = 0.9; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); } catch { /* no speech */ }
}
const Ms = ({ n }) => <span className="ms" aria-hidden="true">{n}</span>;
const Html = ({ s, as: Tag = "span", className }) => <Tag className={className} dangerouslySetInnerHTML={{ __html: s }} />;
const Blanks = ({ text }) => <>{String(text).split("___").map((p, i, arr) => <span key={i}>{p}{i < arr.length - 1 && <span className="blank" />}</span>)}</>;
const Stress = ({ s }) => <span className="stress">{s.split(/[-\s]/).map((p, i) => <span key={i}>{i > 0 && "·"}{p === p.toUpperCase() ? <em>{p}</em> : p}</span>)}</span>;
const Ph = ({ n, title, children }) => <div className="ph">{n !== undefined && n !== "" && <span className="n">{n}</span>}<h2>{title}</h2>{children}</div>;

function StepNav({ i, n, onGo, noun = "" }) {
  return (
    <div className="stepnav">
      <button type="button" disabled={i === 0} onClick={() => onGo(i - 1)}><Ms n="chevron_left" />Back</button>
      <div className="sn-dots">{Array.from({ length: n }, (_, j) => <i key={j} className={j === i ? "cur" : j < i ? "on" : ""} />)}</div>
      <button type="button" className="nx" disabled={i === n - 1} onClick={() => onGo(i + 1)}>Next{noun ? ` ${noun}` : ""}<Ms n="chevron_right" /></button>
    </div>
  );
}

function Timer({ secs }) {
  const [left, setLeft] = useState(secs);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!run) return undefined;
    const t = setInterval(() => setLeft((l) => { if (l <= 1) { setRun(false); return 0; } return l - 1; }), 1000);
    return () => clearInterval(t);
  }, [run]);
  return (
    <div className="timer">
      <span className={`clock ${left === 0 ? "done" : ""}`}>{left === 0 ? "Time!" : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`}</span>
      <button type="button" className="ans-btn ghost" onClick={() => { if (left === 0) setLeft(secs); setRun(!run); }}><Ms n={run ? "pause" : "play_arrow"} />{run ? "Pause" : "Start"}</button>
      <button type="button" className="ans-btn ghost" onClick={() => { setRun(false); setLeft(secs); }}><Ms n="restart_alt" />Reset</button>
    </div>
  );
}

function Editable({ value, onChange, className, ph }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current && ref.current.textContent !== value) ref.current.textContent = value || ""; }, [value]);
  return <span ref={ref} className={className} contentEditable suppressContentEditableWarning data-ph={ph} onInput={(e) => onChange(e.currentTarget.textContent)} />;
}

export default function JustTalkB1Board() {
  const { user, loading } = useAuth();
  const { lesson } = useParams();
  const L = useMemo(() => B1_LESSONS.find((x) => x.key === lesson), [lesson]);
  const B = B1_BOARDS[lesson];
  const isCheck = !!B?.check;
  const steps = isCheck ? CHECK_STEPS : LESSON_STEPS;
  const docKey = `b1/${lesson}`;

  const student = BOARD_STUDENT;
  const [lang, setLang] = useState(() => lsGet("jt1-lang", "Hebrew"));
  const [doc, setDoc] = useState(EMPTY);
  const [page, setPage] = useState("lesson");
  // Blank pages live only in this window: they keep their writing while you switch pages and are gone when the board is closed.
  const [scratch, setScratch] = useState({ pages: [], strokes: {}, items: {} });
  const [saveMsg, setSaveMsg] = useState("");
  const [online, setOnline] = useState(true);
  const [fixOpen, setFixOpen] = useState(false);
  const [fSaid, setFSaid] = useState("");
  const [fBetter, setFBetter] = useState("");
  const [fKind, setFKind] = useState("fix");
  const [animKey, setAnimKey] = useState(0);
  const [tool, setTool] = useState("move");
  const [color, setColor] = useState(INKS[0]);
  const [stamp, setStamp] = useState(null);
  const [height, setHeight] = useState(1000);
  const loadedFor = useRef(null);
  const saidRef = useRef(null);
  const sheetRef = useRef(null);

  const patch = useCallback((p) => setDoc((d) => ({ ...d, ...(typeof p === "function" ? p(d) : p) })), []);


  useEffect(() => {
    if (!user || !B) return;
    const forKey = `${student}|${docKey}`;
    const apply = (data) => { loadedFor.current = forKey; setDoc({ ...EMPTY(), ...(data || {}) }); setSaveMsg(data ? "Opened saved board" : ""); setAnimKey((k) => k + 1); };
    if (!student) { apply(null); return; }
    const local = lsGet(`jt-board|${forKey}`, null);
    supabase.from("just_talk_boards").select("data").eq("student", student).eq("lesson_key", docKey).maybeSingle().then(({ data, error }) => {
      if (error) { setOnline(false); apply(local); return; }
      apply(data?.data || local);
    });
  }, [user, B, student, docKey]);

  const save = useCallback(async () => {
    if (!student) return;
    const forKey = `${student}|${docKey}`;
    if (loadedFor.current !== forKey) return;
    lsSet(`jt-board|${forKey}`, doc);
    if (online) {
      const { error } = await supabase.from("just_talk_boards").upsert({ student, lesson_key: docKey, data: doc, updated_at: new Date().toISOString() }, { onConflict: "owner_id,student,lesson_key" });
      if (error) { setOnline(false); setSaveMsg("Saved in this browser only"); return; }
    }
    setSaveMsg(`Saved ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}${online ? "" : " in this browser"}`);
  }, [student, docKey, doc, online]);

  useEffect(() => {
    if (!student) return undefined;
    const t = setTimeout(save, 2500);
    return () => clearTimeout(t);
  }, [doc, student, save]);

  const goStep = useCallback((i) => { patch({ step: Math.max(0, Math.min(steps.length - 1, i)) }); setAnimKey((k) => k + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }, [patch, steps.length]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setFixOpen(false); setTool("move"); setStamp(null); sheetRef.current?.classList.remove("spot"); sheetRef.current?.querySelectorAll(".lit").forEach((x) => x.classList.remove("lit")); }
      if (e.target.closest?.("[contenteditable], input, select, textarea")) return;
      if (page !== "lesson") return;
      if (e.key === "ArrowRight") goStep(doc.step + 1);
      if (e.key === "ArrowLeft") goStep(doc.step - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, goStep, doc.step]);

  // Always sit in half the screen.
  useEffect(() => { fitBoardWindow(); }, []);

  // Keep the drawing layer as tall as the sheet.
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [page, loading, user]);

  if (loading) return null;
  if (user?.email?.toLowerCase() !== OWNER_EMAIL) return <div className="jt1"><style>{CSS}</style><p className="denied">Not available.</p></div>;
  if (!L || !B) return <div className="jt1"><style>{CSS}</style><p className="denied">This lesson doesn't have a board yet.</p></div>;

  const step = Math.min(doc.step, steps.length - 1);
  const stepKey = steps[step][0];
  const words = isCheck ? B.wordquiz.map((w) => w[1]) : B.words.map((w) => w[0]);
  const phrases = B.phrases || B1_PHRASES[((L.modNum || L.stage) + (L.n || 0)) % B1_PHRASES.length];
  const kicker = isCheck ? `Stage ${L.stage} · ${L.lv} · Check-in` : `Stage ${L.stage} · Module ${String(L.modNum).padStart(2, "0")} ${L.module} · Lesson ${L.n}`;
  const addFix = () => {
    const said = fSaid.trim();
    if (!said) { saidRef.current?.focus(); return; }
    patch((d) => ({ fixes: [...(d.fixes || []), { id: uid(), kind: fKind, said, better: fBetter.trim() }] }));
    setFSaid(""); setFBetter(""); saidRef.current?.focus();
  };
  const ak = page === "lesson" ? `s${step}` : page;
  const free = page.startsWith("p-");
  const layer = free ? scratch : doc;
  const pageItems = (layer.items || {})[ak] || [];
  const pageStrokes = (layer.strokes || {})[ak] || [];
  const setLayer = (fn) => (free ? setScratch((x) => ({ ...x, ...fn(x) })) : patch(fn));
  const setItems = (list) => setLayer((d) => ({ items: { ...(d.items || {}), [ak]: list } }));
  const addPage = () => { const id = `p-${uid()}`; setScratch((x) => ({ ...x, pages: [...x.pages, id] })); setPage(id); setAnimKey((k) => k + 1); };
  const closePage = (id) => { setScratch((x) => { const strokes = { ...x.strokes }, items = { ...x.items }; delete strokes[id]; delete items[id]; return { pages: x.pages.filter((p) => p !== id), strokes, items }; }); if (page === id) setPage("lesson"); };
  function clearSpot() { sheetRef.current?.classList.remove("spot"); sheetRef.current?.querySelectorAll(".lit").forEach((x) => x.classList.remove("lit")); }
  function pickTool(id) { setTool(tool === id && id !== "move" ? "move" : id); setStamp(null); if (id !== "spot") clearSpot(); }
  function onSheetClick(e) {
    if (e.target.closest(".item")) return;
    const r = sheetRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (tool === "text") { setItems([...pageItems, { id: uid(), type: "txt", x: x - 10, y: y - 18, text: "", focus: true }]); setTool("move"); }
    else if (tool === "stamp" && stamp) { setItems([...pageItems, { id: uid(), type: "stamp", x: x - 60, y: y - 18, text: stamp[0], bg: stamp[1] }]); setTool("move"); setStamp(null); }
    else if (tool === "spot") {
      const hit = e.target.closest(".stack, .wcard, .rule, .act-box, .sticky-wrap, .notes, .words, .lines, .fixes, .fu-wrap, .tf-card");
      const already = hit?.classList.contains("lit");
      clearSpot();
      if (hit && !already) { hit.classList.add("lit"); sheetRef.current.classList.add("spot"); }
    }
  }
  function addPicture(file) {
    const top = Math.max(40, window.scrollY - (sheetRef.current?.offsetTop || 0) + 80);
    readPhoto(file, (src) => { setItems([...pageItems, { id: uid(), type: "img", x: 40, y: top, w: 300, src }]); setTool("move"); });
  }
  const goNext = null; // moving on happens in the floating step bar at the bottom

  function Tr({ w }) {
    const he = w[4], pl = w[5];
    const written = lang === "Hebrew" ? he : lang === "Polish" ? pl : null;
    if (!written) return <a className="tr-btn" href={`https://translate.google.com/?sl=en&tl=${GT[lang] || "en"}&text=${encodeURIComponent(w[0])}&op=translate`} target="_blank" rel="noreferrer"><Ms n="open_in_new" />{lang} (Google)</a>;
    if (doc.wtr[`${w[0]}|${lang}`]) return <span className="tr-out" dir={lang === "Hebrew" ? "rtl" : undefined}><Ms n="translate" />{written}</span>;
    return <button type="button" className="tr-btn" onClick={() => patch((d) => ({ wtr: { ...d.wtr, [`${w[0]}|${lang}`]: true } }))}><Ms n="translate" />{lang} backup</button>;
  }

  /* ----- lesson steps ----- */
  function Hook() {
    const h = B.hook;
    return (<>
      <div className="part">
        <div className="stack cover"><div className="icard cover-card"><small>Tonight's topic · {isCheck ? kicker : `Module ${String(L.modNum).padStart(2, "0")} · ${L.module} · Lesson ${L.n}`}</small><h1>{L.title}</h1><span className="tag"><Ms n="menu_book" />Grammar: {B.grammar.name}</span></div></div>
      </div>
      <div className="part">
        <Ph n="1" title="Guess first" />
        <div className="stack"><div className="icard"><small>{h.opts.length === 2 && h.opts[0] === "True" ? "True or false?" : "What do you think?"}</small><p className="q">{h.q}</p>
          <div className="q-tools">
            {h.opts.map((o, i) => <button key={o} type="button" className={`ans-btn ${doc.hookGuess === i ? "on" : "ghost"}`} onClick={() => patch({ hookGuess: i })}>{o}</button>)}
            {!doc.hookShown && <button type="button" className="ans-btn red" onClick={() => patch({ hookShown: true })}><Ms n="visibility" />Reveal</button>}
          </div></div></div>
        {doc.hookShown && <div className="sticky-wrap"><div className="sticky big pop"><small>{h.opts[h.a]}{doc.hookGuess === null ? "" : doc.hookGuess === h.a ? " · good guess!" : " · nice try!"}</small>{h.reveal}</div></div>}
      </div>
      {goNext}
    </>);
  }
  function Facts() {
    const fi = Math.min(doc.fi, B.facts.length - 1), f = B.facts[fi];
    return (<>
      <div className="part">
        <Ph n={`${fi + 1}/${B.facts.length}`} title="Did you know?" />
        <div className="stack"><div className="icard pop" key={fi}><small>Fact {fi + 1}</small><p className="q">{f[0]}</p><p className="d">{f[1]}</p></div></div>
        <div className="notes">{B1_REACT.map((r) => <div key={r} className="sticky">{r}</div>)}</div>
        <StepNav i={fi} n={B.facts.length} onGo={(i) => patch({ fi: i })} noun="fact" />
      </div>
      {goNext}
    </>);
  }
  function Words() {
    const w = doc.wi === null ? null : B.words[doc.wi];
    return (<>
      <div className="part">
        <Ph n={B.words.length} title="New words" />
        <div className="words">{B.words.map((x, i) => <button key={x[0]} type="button" className={`word ${doc.wi === i ? "on" : doc.seen[x[0]] ? "seen" : ""}`} onClick={() => patch((d) => ({ wi: d.wi === i ? null : i, seen: { ...d.seen, [x[0]]: true } }))}>{x[0]}</button>)}</div>
        {w && (
          <div className="wcard pop" key={w[0]}>
            <div className="lower">
              <div className="lt-tag"><b>{w[0]}</b><Stress s={w[1]} /></div>
              <div className="lt-txt"><p className="wmean">{w[2]}</p><div className="wex-row"><Html as="p" className="wex" s={w[3]} /><button type="button" className="spk sm" onClick={() => say(w[3])} aria-label="Listen to the example"><Ms n="volume_up" /></button></div></div>
              <button type="button" className="spk" onClick={() => say(w[0])} aria-label="Listen"><Ms n="volume_up" /></button>
            </div>
            <div className="wfoot">
              <span className="sticky mine">Your sentence: <Editable className="fill" ph="..." value={doc.ws[w[0]] || ""} onChange={(v) => patch((d) => ({ ws: { ...d.ws, [w[0]]: v } }))} /></span>
              {Tr({ w })}
            </div>
          </div>
        )}
      </div>
      {goNext}
    </>);
  }
  function GrammarItems({ items, label }) {
    const gi = Math.min(doc.gi, items.length - 1), it = items[gi];
    const q = it.length === 3 ? it[1] : it[0], a = it.length === 3 ? it[2] : it[1];
    return (<>
      <div className="stack fu"><div className="icard pop" key={gi}><small>{it.length === 3 ? it[0] : label}</small><p className="q"><Blanks text={q} /></p>
        <div className="q-tools">{!doc.gAns[gi] && <button type="button" className="ans-btn" onClick={() => patch((d) => ({ gAns: { ...d.gAns, [gi]: true } }))}><Ms n="visibility" />Show answer</button>}</div></div></div>
      {doc.gAns[gi] && <div className="sticky-wrap"><div className="sticky green pop">{a}</div></div>}
      <StepNav i={gi} n={items.length} onGo={(i) => patch({ gi: i })} />
    </>);
  }
  function Grammar() {
    const G = B.grammar;
    return (<>
      <div className="part">
        <Ph n="★" title="Grammar takeaway" />
        <div className="rule"><small>Today's grammar</small><h3>{G.name}</h3><p>{G.rule}</p><ul className="ex">{G.ex.map((e) => <Html as="li" key={e} s={e} />)}</ul></div>
        <div className="sticky-wrap"><div className="sticky"><small>Watch out</small>{G.watch}</div></div>
      </div>
      <div className="part">
        <Ph n={`${Math.min(doc.gi, G.items.length - 1) + 1}/${G.items.length}`} title="Your turn" />
        {GrammarItems({ items: G.items, label: "Complete it" })}
        {doc.gi >= G.items.length - 1 && <div className="sticky-wrap"><div className="sticky big"><small>Now you</small>{G.now}</div></div>}
      </div>
      {goNext}
    </>);
  }
  function Discuss() {
    const qi = Math.min(doc.qi, B.qs.length - 1), q = B.qs[qi];
    const r = (k) => doc.rev[`${qi}${k}`];
    const show = (k) => patch((d) => ({ rev: { ...d.rev, [`${qi}${k}`]: true } }));
    return (<>
      <div className="part">
        <Ph title="Useful phrases" />
        <div className="notes">{phrases.map((p) => <div key={p} className="sticky">{p}</div>)}</div>
      </div>
      <div className="part">
        <Ph n={`${qi + 1}/${B.qs.length}`} title="Let's talk" />
        <div className="stack"><div className="icard pop" key={qi}><small>Question {qi + 1}</small><p className="q">{q[0]}</p>
          <div className="q-tools">
            {!r("f") && <button type="button" className="ans-btn ghost" onClick={() => show("f")}><Ms n="help" />Why? Follow-up</button>}
            {!r("p") && <button type="button" className="ans-btn ghost" onClick={() => show("p")}><Ms n="trending_up" />Push further</button>}
            {!r("m") && <button type="button" className="ans-btn" onClick={() => show("m")}><Ms n="lightbulb" />My answer</button>}
          </div></div></div>
        {(r("f") || r("p")) && <div className="fu-wrap">
          {r("f") && <div className="stack fu pop"><div className="icard"><small>Follow-up</small><p className="q">{q[1]}</p></div></div>}
          {r("p") && <div className="stack fu push pop"><div className="icard"><small>Push further</small><p className="q">{q[2]}</p></div></div>}
        </div>}
        {r("m") && <div className="sticky-wrap"><div className="sticky pop"><small>Teacher's answer</small>{q[3]}</div></div>}
        <StepNav i={qi} n={B.qs.length} onGo={(i) => patch({ qi: i })} noun="question" />
      </div>
      {goNext}
    </>);
  }
  function Challenge() {
    const C = B.challenge;
    const head = <Ph n="★" title={`Challenge: ${C.name}`} />;
    if (C.type === "rank") {
      const order = seededOrder(C.items.length, lesson);
      const pos = (i) => doc.rk.indexOf(i);
      const tap = (i) => patch((d) => (d.rkShow ? {} : { rk: d.rk.includes(i) ? d.rk.slice(0, d.rk.indexOf(i)) : [...d.rk, i] }));
      const right = doc.rk.filter((x, p) => x === p).length;
      return (<>
        <div className="part">{head}
          <div className="act-box">
            <p className="how">{C.how}</p>
            <div className="order-list">{order.map((i) => <button key={i} type="button" className={`ord ${pos(i) >= 0 ? "on" : ""}`} onClick={() => tap(i)}><span className="ord-n">{pos(i) >= 0 ? pos(i) + 1 : ""}</span>{C.items[i][0]}</button>)}</div>
            <div className="row">
              {!doc.rkShow && <button type="button" className="ans-btn red" disabled={doc.rk.length < C.items.length} onClick={() => patch({ rkShow: true })}><Ms n="fact_check" />Check</button>}
              <button type="button" className="ans-btn ghost" onClick={() => patch({ rk: [], rkShow: false })}><Ms n="restart_alt" />Start again</button>
            </div>
            {doc.rkShow && (<div className="answer-list pop">
              <span className="score">{right} of {C.items.length} in the right place</span>
              {C.items.map((it, i) => <div key={i} className={`ans-row ${doc.rk[i] === i ? "ok" : ""}`}><span className="ord-n">{i + 1}</span><b>{it[0]}</b><span className="note">{it[1]}</span><Ms n={doc.rk[i] === i ? "check_circle" : "close"} /></div>)}
            </div>)}
          </div>
        </div>
        {goNext}
      </>);
    }
    if (C.type === "debate") {
      const col = (k, title, list) => (
        <div className={`side ${doc.side === k ? "on" : ""}`}>
          <button type="button" className="side-h" onClick={() => patch({ side: doc.side === k ? null : k })}><Ms n={doc.side === k ? "radio_button_checked" : "radio_button_unchecked"} />{title}</button>
          {doc.ideas[k] ? <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul> : <button type="button" className="mini-btn" onClick={() => patch((d) => ({ ideas: { ...d.ideas, [k]: true } }))}><Ms n="lightbulb" />Show ideas</button>}
        </div>
      );
      return (<>
        <div className="part">{head}
          <div className="act-box">
            <p className="how">{C.how}</p>
            <div className="stack fu"><div className="icard"><small>The motion</small><p className="q">{C.motion}</p></div></div>
            <div className="sides">{col("for", "Agree", C.for)}{col("against", "Disagree", C.against)}</div>
            <Timer secs={C.time || 60} />
          </div>
        </div>
        {goNext}
      </>);
    }
    const ci = Math.min(doc.ci, C.cards.length - 1), c = C.cards[ci];
    const shown = doc.cr[ci];
    let body;
    if (C.type === "tf") {
      const g = doc.cg[ci];
      const done = C.cards.filter((x, i) => doc.cr[i]).length;
      const right = C.cards.filter((x, i) => doc.cr[i] && doc.cg[i] === x[1]).length;
      body = (<>
        <div className="tf-card pop" key={ci}><small>{ci + 1} of {C.cards.length}</small><p className="q">{c[0]}</p>
          {shown && <><div className={`verdict ${c[1] ? "t" : "f"}`}>{c[1] ? "True" : "Fake"}</div><p className="why">{c[2]}</p></>}</div>
        <div className="row">
          <button type="button" className={`ans-btn ${g === true ? "on" : "ghost"}`} onClick={() => patch((d) => ({ cg: { ...d.cg, [ci]: true } }))}><Ms n="check" />True</button>
          <button type="button" className={`ans-btn ${g === false ? "on" : "ghost"}`} onClick={() => patch((d) => ({ cg: { ...d.cg, [ci]: false } }))}><Ms n="close" />Fake</button>
          {!shown && <button type="button" className="ans-btn red" onClick={() => patch((d) => ({ cr: { ...d.cr, [ci]: true } }))}><Ms n="visibility" />Reveal</button>}
        </div>
        {done > 0 && <span className="score">{right} of {done} right</span>}
      </>);
    } else if (C.type === "guess") {
      body = (<>
        <div className="tf-card pop" key={ci}><small>{ci + 1} of {C.cards.length}</small><p className="q">{c[0]}</p>
          {shown && <div className="verdict t">{c[1]}</div>}</div>
        <div className="row">
          <span className="sticky mine">My guess: <Editable className="fill" ph="..." value={doc.gs[ci] || ""} onChange={(v) => patch((d) => ({ gs: { ...d.gs, [ci]: v } }))} /></span>
          {!shown && <button type="button" className="ans-btn red" onClick={() => patch((d) => ({ cr: { ...d.cr, [ci]: true } }))}><Ms n="visibility" />Reveal</button>}
        </div>
      </>);
    } else {
      body = (<>
        <div className="tf-card pop" key={ci}><small>{ci + 1} of {C.cards.length}</small><p className="q">{c[0]}</p>
          {c[1] && (shown ? <p className="why">{c[1]}</p> : <button type="button" className="mini-btn" onClick={() => patch((d) => ({ cr: { ...d.cr, [ci]: true } }))}><Ms n="lightbulb" />Tip</button>)}</div>
        {C.time && <Timer key={`timer-${ci}`} secs={C.time} />}
      </>);
    }
    return (<>
      <div className="part">{head}
        <div className="act-box">
          <p className="how">{C.how}</p>
          {body}
        </div>
        <StepNav i={ci} n={C.cards.length} onGo={(i) => patch({ ci: i })} />
      </div>
      {goNext}
    </>);
  }
  function Wrap() {
    const fixes = doc.fixes || [];
    return (<>
      <div className="part">
        <Ph n="1" title="Sum it up" />
        <div className="stack fu"><div className="icard"><small>Your turn</small><p className="q">{B.sum}</p></div></div>
        <div className="lines">{doc.sum.map((t, i) => <div key={i} className="line"><i>{i + 1}</i><Editable className="ed" ph="..." value={t} onChange={(v) => patch((d) => { const s = [...d.sum]; s[i] = v; return { sum: s }; })} /></div>)}</div>
        <div className="words small">{words.map((w) => <span key={w} className={`word ${doc.used[w] ? "on" : ""}`}>{w}</span>)}</div>
      </div>
      <div className="part">
        <Ph n="2" title="Fix it together" />
        <div className="fixes">
          {fixes.length ? fixes.map((f) => (
            <div key={f.id} className={`fx ${f.kind === "up" ? "up" : ""}`}>
              <div className="fx-top"><span className="fx-kind">{f.kind === "up" ? "Upgrade it" : "Fix it"}</span>{!doc.fixRev[f.id] && f.better && <button type="button" className="ans-btn" onClick={() => patch((d) => ({ fixRev: { ...d.fixRev, [f.id]: true } }))}><Ms n="visibility" />Show better version</button>}</div>
              <div className="fx-said">{f.said}</div>
              {doc.fixRev[f.id] && f.better && <div className="fx-better pop"><Ms n="arrow_forward" />{f.better}</div>}
            </div>
          )) : <div className="empty">No notes yet. Tap <b>Fix it</b> at the top during the lesson to write down what the student says.</div>}
        </div>
      </div>
      <div className="part">
        <Ph n="3" title="At home" />
        <div className="sticky-wrap"><div className="sticky big">{B.home}</div></div>
      </div>
      {typeof window !== "undefined" && window.opener && <button type="button" className="go" onClick={() => window.close()}><Ms n="done_all" />Finish and close</button>}
    </>);
  }

  /* ----- check-in steps ----- */
  function Recap() {
    const ri = Math.min(doc.ri, B.recap.length - 1), m = B.recap[ri];
    return (<>
      <div className="part">
        <div className="stack cover"><div className="icard cover-card"><small>{kicker}</small><h1>{L.title}</h1><span className="tag"><Ms n="flag" />{L.hook}</span></div></div>
      </div>
      <div className="part">
        <Ph n={`${ri + 1}/${B.recap.length}`} title="What do you remember?" />
        <div className="stack"><div className="icard pop" key={ri}><small>Module</small><p className="q">{m[0]}</p>
          <div className="recap">{m[1].map(([t, fact], j) => {
            const k = `${ri}-${j}`;
            return (<div key={t} className="rc-row"><b>{t}</b>{doc.recRev[k] ? <span className="rc-fact pop">{fact}</span> : <button type="button" className="mini-btn" onClick={() => patch((d) => ({ recRev: { ...d.recRev, [k]: true } }))}><Ms n="lightbulb" />Show a fact</button>}</div>);
          })}</div>
        </div></div>
        <StepNav i={ri} n={B.recap.length} onGo={(i) => patch({ ri: i })} noun="module" />
      </div>
      {goNext}
    </>);
  }
  function WordQuiz() {
    const qz = Math.min(doc.qz, B.wordquiz.length - 1), w = B.wordquiz[qz];
    return (<>
      <div className="part">
        <Ph n={`${qz + 1}/${B.wordquiz.length}`} title="What's the word?" />
        <div className="stack"><div className="icard pop" key={qz}><small>Meaning</small><p className="q">{w[0]}</p>
          <div className="q-tools">{!doc.qzRev[qz] && <button type="button" className="ans-btn red" onClick={() => patch((d) => ({ qzRev: { ...d.qzRev, [qz]: true } }))}><Ms n="visibility" />Show the word</button>}</div></div></div>
        {doc.qzRev[qz] && <div className="sticky-wrap"><div className="sticky big green pop">{w[1]}</div></div>}
        <StepNav i={qz} n={B.wordquiz.length} onGo={(i) => patch({ qz: i })} noun="word" />
      </div>
      {goNext}
    </>);
  }
  function GMix() {
    return (<>
      <div className="part">
        <Ph n={`${Math.min(doc.gi, B.gmix.length - 1) + 1}/${B.gmix.length}`} title="Grammar review" />
        {GrammarItems({ items: B.gmix, label: "Complete it" })}
      </div>
      {goNext}
    </>);
  }
  function Talk() {
    const T = B.talk;
    return (<>
      <div className="part">
        <Ph n="★" title={`Talk for ${Math.round(T.time / 60)} minutes`} />
        <div className="act-box">
          <p className="how">Pick a topic. Talk about it for {Math.round(T.time / 60)} minutes without stopping. I tick each thing you use.</p>
          <div className="chips-row">{T.topics.map((t) => <button key={t} type="button" className={`chip ${doc.topic === t ? "on" : ""}`} onClick={() => patch({ topic: doc.topic === t ? null : t })}>{t}</button>)}</div>
          {doc.topic && <div className="stack fu pop"><div className="icard"><small>Your topic</small><p className="q">{doc.topic}</p></div></div>}
          <Timer secs={T.time} />
          <div className="checks">{T.checklist.map((c) => <button key={c} type="button" className={`ck ${doc.ticks[c] ? "on" : ""}`} onClick={() => patch((d) => ({ ticks: { ...d.ticks, [c]: !d.ticks[c] } }))}><Ms n={doc.ticks[c] ? "check_circle" : "radio_button_unchecked"} />{c}</button>)}</div>
        </div>
      </div>
      {goNext}
    </>);
  }

  function MorePage() {
    const list = B.more || [];
    const mi = Math.min(doc.mi, list.length - 1), q = list[mi];
    if (!q) return null;
    return (
      <div className="part">
        <Ph n={`${mi + 1}/${list.length}`} title="More questions" />
        <div className="stack"><div className="icard pop" key={mi}><small>Question {mi + 1}</small><p className="q">{q[0]}</p>
          <div className="q-tools">{!doc.mrev[mi] && <button type="button" className="ans-btn ghost" onClick={() => patch((d) => ({ mrev: { ...d.mrev, [mi]: true } }))}><Ms n="help" />Follow-up</button>}</div></div></div>
        {doc.mrev[mi] && <div className="fu-wrap"><div className="stack fu pop"><div className="icard"><small>Follow-up</small><p className="q">{q[1]}</p></div></div></div>}
        <StepNav i={mi} n={list.length} onGo={(i) => patch({ mi: i })} noun="question" />
      </div>
    );
  }

  const VIEWS = { hook: Hook, facts: Facts, words: Words, grammar: Grammar, discuss: Discuss, challenge: Challenge, wrap: Wrap, recap: Recap, wordquiz: WordQuiz, gmix: GMix, talk: Talk };
  const View = VIEWS[stepKey];
  const fixes = doc.fixes || [];

  return (
    <div className="jt1">
      <style>{CSS}</style>
      <div className="bar"><div className="bar-in">
        <div className="mark-t"><b>Just Talk · {L.lv}</b><span>{kicker}</span></div>
        <div className="right">
          <nav className="pages" aria-label="Pages">
            <button type="button" className={`pg ${page === "lesson" ? "on" : ""}`} onClick={() => setPage("lesson")}>{isCheck ? "Check-in" : "Lesson"}</button>
            {!isCheck && <button type="button" className={`pg ${page === "more" ? "on" : ""}`} onClick={() => setPage("more")}>More questions</button>}
            {scratch.pages.map((id, i) => (
              <button type="button" key={id} className={`pg ${page === id ? "on" : ""}`} onClick={() => setPage(id)}>Page {i + 1}
                <span className="pg-x" role="button" aria-label={`Close page ${i + 1}`} onClick={(e) => { e.stopPropagation(); closePage(id); }}><Ms n="close" /></span>
              </button>
            ))}
            <button type="button" className="pg add" onClick={addPage} aria-label="Add a blank page" title="Add a blank page"><Ms n="add" /></button>
          </nav>
          <label className="pill-sel teal"><Ms n="translate" /><select value={lang} onChange={(e) => { setLang(e.target.value); lsSet("jt1-lang", e.target.value); }} aria-label="Backup language">{LANGS.map((l) => <option key={l}>{l}</option>)}</select></label>
          <button type="button" className="tool fix" onClick={() => { setFixOpen(true); setTimeout(() => saidRef.current?.focus(), 200); }}><Ms n="edit_note" />Fix it <span className="badge">{fixes.length}</span></button>
          {saveMsg && <span className="saved" title={saveMsg}><Ms n="cloud_done" /></span>}
        </div>
      </div></div>

      <div className="stage">
        <div className="rail" role="toolbar" aria-label="Board tools">
          {[["move", "arrow_selector_tool", "Select"], ["pen", "stylus", "Pen"], ["text", "text_fields", "Text"], ["eraser", "ink_eraser", "Eraser"]].map(([id, ic, label]) => (
            <button type="button" key={id} className={`tl${tool === id ? " on" : ""}`} onClick={() => pickTool(id)}><Ms n={ic} />{label}</button>
          ))}
          <div className="inks">{INKS.map((c) => <button type="button" key={c} className={`dot${color === c ? " on" : ""}`} style={{ background: c }} aria-label="Ink color" onClick={() => { setColor(c); setTool("pen"); }} />)}</div>
          <hr />
          <button type="button" className={`tl${tool === "spot" ? " on" : ""}`} onClick={() => { if (tool === "spot") { setTool("move"); clearSpot(); } else setTool("spot"); }}><Ms n="highlight" />Spotlight</button>
          <div className="stamps">{STAMPS.map((st) => <button type="button" key={st[0]} className={`stmp${stamp?.[0] === st[0] ? " on" : ""}`} style={{ background: st[1] }} onClick={() => { setStamp(st); setTool("stamp"); }}>{st[0].replace(" point!", "!").replace(" phrase!", "!")}</button>)}</div>
          <hr />
          <label className="tl"><Ms n="add_photo_alternate" />Picture<input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) addPicture(f); }} /></label>
          <button type="button" className="tl" onClick={() => setLayer((d) => ({ strokes: { ...(d.strokes || {}), [ak]: [] }, items: { ...(d.items || {}), [ak]: [] } }))}><Ms n="mop" />Clear</button>
        </div>

        <div className="sheet-wrap">
          <section ref={sheetRef} className={`sheet${free ? " free" : ""}`} onClick={onSheetClick} style={{ cursor: tool === "text" ? "text" : tool === "stamp" ? "copy" : tool === "spot" ? "zoom-in" : undefined }}>
            <div className="lesson anim" key={`${page}-${animKey}`}>
              {page === "lesson" ? (<>
                {stepKey !== "hook" && stepKey !== "recap" && <div className="head"><h1>{L.title}</h1><span className="tag"><Ms n="schedule" />{steps[step][2]}</span></div>}
                {View()}
              </>) : page === "more" ? MorePage() : <div className="free-hint"><b>A blank page</b><span>Write, draw or add stamps and pictures here. It stays while you switch pages and is cleared when you close the board.</span></div>}
            </div>
            <Ink strokes={pageStrokes} tool={tool} color={color} height={height} onStroke={(st) => setLayer((d) => ({ strokes: { ...(d.strokes || {}), [ak]: [...((d.strokes || {})[ak] || []), st] } }))} />
            <Items items={pageItems} tool={tool} onChange={setItems} />
          </section>
        </div>
      </div>

      {page === "lesson" && (
        <div className="present" aria-label="Lesson steps">
          <button type="button" disabled={step === 0} onClick={() => goStep(step - 1)}><Ms n="chevron_left" />Back</button>
          <span className="dots">{steps.map(([k, t, time], i) => <button key={k} type="button" className={i === step ? "cur" : i < step ? "on" : ""} title={`${t} · ${time}`} aria-label={`${t}, ${time}`} onClick={() => goStep(i)}>{i === step && <b>{t}</b>}</button>)}</span>
          <button type="button" className="next" disabled={step >= steps.length - 1} onClick={() => goStep(step + 1)}>{step >= steps.length - 1 ? "Last step" : <>Next: {steps[step + 1][1]}<Ms n="chevron_right" /></>}</button>
        </div>
      )}

      {fixOpen && <div className="scrim" onClick={() => setFixOpen(false)} />}
      <aside className={`fixd ${fixOpen ? "open" : ""}`} aria-label="Fix it" aria-hidden={!fixOpen}>
        <div className="fixd-h"><h2>Fix it</h2><button type="button" onClick={() => setFixOpen(false)} aria-label="Close"><Ms n="close" /></button></div>
        <div className="fform">
          <label htmlFor="jt1-said">What they said</label>
          <textarea id="jt1-said" ref={saidRef} rows={2} value={fSaid} onChange={(e) => setFSaid(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("jt1-better")?.focus(); } }} placeholder="He don't like coffee." />
          <label htmlFor="jt1-better">Better version (you can add it later)</label>
          <input id="jt1-better" value={fBetter} onChange={(e) => setFBetter(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addFix()} placeholder="He doesn't like coffee." />
          <div className="fadd">
            <div className="fseg"><button type="button" className={fKind === "fix" ? "on" : ""} onClick={() => setFKind("fix")}>Fix</button><button type="button" className={`up ${fKind === "up" ? "on" : ""}`} onClick={() => setFKind("up")}>Upgrade</button></div>
            <button type="button" className="add" onClick={addFix}><Ms n="add" />Add</button>
          </div>
        </div>
        <div className="flist">
          {fixes.length === 0 && <p className="flist-empty">Notes you add here show up in the wrap-up.</p>}
          {[...fixes].reverse().map((f) => (
            <div key={f.id} className={`fl ${f.kind === "up" ? "up" : "fx0"}`}>
              <b>{f.said}</b>
              <Editable className={`fl-better ${f.better ? "" : "none"}`} ph="add a better version" value={f.better ? f.better : ""} onChange={(v) => patch((d) => ({ fixes: d.fixes.map((x) => (x.id === f.id ? { ...x, better: v } : x)) }))} />
              <button type="button" onClick={() => patch((d) => ({ fixes: d.fixes.filter((x) => x.id !== f.id) }))} aria-label="Delete"><Ms n="delete" /></button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
