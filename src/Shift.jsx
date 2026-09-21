import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLesson, getTrack } from "./shiftTracks";

// SHIFT player, rebuilt around a single mechanic: a connected chain of
// in-character exchanges where the target tense stays hidden from the
// student. The teacher (not speech recognition) types what the student
// actually said out loud and marks it correct or wrong -- that judgment is
// what advances the scene. See shiftRestaurant1.js for the lesson shape.

function TopBar() {
  return (
    <div className="sh-topbar">
      <img src="/logo-sentivo.png" alt="" className="sh-brand-logo" />
      <span className="sh-brand-name">entenco</span>
    </div>
  );
}

function ProgressRow({ total, doneCount, currentIdx }) {
  return (
    <div className="sh-progress-row">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`sh-seg ${i < doneCount ? "is-done" : i === currentIdx ? "is-current" : ""}`}
        />
      ))}
    </div>
  );
}

function Avatar({ side, size, wrong }) {
  const src = side === "me" ? "/shift-avatar-me.png" : "/shift-avatar-them.png";
  return (
    <div className={`sh-avatar sh-avatar--${side}${size ? ` sh-avatar--${size}` : ""}${wrong ? " is-wrong" : ""}`}>
      <img src={src} alt="" className="sh-avatar-img" />
    </div>
  );
}

