import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import { C1_LESSONS, C1_BLOCKS, C1_WHEEL, C1_FORMATS } from "./justTalkC1Data";
import { C1_S1, C1_PHRASES_S1 } from "./justTalkC1S1";
import { C1_S2, C1_PHRASES_S2 } from "./justTalkC1S2";
import { Ink, Items } from "./JustTalkInk.jsx";
import { readPhoto } from "./justTalkPhoto.js";
import { fitBoardWindow } from "./justTalkWindow.js";
import { ONAIR_CSS } from "./justTalkOnAirCss.js";

// Just Talk Board for C1-C2: same board as B1-B2 (On Air look, annotation rail, Fix it, blank pages,
// bottom step bar), recolored with the C1-C2 banner (plum, lavender, gold).
// Lesson: Impromptu speech (wheel, 30 s think, 2-3 min talk, filler counter) > Power language (block trick,
// sound focus, 6 module phrases) > Main task (Debate, Dilemma, Solve it or Read the data) > Hot seat (questions
// against the side the student took, 30 s answers) > Wrap-up. The block's last lesson is a checkpoint:
// its impromptu speech is compared with the block's first lesson (saved board).
// Saved per lesson in just_talk_boards (student "C1-C2", key "c1/<lesson>"). Blank pages are never saved.

