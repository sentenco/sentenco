import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { useBlocked } from "./safetyApi.js";
import { teachingBadge } from "./ProfileSettings.jsx";
import { timeAgo } from "./slideDeckTypes";

// Homeroom search: finds teachers (by name or country) and Community posts
// (by text or author). Opens a teacher's profile or the post in the feed.

function initials(name) {
  const parts = (name || "Teacher").split(" ").filter(Boolean);
  return ((parts[0]?.[0] || "T") + (parts[1]?.[0] || "")).toUpperCase();
}

// PostgREST's .or() splits on commas and parentheses, and % and _ are wildcards.
const clean = (s) => s.replace(/[,()%_\\*]/g, " ").replace(/\s+/g, " ").trim();

function snippet(text, term, len = 170) {
  const t = (text || "").replace(/\s+/g, " ").trim();
  const i = t.toLowerCase().indexOf(term.toLowerCase());
  if (i < 0 || t.length <= len) return t.slice(0, len) + (t.length > len ? "…" : "");
  const start = Math.max(0, i - 50);
  return (start > 0 ? "…" : "") + t.slice(start, start + len) + (start + len < t.length ? "…" : "");
}

function Hit({ text, term }) {
  const i = term ? text.toLowerCase().indexOf(term.toLowerCase()) : -1;
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="hs-mark">{text.slice(i, i + term.length)}</mark>
      {text.slice(i + term.length)}
    </>
  );
}

