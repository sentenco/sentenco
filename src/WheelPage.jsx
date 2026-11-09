import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ConfirmDialog from "./ConfirmDialog";
import { dailyTopics, randomTopics } from "./wheelTopics";

const COLORS = ["#7C5CFC", "#FF8A4C", "#16BFAE", "#FFB648", "#FF6B8B", "#2B6FE0", "#3FCDAF", "#E4322B"];

const DEFAULT_TEXT = "Alex\nJordan\nSam\nCasey\nRiley\nMorgan";

const TIMER_PRESETS = [30, 60, 120, 300];
const PREP_SECONDS = 30;
const SPEAK_SECONDS = 60;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function pointAt(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(cx, cy, r, startAngle, endAngle) {
  const start = pointAt(cx, cy, r, startAngle);
  const end = pointAt(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.16, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch {
    // Web Audio unavailable -- the visual "Time's up" still shows.
  }
}

export default function WheelPage() {
  const { user } = useAuth();

  // "my" = the normal wheel with any words; "teens" / "adults" = daily impromptu speaking topics.
  const [mode, setMode] = useState("my");
  const [gender, setGender] = useState("any"); // "any", "b" (boy or man) or "g" (girl or woman)
  const [rawText, setRawText] = useState(DEFAULT_TEXT);
  const [topicSet, setTopicSet] = useState([]);
  const [topicShuffled, setTopicShuffled] = useState(false);
  const [usedTopics, setUsedTopics] = useState([]);
  const [removeWinner, setRemoveWinner] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const todayLabel = new Date().toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });

  const [savedLists, setSavedLists] = useState([]);
  const [savedLoading, setSavedLoading] = useState(false);
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [saveNameInput, setSaveNameInput] = useState("");
  const [savingList, setSavingList] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [timerDuration, setTimerDuration] = useState(60);
  const [timerRemaining, setTimerRemaining] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPhase, setTimerPhase] = useState("Speak");
  const speakQueueRef = useRef(0);
  const timerIntervalRef = useRef(null);

  const isTopics = mode !== "my";

  useEffect(() => {
    if (!user) { setSavedLists([]); return; }
    setSavedLoading(true);
    supabase
      .from("wheel_lists")
      .select("id, name, content, created_at")
      .eq("owner_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setSavedLists(data || []);
        setSavedLoading(false);
      });
  }, [user]);

  useEffect(() => {
    if (!timerRunning) return;
    timerIntervalRef.current = window.setInterval(() => {
      setTimerRemaining((prev) => (prev === null || prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => window.clearInterval(timerIntervalRef.current);
  }, [timerRunning]);

  // When the clock reaches zero: after prep time go straight into the speaking time, otherwise stop.
  useEffect(() => {
    if (timerRemaining !== 0) return;
    beep();
    if (speakQueueRef.current > 0) {
      const q = speakQueueRef.current;
      speakQueueRef.current = 0;
      setTimerPhase("Speak");
      setTimerDuration(q);
      setTimerRemaining(q);
    } else {
      setTimerRunning(false);
    }
  }, [timerRemaining]);

  function pickTimerDuration(sec) {
    speakQueueRef.current = 0;
    setTimerPhase("Speak");
    setTimerDuration(sec);
    setTimerRunning(false);
    setTimerRemaining(sec);
  }
  function pickPrepThenSpeak() {
    speakQueueRef.current = SPEAK_SECONDS;
    setTimerPhase("Prep");
    setTimerDuration(PREP_SECONDS);
    setTimerRunning(false);
    setTimerRemaining(PREP_SECONDS);
  }
  function startTimer() {
    if (timerRemaining === null || timerRemaining === 0) setTimerRemaining(timerDuration);
    setTimerRunning(true);
  }
  function pauseTimer() {
    setTimerRunning(false);
  }
  function resetTimer() {
    speakQueueRef.current = 0;
    setTimerPhase("Speak");
    setTimerRunning(false);
    setTimerRemaining(null);
  }

  async function saveCurrentList() {
    if (!user || !saveNameInput.trim() || !rawText.trim() || savingList) return;
    setSavingList(true);
    const { data, error } = await supabase
      .from("wheel_lists")
      .insert({ owner_id: user.id, name: saveNameInput.trim(), content: rawText })
      .select()
      .single();
    setSavingList(false);
    if (!error && data) {
      setSavedLists((prev) => [data, ...prev]);
      setSaveNameInput("");
      setShowSaveInput(false);
    }
  }

  function loadSavedList(list) {
    setRawText(list.content);
    setMode("my");
    clearWinner();
  }

  async function confirmDeleteList() {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    setDeleteTarget(null);
    setSavedLists((prev) => prev.filter((l) => l.id !== id));
    await supabase.from("wheel_lists").delete().eq("id", id);
  }

  function clearWinner() {
    setResult(null);
    setWinnerIndex(null);
  }

  function loadTopics(audience, shuffle, g = gender) {
    const set = shuffle ? randomTopics(audience, g, topicSet.map((t) => t.label)) : dailyTopics(audience, g);
    setTopicSet(set);
    setTopicShuffled(shuffle);
    setUsedTopics([]);
    setMode(audience);
    clearWinner();
  }

  function pickMode(next) {
    if (next === "my") { setMode("my"); clearWinner(); return; }
    loadTopics(next, false);
  }

  function pickGender(g) {
    setGender(g);
    if (isTopics) loadTopics(mode, false, g);
  }

  const words = useMemo(
    () => (isTopics ? topicSet.map((t) => t.label) : rawText.split("\n").map((w) => w.trim()).filter(Boolean)),
    [isTopics, topicSet, rawText]
  );

  const n = words.length;
  const sliceAngle = n > 0 ? 360 / n : 0;
  const cx = 200;
  const cy = 200;
  const r = 190;

  function handleTextChange(e) {
    setRawText(e.target.value);
    clearWinner();
  }

  const winnerPrompt = isTopics && winnerIndex !== null ? topicSet[winnerIndex]?.prompt : "";
  const winnerFontSize = result ? Math.max(22, Math.min(40, 560 / Math.max(result.length, 10))) : 40;

  function spin(forcedIndex) {
    if (spinning || n < 2) return;
    setSpinning(true);
    clearWinner();

    const targetIndex = typeof forcedIndex === "number" ? forcedIndex : Math.floor(Math.random() * n);
    const sliceCenter = targetIndex * sliceAngle + sliceAngle / 2;
    const jitterRange = sliceAngle * 0.6;
    const jitter = (Math.random() - 0.5) * jitterRange;

    const fullSpins = 5;
    const targetOffset = ((360 - sliceCenter - jitter) % 360 + 360) % 360;
    const nextRotation = rotation - (rotation % 360) + fullSpins * 360 + targetOffset;

    setRotation(nextRotation);
    window.setTimeout(() => {
      setSpinning(false);
      setResult(words[targetIndex]);
      setWinnerIndex(targetIndex);
      if (isTopics) {
        setUsedTopics((prev) => (prev.includes(words[targetIndex]) ? prev : [...prev, words[targetIndex]]));
      } else if (removeWinner) {
        // Take the winner off the wheel so nobody wins twice.
        window.setTimeout(() => {
          setRawText((text) => {
            const lines = text.split("\n");
            let seen = -1;
            const at = lines.findIndex((l) => l.trim() && ++seen === targetIndex);
            if (at < 0) return text;
            lines.splice(at, 1);
            return lines.join("\n");
          });
          setWinnerIndex(null);
        }, 900);
      }
    }, 4200);
  }

  const timerShown = timerRemaining === null ? timerDuration : timerRemaining;
  const timerPct = timerDuration > 0 ? Math.max(0, Math.min(100, (timerShown / timerDuration) * 100)) : 0;
  const timerWarn = timerPhase === "Speak" && timerRunning && timerShown <= 10;

  return (
    <div className="wp-shell">
      <style>{CSS}</style>

      <header className="wp-top">
        <div className="wp-brand">
          <span className="wp-eyebrow">Sentenco · Homeroom</span>
          <h1 className="wp-title">Spin the Wheel</h1>
        </div>
        <div className="wp-controls">
          <button type="button" className={`wp-pill ${mode === "teens" ? "is-active" : ""}`} onClick={() => pickMode("teens")}>Teens</button>
          <button type="button" className={`wp-pill ${mode === "adults" ? "is-active" : ""}`} onClick={() => pickMode("adults")}>Adults</button>
          <button type="button" className={`wp-pill ${mode === "my" ? "is-active" : ""}`} onClick={() => pickMode("my")}>My list</button>
          {isTopics && (
            <>
              <span className="wp-sep" />
              {[["any", "Any"], ["b", mode === "adults" ? "Man" : "Boy"], ["g", mode === "adults" ? "Woman" : "Girl"]].map(([code, text]) => (
                <button key={code} type="button" className={`wp-pill wp-pill--co ${gender === code ? "is-active" : ""}`} onClick={() => pickGender(code)}>{text}</button>
              ))}
            </>
          )}
        </div>
      </header>

      <main className="wp-main">
        <div className="wp-wheel-col">
          <div className="wp-wheel-wrap">
            <div className="wp-pointer" />
            <div
              className="wp-disc"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? "transform 4.2s cubic-bezier(0.12, 0.67, 0.1, 1)" : "none",
              }}
            >
              {n === 0 ? (
                <div className="wp-empty-disc">Add words to build your wheel</div>
              ) : (
                <svg viewBox="0 0 400 400" className="wp-svg">
                  {words.map((word, i) => {
                    const start = i * sliceAngle;
                    const end = (i + 1) * sliceAngle;
                    const mid = start + sliceAngle / 2;
                    const labelPos = pointAt(cx, cy, r * 0.6, mid);
                    // Text runs along the slice (from the centre outward), flipped on the left half so it never reads upside down.
                    const labelRotate = mid > 180 ? mid + 90 : mid - 90;
                    const label = word.length > 16 ? word.slice(0, 15) + "…" : word;
                    const fontSize = Math.max(9, Math.min(15, 130 / Math.max(n, 6), 200 / label.length));
                    const isWinner = i === winnerIndex;
                    return (
                      <g key={i} className={isWinner ? "wp-slice-winner" : undefined}>
                        <path
                          d={slicePath(cx, cy, r, start, end)}
                          fill={COLORS[i % COLORS.length]}
                          stroke={isWinner ? "#FF6B4A" : "#FFFFFF"}
                          strokeWidth={isWinner ? 5 : 2}
                        />
                        <text
                          x={labelPos.x}
                          y={labelPos.y}
                          fontSize={fontSize}
                          fill="#FFFFFF"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${labelRotate}, ${labelPos.x}, ${labelPos.y})`}
                          className="wp-slice-label"
                        >
                          {label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              )}
            </div>
            <button
              type="button"
              className="wp-hub"
              onClick={() => spin()}
              disabled={spinning || n < 2}
              title={n < 2 ? "Add at least 2 words to spin" : "Spin"}
            >
              <img src="/logo-sentenco.png" alt="" className="wp-hub-logo" />
              <span className="wp-hub-label">{spinning ? "…" : "SPIN"}</span>
            </button>
          </div>
        </div>

        <div className="wp-right">
          <section className="wp-winner" aria-live="polite">
            <span className="wp-winner-tag">{result ? (isTopics ? "Your topic" : "Winner") : "Ready"}</span>
            {result ? (
              <>
                <span className="wp-winner-name" style={{ fontSize: `${winnerFontSize}px` }}>{result}</span>
                {winnerPrompt && <p className="wp-winner-prompt">{winnerPrompt}</p>}
                {winnerPrompt && <p className="wp-winner-hint">Try: your opinion, two reasons, one example.</p>}
              </>
            ) : (
              <>
                <span className="wp-winner-name" style={{ fontSize: "34px" }}>{isTopics ? "Spin for a topic" : "Spin the wheel"}</span>
                <p className="wp-winner-prompt">
                  {n < 2 ? "Add at least 2 words to spin." : isTopics ? "Today's eight topics are below. The winner shows here in large type." : "The winner shows here in large type."}
                </p>
              </>
            )}
          </section>

          <section className="wp-timer">
            <div className="wp-timer-row">
              <div className="wp-timer-time">
                <span className="wp-timer-phase">{timerPhase}</span>
                <span className={`wp-timer-digits ${timerRemaining === 0 ? "is-done" : ""}`}>
                  {timerRemaining === 0 ? "Time's up" : formatTime(timerShown)}
                </span>
              </div>
              <div className="wp-timer-bar"><i style={{ width: `${timerPct}%`, background: timerWarn ? "#E4322B" : timerPhase === "Prep" ? "#16BFAE" : "#FF6B4A" }} /></div>
              {!timerRunning ? (
                <button type="button" className="wp-timer-go" onClick={startTimer}>Start</button>
              ) : (
                <button type="button" className="wp-timer-go" onClick={pauseTimer}>Pause</button>
              )}
              <button type="button" className="wp-timer-btn" onClick={resetTimer}>Reset</button>
            </div>
            <div className="wp-timer-presets">
              <button type="button" className="wp-timer-preset" onClick={pickPrepThenSpeak}>Prep 30s, then speak 60s</button>
              {TIMER_PRESETS.map((sec) => (
                <button
                  key={sec}
                  type="button"
                  className={`wp-timer-preset ${timerDuration === sec && timerPhase === "Speak" && timerRemaining === null ? "is-active" : ""}`}
                  onClick={() => pickTimerDuration(sec)}
                >
                  {sec < 60 ? `${sec}s` : `${sec / 60} min`}
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="wp-bottom">
        {isTopics ? (
          <div className="wp-strip-wrap">
            <span className="wp-strip-label">{topicShuffled ? "Extra set" : `Today, ${todayLabel}`}</span>
            <div className="wp-strip">
              {topicSet.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  className={`wp-chip ${winnerIndex === i ? "is-win" : ""} ${usedTopics.includes(t.label) && winnerIndex !== i ? "is-used" : ""}`}
                  onClick={() => spin(i)}
                  disabled={spinning}
                  title={t.prompt}
                >
                  <i style={{ background: COLORS[i % COLORS.length] }} />
                  {t.label}
                </button>
              ))}
              <button type="button" className="wp-chip wp-chip--action" onClick={() => loadTopics(mode, true)}>Shuffle</button>
              {topicShuffled && <button type="button" className="wp-chip wp-chip--action" onClick={() => loadTopics(mode, false)}>Today's set</button>}
            </div>
          </div>
        ) : (
          <div className="wp-editor">
            <div className="wp-editor-main">
              <textarea
                id="wp-words"
                className="wp-textarea"
                value={rawText}
                onChange={handleTextChange}
                placeholder={"One word or name per line\nAlex\nJordan"}
                spellCheck={false}
                aria-label="Words, one per line"
              />
              <div className="wp-editor-side">
                <span className="wp-count">{n} {n === 1 ? "slice" : "slices"}{n < 2 ? ", add at least 2" : ""}</span>
                <label className="wp-check">
                  <input type="checkbox" checked={removeWinner} onChange={(e) => setRemoveWinner(e.target.checked)} />
                  Remove winner after each spin
                </label>
              </div>
            </div>
            <div className="wp-saved">
              <span className="wp-strip-label">Saved lists</span>
              {user ? (
                <>
                  {savedLoading && <span className="wp-saved-empty">Loading…</span>}
                  {!savedLoading && savedLists.length === 0 && <span className="wp-saved-empty">None yet.</span>}
                  {savedLists.map((l) => (
                    <span key={l.id} className="wp-saved-chip">
                      <button type="button" className="wp-saved-name" onClick={() => loadSavedList(l)}>{l.name}</button>
                      <button type="button" className="wp-saved-del" onClick={() => setDeleteTarget(l)} title="Delete list" aria-label={`Delete ${l.name}`}>×</button>
                    </span>
                  ))}
                  {showSaveInput ? (
                    <span className="wp-save-row">
                      <input
                        type="text"
                        className="wp-save-input"
                        placeholder="Name this list…"
                        value={saveNameInput}
                        onChange={(e) => setSaveNameInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && saveCurrentList()}
                        autoFocus
                      />
                      <button type="button" className="wp-chip wp-chip--action" onClick={saveCurrentList} disabled={savingList || !saveNameInput.trim()}>
                        {savingList ? "…" : "Save"}
                      </button>
                    </span>
                  ) : (
                    <button type="button" className="wp-chip wp-chip--action" onClick={() => setShowSaveInput(true)}>+ Save current</button>
                  )}
                </>
              ) : (
                <span className="wp-saved-empty">Log in to save and reuse your lists.</span>
              )}
            </div>
          </div>
        )}
      </footer>

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete this list?"
        message={deleteTarget ? `"${deleteTarget.name}" will be gone for good.` : ""}
        confirmLabel="Delete"
        onConfirm={confirmDeleteList}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.wp-shell {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 26px 20px;
  background: #FBF4F1;
  font-family: 'Inter', sans-serif;
  color: #1B2A4A;
}
.wp-shell * { box-sizing: border-box; }

.wp-top { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
.wp-eyebrow { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #FF6B4A; }
.wp-title { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 600; color: #1B2A4A; margin: 2px 0 0; }
.wp-controls { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.wp-pill {
  font-family: inherit; font-size: 13.5px; font-weight: 700; color: #1B2A4A; background: #FFFFFF;
  border: 1px solid #EDE1DB; border-radius: 12px; padding: 10px 20px; cursor: pointer;
}
.wp-pill:hover { border-color: #FF6B4A; }
.wp-pill.is-active { background: #1B2A4A; border-color: #1B2A4A; color: #FFFFFF; }
.wp-pill--co.is-active { background: #FF6B4A; border-color: #FF6B4A; }
.wp-sep { width: 1px; height: 26px; background: #EDE1DB; margin: 0 4px; }

.wp-main {
  flex: 1;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 28px;
  align-items: center;
  min-height: 0;
}
.wp-wheel-col { display: flex; align-items: center; justify-content: center; padding-top: 10px; }
.wp-wheel-wrap {
  position: relative;
  width: clamp(240px, calc(100vh - 330px), 560px);
  aspect-ratio: 1;
}

.wp-pointer {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 26px solid #FF6B4A;
  z-index: 20;
  filter: drop-shadow(0 3px 4px rgba(0,0,0,0.25));
}
.wp-disc {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 18px 40px rgba(27,42,74,0.22);
  border: 6px solid #FFFFFF;
  overflow: hidden;
}
.wp-svg { width: 100%; height: 100%; display: block; }
.wp-slice-label { font-family: 'Inter', sans-serif; font-weight: 700; pointer-events: none; }
.wp-slice-winner path { filter: drop-shadow(0 0 6px rgba(255,107,74,0.9)); }
.wp-empty-disc {
  width: 100%; height: 100%; border-radius: 50%; background: #F5F1ED;
  display: flex; align-items: center; justify-content: center; text-align: center;
  padding: 40px; font-size: 14px; color: #5A6B92; font-weight: 600;
}
.wp-hub {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 15;
  width: 18%; aspect-ratio: 1; min-width: 70px; border-radius: 50%; background: #FFFFFF; border: none; padding: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  font-family: 'Fraunces', serif; color: #1B2A4A;
  box-shadow: 0 6px 16px rgba(27,42,74,0.28), inset 0 0 0 3px #FDECE5;
  cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.wp-hub:hover:not(:disabled) { transform: translate(-50%, -50%) scale(1.05); box-shadow: 0 8px 20px rgba(27,42,74,0.34), inset 0 0 0 3px #FDECE5; }
.wp-hub:active:not(:disabled) { transform: translate(-50%, -50%) scale(0.97); }
.wp-hub:disabled { cursor: default; opacity: 0.65; }
.wp-hub-logo { width: 38%; height: auto; object-fit: contain; display: block; }
.wp-hub-label { font-size: 12px; font-weight: 800; letter-spacing: 0.06em; color: #FF6B4A; }

.wp-right { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.wp-winner {
  position: relative; overflow: hidden; background: #1B2A4A; color: #FFFFFF; border-radius: 22px;
  padding: 22px 26px; min-height: 200px; display: flex; flex-direction: column; justify-content: center; gap: 6px;
  box-shadow: 0 18px 40px rgba(27,42,74,0.22);
}
.wp-winner::before {
  content: ""; position: absolute; right: -50px; top: -60px; width: 200px; height: 200px; border-radius: 50%;
  background: #FF6B4A; opacity: 0.14; pointer-events: none;
}
.wp-winner > * { position: relative; }
.wp-winner-tag { font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #FF6B4A; }
.wp-winner-name { font-family: 'Fraunces', serif; font-weight: 600; color: #FFFFFF; line-height: 1.15; overflow-wrap: break-word; }
.wp-winner-prompt { margin: 0; font-size: 17px; line-height: 1.5; color: #E4E9F5; }
.wp-winner-hint { margin: 4px 0 0; font-size: 13px; color: #9FB0D6; }
.wp-winner-name, .wp-winner-prompt { animation: wp-rise 0.35s ease; }
@keyframes wp-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.wp-timer { background: #FFFFFF; border: 1px solid #EDE1DB; border-radius: 16px; padding: 12px 16px; }
.wp-timer-row { display: flex; align-items: center; gap: 14px; }
.wp-timer-time { display: flex; flex-direction: column; min-width: 96px; }
.wp-timer-phase { font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #5A6B92; }
.wp-timer-digits { font-family: 'Fraunces', serif; font-weight: 600; font-size: 32px; line-height: 1.1; color: #1B2A4A; white-space: nowrap; }
.wp-timer-digits.is-done { color: #E4322B; font-size: 24px; animation: wp-timer-pulse 0.8s ease-in-out infinite; }
@keyframes wp-timer-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
.wp-timer-bar { flex: 1; height: 9px; border-radius: 999px; background: #FBF4F1; overflow: hidden; min-width: 40px; }
.wp-timer-bar i { display: block; height: 100%; border-radius: 999px; transition: width 1s linear, background 0.3s; }
.wp-timer-go {
  font-family: inherit; font-size: 13px; font-weight: 800; color: #FFFFFF; background: #FF6B4A;
  border: none; border-radius: 10px; padding: 9px 20px; cursor: pointer;
}
.wp-timer-btn {
  font-family: inherit; font-size: 13px; font-weight: 700; color: #1B2A4A; background: #FFFFFF;
  border: 1px solid #EDE1DB; border-radius: 10px; padding: 8px 14px; cursor: pointer;
}
.wp-timer-presets { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.wp-timer-preset {
  font-family: inherit; font-size: 12px; font-weight: 700; color: #5A6B92; background: #FBF4F1;
  border: 1px solid #EDE1DB; border-radius: 8px; padding: 6px 12px; cursor: pointer;
}
.wp-timer-preset:hover { border-color: #FF6B4A; }
.wp-timer-preset.is-active { background: #1B2A4A; border-color: #1B2A4A; color: #FFFFFF; }

.wp-bottom { min-height: 56px; }
.wp-strip-wrap { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.wp-strip-label { font-size: 11px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; color: #5A6B92; }
.wp-strip { display: flex; gap: 8px; flex-wrap: wrap; }
.wp-chip {
  display: inline-flex; align-items: center; gap: 7px; font-family: inherit; font-size: 13px; font-weight: 600; color: #1B2A4A;
  background: #FFFFFF; border: 1px solid #EDE1DB; border-radius: 999px; padding: 7px 14px; cursor: pointer;
}
.wp-chip i { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
.wp-chip:hover:not(:disabled) { border-color: #FF6B4A; }
.wp-chip.is-win { border-color: #FF6B4A; background: #FDECE5; font-weight: 800; }
.wp-chip.is-used { opacity: 0.5; }
.wp-chip:disabled { cursor: default; }
.wp-chip--action { color: #FF6B4A; background: #FDECE5; border-color: transparent; font-weight: 800; }

.wp-editor { display: flex; flex-direction: column; gap: 10px; }
.wp-editor-main { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 16px; align-items: center; }
.wp-textarea {
  width: 100%; height: 84px; resize: none; font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.5; color: #1B2A4A;
  background: #FFFFFF; border: 1px solid #EDE1DB; border-radius: 14px; padding: 10px 14px; outline: none;
}
.wp-textarea:focus { border-color: #FF6B4A; }
.wp-editor-side { display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: #5A6B92; }
.wp-count { font-weight: 600; }
.wp-check { display: flex; align-items: center; gap: 8px; cursor: pointer; white-space: nowrap; font-weight: 600; }
.wp-saved { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.wp-saved-empty { font-size: 12.5px; color: #5A6B92; }
.wp-saved-chip { display: inline-flex; align-items: center; background: #FFFFFF; border: 1px solid #EDE1DB; border-radius: 999px; overflow: hidden; }
.wp-saved-name { font-family: inherit; font-size: 13px; font-weight: 600; color: #1B2A4A; background: none; border: none; padding: 7px 8px 7px 14px; cursor: pointer; }
.wp-saved-name:hover { color: #FF6B4A; }
.wp-saved-del { font-size: 16px; line-height: 1; color: #A6ADC7; background: none; border: none; padding: 0 12px 0 4px; cursor: pointer; }
.wp-saved-del:hover { color: #E4322B; }
.wp-save-row { display: inline-flex; align-items: center; gap: 6px; }
.wp-save-input { font-family: inherit; font-size: 13px; color: #1B2A4A; background: #FFFFFF; border: 1px solid #EDE1DB; border-radius: 999px; padding: 7px 14px; outline: none; width: 170px; }
.wp-save-input:focus { border-color: #FF6B4A; }

@media (max-width: 820px) {
  .wp-shell { padding: 14px 14px 18px; }
  .wp-main { grid-template-columns: 1fr; gap: 16px; }
  .wp-wheel-wrap { width: min(86vw, 420px); }
  .wp-editor-main { grid-template-columns: 1fr; }
  .wp-timer-row { flex-wrap: wrap; }
}
`;
