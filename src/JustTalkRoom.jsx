import { useEffect, useMemo, useRef, useState } from "react";
import JustTalkLevelTabs from "./JustTalkLevelTabs.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { STAGES, SCRIPTS, CARDS, NAMES } from "./justTalkData";
import { TLP_STYLES } from "./trackLevelStyles";
import { BOARDS } from "./justTalkBoards";

// Just Talk A1-A2: the owner's private speaking course. Only the site owner's
// account can open these pages; they are not linked anywhere else. Speaking
// classes don't rely on slides, so the main view is a teacher console (script,
// timer, notes). A small "Student card" popup shows the words, starters and task
// card when it helps to share something.

const OWNER_EMAIL = "caldrin1999@gmail.com";
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const LAB = { say: "You", student: "Student", do: "Do", watch: "Watch", stuck: "Stuck", fast: "Fast" };

// Flat list of every built class, in path order, for prev/next.
function builtClasses() {
  const list = [];
  for (const st of STAGES) {
    for (const t of st.topics) {
      const sc = SCRIPTS[t.name];
      if (!sc) continue;
      sc.forEach((c, i) => list.push({ stage: st.n, topic: t.name, n: i + 1, name: NAMES[t.name]?.[i] || c.title, key: `${t.name}|${c.title}`, script: c, path: `/library/just-talk/${slug(t.name)}/${i + 1}` }));
    }
    const chk = SCRIPTS[`check-${st.n}`];
    if (chk) list.push({ stage: st.n, topic: `Stage ${st.n} check-in`, n: 1, name: chk[0].title, key: `check-${st.n}`, script: chk[0], path: `/library/just-talk/stage-${st.n}/check-in` });
  }
  return list;
}
const CLASSES = builtClasses();
const findClass = (topicSlug, n) => CLASSES.find((c) => c.path === `/library/just-talk/${topicSlug}/${n}`);
const toSec = (t) => { const [m, s] = t.split(":").map(Number); return m * 60 + s; };
const mmss = (sec) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

function useOwner() {
  const { user, loading } = useAuth();
  return { loading, ok: user?.email?.toLowerCase() === OWNER_EMAIL };
}

function Gate({ children }) {
  const { loading, ok } = useOwner();
  if (loading) return null;
  if (!ok) return <div className="jt-shell"><style>{CSS}</style><p className="jt-denied">Not available.</p></div>;
  return children;
}

function openCard(cls) {
  const w = Math.min(980, (window.screen.availWidth || 1200) - 40);
  const h = Math.min(640, (window.screen.availHeight || 800) - 80);
  window.open(`${cls.path}/card`, "justTalkCard", `width=${w},height=${h},left=40,top=40,toolbar=no,location=no,menubar=no,status=no,resizable=yes`);
}

/* ---------- Room (hub): same layout as the curriculum level pages ---------- */

const TOPIC_NUM = Object.fromEntries(STAGES.flatMap((st) => st.topics.map((t) => t.name)).map((name, i) => [name, i + 1]));
// Just Talk lesson rows: name on line 1, question + pattern on line 2, so half-width windows stay tidy.
const JT_LESSON_CSS = `
.jt-lmain { flex-direction: column; align-items: flex-start; gap: 2px; }
.jt-lmain .tlp-toc-lesson-title { white-space: normal; }
.jt-lmain .tlp-toc-lesson-focus { line-height: 1.45; }
.jt-lq { font-family: 'Source Serif 4', serif; font-style: italic; color: #8A85A0; margin-right: 8px; }
`;
const STAGE_COLORS = { A1: { color: "#FF6B4A", light: "#FFE6DD" }, A2: { color: "#1B2A4A", light: "#E7EAF3" } };
const chevron = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>;
const arrow = <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

// The Just Talk Board (portrait, one window for the whole class) for lessons that have one.
function openBoard(path) {
  const sw = window.screen.availWidth || 1600;
  const sh = window.screen.availHeight || 900;
  const w = Math.min(1000, sw - 40);
  const h = sh - 40;
  window.open(`${path}/board`, "justTalkBoard", `width=${w},height=${h},left=${Math.max(0, Math.floor((sw - w) / 2))},top=10,toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`);
}

