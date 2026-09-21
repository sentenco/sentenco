import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";
import tier1Img from "./assets/community/badges/tier1-less-than-1yr.png";
import tier2Img from "./assets/community/badges/tier2-1-2yrs.png";
import tier3Img from "./assets/community/badges/tier3-3-5yrs.png";
import tier4Img from "./assets/community/badges/tier4-5-10yrs.png";
import tier5Img from "./assets/community/badges/tier5-10-plus-yrs.png";

function initials(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "T") + (parts[1]?.[0] || "")).toUpperCase();
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.8a1.5 1.5 0 0 1 1.5-1.5h1.3l.9-1.5h5.6l.9 1.5H14a1.5 1.5 0 0 1 1.5 1.5v6.7a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5Z" />
      <circle cx="9" cy="10" r="2.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

// Five tiers, matching the user's grouping -- represented by real medal
// artwork (generated externally, cropped into individual transparent PNGs)
// instead of drawn icons. Each tier stores a representative "years" value
// so the existing years_teaching column/range logic still works: picking a
// badge just sets years_teaching to that tier's representative number,
// there's no separate numeric input anymore.
export const BADGE_TIERS = [
  { key: "t1", years: 0, label: "Less than 1 Year", img: tier1Img },
  { key: "t2", years: 1, label: "1–2 Years", img: tier2Img },
  { key: "t3", years: 3, label: "3–5 Years", img: tier3Img },
  { key: "t4", years: 6, label: "5–10 Years", img: tier4Img },
  { key: "t5", years: 11, label: "10+ Years", img: tier5Img },
];

export function teachingBadge(years) {
  if (years === null || years === undefined || years === "") return null;
  const n = Number(years);
  if (Number.isNaN(n) || n < 0) return null;
  if (n < 1) return BADGE_TIERS[0];
  if (n < 3) return BADGE_TIERS[1];
  if (n < 6) return BADGE_TIERS[2];
  if (n <= 10) return BADGE_TIERS[3];
  return BADGE_TIERS[4];
}

