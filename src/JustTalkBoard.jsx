import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import { STAGES, NAMES } from "./justTalkData";
import { BOARDS, WARM } from "./justTalkBoards";
import { writtenTranslation } from "./justTalkTranslations";
import { WheelBlock, DiceBlock, teensGameStyles } from "./TeensGames.jsx";
import { SoarPic, ZoomContext, ZoomOverlay, zoomStyles } from "./SoarPic.jsx";
import { Ink, Items } from "./JustTalkInk.jsx";
import { readPhoto } from "./justTalkPhoto.js";
import { fitBoardWindow } from "./justTalkWindow.js";

// Just Talk Board: the owner's one-window lesson board for A1 speaking classes.
// Pages: Warm-up (new or regular student) > Lesson (parts revealed one at a time) > More questions > free pages.
// Look: "Flashcards" (questions on index cards from a stack, answers on sticky notes, soft green desk).
// Translations are free: Hebrew and Polish are written in advance (justTalkTranslations.js); other
// languages get a Google Translate link that opens in a new tab. Look: "On Air" in the A1-A2 banner colors
// (coral, navy, peach, sparkle yellow), one slim centered top bar, no student picker. Boards save per lesson (student "A1-A2"),
// to Supabase (sql/just_talk_boards.sql); without that table they save in this browser only.
//
// ACTIVITY TYPES (justTalkBoards.js): wheel, dice, cards (+pic), sort, draw, showtell, truthlie, flipgrid, spotdiff, timer,
// order (tap in order), survey (yes/no per question), clues (reveal clues, then answer), rate (1-5 stars), plan (time slots).

const OWNER_EMAIL = "caldrin1999@gmail.com";
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const STEPS_ALL = ["Title", "Words", "Question", "Sentence guide", "Activity", "Your sentences", "Lesson card"];
const LANGS = ["Hebrew", "Polish", "Spanish", "Portuguese", "French", "German", "Italian", "Russian", "Ukrainian", "Turkish", "Arabic", "Chinese", "Japanese", "Korean", "Vietnamese", "Thai"];
const RTL = new Set(["Hebrew", "Arabic"]);
const STAMPS = [["Great sentence!", "#FF6B4A"], ["Perfect ★", "#E0A21F"], ["Wow!", "#1B2A4A"]];
const BOARD_STUDENT = "A1-A2";
const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const uid = () => Math.random().toString(36).slice(2, 9);
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } };

/* ---------- lesson lookup ---------- */
function findLesson(topicSlug, n, stageParam) {
  const order = [];
  STAGES.forEach((st) => {
    st.topics.forEach((t) => t.classes.forEach((c, i) => order.push({ key: `${slug(t.name)}-${i + 1}`, stage: st.n, module: t.name, n: i + 1, name: NAMES[t.name]?.[i] || c[0], q: c[0] })));
    order.push({ key: `check-${st.n}`, stage: st.n, module: `Stage ${st.n}`, n: 0, name: `Stage ${st.n} Check-in`, q: "Show what you can say" });
  });
  const modNum = Object.fromEntries(STAGES.flatMap((st) => st.topics.map((t) => t.name)).map((m, i) => [m, i + 1]));
  const key = stageParam ? `check-${String(stageParam).replace("stage-", "")}` : `${topicSlug}-${n}`;
  const idx = order.findIndex((o) => o.key === key);
  if (idx < 0) return null;
  const me = order[idx];
  return { ...me, modNum: modNum[me.module] || 0, next: order[idx + 1]?.name || null, folder: stageParam ? `stage-${me.stage}` : topicSlug };
}

/* ---------- translation (free: written in advance, else a Google Translate link) ---------- */
const GT_CODE = { Hebrew: "iw", Polish: "pl", Spanish: "es", Portuguese: "pt", French: "fr", German: "de", Italian: "it", Russian: "ru", Ukrainian: "uk", Turkish: "tr", Arabic: "ar", Chinese: "zh-CN", Japanese: "ja", Korean: "ko", Vietnamese: "vi", Thai: "th" };
const googleLink = (text, lang) => `https://translate.google.com/?sl=en&tl=${GT_CODE[lang] || "en"}&text=${encodeURIComponent(String(text).replace(/___/g, "..."))}&op=translate`;

function Tr({ text, lang, small }) {
  const [shownFor, setShownFor] = useState(null);
  const written = writtenTranslation(text, lang);
  if (!written) {
    return <a className={`tr-btn${small ? " sm" : ""}`} href={googleLink(text, lang)} target="_blank" rel="noreferrer" title="Opens Google Translate in a new tab"><Ms n="open_in_new" />Google Translate</a>;
  }
  if (shownFor === `${lang}|${text}`) return <span className={`tr-out${small ? " sm" : ""}`}><Ms n="translate" /><span dir={RTL.has(lang) ? "rtl" : "ltr"} lang={GT_CODE[lang]}>{written}</span></span>;
  return <button type="button" className={`tr-btn${small ? " sm" : ""}`} onClick={() => setShownFor(`${lang}|${text}`)}><Ms n="translate" />Translate</button>;
}

/* ---------- small pieces ---------- */
function Ms({ n }) { return <span className="ms" aria-hidden="true">{n}</span>; }

function say(text, rate, btn) {
  try {
    const u = new SpeechSynthesisUtterance(String(text).replace(/___/g, "blank"));
    u.lang = "en-US";
    u.rate = rate;
    const vs = speechSynthesis.getVoices();
    const v = vs.find((x) => /en-US/i.test(x.lang) && /natural|google|samantha|aria|jenny/i.test(x.name)) || vs.find((x) => /^en/i.test(x.lang));
    if (v) u.voice = v;
    btn?.classList.add("playing");
    u.onend = () => btn?.classList.remove("playing");
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
    setTimeout(() => btn?.classList.remove("playing"), 4000);
  } catch { btn?.classList.remove("playing"); }
}
function Spk({ text, slow, sm }) {
  return <button type="button" className={`spk${slow ? " slow" : ""}${sm ? " sm" : ""}`} aria-label={slow ? "Hear it slowly" : "Hear it"} onClick={(e) => say(text, slow ? 0.55 : 0.92, e.currentTarget)}><Ms n={slow ? "slow_motion_video" : "volume_up"} /></button>;
}
function Blanks({ text }) {
  const parts = String(text).split("___");
  return <>{parts.map((p, i) => <span key={i}>{p}{i < parts.length - 1 && <span className="blank" />}</span>)}</>;
}
function Pic({ label, size }) {
  return (
    <div className="pic">
      <div className="photo"><SoarPic src={`/curriculum/just-talk/pics/${slug(label)}.jpeg`} label={label} size={size} /></div>
      <span className="cap">{label}</span>
    </div>
  );
}
function Part({ n, title, children, extra }) {
  return (
    <section className="part" data-part={n}>
      <div className="ph"><span className="n">{String(n).padStart(2, "0")}</span><h2>{title}</h2>{extra}</div>
      {children}
    </section>
  );
}
function QCard({ label = "Question", text, lang, children, fu }) {
  return (
    <div className={`stack${fu ? " fu" : ""}`}>
      <div className="icard">
        <small>{label}</small>
        <div className="q-row"><p className="q">{text}</p><Spk text={text} sm={fu} /></div>
        <div className="q-tools"><Tr key={text} text={text} lang={lang} />{children}</div>
      </div>
    </div>
  );
}
function StepNav({ i, n, onGo, noun = "question" }) {
  return (
    <div className="stepnav">
      <button type="button" onClick={() => onGo(-1)} disabled={i === 0}><Ms n="chevron_left" />Back</button>
      <span className="sn-dots" aria-label={`${noun} ${i + 1} of ${n}`}>{Array.from({ length: n }, (_, k) => <i key={k} className={k === i ? "cur" : k < i ? "on" : ""} />)}</span>
      <button type="button" className="nx" onClick={() => onGo(1)} disabled={i === n - 1}>Next {noun}<Ms n="chevron_right" /></button>
    </div>
  );
}
function Sticky({ children, className = "", ...rest }) { return <div className={`sticky ${className}`} {...rest}>{children}</div>; }

