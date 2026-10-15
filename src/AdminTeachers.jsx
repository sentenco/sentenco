import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";

const ADMIN_EMAIL = "caldrin1999@gmail.com";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

const PLAN_LABEL = { free: "Free", pro: "Pro", pro_plus: "Pro+" };

// The most recent sign of life: a login, or the active-login heartbeat.
function lastActive(t) {
  const times = [t.last_sign_in_at, t.last_seen].filter(Boolean).map((x) => new Date(x).getTime());
  return times.length ? Math.max(...times) : null;
}

function ago(ms) {
  if (!ms) return "Never";
  const mins = Math.floor((Date.now() - ms) / 60000);
  if (mins < 10) return "Just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} h ago`;
  const days = Math.floor(hrs / 24);
  return days === 1 ? "Yesterday" : `${days} days ago`;
}

const DAY = 86400000;

function daysLeft(iso) {
  return Math.max(1, Math.ceil((new Date(iso).getTime() - Date.now()) / 86400000));
}

// Plain-words status: where this account's access comes from.
function accessText(t) {
  if (t.source === "trial") return `Free trial, ends ${formatDate(t.access_ends_at)} (${daysLeft(t.access_ends_at)}d left)`;
  if (t.source === "grant") return `Code or gift, ends ${formatDate(t.access_ends_at)} (${daysLeft(t.access_ends_at)}d left)`;
  if (t.source === "paid") return `Paid, until ${formatDate(t.access_ends_at)}`;
  if (t.plan !== "free") return "Set by hand";
  return t.trial_used ? "Trial ended" : "Trial not started";
}

