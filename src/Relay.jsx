import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson } from "./relayTracks";

function buildSlideTypes(lesson) {
  const bounceSlides = lesson.bounce.rounds.map((_, i) => `bounce-${i}`);
  return ["cover", "warmup", ...bounceSlides, "yourturn", "pushit", "end"];
}

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "warmup", label: "Warm-up" },
  { key: "bounce", label: "Bounce" },
  { key: "yourturn", label: "Your Turn" },
  { key: "pushit", label: "Push It" },
  { key: "end", label: "End" },
];

function stageKey(slideType) {
  return slideType.startsWith("bounce-") ? "bounce" : slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="rl-stage-label">{stage.label}</span>;
}

// Relay's own motif: a pulse/heartbeat line, "don't flatline the
// conversation" -- matches the pin icon used on its Fluency Clinic card.
function PulseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="rl-pulse-icon">
      <path d="M2 13 H6 L8 7 L11 19 L13 8 L14.5 13 H22" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BgDecor() {
  return (
    <div className="rl-bg">
      <svg className="rl-bg-item rl-bg-item--1" width="150" height="40" viewBox="0 0 150 40" fill="none">
        <path d="M0 20 H30 L38 4 L50 36 L60 12 L66 20 H150" stroke="#3E7CB1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="rl-bg-item rl-bg-item--2" width="64" height="24" viewBox="0 0 64 24" fill="none">
        <rect x="1" y="1" width="62" height="22" rx="11" stroke="#3E7CB1" strokeWidth="2.5" />
        <line x1="32" y1="1" x2="32" y2="23" stroke="#3E7CB1" strokeWidth="2" />
      </svg>
      <svg className="rl-bg-item rl-bg-item--3" width="24" height="24" viewBox="0 0 24 24">
        <path d="M11 3h2v8h8v2h-8v8h-2v-8H3v-2h8z" fill="#E8544E" />
      </svg>
    </div>
  );
}

function CoverSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h1 className="rl-h rl-h--cover"><PulseIcon />{lesson.title}</h1>
      <span className="rl-technique">{lesson.techniqueLine}</span>
    </div>
  );
}

// Fixed-size deck: if a slide is taller than the room it has, the whole slide
// shrinks (zoom) so nothing ever scrolls or gets cut off.
function FitBody({ slideKey, children }) {
  const boxRef = useRef(null);
  const innerRef = useRef(null);
  useLayoutEffect(() => {
    function fit() {
      const box = boxRef.current;
      const inner = innerRef.current;
      if (!box || !inner) return;
      inner.style.zoom = "1";
      const cs = getComputedStyle(box);
      const room = box.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const need = inner.scrollHeight;
      if (need > room) inner.style.zoom = String(Math.max(0.5, Math.floor((room / need) * 100) / 100));
    }
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [slideKey]);
  return (
    <div className="rl-deck-body" ref={boxRef}>
      <div className="rl-deck-inner" ref={innerRef}>{children}</div>
    </div>
  );
}

// Place for the teacher to type what the student actually said.
function AnswerBox({ value, onChange, label = "What did they say?", rows = 3 }) {
  return (
    <label className="rl-ans">
      <span className="rl-ans-label">{label}</span>
      <textarea
        className="rl-ans-box"
        rows={rows}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type the student's answer here"
        spellCheck={false}
      />
    </label>
  );
}

// The three beats of the Relay rule. The teacher ticks what they heard.
const BEATS = [
  { key: "answer", label: "Answer" },
  { key: "add", label: "Add" },
  { key: "ask", label: "Ask back" },
];

function BeatTicks({ beats = {}, onToggle, hint }) {
  const done = BEATS.filter((b) => beats[b.key]).length;
  return (
    <div className="rl-beats">
      {BEATS.map((b) => (
        <button
          key={b.key}
          type="button"
          className={`rl-beat${beats[b.key] ? " is-on" : ""}${hint && b.key === "add" ? " is-hint" : ""}`}
          onClick={() => onToggle(b.key)}
          aria-pressed={!!beats[b.key]}
        >
          <span className="rl-beat-box" />{b.label}
        </button>
      ))}
      <span className="rl-beats-count">{done} of 3 beats</span>
    </div>
  );
}

// 30-second answer timer. Tap to start or pause; it resets on every slide.
function TimerRing({ total = 30 }) {
  const [left, setLeft] = useState(total);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) { setRunning(false); return 0; }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);
  const pct = Math.round((left / total) * 100);
  const mm = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
  return (
    <button
      type="button"
      className={`rl-timer${running ? " is-running" : ""}${left === 0 ? " is-done" : ""}`}
      style={{ "--pct": `${pct}%` }}
      onClick={() => { if (left === 0) { setLeft(total); setRunning(true); } else setRunning((r) => !r); }}
      aria-label={running ? "Pause timer" : "Start timer"}
      title={running ? "Pause" : "Start 30 second timer"}
    >
      <span>{mm}</span>
    </button>
  );
}