function openClassPopup(path) {
  const sw = window.screen.availWidth || 1600;
  const sh = window.screen.availHeight || 900;
  const w = Math.min(1120, sw - 40);
  const h = Math.min(860, sh - 60);
  window.open(path, "justTalkClass", `width=${w},height=${h},left=${Math.max(0, Math.floor((sw - w) / 2))},top=${Math.max(0, Math.floor((sh - h) / 2))},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`);
}

export function JustTalkHub() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const id = "tlp-styles";
    document.getElementById(id)?.remove();
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = TLP_STYLES;
    document.head.appendChild(tag);
  }, []);

  const topicCount = STAGES.reduce((n, st) => n + st.topics.length, 0);
  const classCount = STAGES.reduce((n, st) => n + st.topics.reduce((m, t) => m + t.classes.length, 0), 0);

  return (
    <Gate>
      <div className="tlp-wrap">
        <style>{JT_HUB_CSS}</style>
        <div className="tlp-blob tlp-blob--a" />
        <div className="tlp-blob tlp-blob--b" />
        <div className="tlp-stage">
          <button type="button" className="tlp-breadcrumb" onClick={() => navigate("/library/curriculum")}>
            Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> Just Talk <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: "#FF6B4A" }}>A1-A2 &middot; Speaking</span>
          </button>

          <div className="tlp-banner-hero" style={{ background: "#FFE6DD url(/curriculum/just-talk-a1-banner.png) right center / cover no-repeat" }}>
            <div className="tlp-cefr-tag" style={{ color: "#FF6B4A" }}>Speaking &middot; CEFR A1-A2 &middot; Only you can see this</div>
            <div className="tlp-banner-title">
              <span className="tlp-level-code" style={{ color: "#FF6B4A" }}>A1-A2</span>
              <span className="tlp-level-name">Just Talk</span>
            </div>
            <p className="tlp-description">For students who just want to talk: from their first English sentence to the end of A2, one 25-minute class at a time.</p>
            <JustTalkLevelTabs active="a1" />
          </div>

          <div className="tlp-stats-strip">
            <div className="tlp-stat-item">
              <div className="tlp-stat-icon tlp-stat-icon--blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11" /></svg></div>
              <div><div className="tlp-stat-title">{topicCount} Modules</div><div className="tlp-stat-sub">{classCount} lessons in 5 stages, plus a check-in after each stage</div></div>
            </div>
            <div className="tlp-stat-item">
              <div className="tlp-stat-icon tlp-stat-icon--coral"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.7" fill="currentColor" /></svg></div>
              <div><div className="tlp-stat-title">Speaking first</div><div className="tlp-stat-sub">25 minutes, the student talks most of the time</div></div>
            </div>
            <div className="tlp-stat-item">
              <div className="tlp-stat-icon tlp-stat-icon--lav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2" /><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" /></svg></div>
              <div><div className="tlp-stat-title">Teacher scripts</div><div className="tlp-stat-sub">What to say, expected answers and common mistakes</div></div>
            </div>
          </div>

          {STAGES.map((st) => {
            const colors = STAGE_COLORS[st.lv] || STAGE_COLORS.A1;
            const check = SCRIPTS[`check-${st.n}`];
            const nClasses = st.topics.reduce((m, t) => m + t.classes.length, 0);
            return (
              <div key={st.n} className="tlp-toc jt-toc">
                <div className="tlp-toc-header" style={{ background: colors.color }}>
                  <div className="tlp-toc-eyebrow-row"><span className="tlp-toc-eyebrow-rule" /><span className="tlp-toc-eyebrow">Stage {st.n} &middot; {st.lv} &middot; {st.focus}</span></div>
                  <h2 className="tlp-toc-title">{st.name}</h2>
                  <p className="tlp-toc-sub">{st.topics.length} modules &middot; {nClasses} lessons &middot; 1 check-in</p>
                </div>
                <ul className="tlp-toc-list">
                  {st.topics.map((t) => {
                    const key = `t-${t.name}`;
                    const isOpen = open === key;
                    const ready = !!SCRIPTS[t.name];
                    return (
                      <li key={t.name} className={`tlp-toc-item ${isOpen ? "is-open" : ""}`}>
                        <div className="tlp-toc-row" onClick={() => setOpen(isOpen ? null : key)}>
                          <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Module {String(TOPIC_NUM[t.name]).padStart(2, "0")}</span>
                          <div className="tlp-toc-main">
                            <div className="tlp-toc-title-row">
                              <span className="tlp-toc-item-title">{t.name}</span>
                              <span className="tlp-toc-leader" />
                              {!ready && <span className="tlp-toc-page-tag">Coming soon</span>}
                            </div>
                            <div className="tlp-toc-focus">{t.classes.map((c, i) => NAMES[t.name]?.[i] || c[0]).join(" · ")}</div>
                          </div>
                          <span className="tlp-toc-chevron" style={isOpen ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                        </div>
                        <div className="tlp-toc-panel">
                          <div className="tlp-toc-panel-inner">
                            {t.classes.map(([title, pattern, task], i) => (
                              <div key={title} className={`tlp-toc-lesson-row ${ready ? "is-ready" : ""}`}>
                                <span className="tlp-toc-lesson-bullet">{i + 1}</span>
                                <div className="tlp-toc-lesson-main jt-lmain">
                                  <span className="tlp-toc-lesson-title">{NAMES[t.name]?.[i] || title}</span>
                                  <span className="tlp-toc-lesson-focus" title={task}><i className="jt-lq">&ldquo;{title}&rdquo;</i>{pattern}</span>
                                </div>
                                {ready
                                  ? <span style={{ display: "inline-flex", gap: 6 }}>{BOARDS[`${slug(t.name)}-${i + 1}`] && <button type="button" className="tlp-toc-lesson-open" style={{ background: "#3E5B3A" }} onClick={() => openBoard(`/library/just-talk/${slug(t.name)}/${i + 1}`)}>Board {arrow}</button>}<button type="button" className="tlp-toc-lesson-open" onClick={() => openClassPopup(`/library/just-talk/${slug(t.name)}/${i + 1}`)}>Script {arrow}</button></span>
                                  : <span className="tlp-toc-lesson-tag">Lesson</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li className={`tlp-toc-item ${open === `c-${st.n}` ? "is-open" : ""}`}>
                    <div className="tlp-toc-row" onClick={() => setOpen(open === `c-${st.n}` ? null : `c-${st.n}`)}>
                      <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>Check-in</span>
                      <div className="tlp-toc-main">
                        <div className="tlp-toc-title-row"><span className="tlp-toc-item-title">Stage {st.n} check-in</span><span className="tlp-toc-leader" /></div>
                        <div className="tlp-toc-focus">Review the stage and read the student file back</div>
                      </div>
                      <span className="tlp-toc-chevron" style={open === `c-${st.n}` ? { background: colors.color, color: "#fff" } : {}}>{chevron}</span>
                    </div>
                    <div className="tlp-toc-panel">
                      <div className="tlp-toc-panel-inner">
                        <div className={`tlp-toc-lesson-row is-test ${check ? "is-ready" : ""}`}>
                          <span className="tlp-toc-lesson-bullet">T</span>
                          <div className="tlp-toc-lesson-main jt-lmain">
                            <span className="tlp-toc-lesson-title">Stage {st.n} check-in</span>
                            <span className="tlp-toc-lesson-focus">{check ? check[0].goal : "Review"}</span>
                          </div>
                          {check
                            ? <span style={{ display: "inline-flex", gap: 6 }}>{BOARDS[`check-${st.n}`] && <button type="button" className="tlp-toc-lesson-open" style={{ background: "#3E5B3A" }} onClick={() => openBoard(`/library/just-talk/stage-${st.n}/check-in`)}>Board {arrow}</button>}<button type="button" className="tlp-toc-lesson-open" onClick={() => openClassPopup(`/library/just-talk/stage-${st.n}/check-in`)}>Script {arrow}</button></span>
                            : <span className="tlp-toc-lesson-tag">Review</span>}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Gate>
  );
}

const JT_HUB_CSS = `.tlp-toc.jt-toc { margin-bottom: 22px; }` + JT_LESSON_CSS;

/* ---------- Class console ---------- */

function CopyBox({ title, text }) {
  const [label, setLabel] = useState("Copy");
  const ref = useRef(null);
  async function copy() {
    try { await navigator.clipboard.writeText(text); setLabel("Copied"); }
    catch {
      const r = document.createRange(); r.selectNodeContents(ref.current);
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      setLabel("Selected");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  }
  return (
    <div className="jt-cardbox">
      <div className="jt-cardbox-h"><span>{title}</span><button type="button" onClick={copy}>{label}</button></div>
      <pre ref={ref}>{text}</pre>
    </div>
  );
}

export function JustTalkClass({ check = false }) {
  const navigate = useNavigate();
  const { topic, n, stage } = useParams();
  const cls = check ? CLASSES.find((c) => c.key === `check-${stage?.replace("stage-", "")}`) : findClass(topic, n);
  const idx = cls ? CLASSES.indexOf(cls) : -1;
  const steps = useMemo(() => (cls ? cls.script.steps.map((s) => ({ ...s, a: toSec(s.t), b: toSec(s.end) })) : []), [cls]);

  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [follow, setFollow] = useState(true);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const total = steps.length ? steps[steps.length - 1].b : 1500;
  const current = steps.findIndex((s) => elapsed >= s.a && elapsed < s.b);
  const cur = current === -1 ? (elapsed >= total ? steps.length - 1 : 0) : current;

  useEffect(() => {
    if (follow && running && stepRefs.current[cur]) stepRefs.current[cur].scrollIntoView({ behavior: "smooth", block: "start" });
  }, [cur, follow, running]);

  if (!cls) {
    return <Gate><div className="jt-shell"><style>{CSS}</style><p className="jt-denied">Class not found. <button type="button" className="jt-link" onClick={() => navigate("/library/just-talk")}>Back to Just Talk</button></p></div></Gate>;
  }

  const c = cls.script;
  const prev = CLASSES[idx - 1];
  const next = CLASSES[idx + 1];
  const cards = CARDS[cls.key] || [];
  const jump = (sec) => setElapsed(sec);
  const go = (p) => { setRunning(false); setElapsed(0); navigate(p); window.scrollTo(0, 0); };

  return (
    <Gate>
      <div className="jt-shell">
        <style>{CSS}</style>
        <div className="jt-top">
          {window.opener ? <button type="button" className="jt-back" onClick={() => window.close()}>Close</button> : <button type="button" className="jt-back" onClick={() => navigate("/library/just-talk")}>← Just Talk</button>}
          <span className="jt-crumb">Stage {cls.stage} · {check ? cls.topic : `Module ${TOPIC_NUM[cls.topic]} · ${cls.topic} · Lesson ${cls.n}`}</span>
          <span className="jt-navbtns">
            <button type="button" disabled={!prev} onClick={() => prev && go(prev.path)}>Previous</button>
            <button type="button" disabled={!next} onClick={() => next && go(next.path)}>Next</button>
          </span>
        </div>

        <div className="jt-timer" role="region" aria-label="Class timer">
          <div className="jt-clock">
            <b>{mmss(Math.min(elapsed, 5999))}</b><span>of {mmss(total)}</span>
          </div>
          <div className="jt-tbtns">
            <button type="button" className="jt-primary" onClick={() => setRunning((r) => !r)}>{running ? "Pause" : elapsed ? "Resume" : "Start class"}</button>
            <button type="button" onClick={() => { setRunning(false); setElapsed(0); }}>Reset</button>
            <label className="jt-follow"><input type="checkbox" checked={follow} onChange={(e) => setFollow(e.target.checked)} /> Follow</label>
          </div>
          <div className="jt-segs">
            {steps.map((s, i) => (
              <button key={s.t} type="button" className={`jt-seg${i === cur ? " is-on" : ""}${elapsed >= s.b ? " is-done" : ""}`} style={{ flex: s.b - s.a }} onClick={() => jump(s.a)} title={`Jump to ${s.part}`}>
                <span>{s.t}</span><b>{s.part.startsWith("Speaking task") ? "Speaking task" : s.part}</b>
                {i === cur && <i style={{ width: `${Math.min(100, ((elapsed - s.a) / (s.b - s.a)) * 100)}%` }} />}
              </button>
            ))}
          </div>
          {elapsed >= total && <p className="jt-over">Time's up. Finish the wrap-up and write the student file note.</p>}
        </div>

        <main className="jt-page jt-class">
          <header className="jt-chead">
            <h1>{cls.name}</h1>
            {cls.name !== c.title && <p className="jt-sub">&ldquo;{c.title}&rdquo;</p>}
            <p className="jt-goal">{c.goal}</p>
            <div style={{ gridColumn: 2, gridRow: "1 / span 3", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end", alignSelf: "center" }}>
              {BOARDS[check ? cls.key : `${slug(cls.topic)}-${cls.n}`] && <button type="button" className="jt-cardbtn" style={{ background: "#3E5B3A", color: "#fff", borderColor: "#3E5B3A" }} onClick={() => openBoard(cls.path)}>Board</button>}
              <button type="button" className="jt-cardbtn" onClick={() => openCard(cls)}>Student card</button>
            </div>
          </header>

          <section className="jt-meta">
            <div><span className="jt-k">Pattern</span><div className="jt-frames">{c.pattern.map((p) => <span key={p}>{p}</span>)}</div></div>
            <div><span className="jt-k">Words</span><div className="jt-chips">{c.words.map((w) => <span key={w}>{w}</span>)}</div></div>
            <div><span className="jt-k">Recycle</span><p>{c.recycle}</p></div>
            <div><span className="jt-k">Prepare</span><p>{c.prepare}</p></div>
            {cards.length > 0 && <div className="jt-cards">{cards.map(([t, txt]) => <CopyBox key={t} title={t} text={txt} />)}</div>}
          </section>

          <section className="jt-steps">
            {steps.map((s, i) => (
              <article key={s.t} ref={(el) => { stepRefs.current[i] = el; }} className={`jt-step${i === cur && (running || elapsed > 0) ? " is-on" : ""}`}>
                <button type="button" className="jt-stime" onClick={() => { jump(s.a); }} title="Set the timer to this step">
                  <b>{s.t}</b><span>to {s.end}</span><em>{s.part}</em>
                </button>
                <div className="jt-items">
                  {s.items.map(([k, v], j) => (
                    <div key={j} className={`jt-it jt-${k}`}><span className="jt-lab">{LAB[k]}</span><span className="jt-txt">{v}</span></div>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="jt-foot">
            <span className="jt-k">Common mistakes</span>
            <div className="jt-mist">
              {c.mistakes.map(([w, r, h]) => (
                <div key={w}><s>{w}</s><b>{r}</b><span>{h}</span></div>
              ))}
            </div>
            <div className="jt-file"><span className="jt-k">After class: student file</span><p>{c.file}</p></div>
          </section>

          <div className="jt-endnav">
            {prev ? <button type="button" onClick={() => go(prev.path)}>← {prev.name}</button> : <span />}
            {next ? <button type="button" onClick={() => go(next.path)}>{next.name} →</button> : <span />}
          </div>
        </main>
      </div>
    </Gate>
  );
}

/* ---------- Student card (popup to share when needed) ---------- */

export function JustTalkCard({ check = false }) {
  const { topic, n, stage } = useParams();
  const cls = check ? CLASSES.find((c) => c.key === `check-${stage?.replace("stage-", "")}`) : findClass(topic, n);
  const [view, setView] = useState(0);
  const views = cls ? [
    { id: "words", label: "Words" },
    { id: "say", label: "Say it" },
    ...(CARDS[cls.key] || []).map(([t], i) => ({ id: `card-${i}`, label: t })),
  ] : [];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setView((v) => Math.min(v + 1, views.length - 1));
      if (e.key === "ArrowLeft") setView((v) => Math.max(v - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [views.length]);

  if (!cls) return <Gate><div className="jt-shell"><style>{CSS}</style><p className="jt-denied">Class not found.</p></div></Gate>;
  const c = cls.script;
  const v = views[view];
  const card = v.id.startsWith("card-") ? (CARDS[cls.key] || [])[Number(v.id.slice(5))] : null;

  return (
    <Gate>
      <div className="jt-scard">
        <style>{CSS}</style>
        <div className="jt-scard-top">
          <b>{cls.name}</b>
          <div className="jt-tabs" role="tablist">
            {views.map((x, i) => <button key={x.id} type="button" role="tab" aria-selected={i === view} className={i === view ? "is-on" : ""} onClick={() => setView(i)}>{x.label}</button>)}
          </div>
        </div>
        <div className="jt-scard-body">
          {v.id === "words" && <div className="jt-bigwords">{c.words.map((w) => <span key={w}>{w}</span>)}</div>}
          {v.id === "say" && <div className="jt-bigframes">{c.pattern.map((p) => <span key={p}>{p}</span>)}</div>}
          {card && <pre className="jt-bigcard">{card[1]}</pre>}
        </div>
      </div>
    </Gate>
  );
}

export default JustTalkHub;

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');
.jt-shell { min-height: 100vh; background: #FBFAF7; color: #2B2A4A; font-family: 'Quicksand', sans-serif; font-weight: 500; }
.jt-shell *, .jt-scard * { box-sizing: border-box; }
.jt-shell h1, .jt-shell h2, .jt-shell h3 { font-family: 'Fredoka', sans-serif; color: #1B2A4A; margin: 0; }
.jt-denied { padding: 60px 24px; text-align: center; color: #6F6A88; }
.jt-link { background: none; border: none; color: #E8573A; font: inherit; font-weight: 700; cursor: pointer; text-decoration: underline; }
.jt-top { position: sticky; top: 0; z-index: 5; display: flex; align-items: center; gap: 14px; padding: 12px max(16px, 3vw); background: #fff; border-bottom: 1px solid rgba(43,42,74,0.09); flex-wrap: wrap; }
.jt-brand { display: flex; align-items: center; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #2B2A4A; background: none; border: none; cursor: pointer; padding: 0; }
.jt-logo { height: 24px; margin-right: -5px; }
.jt-private { margin-left: auto; font-size: 12px; font-weight: 700; color: #1F6B42; background: #E3F5EA; border-radius: 999px; padding: 4px 12px; }
.jt-back { background: none; border: none; font: 700 14px 'Quicksand', sans-serif; color: #1B2A4A; cursor: pointer; padding: 0; }
.jt-crumb { font-size: 13px; color: #6F6A88; font-weight: 600; }
.jt-navbtns { margin-left: auto; display: flex; gap: 6px; }
.jt-navbtns button, .jt-tbtns button, .jt-endnav button { font: 700 13px 'Quicksand', sans-serif; color: #1B2A4A; background: #E9ECF3; border: none; border-radius: 999px; padding: 7px 14px; cursor: pointer; }
.jt-navbtns button:disabled { opacity: 0.4; cursor: default; }
.jt-page { max-width: 920px; margin: 0 auto; padding: 28px max(16px, 3vw) 80px; display: grid; gap: 22px; }
.jt-hero { display: grid; gap: 8px; }
.jt-eyebrow { font-size: 11.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #E8573A; }
.jt-hero h1 { font-size: clamp(32px, 5vw, 44px); }
.jt-hero h1 em { font-style: normal; color: #E8573A; }
.jt-hero p { max-width: 62ch; font-size: 16px; }
.jt-stage { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 18px; padding: 18px; display: grid; gap: 14px; }
.jt-stage.is-off { opacity: 0.6; }
.jt-stage-head { display: grid; grid-template-columns: auto minmax(0,1fr) auto; gap: 12px; align-items: center; }
.jt-snum { width: 34px; height: 34px; border-radius: 50%; background: #1B2A4A; color: #fff; display: grid; place-items: center; font: 700 15px 'Fredoka', sans-serif; }
.jt-stage-head h2 { font-size: 19px; }
.jt-stage-head h2 small { font-size: 12px; color: #E8573A; margin-left: 6px; }
.jt-stage-head p { margin: 0; font-size: 13px; color: #6F6A88; }
.jt-soon { font-size: 11.5px; font-weight: 700; color: #6F6A88; background: #F1F3F8; border-radius: 999px; padding: 3px 10px; }
.jt-topics { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
.jt-topic { display: grid; gap: 6px; align-content: start; }
.jt-topic h3 { font-size: 15px; }
.jt-row { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 8px; text-align: left; background: #FBFAF7; border: 1px solid rgba(43,42,74,0.08); border-radius: 12px; padding: 8px 10px; cursor: pointer; font: inherit; color: inherit; }
.jt-row:hover { border-color: #E8573A; }
.jt-row.is-static { cursor: default; }
.jt-row.is-static:hover { border-color: rgba(43,42,74,0.08); }
.jt-n { font: 600 14px 'Fredoka', sans-serif; color: #E8573A; }
.jt-rt { display: grid; gap: 1px; min-width: 0; }
.jt-rt b { font-size: 14px; color: #1B2A4A; }
.jt-rt span { font-size: 12.5px; color: #6F6A88; }

.jt-timer { position: sticky; top: 49px; z-index: 4; background: #1B2A4A; color: #fff; padding: 10px max(16px, 3vw); display: grid; grid-template-columns: auto auto minmax(0,1fr); gap: 10px 16px; align-items: center; }
@media (max-width: 760px) { .jt-timer { grid-template-columns: auto minmax(0,1fr); } .jt-segs { grid-column: 1 / -1; } }
.jt-clock b { font: 600 26px 'Fredoka', sans-serif; font-variant-numeric: tabular-nums; }
.jt-clock span { font-size: 12px; opacity: 0.7; margin-left: 6px; }
.jt-tbtns { display: flex; gap: 6px; align-items: center; }
.jt-tbtns .jt-primary { background: #E8573A; color: #fff; }
.jt-follow { font-size: 12px; display: flex; gap: 4px; align-items: center; opacity: 0.85; }
.jt-segs { display: flex; gap: 3px; min-width: 0; }
.jt-seg { position: relative; overflow: hidden; min-width: 0; background: rgba(255,255,255,0.1); border: none; border-radius: 8px; padding: 5px 7px; text-align: left; color: #fff; cursor: pointer; font: inherit; display: grid; }
.jt-seg span { font-size: 10.5px; opacity: 0.7; font-variant-numeric: tabular-nums; }
.jt-seg b { font-size: 11.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; position: relative; }
.jt-seg.is-done { background: rgba(255,255,255,0.22); }
.jt-seg.is-on { background: #E8573A; }
.jt-seg i { position: absolute; left: 0; bottom: 0; height: 3px; background: #FFF1C2; }
.jt-over { grid-column: 1 / -1; margin: 0; font-size: 13px; color: #FFF1C2; font-weight: 700; }

.jt-chead { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 6px 14px; align-items: center; }
.jt-chead h1 { font-size: clamp(28px, 4vw, 38px); }
.jt-sub { grid-column: 1; margin: -4px 0 0; color: #6F6A88; font-style: italic; }
.jt-goal { grid-column: 1; margin: 0; color: #6F6A88; }
.jt-cardbtn { grid-column: 2; grid-row: 1 / span 2; font: 700 14px 'Quicksand', sans-serif; background: #FFF1C2; color: #1B2A4A; border: 1.5px solid #1B2A4A; border-radius: 999px; padding: 9px 16px; cursor: pointer; }
.jt-meta { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 16px 18px; display: grid; gap: 10px; }
.jt-meta > div { display: grid; grid-template-columns: 90px minmax(0,1fr); gap: 10px; align-items: start; }
.jt-meta p { margin: 0; font-size: 14px; }
@media (max-width: 560px) { .jt-meta > div { grid-template-columns: 1fr; gap: 4px; } }
.jt-k { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6F6A88; padding-top: 3px; }
.jt-frames, .jt-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.jt-frames span { background: #F1F3F8; border-radius: 8px; padding: 2px 10px; font-weight: 700; font-size: 14px; color: #1B2A4A; }
.jt-chips span { background: #fff; border: 1px solid rgba(43,42,74,0.12); border-radius: 8px; padding: 2px 9px; font-weight: 600; font-size: 14px; }
.jt-meta .jt-cards { display: grid; grid-template-columns: 1fr; gap: 8px; }
.jt-cardbox { border: 1px dashed rgba(122,82,0,0.35); background: #FFFBEA; border-radius: 10px; padding: 10px 12px; display: grid; gap: 6px; }
.jt-cardbox-h { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.jt-cardbox-h span { font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #7A5200; }
.jt-cardbox-h button { border: none; background: #1B2A4A; color: #fff; font: 700 12px 'Quicksand', sans-serif; border-radius: 999px; padding: 4px 12px; cursor: pointer; }
.jt-cardbox pre { margin: 0; font: 12.5px/1.5 ui-monospace, Menlo, monospace; white-space: pre; overflow-x: auto; }

.jt-steps { display: grid; gap: 10px; }
.jt-step { scroll-margin-top: 190px; background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 14px 16px; display: grid; grid-template-columns: 110px minmax(0,1fr); gap: 14px; transition: box-shadow .2s, border-color .2s; }
.jt-step.is-on { border-color: #E8573A; box-shadow: 0 0 0 3px rgba(232,87,58,0.15); }
@media (max-width: 600px) { .jt-step { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .jt-step { transition: none; } }
.jt-stime { display: grid; gap: 1px; align-content: start; text-align: left; background: none; border: none; padding: 0; cursor: pointer; font: inherit; color: inherit; }
.jt-stime b { font: 600 16px 'Fredoka', sans-serif; color: #E8573A; font-variant-numeric: tabular-nums; }
.jt-stime span { font-size: 12px; color: #6F6A88; }
.jt-stime em { font-style: normal; font-size: 13px; font-weight: 700; color: #1B2A4A; margin-top: 4px; line-height: 1.3; }
.jt-items { display: grid; gap: 7px; min-width: 0; }
.jt-it { display: grid; grid-template-columns: 62px minmax(0,1fr); gap: 8px; align-items: baseline; font-size: 14.5px; }
.jt-lab { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6F6A88; }
.jt-say .jt-txt { background: #fff; border: 1.5px solid #1B2A4A; border-radius: 10px; padding: 4px 10px; justify-self: start; font-weight: 600; }
.jt-student .jt-txt { background: #FFF1C2; border: 1.5px solid #1B2A4A; border-radius: 10px; padding: 4px 10px; justify-self: start; font-weight: 600; }
.jt-watch .jt-lab { color: #E8573A; }
.jt-stuck .jt-lab { color: #1D4E89; }
.jt-fast .jt-lab { color: #1F6B42; }
.jt-watch .jt-txt, .jt-stuck .jt-txt, .jt-fast .jt-txt { font-size: 13.5px; }

.jt-foot { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 16px 18px; display: grid; gap: 10px; }
.jt-mist { display: grid; gap: 6px; }
.jt-mist > div { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1.4fr); gap: 10px; font-size: 14px; }
@media (max-width: 600px) { .jt-mist > div { grid-template-columns: 1fr; gap: 2px; } }
.jt-mist s { color: #E8573A; }
.jt-mist b { color: #1F6B42; }
.jt-mist span { color: #6F6A88; }
.jt-file { background: #E3F5EA; border-radius: 12px; padding: 10px 12px; display: grid; gap: 2px; }
.jt-file p { margin: 0; color: #1F6B42; font-weight: 600; }
.jt-endnav { display: flex; justify-content: space-between; gap: 10px; }

.jt-scard { min-height: 100vh; background: #FBFAF7; color: #1B2A4A; font-family: 'Quicksand', sans-serif; display: grid; grid-template-rows: auto 1fr; }
.jt-scard-top { display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between; padding: 12px 20px; background: #fff; border-bottom: 1px solid rgba(43,42,74,0.09); }
.jt-scard-top b { font: 600 18px 'Fredoka', sans-serif; }
.jt-tabs { display: flex; flex-wrap: wrap; gap: 4px; background: #F1F3F8; border-radius: 999px; padding: 3px; }
.jt-tabs button { border: none; background: none; border-radius: 999px; padding: 6px 14px; font: 700 13px 'Quicksand', sans-serif; color: #1B2A4A; cursor: pointer; }
.jt-tabs button.is-on { background: #1B2A4A; color: #fff; }
.jt-scard-body { display: grid; place-items: center; padding: 24px; }
.jt-bigwords { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px 18px; max-width: 900px; }
.jt-bigwords span { font: 600 clamp(28px, 4.5vw, 46px) 'Fredoka', sans-serif; background: #fff; border: 2px solid #1B2A4A; border-radius: 16px; padding: 6px 20px; }
.jt-bigframes { display: grid; gap: 14px; justify-items: center; }
.jt-bigframes span { font: 600 clamp(26px, 4vw, 42px) 'Fredoka', sans-serif; background: #FFF1C2; border: 2px solid #1B2A4A; border-radius: 16px; padding: 8px 24px; }
.jt-bigcard { margin: 0; font: 600 clamp(16px, 2.2vw, 22px)/1.6 'Quicksand', sans-serif; white-space: pre-wrap; background: #fff; border: 2px solid #1B2A4A; border-radius: 16px; padding: 18px 24px; max-width: 900px; }
`;
