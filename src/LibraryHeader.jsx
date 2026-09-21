import { useState, useEffect, useRef } from "react";
import { SUPPORT_EMAIL } from "./siteConfig.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import AuthForm from "./AuthForm";
import { timeAgo } from "./slideDeckTypes";
import { CSS as LIBRARY_CSS } from "./Library";

// Shared top nav for pages that live outside Library.jsx's own render tree
// (Speaking modality hubs/tracks, Grammar Foundation module pages) but
// should still show the same Homeroom/Articles/.../Listening bar so a
// student never loses their way back to the rest of the app. This is a
// self-contained copy of Library.jsx's own <header className="gc-band">
// block -- duplicated rather than extracted-and-shared with Library.jsx
// itself, to avoid any risk of touching Library.jsx's already-working
// internals. If the two ever drift, this is the file to reconcile.

const CATEGORIES = ["Articles", "Reading", "Speaking", "Grammar", "Vocabulary", "Writing", "Listening"];
const SEARCH_MODES = [
  { key: "dictionary", label: "Dictionary" },
  { key: "grammar", label: "Grammar Checker" },
  { key: "translator", label: "Translator" },
];

// Route prefixes that belong to a category but live outside /library's own
// query-string-driven category switch. Extend this list as more standalone
// hub/track pages are added under a modality or module family.
const SPEAKING_PREFIXES = ["/library/forge", "/library/relay", "/library/ascend", "/library/bridge", "/library/derive", "/library/sequence", "/library/shift"];
const GRAMMAR_PREFIX = "/library/grammar/";
const LISTENING_PREFIX = "/library/listening/";