function WarmupSlide({ lesson, note, onNote }) {
  const [showingSample, setShowingSample] = useState(false);
  const sample = lesson.warmup.sampleAnswer;
  return (
    <div className="rl-two">
      <div className="rl-two-main">
        <span className="rl-eyebrow">Warm-up · ask the student</span>
        <h2 className="rl-question rl-question--sm"><PulseIcon />{lesson.warmup.question}</h2>
        <div className="rl-actions">
          {sample && (showingSample ? (
            <span className="rl-help-text">{sample}</span>
          ) : (
            <button type="button" className="rl-help-btn" onClick={() => setShowingSample(true)}>Show a sample answer</button>
          ))}
          <TimerRing />
        </div>
      </div>
      <div className="rl-two-side">
        <AnswerBox value={note.text} onChange={(text) => onNote({ text })} />
      </div>
    </div>
  );
}

function BounceSlide({ lesson, index, note, onNote }) {
  const [helping, setHelping] = useState(false);
  const round = lesson.bounce.rounds[index];
  const total = lesson.bounce.rounds.length;
  function onText(text) {
    // A question mark in the answer means they asked back: tick "Ask back" the first time.
    const patch = { text };
    if (/\?/.test(text) && !(note.beats || {}).ask && !note.askTouched) patch.beats = { ...(note.beats || {}), ask: true };
    onNote(patch);
  }
  function toggle(key) {
    const beats = { ...(note.beats || {}), [key]: !(note.beats || {})[key] };
    onNote({ beats, askTouched: note.askTouched || key === "ask" });
  }
  return (
    <div className="rl-two">
      <div className="rl-two-main">
        <span className="rl-eyebrow">Round {index + 1} of {total} · ask the student</span>
        <h2 className="rl-question rl-question--sm"><PulseIcon />{round.question}</h2>
        <div className="rl-actions">
          {helping ? (
            <span className="rl-help-text">Missing beat: {round.missingBeatHint}</span>
          ) : (
            <button type="button" className="rl-help-btn" onClick={() => setHelping(true)}>Need help?</button>
          )}
          <TimerRing />
        </div>
      </div>
      <div className="rl-two-side">
        <AnswerBox value={note.text} onChange={onText} />
        <BeatTicks beats={note.beats} onToggle={toggle} hint={helping} />
      </div>
    </div>
  );
}

function YourTurnSlide({ lesson, note, onNote }) {
  const yt = lesson.yourTurn;
  return (
    <div className="rl-two rl-two--tight">
      <div className="rl-two-main">
        <div className="rl-actions">
          <h2 className="rl-h">Your Turn</h2>
          <TimerRing total={60} />
        </div>
        <p className="rl-subtitle rl-subtitle--left">{yt.scenario}</p>
        <div className="rl-bubble">
          <span className="rl-bubble-role">{yt.teacherRole}</span>
          <p className="rl-bubble-text">“{yt.opener}”</p>
        </div>
      </div>
      <div className="rl-two-side">
        <AnswerBox value={note.text} onChange={(text) => onNote({ text })} label="Notes on the conversation" rows={2} />
      </div>
    </div>
  );
}