/* ---------- activities ---------- */
function Activity({ a, folder, act, setAct, addPage }) {
  if (!a) return null;
  if (a.type === "wheel") return <div className="act-game"><WheelBlock heading="" items={a.items.map((label) => ({ label }))} size={230} /></div>;
  if (a.type === "dice") return <div className="act-game"><DiceBlock heading="" dice={a.dice} /></div>;
  if (a.type === "cards") return <>{a.pic && <div className="pics"><Pic folder={folder} label={a.pic} size={300} /></div>}<CardsAct a={a} /></>;
  if (a.type === "sort") {
    const place = act.place || {};
    const cycle = (w) => setAct({ place: { ...place, [w]: ((place[w] ?? -1) + 2) % (a.cols.length + 1) - 1 } });
    const col = (ci) => a.items.filter((w) => (place[w] ?? -1) === ci);
    return (
      <div className="sort">
        <div className="sort-pool">{col(-1).map((w) => <button type="button" key={w} className="chip" onClick={() => cycle(w)}>{w}</button>)}{col(-1).length === 0 && <span className="muted">All sorted!</span>}</div>
        <div className="sort-cols" style={{ gridTemplateColumns: `repeat(${a.cols.length}, minmax(0, 1fr))` }}>{a.cols.map((c, ci) => (
          <div key={c} className="sort-col"><b>{c}</b>{col(ci).map((w) => <button type="button" key={w} className="chip on" onClick={() => cycle(w)}>{w}</button>)}</div>
        ))}</div>
      </div>
    );
  }
  if (a.type === "draw") return <div className="act-center"><button type="button" className="big-btn" onClick={() => addPage(a.page)}><Ms n="draw" />Open a drawing page: {a.page}</button></div>;
  if (a.type === "showtell") {
    const photos = act.photos || [];
    return (
      <div className="showtell">
        <div className="st-slots">{Array.from({ length: a.slots || 1 }, (_, i) => (
          <label key={i} className="st-slot">
            {photos[i] ? <img src={photos[i]} alt={`Photo ${i + 1}`} /> : <span><Ms n="add_photo_alternate" />Add photo {i + 1}</span>}
            <input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) readPhoto(f, (src) => { const p = [...photos]; p[i] = src; setAct({ photos: p }); }); }} />
          </label>
        ))}</div>
        <div className="replies">{a.frames.map((f) => <Sticky key={f}><Blanks text={f} /></Sticky>)}</div>
      </div>
    );
  }
  if (a.type === "truthlie") {
    const facts = act.facts || ["", "", ""];
    return (
      <div className="truthlie">{facts.map((f, i) => (
        <div key={i} className={`tl-card${act.lie === i ? " lie" : ""}`}>
          <span className="tl-n">{i + 1}</span>
          <span className="tl-ed" contentEditable suppressContentEditableWarning data-ph="Type a fact about your family" onBlur={(e) => { const nf = [...facts]; nf[i] = e.currentTarget.textContent; setAct({ facts: nf }); }}>{f}</span>
          <button type="button" className="tl-btn" onClick={() => setAct({ lie: act.lie === i ? null : i })}>{act.lie === i ? "The lie!" : "Is it the lie?"}</button>
        </div>
      ))}</div>
    );
  }
  if (a.type === "flipgrid") {
    const down = act.down || {};
    return (
      <div className="flipgrid">
        <div className="fg-grid">{a.people.map((p) => (
          <button type="button" key={p} className={`fg-card${down[p] ? " down" : ""}`} onClick={() => setAct({ down: { ...down, [p]: !down[p] } })}>
            <SoarPic src={`/curriculum/just-talk/pics/guess-${slug(p)}.jpeg`} label={p} size={96} zoom="off" />
            <b>{p}</b>
          </button>
        ))}</div>
        <button type="button" className="mini" onClick={() => setAct({ down: {} })}>Stand everyone up again</button>
      </div>
    );
  }
  if (a.type === "spotdiff") {
    const found = act.found || 0;
    return (
      <div className="spotdiff">
        <div className="pics">{a.pics.map((p) => <Pic key={p} folder={folder} label={p} size={250} />)}</div>
        <div className="sd-count"><button type="button" onClick={() => setAct({ found: Math.max(0, found - 1) })} aria-label="One less">−</button><b>{found} / {a.count}</b><button type="button" onClick={() => setAct({ found: Math.min(a.count, found + 1) })} aria-label="One more">+</button></div>
      </div>
    );
  }
  if (a.type === "timer") return <TimerAct a={a} />;
  if (a.type === "order") {
    const ord = act.order || [];
    const tap = (w) => setAct({ order: ord.includes(w) ? ord.filter((x) => x !== w) : [...ord, w] });
    return (
      <div className="order-act">
        <div className="order-list">{(act.shuffled || a.items).map((w) => {
          const k = ord.indexOf(w);
          return <button type="button" key={w} className={`ord${k >= 0 ? " on" : ""}`} onClick={() => tap(w)}><span className="ord-n">{k >= 0 ? k + 1 : ""}</span>{w}</button>;
        })}</div>
        <div className="row"><button type="button" className="mini" onClick={() => setAct({ order: [], shuffled: shuffle(a.items) })}>Mix and start again</button></div>
      </div>
    );
  }
  if (a.type === "survey") {
    const ans = act.ans || {};
    const cols = a.cols || ["Yes", "No"];
    return (
      <div className="survey">{a.items.map((q) => (
        <div key={q} className="sv-row"><span className="sv-q">{q}</span>
          <span className="sv-btns">{cols.map((c) => <button type="button" key={c} className={ans[q] === c ? "on" : ""} onClick={() => setAct({ ans: { ...ans, [q]: ans[q] === c ? null : c } })}>{c}</button>)}</span>
        </div>
      ))}</div>
    );
  }
  if (a.type === "clues") {
    const si = act.set || 0;
    const set = a.sets[si % a.sets.length];
    const shown = act.shown || 0;
    return (
      <div className="clues">
        <div className="clue-list">{set.clues.slice(0, shown).map((c, i) => <div key={c} className="clue"><span>{i + 1}</span>{c}</div>)}</div>
        {act.answer === si ? <div className="clue-answer">{set.answer}</div> : null}
        <div className="row">
          <button type="button" className="big-btn" disabled={shown >= set.clues.length} onClick={() => setAct({ shown: shown + 1 })}><Ms n="lightbulb" />{shown === 0 ? "First clue" : "Next clue"}</button>
          <button type="button" className="mini" onClick={() => setAct({ answer: si })}>Show the answer</button>
          <button type="button" className="mini" onClick={() => setAct({ set: si + 1, shown: 0, answer: null })}>New one</button>
        </div>
        <span className="muted">{si % a.sets.length + 1} of {a.sets.length}</span>
      </div>
    );
  }
  if (a.type === "rate") {
    const stars = act.stars || {};
    return (
      <div className="survey">{a.items.map((q) => (
        <div key={q} className="sv-row"><span className="sv-q">{q}</span>
          <span className="stars-row">{[1, 2, 3, 4, 5].map((n) => <button type="button" key={n} aria-label={`${n} stars`} className={(stars[q] || 0) >= n ? "on" : ""} onClick={() => setAct({ stars: { ...stars, [q]: n } })}>★</button>)}</span>
        </div>
      ))}</div>
    );
  }
  if (a.type === "plan") {
    const vals = act.vals || {};
    return (
      <div className="plan">{a.slots.map((sl) => (
        <div key={sl} className="plan-row"><b>{sl}</b>
          <span className="plan-ed" contentEditable suppressContentEditableWarning data-ph="type the plan" onBlur={(e) => setAct({ vals: { ...vals, [sl]: e.currentTarget.textContent } })}>{vals[sl] || ""}</span>
        </div>
      ))}</div>
    );
  }
  return null;
}
function CardsAct({ a }) {
  const [deck, setDeck] = useState(() => shuffle(a.items));
  const [i, setI] = useState(-1);
  function turn() {
    if (i + 1 >= deck.length) { setDeck(shuffle(a.items)); setI(0); } else setI(i + 1);
  }
  return (
    <div className="cards-act">
      <div className="stack big"><div className={`icard${i >= 0 ? " shown" : ""}`} key={i}>{i >= 0 ? <p className="q">{deck[i]}</p> : <p className="q muted">Turn the first card</p>}</div></div>
      <button type="button" className="big-btn" onClick={turn}><Ms n="style" />{i < 0 ? "Turn a card" : "Next card"}</button>
      <span className="muted">{i >= 0 ? `Card ${i + 1} of ${deck.length}` : `${deck.length} cards`}</span>
    </div>
  );
}
function TimerAct({ a }) {
  const [topic, setTopic] = useState(null);
  const [left, setLeft] = useState(a.seconds);
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const t = useRef(null);
  useEffect(() => () => clearInterval(t.current), []);
  function start() {
    if (running) { clearInterval(t.current); setRunning(false); return; }
    setRunning(true);
    t.current = setInterval(() => setLeft((s) => { if (s <= 1) { clearInterval(t.current); setRunning(false); return 0; } return s - 1; }), 1000);
  }
  function reset() { clearInterval(t.current); setRunning(false); setLeft(a.seconds); setCount(0); }
  return (
    <div className="timer-act">
      <div className="chips-row">{a.items.map((x) => <button type="button" key={x} className={`chip${topic === x ? " on" : ""}`} onClick={() => setTopic(x)}>{x}</button>)}</div>
      <div className={`clock${left === 0 ? " done" : ""}`}>{Math.floor(left / 60)}:{String(left % 60).padStart(2, "0")}</div>
      <div className="row">
        <button type="button" className="big-btn" onClick={start}><Ms n={running ? "pause" : "play_arrow"} />{running ? "Pause" : left === a.seconds ? "Start" : "Go on"}</button>
        <button type="button" className="mini" onClick={reset}>Reset</button>
      </div>
      <div className="sd-count"><span className="muted">Sentences</span><button type="button" onClick={() => setCount(Math.max(0, count - 1))} aria-label="One less">−</button><b>{count}</b><button type="button" onClick={() => setCount(count + 1)} aria-label="One more">+</button></div>
    </div>
  );
}

/* ---------- ink + items on a page ---------- */
/* ---------- the board ---------- */
// A contentEditable span that keeps the caret: text is written through a ref, never re-rendered by React.
function Editable({ value, onChange, className, ph }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current && ref.current.textContent !== value) ref.current.textContent = value || ""; }, [value]);
  return <span ref={ref} className={className} contentEditable suppressContentEditableWarning data-ph={ph} onInput={(e) => onChange(e.currentTarget.textContent)} />;
}

const EMPTY_DOC = () => ({ step: 0, word: null, seen: [], qi: 0, gi: 0, yi: 0, built: {}, mine: [], fixBad: "", fixGood: "", fixes: [], act: {}, wi: 0, mi: 0, ans: {}, mode: "regular", pages: [], strokes: {}, items: {} });