function activeCategoryFor(pathname) {
  if (SPEAKING_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"))) return "Speaking";
  if (pathname.startsWith(GRAMMAR_PREFIX)) return "Grammar";
  if (pathname.startsWith(LISTENING_PREFIX)) return "Listening";
  return null;
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModeIcon({ mode }) {
  if (mode === "dictionary") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5v-15Z" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      </svg>
    );
  }
  if (mode === "grammar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 2 4 4-13 13H5v-4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

export default function LibraryHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, plan, signOut } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === "caldrin1999@gmail.com";

  const [query, setQuery] = useState("");
  const [authMode, setAuthMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notifWrapRef = useRef(null);
  const unreadNotifCount = notifications.filter((n) => !n.read_at).length;
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [searchModeMenuOpen, setSearchModeMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(null);
  const [promptQuery, setPromptQuery] = useState("");
  const searchWrapRef = useRef(null);

  const activeCategory = activeCategoryFor(location.pathname);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setSearchModeMenuOpen(false);
      }
      if (notifWrapRef.current && !notifWrapRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (!user) { setAvatarUrl(null); return; }
    supabase.from("profiles").select("avatar_url").eq("id", user.id).maybeSingle().then(({ data }) => {
      setAvatarUrl(data?.avatar_url || null);
    });
  }, [user]);

  useEffect(() => {
    if (!user) { setNotifications([]); return; }
    supabase
      .from("notifications")
      .select("id, type, actor_name, post_id, read_at, created_at")
      .eq("recipient_id", user.id)
      .order("created_at", { ascending: false })
      .limit(20)
      .then(({ data }) => setNotifications(data || []));
  }, [user]);

  useEffect(() => {
    if (!user) { setUnreadMessageCount(0); return; }
    async function loadUnreadMessages() {
      const { data: convos } = await supabase
        .from("conversations")
        .select("id")
        .or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id}`);
      const ids = (convos || []).map((c) => c.id);
      if (!ids.length) { setUnreadMessageCount(0); return; }
      const { count } = await supabase
        .from("messages")
        .select("id", { count: "exact", head: true })
        .in("conversation_id", ids)
        .is("read_at", null)
        .neq("sender_id", user.id);
      setUnreadMessageCount(count || 0);
    }
    loadUnreadMessages();
    const channel = supabase
      .channel(`unread-badge-${user.id}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, loadUnreadMessages)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, loadUnreadMessages)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user]);

  function openNotifPanel() {
    setNotifOpen((wasOpen) => {
      const nowOpen = !wasOpen;
      if (nowOpen && unreadNotifCount > 0) {
        const unreadIds = notifications.filter((n) => !n.read_at).map((n) => n.id);
        setNotifications((prev) => prev.map((n) => (n.read_at ? n : { ...n, read_at: new Date().toISOString() })));
        supabase.from("notifications").update({ read_at: new Date().toISOString() }).in("id", unreadIds);
      }
      return nowOpen;
    });
  }

  function goToNotification(n) {
    setNotifOpen(false);
    navigate(n.post_id ? `/library/community?post=${n.post_id}` : "/library/community");
  }

  function changeCategory(cat) {
    navigate(`/library?cat=${encodeURIComponent(cat)}`);
  }

  function pickSearchMode(key) {
    setSearchModeMenuOpen(false);
    if (plan !== "pro_plus") {
      navigate("/library/subscription");
      return;
    }
    setSearchMode(key);
    setPromptQuery("");
  }

  function clearSearchMode() {
    setSearchMode(null);
    setPromptQuery("");
  }

  function submitSearchMode() {
    const q = promptQuery.trim();
    if (!q || !searchMode) return;
    navigate(`/library/search?mode=${searchMode}&q=${encodeURIComponent(q)}`);
    setPromptQuery("");
    setSearchMode(null);
  }

  function submitLibrarySearch() {
    const q = query.trim();
    navigate(q ? `/library?q=${encodeURIComponent(q)}` : "/library");
  }

  return (
    <>
      <style>{LIBRARY_CSS}</style>
      <header className="gc-band">
        <div className="gc-topbar">
          <a href="/library" className="gc-header-brand" onClick={(e) => { e.preventDefault(); navigate("/library"); }}>
            <img src="/logo-sentenco.png" alt="" className="gc-header-logo" />entenco
          </a>
          <div className="gc-topbar-actions">
            <div className={`gc-search ${searchMode ? "has-mode" : ""}`} ref={searchWrapRef}>
              <div className="gc-search-icon-wrap">
                <button
                  type="button"
                  className="gc-search-icon-btn"
                  onClick={() => setSearchModeMenuOpen((o) => !o)}
                  title="Dictionary, Grammar & Translator"
                  aria-label="Open Dictionary, Grammar & Translator"
                  aria-expanded={searchModeMenuOpen}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="9" cy="9" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="13.6" y1="13.6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                {searchModeMenuOpen && (
                  <div className="gc-search-mode-menu">
                    <div className="gc-search-mode-heading">Look something up</div>
                    {SEARCH_MODES.map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        className={`gc-search-mode-item gc-search-mode-item--${m.key}`}
                        onClick={() => pickSearchMode(m.key)}
                      >
                        <span className="gc-search-mode-icon"><ModeIcon mode={m.key} /></span>
                        {m.label}
                        {plan !== "pro_plus" && <span className="gc-search-mode-lock">Pro+</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {searchMode && (
                <span className={`gc-search-pill gc-search-pill--${searchMode}`}>
                  <ModeIcon mode={searchMode} />
                  {SEARCH_MODES.find((m) => m.key === searchMode)?.label}
                  <button type="button" className="gc-search-pill-x" onClick={clearSearchMode} aria-label="Clear mode">×</button>
                </span>
              )}
              <input
                type="text"
                placeholder={searchMode ? `Ask ${SEARCH_MODES.find((m) => m.key === searchMode)?.label}…` : "Search library…"}
                value={searchMode ? promptQuery : query}
                onChange={(e) => (searchMode ? setPromptQuery(e.target.value) : setQuery(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  e.preventDefault();
                  if (searchMode) submitSearchMode();
                  else submitLibrarySearch();
                }}
              />
              {searchMode && (
                <button
                  type="button"
                  className="gc-search-send-btn"
                  onClick={submitSearchMode}
                  disabled={!promptQuery.trim()}
                  aria-label="Submit"
                >
                  <SendIcon />
                </button>
              )}
            </div>
            {!user ? (
              <>
                <button className="gc-btn" onClick={() => setAuthMode("login")}>Log in</button>
                <button className="gc-btn primary" onClick={() => setAuthMode("signup")}>Sign up</button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={`notif-btn${unreadMessageCount > 0 ? " has-unread" : ""}`}
                  onClick={() => navigate("/library/messages")}
                  aria-label="Convo"
                  title="Convo"
                >
                  <ChatIcon />
                  {unreadMessageCount > 0 && <span className="notif-dot" />}
                </button>
                <div className="notif-wrap" ref={notifWrapRef}>
                  <button
                    type="button"
                    className={`notif-btn${unreadNotifCount > 0 ? " has-unread" : ""}`}
                    onClick={openNotifPanel}
                    aria-label="Notifications"
                    aria-expanded={notifOpen}
                  >
                    <BellIcon />
                    {unreadNotifCount > 0 && <span className="notif-dot" />}
                  </button>
                  {notifOpen && (
                    <div className="notif-panel">
                      <div className="notif-panel-head">Notifications</div>
                      {notifications.length === 0 ? (
                        <div className="notif-empty">
                          <BellIcon />
                          <p>You're all caught up.</p>
                        </div>
                      ) : (
                        <div className="notif-list">
                          {notifications.map((n) => (
                            <button
                              type="button"
                              key={n.id}
                              className={`notif-item${n.read_at ? "" : " is-unread"}`}
                              onClick={() => goToNotification(n)}
                            >
                              <span className="notif-item-text">
                                <strong>{n.actor_name || "Someone"}</strong>{" "}
                                {n.type === "post_reply" ? "replied to your post" : "replied to your comment"}
                              </span>
                              <span className="notif-item-time">{timeAgo(n.created_at)}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="account-wrap">
                  <button className="avatar-btn" onClick={() => setMenuOpen((m) => !m)} aria-label="Account menu">
                    {avatarUrl ? <img src={avatarUrl} alt="" className="avatar-btn-img" /> : <UserIcon />}
                  </button>
                  {menuOpen && (
                    <div className="account-menu">
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library"); setMenuOpen(false); }}>Profile</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/files"); setMenuOpen(false); }}>File Cabinet</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/subscription"); setMenuOpen(false); }}>Subscription</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/mentors"); setMenuOpen(false); }}>Find a Mentor</button>
                      {isAdmin && (
                        <button type="button" className="account-menu-link" onClick={() => { navigate("/library/admin/mentors"); setMenuOpen(false); }}>Mentor Applications</button>
                      )}
                      {isAdmin && (
                        <button type="button" className="account-menu-link" onClick={() => { navigate("/library/admin/teachers"); setMenuOpen(false); }}>Teachers</button>
                      )}
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/legal/terms"); setMenuOpen(false); }}>Terms & Privacy</button>
                      <a href={`mailto:${SUPPORT_EMAIL}`}>Help &amp; Support</a>
                      <button className="logout-btn" onClick={() => { signOut(); setMenuOpen(false); }}>Log out</button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="gc-navbar">
          <div className="gc-sections">
            <button
              className={`gc-sec-tab ${activeCategory === null ? "is-active" : ""}`}
              onClick={() => navigate("/library")}
            >
              Homeroom
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`gc-sec-tab ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => changeCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gc-nav-divider" />

          <div className="gc-editions">
            <a href="/library/spark" className="gc-ed-spark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>
              Spark Class
            </a>
            <span className="gc-editions-sep" />
            <button className="gc-ed-curr" onClick={() => navigate("/library/curriculum")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11"/></svg>
              Curriculum
            </button>
            <span className="gc-editions-sep" />
            <button className="gc-ed-custom" onClick={() => changeCategory("Customized Lessons")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" /></svg>
              Custom Lessons
            </button>
          </div>
        </div>
      </header>
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
    </>
  );
}
