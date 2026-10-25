import { useEffect, useRef, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useAuth } from "../AuthContext";
import AuthForm from "../AuthForm";
import CommunityFeed from "../CommunityFeed.jsx";
import Messenger from "../Messenger.jsx";
import TeacherProfile from "../TeacherProfile.jsx";
import ProfileSettings from "../ProfileSettings.jsx";
import NotificationPanel from "../NotificationPanel.jsx";

// Phone shell for the Sentenco app: three tabs (Homeroom, Convo, Settings) around the
// screens the website already has. Paths keep the website's names so links inside the
// feed, Convo and profiles keep working.

const TABS = [
  { key: "home", label: "Homeroom", to: "/", match: (p) => p === "/" || p.startsWith("/library/community") || p.startsWith("/library/teacher") },
  { key: "convo", label: "Convo", to: "/library/messages", match: (p) => p.startsWith("/library/messages") },
  { key: "settings", label: "Settings", to: "/settings", match: (p) => p.startsWith("/settings") },
];

function TabIcon({ k }) {
  const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (k === "home") return <svg {...p}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>;
  if (k === "convo") return <svg {...p}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.1a8.4 8.4 0 1 1 16.1-4.4z" /></svg>;
  return <svg {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg>;
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function useUnreadCounts(user) {
  const [notifications, setNotifications] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    if (!user) return;
    supabase.from("notifications").select("id, type, actor_id, actor_name, post_id, read_at, created_at")
      .eq("recipient_id", user.id).order("created_at", { ascending: false }).limit(20)
      .then(({ data }) => setNotifications(data || []));
  }, [user]);

  useEffect(() => {
    if (!user) return;
    async function load() {
      const { data: convos } = await supabase.from("conversations").select("id").or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id}`);
      const ids = (convos || []).map((c) => c.id);
      if (!ids.length) { setUnreadMessages(0); return; }
      const { count } = await supabase.from("messages").select("id", { count: "exact", head: true })
        .in("conversation_id", ids).is("read_at", null).neq("sender_id", user.id);
      setUnreadMessages(count || 0);
    }
    load();
    const channel = supabase.channel(`app-unread-${user.id}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, load)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, load)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user]);

  function markRead(n) {
    if (n.read_at) return;
    const now = new Date().toISOString();
    setNotifications((prev) => prev.map((x) => (x.id === n.id ? { ...x, read_at: now } : x)));
    supabase.from("notifications").update({ read_at: now }).eq("id", n.id).then(() => {});
  }
  function markAll() {
    const now = new Date().toISOString();
    setNotifications((prev) => prev.map((n) => (n.read_at ? n : { ...n, read_at: now })));
    supabase.from("notifications").update({ read_at: now }).eq("recipient_id", user.id).is("read_at", null).then(() => {});
  }
  return { notifications, unreadMessages, markRead, markAll, unreadNotifs: notifications.filter((n) => !n.read_at).length };
}

function HomeScreen() {
  const [params] = useSearchParams();
  return <CommunityFeed focusPostId={params.get("post")} />;
}

function SettingsScreen() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  return (
    <div className="app-settings">
      <h1>Settings</h1>
      <div className="app-card">
        <button type="button" className="app-row" onClick={() => navigate(`/library/teacher/${user.id}`)}>My profile<span>›</span></button>
        <button type="button" className="app-row" onClick={() => setEditing(true)}>Edit my details<span>›</span></button>
      </div>
      <div className="app-card">
        <button type="button" className="app-row" onClick={() => window.open("https://sentenco.com/library/legal/privacy", "_blank")}>Privacy policy<span>›</span></button>
        <button type="button" className="app-row" onClick={() => window.open("https://sentenco.com/library/legal/terms", "_blank")}>Terms of use<span>›</span></button>
      </div>
      <div className="app-card">
        <button type="button" className="app-row is-danger" onClick={signOut}>Log out</button>
      </div>
      <p className="app-fine">Signed in as {user.email}. To delete your account, open My profile.</p>
      {editing && <ProfileSettings onClose={() => setEditing(false)} onSaved={() => {}} />}
    </div>
  );
}

function SignedOut() {
  const [mode, setMode] = useState(null);
  return (
    <div className="app-welcome">
      <img src="/logo-sentenco.png" alt="" className="app-welcome-logo" />
      <h1>Sentenco</h1>
      <p>The place where English teachers share, ask and help each other.</p>
      <button type="button" className="app-btn" onClick={() => setMode("signup")}>Create an account</button>
      <button type="button" className="app-btn is-soft" onClick={() => setMode("login")}>Log in</button>
      {mode && <AuthForm mode={mode} onClose={() => setMode(null)} />}
    </div>
  );
}

