import { useEffect, useRef, useState } from "react";

const LEVEL_TIER = { "A1-A2": "a1a2", "B1-B2": "b1b2", "C1-C2": "c1c2" };

// Message Reply: a fixed-size, self-contained lesson card shaped like an
// actual messaging app (own logo bubble on the card, no outer
// PlayerChrome). Student reads an incoming message, writes a real reply,
// sends it into the thread, then -- after a short "typing..." pause --
// the other person sends a closing reply that wraps up the
// conversation. Only then does "Show sample reply" appear, alongside
// Restart, at the bottom of the thread.
export default function MessageReplyActivity({ item }) {
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState(false);
  const [typing, setTyping] = useState(false);
  const [closed, setClosed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const textareaRef = useRef(null);
  const typingTimer = useRef(null);
  const closingTimer = useRef(null);
  const threadRef = useRef(null);

  const tier = LEVEL_TIER[item.cefrGroup] || "a1a2";
  const initial = item.from.trim().charAt(0).toUpperCase();

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer.current);
      clearTimeout(closingTimer.current);
    };
  }, []);

  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [sent, typing, closed, revealed]);

  function onDraftChange(e) {
    setDraft(e.target.value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
  }

  function send() {
    if (!draft.trim()) return;
    setSent(true);

    typingTimer.current = setTimeout(() => setTyping(true), 1200);
    closingTimer.current = setTimeout(() => {
      setTyping(false);
      setClosed(true);
    }, 5000);
  }

  function restart() {
    clearTimeout(typingTimer.current);
    clearTimeout(closingTimer.current);
    setDraft("");
    setSent(false);
    setTyping(false);
    setClosed(false);
    setRevealed(false);
  }

  return (
    <div className="mr2-wrap">
      <style>{CSS}</style>
      <div className="mr2-blob mr2-blob--a" />
      <div className="mr2-blob mr2-blob--b" />

      <div className="mr2-frame">
        <span className="mr2-paper-back" />
        <span className="mr2-tape" />

        <div className="mr2-card">
          <div className="mr2-bar">
            <span className="mr2-brand">
              <img src="/logo-sentivo.png" alt="" className="mr2-logo" />
              <span className="mr2-brand-word">entenco</span>
              <span className="mr2-brand-sep">·</span>
              <span className="mr2-brand-type">Message Reply</span>
            </span>
            <span className={`mr2-level mr2-level--${tier}`}>{item.cefrGroup}</span>
          </div>

          <div className="mr2-phone">
            <div className="mr2-contact">
              <span className="mr2-avatar">{initial}</span>
              <div className="mr2-contact-text">
                <span className="mr2-from">{item.from}</span>
                <div className="mr2-context-row">
                  <span className="mr2-online-dot" />
                  <span className="mr2-online-text">Active now</span>
                </div>
              </div>
            </div>

            <div className="mr2-thread" ref={threadRef}>
              <div className="mr2-msg-group mr2-msg-group--in">
                <div className="mr2-bubble mr2-bubble--in"><p>{item.incoming}</p></div>
                <span className="mr2-meta">9:02 AM</span>
              </div>

              {sent && (
                <div className="mr2-msg-group mr2-msg-group--mine">
                  <div className="mr2-bubble mr2-bubble--mine"><p>{draft}</p></div>
                  <span className="mr2-meta">9:05 AM · Delivered</span>
                </div>
              )}

              {typing && (
                <div className="mr2-msg-group mr2-msg-group--in">
                  <div className="mr2-bubble mr2-bubble--in mr2-bubble--typing">
                    <span className="mr2-typing-dot" /><span className="mr2-typing-dot" /><span className="mr2-typing-dot" />
                  </div>
                </div>
              )}

              {closed && (
                <div className="mr2-msg-group mr2-msg-group--in">
                  <div className="mr2-bubble mr2-bubble--in"><p>{item.closing}</p></div>
                  <span className="mr2-meta">9:06 AM</span>
                </div>
              )}

              {revealed && (
                <div className="mr2-msg-group mr2-msg-group--mine">
                  <span className="mr2-sample-label">Sample reply</span>
                  <div className="mr2-bubble mr2-bubble--sample"><p>{item.sample}</p></div>
                </div>
              )}
            </div>

            {!sent && (
              <div className="mr2-suggestions">
                <span className="mr2-suggestions-label">Try to include</span>
                <div className="mr2-suggestions-row">
                  {item.mustInclude.map((c) => (
                    <span className="mr2-chip" key={c}>{c}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="mr2-compose">
              {!sent ? (
                <>
                  <textarea
                    ref={textareaRef}
                    className="mr2-textarea"
                    placeholder={item.prompt}
                    value={draft}
                    onChange={onDraftChange}
                    rows={1}
                  />
                  <button type="button" className="mr2-send" onClick={send} disabled={!draft.trim()} aria-label="Send">↑</button>
                </>
              ) : closed ? (
                <>
                  <button type="button" className="mr2-restart-btn" onClick={restart}>↻ Restart</button>
                  {!revealed ? (
                    <button type="button" className="mr2-compose-btn" onClick={() => setRevealed(true)}>Show sample reply →</button>
                  ) : (
                    <button type="button" className="mr2-compose-btn mr2-compose-btn--done" disabled>Sample shown ✓</button>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.mr2-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1cm;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
  background: #FFF8EF;
  background-image: radial-gradient(circle at 1px 1px, rgba(169,131,111,0.12) 1px, transparent 0);
  background-size: 22px 22px;
  overflow: auto;
}
.mr2-wrap * { box-sizing: border-box; }

.mr2-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.mr2-blob--a { width: 200px; height: 200px; top: -20px; left: 8%; background: rgba(255,138,117,0.14); }
.mr2-blob--b { width: 170px; height: 170px; bottom: 0; right: 10%; background: rgba(111,207,151,0.12); }

.mr2-frame { position: relative; z-index: 1; width: 100%; height: 100%; }
.mr2-paper-back {
  position: absolute; inset: 0; background: #FFF1EC; border-radius: 34px;
  transform: rotate(1.4deg) translate(7px, 9px); box-shadow: 0 16px 34px rgba(184,57,31,0.14);
}
.mr2-tape {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 70px; height: 24px; z-index: 4;
  background: repeating-linear-gradient(45deg, #FF8A75, #FF8A75 6px, #FFB3A3 6px, #FFB3A3 12px);
  box-shadow: 0 3px 6px rgba(184,57,31,0.20);
}
.mr2-card {
  position: relative; z-index: 1; width: 100%; height: 100%;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFCFA 100%);
  border-radius: 32px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(184,57,31,0.10), 0 10px 20px rgba(184,57,31,0.12), 0 32px 56px rgba(184,57,31,0.18);
  transform: rotate(-0.5deg);
  display: flex; flex-direction: column; overflow: hidden;
}
.mr2-card::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; z-index: 1;
  background: linear-gradient(90deg, #FF8A75, #B8391F);
}

.mr2-bar { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 20px 16px 0; }
.mr2-brand {
  display: flex; align-items: center; gap: 2px; background: rgba(255,138,117,0.14); border-radius: 999px; padding: 5px 12px 5px 5px;
}
.mr2-logo { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; }
.mr2-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13px; color: #B8391F; margin-left: 4px; }
.mr2-brand-sep { color: #B8391F; opacity: 0.4; margin: 0 6px; font-weight: 700; }
.mr2-brand-type { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 12.5px; letter-spacing: 0.02em; color: #B8391F; }
.mr2-level { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 10.5px; letter-spacing: 0.02em; border-radius: 999px; padding: 5px 10px; }
.mr2-level--a1a2 { color: #2F7A50; background: rgba(76,175,122,0.16); }
.mr2-level--b1b2 { color: #2A6E85; background: #E1F1F6; }
.mr2-level--c1c2 { color: #B8391F; background: #FFE4DC; }

.mr2-phone { flex: 1; min-height: 0; display: flex; flex-direction: column; margin: 12px 10px 10px; border-radius: 24px; overflow: hidden; background: #F2EDE6; box-shadow: inset 0 0 0 1px rgba(184,57,31,0.06); }

.mr2-contact { flex: 0 0 auto; display: flex; align-items: center; gap: 11px; padding: 13px 16px; background: #FFFFFF; border-bottom: 1px solid #F5D9CC; }
.mr2-avatar {
  flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #FFFFFF; background: linear-gradient(135deg, #FF8A75 0%, #B8391F 100%);
  box-shadow: 0 2px 4px rgba(184,57,31,0.25), 0 0 0 2px #FFFFFF, 0 0 0 3px rgba(255,138,117,0.14);
}
.mr2-contact-text { display: flex; flex-direction: column; min-width: 0; }
.mr2-from { font-family: 'Karla', sans-serif; font-weight: 700; font-size: 13.5px; color: #4A3F3A; }
.mr2-context-row { display: flex; align-items: center; gap: 5px; }
.mr2-online-dot { width: 6px; height: 6px; border-radius: 50%; background: #4CAF7A; }
.mr2-online-text { font-family: 'Karla', sans-serif; font-size: 10.5px; font-weight: 600; color: #4CAF7A; }

.mr2-thread {
  flex: 1; min-height: 0; overflow-y: auto; padding: 14px 12px 10px;
  display: flex; flex-direction: column; justify-content: flex-end; gap: 4px;
  background:
    radial-gradient(circle at 20% 15%, rgba(255,138,117,0.05), transparent 40%),
    radial-gradient(circle at 85% 75%, rgba(111,207,151,0.06), transparent 40%),
    #F2EDE6;
}
.mr2-msg-group { display: flex; flex-direction: column; margin-bottom: 6px; }
.mr2-msg-group--in { align-items: flex-start; }
.mr2-msg-group--mine { align-items: flex-end; }
.mr2-bubble {
  position: relative; max-width: 78%; border-radius: 18px; padding: 10px 14px;
  font-family: 'Karla', sans-serif; font-size: 14px; line-height: 1.45;
  overflow-wrap: break-word; word-break: break-word;
}
.mr2-bubble--in { background: #FFFFFF; color: #4A3F3A; border-bottom-left-radius: 5px; box-shadow: 0 1px 1px rgba(74,63,58,0.06); }
.mr2-bubble--mine { background: linear-gradient(135deg, #FF8A75 0%, #B8391F 100%); color: #FFFFFF; border-bottom-right-radius: 5px; box-shadow: 0 2px 6px rgba(184,57,31,0.25); }
.mr2-bubble--sample { background: #E4F8EC; color: #1F7A47; border-bottom-right-radius: 5px; box-shadow: 0 1px 1px rgba(31,122,71,0.08); }
.mr2-bubble p { margin: 0; }
.mr2-meta { font-family: 'Karla', sans-serif; font-size: 10px; font-weight: 600; color: #A9836F; margin-top: 4px; padding: 0 4px; }
.mr2-msg-group--mine .mr2-meta { text-align: right; }
.mr2-sample-label {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #1F9D6E;
  margin-bottom: 4px; padding: 0 4px;
}

.mr2-bubble--typing { display: flex; align-items: center; gap: 4px; padding: 13px 16px; }
.mr2-typing-dot { width: 6px; height: 6px; border-radius: 50%; background: #C9BEB4; animation: mr2TypingBounce 1.2s infinite ease-in-out; }
.mr2-typing-dot:nth-child(2) { animation-delay: 0.15s; }
.mr2-typing-dot:nth-child(3) { animation-delay: 0.3s; }
@keyframes mr2TypingBounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-4px); opacity: 1; }
}

.mr2-suggestions { flex: 0 0 auto; padding: 8px 14px; background: #FFFFFF; border-top: 1px solid #F5D9CC; }
.mr2-suggestions-label { display: block; font-family: 'Karla', sans-serif; font-size: 9.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9836F; margin-bottom: 6px; }
.mr2-suggestions-row { display: flex; flex-wrap: wrap; gap: 6px; }
.mr2-chip { font-family: 'Karla', sans-serif; font-weight: 700; font-size: 11px; color: #B8391F; background: #FFE1DA; border: 1px solid #FFD9CC; border-radius: 999px; padding: 5px 11px; }

.mr2-compose { flex: 0 0 auto; display: flex; align-items: flex-end; gap: 8px; padding: 10px 12px 12px; background: #FFFFFF; }
.mr2-textarea {
  flex: 1; min-height: 38px; max-height: 120px; border: 1px solid #F5D9CC; border-radius: 20px;
  padding: 9px 16px; font-family: 'Karla', sans-serif; font-size: 13.5px; color: #4A3F3A;
  line-height: 1.4; resize: none; background: #F7F1EA; overflow-y: auto;
}
.mr2-textarea:focus { outline: none; border-color: #FF8A75; background: #FFFFFF; }
.mr2-send {
  flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;
  font-size: 16px; font-weight: 700; color: #FFFFFF;
  background: linear-gradient(135deg, #FF8A75 0%, #B8391F 100%);
  box-shadow: 0 3px 6px rgba(184,57,31,0.3);
}
.mr2-send:disabled { opacity: 0.35; cursor: default; box-shadow: none; }

.mr2-restart-btn {
  flex-shrink: 0; display: flex; align-items: center; gap: 5px;
  border: none; border-radius: 20px; padding: 10px 15px; cursor: pointer;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13px; color: #A9836F;
  background: #F5EEE4;
}
.mr2-restart-btn:hover { background: #EFE2D2; }
.mr2-restart-btn:active { transform: translateY(1px); }

.mr2-compose-btn {
  flex: 1; border: none; border-radius: 20px; padding: 10px; cursor: pointer;
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13.5px; color: #FFFFFF;
  background: linear-gradient(135deg, #6FCF97 0%, #2F7A50 100%);
  box-shadow: 0 4px 0 #1F5A3A;
}
.mr2-compose-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #1F5A3A; }
.mr2-compose-btn--done {
  background: #DDEFE4; color: #1F7A47; box-shadow: none; cursor: default;
}
`;
