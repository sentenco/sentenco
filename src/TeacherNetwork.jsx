import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { unblockUser, useBlocked } from "./safetyApi.js";
import SuggestedTeachers from "./SuggestedTeachers.jsx";
import { getNetworkLists, getPeople, followUser, unfollowUser, respondConnection, removeConnection } from "./networkApi.js";

// "Your network": requests waiting for you, your connections, your followers and the teachers you follow.

const HUES = ["#7C5CBF", "#E8734A", "#2F8F83", "#C2487A", "#3E6FB0", "#B07A2F"];
const TABS = [["requests", "Requests"], ["connections", "Connections"], ["followers", "Followers"], ["following", "Following"], ["blocked", "Blocked"]];
const AGE_LABEL = { kids: "Kids", teens: "Teens", adults: "Adults" };

function nameOf(p) { return (p && p.display_name) || "Teacher"; }
function hueFor(id) { let h = 0; for (const c of id || "") h = (h * 31 + c.charCodeAt(0)) % 6; return HUES[h]; }
function subOf(p) {
  if (!p) return "";
  const yrs = p.years_teaching === null || p.years_teaching === undefined || p.years_teaching === "" ? "" : Number(p.years_teaching) < 1 ? "New to teaching" : `${p.years_teaching} ${Number(p.years_teaching) === 1 ? "year" : "years"} teaching`;
  const ages = (p.teaches_ages || []).map((k) => AGE_LABEL[k]).filter(Boolean).join(", ");
  return [yrs, ages].filter(Boolean).join(" · ");
}