export default function HomeroomSearch({ query, navigate }) {
  const { user, loading: authLoading } = useAuth();
  const term = clean(query);
  const { hidden: hiddenIds } = useBlocked();
  const [state, setState] = useState({ loading: false, teachers: [], posts: [], error: false });

  useEffect(() => {
    if (!user || term.length < 2) { setState({ loading: false, teachers: [], posts: [], error: false }); return undefined; }
    let off = false;
    setState((s) => ({ ...s, loading: true }));
    const id = setTimeout(async () => {
      const pat = `%${term}%`;
      const { data: me } = await supabase.from("profiles").select("company_id").eq("id", user.id).maybeSingle();
      const scope = me?.company_id ? `company_id.is.null,company_id.eq.${me.company_id}` : "company_id.is.null";
      const [t, p] = await Promise.all([
        supabase.from("profiles")
          .select("id, display_name, avatar_url, country, years_teaching, is_mentor")
          .or(`display_name.ilike.${pat},country.ilike.${pat}`)
          .not("display_name", "is", null)
          .limit(12),
        supabase.from("community_posts")
          .select("id, author_id, author_name, content, created_at, image_url, company_id")
          .or(`content.ilike.${pat},author_name.ilike.${pat}`)
          .or(scope)
          .order("created_at", { ascending: false })
          .limit(20),
      ]);
      if (off) return;
      setState({ loading: false, teachers: t.data || [], posts: p.data || [], error: !!(t.error && p.error) });
    }, 300);
    return () => { off = true; clearTimeout(id); };
  }, [term, user]);

  if (authLoading) return null;
  if (!user) {
    return (
      <div className="hs-wrap">
        <style>{CSS}</style>
        <p className="hs-note">Sign in to search teachers and Homeroom posts.</p>
      </div>
    );
  }
  if (term.length < 2) {
    return (
      <div className="hs-wrap">
        <style>{CSS}</style>
        <p className="hs-note">Type at least 2 letters to search teachers and posts.</p>
      </div>
    );
  }

  const { loading, error } = state;
  const teachers = state.teachers.filter((t) => !hiddenIds.includes(t.id));
  const posts = state.posts.filter((p) => !hiddenIds.includes(p.author_id));
  const empty = !loading && !teachers.length && !posts.length;

  return (
    <div className="hs-wrap">
      <style>{CSS}</style>
      <h2 className="hs-title">Results for “{term}”</h2>
      {error && <p className="hs-note">Search isn't working right now. Please try again in a moment.</p>}
      {loading && <p className="hs-note">Searching…</p>}
      {empty && !error && <p className="hs-note">No teachers or posts match “{term}”.</p>}

      {teachers.length > 0 && (
        <section className="hs-section">
          <h3 className="hs-h3">Teachers</h3>
          <div className="hs-teachers">
            {teachers.map((t) => {
              const badge = teachingBadge(t.years_teaching);
              return (
                <button key={t.id} type="button" className="hs-teacher" onClick={() => navigate(`/library/teacher/${t.id}`)}>
                  {t.avatar_url ? <img src={t.avatar_url} alt="" className="hs-avatar" /> : <span className="hs-avatar hs-avatar--fb">{initials(t.display_name)}</span>}
                  <span className="hs-teacher-text">
                    <span className="hs-teacher-name"><span><Hit text={t.display_name || ""} term={term} />{t.id === user.id ? " (you)" : ""}</span>
                      {badge && <img className="hs-badge" src={badge.img} alt={badge.label} title={badge.label} />}
                    </span>
                    <span className="hs-teacher-sub">
                      {t.country ? <Hit text={t.country} term={term} /> : "Country not shared"}
                      {t.is_mentor ? " · Mentor" : ""}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="hs-section">
          <h3 className="hs-h3">Posts</h3>
          <div className="hs-posts">
            {posts.map((p) => (
              <button key={p.id} type="button" className="hs-post" onClick={() => navigate(`/library/community?post=${p.id}`)}>
                <span className="hs-post-head">
                  <span className="hs-post-author"><Hit text={p.author_name || "A teacher"} term={term} /></span>
                  <span className="hs-post-time">{timeAgo(p.created_at)}</span>
                </span>
                <span className="hs-post-body"><Hit text={snippet(p.content, term)} term={term} /></span>
                {p.image_url && <span className="hs-post-img">Includes a picture</span>}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

const CSS = `
.hs-wrap { max-width: 760px; margin: 0 auto; padding: 8px 4px 40px; font-family: 'Quicksand', sans-serif; color: #2B2A4A; }
.hs-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 22px; margin: 4px 0 14px; }
.hs-note { font-size: 14px; color: #8B84A3; margin: 10px 0; }
.hs-section { margin-bottom: 22px; }
.hs-h3 { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #8B84A3; font-weight: 700; margin: 0 0 8px; }
.hs-teachers { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 10px; }
.hs-teacher, .hs-post {
  text-align: left; font: inherit; color: inherit; cursor: pointer; background: #fff;
  border: 1px solid rgba(43,42,74,0.1); border-radius: 14px; transition: border-color 0.15s, box-shadow 0.15s;
}
.hs-teacher:hover, .hs-post:hover { border-color: #FF6B4A; box-shadow: 0 6px 18px rgba(43,42,74,0.08); }
.hs-teacher:focus-visible, .hs-post:focus-visible { outline: 3px solid #FF6B4A; outline-offset: 2px; }
.hs-teacher { display: flex; align-items: center; gap: 12px; padding: 12px 14px; }
.hs-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.hs-avatar--fb { display: flex; align-items: center; justify-content: center; background: #FF6B4A; color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; }
.hs-teacher-text { display: flex; flex-direction: column; min-width: 0; gap: 2px; }
.hs-teacher-name { font-weight: 700; font-size: 14.5px; display: flex; align-items: center; gap: 6px; }
.hs-teacher-sub { font-size: 12.5px; color: #8B84A3; }
.hs-badge { height: 20px; width: auto; }
.hs-posts { display: flex; flex-direction: column; gap: 10px; }
.hs-post { display: flex; flex-direction: column; gap: 6px; padding: 14px 16px; width: 100%; }
.hs-post-head { display: flex; justify-content: space-between; gap: 10px; font-size: 13px; }
.hs-post-author { font-weight: 700; }
.hs-post-time { color: #8B84A3; flex-shrink: 0; }
.hs-post-body { font-size: 14px; line-height: 1.55; overflow-wrap: anywhere; }
.hs-post-img { font-size: 12px; color: #8B84A3; }
.hs-mark { background: #FDECE5; color: #C2411F; border-radius: 3px; padding: 0 2px; }
`;