const OWNER_EMAIL = "caldrin1999@gmail.com";
const BOARD_STUDENT = "C1-C2";
const CONTENT = { ...C1_S1, ...C1_S2 };
const PHRASES = { ...C1_PHRASES_S1, ...C1_PHRASES_S2 };
const LESSON_STEPS = [["impromptu", "Impromptu speech", "0-6 min"], ["power", "Power language", "6-8 min"], ["main", "Main task", "8-20 min"], ["hot", "Hot seat", "20-23 min"], ["wrap", "Wrap-up", "23-25 min"]];
const CHECK_STEPS = [["impromptu", "Impromptu speech", "0-5 min"], ["review", "Review", "5-8 min"], ["main", "Debate", "8-18 min"], ["hot", "Hot seat", "18-23 min"], ["wrap", "Wrap-up", "23-25 min"]];
const WHEEL_COLORS = ["#5B3F8C", "#F2B93B", "#E8735A", "#2C7A6E", "#7A55A0", "#3E2A63", "#E0A21F", "#8C6BB8"];
const MODES = { topic: ["Topic", "chat", "Think for 30 seconds, then talk for 2-3 minutes without stopping."], flip: ["Flip side", "swap_horiz", "Defend the side you disagree with. 30 seconds to think, then 2-3 minutes."], three: ["Three words", "auto_stories", "Spin three times, then tell one 2-3 minute story that uses all three words."], simple: ["Explain it simply", "lightbulb", "Explain it so a 10-year-old would understand. 30 seconds to think, then 2-3 minutes."] };
const SUMS = { Debate: ["My strongest argument", "A trick or phrase I used well", "Something I'd say better next time"], Dilemma: ["What I decided and why", "Did the twist change my mind?", "Something I'd say better next time"], Solve: ["My plan in one sentence", "The weakest part of my plan", "Something I'd say better next time"], Data: ["The most surprising number", "My best explanation", "Something I'd say better next time"], Summarize: ["The writer's main point in one sentence", "Where I agree, and where I don't", "Something I'd say better next time"] };
const STAMPS = [["Great point!", "#5B3F8C"], ["Nice phrase!", "#E0A21F"], ["Wow!", "#3E2A63"]];
const INKS = ["#241B33", "#5B3F8C", "#E0A21F"];
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } };
const uid = () => Math.random().toString(36).slice(2, 9);
const pickOne = (list) => list[Math.floor(Math.random() * list.length)];
const mmss = (s) => `${Math.floor(Math.max(0, s) / 60)}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;
const EMPTY = () => ({ step: 0, mode: null, rot: 0, pick: null, picks3: [], fill1: 0, talked: 0, trickUsed: false, pi: null, fi: 0, side: null, ideas: {}, round: 1, hq: 0, twist: false, plan: ["", "", ""], dp: 0, drev: {}, sum: ["", "", ""], fixes: [], mi: 0, mrev: {}, strokes: {}, items: {} });

const Ms = ({ n }) => <span className="ms" aria-hidden="true">{n}</span>;
const Html = ({ s, as: Tag = "span", className }) => <Tag className={className} dangerouslySetInnerHTML={{ __html: s }} />;
const Ph = ({ n, title }) => <div className="ph">{n !== undefined && n !== "" && <span className="n">{n}</span>}<h2>{title}</h2></div>;

function StepNav({ i, n, onGo, noun = "" }) {
  return (
    <div className="stepnav">
      <button type="button" disabled={i === 0} onClick={() => onGo(i - 1)}><Ms n="chevron_left" />Back</button>
      <div className="sn-dots">{Array.from({ length: n }, (_, j) => <i key={j} className={j === i ? "cur" : j < i ? "on" : ""} />)}</div>
      <button type="button" className="nx" disabled={i === n - 1} onClick={() => onGo(i + 1)}>Next{noun ? ` ${noun}` : ""}<Ms n="chevron_right" /></button>
    </div>
  );
}

// Think-then-talk clock. Reports how long the student talked when the clock is stopped or runs out.
function SpeechClock({ think = 0, talk, onTalked, label }) {
  const [phase, setPhase] = useState("idle");
  const [left, setLeft] = useState(think || talk);
  const ref = useRef({ phase: "idle", left: think || talk });
  useEffect(() => {
    if (phase !== "think" && phase !== "talk") return undefined;
    const t = setInterval(() => {
      const r = ref.current;
      r.left -= 1;
      if (r.left <= 0 && r.phase === "think") { r.phase = "talk"; r.left = talk; setPhase("talk"); }
      else if (r.left <= 0 && r.phase === "talk") { r.phase = "over"; r.left = 0; setPhase("over"); onTalked?.(talk); }
      setLeft(r.left);
    }, 1000);
    return () => clearInterval(t);
  }, [phase, talk, onTalked]);
  const start = () => { ref.current = { phase: think ? "think" : "talk", left: think || talk }; setLeft(ref.current.left); setPhase(ref.current.phase); };
  const stop = () => { if (ref.current.phase === "talk") onTalked?.(talk - ref.current.left); ref.current.phase = "over"; setPhase("over"); };
  const names = { idle: label || "Ready", think: "Think", talk: "Talk", over: "Time" };
  return (
    <div className="speechclock">
      <div className={`clockbig ${phase}`}><b>{mmss(left)}</b><small>{names[phase]}</small></div>
      {phase === "think" || phase === "talk"
        ? <button type="button" className="ans-btn ghost" onClick={stop}><Ms n="stop" />Stop</button>
        : <button type="button" className="spin-btn" onClick={start}><Ms n="play_arrow" />{phase === "over" ? "Again" : think ? `Start: ${think} sec to think` : "Start the clock"}</button>}
    </div>
  );
}

function Editable({ value, onChange, className, ph }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current && ref.current.textContent !== value) ref.current.textContent = value || ""; }, [value]);
  return <span ref={ref} className={className} contentEditable suppressContentEditableWarning data-ph={ph} onInput={(e) => onChange(e.currentTarget.textContent)} />;
}

export default function JustTalkC1Board() {
  const { user, loading } = useAuth();
  const { lesson } = useParams();
  const L = useMemo(() => C1_LESSONS.find((x) => x.key === lesson), [lesson]);
  const C = CONTENT[lesson];
  const isCheck = !!L?.check;
  const steps = isCheck ? CHECK_STEPS.map((s) => (s[0] === "main" ? [s[0], C1_FORMATS[C?.format || "Debate"], s[2]] : s)) : LESSON_STEPS.map((s) => (s[0] === "main" && L ? [s[0], C1_FORMATS[L.format], s[2]] : s));
  const docKey = `c1/${lesson}`;

  const [doc, setDoc] = useState(EMPTY);
  const [page, setPage] = useState("lesson");
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
  const [spinRot, setSpinRot] = useState(null);
  const [before, setBefore] = useState(null);
  const loadedFor = useRef(null);
  const saidRef = useRef(null);
  const sheetRef = useRef(null);

  const patch = useCallback((p) => setDoc((d) => ({ ...d, ...(typeof p === "function" ? p(d) : p) })), []);

  useEffect(() => {
    if (!user || !C) return;
    const forKey = `${BOARD_STUDENT}|${docKey}`;
    const apply = (data) => { loadedFor.current = forKey; setDoc({ ...EMPTY(), ...(data || {}) }); setSaveMsg(data ? "Opened saved board" : ""); setAnimKey((k) => k + 1); };
    const local = lsGet(`jt-board|${forKey}`, null);
    supabase.from("just_talk_boards").select("data").eq("student", BOARD_STUDENT).eq("lesson_key", docKey).maybeSingle().then(({ data, error }) => {
      if (error) { setOnline(false); apply(local); return; }
      apply(data?.data || local);
    });
  }, [user, C, docKey]);

  // Checkpoint: the impromptu speech from the block's first lesson.
  useEffect(() => {
    if (!user || !L?.checkpoint || !L.firstOfBlock) return;
    const key = `c1/${L.firstOfBlock}`;
    const local = lsGet(`jt-board|${BOARD_STUDENT}|${key}`, null);
    supabase.from("just_talk_boards").select("data").eq("student", BOARD_STUDENT).eq("lesson_key", key).maybeSingle().then(({ data }) => setBefore(data?.data || local || {}));
  }, [user, L]);

  const save = useCallback(async () => {
    const forKey = `${BOARD_STUDENT}|${docKey}`;
    if (loadedFor.current !== forKey) return;
    lsSet(`jt-board|${forKey}`, doc);
    if (online) {
      const { error } = await supabase.from("just_talk_boards").upsert({ student: BOARD_STUDENT, lesson_key: docKey, data: doc, updated_at: new Date().toISOString() }, { onConflict: "owner_id,student,lesson_key" });
      if (error) { setOnline(false); setSaveMsg("Saved in this browser only"); return; }
    }
    setSaveMsg(`Saved ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}${online ? "" : " in this browser"}`);
  }, [docKey, doc, online]);

  useEffect(() => { const t = setTimeout(save, 2500); return () => clearTimeout(t); }, [doc, save]);

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

  useEffect(() => { fitBoardWindow(); }, []);
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [page, loading, user]);
  const onTalked = useCallback((secs) => patch({ talked: secs }), [patch]);

  if (loading) return null;
  if (user?.email?.toLowerCase() !== OWNER_EMAIL) return <div className="jt1 c1"><style>{CSS}</style><p className="denied">Not available.</p></div>;
  if (!L || !C) return <div className="jt1 c1"><style>{CSS}</style><p className="denied">This lesson doesn't have a board yet.</p></div>;

  const step = Math.min(doc.step, steps.length - 1);
  const stepKey = steps[step][0];
  const block = C1_BLOCKS[L.block];
  const phrases = PHRASES[L.module] || [];
  const wheel = C1_WHEEL[L.stage] || C1_WHEEL[1];
  const mode = doc.mode || L.wheel;
  const fixes = doc.fixes || [];
  const fmt = isCheck ? C.format || "Debate" : L.format;
  const kicker = isCheck ? `Stage ${L.stage} · ${L.lv} · Check-in` : `Stage ${L.stage} · Module ${String(L.modNum).padStart(2, "0")} ${L.module} · Lesson ${L.n}`;
  const ak = page === "lesson" ? `s${step}` : page;
  const free = page.startsWith("p-");
  const layer = free ? scratch : doc;
  const pageItems = (layer.items || {})[ak] || [];
  const pageStrokes = (layer.strokes || {})[ak] || [];
  const setLayer = (fn) => (free ? setScratch((x) => ({ ...x, ...fn(x) })) : patch(fn));
  const setItems = (list) => setLayer((d) => ({ items: { ...(d.items || {}), [ak]: list } }));
  const addPage = () => { const id = `p-${uid()}`; setScratch((x) => ({ ...x, pages: [...x.pages, id] })); setPage(id); setAnimKey((k) => k + 1); };
  const closePage = (id) => { setScratch((x) => { const strokes = { ...x.strokes }, items = { ...x.items }; delete strokes[id]; delete items[id]; return { pages: x.pages.filter((p) => p !== id), strokes, items }; }); if (page === id) setPage("lesson"); };
  const addFix = () => {
    const said = fSaid.trim();
    if (!said) { saidRef.current?.focus(); return; }
    patch((d) => ({ fixes: [...(d.fixes || []), { id: uid(), kind: fKind, said, better: fBetter.trim() }] }));
    setFSaid(""); setFBetter(""); saidRef.current?.focus();
  };
  function clearSpot() { sheetRef.current?.classList.remove("spot"); sheetRef.current?.querySelectorAll(".lit").forEach((x) => x.classList.remove("lit")); }
  function pickTool(id) { setTool(tool === id && id !== "move" ? "move" : id); setStamp(null); if (id !== "spot") clearSpot(); }
  function onSheetClick(e) {
    if (e.target.closest(".item")) return;
    const r = sheetRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (tool === "text") { setItems([...pageItems, { id: uid(), type: "txt", x: x - 10, y: y - 18, text: "", focus: true }]); setTool("move"); }
    else if (tool === "stamp" && stamp) { setItems([...pageItems, { id: uid(), type: "stamp", x: x - 60, y: y - 18, text: stamp[0], bg: stamp[1] }]); setTool("move"); setStamp(null); }
    else if (tool === "spot") {
      const hit = e.target.closest(".stack, .speak, .wheel-zone, .rule, .act-box, .phr, .wcard, .compare, .chart, .lines, .fixes, .sticky-wrap, .fu-wrap, .opts-row");
      const already = hit?.classList.contains("lit");
      clearSpot();
      if (hit && !already) { hit.classList.add("lit"); sheetRef.current.classList.add("spot"); }
    }
  }
  function addPicture(file) {
    const top = Math.max(40, window.scrollY - (sheetRef.current?.offsetTop || 0) + 80);
    readPhoto(file, (src) => { setItems([...pageItems, { id: uid(), type: "img", x: 40, y: top, w: 300, src }]); setTool("move"); });
  }

  /* ----- 1. Impromptu speech ----- */
  function spin() {
    const items = wheel[mode];
    let pool = items.map((_, i) => i);
    if (mode === "three") pool = pool.filter((i) => !doc.picks3.includes(i));
    if (!pool.length) return;
    const i = pickOne(pool);
    const seg = 360 / items.length, center = i * seg + seg / 2;
    const cur = ((doc.rot % 360) + 360) % 360;
    const want = (360 - center) % 360;
    const rot = doc.rot + 1800 + ((want - cur + 360) % 360);
    setSpinRot(rot);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => { setSpinRot(null); patch((d) => (mode === "three" ? { rot, picks3: [...d.picks3, i] } : { rot, pick: i })); }, reduce ? 50 : 3100);
  }
  function Impromptu() {
    const items = wheel[mode];
    const seg = 360 / items.length;
    const grad = items.map((_, i) => `${WHEEL_COLORS[i % WHEEL_COLORS.length]} ${i * seg}deg ${(i + 1) * seg}deg`).join(", ");
    const done3 = mode === "three" && doc.picks3.length >= 3;
    const ready = mode === "three" ? done3 : doc.pick !== null;
    const topic = mode === "three" ? doc.picks3.map((i) => items[i]).join(" · ") : doc.pick !== null ? items[doc.pick] : "";
    const B = before || {};
    const dF = (B.fill1 || 0) - doc.fill1, dT = doc.talked - (B.talked || 0);
    const bits = [];
    const hasBefore = !!(B.fill1 || B.talked);
    if (hasBefore && (doc.fill1 || doc.talked)) bits.push(dF > 0 ? `${dF} fewer filler${dF === 1 ? "" : "s"}` : dF === 0 ? "same fillers" : `${-dF} more filler${dF === -1 ? "" : "s"}`);
    if (doc.talked && B.talked) bits.push(dT > 0 ? `${dT} seconds longer` : dT === 0 ? "same length" : `${-dT} seconds shorter`);
    if (doc.trickUsed) bits.push("trick used");
    return (<>
      <div className="part">
        <div className="stack cover"><div className="icard cover-card"><small>Tonight's topic · {isCheck ? kicker : `Module ${String(L.modNum).padStart(2, "0")} · ${L.module} · Lesson ${L.n}`}</small><h1>{L.title}</h1><span className="tag"><Ms n="forum" />{isCheck ? "Check-in" : `Today: ${C1_FORMATS[L.format]}`}{L.checkpoint ? " · Checkpoint lesson" : ""}</span></div></div>
      </div>
      <div className="part">
        <Ph n="1" title={L.checkpoint ? "Impromptu speech · checkpoint" : "Impromptu speech"} />
        <div className="modes">{Object.entries(MODES).map(([k, m]) => <button key={k} type="button" className={`mode ${mode === k ? "on" : ""}`} onClick={() => patch({ mode: k, pick: null, picks3: [] })}><Ms n={m[1]} />{m[0]}</button>)}</div>
        <p className="how">{MODES[mode][2]}</p>
        <div className="wheel-zone">
          <div className="wheel-box"><div className="pointer" /><div className={`wheel ${spinRot !== null ? "spinning" : ""}`} style={{ background: `conic-gradient(${grad})`, transform: `rotate(${spinRot ?? doc.rot}deg)` }}>
            {items.map((_, i) => { const a = (i * seg + seg / 2) * Math.PI / 180; return <span key={i}><b className={mode === "three" && doc.picks3.includes(i) ? "used" : ""} style={{ left: `${(Math.sin(a) * 37).toFixed(1)}cqw`, top: `${(-Math.cos(a) * 37).toFixed(1)}cqw` }}>{i + 1}</b></span>; })}
          </div><div className="hub">SPIN</div></div>
          <button type="button" className="spin-btn" disabled={spinRot !== null || done3} onClick={() => { if (mode !== "three") patch({ pick: null }); spin(); }}><Ms n="cyclone" />{mode === "three" ? (done3 ? "Three words ready" : `Spin for word ${doc.picks3.length + 1}`) : doc.pick !== null ? "Spin again" : "Spin"}</button>
        </div>
        {mode === "three" && doc.picks3.length > 0 && <div className="three">{[0, 1, 2].map((k) => <div key={k} className={`sticky ${doc.picks3[k] === undefined ? "empty3" : ""}`}>{doc.picks3[k] !== undefined ? items[doc.picks3[k]] : `word ${k + 1}`}</div>)}</div>}
        {mode !== "three" && doc.pick !== null && <div className="stack fu pop"><div className="icard"><small>{mode === "flip" ? "Defend this, even if you disagree" : mode === "simple" ? "Explain it simply" : "Your topic"}</small><p className="q">{topic}</p></div></div>}
        {ready && (
          <div className="speak pop">
            <SpeechClock think={30} talk={180} onTalked={onTalked} />
            <div className="counter"><span className="um">Fillers <b>{doc.fill1}</b></span><button type="button" className="mini" onClick={() => patch((d) => ({ fill1: d.fill1 + 1 }))}><Ms n="add" />um / like / you know</button><button type="button" className="mini" onClick={() => patch((d) => ({ fill1: Math.max(0, d.fill1 - 1) }))}><Ms n="remove" />Undo</button></div>
            <button type="button" className={`upr ${doc.trickUsed ? "on" : ""}`} onClick={() => patch((d) => ({ trickUsed: !d.trickUsed }))}><Ms n={doc.trickUsed ? "check_circle" : "radio_button_unchecked"} />Used the trick: {block.trick.name}</button>
            <p className="how">Aim for 2-3 minutes. Tap the filler button for every "um", "uh", "like" or "you know", and note upgrades in Fix it.</p>
          </div>
        )}
        {ready && L.checkpoint && (
          <div className="compare pop">
            <div className="take one"><small>Before · Module {String(C1_LESSONS.find((x) => x.key === L.firstOfBlock)?.modNum || "").padStart(2, "0")}, Lesson 1</small><span className="big">{before?.fill1 ?? "?"}</span><span className="muted">fillers · talked {before?.talked ? mmss(before.talked) : "?"} · trick {before?.trickUsed ? "used" : "not used"}</span>{before && !before.fill1 && !before.talked && <span className="muted">No saved speech from that lesson yet.</span>}</div>
            <div className="take two"><small>Now · checkpoint</small><span className="big">{doc.fill1}</span><span className="muted">fillers · talked {doc.talked ? mmss(doc.talked) : "..."} · trick {doc.trickUsed ? "used" : "not yet"}</span>{bits.length > 0 && <span className="better">{bits.join(" · ")}</span>}</div>
          </div>
        )}
      </div>
    </>);
  }

  /* ----- 2. Power language / Review ----- */
  function Power() {
    const P = doc.pi === null ? null : phrases[doc.pi];
    const groups = [...new Set(phrases.map((p) => p[0]))];
    return (<>
      <div className="part">
        <Ph n="2" title="Speaker's trick" />
        <div className="rule"><small>Trick {L.block + 1} of 12 · Modules {String(block.mods[0]).padStart(2, "0")}-{String(block.mods[1]).padStart(2, "0")}</small><h3>{block.trick.name}</h3><p>{block.trick.how}</p><Html as="p" className="wex" s={block.trick.ex} /></div>
      </div>
      <div className="part">
        <Ph title="Sound focus" />
        <div className="rule sound"><small>Sound {L.block + 1} of 12</small><h3>{block.sound.name}</h3><p>{block.sound.how}</p><Html as="p" className="wex" s={block.sound.ex} /></div>
      </div>
      <div className="part">
        <Ph title="Power phrases" />
        <div className="phr">{groups.map((g) => <div key={g} className="pgroup"><small>{g}</small><div className="words">{phrases.map((p, i) => p[0] === g && <button key={p[1]} type="button" className={`word ${doc.pi === i ? "on" : ""}`} onClick={() => patch({ pi: doc.pi === i ? null : i })}>{p[1]}</button>)}</div></div>)}</div>
        {P ? <div className="wcard pop" key={P[1]}><b className="wbig">{P[1]}</b><p className="wmean">{P[2]}</p><Html as="p" className="wex" s={P[3]} /></div> : <p className="how">Click a phrase to see when to use it.</p>}
      </div>
    </>);
  }
  function Review() {
    return (
      <div className="part">
        <Ph n="2" title="Review: this stage's tricks and sounds" />
        {C.review.map((bi) => { const b = C1_BLOCKS[bi]; return (
          <div key={bi} className="rule"><small>Block {bi + 1} · Modules {String(b.mods[0]).padStart(2, "0")}-{String(b.mods[1]).padStart(2, "0")}</small><h3>{b.trick.name} · {b.sound.name}</h3><Html as="p" className="wex" s={b.trick.ex} /></div>
        ); })}
        <p className="how">Ask the student to use both tricks in the debate and the hot seat.</p>
      </div>
    );
  }

  /* ----- 3. Main task ----- */
  function Debate() {
    const M = C.main;
    const f = M.brief[Math.min(doc.fi, M.brief.length - 1)];
    const col = (k, title, list) => (
      <div className={`side ${doc.side === k ? "on" : ""}`}>
        <button type="button" className="side-h" onClick={() => patch({ side: doc.side === k ? null : k, hq: 0 })}><Ms n={doc.side === k ? "radio_button_checked" : "radio_button_unchecked"} />{title}</button>
        {doc.ideas[k] ? <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul> : <button type="button" className="mini" onClick={() => patch((d) => ({ ideas: { ...d.ideas, [k]: true } }))}><Ms n="lightbulb" />Show ideas</button>}
      </div>
    );
    return (<>
      {M.brief.length > 0 && (
        <div className="part">
          <Ph n="3" title="The brief" />
          <div className="stack"><div className="icard pop" key={doc.fi}><small>Fact {Math.min(doc.fi, M.brief.length - 1) + 1} of {M.brief.length} · {f[0]}</small><p className="d">{f[1]}</p></div></div>
          <StepNav i={Math.min(doc.fi, M.brief.length - 1)} n={M.brief.length} onGo={(i) => patch({ fi: i })} noun="fact" />
        </div>
      )}
      <div className="part">
        <Ph n={M.brief.length ? "" : "3"} title="Debate" />
        <div className="act-box">
          <span className="round"><Ms n="sync_alt" />Round {doc.round} of 2{doc.round === 2 ? ": now argue the other side" : ""}</span>
          <div className="stack fu"><div className="icard"><small>The motion</small><p className="q">{M.motion}</p></div></div>
          <p className="how">Tap the side the student takes in round 1. The hot seat will push against it.</p>
          <div className="sides">{col("for", "Agree", M.for)}{col("against", "Disagree", M.against)}</div>
          <SpeechClock key={`deb${doc.round}`} talk={M.time || 120} label="Each side" />
          <button type="button" className="mini" onClick={() => patch((d) => ({ round: d.round === 1 ? 2 : 1 }))}><Ms n={doc.round === 1 ? "swap_horiz" : "undo"} />{doc.round === 1 ? "Switch sides for round 2" : "Back to round 1"}</button>
        </div>
      </div>
    </>);
  }
  function Dilemma() {
    const M = C.main;
    return (<>
      <div className="part">
        <Ph n="3" title="The dilemma" />
        <div className="stack"><div className="icard"><small>What would you do?</small><p className="d big">{M.situation}</p></div></div>
      </div>
      <div className="part">
        <Ph title="Choose and defend it" />
        <div className="opts-row">{M.options.map(([k, label, reasons]) => (
          <div key={k} className={`side ${doc.side === k ? "on" : ""}`}>
            <button type="button" className="side-h" onClick={() => patch({ side: doc.side === k ? null : k, hq: 0 })}><Ms n={doc.side === k ? "radio_button_checked" : "radio_button_unchecked"} />{label}</button>
            {doc.ideas[k] ? <ul>{reasons.map((x) => <li key={x}>{x}</li>)}</ul> : <button type="button" className="mini" onClick={() => patch((d) => ({ ideas: { ...d.ideas, [k]: true } }))}><Ms n="lightbulb" />Reasons</button>}
          </div>
        ))}</div>
        <div className="speak"><SpeechClock talk={M.time || 150} label="Defend it" /></div>
        {doc.twist
          ? <div className="fu-wrap"><div className="stack fu pop"><div className="icard"><small>The twist</small><p className="q">{M.twist}</p></div></div><p className="how">Does this change the student's answer? If it does, tap the new choice above.</p></div>
          : <button type="button" className="go-mid" onClick={() => patch({ twist: true })}><Ms n="bolt" />Reveal the twist</button>}
      </div>
    </>);
  }
  function Solve() {
    const M = C.main;
    return (<>
      <div className="part">
        <Ph n="3" title="The problem" />
        <div className="stack"><div className="icard"><small>Solve it</small><p className="d big">{M.problem}</p></div></div>
        <div className="limits">{M.limits.map((x) => <span key={x}><Ms n="lock" />{x}</span>)}</div>
      </div>
      <div className="part">
        <Ph title="The plan" />
        <div className="lines">{doc.plan.map((t, i) => <div key={i} className="line"><i>{i + 1}</i><Editable className="ed" ph={["Step 1: the first thing I'd do", "Step 2", "Step 3"][i]} value={t} onChange={(v) => patch((d) => { const p = [...d.plan]; p[i] = v; return { plan: p }; })} /></div>)}</div>
        <div className="speak"><SpeechClock think={60} talk={M.time || 240} label="Present the plan" /></div>
        {doc.ideas.solve ? <div className="sticky-wrap"><div className="sticky green pop"><small>Ideas if stuck</small>{M.ideas.join(" · ")}</div></div> : <button type="button" className="mini" onClick={() => patch((d) => ({ ideas: { ...d.ideas, solve: true } }))}><Ms n="lightbulb" />Ideas if stuck</button>}
      </div>
    </>);
  }
  function DataTask() {
    const M = C.main;
    const max = Math.max(...M.rows.map((r) => r[1]));
    const di = Math.min(doc.dp, M.prompts.length - 1), pr = M.prompts[di];
    return (<>
      <div className="part">
        <Ph n="3" title="The data" />
        <div className="chart">
          <h3>{M.title}</h3>
          {M.rows.map(([label, v, shown]) => <div key={label} className="bar-row"><span className="bl">{label}</span><span className="track"><i style={{ width: `${Math.max(4, (v / max) * 100)}%` }} /></span><span className="bv">{shown}</span></div>)}
          {M.note && <p className="note">{M.note}</p>}
          <p className="src"><Ms n="menu_book" />Source: {M.source}</p>
        </div>
      </div>
      <div className="part">
        <Ph n={`${di + 1}/${M.prompts.length}`} title={pr[0]} />
        <div className="stack fu"><div className="icard pop" key={di}><small>{pr[0]}</small><p className="q">{pr[1]}</p></div></div>
        {doc.drev[di] ? <div className="sticky-wrap"><div className="sticky green pop"><small>Ideas</small>{pr[2].join(" · ")}</div></div> : <button type="button" className="mini" onClick={() => patch((d) => ({ drev: { ...d.drev, [di]: true } }))}><Ms n="lightbulb" />Ideas</button>}
        <StepNav i={di} n={M.prompts.length} onGo={(i) => patch({ dp: i })} />
      </div>
    </>);
  }
  function Summarize() {
    const M = C.main;
    const col = (k, title, list) => (
      <div className={`side ${doc.side === k ? "on" : ""}`}>
        <button type="button" className="side-h" onClick={() => patch({ side: doc.side === k ? null : k, hq: 0 })}><Ms n={doc.side === k ? "radio_button_checked" : "radio_button_unchecked"} />{title}</button>
        {doc.ideas[k] ? <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul> : <button type="button" className="mini" onClick={() => patch((d) => ({ ideas: { ...d.ideas, [k]: true } }))}><Ms n="lightbulb" />Ideas</button>}
      </div>
    );
    return (<>
      <div className="part">
        <Ph n="3" title="Read it" />
        <article className="text-card"><small>{M.byline}</small><h3>{M.title}</h3>{M.text.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</article>
      </div>
      <div className="part">
        <Ph title="Sum it up in 30 seconds" />
        <div className="speak"><SpeechClock talk={30} label="30 seconds" /><p className="how">Say the writer's main point and two details, in your own words.</p></div>
        {doc.ideas.points ? <div className="sticky-wrap"><div className="sticky green pop"><small>Key points</small>{M.points.join(" · ")}</div></div> : <button type="button" className="mini" onClick={() => patch((d) => ({ ideas: { ...d.ideas, points: true } }))}><Ms n="checklist" />Key points</button>}
      </div>
      <div className="part">
        <Ph title="Do you agree?" />
        <p className="how">Tap the student's answer. The hot seat will push against it.</p>
        <div className="sides">{col("agree", "Agree", M.agree)}{col("disagree", "Disagree", M.disagree)}</div>
        <div className="speak"><SpeechClock talk={120} label="Respond" /></div>
      </div>
    </>);
  }
  const MAIN = { Debate, Dilemma, Solve, Data: DataTask, Summarize };

  /* ----- 4. Hot seat ----- */
  function Hot() {
    const H = C.hot;
    let list, sides = null;
    if (H.all) list = H.all;
    else {
      sides = fmt === "Debate" ? [["for", "Agree"], ["against", "Disagree"]] : fmt === "Summarize" ? [["agree", "Agrees with the text"], ["disagree", "Disagrees with the text"]] : C.main.options.map(([k, label]) => [k, label]);
      list = doc.side && H[doc.side] ? [...H[doc.side], ...H.neutral] : H.neutral;
    }
    const i = Math.min(doc.hq, list.length - 1);
    return (
      <div className="part">
        <Ph n="4" title="Hot seat" />
        {sides && <div className="row"><span className="how">The student {fmt === "Dilemma" ? "chose" : "argued"}:</span>{sides.map(([k, label]) => <button key={k} type="button" className={`chip ${doc.side === k ? "on" : ""}`} onClick={() => patch({ side: k, hq: 0 })}>{label}</button>)}</div>}
        {sides && !doc.side && <p className="how">Pick the side the student took to get questions that push against it. Until then, two neutral ones.</p>}
        <div className="fu-wrap"><div className="stack fu pop" key={`${doc.side}-${i}`}><div className="icard"><small>Hot seat · {i + 1} of {list.length}{sides && doc.side && i >= list.length - H.neutral.length ? " · either side" : ""}</small><p className="q">{list[i]}</p></div></div></div>
        <div className="speak"><SpeechClock key={`hs${doc.side}${i}`} talk={30} label="30 seconds" /></div>
        <StepNav i={i} n={list.length} onGo={(n) => patch({ hq: n })} noun="question" />
      </div>
    );
  }

  /* ----- 5. Wrap-up ----- */
  function Wrap() {
    const sums = SUMS[fmt] || SUMS.Debate;
    return (<>
      <div className="part">
        <Ph n="5" title="Sum it up" />
        <div className="lines">{doc.sum.map((t, i) => <div key={i} className="line"><i>{i + 1}</i><Editable className="ed" ph={sums[i]} value={t} onChange={(v) => patch((d) => { const s = [...d.sum]; s[i] = v; return { sum: s }; })} /></div>)}</div>
      </div>
      <div className="part">
        <Ph title="Fix it together" />
        <div className="fixes">{fixes.length ? fixes.map((f) => (
          <div key={f.id} className={`fx ${f.kind === "up" ? "up" : ""}`}><div className="fx-top"><span className="fx-kind">{f.kind === "up" ? "Upgrade it" : "Fix it"}</span></div><div className="fx-said">{f.said}</div>{f.better && <div className="fx-better"><Ms n="arrow_forward" />{f.better}</div>}</div>
        )) : <div className="empty">No notes yet. Tap <b>Fix it</b> at the top during the lesson.</div>}</div>
      </div>
      <div className="part">
        <Ph title="Take away" />
        <div className="sticky-wrap"><div className="sticky green"><small>Trick · Sound</small>{block.trick.name} · {block.sound.name}</div></div>
        {phrases.length > 0 && <div className="sticky-wrap"><div className="sticky green"><small>This module's phrases</small>{phrases.map((p) => p[1]).join(" · ")}</div></div>}
        <div className="sticky-wrap"><div className="sticky big"><small>At home · 2-3 minutes</small>{C.home}</div></div>
      </div>
      {typeof window !== "undefined" && window.opener && <button type="button" className="go-mid" onClick={() => window.close()}><Ms n="done_all" />Finish and close</button>}
    </>);
  }

  function MorePage() {
    const list = C.more || [];
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

  const VIEWS = { impromptu: Impromptu, power: Power, review: Review, main: MAIN[fmt] || Debate, hot: Hot, wrap: Wrap };
  const View = VIEWS[stepKey];

  return (
    <div className="jt1 c1">
      <style>{CSS}</style>
      <div className="bar"><div className="bar-in">
        <div className="mark-t"><b>Just Talk · {L.lv}</b><span>{kicker}</span></div>
        <div className="right">
          <nav className="pages" aria-label="Pages">
            <button type="button" className={`pg ${page === "lesson" ? "on" : ""}`} onClick={() => setPage("lesson")}>{isCheck ? "Check-in" : "Lesson"}</button>
            <button type="button" className={`pg ${page === "more" ? "on" : ""}`} onClick={() => setPage("more")}>More questions</button>
            {scratch.pages.map((id, i) => (
              <button type="button" key={id} className={`pg ${page === id ? "on" : ""}`} onClick={() => setPage(id)}>Page {i + 1}
                <span className="pg-x" role="button" aria-label={`Close page ${i + 1}`} onClick={(e) => { e.stopPropagation(); closePage(id); }}><Ms n="close" /></span>
              </button>
            ))}
            <button type="button" className="pg add" onClick={addPage} aria-label="Add a blank page" title="Add a blank page"><Ms n="add" /></button>
          </nav>
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
                {stepKey !== "impromptu" && <div className="head"><h1>{L.title}</h1><span className="tag"><Ms n="schedule" />{steps[step][2]}</span></div>}
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
          <label htmlFor="jtc-said">What they said</label>
          <textarea id="jtc-said" ref={saidRef} rows={2} value={fSaid} onChange={(e) => setFSaid(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("jtc-better")?.focus(); } }} placeholder="It's very unique." />
          <label htmlFor="jtc-better">Better version (you can add it later)</label>
          <input id="jtc-better" value={fBetter} onChange={(e) => setFBetter(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addFix()} placeholder="It's truly one of a kind." />
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
              <Editable className="fl-better" ph="add a better version" value={f.better || ""} onChange={(v) => patch((d) => ({ fixes: d.fixes.map((x) => (x.id === f.id ? { ...x, better: v } : x)) }))} />
              <button type="button" onClick={() => patch((d) => ({ fixes: d.fixes.filter((x) => x.id !== f.id) }))} aria-label="Delete"><Ms n="delete" /></button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

const CSS = ONAIR_CSS + `
/* C1-C2: colors from the C1-C2 banner (plum main, deep plum, lavender stage, gold) */
.jt1.c1 { --stage: #EFEAF7; --ink: #241B33; --muted: #6E6480; --line: #DDD3EC; --soft: #F5F1FA; --red: #5B3F8C; --red-wash: #EEE8F6; --teal: #3E2A63; --teal-wash: #ECE6F5; --gold: #F2B93B; --gold-wash: #FFF4D6; --plum: #3E2A63; --plum-2: #5B3F8C; --plum-wash: #EEE8F6; --fold: #DCD2EA; --rule-line: #EEE8F5;
  background: radial-gradient(ellipse 60% 40% at 55% 12%, #FFFFFF 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse 40% 40% at 100% 100%, #DCCFF0 0%, rgba(220,207,240,0) 70%), var(--stage); background-attachment: fixed; }
.jt1.c1 .present { box-shadow: 0 12px 28px rgba(50,30,80,.3); }
.jt1 .rule.sound { border-top-color: var(--red); }
.jt1 .rule.sound small { color: var(--red); }
.jt1 .icard p.d.big { font-size: 19px; line-height: 32px; }
.jt1 .modes { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jt1 .mode { display: inline-flex; align-items: center; gap: 6px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 13px 8px 10px; font-weight: 600; font-size: 13.5px; }
.jt1 .mode.on { background: var(--red); border-color: var(--red); color: #fff; }
.jt1 .mode .ms { font-size: 18px; }
.jt1 .wheel-zone { display: grid; justify-items: center; gap: 14px; }
.jt1 .wheel-box { position: relative; width: min(100%, 300px); aspect-ratio: 1; max-width: 100%; container-type: inline-size; }
.jt1 .wheel { position: absolute; inset: 0; border-radius: 50%; box-shadow: 0 10px 26px rgba(50,30,80,.22), inset 0 0 0 6px #fff; }
.jt1 .wheel.spinning { transition: transform 3s cubic-bezier(.12,.75,.1,1); }
.jt1 .wheel span { position: absolute; left: 50%; top: 50%; width: 0; height: 0; }
.jt1 .wheel span b { position: absolute; transform: translate(-50%, -50%); font-family: var(--disp); font-weight: 800; font-size: 24px; color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,.25); }
.jt1 .wheel span b.used { opacity: .35; }
.jt1 .hub { position: absolute; left: 50%; top: 50%; width: 22%; aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%; background: #fff; display: grid; place-items: center; color: var(--red); box-shadow: 0 3px 10px rgba(0,0,0,.18); font-weight: 700; font-size: 13px; }
.jt1 .pointer { position: absolute; left: 50%; top: -8px; transform: translateX(-50%); width: 0; height: 0; border-left: 14px solid transparent; border-right: 14px solid transparent; border-top: 26px solid var(--gold); filter: drop-shadow(0 2px 2px rgba(0,0,0,.2)); z-index: 2; }
.jt1 .spin-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; border-radius: 12px; padding: 11px 20px; font-weight: 600; font-size: 15px; }
.jt1 .spin-btn:disabled { opacity: .45; }
.jt1 .three { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.jt1 .three .sticky.empty3 { color: var(--muted); border-left-color: var(--line); }
.jt1 .speak { display: grid; gap: 12px; justify-items: center; width: min(100%, 640px); justify-self: center; background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 16px; }
.jt1 .speechclock { display: grid; justify-items: center; gap: 8px; }
.jt1 .clockbig { display: grid; justify-items: center; gap: 2px; }
.jt1 .clockbig b { font-family: var(--disp); font-weight: 800; font-size: 52px; line-height: 1; font-variant-numeric: tabular-nums; }
.jt1 .clockbig small { font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.jt1 .clockbig.think b { color: #C98A16; }
.jt1 .clockbig.talk b { color: var(--red); }
.jt1 .counter { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
.jt1 .um { display: inline-flex; align-items: center; gap: 8px; background: var(--gold-wash); color: #7A5200; border-radius: 12px; padding: 9px 15px; font-weight: 700; font-size: 15px; }
.jt1 .um b { font-family: var(--disp); font-size: 28px; line-height: 1; min-width: 28px; text-align: center; font-variant-numeric: tabular-nums; }
.jt1 .mini { display: inline-flex; align-items: center; gap: 4px; background: var(--soft); border-radius: 9px; padding: 7px 11px; font-weight: 600; font-size: 13px; justify-self: center; }
.jt1 .upr { display: inline-flex; align-items: center; gap: 8px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px; font-weight: 600; font-size: 14px; text-align: left; }
.jt1 .upr .ms { color: var(--line); }
.jt1 .upr.on { background: var(--red-wash); border-color: var(--red); }
.jt1 .upr.on .ms { color: var(--red); }
.jt1 .compare { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; width: min(100%, 640px); justify-self: center; }
.jt1 .take { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px; display: grid; gap: 6px; align-content: start; }
.jt1 .take small { font-size: 11.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.jt1 .take .big { font-family: var(--disp); font-weight: 800; font-size: 34px; line-height: 1; }
.jt1 .take.two { border-top: 4px solid var(--red); }
.jt1 .take .muted { color: var(--muted); font-size: 13.5px; }
.jt1 .better { font-weight: 700; color: var(--red); font-size: 14px; }
.jt1 .phr { display: grid; gap: 12px; width: min(100%, 640px); justify-self: center; }
.jt1 .pgroup { display: grid; gap: 8px; }
.jt1 .pgroup > small { font-size: 11.5px; font-weight: 700; color: var(--red); letter-spacing: .12em; text-transform: uppercase; }
.jt1 .pgroup .words { justify-content: flex-start; }
.jt1 .wcard { background: var(--card); border-radius: 12px; padding: 18px 22px; box-shadow: 0 12px 26px rgba(50,30,80,.10); border-top: 8px solid var(--gold); width: min(100%, 640px); }
.jt1 .wbig { font-family: var(--disp); font-weight: 800; font-size: 28px; letter-spacing: -.02em; }
.jt1 .wcard .wex { color: var(--ink); font-size: 17px; }
.jt1 .round { display: inline-flex; align-items: center; gap: 6px; background: var(--red-wash); color: var(--red); border-radius: 8px; padding: 5px 10px; font-weight: 700; font-size: 13px; }
.jt1 .opts-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; width: min(100%, 680px); justify-self: center; }
.jt1 .go-mid { justify-self: center; display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; border-radius: 12px; padding: 12px 20px; font-family: var(--disp); font-weight: 700; font-size: 15px; }
.jt1 .text-card { width: min(100%, 680px); justify-self: center; background: var(--card); border: 1px solid var(--line); border-top: 8px solid var(--gold); border-radius: 12px; padding: 20px 24px; box-shadow: 0 12px 26px rgba(50,30,80,.08); }
.jt1 .text-card small { font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.jt1 .text-card h3 { margin: 6px 0 10px; font-family: var(--disp); font-weight: 800; font-size: clamp(24px, 3.2vw, 30px); letter-spacing: -.015em; line-height: 1.1; }
.jt1 .text-card p { margin: 0 0 12px; font-size: 18px; line-height: 1.6; }
.jt1 .text-card p:last-child { margin-bottom: 0; }
.jt1 .limits { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jt1 .limits span { display: inline-flex; align-items: center; gap: 6px; background: var(--card); border: 1px solid var(--line); border-radius: 999px; padding: 6px 12px; font-weight: 600; font-size: 14px; }
.jt1 .limits .ms { font-size: 16px; color: var(--red); }
.jt1 .chart { width: min(100%, 680px); justify-self: center; background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 18px 20px; display: grid; gap: 10px; }
.jt1 .chart h3 { margin: 0 0 4px; font-family: var(--disp); font-weight: 800; font-size: 20px; letter-spacing: -.01em; }
.jt1 .bar-row { display: grid; grid-template-columns: 110px minmax(0, 1fr) auto; gap: 10px; align-items: center; font-size: 15px; }
.jt1 .bl { font-weight: 600; }
.jt1 .track { height: 18px; background: var(--soft); border-radius: 99px; overflow: hidden; }
.jt1 .track i { display: block; height: 100%; background: linear-gradient(90deg, var(--red), #8C6BB8); border-radius: 99px; }
.jt1 .bv { font-variant-numeric: tabular-nums; font-weight: 700; font-size: 14px; white-space: nowrap; }
.jt1 .chart .note { margin: 4px 0 0; font-size: 14px; color: var(--ink); font-weight: 600; }
.jt1 .chart .src { margin: 0; font-size: 12.5px; color: var(--muted); display: flex; gap: 6px; align-items: flex-start; }
.jt1 .chart .src .ms { font-size: 16px; }
@media (max-width: 560px) { .jt1 .compare { grid-template-columns: 1fr; } .jt1 .bar-row { grid-template-columns: 80px minmax(0, 1fr) auto; } }
@media (prefers-reduced-motion: reduce) { .jt1 .wheel.spinning { transition: none; } }
`;