export default function AppShell() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const counts = useUnreadCounts(user);
  // The bell panel is open only on the screen where it was opened.
  const [bellFor, setBellFor] = useState(null);
  const bellOpen = bellFor === location.pathname;
  const scrollRef = useRef(null);
  const onHome = TABS[0].match(location.pathname);

  useEffect(() => { scrollRef.current?.scrollTo(0, 0); }, [location.pathname]);

  function goToNotification(n) {
    setBellFor(null);
    counts.markRead(n);
    if (["connect_request", "connect_accepted", "new_follower"].includes(n.type) && n.actor_id) navigate(`/library/teacher/${n.actor_id}`);
    else navigate(n.post_id ? `/library/community?post=${n.post_id}` : "/library/community");
  }

  if (loading) return <div className="app-boot"><style>{CSS}</style></div>;
  if (!user) return <><style>{CSS}</style><SignedOut /></>;

  return (
    <div className="app-shell">
      <style>{CSS}</style>
      <header className="app-top">
        <span className="app-brand"><img src="/logo-sentenco.png" alt="" />entenco</span>
        {onHome && (
          <button type="button" className="app-bell" onClick={() => setBellFor(bellOpen ? null : location.pathname)} aria-label="Notifications">
            <BellIcon />{counts.unreadNotifs > 0 && <b>{counts.unreadNotifs}</b>}
          </button>
        )}
        {bellOpen && (
          <div className="app-bell-panel">
            <NotificationPanel notifications={counts.notifications} onGo={goToNotification} onRead={counts.markRead} onMarkAll={counts.markAll} />
          </div>
        )}
      </header>
      <main className="app-main" ref={scrollRef}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/library" element={<Navigate to="/" replace />} />
          <Route path="/library/community" element={<HomeScreen />} />
          <Route path="/library/messages" element={<Messenger />} />
          <Route path="/library/teacher/:id" element={<TeacherProfile />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <nav className="app-tabs">
        {TABS.map((t) => (
          <button key={t.key} type="button" className={t.match(location.pathname) ? "is-on" : ""} onClick={() => navigate(t.to)}>
            <span className="app-tab-icon"><TabIcon k={t.key} />{t.key === "convo" && counts.unreadMessages > 0 && <b>{counts.unreadMessages > 9 ? "9+" : counts.unreadMessages}</b>}</span>
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

const CSS = `
html, body, #root { height: 100%; margin: 0; }
body { background: #FBFAF7; overscroll-behavior: none; -webkit-tap-highlight-color: transparent; }
.app-boot { height: 100%; background: #FBFAF7; }
.app-shell { --ink: #2B2A4A; height: 100%; display: flex; flex-direction: column; background: #FBFAF7; color: var(--ink); font-family: 'Quicksand', sans-serif; }
.app-top { position: relative; flex: none; display: flex; align-items: center; justify-content: space-between; padding: calc(env(safe-area-inset-top) + 8px) 16px 8px; background: #FBFAF7; border-bottom: 1px solid rgba(43,42,74,0.08); min-height: 52px; }
.app-brand { display: flex; align-items: center; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 22px; color: #2B2A4A; }
.app-brand img { height: 26px; width: auto; }
.app-bell { position: relative; width: 40px; height: 40px; border-radius: 14px; border: none; background: #fff; box-shadow: 0 0 0 1px rgba(43,42,74,0.1); color: #2B2A4A; display: flex; align-items: center; justify-content: center; }
.app-bell svg { width: 20px; height: 20px; }
.app-bell b, .app-tab-icon b { position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 999px; background: #FF6B4A; color: #fff; font-size: 11px; line-height: 18px; text-align: center; }
.app-bell-panel { position: absolute; top: 100%; left: 12px; right: 12px; z-index: 40; }
.app-bell-panel .np { position: static; width: 100%; max-width: none; }
.app-main { flex: 1; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch; }
.app-tabs { flex: none; display: flex; background: #fff; border-top: 1px solid rgba(43,42,74,0.09); padding-bottom: env(safe-area-inset-bottom); }
.app-tabs button { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px 0 7px; border: none; background: none; font: 600 11px 'Quicksand', sans-serif; color: #8B84A3; }
.app-tabs button.is-on { color: #FF6B4A; }
.app-tab-icon { position: relative; display: flex; }
.app-tab-icon svg { width: 24px; height: 24px; }
.app-settings { padding: 16px; display: flex; flex-direction: column; gap: 14px; }
.app-settings h1 { font-family: 'Fredoka', sans-serif; font-size: 26px; margin: 4px 0 0; }
.app-card { background: #fff; border-radius: 20px; box-shadow: 0 0 0 1px rgba(43,42,74,0.08); overflow: hidden; }
.app-row { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 16px 18px; border: none; background: none; font: 600 16px 'Quicksand', sans-serif; color: #2B2A4A; text-align: left; }
.app-row + .app-row { border-top: 1px solid rgba(43,42,74,0.08); }
.app-row span { color: #8B84A3; font-size: 20px; }
.app-row.is-danger { color: #D1432A; }
.app-fine { color: #8B84A3; font-size: 12px; margin: 0 4px; }
.app-welcome { min-height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 12px; padding: 32px 24px; background: #FBFAF7; color: #2B2A4A; font-family: 'Quicksand', sans-serif; text-align: center; }
.app-welcome-logo { width: 84px; margin: 0 auto; }
.app-welcome h1 { font-family: 'Fredoka', sans-serif; font-size: 34px; margin: 0; }
.app-welcome p { margin: 0 0 12px; color: #6B6585; font-size: 16px; }
.app-btn { border: none; border-radius: 16px; padding: 15px; font: 700 16px 'Quicksand', sans-serif; background: #FF6B4A; color: #fff; }
.app-btn.is-soft { background: #fff; color: #2B2A4A; box-shadow: 0 0 0 1px rgba(43,42,74,0.14); }
`;
