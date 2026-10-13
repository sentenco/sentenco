import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { REPORT_REASONS } from "./safetyApi.js";
import ConfirmDialog from "./ConfirmDialog.jsx";

// Owner-only list of reports from teachers (posts, comments, profiles).

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const REASON = Object.fromEntries(REPORT_REASONS.map((r) => [r.key, r.label]));
const TYPE = { post: "Post", comment: "Comment", profile: "Profile" };
const HUES = ["#7C5CBF", "#E8734A", "#2F8F83", "#C2487A", "#3E6FB0", "#B07A2F"];

function hueFor(id) { let h = 0; for (const c of id || "") h = (h * 31 + c.charCodeAt(0)) % 6; return HUES[h]; }

function when(iso) {
  const mins = Math.max(1, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (mins < 60) return `${mins}m ago`;
  if (mins < 1440) return `${Math.round(mins / 60)}h ago`;
  if (mins < 10080) return `${Math.round(mins / 1440)}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function TypeIcon({ type }) {
  const p = {
    post: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.1a8.4 8.4 0 1 1 16.1-4.4z" />,
    comment: <><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  }[type];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{p}</svg>;
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
  const [toDelete, setToDelete] = useState(null);

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
    setBusyId(r.id);
    const { error: err } = await supabase.rpc("admin_resolve_report", { p_id: r.id, p_status: status, p_delete: !!del });
    if (err) setError("That did not go through. Please try again.");
    await load();
    setBusyId(null);
  }

  if (authLoading || loading) return null;
  const open = rows.filter((r) => r.status === "open");
  const handled = rows.filter((r) => r.status === "reviewed").length;
  const dismissed = rows.filter((r) => r.status === "dismissed").length;
  const shown = filter === "open" ? open : rows.filter((r) => r.status !== "open");

  return (
    <div className="ar-shell">
      <style>{CSS}</style>
      <div className="ar-page">
        {!isAdmin ? (
          <p className="ar-status">Not authorized.</p>
        ) : (
          <>
            <header className="ar-hero">
              <div>
                <span className="ar-eyebrow">Only you can see this</span>
                <h1>Reports</h1>
                <p>Posts, comments and profiles that teachers flagged. Reports are private, and the person reported is never told who sent them.</p>
              </div>
              <div className="ar-stats" aria-label="Report totals">
                <div className="ar-stat ar-stat--open"><b>{open.length}</b><span>Open</span></div>
                <div className="ar-stat"><b>{handled}</b><span>Handled</span></div>
                <div className="ar-stat"><b>{dismissed}</b><span>Dismissed</span></div>
              </div>
            </header>

            {error && <div className="ar-error" role="alert">{error}</div>}

            <div className="ar-tabs" role="tablist">
              <button type="button" role="tab" aria-selected={filter === "open"} className={filter === "open" ? "is-on" : ""} onClick={() => setFilter("open")}>Open{open.length > 0 && <em>{open.length}</em>}</button>
              <button type="button" role="tab" aria-selected={filter === "done"} className={filter === "done" ? "is-on" : ""} onClick={() => setFilter("done")}>Handled<em>{rows.length - open.length}</em></button>
            </div>

            {shown.length === 0 ? (
              <div className="ar-empty">
                <span className="ar-ring" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                </span>
                <h2>{filter === "open" ? "All clear" : "Nothing handled yet"}</h2>
                <p>{filter === "open" ? "No open reports. When a teacher flags something, it shows up here." : "Reports you handle or dismiss are kept here."}</p>
              </div>
            ) : (
              <div className="ar-list">
                {shown.map((r) => (
                  <article key={r.id} className="ar-card">
                    <div className="ar-top">
                      <span className={`ar-tile ar-tile--${r.target_type}`}><TypeIcon type={r.target_type} /></span>
                      <div className="ar-title">
                        <b>{TYPE[r.target_type] || r.target_type} by {r.target_name || "a teacher"}</b>
                        <small>Reported by {r.reporter_name || "a teacher"} &middot; {when(r.created_at)}</small>
                      </div>
                      <span className={`ar-reason ar-reason--${r.reason}`}>{REASON[r.reason] || r.reason}</span>
                    </div>
                    {r.snapshot && (
                      <blockquote className="ar-snap">
                        <span className="ar-av" style={{ background: hueFor(r.target_user_id) }}>{(r.target_name || "T")[0].toUpperCase()}</span>
                        <span>{r.snapshot}</span>
                      </blockquote>
                    )}
                    {r.details && <p className="ar-details"><strong>Their note:</strong> {r.details}</p>}
                    <div className="ar-actions">
                      {r.target_user_id && <button type="button" className="ar-btn ar-btn--ghost" onClick={() => navigate(`/library/teacher/${r.target_user_id}`)}>View profile</button>}
                      <span className="ar-spacer" />
                      {r.status === "open" ? (
                        <>
                          <button type="button" className="ar-btn ar-btn--soft" disabled={busyId === r.id} onClick={() => resolve(r, "dismissed", false)}>Dismiss</button>
                          {(r.target_type === "post" || r.target_type === "comment") && (
                            <button type="button" className="ar-btn ar-btn--danger" disabled={busyId === r.id} onClick={() => setToDelete(r)}>Delete {r.target_type}</button>
                          )}
                          <button type="button" className="ar-btn ar-btn--coral" disabled={busyId === r.id} onClick={() => resolve(r, "reviewed", false)}>Mark handled</button>
                        </>
                      ) : (
                        <span className={`ar-done ar-done--${r.status}`}>{r.status === "dismissed" ? "Dismissed" : "Handled"}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <ConfirmDialog
        open={!!toDelete}
        title={`Delete this ${toDelete?.target_type || "content"}?`}
        message="It is removed for everyone and cannot be brought back. The report is marked as handled."
        confirmLabel="Delete"
        onConfirm={async () => { const r = toDelete; setToDelete(null); if (r) await resolve(r, "reviewed", true); }}
        onCancel={() => setToDelete(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');
.ar-shell { --ink: #2B2A4A; --muted: #8B84A3; --coral: #FF6B4A; --navy: #1B2A4A; --hair: rgba(43,42,74,0.1); min-height: 100%; background: #F1F3F8; color: var(--ink); font-family: 'Quicksand', sans-serif; }
.ar-shell * { box-sizing: border-box; }
.ar-page { max-width: 980px; margin: 0 auto; padding: 28px 24px 100px; }
.ar-status { text-align: center; color: var(--muted); padding: 60px 0; font-weight: 600; }
.ar-hero { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; background: #fff; border-radius: 28px; padding: 26px 28px; margin-bottom: 18px; box-shadow: 0 1px 2px rgba(27,42,74,0.05), 0 18px 40px -26px rgba(27,42,74,0.3); position: relative; overflow: hidden; }
.ar-hero::after { content: ""; position: absolute; width: 260px; height: 260px; border-radius: 50%; right: -70px; top: -120px; background: radial-gradient(circle, rgba(255,107,74,0.18), transparent 70%); pointer-events: none; }
.ar-eyebrow { display: inline-block; font-size: 11.5px; letter-spacing: 0.09em; text-transform: uppercase; font-weight: 700; color: #E0502F; background: #FDECE5; border-radius: 999px; padding: 4px 12px; margin-bottom: 10px; }
.ar-hero h1 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 32px; margin: 0 0 6px; }
.ar-hero p { margin: 0; max-width: 46ch; font-size: 14.5px; font-weight: 600; line-height: 1.55; color: var(--muted); }
.ar-stats { display: flex; gap: 10px; position: relative; z-index: 1; }
.ar-stat { min-width: 92px; background: #F7F8FC; border-radius: 20px; padding: 12px 16px; text-align: center; }
.ar-stat b { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 28px; line-height: 1.05; }
.ar-stat span { font-size: 12px; font-weight: 700; color: var(--muted); letter-spacing: 0.04em; text-transform: uppercase; }
.ar-stat--open { background: #FDECE5; } .ar-stat--open b { color: #E0502F; }
.ar-error { font-size: 13.5px; font-weight: 700; color: #B3261E; background: #FBE3E0; border-radius: 16px; padding: 12px 16px; margin-bottom: 14px; }
.ar-tabs { display: flex; gap: 6px; margin-bottom: 14px; }
.ar-tabs button { border: none; background: #fff; border-radius: 999px; padding: 10px 20px; font-family: inherit; font-size: 14px; font-weight: 700; color: var(--muted); box-shadow: 0 0 0 1px var(--hair); display: flex; gap: 8px; align-items: center; cursor: pointer; }
.ar-tabs button.is-on { background: var(--navy); color: #fff; box-shadow: none; }
.ar-tabs em { font-style: normal; font-size: 11.5px; background: #F1F3F8; color: var(--ink); border-radius: 999px; padding: 1px 8px; }
.ar-tabs button.is-on em { background: rgba(255,255,255,0.2); color: #fff; }
.ar-empty { background: #fff; border-radius: 28px; text-align: center; padding: 60px 24px; box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 12px 28px -20px rgba(27,42,74,0.3); }
.ar-ring { width: 84px; height: 84px; border-radius: 50%; background: #E4F3EA; color: #1F6B45; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.ar-ring svg { width: 38px; height: 38px; }
.ar-empty h2 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; margin: 0 0 6px; }
.ar-empty p { margin: 0 auto; max-width: 40ch; font-size: 14px; font-weight: 600; line-height: 1.55; color: var(--muted); }
.ar-list { display: flex; flex-direction: column; gap: 14px; }
.ar-card { background: #fff; border-radius: 26px; padding: 20px 22px; box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 14px 30px -22px rgba(27,42,74,0.32); }
.ar-top { display: flex; align-items: center; gap: 14px; }
.ar-tile { width: 46px; height: 46px; border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.ar-tile svg { width: 21px; height: 21px; }
.ar-tile--post { background: #FFF4D6; color: #7A5C0C; } .ar-tile--comment { background: #E3F0FB; color: #1B4F7A; } .ar-tile--profile { background: #EDE6F7; color: #5B3F82; }
.ar-title { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.ar-title b { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; }
.ar-title small { font-size: 12.5px; font-weight: 600; color: var(--muted); }
.ar-reason { font-size: 12px; font-weight: 700; border-radius: 999px; padding: 5px 13px; background: #F1F3F8; white-space: nowrap; }
.ar-reason--spam { background: #FFF4D6; color: #7A5C0C; }
.ar-reason--harassment { background: #FBE3E0; color: #B3261E; }
.ar-reason--inappropriate { background: #FDECE5; color: #C2411F; }
.ar-reason--impersonation { background: #EDE6F7; color: #5B3F82; }
.ar-snap { margin: 14px 0 0; display: flex; gap: 12px; align-items: flex-start; padding: 14px 16px; border-radius: 20px; background: #F7F8FC; font-size: 14.5px; font-weight: 600; line-height: 1.6; overflow-wrap: anywhere; }
.ar-av { width: 30px; height: 30px; border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12px; flex-shrink: 0; }
.ar-details { margin: 12px 4px 0; font-size: 13.5px; font-weight: 600; line-height: 1.5; color: #55527a; }
.ar-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--hair); }
.ar-spacer { flex: 1; }
.ar-btn { border: none; border-radius: 999px; padding: 10px 18px; font-family: inherit; font-size: 13.5px; font-weight: 700; cursor: pointer; transition: background 0.15s; }
.ar-btn:disabled { opacity: 0.5; cursor: default; }
.ar-btn:focus-visible, .ar-tabs button:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.ar-btn--coral { background: var(--coral); color: #fff; } .ar-btn--coral:hover:not(:disabled) { background: #E0502F; }
.ar-btn--soft { background: #F1F3F8; color: var(--ink); } .ar-btn--soft:hover:not(:disabled) { background: #E7EAF2; }
.ar-btn--ghost { background: none; color: var(--ink); box-shadow: inset 0 0 0 1.5px var(--hair); } .ar-btn--ghost:hover { box-shadow: inset 0 0 0 1.5px var(--coral); color: #E0502F; }
.ar-btn--danger { background: #FBE3E0; color: #B3261E; } .ar-btn--danger:hover:not(:disabled) { background: #F6CFCB; }
.ar-done { font-size: 13px; font-weight: 700; border-radius: 999px; padding: 6px 14px; }
.ar-done--reviewed { background: #E4F3EA; color: #1F6B45; } .ar-done--dismissed { background: #F1F3F8; color: var(--muted); }
@media (max-width: 640px) {
  .ar-page { padding: 16px 12px 80px; }
  .ar-hero { padding: 20px; }
  .ar-top { flex-wrap: wrap; } .ar-reason { margin-left: 60px; }
  .ar-actions { gap: 6px; } .ar-spacer { display: none; }
}
`;
