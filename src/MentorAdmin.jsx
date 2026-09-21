import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import ConfirmDialog from "./ConfirmDialog";

const ADMIN_EMAIL = "caldrin1999@gmail.com";

export default function MentorAdmin() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [apps, setApps] = useState([]);
  const [applicants, setApplicants] = useState({});
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState(null);
  const [rejectTarget, setRejectTarget] = useState(null);

  useEffect(() => {
    if (!isAdmin) { setLoading(false); return; }
    loadApps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  async function loadApps() {
    setLoading(true);
    const { data, error: loadError } = await supabase
      .from("mentor_applications")
      .select("id, applicant_id, specialty, format, price_type, price_amount, pitch, status, created_at")
      .eq("status", "pending")
      .order("created_at", { ascending: true });
    if (loadError) { setError(loadError.message); setLoading(false); return; }
    setApps(data || []);
    const ids = [...new Set((data || []).map((a) => a.applicant_id))];
    if (ids.length) {
      const { data: profs } = await supabase.from("profiles").select("id, display_name, years_teaching").in("id", ids);
      const map = {};
      (profs || []).forEach((p) => { map[p.id] = p; });
      setApplicants(map);
    }
    setLoading(false);
  }

  async function approve(app) {
    setBusyId(app.id);
    setError(null);
    const { error: profileError } = await supabase.from("profiles").update({
      is_mentor: true,
      mentor_specialty: app.specialty,
      mentor_format: app.format,
      mentor_price_type: app.price_type,
      mentor_price_amount: app.price_amount,
      mentor_bio: app.pitch,
    }).eq("id", app.applicant_id);
    if (profileError) { setError(profileError.message); setBusyId(null); return; }
    const { error: appError } = await supabase.from("mentor_applications").update({
      status: "approved",
      reviewed_at: new Date().toISOString(),
      reviewed_by: user.id,
    }).eq("id", app.id);
    setBusyId(null);
    if (appError) { setError(appError.message); return; }
    setApps((prev) => prev.filter((a) => a.id !== app.id));
  }

  async function reject(app) {
    setBusyId(app.id);
    setError(null);
    const { error: appError } = await supabase.from("mentor_applications").update({
      status: "rejected",
      reviewed_at: new Date().toISOString(),
      reviewed_by: user.id,
    }).eq("id", app.id);
    setBusyId(null);
    if (appError) { setError(appError.message); return; }
    setApps((prev) => prev.filter((a) => a.id !== app.id));
  }

  if (authLoading || loading) return null;

  return (
    <div className="mad-shell">
      <style>{CSS}</style>
      <div className="mad-topbar">
        <button type="button" className="mad-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="mad-brand-logo" />entenco
        </button>
        <h1 className="mad-topbar-title">Mentor Applications</h1>
      </div>

      <div className="mad-page">
        {!isAdmin ? (
          <p className="mad-status">Not authorized.</p>
        ) : (
          <>
            {error && <div className="mad-error">{error}</div>}
            {apps.length === 0 ? (
              <p className="mad-status">No pending applications.</p>
            ) : (
              apps.map((app) => {
                const applicant = applicants[app.applicant_id];
                return (
                  <div className="mad-card" key={app.id}>
                    <div className="mad-card-head">
                      <div>
                        <p className="mad-name">{applicant?.display_name || "Unnamed teacher"}</p>
                        <p className="mad-meta">{applicant?.years_teaching ?? "?"} years teaching</p>
                      </div>
                      <a className="mad-files-link" href="/library/files" target="_blank" rel="noreferrer">View credentials →</a>
                    </div>
                    <div className="mad-tags">
                      <span className="mad-tag">{app.specialty}</span>
                      <span className="mad-tag">{app.format === "1:1" ? "1:1" : app.format === "group" ? "Group" : "1:1 & Group"}</span>
                      <span className="mad-tag">{app.price_type === "free" ? "Free" : `₱${app.price_amount}/session`}</span>
                    </div>
                    <p className="mad-pitch">{app.pitch}</p>
                    <div className="mad-actions">
                      <button type="button" className="mad-reject" onClick={() => setRejectTarget(app)} disabled={busyId === app.id}>Reject</button>
                      <button type="button" className="mad-approve" onClick={() => approve(app)} disabled={busyId === app.id}>
                        {busyId === app.id ? "Working…" : "Approve"}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </>
        )}
      </div>

      <ConfirmDialog
        open={!!rejectTarget}
        title="Reject this application?"
        message={rejectTarget ? `${applicants[rejectTarget.applicant_id]?.display_name || "This teacher"} will be notified they weren't approved this time.` : ""}
        confirmLabel="Reject"
        onConfirm={() => { reject(rejectTarget); setRejectTarget(null); }}
        onCancel={() => setRejectTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.mad-shell {
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
.mad-shell * { box-sizing: border-box; }

.mad-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.mad-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.mad-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.mad-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.mad-page { max-width: 640px; margin: 0 auto; padding: 32px 24px 80px; }
.mad-status { text-align: center; color: var(--muted); padding: 60px 0; }
.mad-error { font-size: 12.5px; color: var(--coral); background: var(--coral-pale); border-radius: 10px; padding: 10px 14px; margin: 0 0 16px; }

.mad-card {
  background: var(--card); border: 1px solid var(--hair); border-radius: 18px; padding: 18px 20px; margin: 0 0 16px;
}
.mad-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin: 0 0 10px; }
.mad-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; margin: 0; }
.mad-meta { font-size: 11.5px; color: var(--muted); margin: 2px 0 0; }
.mad-files-link { font-size: 12px; font-weight: 700; color: var(--navy); text-decoration: none; white-space: nowrap; }
.mad-files-link:hover { text-decoration: underline; }

.mad-tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 12px; }
.mad-tag {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; color: var(--navy);
  background: var(--navy-pale); border-radius: 999px; padding: 4px 10px;
}
.mad-pitch { font-size: 13px; line-height: 1.55; color: var(--ink); margin: 0 0 16px; }

.mad-actions { display: flex; justify-content: flex-end; gap: 10px; }
.mad-reject {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
  background: var(--hair); border: none; border-radius: 999px; padding: 8px 18px; cursor: pointer;
}
.mad-reject:hover:not(:disabled) { color: var(--coral); }
.mad-approve {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: #fff;
  background: var(--navy); border: none; border-radius: 999px; padding: 8px 18px; cursor: pointer;
}
.mad-approve:hover:not(:disabled) { filter: brightness(1.2); }
.mad-reject:disabled, .mad-approve:disabled { opacity: 0.5; cursor: default; }
`;
