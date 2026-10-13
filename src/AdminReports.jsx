import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { REPORT_REASONS } from "./safetyApi.js";

// Owner-only list of reports from teachers (posts, comments, profiles).

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const REASON = Object.fromEntries(REPORT_REASONS.map((r) => [r.key, r.label]));
const TYPE = { post: "Post", comment: "Comment", profile: "Profile" };

function when(iso) {
  return new Date(iso).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export default function AdminReports() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("open");
  const [busyId, setBusyId] = useState(null);

  async function load() {
    const { data, error: err } = await supabase.rpc("admin_list_reports");
    if (err) {
      setError(/does not exist|schema cache|Could not find/i.test(err.message || "") ? "Reports need a quick database update first. Run sql/add_report_and_block.sql in Supabase, then reload." : err.message);
      setLoading(false);
      return;
    }
    setRows(data || []);
    setLoading(false);
  }
  useEffect(() => { if (isAdmin) load(); else setLoading(false); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [isAdmin]);

  async function resolve(r, status, del) {
    if (del && !window.confirm(`Delete this ${r.target_type} for everyone? This cannot be undone.`)) return;
    setBusyId(r.id);
    await supabase.rpc("admin_resolve_report", { p_id: r.id, p_status: status, p_delete: !!del });
    await load();
    setBusyId(null);
  }

  if (authLoading || loading) return null;
  const open = rows.filter((r) => r.status === "open").length;
  const shown = rows.filter((r) => (filter === "open" ? r.status === "open" : r.status !== "open"));

  return (
    <div className="ar-shell">
      <style>{CSS}</style>
      <div className="ar-topbar">
        <button type="button" className="ar-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="ar-brand-logo" />entenco
        </button>
        <h1 className="ar-topbar-title">Reports</h1>
      </div>
      <div className="ar-page">
        {!isAdmin ? (
          <p className="ar-status">Not authorized.</p>
        ) : error ? (
          <div className="ar-error">{error}</div>
        ) : (
          <>
            <div className="ar-tabs" role="tablist">
              <button type="button" role="tab" aria-selected={filter === "open"} className={filter === "open" ? "is-on" : ""} onClick={() => setFilter("open")}>Open<em>{open}</em></button>
              <button type="button" role="tab" aria-selected={filter === "done"} className={filter === "done" ? "is-on" : ""} onClick={() => setFilter("done")}>Handled<em>{rows.length - open}</em></button>
            </div>
            {shown.length === 0 ? (
              <p className="ar-status">{filter === "open" ? "No open reports. All clear." : "Nothing handled yet."}</p>
            ) : (
              <div className="ar-list">
                {shown.map((r) => (
                  <article key={r.id} className="ar-card">
                    <div className="ar-head">
                      <span className={`ar-type ar-type--${r.target_type}`}>{TYPE[r.target_type] || r.target_type}</span>
                      <span className="ar-reason">{REASON[r.reason] || r.reason}</span>
                      <span className="ar-when">{when(r.created_at)}</span>
                    </div>
                    <p className="ar-line"><strong>{r.target_name || "A teacher"}</strong> was reported by <strong>{r.reporter_name || "a teacher"}</strong></p>
                    {r.snapshot && <blockquote className="ar-snap">{r.snapshot}</blockquote>}
                    {r.details && <p className="ar-details">&ldquo;{r.details}&rdquo;</p>}
                    <div className="ar-actions">
                      {r.target_user_id && <button type="button" className="ar-btn ar-btn--soft" onClick={() => navigate(`/library/teacher/${r.target_user_id}`)}>View profile</button>}
                      {r.status === "open" ? (
                        <>
                          {(r.target_type === "post" || r.target_type === "comment") && (
                            <button type="button" className="ar-btn ar-btn--danger" disabled={busyId === r.id} onClick={() => resolve(r, "reviewed", true)}>Delete {r.target_type}</button>
                          )}
                          <button type="button" className="ar-btn ar-btn--coral" disabled={busyId === r.id} onClick={() => resolve(r, "reviewed", false)}>Mark handled</button>
                          <button type="button" className="ar-btn ar-btn--soft" disabled={busyId === r.id} onClick={() => resolve(r, "dismissed", false)}>Dismiss</button>
                        </>
                      ) : (
                        <span className="ar-done">{r.status === "dismissed" ? "Dismissed" : "Handled"}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');
.ar-shell { --ink: #2B2A4A; --muted: #8B84A3; --coral: #FF6B4A; --navy: #1B2A4A; --hair: rgba(43,42,74,0.09); min-height: 100vh; background: #F1F3F8; color: var(--ink); font-family: 'Quicksand', sans-serif; }
.ar-shell * { box-sizing: border-box; }
.ar-topbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 28px; border-bottom: 1px solid var(--hair); background: #fff; }
.ar-brand { display: flex; align-items: center; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink); background: none; border: none; cursor: pointer; padding: 0; }
.ar-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.ar-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; margin: 0; }
.ar-page { max-width: 860px; margin: 0 auto; padding: 28px 24px 80px; }
.ar-status { text-align: center; color: var(--muted); padding: 60px 0; font-weight: 600; }
.ar-error { font-size: 13px; font-weight: 700; color: #B3261E; background: #FDECE5; border-radius: 14px; padding: 12px 16px; }
.ar-tabs { display: flex; gap: 6px; margin-bottom: 16px; }
.ar-tabs button { border: none; background: #fff; border-radius: 999px; padding: 9px 18px; font-family: inherit; font-size: 13.5px; font-weight: 700; color: var(--muted); box-shadow: 0 0 0 1px var(--hair); display: flex; gap: 8px; align-items: center; cursor: pointer; }
.ar-tabs button.is-on { background: var(--navy); color: #fff; box-shadow: none; }
.ar-tabs em { font-style: normal; font-size: 11.5px; background: #F1F3F8; color: var(--ink); border-radius: 999px; padding: 1px 8px; }
.ar-tabs button.is-on em { background: rgba(255,255,255,0.2); color: #fff; }
.ar-list { display: flex; flex-direction: column; gap: 12px; }
.ar-card { background: #fff; border-radius: 24px; padding: 18px 20px; box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 12px 28px -20px rgba(27,42,74,0.3); }
.ar-head { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.ar-type { font-size: 11.5px; font-weight: 700; border-radius: 999px; padding: 3px 11px; background: #E7EAF2; }
.ar-type--post { background: #FFF4D6; color: #7A5C0C; }
.ar-type--comment { background: #E3F0FB; color: #1B4F7A; }
.ar-type--profile { background: #EDE6F7; color: #5B3F82; }
.ar-reason { font-size: 13.5px; font-weight: 700; color: #B3261E; }
.ar-when { margin-left: auto; font-size: 12px; font-weight: 700; color: var(--muted); }
.ar-line { margin: 10px 0 0; font-size: 13.5px; font-weight: 600; }
.ar-snap { margin: 10px 0 0; padding: 12px 14px; border-radius: 16px; background: #F7F8FC; font-size: 14px; font-weight: 600; line-height: 1.55; overflow-wrap: anywhere; }
.ar-details { margin: 10px 0 0; font-size: 13.5px; font-weight: 600; color: var(--muted); font-style: italic; }
.ar-actions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 14px; }
.ar-btn { border: none; border-radius: 999px; padding: 9px 16px; font-family: inherit; font-size: 13px; font-weight: 700; cursor: pointer; }
.ar-btn:disabled { opacity: 0.5; cursor: default; }
.ar-btn:focus-visible, .ar-tabs button:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.ar-btn--coral { background: var(--coral); color: #fff; }
.ar-btn--soft { background: #F1F3F8; color: var(--ink); }
.ar-btn--danger { background: #FBE3E0; color: #B3261E; }
.ar-done { font-size: 13px; font-weight: 700; color: var(--muted); margin-left: auto; }
@media (max-width: 640px) { .ar-page { padding: 18px 12px 60px; } .ar-topbar { padding: 12px 16px; } }
`;