export default function TeacherNetwork() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [params, setParams] = useSearchParams();
  const [lists, setLists] = useState(undefined); // undefined loading, null not available
  const [people, setPeople] = useState({});
  const [busy, setBusy] = useState(false);
  const { mine: myBlocks, refresh: refreshBlocked } = useBlocked();
  const [blockedPeople, setBlockedPeople] = useState({});

  const tab = TABS.some(([k]) => k === params.get("tab")) ? params.get("tab") : null;

  async function load() {
    if (!user) return;
    const l = await getNetworkLists(user.id);
    setLists(l);
    if (l) setPeople(await getPeople([...new Set([...l.requests, ...l.sent, ...l.connections, ...l.followers, ...l.following])]));
  }
  useEffect(() => { load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [user?.id]);
  useEffect(() => { getPeople(myBlocks).then(setBlockedPeople); }, [myBlocks]);

  async function act(fn) {
    if (busy) return;
    setBusy(true);
    await fn();
    await load();
    setBusy(false);
  }

  const active = tab || (lists && lists.requests.length ? "requests" : "connections");
  const counts = lists ? { blocked: myBlocks.length, requests: lists.requests.length, connections: lists.connections.length, followers: lists.followers.length, following: lists.following.length } : {};

  function Row({ id, children }) {
    const p = people[id] || blockedPeople[id];
    return (
      <div className="tn-row">
        <button type="button" className="tn-who" onClick={() => navigate(`/library/teacher/${id}`)}>
          <span className="tn-av" style={{ background: p?.avatar_url ? "transparent" : hueFor(id) }}>
            {p?.avatar_url ? <img src={p.avatar_url} alt="" /> : nameOf(p)[0].toUpperCase()}
          </span>
          <span className="tn-text"><b>{nameOf(p)}</b><small>{subOf(p)}</small></span>
        </button>
        <div className="tn-btns">{children}</div>
      </div>
    );
  }
  const msg = (id) => <button type="button" className="tn-btn tn-btn--soft" onClick={() => navigate(`/library/messages?to=${id}`)}>Message</button>;

  let body = null;
  if (lists === undefined) body = <p className="tn-status">Loading…</p>;
  else if (lists === null) body = <p className="tn-status">Following and connecting need a quick database update first (sql/add_follow_and_connect.sql).</p>;
  else if (active === "blocked") {
    body = myBlocks.length === 0 ? (
      <div className="tn-empty"><h3>No one blocked</h3><p>Teachers you block appear here. They are never told, and you can unblock them any time.</p></div>
    ) : myBlocks.map((id) => (
      <Row key={id} id={id}>
        <button type="button" className="tn-btn tn-btn--soft" disabled={busy} onClick={() => act(async () => { await unblockUser(id); await refreshBlocked(); })}>Unblock</button>
      </Row>
    ));
  } else if (active === "requests") {
    body = (
      <>
        {lists.requests.length === 0 && lists.sent.length === 0 ? (
          <div className="tn-empty"><h3>No pending requests</h3><p>When a teacher wants to connect, you will see it here.</p></div>
        ) : (
          <>
            {lists.requests.map((id) => (
              <Row key={id} id={id}>
                <button type="button" className="tn-btn tn-btn--coral" disabled={busy} onClick={() => act(() => respondConnection(id, true))}>Accept</button>
                <button type="button" className="tn-btn tn-btn--soft" disabled={busy} onClick={() => act(() => respondConnection(id, false))}>Decline</button>
              </Row>
            ))}
            {lists.sent.length > 0 && <div className="tn-label">Waiting for a reply</div>}
            {lists.sent.map((id) => (
              <Row key={id} id={id}>
                <button type="button" className="tn-btn tn-btn--soft" disabled={busy} onClick={() => act(() => removeConnection(id))}>Cancel request</button>
              </Row>
            ))}
          </>
        )}
      </>
    );
  } else {
    const ids = lists[active];
    const empty = { connections: ["No connections yet", "Open a teacher's profile and tap Connect."], followers: ["No followers yet", "When teachers follow you, they will show up here."], following: ["Not following anyone yet", "Open a teacher's profile and tap Follow to see their posts in your Homeroom."] }[active];
    body = ids.length === 0 ? (
      <div className="tn-empty"><h3>{empty[0]}</h3><p>{empty[1]}</p></div>
    ) : ids.map((id) => (
      <Row key={id} id={id}>
        {active === "followers" && !lists.following.includes(id) && <button type="button" className="tn-btn tn-btn--line" disabled={busy} onClick={() => act(() => followUser(id))}>Follow back</button>}
        {active === "followers" && lists.following.includes(id) && <button type="button" className="tn-btn tn-btn--soft" disabled={busy} onClick={() => act(() => unfollowUser(id))} title="Click to unfollow">Following</button>}
        {active === "following" && <button type="button" className="tn-btn tn-btn--soft" disabled={busy} onClick={() => act(() => unfollowUser(id))} title="Click to unfollow">Following</button>}
        {msg(id)}
      </Row>
    ));
  }

  return (
    <div className="tn-shell">
      <style>{CSS}</style>
      <div className="tn-page">
        <h1 className="tn-title">Your network</h1>
        {user && <SuggestedTeachers limit={5} />}
        {user ? (
          <>
            <div className="tn-tabs" role="tablist">
              {TABS.map(([k, label]) => (
                <button type="button" role="tab" aria-selected={active === k} key={k} className={`${active === k ? "is-on" : ""}${k === "requests" && counts.requests ? " is-alert" : ""}`} onClick={() => setParams({ tab: k })}>
                  {label}{lists ? <em>{counts[k]}</em> : null}
                </button>
              ))}
            </div>
            <div className="tn-card">{body}</div>
          </>
        ) : <p className="tn-status">Log in to see your network.</p>}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');
.tn-shell { --ink: #2B2A4A; --muted: #8B84A3; --coral: #FF6B4A; --navy: #1B2A4A; --hair: rgba(43,42,74,0.1); min-height: 100%; background: #F1F3F8; color: var(--ink); font-family: 'Quicksand', sans-serif; }
.tn-shell * { box-sizing: border-box; }
.tn-page { max-width: 980px; margin: 0 auto; padding: 28px 24px 120px; }
.tn-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; margin: 0 4px 16px; }
.tn-tabs { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; margin-bottom: 14px; padding: 2px; }
.tn-tabs::-webkit-scrollbar { display: none; }
.tn-tabs button { flex-shrink: 0; border: none; background: #fff; border-radius: 999px; padding: 9px 16px; font-family: inherit; font-size: 13.5px; font-weight: 700; color: var(--muted); box-shadow: 0 0 0 1px var(--hair); display: flex; gap: 7px; align-items: center; cursor: pointer; }
.tn-tabs button:hover:not(.is-on) { color: var(--ink); }
.tn-tabs button.is-on { background: var(--navy); color: #fff; box-shadow: none; }
.tn-tabs button:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.tn-tabs em { font-style: normal; font-size: 11.5px; background: #F1F3F8; color: var(--ink); border-radius: 999px; padding: 1px 8px; }
.tn-tabs button.is-on em { background: rgba(255,255,255,0.2); color: #fff; }
.tn-tabs button.is-alert:not(.is-on) em { background: var(--coral); color: #fff; }
.tn-card { background: #fff; border-radius: 24px; padding: 6px; box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 12px 28px -20px rgba(27,42,74,0.3); }
.tn-row { display: flex; align-items: center; gap: 14px; padding: 10px 12px; border-radius: 18px; }
.tn-row:hover { background: #F7F8FC; }
.tn-who { flex: 1; min-width: 0; display: flex; align-items: center; gap: 14px; border: none; background: none; padding: 0; text-align: left; cursor: pointer; font-family: inherit; color: inherit; }
.tn-who:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; border-radius: 12px; }
.tn-av { width: 46px; height: 46px; border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; flex-shrink: 0; overflow: hidden; }
.tn-av img { width: 100%; height: 100%; object-fit: cover; }
.tn-text { min-width: 0; display: flex; flex-direction: column; }
.tn-text b { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16px; }
.tn-text small { font-size: 12.5px; font-weight: 600; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tn-btns { display: flex; gap: 8px; flex-shrink: 0; }
.tn-btn { border: none; border-radius: 999px; padding: 8px 16px; font-family: inherit; font-size: 13px; font-weight: 700; cursor: pointer; white-space: nowrap; }
.tn-btn:disabled { opacity: 0.6; cursor: default; }
.tn-btn:focus-visible { outline: 3px solid var(--navy); outline-offset: 2px; }
.tn-btn--coral { background: var(--coral); color: #fff; }
.tn-btn--coral:hover:not(:disabled) { background: #E0502F; }
.tn-btn--soft { background: #F1F3F8; color: var(--ink); }
.tn-btn--soft:hover:not(:disabled) { background: #E7EAF2; }
.tn-btn--line { background: #fff; color: var(--ink); box-shadow: inset 0 0 0 1.5px rgba(43,42,74,0.14); }
.tn-btn--line:hover:not(:disabled) { box-shadow: inset 0 0 0 1.5px var(--coral); color: #E0502F; }
.tn-label { font-size: 11.5px; letter-spacing: 0.09em; text-transform: uppercase; color: var(--muted); font-weight: 700; padding: 14px 14px 4px; }
.tn-status { text-align: center; color: var(--muted); padding: 40px 12px; }
.tn-empty { text-align: center; padding: 40px 20px; }
.tn-empty h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0 0 4px; }
.tn-empty p { margin: 0; font-size: 13.5px; font-weight: 600; color: var(--muted); line-height: 1.5; }
@media (max-width: 640px) {
  .tn-page { padding: 18px 12px 100px; }
  .tn-row { gap: 10px; padding: 10px; }
  .tn-av { width: 40px; height: 40px; font-size: 14px; }
  .tn-btn { padding: 8px 12px; font-size: 12.5px; }
}
`;
