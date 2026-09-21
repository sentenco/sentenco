import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { teachingBadge } from "./ProfileSettings.jsx";

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
  }, [id]);

  const name = profile?.display_name || "Teacher";
  const badge = teachingBadge(profile?.years_teaching);
  const isSelf = user && user.id === id;

  return (
    <div className="tp-shell">
      <style>{CSS}</style>
      <div className="tp-topbar">
        <button type="button" className="tp-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="tp-brand-logo" />entenco
        </button>
        <h1 className="tp-topbar-title">Profile</h1>
      </div>

      <div className="tp-page">
        {loading ? (
          <p className="tp-status">Loading…</p>
        ) : notFound ? (
          <p className="tp-status">Couldn't find that teacher.</p>
        ) : (
          <div className="tp-card">
            <span className="tp-avatar">{profile.avatar_url ? <img src={profile.avatar_url} alt="" /> : initials(name)}</span>
            <div className="tp-name-row">
              <h2 className="tp-name">{name}</h2>
              {badge && <img className="tp-badge" src={badge.img} alt={badge.label} title={badge.label} />}
              {profile.is_mentor && <span className="tp-mentor-tag">Mentor</span>}
            </div>
            {profile.country && <p className="tp-country">{profile.country}</p>}

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

            {user && !isSelf && (
              <button type="button" className="tp-message-btn" onClick={() => navigate(`/library/messages?to=${id}`)}>
                Message
              </button>
            )}
          </div>
        )}
      </div>
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
.tp-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.tp-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.tp-page { max-width: 420px; margin: 0 auto; padding: 48px 24px 80px; }
.tp-status { text-align: center; color: var(--muted); padding: 40px 0; }

.tp-card {
  background: var(--card); border: 1px solid var(--hair); border-top: 4px solid var(--coral);
  border-radius: 22px; padding: 30px 26px; text-align: center;
  box-shadow: 0 10px 28px rgba(43,42,74,0.06);
}
.tp-avatar {
  width: 72px; height: 72px; border-radius: 50%; overflow: hidden; margin: 0 auto 16px;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px;
  display: flex; align-items: center; justify-content: center;
}
.tp-avatar img { width: 100%; height: 100%; object-fit: cover; }
.tp-name-row { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
.tp-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 20px; margin: 0; }
.tp-badge { height: 22px; width: auto; }
.tp-mentor-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 10px; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--navy); background: var(--navy-pale); padding: 3px 9px; border-radius: 999px;
}
.tp-country { font-size: 12.5px; color: var(--muted); margin: 4px 0 0; }

.tp-mentor-block { margin: 20px 0 0; padding-top: 18px; border-top: 1px solid var(--hair); text-align: left; }
.tp-mentor-specialty { font-size: 11.5px; font-weight: 800; color: var(--coral); text-transform: uppercase; letter-spacing: 0.05em; }
.tp-mentor-bio { font-size: 13px; color: var(--ink); line-height: 1.55; margin: 8px 0 12px; }
.tp-mentor-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tp-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; color: var(--navy);
  background: var(--navy-pale); border-radius: 999px; padding: 3px 9px;
}

.tp-message-btn {
  width: 100%; margin-top: 22px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px;
  background: var(--coral); color: #fff; border: none; border-radius: 999px; padding: 11px; cursor: pointer;
}
.tp-message-btn:hover { filter: brightness(0.94); }
`;
