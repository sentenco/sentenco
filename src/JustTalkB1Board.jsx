import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import { B1_LESSONS } from "./justTalkB1Data";
import { B1_BOARDS, B1_PHRASES, B1_REACT } from "./justTalkB1Boards";
import { Ink, Items } from "./JustTalkInk.jsx";
import { readPhoto } from "./justTalkPhoto.js";
import { fitBoardWindow } from "./justTalkWindow.js";

// Just Talk Board for B1-B2: a lighter board for students who can talk without a translator.
// One step at a time (hook, facts, words, grammar, discuss, challenge, wrap-up), a "Fix it" drawer
// for live corrections. Saved per lesson in just_talk_boards (student "B1-B2", key "b1/<lesson>"); no student picker.
// Look: "On Air" in the B1-B2 banner colors (deep teal, mint, bulb yellow). One slim centered top bar; steps live in a floating bar at the bottom (a talk-show studio: ON AIR light, rundown of steps, cue cards, prompter, caption bars; Bricolage Grotesque + Outfit), 25-minute lessons,
// with the A1-A2 annotation rail on the left (pen, text, eraser, spotlight, stamps, picture). Drawings are kept per step.

const OWNER_EMAIL = "caldrin1999@gmail.com";

// The lesson's picture (public/curriculum/just-talk/pics/b1-<lesson key>.jpeg). Hidden until the file
// exists; click it to see it big.
function HookPic({ name, alt }) {
  const [ok, setOk] = useState(false);
  const [big, setBig] = useState(false);
  const src = `/curriculum/just-talk/pics/b1-${name}.jpeg`;
  return (<>
    <img className={`hook-pic ${ok ? "" : "off"}`} src={src} alt={alt} onLoad={() => setOk(true)} onError={() => setOk(false)} onClick={() => setBig(true)} />
    {ok && big && <div className="pic-big" onClick={() => setBig(false)}><img src={src} alt={alt} /></div>}
  </>);
}
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
  const pageItems = (doc.items || {})[ak] || [];
  const pageStrokes = (doc.strokes || {})[ak] || [];
  const setItems = (list) => patch((d) => ({ items: { ...(d.items || {}), [ak]: list } }));
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
        <div className="stack cover"><div className="icard cover-card"><small>Tonight's topic · {isCheck ? kicker : `Module ${String(L.modNum).padStart(2, "0")} · ${L.module} · Lesson ${L.n}`}</small><h1>{L.title}</h1><span className="tag"><Ms n="menu_book" />Grammar: {B.grammar.name}</span>{!isCheck && <HookPic name={L.key} alt={L.title} />}</div></div>
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
      <div className="bar">
        <div className="right">
          <nav className="pages" aria-label="Pages">
            <button type="button" className={`pg ${page === "lesson" ? "on" : ""}`} onClick={() => setPage("lesson")}>{isCheck ? "Check-in" : "Lesson"}</button>
            {!isCheck && <button type="button" className={`pg ${page === "more" ? "on" : ""}`} onClick={() => setPage("more")}>More questions</button>}
          </nav>
          <label className="pill-sel teal"><Ms n="translate" /><select value={lang} onChange={(e) => { setLang(e.target.value); lsSet("jt1-lang", e.target.value); }} aria-label="Backup language">{LANGS.map((l) => <option key={l}>{l}</option>)}</select></label>
          <button type="button" className="tool fix" onClick={() => { setFixOpen(true); setTimeout(() => saidRef.current?.focus(), 200); }}><Ms n="edit_note" />Fix it <span className="badge">{fixes.length}</span></button>
          {saveMsg && <span className="saved" title={saveMsg}><Ms n="cloud_done" /></span>}
        </div>
      </div>

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
          <button type="button" className="tl" onClick={() => patch((d) => ({ strokes: { ...(d.strokes || {}), [ak]: [] }, items: { ...(d.items || {}), [ak]: [] } }))}><Ms n="mop" />Clear</button>
        </div>

        <div className="sheet-wrap">
          <section ref={sheetRef} className="sheet" onClick={onSheetClick} style={{ cursor: tool === "text" ? "text" : tool === "stamp" ? "copy" : tool === "spot" ? "zoom-in" : undefined }}>
            <div className="lesson anim" key={`${page}-${animKey}`}>
              {page === "lesson" ? (<>
                {stepKey !== "hook" && stepKey !== "recap" && <div className="head"><h1>{L.title}</h1><span className="tag"><Ms n="schedule" />{steps[step][2]}</span></div>}
                {View()}
              </>) : MorePage()}
            </div>
            <Ink strokes={pageStrokes} tool={tool} color={color} height={height} onStroke={(st) => patch((d) => ({ strokes: { ...(d.strokes || {}), [ak]: [...((d.strokes || {})[ak] || []), st] } }))} />
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

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Outfit:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,500,0,0&display=block');
/* Colors come from the B1-B2 banner: deep teal (--red is the main accent), mint stage, bulb yellow (--gold). */
.jt1 { --stage: #E3F3EE; --card: #FFFFFF; --ink: #15302A; --muted: #5E7871; --line: #CFE5DD; --soft: #EDF7F3; --red: #2C7A6E; --red-wash: #DDF1EC; --gold: #F2B93B; --gold-wash: #FFF4D6; --teal: #1F5E55; --teal-wash: #E2F2EC; --plum: #1F5E55; --plum-2: #2C7A6E; --plum-wash: #E2F2EC; --fold: #CFE2DA; --rule-line: #E5F1EC;
  --disp: 'Bricolage Grotesque', system-ui, sans-serif; --body: 'Outfit', system-ui, sans-serif;
  min-height: 100vh; color: var(--ink); font-family: var(--body); font-size: 15px; box-sizing: border-box;
  background: radial-gradient(ellipse 60% 40% at 55% 12%, #FFFFFF 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse 40% 40% at 100% 100%, #CDEBE1 0%, rgba(205,235,225,0) 70%), var(--stage);
  background-attachment: fixed;
  padding: 14px max(16px, env(safe-area-inset-right, 0px)) 110px max(16px, env(safe-area-inset-left, 0px)); }
.jt1 *, .jt1 *::before, .jt1 *::after { box-sizing: border-box; }
.jt1 button, .jt1 select, .jt1 input, .jt1 textarea { font: inherit; color: inherit; }
.jt1 button { cursor: pointer; border: 0; background: none; }
.jt1 button:disabled { opacity: .45; cursor: default; }
.jt1 button:focus-visible, .jt1 .tl:focus-within { outline: 3px solid var(--teal); outline-offset: 2px; }
.jt1 .ms { font-family: 'Material Symbols Rounded'; font-weight: normal; font-style: normal; font-size: 20px; line-height: 1; white-space: nowrap; direction: ltr; display: inline-block; vertical-align: middle; -webkit-font-smoothing: antialiased; }
.jt1 .denied { padding: 40px; text-align: center; color: var(--muted); }
.jt1 .row { display: flex; gap: 10px; align-items: center; justify-content: center; flex-wrap: wrap; }

/* top bar */
.jt1 .bar { max-width: 980px; margin: 0 auto 14px; display: flex; justify-content: center; }
.jt1 .bar .right { justify-content: center; }
.jt1 .saved { color: var(--teal); display: inline-grid; place-items: center; }
.jt1 .saved .ms { font-size: 19px; }
.jt1 .present { position: fixed; left: 50%; bottom: max(16px, env(safe-area-inset-bottom, 0px)); transform: translateX(-50%); z-index: 20; display: flex; align-items: center; gap: 4px; background: var(--teal); color: #fff; border-radius: 14px; padding: 6px; box-shadow: 0 12px 28px rgba(21,48,42,.3); max-width: calc(100% - 28px); }
.jt1 .present > button { display: inline-flex; align-items: center; gap: 2px; border-radius: 10px; padding: 9px 13px; font-weight: 600; font-size: 13.5px; color: #fff; white-space: nowrap; }
.jt1 .present .next { background: var(--gold); color: #3A2A00; padding-right: 10px; }
.jt1 .present > button:disabled { opacity: .4; background: none; color: #fff; }
.jt1 .present .dots { display: flex; align-items: center; gap: 6px; padding: 0 8px; min-width: 0; }
.jt1 .present .dots button { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.35); padding: 0; flex: 0 0 auto; }
.jt1 .present .dots button.on { background: rgba(255,255,255,.75); }
.jt1 .present .dots button.cur { width: auto; height: auto; border-radius: 999px; background: #fff; color: var(--teal); padding: 3px 10px; }
.jt1 .present .dots b { font-size: 12.5px; font-weight: 700; white-space: nowrap; }
.jt1 .right { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; align-items: center; }
.jt1 .pill-sel { display: inline-flex; align-items: center; gap: 4px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 3px 6px 3px 9px; font-size: 13px; font-weight: 600; color: var(--muted); }
.jt1 .pill-sel select, .jt1 .pill-sel input { border: 0; background: none; font-weight: 600; color: var(--ink); padding: 4px 2px; max-width: 140px; outline: none; }
.jt1 .pill-sel.teal { color: var(--teal); }
.jt1 .tool { display: inline-flex; align-items: center; gap: 6px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 6px 12px 6px 9px; font-weight: 600; font-size: 13px; }
.jt1 .tool.on { background: var(--teal-wash); border-color: var(--teal); color: var(--teal); }
.jt1 .tool.fix { background: var(--gold); border-color: var(--gold); color: #3A2A00; font-weight: 700; }
.jt1 .tool .badge { background: #fff; color: var(--ink); border-radius: 999px; min-width: 20px; height: 20px; display: inline-grid; place-items: center; font-size: 12px; padding: 0 6px; }
.jt1 .pages { display: inline-flex; gap: 2px; background: var(--card); border: 1px solid var(--line); border-radius: 11px; padding: 3px; }
.jt1 .pg { padding: 5px 12px; border-radius: 8px; font-weight: 600; font-size: 13px; color: var(--muted); }
.jt1 .pg.on { background: var(--ink); color: #fff; }


/* stage: rail + sheet */
.jt1 .stage { max-width: 980px; margin: 0 auto; display: grid; grid-template-columns: 70px minmax(0, 1fr); gap: 14px; align-items: start; }
.jt1 .rail { position: sticky; top: 14px; display: grid; gap: 2px; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 6px; box-shadow: 0 8px 22px rgba(20,60,50,.08); }
.jt1 .tl { display: grid; justify-items: center; gap: 3px; padding: 9px 2px 7px; border-radius: 11px; color: var(--muted); font-size: 10.5px; font-weight: 600; cursor: pointer; }
.jt1 .tl:hover { background: var(--soft); color: var(--ink); }
.jt1 .tl.on { background: var(--ink); color: #fff; }
.jt1 .rail hr { border: 0; height: 1px; background: var(--line); margin: 5px 8px; }
.jt1 .inks { display: grid; justify-items: center; gap: 8px; padding: 6px 0; }
.jt1 .dot { width: 18px; height: 18px; border-radius: 50%; box-shadow: 0 0 0 2px var(--card), 0 0 0 3px var(--line); }
.jt1 .dot.on { box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--ink); }
.jt1 .stamps { display: grid; gap: 4px; padding: 2px 0 4px; }
.jt1 .stmp { border-radius: 8px; padding: 5px 0; font-size: 10.5px; font-weight: 700; color: #fff; }
.jt1 .stmp.on { box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--ink); }
.jt1 .sheet-wrap { min-width: 0; display: grid; gap: 12px; }
.jt1 .sheet { position: relative; background: rgba(255,255,255,.55); border: 1px solid var(--line); border-radius: 22px; min-height: 760px; overflow: hidden; }
.jt1 .lesson { position: relative; padding: 26px clamp(14px, 4vw, 44px) 50px; display: grid; gap: 30px; }
.jt1 .ink { position: absolute; left: 0; top: 0; width: 100%; z-index: 5; touch-action: none; }
.jt1 .items { position: absolute; inset: 0; z-index: 6; pointer-events: none; }
.jt1 .item { position: absolute; }
.jt1 .item.txt { min-width: 60px; padding: 4px 8px; border: 1.5px dashed transparent; border-radius: 6px; font-family: var(--disp); font-size: 24px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.jt1 .item.txt:hover, .jt1 .item.txt:focus-within { border-color: var(--line); }
.jt1 .txt-ed { outline: none; display: inline-block; min-width: 40px; }
.jt1 .item.img { background: #fff; padding: 8px; border-radius: 6px; box-shadow: 0 10px 24px rgba(20,60,50,.18); }
.jt1 .item.img img { display: block; width: 100%; height: auto; pointer-events: none; border-radius: 3px; }
.jt1 .item.stamp { font-family: var(--disp); font-weight: 800; font-size: 17px; letter-spacing: .02em; color: #fff; padding: 8px 16px; border-radius: 8px; transform: rotate(-6deg); box-shadow: 0 8px 18px rgba(20,60,50,.25); white-space: nowrap; animation: jt1Stamp .35s cubic-bezier(.2,1.6,.4,1) both; }
@keyframes jt1Stamp { from { opacity: 0; transform: rotate(-6deg) scale(1.6); } }
.jt1 .item .del, .jt1 .item .grip { position: absolute; width: 24px; height: 24px; border-radius: 50%; background: var(--ink); color: #fff; display: grid; place-items: center; opacity: 0; transition: opacity .15s; }
.jt1 .item .del { top: -10px; right: -10px; }
.jt1 .item .grip { bottom: -10px; right: -10px; cursor: nwse-resize; }
.jt1 .item .ms { font-size: 15px; }
.jt1 .item:hover .del, .jt1 .item:hover .grip { opacity: 1; }
.jt1 .spot .lesson > *:not(.lit):not(:has(.lit)), .jt1 .spot .part > *:not(.lit):not(:has(.lit)):not(.lit *) { opacity: .12; filter: blur(1.5px); transition: opacity .25s, filter .25s; }
.jt1 .spot .lit { position: relative; z-index: 2; transform: scale(1.03); transition: transform .25s; }

/* rundown */

.jt1 .head { display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; flex-wrap: wrap; padding-bottom: 12px; border-bottom: 1px solid var(--line); }
.jt1 .head h1 { font-family: var(--disp); font-weight: 800; font-size: clamp(28px, 4vw, 40px); letter-spacing: -.02em; margin: 0; line-height: 1; }
.jt1 .tag { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 5px 10px; text-align: left; }
.jt1 .tag .ms { font-size: 17px; }
.jt1 .part { display: grid; gap: 16px; }
.jt1 .anim .part { animation: jt1Rise .4s cubic-bezier(.2,.7,.2,1) both; }
@keyframes jt1Rise { from { opacity: 0; transform: translateY(10px); } }
.jt1 .pop { animation: jt1Pop .3s cubic-bezier(.2,.7,.2,1) both; }
@keyframes jt1Pop { from { opacity: 0; transform: scale(.97); } }
@media (prefers-reduced-motion: reduce) { .jt1 .anim .part, .jt1 .pop, .jt1 .item.stamp { animation: none; } }
.jt1 .ph { display: flex; align-items: baseline; gap: 10px; }
.jt1 .ph .n { font-family: var(--disp); font-weight: 800; font-size: 15px; color: #fff; background: var(--red); border-radius: 7px; padding: 2px 8px; }
.jt1 .ph h2 { margin: 0; font-family: var(--disp); font-size: 13px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--muted); }
.jt1 .ph::after { content: ""; flex: 1; height: 1px; background: var(--line); align-self: center; }

/* cue cards */
.jt1 .stack { position: relative; width: min(100%, 640px); justify-self: center; }
.jt1 .stack.cover { width: 100%; }
.jt1 .stack.fu { width: min(100%, 580px); }
.jt1 .icard { position: relative; z-index: 1; background: var(--card); border-radius: 8px; padding: 18px 22px 20px; display: grid; gap: 10px; box-shadow: 0 14px 30px rgba(20,60,50,.11); border-top: 8px solid var(--gold); transform: rotate(-.5deg);
  background-image: linear-gradient(transparent 31px, var(--rule-line) 32px); background-size: 100% 32px; background-position: 0 50px; }
.jt1 .icard::after { content: ""; position: absolute; right: 0; bottom: 0; width: 30px; height: 30px; background: linear-gradient(135deg, var(--stage) 50%, var(--fold) 50%); border-radius: 0 0 8px 0; }
.jt1 .icard small { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: var(--teal); letter-spacing: .14em; text-transform: uppercase; }
.jt1 .icard .q { font-family: var(--disp); font-weight: 700; font-size: clamp(23px, 3.2vw, 32px); line-height: 1.15; letter-spacing: -.01em; margin: 0; text-wrap: balance; }
.jt1 .icard p.d { margin: 0; font-size: 17px; line-height: 32px; font-weight: 500; }
.jt1 .stack.fu .icard { transform: none; }
.jt1 .stack.fu .icard .q { font-size: clamp(20px, 2.6vw, 26px); }
.jt1 .q-tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.jt1 .fu-wrap { display: grid; gap: 12px; width: min(100%, 640px); justify-self: center; }
.jt1 .fu-wrap .stack { width: 100%; }
.jt1 .fu-wrap .icard { background: linear-gradient(90deg, var(--plum), var(--plum-2)); color: #fff; border-top: 0; border-radius: 16px; transform: none; box-shadow: 0 10px 24px rgba(106,76,147,.25); }
.jt1 .fu-wrap .icard::after { display: none; }
.jt1 .fu-wrap .icard small { color: #F7D9FF; }
.jt1 .fu-wrap .stack.push .icard { background: linear-gradient(90deg, #4E3775, var(--plum)); }
.jt1 .cover-card { padding: 26px 26px 30px; text-align: left; justify-items: start; border-top-color: var(--red); transform: none; background-image: none; }
.jt1 .cover-card::after { display: none; }
.jt1 .cover-card small { color: var(--red); }
.jt1 .cover-card h1 { font-family: var(--disp); font-weight: 800; font-size: clamp(44px, 7.4vw, 84px); line-height: .92; letter-spacing: -.035em; margin: 4px 0 8px; text-wrap: balance; }
.jt1 .hook-pic { display: block; width: min(100%, 420px); aspect-ratio: 1; object-fit: cover; border-radius: 14px; margin: 6px 0 0; cursor: zoom-in; box-shadow: 0 10px 24px rgba(20,60,50,.14); }
.jt1 .hook-pic.off { display: none; }
.jt1 .pic-big { position: fixed; inset: 0; z-index: 80; background: rgba(21,48,42,.72); display: flex; align-items: center; justify-content: center; padding: 16px; cursor: zoom-out; }
.jt1 .pic-big img { max-width: min(92vw, 900px); max-height: 88vh; border-radius: 16px; background: #fff; }

/* captions (answers, notes, reveals) */
.jt1 .sticky { display: inline-block; background: var(--card); color: var(--ink); padding: 12px 18px 12px 16px; font-weight: 600; font-size: 19px; line-height: 1.35; border-radius: 10px; box-shadow: 0 8px 20px rgba(20,60,50,.10); border-left: 6px solid var(--red); max-width: 100%; text-align: left; }
.jt1 .sticky.big { font-size: 21px; padding: 16px 22px 16px 18px; }
.jt1 .sticky.green { border-left-color: var(--teal); }
.jt1 .sticky.mine { font-size: 16px; padding: 8px 14px; box-shadow: none; background: var(--soft); border-left-color: var(--gold); }
.jt1 .sticky small { display: block; font-family: var(--disp); font-weight: 700; font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--red); margin-bottom: 3px; }
.jt1 .sticky.green small { color: var(--teal); }
.jt1 .sticky-wrap { display: grid; justify-items: center; gap: 6px; }
.jt1 .notes { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jt1 .notes .sticky { font-size: 15.5px; padding: 8px 14px; border-left: 0; border: 1px solid var(--line); box-shadow: none; border-radius: 999px; background: var(--card); }
.jt1 .blank { display: inline-block; min-width: 80px; border-bottom: 2.5px solid rgba(35,32,43,.4); margin: 0 4px; transform: translateY(-4px); }
.jt1 .fill { display: inline-block; min-width: 140px; padding: 0 6px; border-bottom: 2px dashed rgba(35,32,43,.35); color: var(--red); outline: none; }
.jt1 [data-ph]:empty::before { content: attr(data-ph); color: #B9AFA4; font-weight: 400; }
.jt1 .ans-btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px 9px 12px; font-weight: 600; font-size: 14.5px; background: var(--soft); border: 2px solid transparent; border-radius: 12px; }
.jt1 .ans-btn.on { background: var(--card); border-color: var(--ink); }
.jt1 .ans-btn.red { background: var(--ink); color: #fff; }
.jt1 .ans-btn.ghost { background: var(--card); border-color: var(--line); }
.jt1 .fu-wrap .ans-btn.ghost { background: rgba(255,255,255,.18); border-color: transparent; color: #fff; }
.jt1 .mini-btn { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 600; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 6px 11px 6px 8px; justify-self: center; }
.jt1 .mini-btn .ms { font-size: 17px; }

/* words */
.jt1 .words { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
.jt1 .word { background: var(--card); border: 1px solid var(--line); border-radius: 999px; padding: 8px 16px; font-family: var(--disp); font-weight: 700; font-size: 17px; transition: transform .15s; }
.jt1 button.word:hover { transform: translateY(-2px); }
.jt1 .word.seen { border-color: var(--teal); color: var(--teal); }
.jt1 .word.on { background: var(--red); border-color: var(--red); color: #fff; }
.jt1 .words.small .word { font-size: 14px; padding: 5px 12px; }
.jt1 .wcard { justify-self: center; width: min(100%, 680px); display: grid; gap: 12px; }
.jt1 .lower { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: stretch; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 26px rgba(20,60,50,.14); background: var(--card); }
.jt1 .lt-tag { background: var(--red); color: #fff; padding: 14px 20px; display: grid; align-content: center; gap: 4px; }
.jt1 .lt-tag b { font-family: var(--disp); font-weight: 800; font-size: clamp(28px, 4vw, 40px); letter-spacing: -.02em; line-height: 1; }
.jt1 .lt-tag .stress { color: rgba(255,255,255,.85); }
.jt1 .lt-tag .stress em { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
.jt1 .lt-txt { padding: 12px 16px; display: grid; align-content: center; gap: 4px; min-width: 0; }
.jt1 .lower > .spk { align-self: center; margin-right: 12px; }
.jt1 .stress { font-size: 12.5px; font-weight: 600; letter-spacing: .04em; color: var(--muted); }
.jt1 .stress em { font-style: normal; color: var(--red); }
.jt1 .wmean { font-size: 17px; font-weight: 700; margin: 0; }
.jt1 .wex-row { display: flex; align-items: center; gap: 10px; }
.jt1 .wex { font-size: 16px; margin: 0; color: var(--muted); }
.jt1 .wex b { color: var(--red); }
.jt1 .wfoot { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; }
.jt1 .spk { width: 38px; height: 38px; border-radius: 50%; background: var(--ink); color: #fff; display: inline-grid; place-items: center; flex: 0 0 auto; }
.jt1 .spk.sm { width: 30px; height: 30px; background: var(--soft); color: var(--ink); }
.jt1 .spk.sm .ms { font-size: 17px; }
.jt1 .tr-btn { display: inline-flex; align-items: center; gap: 5px; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 5px 10px 5px 7px; font-weight: 600; font-size: 12.5px; text-decoration: none; }
.jt1 .tr-btn .ms, .jt1 .tr-out .ms { font-size: 16px; }
.jt1 .tr-out { display: inline-flex; align-items: center; gap: 6px; background: var(--teal-wash); color: #166B69; border-radius: 8px; padding: 5px 11px 5px 8px; font-weight: 600; font-size: 16px; }

/* grammar */
.jt1 .rule { justify-self: center; width: min(100%, 640px); display: grid; gap: 12px; background: var(--card); border-radius: 14px; padding: 20px 22px; box-shadow: 0 12px 26px rgba(20,60,50,.10); border-top: 8px solid var(--gold); }
.jt1 .rule small { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: #B07D12; letter-spacing: .14em; text-transform: uppercase; }
.jt1 .rule h3 { margin: 0; font-family: var(--disp); font-weight: 800; font-size: clamp(24px, 3.4vw, 32px); line-height: 1.1; letter-spacing: -.01em; }
.jt1 .rule p { margin: 0; font-size: 16.5px; line-height: 1.5; }
.jt1 .ex { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; }
.jt1 .ex li { font-size: 18px; font-weight: 500; padding-left: 22px; position: relative; }
.jt1 .ex li::before { content: ""; position: absolute; left: 4px; top: .55em; width: 8px; height: 8px; border-radius: 2px; background: var(--gold); }
.jt1 .ex b { color: var(--red); }

/* step nav + buttons */
.jt1 .stepnav { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 5px; width: min(100%, 640px); justify-self: center; }
.jt1 .stepnav button { display: inline-flex; align-items: center; gap: 2px; border-radius: 9px; padding: 8px 13px; font-weight: 600; font-size: 14px; }
.jt1 .stepnav .nx { background: var(--ink); color: #fff; padding-right: 10px; }
.jt1 .stepnav button:disabled { opacity: .35; background: none; color: var(--ink); }
.jt1 .sn-dots { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
.jt1 .sn-dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--line); }
.jt1 .sn-dots i.on { background: var(--teal); }
.jt1 .sn-dots i.cur { background: var(--red); width: 20px; border-radius: 4px; }
.jt1 .go { justify-self: end; display: inline-flex; align-items: center; gap: 8px; background: var(--ink); color: #fff; border-radius: 12px; padding: 13px 22px; font-family: var(--disp); font-weight: 700; font-size: 15px; box-shadow: 0 10px 22px rgba(21,48,42,.18); }

/* challenge */
.jt1 .act-box { display: grid; gap: 16px; justify-items: center; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 18px; }
.jt1 .how { margin: 0; text-align: center; font-size: 15px; color: var(--muted); max-width: 54ch; }
.jt1 .tf-card { width: min(100%, 560px); min-height: 150px; display: grid; place-content: center; justify-items: center; text-align: center; gap: 10px; background: var(--card); border-radius: 8px; padding: 20px; box-shadow: 0 12px 26px rgba(20,60,50,.11); border-top: 8px solid var(--plum); }
.jt1 .tf-card .q { font-family: var(--disp); font-weight: 700; font-size: clamp(22px, 3vw, 30px); line-height: 1.15; margin: 0; text-wrap: balance; }
.jt1 .tf-card small { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: var(--plum); letter-spacing: .14em; text-transform: uppercase; }
.jt1 .verdict { font-family: var(--disp); font-weight: 800; font-size: 30px; line-height: 1.1; }
.jt1 .verdict.t { color: var(--teal); }
.jt1 .verdict.f { color: var(--red); }
.jt1 .why { margin: 0; font-size: 15.5px; color: var(--muted); max-width: 48ch; }
.jt1 .score { font-size: 13px; font-weight: 600; color: var(--teal); background: var(--teal-wash); border-radius: 8px; padding: 5px 10px; justify-self: center; }
.jt1 .timer { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
.jt1 .clock { font-family: var(--disp); font-weight: 800; font-size: 46px; line-height: 1; font-variant-numeric: tabular-nums; min-width: 120px; text-align: center; }
.jt1 .clock.done { color: var(--red); }
.jt1 .order-list, .jt1 .answer-list { display: grid; gap: 8px; width: min(100%, 520px); }
.jt1 .ord { display: flex; align-items: center; gap: 12px; background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 10px 14px; font-weight: 600; font-size: 17px; text-align: left; }
.jt1 .ord-n { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: var(--soft); font-family: var(--disp); font-size: 14px; font-weight: 800; flex: 0 0 auto; }
.jt1 .ord.on { border-color: var(--plum); }
.jt1 .ord.on .ord-n { background: var(--plum); color: #fff; }
.jt1 .ans-row { display: flex; align-items: center; gap: 10px; background: var(--soft); border-radius: 10px; padding: 8px 12px; }
.jt1 .ans-row b { font-size: 16px; flex: 1; min-width: 0; }
.jt1 .ans-row .note { font-size: 13px; font-weight: 600; color: var(--muted); }
.jt1 .ans-row > .ms { color: var(--red); }
.jt1 .ans-row.ok > .ms { color: var(--teal); }
.jt1 .sides { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; width: 100%; }
.jt1 .side { display: grid; gap: 10px; align-content: start; background: var(--soft); border-radius: 14px; padding: 14px; border: 2px solid transparent; }
.jt1 .side.on { border-color: var(--plum); background: var(--plum-wash); }
.jt1 .side-h { display: inline-flex; align-items: center; gap: 6px; font-family: var(--disp); font-weight: 800; font-size: 20px; }
.jt1 .side ul { margin: 0; padding-left: 18px; display: grid; gap: 6px; font-size: 15px; }
.jt1 .chips-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jt1 .chip { background: var(--card); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px; font-weight: 600; font-size: 15px; }
.jt1 .chip.on { background: var(--plum); border-color: var(--plum); color: #fff; }
.jt1 .checks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: 100%; }
.jt1 .ck { display: flex; align-items: center; gap: 8px; text-align: left; background: var(--soft); border-radius: 10px; padding: 9px 12px; font-weight: 600; font-size: 14.5px; }
.jt1 .ck .ms { color: #BDB3A8; }
.jt1 .ck.on { background: var(--teal); color: #fff; }
.jt1 .ck.on .ms { color: #fff; }
.jt1 .recap { display: grid; gap: 8px; }
.jt1 .rc-row { display: grid; gap: 4px; justify-items: start; padding: 8px 0; border-top: 1px solid var(--line); }
.jt1 .rc-row b { font-size: 15px; color: var(--teal); }
.jt1 .rc-row .mini-btn { justify-self: start; }
.jt1 .rc-fact { font-size: 17px; font-weight: 500; }

/* wrap-up */
.jt1 .lines { justify-self: center; width: min(100%, 640px); display: grid; background: var(--card); border-radius: 14px; padding: 10px 20px 14px; box-shadow: 0 10px 24px rgba(20,60,50,.08); }
.jt1 .line { display: flex; gap: 10px; align-items: baseline; border-bottom: 1px solid var(--line); padding: 8px 0 4px; }
.jt1 .line i { font-style: normal; font-family: var(--disp); font-weight: 800; color: var(--red); font-size: 17px; }
.jt1 .line .ed { flex: 1; min-width: 0; font-size: 18px; font-weight: 500; outline: none; min-height: 30px; }
.jt1 .fixes { justify-self: center; width: min(100%, 640px); display: grid; gap: 10px; }
.jt1 .fx { display: grid; gap: 8px; background: var(--card); border-radius: 12px; padding: 12px 16px; box-shadow: 0 6px 14px rgba(20,60,50,.08); border-left: 6px solid var(--red); }
.jt1 .fx.up { border-left-color: var(--gold); }
.jt1 .fx-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.jt1 .fx-kind { font-family: var(--disp); font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--red); }
.jt1 .fx.up .fx-kind { color: #B07D12; }
.jt1 .fx-said { font-size: 19px; font-weight: 600; text-decoration: underline wavy var(--red); text-decoration-thickness: 1.5px; text-underline-offset: 5px; }
.jt1 .fx.up .fx-said { text-decoration-color: var(--gold); }
.jt1 .fx-better { font-size: 19px; font-weight: 700; color: var(--teal); display: flex; gap: 6px; align-items: center; }
.jt1 .empty { text-align: center; color: var(--muted); font-size: 14px; background: var(--card); border-radius: 12px; padding: 16px; }

/* Fix it drawer */
.jt1 .scrim { position: fixed; inset: 0; background: rgba(21,48,42,.2); z-index: 49; }
.jt1 .fixd { position: fixed; top: 0; right: 0; bottom: 0; width: min(380px, 100vw); background: var(--card); box-shadow: -10px 0 30px rgba(20,60,50,.18); transform: translateX(105%); transition: transform .25s; z-index: 50; display: grid; grid-template-rows: auto auto minmax(0, 1fr); gap: 14px; padding: calc(16px + env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) calc(16px + env(safe-area-inset-bottom, 0px)) 16px; visibility: hidden; }
.jt1 .fixd.open { transform: none; visibility: visible; }
.jt1 .fixd-h { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.jt1 .fixd-h h2 { margin: 0; font-family: var(--disp); font-weight: 800; font-size: 26px; }
.jt1 .fixd-h button { width: 34px; height: 34px; border-radius: 50%; background: var(--soft); display: grid; place-items: center; }
.jt1 .fform { display: grid; gap: 8px; background: var(--soft); border-radius: 12px; padding: 12px; }
.jt1 .fform label { font-family: var(--disp); font-size: 11.5px; font-weight: 700; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; }
.jt1 .fform textarea, .jt1 .fform input { width: 100%; border: 1px solid var(--line); border-radius: 8px; padding: 9px 11px; background: var(--card); font-size: 17px; font-weight: 500; color: var(--ink); outline: none; resize: none; }
.jt1 .fform textarea:focus, .jt1 .fform input:focus { border-color: var(--teal); }
.jt1 .fseg { display: inline-flex; background: var(--card); border-radius: 9px; padding: 3px; gap: 3px; }
.jt1 .fseg button { border-radius: 7px; padding: 6px 12px; font-size: 13px; font-weight: 600; color: var(--muted); }
.jt1 .fseg button.on { background: var(--red); color: #fff; }
.jt1 .fseg button.up.on { background: var(--gold); color: var(--ink); }
.jt1 .fadd { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.jt1 .fadd .add { display: inline-flex; align-items: center; gap: 6px; background: var(--ink); color: #fff; border-radius: 9px; padding: 8px 14px 8px 10px; font-weight: 600; font-size: 14px; }
.jt1 .flist { overflow-y: auto; display: grid; gap: 8px; align-content: start; }
.jt1 .flist-empty { margin: 0; color: var(--muted); font-size: 13.5px; text-align: center; padding: 10px; }
.jt1 .fl { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 2px 8px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; }
.jt1 .fl b { font-size: 16px; font-weight: 600; }
.jt1 .fl-better { font-size: 15.5px; font-weight: 600; color: var(--teal); grid-column: 1; outline: none; }
.jt1 .fl > button { grid-row: 1 / span 2; grid-column: 2; color: var(--muted); align-self: center; }
.jt1 .fl.up { border-left: 4px solid var(--gold); }
.jt1 .fl.fx0 { border-left: 4px solid var(--red); }

@media (max-width: 720px) {
  .jt1 .stage { grid-template-columns: 1fr; }
  .jt1 .rail { position: static; display: flex; flex-wrap: wrap; justify-content: center; }
  .jt1 .rail hr { display: none; }
  .jt1 .inks, .jt1 .stamps { display: flex; padding: 0 4px; align-items: center; }
  .jt1 .stmp { padding: 5px 8px; }
  .jt1 .sides, .jt1 .checks { grid-template-columns: 1fr; }
  .jt1 .lower { grid-template-columns: 1fr; }
  .jt1 .lower > .spk { margin: 0 0 12px 16px; }
}
`;
