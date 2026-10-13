import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ProfileSettings, { teachingBadge } from "./ProfileSettings.jsx";
import { timeAgo } from "./slideDeckTypes";

function initials(name) {
  const parts = (name || "Teacher").split(" ").filter(Boolean);
  return (parts[0]?.[0] || "T") + (parts[1]?.[0] || "");
}

export default function TeacherProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [posts, setPosts] = useState(null);       // null while loading
  const [editing, setEditing] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const isSelf = !!user && user.id === id;

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    supabase
      .from("profiles")
      .select("id, display_name, avatar_url, country, years_teaching, is_mentor, mentor_specialty, mentor_format, mentor_price_type, mentor_price_amount, mentor_bio")
      .eq("id", id)
      .maybeSingle()
      .then(({ data }) => {
        if (!data) setNotFound(true);
        setProfile(data);
        setLoading(false);
      });
  }, [id, reloadKey]);

  // Their posts in the Homeroom feed: the universal feed, plus the viewer's own company feed.
  useEffect(() => {
    if (!user) { setPosts([]); return undefined; }
    let off = false;
    setPosts(null);
    (async () => {
      const { data: me } = await supabase.from("profiles").select("company_id").eq("id", user.id).maybeSingle();
      let q = supabase.from("community_posts")
        .select("id, content, image_url, created_at")
        .eq("author_id", id)
        .order("created_at", { ascending: false })
        .limit(50);
      q = me?.company_id ? q.or(`company_id.is.null,company_id.eq.${me.company_id}`) : q.is("company_id", null);
      const { data } = await q;
      if (!off) setPosts(data || []);
    })();
    return () => { off = true; };
  }, [id, user, reloadKey]);

  const name = profile?.display_name || "Teacher";
  const badge = teachingBadge(profile?.years_teaching);
  const years = profile?.years_teaching;

  return (
    <div className="tp-shell">
      <style>{CSS}</style>
      <div className="tp-topbar">
        <button type="button" className="tp-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="tp-brand-logo" />entenco
        </button>
        <h1 className="tp-topbar-title">{isSelf ? "My profile" : "Profile"}</h1>
      </div>

      <div className="tp-page">
        {loading ? (
          <p className="tp-status">Loading…</p>
        ) : notFound ? (
          <p className="tp-status">Couldn't find that teacher.</p>
        ) : (
          <>
            <div className="tp-card">
              <div className="tp-cover" aria-hidden="true" />
              <div className="tp-head">
                <span className="tp-avatar">{profile.avatar_url ? <img src={profile.avatar_url} alt="" /> : initials(name)}</span>
                <div className="tp-head-text">
                  <div className="tp-name-row">
                    <h2 className="tp-name">{name}</h2>
                    {badge && <img className="tp-badge" src={badge.img} alt={badge.label} title={badge.label} />}
                    {profile.is_mentor && <span className="tp-mentor-tag">Mentor</span>}
                  </div>
                  <p className="tp-country">
                    {profile.country || "Country not shared"}
                    {years !== null && years !== undefined && years !== "" ? ` · ${Number(years) < 1 ? "New to teaching" : `${years} ${Number(years) === 1 ? "year" : "years"} teaching`}` : ""}
                  </p>
                </div>
                <div className="tp-actions">
                  {isSelf ? (
                    <button type="button" className="tp-btn" onClick={() => setEditing(true)}>Edit profile</button>
                  ) : user ? (
                    <button type="button" className="tp-btn" onClick={() => navigate(`/library/messages?to=${id}`)}>Message</button>
                  ) : null}
                </div>
              </div>

              <div className="tp-stats">
                <div className="tp-stat"><strong>{posts === null ? "–" : posts.length}</strong><span>{posts && posts.length === 1 ? "Post" : "Posts"}</span></div>
                <div className="tp-stat"><strong>{years !== null && years !== undefined && years !== "" ? years : "–"}</strong><span>Years teaching</span></div>
              </div>

              {profile.is_mentor && (
                <div className="tp-mentor-block">
                  <span className="tp-mentor-specialty">{profile.mentor_specialty}</span>
                  {profile.mentor_bio && <p className="tp-mentor-bio">{profile.mentor_bio}</p>}
                  <div className="tp-mentor-tags">
                    <span className="tp-tag">{profile.mentor_format === "1:1" ? "1:1" : profile.mentor_format === "group" ? "Group" : "1:1 & Group"}</span>
                    <span className="tp-tag">{profile.mentor_price_type === "free" ? "Free" : `₱${profile.mentor_price_amount}/session`}</span>
                  </div>
                </div>
              )}
            </div>

            <h3 className="tp-h3">Posts</h3>
            {!user ? (
              <p className="tp-status">Sign in to see posts.</p>
            ) : posts === null ? (
              <p className="tp-status">Loading posts…</p>
            ) : posts.length === 0 ? (
              <div className="tp-empty">
                <p>{isSelf ? "You haven't posted in Homeroom yet." : `${name} hasn't posted yet.`}</p>
                {isSelf && <button type="button" className="tp-btn" onClick={() => navigate("/library")}>Go to Homeroom</button>}
              </div>
            ) : (
              <div className="tp-posts">
                {posts.map((p) => (
                  <button key={p.id} type="button" className="tp-post" onClick={() => navigate(`/library/community?post=${p.id}`)}>
                    <span className="tp-post-time">{timeAgo(p.created_at)}</span>
                    <span className="tp-post-text">{p.content}</span>
                    {p.image_url && <img src={p.image_url} alt="" className="tp-post-img" loading="lazy" />}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      {editing && (
        <ProfileSettings
          onClose={() => setEditing(false)}
          onSaved={() => setReloadKey((k) => k + 1)}
        />
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.tp-shell {
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
.tp-shell * { box-sizing: border-box; }

.tp-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.tp-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.tp-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.tp-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.tp-page { max-width: 720px; margin: 0 auto; padding: 28px 20px 80px; }
.tp-status { text-align: center; color: var(--muted); padding: 40px 0; }

.tp-card {
  background: var(--card); border: 1px solid var(--hair); border-radius: 22px; overflow: hidden;
  box-shadow: 0 10px 28px rgba(43,42,74,0.06); padding-bottom: 20px;
}
.tp-cover { height: 110px; background: linear-gradient(120deg, #FDECE5 0%, #F3E7DA 55%, #E9ECF3 100%); }
.tp-head { display: flex; align-items: flex-end; gap: 16px; padding: 0 26px; margin-top: -44px; flex-wrap: wrap; }
.tp-avatar {
  width: 96px; height: 96px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 32px;
  display: flex; align-items: center; justify-content: center; border: 4px solid var(--card);
}
.tp-avatar img { width: 100%; height: 100%; object-fit: cover; }
.tp-head-text { flex: 1; min-width: 180px; padding-bottom: 4px; }
.tp-actions { padding-bottom: 6px; }
.tp-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; background: var(--coral); color: #fff;
  border: none; border-radius: 999px; padding: 10px 22px; cursor: pointer;
}
.tp-btn:hover { filter: brightness(0.94); }
.tp-stats { display: flex; gap: 28px; padding: 18px 26px 0; }
.tp-stat { display: flex; flex-direction: column; }
.tp-stat strong { font-family: 'Fredoka', sans-serif; font-size: 20px; font-weight: 600; }
.tp-stat span { font-size: 12px; color: var(--muted); font-weight: 600; }
.tp-h3 { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-weight: 700; margin: 26px 4px 10px; }
.tp-empty { background: var(--card); border: 1px dashed var(--hair); border-radius: 16px; padding: 26px; text-align: center; color: var(--muted); display: flex; flex-direction: column; gap: 12px; align-items: center; }
.tp-posts { display: flex; flex-direction: column; gap: 10px; }
.tp-post {
  text-align: left; font: inherit; color: inherit; cursor: pointer; background: var(--card); border: 1px solid var(--hair);
  border-radius: 14px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; width: 100%;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tp-post:hover { border-color: var(--coral); box-shadow: 0 6px 18px rgba(43,42,74,0.08); }
.tp-post:focus-visible { outline: 3px solid var(--coral); outline-offset: 2px; }
.tp-post-time { font-size: 12px; color: var(--muted); font-weight: 600; }
.tp-post-text { font-size: 14.5px; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; }
.tp-post-img { width: 100%; max-height: 260px; object-fit: cover; border-radius: 10px; }
.tp-name-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.tp-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 20px; margin: 0; }
.tp-badge { height: 22px; width: auto; }
.tp-mentor-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 10px; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--navy); background: var(--navy-pale); padding: 3px 9px; border-radius: 999px;
}
.tp-country { font-size: 12.5px; color: var(--muted); margin: 4px 0 0; }

.tp-mentor-block { margin: 18px 26px 0; padding-top: 16px; border-top: 1px solid var(--hair); text-align: left; }
.tp-mentor-specialty { font-size: 11.5px; font-weight: 800; color: var(--coral); text-transform: uppercase; letter-spacing: 0.05em; }
.tp-mentor-bio { font-size: 13px; color: var(--ink); line-height: 1.55; margin: 8px 0 12px; }
.tp-mentor-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tp-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; color: var(--navy);
  background: var(--navy-pale); border-radius: 999px; padding: 3px 9px;
}

`;
