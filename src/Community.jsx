import { useNavigate, useSearchParams } from "react-router-dom";
import CommunityFeed from "./CommunityFeed.jsx";

const NAV_CATEGORIES = ["Articles", "Reading", "Speaking", "Grammar", "Vocabulary", "Writing", "Listening"];

export default function Community() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const focusPostId = searchParams.get("post");

  return (
    <div className="cm-shell">
      <style>{CSS}</style>
      <header className="cm-topbar">
        <button type="button" className="cm-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentenco.png" alt="" className="cm-brand-logo" />entenco
        </button>
        <h1 className="cm-topbar-title">Teacher Community</h1>
      </header>

      <nav className="cm-nav-tabs">
        <button type="button" className="cm-nav-tab" onClick={() => navigate("/library")}>Homeroom</button>
        {NAV_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className="cm-nav-tab"
            onClick={() => navigate(`/library?cat=${encodeURIComponent(cat)}`)}
          >
            {cat}
          </button>
        ))}
        <button type="button" className="cm-nav-tab is-active">Community</button>
      </nav>

      <div className="cm-page">
        <div className="cm-stage">
          <CommunityFeed focusPostId={focusPostId} />
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.cm-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --hair: rgba(43,42,74,0.09);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.cm-shell * { box-sizing: border-box; }

.cm-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 28px;
  border-bottom: 1px solid var(--hair);
  background: var(--card);
}
.cm-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--ink);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.cm-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.cm-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.cm-nav-tabs {
  display: flex; align-items: center; justify-content: center; gap: 0;
  padding: 4px 6px; font-family: 'Quicksand', sans-serif;
  overflow-x: auto; background: var(--card); border-bottom: 1px solid var(--hair);
}
.cm-nav-tab {
  font-size: 9.5px; font-weight: 800; letter-spacing: 0; text-transform: uppercase;
  padding: 6px 5px; color: var(--ink); border: none; background: none; cursor: pointer;
  white-space: nowrap; text-decoration: none; flex-shrink: 1;
}
.cm-nav-tab:not(:last-child) { border-right: 1px solid var(--hair); }
.cm-nav-tab:hover { color: var(--coral); }
.cm-nav-tab.is-active { background: var(--ink); color: #fff; border-radius: 999px; }

@media (min-width: 680px) {
  .cm-nav-tabs { padding: 4px 12px; }
  .cm-nav-tab { font-size: 11px; letter-spacing: 0.02em; padding: 7px 8px; }
}
@media (min-width: 900px) {
  .cm-nav-tabs { padding: 4px 28px; }
  .cm-nav-tab { font-size: 12.5px; letter-spacing: 0.05em; padding: 8px 16px; }
}

.cm-page { padding: 24px; }
.cm-stage { max-width: 640px; margin: 0 auto; }

@media (max-width: 640px) {
  .cm-page { padding: 14px; }
}
`;