export default function JustTalkBoard({ check = false }) {
  const { user, loading } = useAuth();
  const { topic, n, stage } = useParams();
  const L = useMemo(() => findLesson(topic, n, check ? stage : null), [topic, n, stage, check]);
  const B = L ? BOARDS[L.key] : null;
  const steps = useMemo(() => (B && B.words.length ? STEPS_ALL : STEPS_ALL.filter((s) => s !== "Words")), [B]);

  const student = BOARD_STUDENT;
  const [lang, setLang] = useState(() => lsGet("jt-lang", "Hebrew"));
  const [teacher, setTeacher] = useState(() => lsGet("jt-teacher", { name: "Paul", facts: ["I'm your English teacher.", "", ""] }));
  const [doc, setDoc] = useState(EMPTY_DOC);
  const [page, setPage] = useState("warm");
  const [tool, setTool] = useState("move");
  const [color, setColor] = useState("#1B2A4A");
  const [stamp, setStamp] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [saveMsg, setSaveMsg] = useState("");
  const [online, setOnline] = useState(true);
  const [height, setHeight] = useState(1200);
  const [fixOpen, setFixOpen] = useState(false);
  const [fSaid, setFSaid] = useState("");
  const [fBetter, setFBetter] = useState("");
  const [fKind, setFKind] = useState("fix");
  const saidRef = useRef(null);
  const sheetRef = useRef(null);
  const loadedFor = useRef(null);

  const patch = useCallback((p) => setDoc((d) => ({ ...d, ...(typeof p === "function" ? p(d) : p) })), []);
  const docKey = L ? `${L.key}` : "";

  // Load this student's board for this lesson.
  useEffect(() => {
    if (!user || !L) return;
    const forKey = `${student}|${docKey}`;
    const apply = (data) => { loadedFor.current = forKey; setDoc({ ...EMPTY_DOC(), ...(data || {}) }); setSaveMsg(data ? "Opened saved board" : ""); };
    if (!student) { apply(null); return; }
    const local = lsGet(`jt-board|${forKey}`, null);
    supabase.from("just_talk_boards").select("data").eq("student", student).eq("lesson_key", docKey).maybeSingle().then(({ data, error }) => {
      if (error) { setOnline(false); apply(local); return; }
      apply(data?.data || local);
    });
  }, [user, L, student, docKey]);

  const save = useCallback(async (quiet) => {
    if (!student) { if (!quiet) setSaveMsg("Pick a student first"); return; }
    const forKey = `${student}|${docKey}`;
    if (loadedFor.current !== forKey) return;
    lsSet(`jt-board|${forKey}`, doc);
    if (online) {
      const { error } = await supabase.from("just_talk_boards").upsert({ student, lesson_key: docKey, data: doc, updated_at: new Date().toISOString() }, { onConflict: "owner_id,student,lesson_key" });
      if (error) { setOnline(false); setSaveMsg("Saved in this browser only (run sql/just_talk_boards.sql)"); return; }
    }
    setSaveMsg(`Saved ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}${online ? "" : " in this browser"}`);
  }, [student, docKey, doc, online]);

  // Autosave a few seconds after changes.
  useEffect(() => {
    if (!student) return undefined;
    const t = setTimeout(() => { save(true); }, 2500);
    return () => clearTimeout(t);
  }, [doc, student, save]);

  // Always sit in half the screen.
  useEffect(() => { fitBoardWindow(); }, []);

  // Keep the drawing layer as tall as the page.
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [page]);

  // Keyboard: arrows move the lesson, Esc drops the current tool.
  const go = useCallback((d) => patch((x) => ({ step: Math.max(0, Math.min(steps.length - 1, x.step + d)) })), [patch, steps.length]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setFixOpen(false);
      if (e.target.closest?.("[contenteditable], input, select, textarea")) return;
      if (e.key === "Escape") { setTool("move"); setStamp(null); clearSpot(); }
      if (page !== "lesson") return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, go]);

  if (loading) return null;
  if (user?.email?.toLowerCase() !== OWNER_EMAIL) return <div className="jtb"><style>{CSS}</style><p className="denied">Not available.</p></div>;
  if (!L || !B) return <div className="jtb"><style>{CSS}</style><p className="denied">This lesson doesn't have a board yet.</p></div>;

  const step = Math.min(doc.step, steps.length - 1);
  const has = (name) => steps.indexOf(name) <= step && steps.indexOf(name) >= 0;
  const numOf = (name) => steps.indexOf(name);
  const Q = B.questions[Math.min(doc.qi, B.questions.length - 1)];
  const W = doc.word && B.words.find((w) => w.w === doc.word);
  const freePages = doc.pages || [];
  const pageItems = doc.items[page] || [];
  const pageStrokes = doc.strokes[page] || [];
  const setItems = (list) => patch((d) => ({ items: { ...d.items, [page]: list } }));
  const kicker = L.n ? `Module ${String(L.modNum).padStart(2, "0")} · ${L.module} · Lesson ${L.n}` : `Stage ${L.stage} · Check-in`;

  const fixes = doc.fixes || [];
  const legacyFix = !fixes.length && (doc.fixBad?.trim() || doc.fixGood?.trim());
  const openFix = () => { setFixOpen(true); setTimeout(() => saidRef.current?.focus(), 200); };
  const addFix = () => {
    const said = fSaid.trim();
    if (!said) { saidRef.current?.focus(); return; }
    patch((d) => ({ fixes: [...(d.fixes || []), { id: uid(), kind: fKind, said, better: fBetter.trim() }] }));
    setFSaid(""); setFBetter(""); saidRef.current?.focus();
  };
  const FixList = () => (
    <div className="fx-list">
      {fixes.map((f) => <div key={f.id} className={`lc-fix${f.kind === "up" ? " up" : ""}`}><s>{f.said}</s>{f.better && <><Ms n="arrow_forward" /><b>{f.better}</b></>}</div>)}
    </div>
  );

  function clearSpot() { sheetRef.current?.classList.remove("spot"); sheetRef.current?.querySelectorAll(".lit").forEach((x) => x.classList.remove("lit")); }
  function onSheetClick(e) {
    if (e.target.closest(".item")) return;
    const r = sheetRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (tool === "text") { setItems([...pageItems, { id: uid(), type: "txt", x: x - 10, y: y - 18, text: "", focus: true }]); setTool("move"); }
    else if (tool === "stamp" && stamp) { setItems([...pageItems, { id: uid(), type: "stamp", x: x - 60, y: y - 18, text: stamp[0], bg: stamp[1] }]); setTool("move"); setStamp(null); }
    else if (tool === "spot") {
      const hit = e.target.closest(".stack, .pics, .words, .explain, .replies, .fix, .lcard, .meet, .act-box, .phrases, .sticky-wrap");
      const already = hit?.classList.contains("lit");
      clearSpot();
      if (hit && !already) { hit.classList.add("lit"); sheetRef.current.classList.add("spot"); }
    }
  }
  function addPage(title) {
    const id = uid();
    patch((d) => ({ pages: [...(d.pages || []), { id, title: title || "" }] }));
    setPage(id);
  }
  function addPicture(file) {
    readPhoto(file, (src) => { setItems([...pageItems, { id: uid(), type: "img", x: 60, y: 120 + window.scrollY, w: 300, src }]); setTool("move"); });
  }
  const setTeacherField = (p) => setTeacher((t) => { const nt = { ...t, ...p }; lsSet("jt-teacher", nt); return nt; });

  /* ----- pages ----- */
  function WarmPage() {
    const isNew = doc.mode === "new";
    const list = isNew ? WARM.meet : WARM.regular;
    const wi = Math.min(doc.wi, list.length - 1);
    const x = list[wi];
    const ansKey = `${doc.mode}${wi}`;
    return (
      <div className="lesson">
        <div className="head"><h1>Warm-up</h1><span className="tag"><Ms n="waving_hand" />Before the lesson</span></div>
        <div className="mode" role="tablist">
          <button type="button" className={isNew ? "on" : ""} onClick={() => patch({ mode: "new", wi: 0 })}><Ms n="person_add" />New student</button>
          <button type="button" className={!isNew ? "on" : ""} onClick={() => patch({ mode: "regular", wi: 0 })}><Ms n="person" />Regular student</button>
        </div>
        {isNew && (
          <Part n={1} title="Meet your teacher">
            <div className="meet">
              <div className="avatar" aria-hidden="true">{(teacher.name.trim()[0] || "T").toUpperCase()}</div>
              <div className="meet-t"><small>Your English teacher</small>
                <h3>Hi! I'm <span className="ed" contentEditable suppressContentEditableWarning onBlur={(e) => setTeacherField({ name: e.currentTarget.textContent.trim() || "Paul" })}>{teacher.name}</span>.</h3>
              </div>
              <div className="facts">{["school", "public", "favorite"].map((ic, i) => (
                <div className="fact" key={ic}><Ms n={ic} /><span className="ed" contentEditable suppressContentEditableWarning data-ph={["I'm your English teacher.", "I'm from ___.", "I like ___."][i]} onBlur={(e) => { const f = [...teacher.facts]; f[i] = e.currentTarget.textContent; setTeacherField({ facts: f }); }}>{teacher.facts[i]}</span></div>
              ))}</div>
            </div>
            <div className="sticky-wrap"><Sticky>Hi! I'm <span className="blank" />.</Sticky></div>
          </Part>
        )}
        <Part n={isNew ? 2 : 1} title={isNew ? "Getting to know you" : "Small talk"}>
          <div className="feature" key={`w${doc.mode}${wi}`}>
            <QCard text={x.q} lang={lang} />
            <div className="sticky-wrap">{doc.ans[ansKey] ? <Sticky className="pop"><Blanks text={x.a} /></Sticky> : <button type="button" className="ans-btn" onClick={() => patch((d) => ({ ans: { ...d.ans, [ansKey]: true } }))}><Ms n="visibility" />Show answer</button>}</div>
          </div>
          <StepNav i={wi} n={list.length} onGo={(dd) => patch({ wi: Math.max(0, Math.min(list.length - 1, wi + dd)) })} />
        </Part>
        <Part n={isNew ? 3 : 2} title="Useful phrases">
          <div className="phrases">{WARM.phrases.map((p) => (
            <div className="phrase" key={p}><span className="p"><span><Blanks text={p} /></span><Spk text={p} sm /></span><Tr text={p} lang={lang} small /></div>
          ))}</div>
        </Part>
        <button type="button" className="go" onClick={() => { setPage("lesson"); window.scrollTo(0, 0); }}>Start the lesson<Ms n="arrow_forward" /></button>
      </div>
    );
  }

  function LessonPage() {
    if (step === 0) {
      return (
        <div className="lesson">
          <div className="cover">
            <div className="stack big"><div className="icard cover-card">
              <small>{L.n ? `Module ${String(L.modNum).padStart(2, "0")} · Lesson ${L.n}` : `Stage ${L.stage}`}</small>
              <h1>{L.name}</h1>
              <p className="q">{L.q}</p>
            </div></div>
            <span className="muted">{L.module}</span>
          </div>
        </div>
      );
    }
    const totalBlanks = (fi) => Q.guide.slice(0, fi).join("").split("___").length - 1;
    const gi = Math.min(doc.gi, Q.guide.length - 1);
    const fills = doc.built[doc.qi] || [];
    const frame = Q.guide[gi];
    const parts = frame.split("___");
    const start = totalBlanks(gi);
    const yi = Math.min(doc.yi, B.yours.frames.length - 1);
    const [ya, ...yrest] = B.yours.frames[yi].split("___");
    const said = B.yours.frames.map((f, i) => (doc.mine[i] || "").trim() ? f.replace("___", doc.mine[i].trim()).replace(/___/g, "...") : "").filter(Boolean);
    const stamps = (doc.items.lesson || []).filter((x) => x.type === "stamp").length;
    const fillBlank = (w) => patch((d) => {
      const f = [...(d.built[d.qi] || [])];
      const to = start + parts.length - 1;
      for (let i = start; i < to; i++) if (!f[i]) { f[i] = w; break; }
      return { built: { ...d.built, [d.qi]: f } };
    });
    const clearFrame = () => patch((d) => { const f = [...(d.built[d.qi] || [])]; for (let i = start; i < start + parts.length - 1; i++) f[i] = ""; return { built: { ...d.built, [d.qi]: f } }; });
    return (
      <div className="lesson">
        <div className="head"><h1>{L.name}</h1><span className="tag"><Ms n="forum" />{L.n ? `Module ${String(L.modNum).padStart(2, "0")} · Lesson ${L.n}` : "Check-in"}</span></div>

        {has("Words") && (
          <Part n={numOf("Words")} title="Words">
            <div className="words">{B.words.map((w) => (
              <button type="button" key={w.w} className={`word${doc.word === w.w ? " on" : doc.seen.includes(w.w) ? " seen" : ""}`} onClick={() => patch((d) => ({ word: w.w, seen: d.seen.includes(w.w) ? d.seen : [...d.seen, w.w] }))}>{w.w}</button>
            ))}</div>
            {W && (W.pic === false
              ? <div className="nopic" key={W.w}><span className="w">{W.w}</span><span>No picture for this word. Explain it, use it in a sentence or act it out.</span></div>
              : <div className="showcase" key={W.w}><Pic folder={L.folder} label={W.w} size={340} /></div>)}
            <div className="explain">{W ? (
              <>
                <span className="w"><b>{W.w}</b><span className="stress">{W.s.map((x, i) => <span key={i}>{i > 0 && " · "}{x === x.toUpperCase() && /[A-Z]/.test(x) ? <em>{x}</em> : x}</span>)}</span></span>
                <Spk text={W.w} /><Spk text={W.w} slow />
                <span className="eq">=</span><span className="m">{W.m}</span>
                <Tr key={W.w} text={W.w} lang={lang} small />
              </>
            ) : <span className="muted">Click a word to show its picture and explain it.</span>}</div>
          </Part>
        )}

        {has("Question") && (
          <Part n={numOf("Question")} title="Question">
            <div className="feature" key={`q${doc.qi}`}>
              <QCard label={`Question ${doc.qi + 1} of ${B.questions.length}`} text={Q.q} lang={lang} />
              {Q.pics.length > 0 && <div className="pics">{Q.pics.map((p) => <Pic key={p} folder={L.folder} label={p} size={Q.pics.length > 1 ? 210 : 280} />)}</div>}
            </div>
            <StepNav i={doc.qi} n={B.questions.length} onGo={(dd) => patch((d) => { const q = Math.max(0, Math.min(B.questions.length - 1, d.qi + dd)); return q === d.qi ? {} : { qi: q, gi: 0 }; })} />
            {doc.qi === B.questions.length - 1 && <button type="button" className="mini more-link" onClick={() => setPage("more")}><Ms n="quiz" />More questions on the next page</button>}
          </Part>
        )}

        {has("Sentence guide") && (
          <Part n={numOf("Sentence guide")} title="Sentence guide">
            {B.words.length > 0 && <div className="words small">{B.words.map((w) => <button type="button" key={w.w} className="word" onClick={() => fillBlank(w.w)}>{w.w}</button>)}</div>}
            <p className="muted center">Tap a word to fill the next blank. Tap the note to clear it.</p>
            <div className="sticky-wrap feature" key={`g${doc.qi}-${gi}`}>
              <button type="button" className="sticky big" onClick={clearFrame}>
                {parts.map((p, i) => <span key={i}>{p}{i < parts.length - 1 && (fills[start + i] ? <span className="filled">{fills[start + i]}</span> : <span className="blank" />)}</span>)}
              </button>
            </div>
            {Q.guide.length > 1 && <StepNav i={gi} n={Q.guide.length} noun="sentence" onGo={(dd) => patch({ gi: Math.max(0, Math.min(Q.guide.length - 1, gi + dd)) })} />}
          </Part>
        )}

        {has("Activity") && (
          <Part n={numOf("Activity")} title={B.activity.title}>
            <div className="act-box">
              <p className="how">{B.activity.how}</p>
              <Activity a={B.activity} folder={L.folder} act={doc.act || {}} setAct={(p) => patch((d) => ({ act: { ...d.act, ...p } }))} addPage={addPage} />
            </div>
          </Part>
        )}

        {has("Your sentences") && (
          <Part n={numOf("Your sentences")} title="Your sentences">
            <QCard label="Your turn" text={B.yours.ask} lang={lang} />
            <div className="sticky-wrap feature" key={`y${yi}`}>
              <span className="muted">Sentence {yi + 1} of {B.yours.frames.length}</span>
              <div className="sticky big">
                {ya}<span className="fill" contentEditable suppressContentEditableWarning data-ph="type" onBlur={(e) => { const t = e.currentTarget.textContent; patch((d) => { const m = [...d.mine]; m[yi] = t; return { mine: m }; }); }} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); e.currentTarget.blur(); if (yi < B.yours.frames.length - 1) patch({ yi: yi + 1 }); } }}>{doc.mine[yi] || ""}</span>{yrest.join("...")}
              </div>
            </div>
            <StepNav i={yi} n={B.yours.frames.length} noun="sentence" onGo={(dd) => patch({ yi: Math.max(0, Math.min(B.yours.frames.length - 1, yi + dd)) })} />
            <div className="fix">
              <div className="cb-k"><Ms n="edit_note" />Today's fixes</div>
              {fixes.length ? FixList() : legacyFix ? <div className="lc-fix">{doc.fixBad.trim() && <s>{doc.fixBad}</s>}<Ms n="arrow_forward" /><b>{doc.fixGood}</b></div> : <span className="muted">Mistakes you note in Fix it show here.</span>}
              <button type="button" className="mini fx-add" onClick={openFix}><Ms n="add" />Add a fix</button>
            </div>
          </Part>
        )}

        {has("Lesson card") && (
          <Part n={numOf("Lesson card")} title="Lesson card">
            <div className="lcard">
              <div className="lc-top"><div><small>{kicker}</small><h3>{L.name}</h3></div><span className="date">{new Date().toLocaleDateString([], { month: "long", day: "numeric", year: "numeric" })}{stamps > 0 && <span className="stars">★ {stamps} stamp{stamps > 1 ? "s" : ""}</span>}</span></div>
              <div className="lc-body">
                {B.words.length > 0 && <div><div className="cb-k"><Ms n="style" />Today's words</div><div className="lc-words">{(doc.seen.length ? doc.seen : B.words.map((w) => w.w)).map((w) => <span key={w}>{w}</span>)}</div></div>}
                <div><div className="cb-k"><Ms n="record_voice_over" />You said</div><div className="lc-said">{said.length ? said.map((x) => <p key={x}>{x}</p>) : <p className="none">Your sentences show here.</p>}</div></div>
                {fixes.length > 0 && <div><div className="cb-k"><Ms n="edit_note" />Today's fixes</div>{FixList()}</div>}
                {legacyFix && <div><div className="cb-k"><Ms n="auto_fix_high" />Today's fix</div><div className="lc-fix">{doc.fixBad.trim() && <s>{doc.fixBad}</s>}<Ms n="arrow_forward" /><b>{doc.fixGood}</b></div></div>}
                <div className="lc-two">
                  <div className="lc-box"><div className="cb-k"><Ms n="home" />Practice at home</div>{B.home}</div>
                  {L.next && <div className="lc-box next"><div className="cb-k"><Ms n="east" />Next lesson</div><b>{L.next}</b></div>}
                </div>
              </div>
            </div>
            <div className="center"><button type="button" className="big-btn" onClick={() => save(false)}><Ms n="bookmark" />Save the lesson card</button></div>
          </Part>
        )}
      </div>
    );
  }

  function MorePage() {
    const mi = Math.min(doc.mi, B.more.length - 1);
    const m = B.more[mi];
    return (
      <div className="lesson">
        <div className="head"><h1>More questions</h1><span className="tag"><Ms n="forum" />{L.name}</span></div>
        <Part n={mi + 1} title="Question">
          <div className="feature" key={`m${mi}`}>
            <QCard text={m.q} lang={lang} />
            <div className="fu-wrap"><QCard label="Follow-up" text={m.f} lang={lang} fu /></div>
          </div>
          <StepNav i={mi} n={B.more.length} onGo={(dd) => patch({ mi: Math.max(0, Math.min(B.more.length - 1, mi + dd)) })} />
        </Part>
      </div>
    );
  }

  const free = freePages.find((p) => p.id === page);
  return (
    <ZoomContext.Provider value={setZoom}>
      <div className="jtb">
        <style>{CSS + teensGameStyles + zoomStyles}</style>
        <header className="bar">
          <div className="mark-t"><b>Just Talk · {STAGES.find((st) => st.n === L.stage)?.lv || "A1"}</b><span>{kicker}</span></div>
          <div className="right">
            <nav className="pages" aria-label="Pages">
              {[["warm", "Warm-up"], ["lesson", "Lesson"], ["more", "More questions"]].map(([id, label]) => (
                <button type="button" key={id} className={`pg${page === id ? " on" : ""}`} onClick={() => { setPage(id); window.scrollTo(0, 0); }}>{label}</button>
              ))}
              {freePages.map((p, i) => (
                <button type="button" key={p.id} className={`pg${page === p.id ? " on" : ""}`} onClick={() => setPage(p.id)}>{p.title || `Page ${i + 4}`}
                  <span className="ms x" role="button" aria-label="Remove page" onClick={(e) => { e.stopPropagation(); patch((d) => ({ pages: d.pages.filter((x) => x.id !== p.id) })); if (page === p.id) setPage("lesson"); }}>close</span>
                </button>
              ))}
              <button type="button" className="pg add" onClick={() => addPage("")} aria-label="Add a page"><Ms n="add" /></button>
            </nav>
            <label className="pill-sel teal"><Ms n="translate" />
              <select value={lang} onChange={(e) => { setLang(e.target.value); lsSet("jt-lang", e.target.value); }} aria-label="Student's language">{LANGS.map((l) => <option key={l}>{l}</option>)}</select>
            </label>
            <button type="button" className="fixbtn" onClick={openFix}><Ms n="edit_note" />Fix it <span className="badge">{fixes.length}</span></button>
          </div>
        </header>

        <div className="stage">
          <div className="rail" role="toolbar" aria-label="Board tools">
            {[["move", "arrow_selector_tool", "Select"], ["pen", "stylus", "Pen"], ["text", "text_fields", "Text"], ["eraser", "ink_eraser", "Eraser"]].map(([id, ic, label]) => (
              <button type="button" key={id} className={`tl${tool === id ? " on" : ""}`} onClick={() => { setTool(tool === id && id !== "move" ? "move" : id); setStamp(null); if (id !== "spot") clearSpot(); }}><Ms n={ic} />{label}</button>
            ))}
            <div className="inks">{["#1B2A4A", "#FF6B4A", "#E0A21F"].map((c) => <button type="button" key={c} className={`dot${color === c ? " on" : ""}`} style={{ background: c }} aria-label="Ink color" onClick={() => { setColor(c); setTool("pen"); }} />)}</div>
            <hr />
            <button type="button" className={`tl${tool === "spot" ? " on" : ""}`} onClick={() => { if (tool === "spot") { setTool("move"); clearSpot(); } else setTool("spot"); }}><Ms n="highlight" />Spotlight</button>
            <div className="stamps">{STAMPS.map((s) => <button type="button" key={s[0]} className={`stp${stamp?.[0] === s[0] ? " on" : ""}`} style={{ background: s[1] }} onClick={() => { setStamp(s); setTool("stamp"); }}>{s[0].replace(" sentence!", "!").replace(" ★", "")}</button>)}</div>
            <hr />
            <label className="tl"><Ms n="add_photo_alternate" />Picture<input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) addPicture(f); }} /></label>
            <button type="button" className="tl" onClick={() => patch((d) => ({ strokes: { ...d.strokes, [page]: [] } }))}><Ms n="mop" />Clear</button>
          </div>

          <div className="sheet-wrap">
            <section ref={sheetRef} className={`sheet${free ? " free" : ""}`} onClick={onSheetClick} style={{ cursor: tool === "text" ? "text" : tool === "stamp" ? "copy" : tool === "spot" ? "zoom-in" : undefined }}>
              {page === "warm" && WarmPage()}
              {page === "lesson" && LessonPage()}
              {page === "more" && MorePage()}
              {free && <div className="free-hint"><b>{free.title || "A fresh page"}</b><span>Write, draw or add pictures here.</span></div>}
              <Ink strokes={pageStrokes} tool={tool} color={color} height={height} onStroke={(s) => patch((d) => ({ strokes: { ...d.strokes, [page]: [...(d.strokes[page] || []), s] } }))} />
              <Items items={pageItems} tool={tool} onChange={setItems} />
            </section>
          </div>
        </div>
        <p className="foot">{saveMsg || "Changes save automatically."}{!online && " Saving in this browser only until sql/just_talk_boards.sql is run."} Pictures show a label until they're added.</p>

        {page === "lesson" && (
          <div className="present">
            <button type="button" onClick={() => go(-1)} disabled={step === 0}><Ms n="chevron_left" />Back</button>
            <span className="steps">{steps.map((s, i) => <i key={s} className={i === step ? "cur" : i < step ? "on" : ""} />)}</span>
            <button type="button" className="next" onClick={() => go(1)} disabled={step >= steps.length - 1}>{step >= steps.length - 1 ? "Lesson done" : <>Next: {steps[step + 1]}<Ms n="chevron_right" /></>}</button>
          </div>
        )}

        {fixOpen && <div className="scrim" onClick={() => setFixOpen(false)} />}
        <aside className={`fixd ${fixOpen ? "open" : ""}`} aria-label="Fix it" aria-hidden={!fixOpen}>
          <div className="fixd-h"><h2>Fix it</h2><button type="button" onClick={() => setFixOpen(false)} aria-label="Close"><Ms n="close" /></button></div>
          <div className="fform">
            <label htmlFor="jt-said">What they said</label>
            <textarea id="jt-said" ref={saidRef} rows={2} value={fSaid} onChange={(e) => setFSaid(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("jt-better")?.focus(); } }} placeholder="I am go to work." />
            <label htmlFor="jt-better">The right way (you can add it later)</label>
            <input id="jt-better" value={fBetter} onChange={(e) => setFBetter(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addFix()} placeholder="I go to work." />
            <div className="fadd">
              <div className="fseg"><button type="button" className={fKind === "fix" ? "on" : ""} onClick={() => setFKind("fix")}>Fix</button><button type="button" className={`up ${fKind === "up" ? "on" : ""}`} onClick={() => setFKind("up")}>Upgrade</button></div>
              <button type="button" className="add" onClick={addFix}><Ms n="add" />Add</button>
            </div>
          </div>
          <div className="flist">
            {fixes.length === 0 && <p className="flist-empty">Notes you add here show up in Your sentences and on the lesson card.</p>}
            {[...fixes].reverse().map((f) => (
              <div key={f.id} className={`fl ${f.kind === "up" ? "up" : "fx0"}`}>
                <b>{f.said}</b>
                <Editable className="fl-better" ph="add the right way" value={f.better || ""} onChange={(v) => patch((d) => ({ fixes: (d.fixes || []).map((x) => (x.id === f.id ? { ...x, better: v } : x)) }))} />
                <button type="button" onClick={() => patch((d) => ({ fixes: (d.fixes || []).filter((x) => x.id !== f.id) }))} aria-label="Delete"><Ms n="delete" /></button>
              </div>
            ))}
          </div>
        </aside>
        <ZoomOverlay zoom={zoom} onClose={() => setZoom(null)} />
      </div>
    </ZoomContext.Provider>
  );
}