function HistoryLog({ rows, audience, roles }) {
  if (rows.length === 0) return null;

  if (audience === "adults") {
    const themLabel = roles?.them || "Them";
    const meLabel = roles?.me || "You";
    return (
      <div className="sh-itinerary">
        {rows.map((row, i) => (
          <div className="sh-i-block" key={i}>
            <div className="sh-i-row sh-i-row--them">
              <span className="sh-i-tag">{themLabel}</span>
              <span className="sh-i-line">{row.q}</span>
            </div>
            <div className="sh-i-row sh-i-row--me">
              <span className="sh-i-tag">{meLabel}</span>
              <span className="sh-i-line">{row.a}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="sh-history">
      {rows.map((row, i) => (
        <div className="sh-hist-row" key={i}>
          <div className="sh-bubble-line sh-bubble-line--them">
            <Avatar side="them" />
            <div className="sh-bubble sh-bubble--them">{row.q}</div>
          </div>
          <div className="sh-bubble-line sh-bubble-line--me">
            <div className="sh-bubble sh-bubble--me">{row.a}</div>
            <Avatar side="me" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ChainStage({ lesson, chainIdx, history, onAdvance, audience }) {
  const [attempt, setAttempt] = useState(0);
  const [clueOpen, setClueOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [display, setDisplay] = useState(null); // { text, isRight } | null, the most recent submitted attempt
  const [advancing, setAdvancing] = useState(false); // true only during the pause after a correct answer

  const step = lesson.chain[chainIdx];
  const isDone = chainIdx >= lesson.chain.length;

  if (isDone) return null;

  const avatarSide = display ? "me" : "them";
  const avatarWrong = display && !display.isRight;
  const lineText = display ? display.text : step.question;
  const lineClass = display && !display.isRight ? "sh-line is-wrong" : "sh-line";

  function submit(isRight) {
    const text = typed.trim() || "(no answer typed)";
    setDisplay({ text, isRight });
    if (isRight) {
      setAdvancing(true);
      window.setTimeout(() => {
        onAdvance(step.question, text);
        setAttempt(0);
        setClueOpen(false);
        setTyped("");
        setDisplay(null);
        setAdvancing(false);
      }, 900);
    } else {
      setAttempt((a) => a + 1);
      setTyped("");
    }
  }

  return (
    <>
      <HistoryLog rows={history} audience={audience} roles={lesson.roles} />
      <div className="sh-slide">
        {audience !== "adults" && <Avatar side={avatarSide} size="lg" wrong={avatarWrong} />}
        <div className={lineClass}>{lineText}</div>
      </div>

      {!advancing && (
        <div className="sh-compose">
          <div className="sh-clue-row">
            <button type="button" className="sh-clue-btn" onClick={() => setClueOpen((o) => !o)}>
              💡 Show clue
            </button>
            {clueOpen && (
              <div className="sh-clue-box" dangerouslySetInnerHTML={{ __html: step.clue }} />
            )}
          </div>
          <label className="sh-type-label">What did the student say?</label>
          <input
            type="text"
            className="sh-type-input"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Type it as you hear it..."
          />
          <div className="sh-teacher-buttons">
            <button type="button" className="sh-choice-btn sh-choice-btn--bad" onClick={() => submit(false)}>
              {attempt > 0 ? "Still wrong" : "✗ Wrong tense"}
            </button>
            <button type="button" className="sh-choice-btn sh-choice-btn--good" onClick={() => submit(true)}>
              ✓ Correct
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function HistoryModal({ rows, onClose, audience, roles }) {
  return (
    <div className="sh-hist-overlay" onClick={onClose}>
      <div className="sh-hist-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sh-hist-modal-head">
          <span>Your conversation</span>
          <button type="button" className="sh-hist-close" onClick={onClose}>✕</button>
        </div>
        <div className="sh-hist-modal-body">
          <HistoryLog rows={rows} audience={audience} roles={roles} />
        </div>
      </div>
    </div>
  );
}

function ChainCompleteStage({ history, onContinue, audience, roles }) {
  return (
    <div className="sh-prompt-stage">
      <span className="sh-prompt-eyebrow">Chain Complete</span>
      <div className="sh-chain-complete-history">
        <HistoryLog rows={history} audience={audience} roles={roles} />
      </div>
      <button type="button" className="sh-choice-btn sh-choice-btn--good sh-continue-btn" onClick={onContinue}>
        Continue to Unaided Retell →
      </button>
    </div>
  );
}

function PromptStage({ eyebrow, prompt, ctaLabel, onContinue }) {
  return (
    <div className="sh-prompt-stage">
      <span className="sh-prompt-eyebrow">{eyebrow}</span>
      <p className="sh-prompt-text">{prompt}</p>
      <button type="button" className="sh-choice-btn sh-choice-btn--good sh-continue-btn" onClick={onContinue}>
        {ctaLabel} →
      </button>
    </div>
  );
}

function WrapStage({ prompt }) {
  return (
    <div className="sh-prompt-stage">
      <span className="sh-prompt-eyebrow">Wrap</span>
      <p className="sh-prompt-text">{prompt}</p>
      <button type="button" className="sh-choice-btn sh-choice-btn--good sh-continue-btn" onClick={() => window.close()}>
        Finish lesson
      </button>
    </div>
  );
}

export default function Shift() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const track = getTrack(trackId);
  const audience = track?.audience?.includes("adults") ? "adults" : "teens";
  const [searchParams, setSearchParams] = useSearchParams();
  const STAGES = ["cover", "chain", "chainDone", "retell", "transfer", "wrap"];
  const [stage, setStage] = useState(() => {
    const fromUrl = searchParams.get("stage");
    return STAGES.includes(fromUrl) ? fromUrl : "cover";
  });
  const [chainIdx, setChainIdx] = useState(() => {
    const n = Number(searchParams.get("chain"));
    return Number.isInteger(n) && n >= 0 ? n : 0;
  });
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Mirror stage + chain position into the URL so a refresh mid-lesson
  // lands back near the same spot instead of the cover. The typed-answer
  // history itself can't reasonably survive a refresh (freeform text, not
  // a simple index), so only the reader's position in the flow persists.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    next.set("stage", stage);
    if (stage === "chain" && chainIdx > 0) next.set("chain", String(chainIdx));
    else next.delete("chain");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, chainIdx]);

  if (!lesson) {
    return (
      <div className="sh-shell">
        <style>{CSS}</style>
        <div className="sh-stage">
          <p className="sh-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  function advanceChain(question, answer) {
    setHistory((prev) => [...prev, { q: question, a: answer }]);
    const next = chainIdx + 1;
    if (next >= lesson.chain.length) {
      setStage("chainDone");
    } else {
      setChainIdx(next);
    }
  }

  return (
    <div className={`sh-shell sh-theme-${audience}`}>
      <style>{CSS}</style>

      <div className="sh-stage">
        <div className="sh-panel">
          <TopBar />
          <div className="sh-hero">
            {audience === "teens" && (
              <div className="sh-bulb-row">
                {Array.from({ length: 9 }, (_, i) => (
                  <span key={i} className={`sh-bulb${i % 2 === 0 ? " on" : ""}`} />
                ))}
              </div>
            )}
            <div className="sh-hero-eyebrow">
              {audience === "adults"
                ? `Scenario ${String(lessonNum).padStart(2, "0")} — ${track.title}`
                : "Now Showing"}
            </div>
            <div className="sh-hero-title">{lesson.scene.title}</div>
            <div className="sh-hero-sub">{lesson.scene.context}</div>
          </div>

          {stage !== "cover" && track && (
            <>
              <div className="sh-stub">
                <div className="sh-stub-field">
                  <div className="sh-stub-field-label">Track</div>
                  <div className="sh-stub-field-value">{track.title}</div>
                </div>
                <div className="sh-stub-field">
                  <div className="sh-stub-field-label">Level</div>
                  <div className="sh-stub-field-value">{track.level}</div>
                </div>
                <div className="sh-stub-field">
                  <div className="sh-stub-field-label">{audience === "adults" ? "Exchange" : "Scene"}</div>
                  <div className="sh-stub-field-value">
                    {String(Math.min(chainIdx + 1, lesson.chain.length)).padStart(2, "0")}/
                    {String(lesson.chain.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
              <div className="sh-perforation" />
            </>
          )}

          {stage !== "cover" && (
            <ProgressRow total={lesson.chain.length} doneCount={history.length} currentIdx={chainIdx} />
          )}

          {stage !== "cover" && stage !== "chain" && stage !== "chainDone" && history.length > 0 && (
            <div className="sh-review-row">
              <button type="button" className="sh-review-btn" onClick={() => setShowHistory(true)}>
                💬 Review your conversation
              </button>
            </div>
          )}

          {stage === "cover" && (
            <PromptStage
              eyebrow={`${lesson.code} · ${lesson.tenses}`}
              prompt={lesson.scenarioSet.say}
              ctaLabel="Begin"
              onContinue={() => setStage("chain")}
            />
          )}

          {stage === "chain" && (
            <ChainStage lesson={lesson} chainIdx={chainIdx} history={history} onAdvance={advanceChain} audience={audience} />
          )}

          {stage === "chainDone" && (
            <ChainCompleteStage history={history} onContinue={() => setStage("retell")} audience={audience} roles={lesson.roles} />
          )}

          {stage === "retell" && (
            <PromptStage eyebrow="Unaided Retell" prompt={lesson.retell.prompt} ctaLabel="Continue to Transfer" onContinue={() => setStage("transfer")} />
          )}

          {stage === "transfer" && (
            <PromptStage eyebrow="Transfer" prompt={lesson.transfer.question} ctaLabel="Continue to Wrap" onContinue={() => setStage("wrap")} />
          )}

          {stage === "wrap" && <WrapStage prompt={lesson.wrap.prompt} />}
        </div>
      </div>

      {showHistory && (
        <HistoryModal rows={history} onClose={() => setShowHistory(false)} audience={audience} roles={lesson.roles} />
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

:root { color-scheme: light; }

.sh-shell {
  width: 100%;
  min-height: 100vh;
  background: #F5EDE1;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 1cm;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sh-shell * { box-sizing: border-box; }

.sh-missing { text-align: center; color: #5A6B92; margin-top: 60px; }

.sh-topbar { display: flex; align-items: center; gap: 6px; padding: 16px 18px 0; }
.sh-brand-logo { height: 20px; width: auto; display: block; }
.sh-brand-name { font-weight: 800; font-size: 14px; color: #1B2A4A; }

.sh-stage { width: 100%; max-width: 640px; margin: 0 auto; }

.sh-panel {
  background: #FFFCF5; border-radius: 26px; overflow: hidden;
  box-shadow: 0 20px 44px rgba(200,16,46,0.14); border: 1px solid #EFE1C4;
}

.sh-hero {
  margin: 18px 18px 0; background: #1B2A4A; border-radius: 18px; padding: 16px 20px 16px;
  position: relative; overflow: hidden;
}
.sh-bulb-row { display: flex; gap: 6px; justify-content: center; margin-bottom: 10px; }
.sh-bulb { width: 6px; height: 6px; border-radius: 50%; background: #3A4A70; display: block; }
.sh-bulb.on { background: #E8A93B; box-shadow: 0 0 6px rgba(232,169,59,0.8); }
.sh-hero-eyebrow {
  font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  color: #E8A93B; text-align: center; margin-bottom: 4px;
}
.sh-hero-title {
  font-family: 'Anton', sans-serif; font-weight: 400; font-size: clamp(18px, 3vw, 22px); text-transform: uppercase; letter-spacing: 0.02em;
  color: #FFFFFF; text-align: center; position: relative;
}
.sh-hero-sub { font-size: 12px; color: #B9C4DC; margin-top: 4px; position: relative; text-align: center; font-weight: 600; }

.sh-stub { display: flex; justify-content: center; gap: 26px; background: #1B2A4A; padding: 0 20px 16px; margin: 0 18px; }
.sh-stub-field-label { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; color: #7488A8; text-align: center; margin-bottom: 2px; }
.sh-stub-field-value { font-family: 'Anton', sans-serif; font-weight: 400; font-size: 13px; color: #FFFFFF; text-align: center; letter-spacing: 0.03em; }

.sh-perforation { position: relative; height: 0; margin: 0 18px; border-top: 2px dashed #E8D9B8; }
.sh-perforation::before, .sh-perforation::after {
  content: ""; position: absolute; top: -11px; width: 22px; height: 22px; border-radius: 50%; background: #F5EDE1;
}
.sh-perforation::before { left: -29px; }
.sh-perforation::after { right: -29px; }

.sh-progress-row { display: flex; gap: 4px; padding: 16px 22px 4px; }
.sh-seg { flex: 1; height: 4px; border-radius: 2px; background: #F0E4C8; transition: background 0.25s ease; }
.sh-seg.is-done { background: #C8102E; }
.sh-seg.is-current { background: #E8A93B; }

.sh-avatar {
  width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center;
  justify-content: center; overflow: hidden; background: #F0E4C8; border: 1.5px solid #1B2A4A;
}
.sh-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sh-avatar--me { background: #FBEAD2; }
.sh-avatar--lg { width: 48px; height: 48px; margin-bottom: 10px; border-width: 2px; }
.sh-avatar--lg.is-wrong { box-shadow: 0 0 0 3px rgba(200,16,46,0.45); }

.sh-history { display: flex; flex-direction: column; gap: 10px; padding: 16px 22px 4px; }
.sh-hist-row { display: flex; flex-direction: column; gap: 6px; padding-bottom: 10px; border-bottom: 1px dashed #EFE1C4; }
.sh-bubble-line { display: flex; align-items: flex-end; gap: 8px; }
.sh-bubble-line--them { justify-content: flex-start; }
.sh-bubble-line--me { justify-content: flex-end; }
.sh-bubble {
  font-size: 14.5px; line-height: 1.4; padding: 8px 13px; border-radius: 12px; max-width: 78%;
  font-family: 'Inter', sans-serif; font-style: italic; font-weight: 600; border: 1.5px solid #EFE1C4;
}
.sh-bubble--them { background: #FFFCF5; color: #1B2A4A; border-bottom-left-radius: 4px; }
.sh-bubble--me { background: #FBEAD2; color: #1B2A4A; border-color: #E8A93B; border-bottom-right-radius: 4px; }

.sh-slide {
  background: #1B2A4A; margin: 14px auto; border-radius: 14px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; padding: 18px 24px; text-align: center; position: relative;
  box-shadow: 0 10px 22px rgba(27,42,74,0.22); width: fit-content; max-width: calc(100% - 36px);
}
.sh-slide::before {
  content: ""; position: absolute; inset: 6px; border-radius: 8px; border: 2px dotted rgba(232,169,59,0.5); pointer-events: none;
}
.sh-line {
  font-family: 'Anton', sans-serif; font-weight: 400; font-size: clamp(16px, 2.6vw, 19px); text-transform: uppercase;
  letter-spacing: 0.01em; line-height: 1.3; color: #FFFFFF; max-width: 400px; position: relative;
}
.sh-line.is-wrong { color: #F4A6B3; }

.sh-compose { background: #FFFCF5; border-top: 1px dashed #EFE1C4; padding: 16px 22px 20px; margin: 0 18px 18px; border-radius: 0 0 18px 18px; }
.sh-clue-row { text-align: center; margin-bottom: 10px; }
.sh-clue-btn { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #C8102E; background: none; border: none; cursor: pointer; padding: 0; }
.sh-clue-box { margin-top: 6px; font-size: 12px; color: #1B2A4A; background: #FBEAD2; border-radius: 8px; padding: 8px 10px; display: inline-block; }
.sh-clue-box b { font-weight: 800; }
.sh-type-label { display: block; text-align: center; font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #A99B78; font-family: 'IBM Plex Mono', monospace; margin-bottom: 8px; }
.sh-type-input {
  width: 100%; font-family: 'Inter', sans-serif; font-size: 14px; color: #1B2A4A; text-align: center;
  background: #FFFFFF; border: 1.5px solid #EFE1C4; border-radius: 12px; padding: 10px 14px; outline: none; margin-bottom: 12px;
}
.sh-type-input:focus { border-color: #1B2A4A; }
.sh-teacher-buttons { display: flex; gap: 8px; justify-content: center; }
.sh-choice-btn {
  font-family: 'Anton', sans-serif; font-weight: 400; font-size: 12px; letter-spacing: 0.02em; text-transform: uppercase;
  border-radius: 999px; padding: 9px 20px; cursor: pointer;
  border: 2px solid #1B2A4A; background: #FFFFFF; color: #1B2A4A;
}
.sh-choice-btn--bad:hover { border-color: #C8102E; color: #C8102E; }
.sh-choice-btn--good { background: #C8102E; border-color: #C8102E; color: #FFFFFF; }

.sh-review-row { display: flex; justify-content: center; padding: 10px 22px 0; }
.sh-review-btn {
  font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 0.02em; color: #1B2A4A;
  background: #FBEAD2; border: 1.5px solid #E8A93B; border-radius: 999px; padding: 8px 16px; cursor: pointer;
  display: inline-flex; align-items: center; gap: 6px;
}
.sh-review-btn:hover { background: #F6DFB4; }

.sh-hist-overlay {
  position: fixed; inset: 0; background: rgba(27,42,74,0.55); display: flex; align-items: center; justify-content: center;
  z-index: 999; padding: 24px;
}
.sh-hist-modal {
  background: #FFFCF5; border-radius: 22px; max-width: 480px; width: 100%; max-height: 80vh; display: flex; flex-direction: column;
  box-shadow: 0 30px 60px rgba(0,0,0,0.32); overflow: hidden;
}
.sh-hist-modal-head {
  display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; background: #1B2A4A; border-bottom: 1px solid #EFE1C4;
  font-family: 'Anton', sans-serif; font-weight: 400; font-size: 13px; letter-spacing: 0.02em; text-transform: uppercase; color: #FFFFFF;
}
.sh-hist-close { background: none; border: none; cursor: pointer; font-size: 16px; color: #E8A93B; line-height: 1; padding: 4px; }
.sh-hist-modal-body { overflow-y: auto; padding: 4px 0 12px; }

.sh-prompt-stage { padding: 26px 26px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.sh-chain-complete-history { width: 100%; max-height: 300px; overflow-y: auto; text-align: left; }
.sh-prompt-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8102E; background: #FBEAD2; border-radius: 999px; padding: 4px 14px; }
.sh-prompt-text { font-family: 'Inter', sans-serif; font-style: italic; font-weight: 600; font-size: 18px; line-height: 1.45; color: #1B2A4A; max-width: 460px; margin: 0; }
.sh-continue-btn { margin-top: 4px; }

/* Adults theme -- "Boarding Pass": navy + burnt orange, itinerary rows instead of bubbles, no avatars */
.sh-theme-adults .sh-panel { box-shadow: 0 20px 44px rgba(11,37,69,0.18); border-color: #E4E1D8; }
.sh-theme-adults .sh-hero { background: #0B2545; }
.sh-theme-adults .sh-hero-eyebrow { color: #E8632C; }
.sh-theme-adults .sh-hero-title { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; text-transform: none; letter-spacing: 0; }
.sh-theme-adults .sh-hero-sub { color: #AFC0D8; }
.sh-theme-adults .sh-stub { background: #0B2545; }
.sh-theme-adults .sh-stub-field-value { font-family: 'IBM Plex Mono', monospace; font-weight: 700; }
.sh-theme-adults .sh-seg { background: #E4E1D8; }
.sh-theme-adults .sh-seg.is-done { background: #E8632C; }
.sh-theme-adults .sh-seg.is-current { background: #0B2545; }

.sh-itinerary { display: flex; flex-direction: column; padding: 14px 24px 4px; }
.sh-i-row { padding: 10px 0; border-bottom: 1px solid #ECE9E0; display: flex; gap: 12px; align-items: baseline; }
.sh-i-block:last-child .sh-i-row--me { border-bottom: none; }
.sh-i-tag { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #9A9484; flex-shrink: 0; width: 64px; }
.sh-i-row--me .sh-i-tag { color: #E8632C; }
.sh-i-line { font-family: 'IBM Plex Sans', sans-serif; font-size: 14px; color: #2A3648; line-height: 1.4; }

.sh-theme-adults .sh-slide { background: #0B2545; border-radius: 10px; padding: 20px 26px; }
.sh-theme-adults .sh-slide::before {
  content: "✈"; inset: auto; position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  width: 24px; height: 24px; border-radius: 50%; background: #E8632C; color: #FFFFFF; font-size: 11px;
  display: flex; align-items: center; justify-content: center; border: none;
}
.sh-theme-adults .sh-line { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; text-transform: none; letter-spacing: 0; font-size: 17px; }
.sh-theme-adults .sh-line::before { content: "“"; }
.sh-theme-adults .sh-line::after { content: "”"; }
.sh-theme-adults .sh-line.is-wrong { color: #F4C2C2; }
.sh-theme-adults .sh-compose { border-top: 1px dashed #E4E1D8; }
.sh-theme-adults .sh-clue-btn { color: #E8632C; }
.sh-theme-adults .sh-type-label { color: #9A9484; }
.sh-theme-adults .sh-type-input { border-color: #E4E1D8; font-family: 'IBM Plex Sans', sans-serif; }
.sh-theme-adults .sh-choice-btn { font-family: 'IBM Plex Mono', monospace; border-radius: 4px; border-width: 2px; border-color: #0B2545; color: #0B2545; transform: rotate(-2deg); }
.sh-theme-adults .sh-choice-btn--bad:hover { border-color: #C0392B; color: #C0392B; }
.sh-theme-adults .sh-choice-btn--good { background: #FFFFFF; border-color: #1F7A3F; color: #1F7A3F; transform: rotate(1.5deg); }
.sh-theme-adults .sh-review-btn { background: #F3E6DE; border-color: #E6CBB8; color: #0B2545; font-family: 'IBM Plex Mono', monospace; }
.sh-theme-adults .sh-prompt-eyebrow { color: #E8632C; background: #F3E6DE; }
.sh-theme-adults .sh-prompt-text { font-family: 'IBM Plex Sans', sans-serif; font-style: normal; font-weight: 500; }
.sh-theme-adults .sh-hist-modal-head { background: #0B2545; font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; text-transform: none; letter-spacing: 0; }
.sh-theme-adults .sh-hist-close { color: #E8632C; }

@media (max-width: 520px) {
  .sh-bubble { font-size: 13.5px; }
  .sh-stub { gap: 16px; }
}
`;
