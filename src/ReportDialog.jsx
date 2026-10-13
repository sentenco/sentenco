import { useEffect, useRef, useState } from "react";
import { REPORT_REASONS, reportContent, blockUser } from "./safetyApi.js";

// "Report" dialog for a post, comment or teacher profile.
// target: { type: "post" | "comment" | "profile", id, userId, name }
export default function ReportDialog({ target, onClose, onBlocked }) {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [alsoBlock, setAlsoBlock] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!target) return undefined;
    setReason(""); setDetails(""); setAlsoBlock(false); setDone(false); setError(""); setBusy(false);
    const onKey = (e) => { if (e.key === "Escape") closeRef.current(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [target]);

  if (!target) return null;
  const what = target.type === "post" ? "post" : target.type === "comment" ? "comment" : "profile";

  async function submit() {
    if (!reason || busy) return;
    setBusy(true);
    setError("");
    const { error: err } = await reportContent(target.type, target.id, reason, details.trim());
    if (err) {
      setBusy(false);
      setError(/not found/i.test(err.message || "") ? "That content is no longer there." : /does not exist|schema cache|Could not find/i.test(err.message || "") ? "Reporting needs a quick database update first (sql/add_report_and_block.sql)." : "That did not go through. Please try again.");
      return;
    }
    if (alsoBlock && target.userId) {
      await blockUser(target.userId);
      onBlocked?.(target.userId);
    }
    setBusy(false);
    setDone(true);
  }

  return (
    <div className="rpt-overlay" onClick={onClose}>
      <style>{CSS}</style>
      <div className="rpt-modal" role="dialog" aria-modal="true" aria-labelledby="rpt-title" onClick={(e) => e.stopPropagation()}>
        {done ? (
          <div className="rpt-done">
            <span className="rpt-check" aria-hidden="true">&#10003;</span>
            <h3 id="rpt-title">Thanks for telling us</h3>
            <p>We will take a look. {alsoBlock ? `You also blocked ${target.name || "this teacher"}.` : ""}</p>
            <button type="button" className="rpt-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h3 id="rpt-title" className="rpt-title">Report this {what}</h3>
            <p className="rpt-sub">{target.name ? `About ${target.name}. ` : ""}Your report is private. The teacher is not told who reported.</p>
            <div className="rpt-reasons" role="radiogroup" aria-label="Reason">
              {REPORT_REASONS.map((r) => (
                <button type="button" key={r.key} role="radio" aria-checked={reason === r.key} className={`rpt-reason${reason === r.key ? " is-on" : ""}`} onClick={() => setReason(r.key)}>
                  <span className="rpt-dot" />{r.label}
                </button>
              ))}
            </div>
            <textarea className="rpt-details" placeholder="Anything else we should know? (optional)" value={details} maxLength={500} onChange={(e) => setDetails(e.target.value)} rows={3} />
            {target.userId && (
              <label className="rpt-block">
                <input type="checkbox" checked={alsoBlock} onChange={(e) => setAlsoBlock(e.target.checked)} />
                Also block {target.name || "this teacher"}
              </label>
            )}
            {error && <p className="rpt-error" role="alert">{error}</p>}
            <div className="rpt-actions">
              <button type="button" className="rpt-cancel" onClick={onClose}>Cancel</button>
              <button type="button" className="rpt-primary" onClick={submit} disabled={!reason || busy}>{busy ? "Sending…" : "Send report"}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
.rpt-overlay { position: fixed; inset: 0; z-index: 400; background: rgba(27,42,74,0.45); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: 'Quicksand', sans-serif; }
.rpt-modal { width: 100%; max-width: 440px; max-height: calc(100vh - 32px); overflow-y: auto; background: #fff; border-radius: 28px; padding: 24px; color: #2B2A4A; box-shadow: 0 30px 60px -20px rgba(27,42,74,0.5); }
.rpt-modal * { box-sizing: border-box; }
.rpt-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 0 0 4px; }
.rpt-sub { margin: 0 0 14px; font-size: 13.5px; font-weight: 600; line-height: 1.5; color: #8B84A3; }
.rpt-reasons { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.rpt-reason { display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; border: none; background: #F1F3F8; border-radius: 16px; padding: 12px 14px; font-family: inherit; font-size: 14px; font-weight: 700; color: #2B2A4A; cursor: pointer; }
.rpt-reason:hover { background: #E7EAF2; }
.rpt-reason.is-on { background: #FDECE5; box-shadow: inset 0 0 0 2px #FF6B4A; }
.rpt-dot { width: 16px; height: 16px; border-radius: 50%; border: 2px solid #C3C0D4; flex-shrink: 0; position: relative; }
.rpt-reason.is-on .rpt-dot { border-color: #FF6B4A; }
.rpt-reason.is-on .rpt-dot::after { content: ""; position: absolute; inset: 2px; border-radius: 50%; background: #FF6B4A; }
.rpt-details { width: 100%; resize: vertical; border: 1.5px solid rgba(43,42,74,0.12); border-radius: 16px; padding: 12px 14px; font-family: inherit; font-size: 14px; font-weight: 600; color: #2B2A4A; outline: none; }
.rpt-details:focus { border-color: #FF6B4A; }
.rpt-block { display: flex; align-items: center; gap: 10px; margin: 12px 2px 0; font-size: 14px; font-weight: 700; cursor: pointer; }
.rpt-block input { width: 18px; height: 18px; accent-color: #FF6B4A; }
.rpt-error { margin: 10px 2px 0; font-size: 13px; font-weight: 700; color: #B3261E; }
.rpt-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px; }
.rpt-cancel { border: none; background: #F1F3F8; color: #2B2A4A; border-radius: 999px; padding: 11px 20px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; }
.rpt-cancel:hover { background: #E7EAF2; }
.rpt-primary { border: none; background: #FF6B4A; color: #fff; border-radius: 999px; padding: 11px 22px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; }
.rpt-primary:hover:not(:disabled) { background: #E0502F; }
.rpt-primary:disabled { opacity: 0.45; cursor: default; }
.rpt-reason:focus-visible, .rpt-cancel:focus-visible, .rpt-primary:focus-visible, .rpt-details:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
.rpt-done { text-align: center; padding: 8px 4px 4px; }
.rpt-done h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 12px 0 6px; }
.rpt-done p { margin: 0 0 18px; font-size: 14px; font-weight: 600; color: #8B84A3; line-height: 1.5; }
.rpt-check { width: 56px; height: 56px; border-radius: 50%; background: #E4F3EA; color: #1F6B45; font-size: 26px; font-weight: 800; display: inline-flex; align-items: center; justify-content: center; }
`;
