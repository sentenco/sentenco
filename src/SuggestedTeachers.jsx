import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getSuggestions, followUser, requestConnection } from "./networkApi.js";

// "Teachers you may know": a few suggestions with one-tap Follow and Connect.
// compact = the small card in the Homeroom side column; otherwise the roomy list on the network page.

const HUES = ["#7C5CBF", "#E8734A", "#2F8F83", "#C2487A", "#3E6FB0", "#B07A2F"];
const AGE = { kids: "Kids", teens: "Teens", adults: "Adults" };
const DISMISS_KEY = "sentenco_dismissed_suggestions";

function hueFor(id) { let h = 0; for (const c of id || "") h = (h * 31 + c.charCodeAt(0)) % 6; return HUES[h]; }
function list(a) { return a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]; }

function reasonFor(t) {
  if (t.mutual_count > 0) return `${t.mutual_count} connection${t.mutual_count === 1 ? "" : "s"} in common`;
  if (t.same_school) return "From your school";
  if (t.follows_me) return "Follows you";
  if (t.shared_expertise && t.shared_expertise.length) return `Also into ${list(t.shared_expertise.slice(0, 2).map((x) => x.toLowerCase()))}`;
  if (t.shared_ages && t.shared_ages.length) return `Also teaches ${list(t.shared_ages.map((k) => AGE[k] || k))}`;
  return "New to Sentenco";
}

function loadDismissed() {
  try {
    const raw = JSON.parse(localStorage.getItem(DISMISS_KEY) || "{}");
    const cutoff = Date.now() - 14 * 86400000;
    return Object.fromEntries(Object.entries(raw).filter(([, ts]) => ts > cutoff));
  } catch { return {}; }
}