function PushItSlide({ lesson, note, onNote }) {
  return (
    <div className="rl-two">
      <div className="rl-two-main">
        <h2 className="rl-h">Push It <span className="rl-optional">(optional)</span></h2>
        <p className="rl-subtitle rl-subtitle--left">{lesson.pushIt.prompt}</p>
        <TimerRing />
      </div>
      <div className="rl-two-side">
        <AnswerBox value={note.text} onChange={(text) => onNote({ text })} />
        <BeatTicks beats={note.beats} onToggle={(key) => onNote({ beats: { ...(note.beats || {}), [key]: !(note.beats || {})[key] } })} />
      </div>
    </div>
  );
}

function EndSlide({ lesson, notes }) {
  const rows = lesson.bounce.rounds
    .map((r, i) => ({ q: r.question, n: notes[`bounce-${i}`] || {} }))
    .filter((r) => (r.n.text && r.n.text.trim()) || BEATS.some((b) => (r.n.beats || {})[b.key]));
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-h">{lesson.end.heading}</h2>
      <p className="rl-subtitle">{lesson.end.line}</p>
      {rows.length > 0 && (
        <div className="rl-recap">
          <span className="rl-ans-label">What they said today</span>
          {rows.map((r) => (
            <div key={r.q} className="rl-recap-row">
              <span className="rl-recap-q">{r.q}</span>
              <span className="rl-recap-a">{r.n.text ? r.n.text : "No answer typed"}</span>
              <span className="rl-recap-b">{BEATS.filter((b) => (r.n.beats || {})[b.key]).length}/3</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function renderSlide(slideType, lesson, notes, setNote) {
  const note = notes[slideType] || {};
  const onNote = (patch) => setNote(slideType, patch);
  if (slideType.startsWith("bounce-")) {
    return <BounceSlide lesson={lesson} index={Number(slideType.slice(7))} note={note} onNote={onNote} />;
  }
  switch (slideType) {
    case "cover":
      return <CoverSlide lesson={lesson} />;
    case "warmup":
      return <WarmupSlide lesson={lesson} note={note} onNote={onNote} />;
    case "yourturn":
      return <YourTurnSlide lesson={lesson} note={note} onNote={onNote} />;
    case "pushit":
      return <PushItSlide lesson={lesson} note={note} onNote={onNote} />;
    case "end":
      return <EndSlide lesson={lesson} notes={notes} />;
    default:
      return null;
  }
}

export default function Relay() {
  const { trackId, lessonNum } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideIdx, setSlideIdx] = useState(() => Number(searchParams.get("slide")) || 0);
  const lesson = getLesson(trackId, Number(lessonNum));
  // What the teacher types and ticks is kept for this lesson in this browser tab.
  const storeKey = `relay-notes-${trackId}-${lessonNum}`;
  const [notes, setNotes] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem(storeKey)) || {}; } catch { return {}; }
  });
  useEffect(() => {
    try { sessionStorage.setItem(storeKey, JSON.stringify(notes)); } catch { /* storage unavailable */ }
  }, [notes, storeKey]);
  function setNote(key, patch) {
    setNotes((prev) => ({ ...prev, [key]: { ...(prev[key] || {}), ...patch } }));
  }

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
      <div className="rl-shell">
        <style>{CSS}</style>
        <div className="rl-stage">
          <p className="rl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlideTypes(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="rl-shell">
      <style>{CSS}</style>
      <BgDecor />

      <div className="rl-stage">
        <div className="rl-deck">
          <div className="rl-deck-header">
            <span className="rl-brand"><img src="/logo-sentenco.png" alt="" className="rl-brand-logo" />entenco</span>
            <StageLabel slideType={slideType} />
          </div>
          <FitBody slideKey={slideIdx}>
            <div key={slideIdx} className="rl-slide-wrap">{renderSlide(slideType, lesson, notes, setNote)}</div>
          </FitBody>
          <div className="rl-nav-row">
            <button type="button" className="rl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="rl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`rl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="rl-nav-btn rl-nav-btn--primary"
              onClick={() => setSlideIdx((i) => i + 1)}
              disabled={isLast}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.rl-shell {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.rl-shell * { box-sizing: border-box; }

.rl-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.rl-bg-item { position: absolute; opacity: 0.14; }
.rl-bg-item--1 { top: 60px; left: -20px; }
.rl-bg-item--2 { bottom: 90px; right: 4%; transform: rotate(-20deg); }
.rl-bg-item--3 { top: 42%; right: 8%; }

.rl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 30px;
  background: #F5FBFA;
  border-bottom: 1px solid #EAF3FA;
  flex-shrink: 0;
}
.rl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 17px;
  color: #10646B;
}
.rl-brand-logo { height: 22px; width: auto; display: block; margin-right: -4px; }

.rl-stage-label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4B8B92;
  background: transparent;
  padding: 6px 0;
  white-space: nowrap;
  flex-shrink: 0;
}

.rl-missing {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #4B8B92;
  text-align: center;
  margin-top: 60px;
}

.rl-stage {
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 1cm;
}

.rl-deck {
  position: relative;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border: 1px solid #D3EDE9;
  border-radius: 16px;
  box-shadow: 0 30px 70px rgba(16,100,107,0.2), 0 2px 0 rgba(255,255,255,0.6) inset;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: rl-slide-in 0.2s ease;
}
@keyframes rl-slide-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.rl-deck-body { flex: 1; min-height: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 14px 34px; }
.rl-deck-inner { width: 100%; }
.rl-slide-wrap { width: 100%; }
.rl-slide { display: flex; flex-direction: column; gap: 14px; width: 100%; }
.rl-slide--centered { align-items: center; justify-content: center; text-align: center; }

/* ── Highlighted heading, used on every slide ── */
.rl-h {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 26px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #4E8FE0 0%, #2F6491 100%);
  border-radius: 12px;
  padding: 8px 22px;
  margin: 0;
  line-height: 1.25;
  box-shadow: 0 10px 22px rgba(47,100,145,0.32);
}
.rl-h--cover { font-size: 38px; padding: 10px 28px; }
.rl-h .rl-pulse-icon { width: 15px; height: 15px; }
.rl-h--cover .rl-pulse-icon { width: 22px; height: 22px; }

/* ── Main question, used on Warm-up and Bounce -- bigger than a
   regular heading so it's the clear focal point of the slide ── */
.rl-question {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.25;
  color: #FFFFFF;
  background: linear-gradient(135deg, #4E8FE0 0%, #2F6491 100%);
  border-radius: 14px;
  padding: 14px 30px;
  margin: 0;
  max-width: 640px;
  box-shadow: 0 12px 26px rgba(47,100,145,0.32);
}
.rl-question .rl-pulse-icon { width: 20px; height: 20px; flex-shrink: 0; }
.rl-optional { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 15px; color: rgba(255,255,255,0.75); margin-left: 2px; }

.rl-subtitle {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4B8B92;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}
.rl-technique {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #3E7CB1;
}

.rl-eyebrow {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9FC6C2;
}

.rl-bubble {
  background: #EAF3FA;
  border: 1.5px solid #C9E0F0;
  border-radius: 16px;
  padding: 16px 24px;
  max-width: 560px;
}
.rl-bubble-role {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 10.5px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #3E7CB1;
  margin-bottom: 6px;
}
.rl-bubble-text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 19px;
  color: #10646B;
  margin: 0;
}

.rl-help-btn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #3E7CB1;
  background: #EAF3FA;
  border: 1px solid #C9E0F0;
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
}
.rl-help-text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #3E7CB1;
  margin: 0;
}

/* ── Nav row ── */
.rl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 34px 14px; border-top: 1px solid #EAF3FA; flex-shrink: 0; }
.rl-nav-btn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1F4448;
  background: #EAF3FA;
  border: 1px solid #D3EDE9;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.rl-nav-btn--primary { background: linear-gradient(135deg, #4E8FE0 0%, #2F6491 100%); color: #FFFFFF; border-color: transparent; box-shadow: 0 8px 18px rgba(47,100,145,0.3); }
.rl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.rl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.rl-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #D3EDE9; }
.rl-nav-dot.is-active { width: 16px; background: #3E7CB1; }


/* ── Two-column speaking slides: the prompt on the left, the teacher's
   writing space, beat ticks and timer on the right ── */
.rl-two { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; text-align: center; }
.rl-two-main { display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 0; }
.rl-two-side { display: flex; flex-direction: column; gap: 8px; min-width: 0; width: 100%; max-width: 540px; }
.rl-actions { display: flex; align-items: center; justify-content: center; gap: 12px; }
.rl-two-side-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 40px; }
.rl-question--sm { font-size: 26px; padding: 8px 22px; max-width: 100%; text-align: left; }
.rl-subtitle--left { text-align: center; }
.rl-two--tight { gap: 6px; }
.rl-two--tight .rl-subtitle { font-size: 14px; line-height: 1.4; }
.rl-two--tight .rl-bubble { padding: 8px 18px; }
.rl-two--tight .rl-bubble-text { font-size: 17px; }
.rl-two--tight .rl-bubble-role { margin-bottom: 2px; }

.rl-ans { display: flex; flex-direction: column; gap: 4px; text-align: left; }
.rl-ans-label { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #4B8B92; }
.rl-ans-box {
  width: 100%; resize: none; border: 1.5px solid #CFE6EC; border-radius: 12px; background: #F7FCFC;
  padding: 8px 12px; font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 14px; line-height: 1.45; color: #10646B;
}
.rl-ans-box:focus { outline: none; border-color: #4E8FE0; background: #fff; box-shadow: 0 0 0 3px rgba(78,143,224,0.18); }
.rl-ans-box::placeholder { color: #9BC3CB; }

.rl-beats { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; align-items: center; }
.rl-beats-count { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11.5px; color: #4B8B92; margin-left: 6px; }
.rl-beat {
  display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 14px; color: #2F6491;
  background: #fff; border: 1.5px solid #D3EDE9; border-radius: 999px; padding: 4px 13px 4px 8px; cursor: pointer; transition: all 0.12s ease;
}
.rl-beat-box { width: 16px; height: 16px; border-radius: 5px; border: 2px solid #9BC3CB; flex: none; position: relative; }
.rl-beat.is-hint { border-color: #E8544E; background: #FFEDEA; color: #C93F3A; }
.rl-beat.is-hint .rl-beat-box { border-color: #E8544E; }
.rl-beat.is-on { background: #E3F5EA; border-color: #2F9E58; color: #1F7A47; }
.rl-beat.is-on .rl-beat-box { background: #2F9E58; border-color: #2F9E58; }
.rl-beat.is-on .rl-beat-box::after { content: ""; position: absolute; left: 3px; top: 0; width: 4px; height: 8px; border: solid #fff; border-width: 0 2px 2px 0; transform: rotate(45deg); }
.rl-beat:focus-visible, .rl-timer:focus-visible, .rl-help-btn:focus-visible { outline: 3px solid #2F6491; outline-offset: 2px; }

.rl-timer {
  width: 38px; height: 38px; border-radius: 50%; border: none; padding: 0; cursor: pointer; flex: none;
  background: conic-gradient(#2F6491 var(--pct, 100%), #DCEEF6 0);
  display: flex; align-items: center; justify-content: center;
}
.rl-timer span { width: 29px; height: 29px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 11px; color: #2F6491; font-variant-numeric: tabular-nums; }
.rl-timer.is-running { box-shadow: 0 0 0 3px rgba(78,143,224,0.25); }
.rl-timer.is-done { background: #E8544E; }
.rl-timer.is-done span { color: #C93F3A; }

.rl-recap { width: 100%; max-width: 560px; display: flex; flex-direction: column; gap: 6px; margin-top: 4px; text-align: left; }
.rl-recap-row { display: grid; grid-template-columns: 1fr 1.4fr auto; gap: 12px; align-items: center; background: #F7FCFC; border: 1px solid #D3EDE9; border-radius: 10px; padding: 6px 12px; }
.rl-recap-q { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 13px; color: #2F6491; }
.rl-recap-a { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; color: #10646B; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; }
.rl-recap-b { font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 11px; color: #1F7A47; background: #E3F5EA; border-radius: 999px; padding: 2px 9px; }

@media (prefers-reduced-motion: reduce) { .rl-deck { animation: none; } .rl-beat { transition: none; } }
`;
