import { useEffect, useState } from "react";

// "Delete my account" confirmation: you have to type DELETE.
export default function DeleteAccountDialog({ open, busy, error, onConfirm, onCancel }) {
  const [text, setText] = useState("");
  useEffect(() => { if (open) setText(""); }, [open]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape" && !busy) onCancel(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, busy, onCancel]);
  if (!open) return null;
  const ok = text.trim().toUpperCase() === "DELETE";
  return (
    <div className="dad-overlay" onClick={() => { if (!busy) onCancel(); }}>
      <style>{CSS}</style>
      <div className="dad-modal" role="alertdialog" aria-modal="true" aria-labelledby="dad-title" onClick={(e) => e.stopPropagation()}>
        <h3 id="dad-title">Delete your account?</h3>
        <p>This permanently deletes your account and everything in it: your profile and photos, posts, comments, messages, follows, connections, blocks and saved posts. <strong>It cannot be undone.</strong></p>
        <p className="dad-small">Reports you made or that were made about you are kept for safety, without your name attached.</p>
        <label className="dad-label" htmlFor="dad-input">Type <b>DELETE</b> to confirm</label>
        <input id="dad-input" className="dad-input" value={text} onChange={(e) => setText(e.target.value)} autoComplete="off" autoFocus disabled={busy} />
        {error && <p className="dad-error" role="alert">{error}</p>}
        <div className="dad-actions">
          <button type="button" className="dad-cancel" onClick={onCancel} disabled={busy}>Keep my account</button>
          <button type="button" className="dad-danger" onClick={onConfirm} disabled={!ok || busy}>{busy ? "Deleting…" : "Delete forever"}</button>
        </div>
      </div>
    </div>
  );
}

const CSS = `
.dad-overlay { position: fixed; inset: 0; z-index: 400; background: rgba(27,42,74,0.5); display: flex; align-items: center; justify-content: center; padding: 16px; font-family: 'Quicksand', sans-serif; }
.dad-modal { width: 100%; max-width: 440px; background: #fff; border-radius: 28px; padding: 26px; color: #2B2A4A; box-shadow: 0 30px 60px -20px rgba(27,42,74,0.5); }
.dad-modal * { box-sizing: border-box; }
.dad-modal h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; margin: 0 0 8px; color: #B3261E; }
.dad-modal p { margin: 0 0 10px; font-size: 14px; font-weight: 600; line-height: 1.55; }
.dad-small { color: #8B84A3; font-size: 13px !important; }
.dad-label { display: block; margin: 14px 0 6px; font-size: 13.5px; font-weight: 700; }
.dad-input { width: 100%; border: 1.5px solid rgba(43,42,74,0.16); border-radius: 14px; padding: 11px 14px; font-family: inherit; font-size: 15px; font-weight: 700; letter-spacing: 0.08em; outline: none; }
.dad-input:focus { border-color: #B3261E; }
.dad-error { margin: 10px 0 0 !important; color: #B3261E; font-weight: 700 !important; }
.dad-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px; flex-wrap: wrap; }
.dad-cancel { border: none; background: #F1F3F8; color: #2B2A4A; border-radius: 999px; padding: 11px 20px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; }
.dad-danger { border: none; background: #B3261E; color: #fff; border-radius: 999px; padding: 11px 22px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; }
.dad-danger:disabled { opacity: 0.4; cursor: default; }
.dad-cancel:focus-visible, .dad-danger:focus-visible, .dad-input:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; }
`;
