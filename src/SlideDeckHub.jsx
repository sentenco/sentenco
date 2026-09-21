import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { newDeckSlides, timeAgo } from "./slideDeckTypes";
import ConfirmDialog from "./ConfirmDialog";

export default function SlideDeckHub() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState(() => {
    const fromUrl = searchParams.get("tab");
    return fromUrl === "mine" ? "mine" : "new";
  });

  function selectTab(key) {
    setTab(key);
    const next = new URLSearchParams(searchParams);
    next.set("tab", key);
    setSearchParams(next, { replace: true });
  }

  useEffect(() => {
    if (!user) {
      setDecks([]);
      setLoading(false);
      return;
    }
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("slide_decks")
        .select("id, title, slides, updated_at")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });
      if (!isMounted) return;
      setDecks(error ? [] : data || []);
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [user]);

  async function createDeck() {
    if (!user || creating) return;
    setCreating(true);
    const { data, error } = await supabase
      .from("slide_decks")
      .insert({ user_id: user.id, title: "Untitled deck", slides: newDeckSlides() })
      .select()
      .single();
    setCreating(false);
    if (!error && data) navigate(`/library/slides/${data.id}/edit`);
  }

  async function deleteDeck(id) {
    setDeletingId(id);
    const { error } = await supabase.from("slide_decks").delete().eq("id", id);
    setDeletingId(null);
    if (!error) setDecks((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <div className="sdh-shell">
      <style>{CSS}</style>
      <header className="sdh-topbar">
        <span className="sdh-topbar-title">Slide Deck Builder</span>
      </header>

      <div className="sdh-page">
        <div className="sdh-stage">
          <div className="sdh-hero">
            <span className="sdh-eyebrow">Sentenco · Today</span>
            <h1 className="sdh-hero-title">Your decks</h1>
            <p className="sdh-hero-blurb">
              Build a slide deck for any topic, then present it straight from your browser.
            </p>
          </div>

          {authLoading ? null : !user ? (
            <div className="sdh-locked">
              <span className="sdh-locked-icon">🔒</span>
              <h2 className="sdh-locked-title">Log in to build and save decks</h2>
              <p className="sdh-locked-blurb">Your decks are saved to your account so you can come back and edit them anytime.</p>
              <div className="sdh-locked-actions">
                <button type="button" className="sdh-btn sdh-btn--primary" onClick={() => setAuthMode("login")}>Log in</button>
                <button type="button" className="sdh-btn sdh-btn--ghost" onClick={() => setAuthMode("signup")}>Sign up</button>
              </div>
            </div>
          ) : (
            <>
              <div className="sdh-tabs">
                <button type="button" className={`sdh-tab ${tab === "new" ? "is-active" : ""}`} onClick={() => selectTab("new")}>New deck</button>
                <button type="button" className={`sdh-tab ${tab === "mine" ? "is-active" : ""}`} onClick={() => selectTab("mine")}>My decks{decks.length > 0 ? ` (${decks.length})` : ""}</button>
              </div>

              {tab === "new" ? (
                <div className="sdh-grid">
                  <button type="button" className="sdh-card sdh-card--new" onClick={createDeck} disabled={creating}>
                    <span className="sdh-new-icon">+</span>
                    <span className="sdh-new-label">{creating ? "Creating…" : "Blank"}</span>
                  </button>
                  <div className="sdh-card sdh-card--template">
                    <span className="sdh-template-tag">Coming soon</span>
                    <span className="sdh-card-icon">🖼️</span>
                    <span className="sdh-card-title">Templates</span>
                    <span className="sdh-card-meta">Ready-made designs will show up here.</span>
                  </div>
                </div>
              ) : (
                <div className="sdh-grid">
                  {loading ? (
                    <div className="sdh-empty">Loading your decks…</div>
                  ) : decks.length === 0 ? (
                    <div className="sdh-empty">No decks yet — start one from the New deck tab.</div>
                  ) : (
                    decks.map((deck) => (
                      <button
                        type="button"
                        key={deck.id}
                        className="sdh-card"
                        onClick={() => navigate(`/library/slides/${deck.id}/edit`)}
                      >
                        <button
                          type="button"
                          className="sdh-card-delete"
                          onClick={(e) => { e.stopPropagation(); setDeleteTarget(deck); }}
                          disabled={deletingId === deck.id}
                          aria-label="Delete deck"
                        >
                          ×
                        </button>
                        <span className="sdh-card-icon">🎞️</span>
                        <span className="sdh-card-title">{deck.title || "Untitled deck"}</span>
                        <span className="sdh-card-meta">
                          {(deck.slides || []).length} {(deck.slides || []).length === 1 ? "slide" : "slides"} · {timeAgo(deck.updated_at)}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete this deck?"
        message={deleteTarget ? `"${deleteTarget.title || "Untitled deck"}" will be gone for good.` : ""}
        confirmLabel="Delete"
        onConfirm={() => { deleteDeck(deleteTarget.id); setDeleteTarget(null); }}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.sdh-shell {
  min-height: 100vh;
  background: #FFFFFF;
  color: #2B2A1E;
  font-family: 'Quicksand', sans-serif;
}
.sdh-shell * { box-sizing: border-box; }

.sdh-topbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-bottom: 1px solid #F5E3D6;
  background: #FFFFFF;
}
.sdh-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 600; color: #2B2A1E; }

.sdh-page { padding: 24px; }

.sdh-stage {
  max-width: 1080px;
  margin: 0 auto;
  padding: clamp(28px, 4vw, 48px) clamp(20px, 4vw, 44px);
  border-radius: 24px;
  background:
    repeating-linear-gradient(180deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 64px),
    linear-gradient(180deg, #FFF3E9 0%, #FFE3CE 100%);
}

.sdh-hero { text-align: center; margin-bottom: 34px; }
.sdh-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #E5623A;
  background: rgba(229,98,58,0.14);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 14px;
}
.sdh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(26px, 3.4vw, 34px);
  font-weight: 600;
  margin: 0 0 10px;
}
.sdh-hero-blurb {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: #7A6A57;
  max-width: 520px;
  margin: 0 auto;
}

.sdh-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 22px; }
.sdh-tab {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #9A8A73;
  background: #FFFFFF;
  border: 1px solid #F5DFC7;
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
}
.sdh-tab.is-active { color: #FFFFFF; background: linear-gradient(135deg, #FF9A6B 0%, #E5623A 100%); border-color: transparent; }

.sdh-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.sdh-card--template { align-items: flex-start; cursor: default; opacity: 0.75; }
.sdh-template-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9A8A73;
  background: rgba(154,138,115,0.12);
  border-radius: 999px;
  padding: 4px 10px;
  margin-bottom: 8px;
}

.sdh-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid #F5DFC7;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  padding: 20px 18px;
  min-height: 140px;
  box-shadow: 0 10px 22px rgba(229,98,58,0.10);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.sdh-card:hover { transform: translateY(-3px); box-shadow: 0 16px 30px rgba(229,98,58,0.18); }

.sdh-card-icon { font-size: 26px; margin-bottom: auto; }
.sdh-card-title { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 600; color: #2B2A1E; margin-top: 14px; }
.sdh-card-meta { font-size: 11.5px; color: #9A8A73; margin-top: 4px; }

.sdh-card-delete {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.06);
  color: #9A8A73;
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sdh-card-delete:hover { background: rgba(214,57,42,0.14); color: #D6392A; }

.sdh-card--new {
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px dashed #F0C199;
  box-shadow: none;
  gap: 8px;
}
.sdh-card--new:hover { background: rgba(255,255,255,0.6); border-color: #E5623A; }
.sdh-new-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF9A6B 0%, #E5623A 100%);
  color: #FFFFFF;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sdh-new-label { font-family: 'Fredoka', sans-serif; font-size: 13.5px; font-weight: 600; color: #E5623A; }

.sdh-empty { grid-column: 1 / -1; text-align: center; padding: 20px; color: #9A8A73; font-size: 13px; }

.sdh-locked {
  max-width: 440px;
  margin: 0 auto;
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #F5DFC7;
  border-radius: 18px;
  padding: 36px 30px;
  box-shadow: 0 10px 22px rgba(229,98,58,0.10);
}
.sdh-locked-icon { font-size: 26px; }
.sdh-locked-title { font-family: 'Fredoka', sans-serif; font-size: 17px; font-weight: 600; color: #2B2A1E; margin: 10px 0 6px; }
.sdh-locked-blurb { font-size: 13px; line-height: 1.55; color: #7A6A57; margin: 0 0 20px; }
.sdh-locked-actions { display: flex; justify-content: center; gap: 10px; }

.sdh-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
}
.sdh-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF9A6B 0%, #E5623A 100%);
  box-shadow: 0 8px 18px rgba(229,98,58,0.28);
}
.sdh-btn--ghost {
  color: #E5623A;
  background: rgba(229,98,58,0.10);
}

@media (max-width: 900px) {
  .sdh-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .sdh-grid { grid-template-columns: 1fr; }
  .sdh-page { padding: 12px; }
  .sdh-stage { padding: 28px 16px 36px; }
}
`;