export default function AdminTeachers() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isAdmin) { setLoading(false); return; }
    (async () => {
      setLoading(true);
      const { data, error: loadError } = await supabase.rpc("admin_list_teachers");
      if (loadError) { setError(loadError.message); setLoading(false); return; }
      setTeachers(data || []);
      setLoading(false);
    })();
  }, [isAdmin]);

  if (authLoading || loading) return null;

  const hasPlans = teachers.length === 0 || teachers[0].plan !== undefined;
  const hasActivity = teachers.length === 0 || teachers[0].last_sign_in_at !== undefined;
  const owner = (t) => t.email?.toLowerCase() === ADMIN_EMAIL;
  const people = teachers.filter((t) => !owner(t));
  const counts = {
    all: people.length,
    free: people.filter((t) => t.plan === "free").length,
    pro: people.filter((t) => t.plan === "pro").length,
    pro_plus: people.filter((t) => t.plan === "pro_plus").length,
    trial: people.filter((t) => t.source === "trial").length,
    grant: people.filter((t) => t.source === "grant").length,
    ended: people.filter((t) => t.source === "base" && t.plan === "free" && t.trial_used).length,
    week: people.filter((t) => (lastActive(t) || 0) > Date.now() - 7 * DAY).length,
    never: people.filter((t) => !lastActive(t)).length,
    unconfirmed: people.filter((t) => !t.email_confirmed_at).length,
  };
  const today = people.filter((t) => (lastActive(t) || 0) > Date.now() - DAY).length;
  const posted = people.filter((t) => (t.post_count || 0) + (t.comment_count || 0) > 0).length;
  const redeemed = people.filter((t) => t.code_used).length;
  const FILTERS = [
    ["all", "Everyone"], ["free", "Free"], ["pro", "Pro"], ["pro_plus", "Pro+"],
    ["trial", "On trial"], ["grant", "On a code"], ["ended", "Trial ended"],
    ...(hasActivity ? [["week", "Active this week"], ["never", "Never logged in"], ["unconfirmed", "Email not confirmed"]] : []),
  ];
  const q = search.trim().toLowerCase();
  const shown = teachers.filter((t) => {
    if (q && !`${t.display_name || ""} ${t.email || ""}`.toLowerCase().includes(q)) return false;
    if (filter === "all" || owner(t)) return filter === "all" || false;
    if (filter === "week") return (lastActive(t) || 0) > Date.now() - 7 * DAY;
    if (filter === "never") return !lastActive(t);
    if (filter === "unconfirmed") return !t.email_confirmed_at;
    if (filter === "trial" || filter === "grant") return t.source === filter;
    if (filter === "ended") return t.source === "base" && t.plan === "free" && t.trial_used;
    return t.plan === filter;
  });

  return (
    <div className="adt-shell">
      <style>{CSS}</style>
      <div className="adt-topbar">
        <button type="button" className="adt-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="adt-brand-logo" />entenco
        </button>
        <h1 className="adt-topbar-title">Teachers</h1>
        <button type="button" className="adt-toplink" onClick={() => navigate("/library/admin/access")}>Access codes</button>
      </div>

      <div className="adt-page">
        {!isAdmin ? (
          <p className="adt-status">Not authorized.</p>
        ) : error ? (
          <div className="adt-error">{error}</div>
        ) : teachers.length === 0 ? (
          <p className="adt-status">No registered teachers yet.</p>
        ) : (
          <>
            {!hasPlans && (
              <div className="adt-error">
                Plans aren't showing yet. Run <code>sql/admin_teachers_plans_and_private_count.sql</code> in Supabase, then reload.
              </div>
            )}
            {!hasActivity && (
              <div className="adt-error">
                Activity isn't showing yet. Run <code>sql/admin_teachers_activity.sql</code> in Supabase, then reload.
              </div>
            )}
            <p className="adt-count">{teachers.length} registered {teachers.length === 1 ? "account" : "accounts"}, only you can see this page.</p>
            {hasActivity && (
              <div className="adt-tiles">
                <div className="adt-tile"><b>{people.length}</b><span>Teachers</span></div>
                <div className="adt-tile"><b>{today}</b><span>Active in the last 24 h</span></div>
                <div className="adt-tile"><b>{counts.week}</b><span>Active this week</span></div>
                <div className="adt-tile"><b>{counts.never}</b><span>Never logged in</span></div>
                <div className="adt-tile"><b>{posted}</b><span>Posted or commented</span></div>
                <div className="adt-tile"><b>{redeemed}</b><span>Redeemed a code</span></div>
              </div>
            )}
            {hasPlans && (
              <div className="adt-filters" role="tablist" aria-label="Filter by plan">
                {FILTERS.map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={filter === key}
                    className={`adt-chip${filter === key ? " is-active" : ""}`}
                    onClick={() => setFilter(key)}
                  >
                    {label} <span>{counts[key]}</span>
                  </button>
                ))}
              </div>
            )}
            <input
              type="search"
              className="adt-search"
              placeholder="Find by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="adt-table" style={{ "--adt-cols": hasActivity ? "1.2fr 1.5fr 0.6fr 1.5fr 1fr 1.1fr 0.8fr" : "1.3fr 1.6fr 0.7fr 1.7fr 0.9fr" }}>
              <div className="adt-row adt-row--head">
                <span>Name</span>
                <span>Email</span>
                <span>Plan</span>
                <span>Access</span>
                {hasActivity && <span>Last active</span>}
                {hasActivity && <span>Activity</span>}
                <span>Joined</span>
              </div>
              {shown.length === 0 && <p className="adt-status adt-status--tight">Nobody matches.</p>}
              {shown.map((t) => (
                <div className="adt-row" key={t.id}>
                  <span className="adt-name">
                    {t.display_name || "Unnamed"}
                    <small>
                      {t.years_teaching !== null && t.years_teaching !== undefined ? `${t.years_teaching} yrs teaching` : "Years not set"}
                      {t.is_mentor ? " · Mentor" : ""}
                    </small>
                  </span>
                  <span className="adt-email">{t.email}</span>
                  <span>
                    {owner(t) ? <b className="adt-pill adt-pill--owner">Owner</b>
                      : hasPlans ? <b className={`adt-pill adt-pill--${t.plan}`}>{PLAN_LABEL[t.plan] || t.plan}</b> : "–"}
                  </span>
                  <span className="adt-access">
                    {owner(t) ? "Full access" : hasPlans ? accessText(t) : "–"}
                    {t.code_used && <small className="adt-sub">Code {t.code_used}</small>}
                  </span>
                  {hasActivity && (
                    <span className="adt-access">
                      {ago(lastActive(t))}
                      {!t.email_confirmed_at && <small className="adt-sub adt-sub--warn">Email not confirmed</small>}
                    </span>
                  )}
                  {hasActivity && (
                    <span className="adt-access">
                      {(t.post_count || 0) + (t.comment_count || 0) === 0
                        ? "No posts yet"
                        : `${t.post_count || 0} ${t.post_count === 1 ? "post" : "posts"}, ${t.comment_count || 0} ${t.comment_count === 1 ? "comment" : "comments"}`}
                    </span>
                  )}
                  <span>{formatDate(t.created_at)}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.adt-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.adt-shell * { box-sizing: border-box; }

.adt-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.adt-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.adt-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.adt-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }
.adt-toplink { font: 700 13px 'Quicksand', sans-serif; color: #E8573A; background: none; border: none; cursor: pointer; text-decoration: underline; }

.adt-page { max-width: 1240px; margin: 0 auto; padding: 32px 24px 80px; }
.adt-status { text-align: center; color: var(--muted); padding: 60px 0; }
.adt-error { font-size: 12.5px; color: var(--coral); background: var(--coral-pale); border-radius: 10px; padding: 10px 14px; margin: 0 0 16px; }
.adt-count { font-size: 12.5px; color: var(--muted); margin: 0 0 14px; }

.adt-table { background: var(--card); border: 1px solid var(--hair); border-radius: 18px; overflow: hidden; }
.adt-row {
  display: grid; grid-template-columns: var(--adt-cols);
  gap: 10px; padding: 12px 18px; align-items: center; font-size: 13px;
  border-bottom: 1px solid var(--hair);
}
.adt-row:last-child { border-bottom: none; }
.adt-row--head {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.03em;
  text-transform: uppercase; color: var(--muted); background: var(--navy-pale);
}
.adt-name { font-weight: 700; color: var(--ink); }
.adt-email { color: var(--navy); overflow-wrap: anywhere; }

.adt-name small { display: block; font-weight: 600; font-size: 11.5px; color: var(--muted); margin-top: 2px; }
.adt-access { color: var(--ink); font-size: 12.5px; line-height: 1.4; }
.adt-pill { display: inline-block; font-weight: 800; font-size: 11px; padding: 3px 10px; border-radius: 999px; background: var(--navy-pale); color: var(--navy); }
.adt-pill--pro { background: var(--coral-pale); color: #C2411F; }
.adt-pill--pro_plus { background: var(--navy); color: #fff; }
.adt-pill--owner { background: #2B2A4A; color: #fff; }
.adt-filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 12px; }
.adt-chip {
  font: 700 12.5px 'Quicksand', sans-serif; color: var(--ink); background: var(--card); border: 1px solid var(--hair);
  border-radius: 999px; padding: 7px 14px; cursor: pointer;
}
.adt-chip span { color: var(--muted); margin-left: 4px; }
.adt-chip.is-active { background: var(--navy); color: #fff; border-color: var(--navy); }
.adt-chip.is-active span { color: #C9D0E4; }
.adt-search {
  width: 100%; max-width: 320px; font: 600 13.5px 'Quicksand', sans-serif; color: var(--ink); background: var(--card);
  border: 1px solid var(--hair); border-radius: 12px; padding: 10px 14px; margin: 0 0 14px; outline: none;
}
.adt-search:focus { border-color: var(--coral); }
.adt-status--tight { padding: 22px 0; }
.adt-tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 0 0 18px; }
.adt-tile { background: var(--card); border: 1px solid var(--hair); border-radius: 14px; padding: 12px 16px; }
.adt-tile b { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; color: var(--navy); line-height: 1.1; }
.adt-tile span { font-size: 12px; font-weight: 600; color: var(--muted); }
.adt-sub { display: block; font-size: 11.5px; font-weight: 600; color: var(--muted); margin-top: 2px; }
.adt-sub--warn { color: #C2411F; }

@media (max-width: 760px) {
  .adt-row, .adt-row--head { grid-template-columns: 1fr 1fr; row-gap: 6px; }
  .adt-row--head span:nth-child(n+3) { display: none; }
}
`;