export default function SuggestedTeachers({ limit = 6, compact = false, onSeeMore }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [rows, setRows] = useState(null); // null loading
  const [state, setState] = useState({}); // id -> { follow, connect }
  const [dismissed, setDismissed] = useState(loadDismissed);

  useEffect(() => {
    if (!user) { setRows([]); return undefined; }
    let off = false;
    getSuggestions(limit + 6).then((r) => { if (!off) setRows(r); });
    return () => { off = true; };
  }, [user?.id, limit]); // eslint-disable-line react-hooks/exhaustive-deps

  function dismiss(id) {
    const next = { ...dismissed, [id]: Date.now() };
    setDismissed(next);
    try { localStorage.setItem(DISMISS_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  }

  async function follow(id) {
    setState((s) => ({ ...s, [id]: { ...s[id], follow: "busy" } }));
    const { error } = await followUser(id);
    setState((s) => ({ ...s, [id]: { ...s[id], follow: error ? undefined : "done" } }));
  }
  async function connect(id) {
    setState((s) => ({ ...s, [id]: { ...s[id], connect: "busy" } }));
    const { error } = await requestConnection(id);
    setState((s) => ({ ...s, [id]: { ...s[id], connect: error ? undefined : "done" } }));
  }

  if (!rows) return null;
  const shown = rows.filter((t) => !dismissed[t.id]).slice(0, limit);
  if (!shown.length) return compact ? null : (
    <div className="stt-card"><style>{CSS}</style><p className="stt-empty">No suggestions right now. Check back as more teachers join.</p></div>
  );

  return (
    <div className={`stt-card${compact ? " is-compact" : ""}`}>
      <style>{CSS}</style>
      <div className="stt-head">
        <h3>Teachers you may know</h3>
        {compact && onSeeMore && <button type="button" className="stt-more" onClick={onSeeMore}>See more</button>}
      </div>
      <ul className="stt-list">
        {shown.map((t) => {
          const s = state[t.id] || {};
          return (
            <li key={t.id} className="stt-row">
              <button type="button" className="stt-who" onClick={() => navigate(`/library/teacher/${t.id}`)}>
                <span className="stt-av" style={{ background: t.avatar_url ? "transparent" : hueFor(t.id) }}>
                  {t.avatar_url ? <img src={t.avatar_url} alt="" /> : (t.display_name || "T")[0].toUpperCase()}
                </span>
                <span className="stt-text"><b>{t.display_name}</b><small>{reasonFor(t)}</small></span>
              </button>
              <div className="stt-btns">
                {s.follow === "done"
                  ? <button type="button" className="stt-btn stt-btn--soft" disabled>Following</button>
                  : <button type="button" className="stt-btn stt-btn--line" disabled={s.follow === "busy"} onClick={() => follow(t.id)}>Follow</button>}
                {s.connect === "done"
                  ? <button type="button" className="stt-btn stt-btn--soft" disabled>Request sent</button>
                  : <button type="button" className="stt-btn stt-btn--coral" disabled={s.connect === "busy"} onClick={() => connect(t.id)}>Connect</button>}
                <button type="button" className="stt-x" aria-label={`Hide ${t.display_name}`} title="Not now" onClick={() => dismiss(t.id)}>&times;</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const CSS = `
.stt-card { background: #fff; border-radius: 24px; padding: 14px 10px 10px; font-family: 'Quicksand', sans-serif; color: #2B2A4A; box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 12px 28px -20px rgba(27,42,74,0.3); margin-bottom: 16px; }
.stt-card * { box-sizing: border-box; }
.stt-head { display: flex; align-items: center; justify-content: space-between; padding: 0 10px 6px; }
.stt-head h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; margin: 0; }
.stt-more { border: none; background: none; color: #E0502F; font-family: inherit; font-size: 12.5px; font-weight: 700; cursor: pointer; padding: 4px 6px; border-radius: 8px; }
.stt-more:hover { background: #FDECE5; }
.stt-empty { margin: 0; padding: 18px 12px; text-align: center; font-size: 13.5px; font-weight: 600; color: #8B84A3; }
.stt-list { list-style: none; margin: 0; padding: 0; }
.stt-row { display: flex; align-items: center; gap: 12px; padding: 8px 10px; border-radius: 18px; }
.stt-row:hover { background: #F7F8FC; }
.stt-who { flex: 1; min-width: 0; display: flex; align-items: center; gap: 12px; border: none; background: none; padding: 0; text-align: left; cursor: pointer; font-family: inherit; color: inherit; }
.stt-who:focus-visible, .stt-btn:focus-visible, .stt-x:focus-visible, .stt-more:focus-visible { outline: 3px solid #1B2A4A; outline-offset: 2px; border-radius: 10px; }
.stt-av { width: 42px; height: 42px; border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; flex-shrink: 0; overflow: hidden; }
.stt-av img { width: 100%; height: 100%; object-fit: cover; }
.stt-text { min-width: 0; display: flex; flex-direction: column; }
.stt-text b { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.stt-text small { font-size: 12px; font-weight: 600; color: #8B84A3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.stt-btns { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.stt-btn { border: none; border-radius: 999px; padding: 7px 14px; font-family: inherit; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; }
.stt-btn:disabled { opacity: 0.7; cursor: default; }
.stt-btn--coral { background: #FF6B4A; color: #fff; }
.stt-btn--coral:hover:not(:disabled) { background: #E0502F; }
.stt-btn--line { background: #fff; color: #2B2A4A; box-shadow: inset 0 0 0 1.5px rgba(43,42,74,0.14); }
.stt-btn--line:hover:not(:disabled) { box-shadow: inset 0 0 0 1.5px #FF6B4A; color: #E0502F; }
.stt-btn--soft { background: #F1F3F8; color: #2B2A4A; }
.stt-x { width: 26px; height: 26px; border-radius: 50%; border: none; background: none; color: #8B84A3; font-size: 18px; line-height: 1; cursor: pointer; }
.stt-x:hover { background: #F1F3F8; color: #2B2A4A; }
.stt-card.is-compact { margin-bottom: 0; }
.stt-card.is-compact .stt-row { flex-wrap: wrap; row-gap: 8px; }
.stt-card.is-compact .stt-btns { width: 100%; padding-left: 54px; }
.stt-card.is-compact .stt-btn { padding: 6px 12px; }
@media (max-width: 640px) { .stt-row { flex-wrap: wrap; row-gap: 8px; } .stt-btns { width: 100%; padding-left: 54px; } }
`;