/* ---------- styles: Flashcards look ---------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Outfit:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,500,0,0&display=block');
/* Colors come from the A1-A2 banner: coral (--red), navy (--green is the dark main color), peach stage, sparkle yellow (--gold). */
.jtb { --desk: #FFF4EE; --desk-2: rgba(255,255,255,.6); --green: #1B2A4A; --green-2: #2A3B5E; --green-wash: #E7EAF3; --red: #FF6B4A; --red-wash: #FFE6DD; --rule: #F6E6DD; --ink: #1B2A4A; --muted: #7B6E78; --note: #FFFFFF; --note-edge: #F0DDD3; --card: #FFFFFF; --gold: #F5C04A; --gold-wash: #FFF4D6; --line: #F0DDD3; --soft: #FFF6F1; --stage: #FFEFE6; --disp: 'Bricolage Grotesque', system-ui, sans-serif; --body: 'Outfit', system-ui, sans-serif;
  min-height: 100vh; background: var(--desk); color: var(--ink); font-family: var(--body); font-size: 15px; padding: 14px max(14px, env(safe-area-inset-right, 0px)) 110px max(14px, env(safe-area-inset-left, 0px)); box-sizing: border-box; }
.jtb *, .jtb *::before, .jtb *::after { box-sizing: border-box; }
.jtb button, .jtb select, .jtb input { font: inherit; color: inherit; }
.jtb button { cursor: pointer; border: 0; background: none; }
.jtb .ms { font-family: 'Material Symbols Rounded'; font-weight: normal; font-style: normal; font-size: 20px; line-height: 1; white-space: nowrap; direction: ltr; display: inline-block; vertical-align: middle; -webkit-font-smoothing: antialiased; }
.jtb .denied { padding: 40px; text-align: center; color: var(--muted); }
.jtb .muted { color: var(--muted); font-size: 13.5px; font-weight: 500; }
.jtb .center { text-align: center; display: flex; justify-content: center; }
.jtb .row { display: flex; gap: 10px; align-items: center; justify-content: center; flex-wrap: wrap; }
.jtb .bar { max-width: 900px; margin: 0 auto 12px; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 10px 14px; align-items: center; }
.jtb .mark { display: flex; align-items: center; gap: 10px; min-width: 0; }
.jtb .logo { width: 38px; height: 38px; border-radius: 10px; background: var(--green); color: #fff; display: grid; place-items: center; transform: rotate(-4deg); }
.jtb .mark-t { display: grid; min-width: 0; line-height: 1.2; }
.jtb .mark-t b { font-size: 16px; color: var(--green); }
.jtb .mark-t span { font-size: 12.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jtb .right { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
.jtb .pill-sel { display: inline-flex; align-items: center; gap: 4px; background: #fff; border-radius: 10px; padding: 4px 6px 4px 9px; font-size: 13px; font-weight: 700; color: var(--green); box-shadow: 0 1px 3px rgba(120,60,40,.10); }
.jtb .pill-sel select, .jtb .pill-sel input { border: 0; background: none; font-weight: 700; color: var(--ink); padding: 3px 2px; max-width: 150px; outline: none; }
.jtb .pill-sel.add input { width: 110px; }
.jtb .pill-sel.teal { color: #2C7A6E; }
.jtb .save { display: inline-flex; align-items: center; gap: 6px; background: var(--green); color: #fff; border-radius: 10px; padding: 8px 14px 8px 11px; font-weight: 700; font-size: 13.5px; }
.jtb .pages { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; background: #fff; border-radius: 12px; padding: 4px; justify-self: center; box-shadow: 0 1px 3px rgba(120,60,40,.10); }
.jtb .pg { display: inline-flex; align-items: center; gap: 4px; padding: 6px 12px; border-radius: 9px; font-weight: 700; font-size: 13px; color: var(--muted); }
.jtb .pg.on { background: var(--green); color: #fff; }
.jtb .pg .ms { font-size: 17px; }
.jtb .pg.add { color: var(--red); }
.jtb .pg .x { opacity: .7; margin-right: -4px; }

.jtb .stage { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: 66px minmax(0, 1fr); gap: 14px; align-items: start; }
.jtb .rail { position: sticky; top: 14px; display: grid; gap: 2px; background: var(--green); border-radius: 16px; padding: 6px; }
.jtb .tl { display: grid; justify-items: center; gap: 3px; padding: 9px 2px 7px; border-radius: 11px; color: #7B6E78; font-size: 10.5px; font-weight: 700; cursor: pointer; }
.jtb .tl:hover { background: var(--green-2); color: #fff; }
.jtb .tl.on { background: #fff; color: var(--green); }
.jtb .tl.on .ms { color: var(--red); }
.jtb .rail hr { border: 0; height: 1px; background: var(--line); margin: 5px 8px; }
.jtb .inks { display: grid; justify-items: center; gap: 8px; padding: 6px 0; }
.jtb .dot { width: 18px; height: 18px; border-radius: 50%; box-shadow: 0 0 0 2px var(--green), 0 0 0 3px var(--line); }
.jtb .dot.on { box-shadow: 0 0 0 2px var(--green), 0 0 0 4px #fff; }
.jtb .stamps { display: grid; gap: 4px; padding: 2px 0 4px; }
.jtb .stp { border-radius: 8px; padding: 5px 0; font-size: 10.5px; font-weight: 700; color: #fff; }
.jtb .stp.on { box-shadow: 0 0 0 2px #fff; }

.jtb .sheet-wrap { width: 100%; max-width: 780px; justify-self: center; container-type: inline-size; }
.jtb .sheet { position: relative; background: var(--desk-2); border-radius: 22px; min-height: 133.4cqw; overflow: hidden; box-shadow: inset 0 0 0 1px rgba(120,60,40,.08); }
.jtb .sheet.free { background: #fff; background-image: linear-gradient(var(--rule) 1px, transparent 1px); background-size: 100% 30px; }
.jtb .ink { position: absolute; left: 0; top: 0; width: 100%; z-index: 5; touch-action: none; }
.jtb .items { position: absolute; inset: 0; z-index: 6; pointer-events: none; }
.jtb .item { position: absolute; }
.jtb .item.txt { min-width: 60px; padding: 4px 8px; border: 1.5px dashed transparent; border-radius: 6px; font-family: var(--disp); font-size: 26px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.jtb .item.txt:hover, .jtb .item.txt:focus-within { border-color: var(--line); }
.jtb .txt-ed { outline: none; display: inline-block; min-width: 40px; }
.jtb .item.img { background: #fff; padding: 8px 8px 22px; box-shadow: 0 6px 16px rgba(120,60,40,.18); transform: rotate(-1deg); }
.jtb .item.img img { display: block; width: 100%; height: auto; pointer-events: none; }
.jtb .item.stamp { font-family: var(--disp); font-weight: 700; font-size: 19px; color: #fff; padding: 8px 16px; border-radius: 999px; transform: rotate(-7deg); box-shadow: 0 8px 18px rgba(120,60,40,.25); white-space: nowrap; animation: jtbStamp .35s cubic-bezier(.2,1.6,.4,1) both; }
@keyframes jtbStamp { from { transform: rotate(-7deg) scale(.5); opacity: 0; } }
.jtb .item .del, .jtb .item .grip { position: absolute; width: 24px; height: 24px; border-radius: 50%; background: var(--ink); color: #fff; display: grid; place-items: center; opacity: 0; transition: opacity .15s; }
.jtb .item .del { top: -10px; right: -10px; }
.jtb .item .grip { bottom: -10px; right: -10px; cursor: nwse-resize; }
.jtb .item .ms { font-size: 15px; }
.jtb .item:hover .del, .jtb .item:hover .grip { opacity: 1; }
.jtb .free-hint { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; gap: 4px; color: #9FB09B; pointer-events: none; }
.jtb .free-hint b { font-family: var(--disp); font-size: 28px; color: var(--green); }

.jtb .spot .lesson > *:not(.lit):not(:has(.lit)), .jtb .spot .part > *:not(.lit):not(:has(.lit)):not(.lit *), .jtb .spot .feature > *:not(.lit):not(:has(.lit)):not(.lit *) { opacity: .12; filter: blur(1.5px); transition: opacity .25s, filter .25s; }
.jtb .spot .lit { position: relative; z-index: 2; transform: scale(1.03); transition: transform .25s; }

.jtb .lesson { position: relative; z-index: 1; padding: 34px clamp(16px, 4vw, 44px) 60px; display: grid; gap: 38px; }
.jtb .head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding-bottom: 14px; border-bottom: 2px dashed var(--line); }
.jtb .head h1 { font-family: var(--disp); font-weight: 700; font-size: 32px; margin: 0; color: var(--green); line-height: 1.1; }
.jtb .tag { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: var(--green); background: var(--green-wash); border-radius: 8px; padding: 5px 10px; }
.jtb .tag .ms { font-size: 17px; }
.jtb .part { display: grid; gap: 16px; animation: jtbRise .4s cubic-bezier(.2,.7,.2,1) both; }
@keyframes jtbRise { from { opacity: 0; transform: translateY(10px); } }
.jtb .ph { display: flex; align-items: baseline; gap: 10px; }
.jtb .ph .n { font-family: var(--disp); font-weight: 700; font-size: 22px; color: var(--red); }
.jtb .ph h2 { margin: 0; font-size: 18px; font-weight: 700; color: var(--green); letter-spacing: .02em; }
.jtb .ph::after { content: ""; flex: 1; height: 2px; background: repeating-linear-gradient(90deg, var(--line) 0 8px, transparent 8px 14px); align-self: center; }
.jtb .feature { display: grid; gap: 16px; animation: jtbPop .3s cubic-bezier(.2,.7,.2,1) both; }
@keyframes jtbPop { from { opacity: 0; transform: scale(.98); } }
@media (prefers-reduced-motion: reduce) { .jtb .part, .jtb .feature, .jtb .item.stamp, .jtb .showcase, .jtb .pop { animation: none; } }

/* index cards */
.jtb .stack { position: relative; width: min(100%, 620px); justify-self: center; }
.jtb .stack::before, .jtb .stack::after { content: ""; position: absolute; inset: 0; background: #fff; border-radius: 12px; box-shadow: 0 2px 6px rgba(120,60,40,.10); }
.jtb .stack::before { transform: rotate(-2.6deg) translate(-5px, 7px); }
.jtb .stack::after { transform: rotate(1.8deg) translate(5px, 4px); }
.jtb .stack.fu { width: min(100%, 520px); }
.jtb .stack.fu::before, .jtb .stack.fu::after { display: none; }
.jtb .icard { position: relative; z-index: 1; background: var(--card); border-radius: 12px; padding: 16px 20px 18px; display: grid; gap: 10px; box-shadow: 0 8px 20px rgba(120,60,40,.14); background-image: linear-gradient(var(--red) 0 0), linear-gradient(var(--rule) 1px, transparent 1px); background-size: 100% 2px, 100% 30px; background-repeat: no-repeat, repeat; background-position: 0 38px, 0 40px; }
.jtb .icard small { font-size: 11.5px; font-weight: 700; color: var(--red); letter-spacing: .12em; text-transform: uppercase; height: 22px; }
.jtb .icard .q { font-family: var(--disp); font-weight: 700; font-size: clamp(26px, 3.6vw, 36px); line-height: 1.12; margin: 0; color: var(--ink); flex: 1; min-width: 0; text-wrap: balance; }
.jtb .stack.fu .icard .q { font-size: clamp(22px, 2.8vw, 28px); }
.jtb .q-row { display: flex; align-items: flex-start; gap: 10px; }
.jtb .q-tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.jtb .fu-wrap { padding-left: clamp(16px, 6vw, 70px); }
.jtb .cover { min-height: calc(133.4cqw - 120px); display: grid; place-content: center; justify-items: center; gap: 18px; }
.jtb .cover .stack { width: min(100%, 560px); }
.jtb .cover-card { padding: 22px 26px 30px; text-align: center; justify-items: center; }
.jtb .cover-card h1 { font-family: var(--disp); font-weight: 700; font-size: clamp(40px, 6.4vw, 64px); line-height: 1.02; margin: 6px 0 0; color: var(--ink); text-wrap: balance; }
.jtb .cover-card .q { font-size: 26px; color: var(--red); font-weight: 400; }

/* sticky notes */
.jtb .sticky-wrap { display: grid; justify-items: end; gap: 6px; }
.jtb .sticky { display: inline-block; background: var(--note); color: #3A3320; padding: 12px 18px; font-family: var(--disp); font-weight: 700; font-size: 22px; line-height: 1.25; box-shadow: 0 6px 14px rgba(120,60,40,.16), inset 0 -1px 0 var(--note-edge); transform: rotate(-1.2deg); max-width: 100%; text-align: left; }
.jtb .sticky.big { font-size: 28px; padding: 16px 24px; }
.jtb .pop { animation: jtbPop .3s cubic-bezier(.2,.7,.2,1) both; }
.jtb .blank { display: inline-block; min-width: 96px; border-bottom: 2.5px solid rgba(58,51,32,.55); margin: 0 4px; transform: translateY(-4px); }
.jtb .filled { display: inline-block; padding: 0 4px; margin: 0 2px; border-bottom: 2.5px solid var(--red); color: var(--red); }
.jtb .fill { display: inline-block; min-width: 100px; padding: 0 6px; margin: 0 2px; border-bottom: 2.5px dashed rgba(58,51,32,.5); color: var(--red); outline: none; }
.jtb .fill:empty::before, .jtb [data-ph]:empty::before { content: attr(data-ph); color: #B5AE95; font-weight: 400; }
.jtb .ans-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px 10px 12px; font-weight: 700; font-size: 14px; color: #3A3320; background: var(--note); box-shadow: 0 3px 8px rgba(120,60,40,.12); transform: rotate(-1deg); }

/* words */
.jtb .words { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.jtb .word { background: #fff; border-radius: 8px; padding: 10px 16px; font-family: var(--disp); font-weight: 700; font-size: 22px; color: var(--ink); box-shadow: 0 3px 8px rgba(120,60,40,.12); border-top: 3px solid var(--red); transition: transform .15s; }
.jtb .word:nth-child(even) { transform: rotate(1deg); }
.jtb .word:nth-child(odd) { transform: rotate(-1deg); }
.jtb .word:hover { transform: translateY(-2px); }
.jtb .word.seen { border-top-color: #F2A48F; }
.jtb .word.on { background: var(--green); color: #fff; border-top-color: var(--green); }
.jtb .words.small .word { font-size: 17px; padding: 6px 12px; }
.jtb .showcase { display: flex; justify-content: center; animation: jtbPop .35s cubic-bezier(.2,.7,.2,1) both; }
.jtb .nopic { justify-self: center; display: grid; justify-items: center; gap: 6px; padding: 22px 30px; background: #fff; border-radius: 12px; color: var(--muted); font-size: 14px; text-align: center; max-width: 480px; box-shadow: 0 6px 14px rgba(120,60,40,.12); }
.jtb .nopic .w { font-family: var(--disp); font-size: 44px; font-weight: 700; color: var(--ink); }
.jtb .explain { justify-self: center; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px 12px; padding: 10px 16px; border-radius: 12px; background: #fff; box-shadow: 0 3px 8px rgba(120,60,40,.10); max-width: 100%; }
.jtb .explain .w { display: grid; line-height: 1.05; }
.jtb .explain .w b { font-family: var(--disp); font-weight: 700; font-size: 28px; color: var(--ink); }
.jtb .stress { font-size: 13px; font-weight: 700; color: var(--muted); letter-spacing: .04em; }
.jtb .stress em { font-style: normal; color: var(--red); }
.jtb .explain .eq { color: var(--muted); }
.jtb .explain .m { font-size: 17px; font-weight: 500; }

/* pictures */
.jtb .pics { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px; }
.jtb .pic { display: grid; justify-items: center; gap: 4px; }
.jtb .photo { background: #fff; padding: 8px 8px 10px; box-shadow: 0 6px 16px rgba(120,60,40,.16); transform: rotate(-1.5deg); }
.jtb .pic:nth-child(even) .photo { transform: rotate(1.8deg); }
.jtb .cap { font-family: var(--disp); font-weight: 700; font-size: 19px; color: var(--ink); }

/* picture tiles (SoarPic) */
.jtb .sp-tile { position: relative; background: #fff; overflow: hidden; display: flex; align-items: center; justify-content: center; max-width: 100%; }
.jtb .sp-tile img { width: 100%; height: 100%; object-fit: cover; display: block; }
.jtb .sp-missing { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; padding: 10px; background: repeating-linear-gradient(-45deg, #FFF8F4 0 12px, #FDEDE6 12px 24px); border: 2px dashed var(--line); }
.jtb .sp-missing span { font-family: var(--disp); font-weight: 700; font-size: 18px; color: #C79A8C; line-height: 1.2; }

/* buttons */
.jtb .spk { width: 38px; height: 38px; border-radius: 50%; background: var(--green); color: #fff; display: inline-grid; place-items: center; flex: 0 0 auto; }
.jtb .spk.slow { background: #fff; color: var(--green); box-shadow: inset 0 0 0 1.5px var(--line); }
.jtb .spk.sm { width: 30px; height: 30px; }
.jtb .spk.sm .ms { font-size: 17px; }
.jtb .spk.playing { box-shadow: 0 0 0 6px rgba(120,60,40,.2); }
.jtb a.tr-btn { text-decoration: none; }
.jtb .tr-btn { display: inline-flex; align-items: center; gap: 5px; color: #2C7A6E; background: #E2F2EE; border-radius: 8px; padding: 6px 12px 6px 9px; font-weight: 700; font-size: 13px; }
.jtb .tr-btn.err { color: var(--red); background: #FDE7E7; }
.jtb .tr-btn.sm { padding: 4px 10px 4px 7px; font-size: 12px; }
.jtb .tr-btn .ms, .jtb .tr-out .ms { font-size: 17px; }
.jtb .tr-out { display: inline-flex; align-items: center; gap: 6px; background: #E2F2EE; color: #1F6157; border-radius: 8px; padding: 6px 12px 6px 9px; font-weight: 700; font-size: 17px; }
.jtb .tr-out.sm { font-size: 14px; }
.jtb .mini { font-size: 12.5px; font-weight: 700; color: var(--muted); border-radius: 8px; padding: 5px 10px; justify-self: center; }
.jtb .mini:hover { background: #fff; color: var(--green); }
.jtb .more-link { color: var(--red); display: inline-flex; align-items: center; gap: 4px; }
.jtb .big-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--green); color: #fff; border-radius: 12px; padding: 12px 20px; font-weight: 700; font-size: 15px; box-shadow: 0 6px 14px rgba(120,60,40,.2); }
.jtb .big-btn:hover { background: var(--green-2); }
.jtb .go { justify-self: center; display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; border-radius: 12px; padding: 14px 24px; font-weight: 700; font-size: 16px; box-shadow: 0 8px 18px rgba(240,93,94,.3); }
.jtb .stepnav { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: #fff; border-radius: 12px; padding: 6px; box-shadow: 0 2px 6px rgba(120,60,40,.08); }
.jtb .stepnav button { display: inline-flex; align-items: center; gap: 2px; border-radius: 9px; padding: 9px 13px; font-weight: 700; font-size: 14px; color: var(--green); }
.jtb .stepnav .nx { background: var(--green); color: #fff; padding-right: 10px; }
.jtb .stepnav button:disabled { opacity: .35; cursor: default; background: none; color: var(--green); }
.jtb .sn-dots { display: flex; gap: 6px; }
.jtb .sn-dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--line); }
.jtb .sn-dots i.on { background: #F2A48F; }
.jtb .sn-dots i.cur { background: var(--red); width: 20px; border-radius: 4px; }

/* warm-up */
.jtb .mode { justify-self: center; display: inline-flex; background: #fff; border-radius: 12px; padding: 4px; gap: 4px; box-shadow: 0 2px 6px rgba(120,60,40,.08); }
.jtb .mode button { display: inline-flex; align-items: center; gap: 6px; border-radius: 9px; padding: 9px 16px; font-weight: 700; font-size: 14px; color: var(--muted); }
.jtb .mode button.on { background: var(--green); color: #fff; }
.jtb .meet { justify-self: center; width: min(100%, 600px); display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 16px 20px; align-items: center; background: #fff; border-radius: 12px; padding: 22px 24px; box-shadow: 0 8px 20px rgba(120,60,40,.14); border-top: 3px solid var(--red); }
.jtb .avatar { width: 96px; height: 96px; border-radius: 50%; background: var(--green); color: #fff; display: grid; place-items: center; font-family: var(--disp); font-weight: 700; font-size: 46px; }
.jtb .meet-t small { font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--red); }
.jtb .meet-t h3 { margin: 2px 0 0; font-family: var(--disp); font-weight: 700; font-size: clamp(28px, 4vw, 38px); color: var(--ink); line-height: 1.1; }
.jtb .ed { outline: none; border-bottom: 1.5px dashed transparent; }
.jtb .ed:focus { border-color: var(--line); }
.jtb .facts { grid-column: 1 / -1; display: grid; gap: 8px; }
.jtb .fact { display: flex; align-items: center; gap: 10px; background: var(--desk); border-radius: 10px; padding: 9px 12px; font-size: 18px; font-weight: 700; }
.jtb .fact .ms { color: var(--red); }
.jtb .fact .ed { flex: 1; min-width: 0; }
.jtb .phrases { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.jtb .phrase { display: grid; gap: 8px; justify-items: start; background: var(--note); padding: 12px 14px; box-shadow: 0 4px 10px rgba(120,60,40,.12); }
.jtb .phrase:nth-child(odd) { transform: rotate(-.8deg); }
.jtb .phrase:nth-child(even) { transform: rotate(.8deg); }
.jtb .phrase .p { display: flex; align-items: center; gap: 8px; font-family: var(--disp); font-weight: 700; font-size: 20px; color: #3A3320; }

/* activity */
.jtb .act-box { display: grid; gap: 14px; justify-items: center; background: #fff; border-radius: 14px; padding: 18px; box-shadow: 0 6px 16px rgba(120,60,40,.12); }
.jtb .how { margin: 0; text-align: center; font-size: 15px; font-weight: 500; color: var(--muted); max-width: 52ch; }
.jtb .act-game { width: 100%; display: grid; justify-items: center; }
.jtb .act-game .slide-h:empty { display: none; }
.jtb .act-game .stage-col { display: grid; justify-items: center; gap: 10px; width: 100%; }
.jtb .act-center { display: flex; justify-content: center; }
.jtb .chip { background: #fff; border-radius: 8px; padding: 7px 13px; font-family: var(--disp); font-weight: 700; font-size: 19px; color: var(--ink); box-shadow: 0 2px 6px rgba(120,60,40,.12); border-top: 3px solid var(--red); }
.jtb .chip.on { border-top-color: var(--green); background: var(--green-wash); }
.jtb .chips-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.jtb .sort { width: 100%; display: grid; gap: 14px; }
.jtb .sort-pool { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; min-height: 44px; align-items: center; }
.jtb .sort-cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.jtb .sort-col { background: var(--desk); border-radius: 12px; padding: 12px; min-height: 140px; display: flex; flex-wrap: wrap; gap: 8px; align-content: flex-start; }
.jtb .sort-col b { width: 100%; font-family: var(--disp); font-size: 24px; color: var(--green); }
.jtb .showtell, .jtb .spotdiff, .jtb .timer-act, .jtb .cards-act, .jtb .flipgrid { width: 100%; display: grid; gap: 14px; justify-items: center; }
.jtb .st-slots { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
.jtb .st-slot { width: 220px; aspect-ratio: 4 / 3; max-width: 100%; display: grid; place-items: center; background: var(--desk); border: 2px dashed var(--line); border-radius: 10px; cursor: pointer; color: var(--green); font-weight: 700; font-size: 14px; overflow: hidden; }
.jtb .st-slot span { display: grid; justify-items: center; gap: 4px; }
.jtb .st-slot img { width: 100%; height: 100%; object-fit: cover; }
.jtb .replies { display: grid; gap: 10px; justify-items: end; width: 100%; }
.jtb .truthlie { width: 100%; display: grid; gap: 10px; }
.jtb .tl-card { display: flex; align-items: center; gap: 12px; background: #fff; border-radius: 10px; padding: 12px 14px; box-shadow: 0 3px 8px rgba(120,60,40,.12); border-left: 4px solid var(--line); }
.jtb .tl-card.lie { border-left-color: var(--red); background: #FFF1F1; }
.jtb .tl-n { font-family: var(--disp); font-weight: 700; font-size: 24px; color: var(--red); }
.jtb .tl-ed { flex: 1; min-width: 0; font-family: var(--disp); font-weight: 700; font-size: 21px; outline: none; }
.jtb .tl-btn { font-size: 12.5px; font-weight: 700; color: var(--muted); background: var(--desk); border-radius: 8px; padding: 6px 10px; white-space: nowrap; }
.jtb .tl-card.lie .tl-btn { background: var(--red); color: #fff; }
.jtb .fg-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; width: 100%; }
.jtb .fg-card { display: grid; justify-items: center; gap: 4px; background: #fff; border-radius: 10px; padding: 8px 6px; box-shadow: 0 3px 8px rgba(120,60,40,.12); transition: transform .25s, opacity .25s, filter .25s; }
.jtb .fg-card b { font-family: var(--disp); font-size: 18px; }
.jtb .fg-card.down { opacity: .3; filter: grayscale(1); transform: scale(.94) rotateX(30deg); }
.jtb .sd-count { display: inline-flex; align-items: center; gap: 10px; background: var(--desk); border-radius: 12px; padding: 6px 10px; }
.jtb .sd-count b { font-family: var(--disp); font-size: 28px; color: var(--green); min-width: 70px; text-align: center; }
.jtb .sd-count button { width: 34px; height: 34px; border-radius: 50%; background: #fff; font-size: 20px; font-weight: 700; color: var(--green); box-shadow: 0 2px 4px rgba(120,60,40,.12); }
.jtb .clock { font-family: var(--disp); font-weight: 700; font-size: 72px; color: var(--ink); line-height: 1; font-variant-numeric: tabular-nums; }
.jtb .clock.done { color: var(--red); }
.jtb .cards-act .stack { width: min(100%, 460px); }
.jtb .cards-act .icard { min-height: 150px; align-content: center; text-align: center; }
.jtb .cards-act .icard.shown { animation: jtbPop .3s cubic-bezier(.2,.7,.2,1) both; }
.jtb .cards-act .icard .q.muted { color: #B5AE95; font-size: 24px; }

.jtb .order-act, .jtb .clues { width: 100%; display: grid; gap: 14px; justify-items: center; }
.jtb .order-list { display: grid; gap: 8px; width: min(100%, 480px); }
.jtb .ord { display: flex; align-items: center; gap: 12px; background: #fff; border-radius: 10px; padding: 10px 14px; font-family: var(--disp); font-weight: 700; font-size: 20px; text-align: left; box-shadow: 0 2px 6px rgba(120,60,40,.12); }
.jtb .ord-n { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--desk); color: var(--green); font-family: var(--body); font-size: 15px; flex: 0 0 auto; }
.jtb .ord.on .ord-n { background: var(--red); color: #fff; }
.jtb .survey, .jtb .plan { width: 100%; display: grid; gap: 8px; }
.jtb .sv-row, .jtb .plan-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; background: var(--desk); border-radius: 10px; padding: 8px 12px; flex-wrap: wrap; }
.jtb .sv-q { font-family: var(--disp); font-weight: 700; font-size: 19px; }
.jtb .sv-btns { display: inline-flex; gap: 6px; }
.jtb .sv-btns button { background: #fff; border-radius: 8px; padding: 6px 12px; font-weight: 700; font-size: 13px; color: var(--green); }
.jtb .sv-btns button.on { background: var(--green); color: #fff; }
.jtb .stars-row button { font-size: 24px; color: #CFD8CC; padding: 0 2px; }
.jtb .stars-row button.on { color: #E39B00; }
.jtb .plan-row b { font-size: 13px; color: var(--green); min-width: 150px; }
.jtb .plan-ed { flex: 1; min-width: 160px; font-family: var(--disp); font-weight: 700; font-size: 19px; outline: none; border-bottom: 1.5px dashed var(--line); padding: 2px 0; }
.jtb .clue-list { display: grid; gap: 8px; width: min(100%, 520px); }
.jtb .clue { display: flex; align-items: center; gap: 10px; background: var(--note); padding: 10px 14px; font-family: var(--disp); font-weight: 700; font-size: 21px; box-shadow: 0 3px 8px rgba(120,60,40,.12); animation: jtbPop .3s both; }
.jtb .clue span { font-family: var(--body); font-size: 13px; color: var(--red); }
.jtb .clue-answer { font-family: var(--disp); font-weight: 700; font-size: 40px; color: var(--green); animation: jtbPop .3s both; }
.jtb .big-btn:disabled { opacity: .45; cursor: default; }

/* fix + lesson card */
.jtb .cb-k { font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.jtb .cb-k .ms { font-size: 17px; color: var(--red); }
.jtb .fix { justify-self: center; width: min(100%, 600px); display: grid; gap: 8px; background: #fff; border-radius: 12px; padding: 14px 18px; box-shadow: 0 4px 10px rgba(120,60,40,.10); }
.jtb .fix-row { display: flex; align-items: center; gap: 12px; font-family: var(--disp); font-size: 21px; font-weight: 700; }
.jtb .fix-row .ic { width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; flex: 0 0 auto; }
.jtb .fix-row.bad .ic { background: #FDE7E7; color: var(--red); }
.jtb .fix-row.good .ic { background: var(--green-wash); color: var(--green); }
.jtb .fix-row .ed { flex: 1; min-width: 0; }
.jtb .fix-row.bad .ed { color: var(--red); text-decoration: line-through; }
.jtb .fix-row.bad .ed:empty { text-decoration: none; }
.jtb .fix-row.good .ed { color: var(--green); }
.jtb .lcard { justify-self: center; width: min(100%, 640px); background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 16px 34px rgba(120,60,40,.18); }
.jtb .lc-top { background: var(--green); color: #fff; padding: 18px 22px; display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; flex-wrap: wrap; }
.jtb .lc-top small { display: block; font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #C9D0E4; margin-bottom: 4px; }
.jtb .lc-top h3 { margin: 0; font-family: var(--disp); font-size: 30px; line-height: 1.05; }
.jtb .lc-top .date { font-size: 13px; color: #C9D0E4; font-weight: 700; display: grid; justify-items: end; gap: 6px; }
.jtb .stars { background: rgba(255,255,255,.14); color: #FFE07A; border-radius: 8px; padding: 3px 10px; }
.jtb .lc-body { padding: 18px 22px 22px; display: grid; gap: 16px; background-image: linear-gradient(var(--rule) 1px, transparent 1px); background-size: 100% 30px; }
.jtb .lc-words { display: flex; flex-wrap: wrap; gap: 6px; }
.jtb .lc-words span { background: var(--green-wash); border-radius: 6px; padding: 3px 10px; font-family: var(--disp); font-weight: 700; font-size: 17px; }
.jtb .lc-said { display: grid; gap: 6px; justify-items: start; }
.jtb .lc-said p { margin: 0; background: var(--note); padding: 6px 12px; font-family: var(--disp); font-weight: 700; font-size: 19px; box-shadow: 0 2px 5px rgba(120,60,40,.12); }
.jtb .lc-said .none { background: none; box-shadow: none; padding: 0; color: var(--muted); font-family: var(--body); font-size: 14px; font-weight: 500; }
.jtb .fixbtn { display: inline-flex; align-items: center; gap: 6px; background: var(--red); color: #fff; border-radius: 10px; padding: 8px 12px 8px 10px; font-weight: 700; font-size: 13.5px; }
.jtb .fixbtn .badge { background: #fff; color: var(--red); border-radius: 999px; min-width: 20px; height: 20px; display: inline-grid; place-items: center; font-size: 12px; padding: 0 6px; }
.jtb .fx-list { display: grid; gap: 6px; }
.jtb .lc-fix.up s { text-decoration-color: #E39B00; color: #8A6A1F; }
.jtb .fix .fx-add { justify-self: start; display: inline-flex; align-items: center; gap: 4px; background: var(--desk); color: var(--green); border-radius: 9px; padding: 6px 11px; font-weight: 700; font-size: 13px; }
.jtb .scrim { position: fixed; inset: 0; background: rgba(35,48,90,.18); z-index: 49; }
.jtb .fixd { position: fixed; top: 0; right: 0; bottom: 0; width: min(380px, 100vw); background: #fff; box-shadow: -10px 0 30px rgba(120,60,40,.18); transform: translateX(105%); transition: transform .25s; z-index: 50; display: grid; grid-template-rows: auto auto minmax(0, 1fr); gap: 14px; padding: calc(16px + env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) calc(16px + env(safe-area-inset-bottom, 0px)) 16px; visibility: hidden; box-sizing: border-box; }
.jtb .fixd.open { transform: none; visibility: visible; }
.jtb .fixd-h { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.jtb .fixd-h h2 { margin: 0; font-family: var(--disp); font-weight: 700; font-size: 28px; color: var(--red); }
.jtb .fixd-h button { width: 34px; height: 34px; border-radius: 50%; background: var(--desk); display: grid; place-items: center; color: var(--green); }
.jtb .fform { display: grid; gap: 8px; background: var(--desk); border-radius: 12px; padding: 12px; }
.jtb .fform label { font-size: 12px; font-weight: 700; color: var(--green); letter-spacing: .04em; }
.jtb .fform textarea, .jtb .fform input { width: 100%; box-sizing: border-box; border: 0; border-radius: 8px; padding: 9px 11px; background: #fff; font-family: var(--disp); font-weight: 700; font-size: 19px; color: var(--ink); outline: none; resize: none; }
.jtb .fform textarea:focus, .jtb .fform input:focus { box-shadow: 0 0 0 2px var(--green-wash); }
.jtb .fseg { display: inline-flex; background: #fff; border-radius: 9px; padding: 3px; gap: 3px; }
.jtb .fseg button { border-radius: 7px; padding: 6px 12px; font-size: 13px; font-weight: 700; color: var(--muted); }
.jtb .fseg button.on { background: var(--red); color: #fff; }
.jtb .fseg button.up.on { background: #E39B00; }
.jtb .fadd { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.jtb .fadd .add { display: inline-flex; align-items: center; gap: 6px; background: var(--green); color: #fff; border-radius: 9px; padding: 8px 14px 8px 10px; font-weight: 700; font-size: 14px; }
.jtb .flist { overflow-y: auto; display: grid; gap: 8px; align-content: start; }
.jtb .flist-empty { margin: 0; color: var(--muted); font-size: 13.5px; text-align: center; padding: 10px; }
.jtb .fl { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 2px 8px; background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; }
.jtb .fl b { font-family: var(--disp); font-size: 18px; color: var(--ink); }
.jtb .fl-better { font-family: var(--disp); font-weight: 700; font-size: 17px; color: var(--green); grid-column: 1; outline: none; }
.jtb .fl-better:empty::before { content: attr(data-ph); color: #B5AE95; font-weight: 400; }
.jtb .fl > button { grid-row: 1 / span 2; grid-column: 2; color: var(--muted); align-self: center; }
.jtb .fl.up { border-left: 3px solid #E39B00; }
.jtb .fl.fx0 { border-left: 3px solid var(--red); }
.jtb .lc-fix { display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center; font-family: var(--disp); font-size: 19px; font-weight: 700; }
.jtb .lc-fix s { color: var(--red); }
.jtb .lc-fix b { color: var(--green); }
.jtb .lc-two { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.jtb .lc-box { background: var(--desk); border-radius: 10px; padding: 12px 14px; font-size: 15px; font-weight: 500; line-height: 1.45; }
.jtb .lc-box.next { background: #FFF1F1; }
.jtb .lc-box.next b { font-family: var(--disp); font-size: 21px; display: block; }

/* presenter */
.jtb .present { position: fixed; left: 50%; bottom: max(16px, env(safe-area-inset-bottom, 0px)); transform: translateX(-50%); z-index: 20; display: flex; align-items: center; gap: 4px; background: var(--green); color: #fff; border-radius: 14px; padding: 6px; box-shadow: 0 12px 28px rgba(120,60,40,.32); max-width: calc(100% - 28px); }
.jtb .present button { display: inline-flex; align-items: center; gap: 2px; border-radius: 10px; padding: 9px 13px; font-weight: 700; font-size: 13.5px; color: #fff; white-space: nowrap; }
.jtb .present .next { background: var(--red); padding-right: 10px; }
.jtb .present button:disabled { opacity: .4; cursor: default; background: none; }
.jtb .steps { display: flex; gap: 6px; padding: 0 8px; }
.jtb .steps i { width: 7px; height: 7px; border-radius: 50%; background: #5A6684; }
.jtb .steps i.on { background: #C9D0E4; }
.jtb .steps i.cur { background: #FFE07A; width: 18px; border-radius: 4px; }
.jtb .foot { max-width: 900px; margin: 12px auto 0; text-align: center; font-size: 12.5px; color: var(--muted); }

@media (max-width: 720px) {
  .jtb .bar { grid-template-columns: minmax(0, 1fr); }
  .jtb .right { justify-content: flex-start; }
  .jtb .stage { grid-template-columns: minmax(0, 1fr); }
  .jtb .rail { position: static; display: flex; flex-wrap: wrap; justify-content: center; }
  .jtb .rail hr { width: 1px; height: auto; margin: 6px 2px; }
  .jtb .inks, .jtb .stamps { display: flex; padding: 0 8px; align-items: center; }
  .jtb .stp { padding: 5px 8px; }
  .jtb .phrases, .jtb .lc-two, .jtb .sort-cols { grid-template-columns: minmax(0, 1fr); }
  .jtb .fg-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .jtb .meet { grid-template-columns: minmax(0, 1fr); justify-items: center; text-align: center; }
  .jtb .steps { display: none; }
  .jtb .sticky.big { font-size: 22px; }
}

/* ===== On Air (A1-A2 banner colors): overrides on top of the board styles above ===== */
.jtb { font-family: var(--body); background: radial-gradient(ellipse 60% 40% at 55% 12%, #FFFFFF 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse 40% 40% at 100% 100%, #FFD9C9 0%, rgba(255,217,201,0) 70%), var(--stage); background-attachment: fixed; }
.jtb button:focus-visible { outline: 3px solid var(--red); outline-offset: 2px; }
.jtb .bar { max-width: 1000px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 10px 22px; margin-bottom: 14px; }
.jtb .bar .mark-t { display: grid; min-width: 0; max-width: 100%; line-height: 1.15; }
.jtb .bar .mark-t b { font-family: var(--disp); font-weight: 800; font-size: 18px; letter-spacing: -.01em; color: var(--ink); white-space: nowrap; }
.jtb .bar .mark-t span { font-size: 12.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jtb .bar .right { justify-content: center; align-items: center; flex-wrap: wrap; }
.jtb .pages { grid-column: auto; display: inline-flex; gap: 2px; background: var(--card); border: 1px solid var(--line); border-radius: 11px; padding: 3px; box-shadow: none; justify-self: auto; }
.jtb .pg { padding: 5px 12px; border-radius: 8px; font-weight: 600; font-size: 13px; color: var(--muted); gap: 4px; }
.jtb .pg.on { background: var(--green); color: #fff; }
.jtb .pg.add { color: var(--red); padding: 5px 8px; }
.jtb .pill-sel { background: var(--card); border: 1px solid var(--line); box-shadow: none; font-weight: 600; color: var(--muted); }
.jtb .pill-sel.teal { color: var(--green); }
.jtb .fixbtn { background: var(--gold); color: #3A2A00; }
.jtb .fixbtn .badge { color: var(--ink); }
.jtb .stage { max-width: 1000px; }
.jtb .rail { background: var(--card); border: 1px solid var(--line); box-shadow: 0 8px 22px rgba(120,60,40,.08); }
.jtb .tl { color: var(--muted); font-weight: 600; }
.jtb .tl:hover { background: var(--soft); color: var(--ink); }
.jtb .tl.on { background: var(--green); color: #fff; }
.jtb .tl.on .ms { color: #fff; }
.jtb .dot { box-shadow: 0 0 0 2px var(--card), 0 0 0 3px var(--line); }
.jtb .dot.on { box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--ink); }
.jtb .stp.on { box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--ink); }
.jtb .sheet { background: var(--desk-2); border: 1px solid var(--line); box-shadow: none; }

.jtb .head { border-bottom: 1px solid var(--line); align-items: flex-end; }
.jtb .head h1 { font-weight: 800; font-size: clamp(28px, 4vw, 38px); letter-spacing: -.02em; color: var(--ink); line-height: 1; }
.jtb .tag { color: var(--green); background: var(--green-wash); font-weight: 600; }
.jtb .ph .n { font-family: var(--disp); font-weight: 800; font-size: 15px; color: #fff; background: var(--red); border-radius: 7px; padding: 2px 8px; }
.jtb .ph h2 { font-family: var(--disp); font-size: 13px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--muted); }
.jtb .ph::after { height: 1px; background: var(--line); }

/* cue cards */
.jtb .stack::before, .jtb .stack::after { display: none; }
.jtb .icard { border-radius: 8px; padding: 18px 22px 20px; border-top: 8px solid var(--gold); transform: rotate(-.5deg); box-shadow: 0 14px 30px rgba(120,60,40,.11);
  background-image: linear-gradient(transparent 31px, #F7ECE6 32px); background-size: 100% 32px; background-position: 0 50px; background-repeat: repeat; }
.jtb .icard::after { content: ""; position: absolute; right: 0; bottom: 0; width: 30px; height: 30px; background: linear-gradient(135deg, var(--stage) 50%, #F3DCD1 50%); border-radius: 0 0 8px 0; }
.jtb .icard small { font-family: var(--disp); color: var(--red); letter-spacing: .14em; height: auto; }
.jtb .icard .q { font-weight: 700; letter-spacing: -.01em; }
.jtb .stack.fu .icard { transform: none; }
.jtb .fu-wrap .icard { background: linear-gradient(90deg, var(--green), var(--green-2)); color: #fff; border-top: 0; border-radius: 16px; transform: none; box-shadow: 0 10px 24px rgba(27,42,74,.22); }
.jtb .fu-wrap .icard::after { display: none; }
.jtb .fu-wrap .icard .q { color: #fff; }
.jtb .fu-wrap .icard small { color: #FFC9B8; }
.jtb .cover-card { border-top-color: var(--red); transform: none; background-image: none; padding: 28px 26px 32px; }
.jtb .cover-card::after { display: none; }
.jtb .cover-card h1 { font-weight: 800; font-size: clamp(42px, 7vw, 76px); line-height: .95; letter-spacing: -.035em; }
.jtb .cover-card .q { color: var(--red); font-weight: 600; }

/* captions instead of sticky notes */
.jtb .sticky { background: var(--card); color: var(--ink); font-family: var(--body); font-weight: 600; font-size: 20px; border-radius: 10px; border-left: 6px solid var(--red); box-shadow: 0 8px 20px rgba(120,60,40,.10); transform: none; padding: 12px 18px 12px 16px; }
.jtb .sticky.big { font-size: 24px; }
.jtb .ans-btn { background: var(--soft); color: var(--ink); border: 2px solid transparent; border-radius: 12px; box-shadow: none; transform: none; font-weight: 600; }
.jtb .phrase { background: var(--card); border: 1px solid var(--line); border-left: 5px solid var(--gold); border-radius: 12px; box-shadow: none; transform: none !important; }
.jtb .phrase .p { color: var(--ink); font-family: var(--body); font-weight: 600; font-size: 18px; }
.jtb .lc-said p { background: var(--card); border-left: 4px solid var(--red); border-radius: 8px; font-family: var(--body); font-weight: 600; font-size: 17px; }
.jtb .clue { background: var(--card); border-left: 5px solid var(--gold); border-radius: 10px; font-family: var(--body); font-weight: 600; }

/* words, chips, buttons */
.jtb .word { border: 1px solid var(--line); border-top: 1px solid var(--line); border-radius: 999px; box-shadow: none; transform: none !important; font-size: 19px; padding: 8px 17px; }
.jtb .word:hover { transform: translateY(-2px) !important; }
.jtb .word.seen { border-color: #F2A48F; color: #C24A2E; }
.jtb .word.on { background: var(--red); border-color: var(--red); color: #fff; }
.jtb .chip { border: 1px solid var(--line); border-top: 1px solid var(--line); border-radius: 999px; box-shadow: none; font-family: var(--body); font-weight: 600; font-size: 16px; }
.jtb .chip.on { background: var(--green); border-color: var(--green); color: #fff; }
.jtb .explain, .jtb .nopic, .jtb .act-box, .jtb .fix, .jtb .meet { border: 1px solid var(--line); box-shadow: none; }
.jtb .meet { border-top: 8px solid var(--red); }
.jtb .photo { border-radius: 6px; transform: none !important; }
.jtb .go { background: var(--green); box-shadow: 0 10px 22px rgba(27,42,74,.2); font-family: var(--disp); }
.jtb .big-btn { font-family: var(--disp); }
.jtb .stepnav { border: 1px solid var(--line); box-shadow: none; }
.jtb .lcard { border: 1px solid var(--line); box-shadow: 0 14px 30px rgba(120,60,40,.12); }
.jtb .lc-top { background: var(--green); }
.jtb .lc-box.next { background: var(--red-wash); }
.jtb .mode button.on { background: var(--green); }
.jtb .avatar { background: var(--red); }
.jtb .fixd-h h2 { color: var(--ink); font-weight: 800; }
.jtb .fform textarea, .jtb .fform input { font-family: var(--body); font-weight: 500; font-size: 17px; }
.jtb .present { background: var(--green); box-shadow: 0 12px 28px rgba(27,42,74,.3); }
.jtb .present .next { background: var(--red); }
.jtb .steps i.cur { background: var(--gold); }
.jtb .cap, .jtb .sv-q, .jtb .plan-ed, .jtb .tl-ed, .jtb .ord, .jtb .lc-words span, .jtb .lc-fix, .jtb .fl b, .jtb .fl-better, .jtb .fix-row { font-family: var(--body); font-weight: 600; }
`;
