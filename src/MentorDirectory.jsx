import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { teachingBadge } from "./ProfileSettings.jsx";
import { MENTOR_SPECIALTIES } from "./mentorConstants";

function initials(name) {
  const parts = (name || "Teacher").split(" ").filter(Boolean);
  return (parts[0]?.[0] || "T") + (parts[1]?.[0] || "");
}

export default function MentorDirectory() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(() => searchParams.get("filter") || "All");

  function selectFilter(f) {
    setFilter(f);
    const next = new URLSearchParams(searchParams);
    if (f === "All") next.delete("filter");
    else next.set("filter", f);
    setSearchParams(next, { replace: true });
  }

  useEffect(() => {
    loadMentors();
  }, []);

  async function loadMentors() {
    setLoading(true);
    const { data } = await supabase
      .from("profiles")
      .select("id, display_name, avatar_url, years_teaching, mentor_specialty, mentor_format, mentor_price_type, mentor_price_amount, mentor_bio")
      .eq("is_mentor", true);
    setMentors(data || []);
    setLoading(false);
  }

  const visible = filter === "All" ? mentors : mentors.filter((m) => m.mentor_specialty === filter);
  const specialtiesInUse = [...new Set(mentors.map((m) => m.mentor_specialty).filter(Boolean))];
  const filterOptions = ["All", ...MENTOR_SPECIALTIES.filter((s) => specialtiesInUse.includes(s))];

  return (
    <div className="md-shell">
      <style>{CSS}</style>
      <div className="md-topbar">
        <button type="button" className="md-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="md-brand-logo" />entenco
        </button>
        <h1 className="md-topbar-title">Find a Mentor</h1>
      </div>

      <div className="md-page">
        <div className="md-hero">
          <p className="md-eyebrow">Teacher's Desk</p>
          <h2 className="md-heading">Learn from a teacher who's been there</h2>
          <p className="md-lede">Every mentor here has 5+ years of experience and was reviewed by Sentenco staff. Message one to get started.</p>
          <a className="md-apply-link" href="/library/mentors/apply">Want to mentor others? Apply here →</a>
        </div>

        {filterOptions.length > 2 && (
          <div className="md-filters">
            {filterOptions.map((f) => (
              <button type="button" key={f} className={`md-filter ${filter === f ? "is-active" : ""}`} onClick={() => selectFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <p className="md-status">Loading…</p>
        ) : visible.length === 0 ? (
          <p className="md-status">No mentors match yet, check back soon.</p>
        ) : (
          <div className="md-grid">
            {visible.map((m) => {
              const badge = teachingBadge(m.years_teaching);
              return (
                <div className="md-card" key={m.id}>
                  <button type="button" className="md-card-head" onClick={() => navigate(`/library/teacher/${m.id}`)}>
                    <span className="md-avatar">{m.avatar_url ? <img src={m.avatar_url} alt="" /> : initials(m.display_name)}</span>
                    <div className="md-card-head-text">
                      <p className="md-name">{m.display_name || "Teacher"}{badge && <img className="md-badge" src={badge.img} alt={badge.label} title={badge.label} />}</p>
                      <span className="md-specialty">{m.mentor_specialty}</span>
                    </div>
                  </button>
                  {m.mentor_bio && <p className="md-bio">{m.mentor_bio}</p>}
                  <div className="md-tags">
                    <span className="md-tag">{m.mentor_format === "1:1" ? "1:1" : m.mentor_format === "group" ? "Group" : "1:1 & Group"}</span>
                    <span className="md-tag">{m.mentor_price_type === "free" ? "Free" : `₱${m.mentor_price_amount}/session`}</span>
                  </div>
                  {user && user.id !== m.id && (
                    <button type="button" className="md-contact" onClick={() => navigate(`/library/messages?to=${m.id}`)}>
                      Message
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.md-shell {
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
.md-shell * { box-sizing: border-box; }

.md-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.md-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.md-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.md-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.md-page { max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; }
.md-status { text-align: center; color: var(--muted); padding: 40px 0; }

.md-hero { text-align: center; max-width: 52ch; margin: 0 auto 28px; }
.md-eyebrow {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--coral); margin: 0 0 8px;
}
.md-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; margin: 0 0 10px; text-wrap: balance; }
.md-lede { font-size: 13.5px; color: var(--muted); line-height: 1.65; margin: 0 0 10px; }
.md-apply-link { font-size: 12.5px; font-weight: 700; color: var(--navy); text-decoration: none; }
.md-apply-link:hover { text-decoration: underline; }

.md-filters { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 0 0 24px; }
.md-filter {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; color: var(--muted);
  background: var(--card); border: 1px solid var(--hair); border-radius: 999px; padding: 6px 14px; cursor: pointer;
}
.md-filter:hover { color: var(--ink); }
.md-filter.is-active { background: var(--navy); border-color: var(--navy); color: #fff; }

.md-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 620px) { .md-grid { grid-template-columns: 1fr; } }

.md-card {
  background: var(--card); border: 1px solid var(--hair); border-top: 4px solid var(--coral);
  border-radius: 18px; padding: 18px; display: flex; flex-direction: column;
  box-shadow: 0 8px 22px rgba(43,42,74,0.05);
}
.md-card-head { display: flex; align-items: center; gap: 10px; margin: 0 0 12px; width: 100%; background: none; border: none; padding: 0; cursor: pointer; text-align: left; font: inherit; }
.md-card-head:hover .md-name { color: var(--coral); }
.md-avatar {
  flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; overflow: hidden;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px;
  display: flex; align-items: center; justify-content: center;
}
.md-avatar img { width: 100%; height: 100%; object-fit: cover; }
.md-card-head-text { flex: 1; min-width: 0; }
.md-name { display: flex; align-items: center; gap: 6px; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; margin: 0; }
.md-badge { height: 18px; width: auto; }
.md-specialty { font-size: 11.5px; color: var(--coral); font-weight: 700; }
.md-bio { font-size: 12.5px; color: var(--muted); line-height: 1.5; margin: 0 0 12px; flex: 1; }
.md-tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 14px; }
.md-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; color: var(--navy);
  background: var(--navy-pale); border-radius: 999px; padding: 3px 9px;
}
.md-contact {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: #fff;
  background: var(--coral); border: none; border-radius: 999px; padding: 9px; cursor: pointer;
}
.md-contact:hover { filter: brightness(0.94); }
`;
