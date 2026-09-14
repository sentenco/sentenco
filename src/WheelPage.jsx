import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ConfirmDialog from "./ConfirmDialog";

const COLORS = ["#7C5CFC", "#FF8A4C", "#16BFAE", "#FFB648", "#FF6B8B", "#2B6FE0", "#3FCDAF", "#E4322B"];

const DEFAULT_TEXT = "Alex\nJordan\nSam\nCasey\nRiley\nMorgan";

const TIMER_PRESETS = [30, 60, 120, 300];

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

export default function WheelPage() {
  const { user } = useAuth();
  const [rawText, setRawText] = useState(DEFAULT_TEXT);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const spinCountRef = useRef(0);

  const [savedLists, setSavedLists] = useState([]);
  const [savedLoading, setSavedLoading] = useState(false);
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [saveNameInput, setSaveNameInput] = useState("");
  const [savingList, setSavingList] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [timerDuration, setTimerDuration] = useState(60);
  const [timerRemaining, setTimerRemaining] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerIntervalRef = useRef(null);

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
      setTimerRemaining((prev) => {
        if (prev === null || prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timerIntervalRef.current);
  }, [timerRunning]);

  useEffect(() => {
    if (timerRemaining !== 0) return;
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
      // Web Audio unavailable -- the visual "Time's Up!" badge still shows.
    }
  }, [timerRemaining]);

  function pickTimerDuration(sec) {
    setTimerDuration(sec);
    setTimerRunning(false);
    setTimerRemaining(sec);
  }
  function startTimer() {
    if (timerRemaining === null || timerRemaining === 0) setTimerRemaining(timerDuration);
    setTimerRunning(true);
  }
  function pauseTimer() {
    setTimerRunning(false);
  }
  function resetTimer() {
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
    setResult(null);
    setWinnerIndex(null);
  }

  async function confirmDeleteList() {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    setDeleteTarget(null);
    setSavedLists((prev) => prev.filter((l) => l.id !== id));
    await supabase.from("wheel_lists").delete().eq("id", id);
  }

  const words = useMemo(
    () => rawText.split("\n").map((w) => w.trim()).filter(Boolean),
    [rawText]
  );

  const n = words.length;
  const sliceAngle = n > 0 ? 360 / n : 0;
  const cx = 200;
  const cy = 200;
  const r = 190;

  function handleTextChange(e) {
    setRawText(e.target.value);
    setResult(null);
    setWinnerIndex(null);
  }

  const winnerFontSize = result ? Math.max(18, Math.min(44, 620 / Math.max(result.length, 8))) : 44;

  function spin() {
    if (spinning || n < 2) return;
    setSpinning(true);
    setResult(null);
    setWinnerIndex(null);

    const targetIndex = Math.floor(Math.random() * n);
    const sliceCenter = targetIndex * sliceAngle + sliceAngle / 2;
    const jitterRange = sliceAngle * 0.6;
    const jitter = (Math.random() - 0.5) * jitterRange;

    spinCountRef.current += 1;
    const fullSpins = 5;
    const targetOffset = ((360 - sliceCenter - jitter) % 360 + 360) % 360;
    const nextRotation = rotation - (rotation % 360) + fullSpins * 360 + targetOffset;

    setRotation(nextRotation);
    window.setTimeout(() => {
      setSpinning(false);
      setResult(words[targetIndex]);
      setWinnerIndex(targetIndex);
    }, 4200);
  }

  return (
    <div className="wp-shell">
      <style>{CSS}</style>

      <div className="wp-panel-zone">
        <div className="wp-panel-tab">
          <span className="wp-panel-tab-icon">📝</span>
          <span className="wp-panel-tab-text">Words</span>
        </div>

        <div className="wp-panel">
          <div className="wp-panel-head">
            <span className="wp-eyebrow">Sentivo · Homeroom</span>
            <h1 className="wp-title">Spin the Wheel</h1>
            <p className="wp-blurb">Paste your list, one item per line. Each line becomes a slice.</p>
          </div>

          <label className="wp-label" htmlFor="wp-words">Words</label>
          <textarea
            id="wp-words"
            className="wp-textarea"
            value={rawText}
            onChange={handleTextChange}
            placeholder={"Alex\nJordan\nSam\n..."}
            spellCheck={false}
          />
          <div className="wp-count">{n} {n === 1 ? "slice" : "slices"}{n < 2 ? " — add at least 2" : ""}</div>

          {user ? (
            <div className="wp-saved-section">
              <div className="wp-saved-head">
                <span className="wp-label" style={{ marginBottom: 0 }}>Saved Lists</span>
                <button type="button" className="wp-save-toggle" onClick={() => setShowSaveInput((s) => !s)}>
                  + Save current
                </button>
              </div>
              {showSaveInput && (
                <div className="wp-save-row">
                  <input
                    type="text"
                    className="wp-save-input"
                    placeholder="Name this list…"
                    value={saveNameInput}
                    onChange={(e) => setSaveNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveCurrentList()}
                    autoFocus
                  />
                  <button type="button" className="wp-save-confirm" onClick={saveCurrentList} disabled={savingList || !saveNameInput.trim()}>
                    {savingList ? "…" : "Save"}
                  </button>
                </div>
              )}
              <div className="wp-saved-list">
                {savedLoading ? (
                  <div className="wp-saved-empty">Loading…</div>
                ) : savedLists.length === 0 ? (
                  <div className="wp-saved-empty">No saved lists yet.</div>
                ) : (
                  savedLists.map((l) => (
                    <div key={l.id} className="wp-saved-item">
                      <button type="button" className="wp-saved-item-name" onClick={() => loadSavedList(l)}>{l.name}</button>
                      <button type="button" className="wp-saved-item-del" onClick={() => setDeleteTarget(l)} title="Delete list">×</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <p className="wp-login-hint">Log in to save and reuse your topic lists.</p>
          )}

          <div className="wp-timer-section">
            <span className="wp-label">Timer</span>
            <div className="wp-timer-display">{formatTime(timerRemaining === null ? timerDuration : timerRemaining)}</div>
            <div className="wp-timer-presets">
              {TIMER_PRESETS.map((sec) => (
                <button
                  key={sec}
                  type="button"
                  className={`wp-timer-preset ${timerDuration === sec && timerRemaining === null ? "is-active" : ""}`}
                  onClick={() => pickTimerDuration(sec)}
                >
                  {sec < 60 ? `${sec}s` : `${sec / 60}m`}
                </button>
              ))}
            </div>
            <div className="wp-timer-controls">
              {!timerRunning ? (
                <button type="button" className="wp-timer-btn wp-timer-btn--start" onClick={startTimer}>▶ Start</button>
              ) : (
                <button type="button" className="wp-timer-btn" onClick={pauseTimer}>⏸ Pause</button>
              )}
              <button type="button" className="wp-timer-btn" onClick={resetTimer}>Reset</button>
            </div>
          </div>
        </div>
      </div>

      <div className="wp-stage">
        {timerRemaining !== null && (
          <div className={`wp-timer-badge ${timerRemaining === 0 ? "is-done" : ""} ${timerRunning ? "is-running" : ""}`}>
            {timerRemaining === 0 ? "⏰ Time's Up!" : formatTime(timerRemaining)}
          </div>
        )}
        {result && (
          <div className="wp-winner-banner">
            <span className="wp-winner-tag">Winner</span>
            <span className="wp-winner-name" style={{ fontSize: `${winnerFontSize}px` }}>🎉 {result}</span>
          </div>
        )}

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
                  const labelPos = pointAt(cx, cy, r * 0.62, mid);
                  let labelRotate = mid;
                  if (labelRotate > 90 && labelRotate < 270) labelRotate += 180;
                  const fontSize = Math.max(9, Math.min(15, 130 / Math.max(n, 6)));
                  const label = word.length > 16 ? word.slice(0, 15) + "…" : word;
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
            onClick={spin}
            disabled={spinning || n < 2}
            title={n < 2 ? "Add at least 2 words to spin" : "Spin"}
          >
            <img src="/logo-sentivo.png" alt="" className="wp-hub-logo" />
            <span className="wp-hub-label">{spinning ? "…" : "SPIN"}</span>
          </button>
        </div>
      </div>

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
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  background: #FBF4F1;
  font-family: 'Inter', sans-serif;
}
.wp-shell * { box-sizing: border-box; }

.wp-panel-zone {
  position: relative;
  flex-shrink: 0;
  width: 54px;
  height: 100%;
  z-index: 30;
}

.wp-panel-tab {
  position: absolute;
  inset: 0;
  width: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #FFFFFF;
  border-right: 1px solid #EDE1DB;
  cursor: default;
  transition: opacity 0.15s ease;
}
.wp-panel-tab-icon { font-size: 18px; }
.wp-panel-tab-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FF6B4A;
}
.wp-panel-zone:hover .wp-panel-tab { opacity: 0; pointer-events: none; }

.wp-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 100%;
  overflow-y: auto;
  padding: 26px 24px;
  background: #FFFFFF;
  border-right: 1px solid #EDE1DB;
  box-shadow: 12px 0 30px rgba(27,42,74,0.14);
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.22s ease, opacity 0.18s ease;
}
.wp-panel-zone:hover .wp-panel {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.wp-panel-head { margin-bottom: 18px; }
.wp-eyebrow {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FF6B4A;
  background: #FDECE5;
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 10px;
}
.wp-title { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 600; color: #1B2A4A; margin: 0 0 6px; }
.wp-blurb { font-size: 12.5px; line-height: 1.5; color: #5A6B92; margin: 0; }

.wp-label { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #5A6B92; margin-bottom: 6px; }

.wp-textarea {
  flex: 1;
  min-height: 200px;
  resize: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1B2A4A;
  background: #FBF4F1;
  border: 1px solid #EDE1DB;
  border-radius: 12px;
  padding: 12px 14px;
  line-height: 1.7;
  outline: none;
}
.wp-textarea:focus { border-color: #FF6B4A; }

.wp-count { font-size: 11.5px; color: #5A6B92; margin: 8px 0 16px; }

.wp-login-hint { font-size: 12px; color: #5A6B92; background: #FBF4F1; border: 1px dashed #EDE1DB; border-radius: 10px; padding: 10px 12px; margin: 0 0 18px; }

.wp-saved-section { margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #EDE1DB; }
.wp-saved-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.wp-save-toggle {
  font-size: 11px; font-weight: 700; color: #FF6B4A; background: #FDECE5; border: none;
  border-radius: 999px; padding: 5px 11px; cursor: pointer;
}
.wp-save-row { display: flex; gap: 6px; margin-bottom: 10px; }
.wp-save-input {
  flex: 1; min-width: 0; font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 600; color: #1B2A4A;
  background: #FBF4F1; border: 1px solid #EDE1DB; border-radius: 8px; padding: 7px 10px; outline: none;
}
.wp-save-input:focus { border-color: #FF6B4A; }
.wp-save-confirm {
  font-size: 11.5px; font-weight: 800; color: #fff; background: #FF6B4A; border: none;
  border-radius: 8px; padding: 0 12px; cursor: pointer;
}
.wp-save-confirm:disabled { opacity: 0.5; cursor: default; }

.wp-saved-list { display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; }
.wp-saved-empty { font-size: 11.5px; color: #A6ADC7; padding: 4px 2px; }
.wp-saved-item {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  background: #FBF4F1; border: 1px solid #EDE1DB; border-radius: 8px; padding: 2px 4px 2px 10px;
}
.wp-saved-item-name {
  flex: 1; min-width: 0; text-align: left; background: none; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 700; color: #1B2A4A;
  padding: 7px 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.wp-saved-item-del {
  flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; border: none; background: transparent;
  color: #A6ADC7; font-size: 16px; line-height: 1; cursor: pointer;
}
.wp-saved-item-del:hover { background: #FDECE5; color: #E4322B; }

.wp-timer-section { display: flex; flex-direction: column; gap: 10px; }
.wp-timer-display {
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 34px; color: #1B2A4A; text-align: center;
  background: #FBF4F1; border: 1px solid #EDE1DB; border-radius: 12px; padding: 10px;
}
.wp-timer-presets { display: flex; gap: 6px; }
.wp-timer-preset {
  flex: 1; font-size: 12px; font-weight: 700; color: #5A6B92; background: #FBF4F1;
  border: 1px solid #EDE1DB; border-radius: 8px; padding: 7px 0; cursor: pointer;
}
.wp-timer-preset.is-active { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.wp-timer-controls { display: flex; gap: 8px; }
.wp-timer-btn {
  flex: 1; font-size: 12.5px; font-weight: 800; color: #1B2A4A; background: #fff;
  border: 1px solid #EDE1DB; border-radius: 8px; padding: 9px 0; cursor: pointer;
}
.wp-timer-btn--start { background: #FF6B4A; border-color: #FF6B4A; color: #fff; }

.wp-stage {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.wp-winner-banner {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 25;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: #1B2A4A;
  border: none;
  border-radius: 24px;
  padding: 14px 36px;
  box-shadow: 0 18px 40px rgba(27,42,74,0.32);
  animation: wp-pop-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  max-width: min(85vw, 620px);
}
.wp-winner-tag {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FF6B4A;
}
.wp-winner-name {
  font-family: 'Fraunces', serif;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.2;
  overflow-wrap: break-word;
  max-width: 100%;
}

@keyframes wp-pop-in {
  0% { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.85); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
}

.wp-timer-badge {
  position: absolute;
  top: 28px;
  left: 28px;
  z-index: 25;
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: 22px;
  color: #1B2A4A;
  background: #FFFFFF;
  border: 2px solid #EDE1DB;
  border-radius: 16px;
  padding: 10px 20px;
  box-shadow: 0 10px 24px rgba(27,42,74,0.16);
}
.wp-timer-badge.is-running { border-color: #FF6B4A; color: #FF6B4A; }
.wp-timer-badge.is-done {
  background: #E4322B; border-color: #E4322B; color: #fff; font-size: 18px;
  animation: wp-timer-pulse 0.8s ease-in-out infinite;
}
@keyframes wp-timer-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}

.wp-wheel-wrap {
  position: relative;
  width: min(70vh, 620px);
  height: min(70vh, 620px);
  max-width: 100%;
  max-height: 100%;
}

.wp-pointer {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 26px solid #1B2A4A;
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
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #F5F1ED;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  font-size: 14px;
  color: #5A6B92;
  font-weight: 600;
}

.wp-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: #FFFFFF;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-family: 'Fraunces', serif;
  color: #1B2A4A;
  box-shadow: 0 6px 16px rgba(27,42,74,0.28), inset 0 0 0 3px #FDECE5;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.wp-hub:hover:not(:disabled) {
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 8px 20px rgba(27,42,74,0.34), inset 0 0 0 3px #FDECE5;
}
.wp-hub:active:not(:disabled) {
  transform: translate(-50%, -50%) scale(0.97);
}
.wp-hub:disabled {
  cursor: default;
  opacity: 0.65;
}
.wp-hub-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
  display: block;
}
.wp-hub-label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #FF6B4A;
}

@media (max-width: 760px) {
  .wp-winner-banner { top: 12px; padding: 10px 20px; }
}
`;
