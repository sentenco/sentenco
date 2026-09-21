import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";

const ADMIN_EMAIL = "caldrin1999@gmail.com";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function AdminTeachers() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="adt-shell">
      <style>{CSS}</style>
      <div className="adt-topbar">
        <button type="button" className="adt-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="adt-brand-logo" />entenco
        </button>
        <h1 className="adt-topbar-title">Teachers</h1>
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
            <p className="adt-count">{teachers.length} registered {teachers.length === 1 ? "teacher" : "teachers"}</p>
            <div className="adt-table">
              <div className="adt-row adt-row--head">
                <span>Name</span>
                <span>Email</span>
                <span>Years teaching</span>
                <span>Mentor</span>
                <span>Joined</span>
              </div>
              {teachers.map((t) => (
                <div className="adt-row" key={t.id}>
                  <span className="adt-name">{t.display_name || "Unnamed"}</span>
                  <span className="adt-email">{t.email}</span>
                  <span>{t.years_teaching ?? "—"}</span>
                  <span>{t.is_mentor ? "Yes" : "—"}</span>
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
.adt-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.adt-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.adt-page { max-width: 860px; margin: 0 auto; padding: 32px 24px 80px; }
.adt-status { text-align: center; color: var(--muted); padding: 60px 0; }
.adt-error { font-size: 12.5px; color: var(--coral); background: var(--coral-pale); border-radius: 10px; padding: 10px 14px; margin: 0 0 16px; }
.adt-count { font-size: 12.5px; color: var(--muted); margin: 0 0 14px; }

.adt-table { background: var(--card); border: 1px solid var(--hair); border-radius: 18px; overflow: hidden; }
.adt-row {
  display: grid; grid-template-columns: 1.2fr 1.6fr 1fr 0.7fr 1fr;
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

@media (max-width: 640px) {
  .adt-row, .adt-row--head { grid-template-columns: 1fr 1fr; row-gap: 4px; }
  .adt-row--head span:nth-child(3), .adt-row--head span:nth-child(4), .adt-row--head span:nth-child(5) { display: none; }
  .adt-row span:nth-child(3), .adt-row span:nth-child(4), .adt-row span:nth-child(5) { display: none; }
}
`;
