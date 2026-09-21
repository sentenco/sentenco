import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { MENTOR_SPECIALTIES, MENTOR_FORMATS, MENTOR_MIN_YEARS } from "./mentorConstants";

export default function MentorApply() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [yearsTeaching, setYearsTeaching] = useState(null);
  const [isMentor, setIsMentor] = useState(false);
  const [existingApp, setExistingApp] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const [specialty, setSpecialty] = useState("");
  const [format, setFormat] = useState("1:1");
  const [priceType, setPriceType] = useState("free");
  const [priceAmount, setPriceAmount] = useState("");
  const [pitch, setPitch] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    (async () => {
      const [{ data: profile }, { data: apps }] = await Promise.all([
        supabase.from("profiles").select("years_teaching, is_mentor").eq("id", user.id).maybeSingle(),
        supabase.from("mentor_applications").select("id, status, created_at").eq("applicant_id", user.id).order("created_at", { ascending: false }).limit(1),
      ]);
      setYearsTeaching(profile?.years_teaching ?? 0);
      setIsMentor(!!profile?.is_mentor);
      setExistingApp(apps && apps.length ? apps[0] : null);
      setLoading(false);
    })();
  }, [user]);

  async function submitApplication() {
    if (!specialty || !pitch.trim()) return;
    if (priceType === "paid" && !priceAmount) return;
    setSubmitting(true);
    setError(null);
    const { error: insertError } = await supabase.from("mentor_applications").insert({
      applicant_id: user.id,
      specialty,
      format,
      price_type: priceType,
      price_amount: priceType === "paid" ? Number(priceAmount) : null,
      pitch: pitch.trim(),
    });
    setSubmitting(false);
    if (insertError) { setError(insertError.message); return; }
    setSubmitted(true);
  }

  if (authLoading || loading) return null;

  const eligible = (yearsTeaching || 0) >= MENTOR_MIN_YEARS;

  return (
    <div className="ma-shell">
      <style>{CSS}</style>
      <div className="ma-topbar">
        <button type="button" className="ma-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="ma-brand-logo" />entenco
        </button>
        <h1 className="ma-topbar-title">Become a Mentor</h1>
      </div>

      <div className="ma-page">
        {!user ? (
          <p className="ma-status">Sign in to apply.</p>
        ) : isMentor ? (
          <div className="ma-status-card">
            <p className="ma-status-title">You're already a mentor</p>
            <p className="ma-status-body">Thanks for helping other teachers grow. Head to your profile to manage your mentor details.</p>
          </div>
        ) : submitted || (existingApp && existingApp.status === "pending") ? (
          <div className="ma-status-card">
            <p className="ma-status-title">Application submitted</p>
            <p className="ma-status-body">Sentenco staff will review it and get back to you. This usually takes a few days.</p>
          </div>
        ) : !eligible ? (
          <div className="ma-status-card">
            <p className="ma-status-title">Not quite yet</p>
            <p className="ma-status-body">Mentoring is open to teachers with {MENTOR_MIN_YEARS}+ years of experience. Add your years teaching in Profile settings if this doesn't look right.</p>
          </div>
        ) : (
          <>
            <div className="ma-hero">
              <p className="ma-eyebrow">Teacher's Desk</p>
              <h2 className="ma-heading">Mentor other teachers</h2>
              <p className="ma-lede">Share what you know with newer teachers, 1:1 or in groups, free or paid, your call. Applications are reviewed by Sentenco staff.</p>
            </div>

            {existingApp && existingApp.status === "rejected" && (
              <p className="ma-reapply-note">Your last application wasn't approved. You're welcome to apply again below.</p>
            )}

            <p className="ma-credentials-note">
              Make sure your teaching credentials are uploaded in <a href="/library/files">File Cabinet</a> before applying, staff will review them alongside this form.
            </p>

            {error && <div className="ma-error">{error}</div>}

            <div className="ma-field">
              <label className="ma-label">Your specialty</label>
              <div className="ma-pill-grid">
                {MENTOR_SPECIALTIES.map((s) => (
                  <button
                    type="button"
                    key={s}
                    className={`ma-pill ${specialty === s ? "is-active" : ""}`}
                    onClick={() => setSpecialty(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="ma-field">
              <label className="ma-label">Session format</label>
              <div className="ma-pill-grid">
                {MENTOR_FORMATS.map((f) => (
                  <button
                    type="button"
                    key={f.key}
                    className={`ma-pill ${format === f.key ? "is-active" : ""}`}
                    onClick={() => setFormat(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="ma-field">
              <label className="ma-label">Pricing</label>
              <div className="ma-pill-grid">
                <button type="button" className={`ma-pill ${priceType === "free" ? "is-active" : ""}`} onClick={() => setPriceType("free")}>Free</button>
                <button type="button" className={`ma-pill ${priceType === "paid" ? "is-active" : ""}`} onClick={() => setPriceType("paid")}>Paid</button>
              </div>
              {priceType === "paid" && (
                <div className="ma-price-row">
                  <span className="ma-price-currency">₱</span>
                  <input
                    type="number"
                    min="0"
                    className="ma-price-input"
                    value={priceAmount}
                    onChange={(e) => setPriceAmount(e.target.value)}
                    placeholder="per session"
                  />
                </div>
              )}
            </div>

            <div className="ma-field">
              <label className="ma-label">Tell us why you'd like to mentor</label>
              <textarea
                className="ma-textarea"
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
                placeholder="Your teaching background, what you're best at helping with, anything staff should know…"
                rows={5}
              />
            </div>

            <button
              type="button"
              className="ma-submit"
              onClick={submitApplication}
              disabled={submitting || !specialty || !pitch.trim() || (priceType === "paid" && !priceAmount)}
            >
              {submitting ? "Submitting…" : "Submit application"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.ma-shell {
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
.ma-shell * { box-sizing: border-box; }

.ma-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.ma-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.ma-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.ma-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.ma-page { max-width: 560px; margin: 0 auto; padding: 40px 24px 80px; }
.ma-status { text-align: center; color: var(--muted); padding: 60px 0; }

.ma-status-card {
  background: var(--card); border: 1px solid var(--hair); border-top: 4px solid var(--navy);
  border-radius: 20px; padding: 26px; text-align: center;
}
.ma-status-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0 0 8px; }
.ma-status-body { font-size: 13.5px; color: var(--muted); line-height: 1.6; margin: 0; }

.ma-hero { text-align: center; max-width: 48ch; margin: 0 auto 24px; }
.ma-eyebrow {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--coral); margin: 0 0 8px;
}
.ma-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; margin: 0 0 10px; text-wrap: balance; }
.ma-lede { font-size: 13.5px; color: var(--muted); line-height: 1.65; margin: 0; }

.ma-reapply-note {
  font-size: 12.5px; color: var(--navy); background: var(--navy-pale);
  border-radius: 10px; padding: 10px 14px; margin: 0 0 16px;
}
.ma-credentials-note {
  font-size: 12.5px; color: var(--muted); background: var(--coral-pale);
  border-radius: 10px; padding: 10px 14px; margin: 0 0 24px; line-height: 1.5;
}
.ma-credentials-note a { color: var(--coral); font-weight: 700; }
.ma-error { font-size: 12.5px; color: var(--coral); background: var(--coral-pale); border-radius: 10px; padding: 10px 14px; margin: 0 0 16px; }

.ma-field { margin: 0 0 22px; }
.ma-label { display: block; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px; margin: 0 0 10px; }
.ma-pill-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.ma-pill {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--ink);
  background: var(--card); border: 1px solid var(--hair); border-radius: 999px; padding: 8px 16px; cursor: pointer;
}
.ma-pill:hover { border-color: var(--coral); color: var(--coral); }
.ma-pill.is-active { background: var(--coral); border-color: var(--coral); color: #fff; }

.ma-price-row { display: flex; align-items: center; gap: 6px; margin-top: 10px; max-width: 180px; }
.ma-price-currency { font-family: 'Fredoka', sans-serif; font-weight: 600; color: var(--muted); }
.ma-price-input {
  flex: 1; border: 1px solid var(--hair); border-radius: 10px; padding: 9px 12px;
  font: inherit; font-size: 13.5px; color: var(--ink); outline: none;
}
.ma-price-input:focus { border-color: var(--coral); }

.ma-textarea {
  display: block; width: 100%; resize: vertical; border: 1px solid var(--hair); border-radius: 14px;
  padding: 12px 14px; font: inherit; font-size: 13.5px; color: var(--ink); outline: none;
}
.ma-textarea:focus { border-color: var(--coral); }
.ma-textarea::placeholder { color: var(--muted); }

.ma-submit {
  width: 100%; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px;
  background: var(--coral); color: #fff; border: none; border-radius: 999px; padding: 13px; cursor: pointer;
}
.ma-submit:disabled { opacity: 0.45; cursor: default; }
.ma-submit:not(:disabled):hover { filter: brightness(0.94); }
`;