export default function ProfileSettings({ onClose, onSaved }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [yearsTeaching, setYearsTeaching] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("display_name, avatar_url, country, years_teaching")
        .eq("id", user.id)
        .maybeSingle();
      setName(data?.display_name || localStorage.getItem("sentenco_teacher_name") || "");
      setCountry(data?.country || "");
      setYearsTeaching(data?.years_teaching ?? "");
      setAvatarUrl(data?.avatar_url || null);
      setLoading(false);
    })();
  }, [user]);

  async function handleAvatarUpload(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !user) return;
    setError(null);
    setUploading(true);
    const path = `${user.id}/avatar-${crypto.randomUUID()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("community-uploads").upload(path, file);
    setUploading(false);
    if (uploadError) { setError(uploadError.message || "Photo upload failed."); return; }
    const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(path);
    setAvatarUrl(pub.publicUrl);
  }

  async function handleSave() {
    if (!user || saving) return;
    setSaving(true);
    setError(null);
    const trimmedName = name.trim();
    const payload = {
      display_name: trimmedName || null,
      avatar_url: avatarUrl,
      country: country.trim() || null,
      years_teaching: yearsTeaching === "" ? null : Number(yearsTeaching),
    };
    // upsert() compiles to INSERT ... ON CONFLICT DO UPDATE, which needs
    // both the insert and update RLS policies to pass together -- an
    // explicit update-then-insert-if-missing avoids that combined check.
    const { data: updated, error: updateError } = await supabase
      .from("profiles")
      .update(payload)
      .eq("id", user.id)
      .select("id");
    let saveError = updateError;
    if (!updateError && (!updated || updated.length === 0)) {
      const { error: insertError } = await supabase.from("profiles").insert({ id: user.id, ...payload });
      saveError = insertError;
    }
    setSaving(false);
    if (saveError) { setError(saveError.message || "Couldn't save your profile."); return; }
    localStorage.setItem("sentenco_teacher_name", trimmedName);
    onSaved?.(avatarUrl);
    onClose();
  }

  const badge = teachingBadge(yearsTeaching);

  return (
    <div className="ps-overlay" onClick={onClose}>
      <style>{CSS}</style>
      <div className="ps-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="ps-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        {loading ? (
          <p className="ps-loading">Loading…</p>
        ) : (
          <>
            <div className="ps-head">
              <label className="ps-avatar-upload" title="Change photo">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="" className="ps-avatar-img" />
                ) : (
                  <span className="ps-avatar-fallback">{initials(name)}</span>
                )}
                <span className="ps-avatar-overlay">
                  <CameraIcon />
                </span>
                <input type="file" accept="image/*" hidden onChange={handleAvatarUpload} disabled={uploading} />
              </label>
              <h2 className="ps-name-preview">
                Teacher {name.trim() || "…"}
                {badge && <img className="ps-name-badge" src={badge.img} alt={badge.label} title={badge.label} />}
              </h2>
              <p className="ps-sub">{uploading ? "Uploading photo…" : "How other teachers see you in the Community"}</p>
            </div>

            <div className="ps-form">
              <label className="ps-field">
                <span className="ps-label">Name</span>
                <div className="ps-name-row">
                  <span className="ps-name-prefix">Teacher</span>
                  <input
                    type="text"
                    className="ps-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                    maxLength={60}
                  />
                </div>
              </label>

              <label className="ps-field">
                <span className="ps-label">Country</span>
                <input
                  type="text"
                  className="ps-input"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. Philippines"
                  maxLength={60}
                />
              </label>

              <div className="ps-field">
                <span className="ps-label">Experience badge</span>
                <div className="ps-badge-picker">
                  {BADGE_TIERS.map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      className={`ps-badge-option${badge?.key === t.key ? " is-selected" : ""}`}
                      onClick={() => setYearsTeaching(t.years)}
                      title={t.label}
                    >
                      <img src={t.img} alt={t.label} />
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {error && <p className="ps-error">{error}</p>}

              <button type="button" className="ps-save" disabled={saving} onClick={handleSave}>
                {saving ? "Saving…" : "Save profile"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.ps-overlay {
  position: fixed; inset: 0; background: rgba(43,42,74,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px;
}
.ps-modal {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --hair: rgba(43,42,74,0.09);
  background: var(--card); border-radius: 24px; border-top: 4px solid var(--coral);
  padding: 32px 30px 28px; max-width: 420px; width: 100%; position: relative;
  font-family: 'Quicksand', sans-serif; color: var(--ink);
  box-shadow: 0 24px 60px rgba(43,42,74,0.25);
}
.ps-modal * { box-sizing: border-box; }

.ps-close {
  position: absolute; top: 16px; right: 16px; width: 28px; height: 28px;
  border-radius: 50%; background: none; border: none; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.ps-close:hover { background: var(--coral-pale); color: var(--coral); }
.ps-close svg { width: 13px; height: 13px; }

.ps-loading { font-size: 13.5px; color: var(--muted); text-align: center; padding: 20px 0; }

.ps-head { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; margin-bottom: 22px; }

.ps-avatar-upload {
  position: relative; width: 84px; height: 84px; border-radius: 50%; cursor: pointer;
  margin-bottom: 10px; flex-shrink: 0;
}
.ps-avatar-img, .ps-avatar-fallback {
  width: 84px; height: 84px; border-radius: 50%; object-fit: cover; display: flex;
  align-items: center; justify-content: center; background: var(--coral); color: #fff;
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; border: 3px solid var(--coral-pale);
}
.ps-avatar-overlay {
  position: absolute; inset: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  background: rgba(43,42,74,0.0); color: #fff; opacity: 0; transition: opacity 0.15s ease, background 0.15s ease;
}
.ps-avatar-overlay svg { width: 20px; height: 20px; }
.ps-avatar-upload:hover .ps-avatar-overlay { opacity: 1; background: rgba(43,42,74,0.45); }

.ps-name-preview { display: flex; align-items: center; justify-content: center; gap: 8px; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 2px 0 0; color: var(--ink); }
.ps-name-badge { height: 30px; width: auto; flex-shrink: 0; }
.ps-sub { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--muted); margin: 2px 0 0; }

.ps-form { display: flex; flex-direction: column; gap: 16px; }
.ps-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.ps-label {
  font-family: 'Quicksand', sans-serif; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--muted);
}
.ps-input {
  width: 100%; border: 1px solid var(--hair); border-radius: 12px; padding: 10px 12px;
  font: inherit; font-size: 14px; color: var(--ink); background: #FDFCFA; outline: none;
}
.ps-input:focus { border-color: var(--coral); }
.ps-name-row { display: flex; align-items: center; gap: 8px; }
.ps-name-prefix { font-family: 'Quicksand', sans-serif; font-size: 14px; font-weight: 700; color: var(--muted); flex-shrink: 0; }
.ps-name-row .ps-input { flex: 1; min-width: 0; }

.ps-badge-picker { display: flex; gap: 6px; }
.ps-badge-option {
  flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 4px;
  background: #FDFCFA; border: 1.5px solid var(--hair); border-radius: 12px; padding: 8px 4px 6px;
  cursor: pointer;
}
.ps-badge-option img { height: 40px; width: auto; }
.ps-badge-option span {
  font-family: 'Quicksand', sans-serif; font-size: 8.5px; font-weight: 700; color: var(--muted);
  text-align: center; line-height: 1.2;
}
.ps-badge-option.is-selected { border-color: var(--coral); background: var(--coral-pale); box-shadow: 0 0 0 2px var(--coral-pale); }
.ps-badge-option.is-selected span { color: var(--coral); }

.ps-error { font-family: 'Quicksand', sans-serif; color: #C0392B; font-size: 12.5px; margin: 0; }
.ps-save {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px;
  background: var(--coral); color: #fff; border: none; border-radius: 999px;
  padding: 12px; cursor: pointer; margin-top: 2px;
}
.ps-save:hover { background: #E0502F; }
.ps-save:disabled { opacity: 0.5; cursor: default; }
`;
