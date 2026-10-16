import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";

// Owner-only screen for the beta: make promo codes, grant access to one
// account by email, and see / end anyone's trial or free access. Every
// action runs a database function that re-checks the caller is the owner,
// so hiding this page is a convenience, not the security.

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const PLAN_LABEL = { pro: "Pro", pro_plus: "Pro+" };

function fmt(iso) {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric", timeZone: "Asia/Manila" });
}

function randomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i += 1) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `BETA-${out}`;
}

export default function AdminAccess() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [codes, setCodes] = useState([]);
  const [grants, setGrants] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);

  const [code, setCode] = useState(randomCode());
  const [plan, setPlan] = useState("pro_plus");
  const [days, setDays] = useState(30);
  const [maxUses, setMaxUses] = useState(1);
  const [note, setNote] = useState("");

  const [email, setEmail] = useState("");
  const [gPlan, setGPlan] = useState("pro_plus");
  const [gDays, setGDays] = useState(30);
  const [gNote, setGNote] = useState("");

  const load = useCallback(async () => {
    const [c, g] = await Promise.all([supabase.rpc("admin_list_codes"), supabase.rpc("admin_list_entitlements")]);
    if (c.error || g.error) {
      setError((c.error || g.error).message.includes("function")
        ? "The access tables aren't set up yet. Run sql/entitlements_trial_and_codes.sql in the Supabase SQL editor."
        : (c.error || g.error).message);
      return;
    }
    setError(null);
    setCodes(c.data || []);
    setGrants(g.data || []);
  }, []);

  useEffect(() => { if (isAdmin) load(); }, [isAdmin, load]);

  async function run(fn, okText) {
    setBusy(true); setNotice(null);
    const { error: err } = await fn();
    setBusy(false);
    if (err) { setNotice({ kind: "error", text: err.message }); return false; }
    setNotice({ kind: "ok", text: okText });
    await load();
    return true;
  }

  async function createCode(e) {
    e.preventDefault();
    const ok = await run(
      () => supabase.rpc("admin_create_code", {
        p_code: code, p_plan: plan, p_days: Number(days), p_max_uses: Number(maxUses), p_expires: null, p_note: note || null,
      }),
      `Code ${code.trim().toUpperCase()} created. Send it to the teacher.`,
    );
    if (ok) { setCode(randomCode()); setNote(""); }
  }

  async function grantByEmail(e) {
    e.preventDefault();
    const ok = await run(
      () => supabase.rpc("admin_grant", { p_email: email, p_plan: gPlan, p_days: Number(gDays), p_note: gNote || null }),
      `Gave ${email.trim()} ${PLAN_LABEL[gPlan]} for ${gDays} days.`,
    );
    if (ok) { setEmail(""); setGNote(""); }
  }

  if (authLoading) return null;

  return (
    <div className="aac-shell">
      <style>{CSS}</style>
      <div className="aac-topbar">
        <button type="button" className="aac-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="aac-brand-logo" />entenco
        </button>
        <h1 className="aac-title">Access codes</h1>
        <button type="button" className="aac-toplink" onClick={() => navigate("/library/admin/teachers")}>Teacher activity</button>
      </div>

      <div className="aac-page">
        {!isAdmin ? (
          <p className="aac-status">Not authorized.</p>
        ) : (
          <>
            {error && <div className="aac-error">{error}</div>}
            {notice && <div className={`aac-notice is-${notice.kind}`} role="status">{notice.text}</div>}

            <div className="aac-grid">
              <form className="aac-card" onSubmit={createCode}>
                <h2 className="aac-h">Make a promo code</h2>
                <p className="aac-sub">For chosen teachers. Their days start when they redeem it.</p>
                <label className="aac-label">Code
                  <span className="aac-inline">
                    <input className="aac-input" value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} />
                    <button type="button" className="aac-ghost" onClick={() => setCode(randomCode())}>New</button>
                  </span>
                </label>
                <div className="aac-three">
                  <label className="aac-label">Plan
                    <select className="aac-input" value={plan} onChange={(e) => setPlan(e.target.value)}>
                      <option value="pro_plus">Pro+</option>
                      <option value="pro">Pro</option>
                    </select>
                  </label>
                  <label className="aac-label">Days
                    <input className="aac-input" type="number" min="1" max="366" value={days} onChange={(e) => setDays(e.target.value)} />
                  </label>
                  <label className="aac-label">Uses
                    <input className="aac-input" type="number" min="1" value={maxUses} onChange={(e) => setMaxUses(e.target.value)} />
                  </label>
                </div>
                <label className="aac-label">Note (who is it for?)
                  <input className="aac-input" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Maria, mentor" />
                </label>
                <button type="submit" className="aac-btn" disabled={busy || !code.trim()}>Create code</button>
              </form>

              <form className="aac-card" onSubmit={grantByEmail}>
                <h2 className="aac-h">Give access by email</h2>
                <p className="aac-sub">The teacher needs an account already. It starts right now.</p>
                <label className="aac-label">Email
                  <input className="aac-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="teacher@email.com" />
                </label>
                <div className="aac-three">
                  <label className="aac-label">Plan
                    <select className="aac-input" value={gPlan} onChange={(e) => setGPlan(e.target.value)}>
                      <option value="pro_plus">Pro+</option>
                      <option value="pro">Pro</option>
                    </select>
                  </label>
                  <label className="aac-label">Days
                    <input className="aac-input" type="number" min="1" max="366" value={gDays} onChange={(e) => setGDays(e.target.value)} />
                  </label>
                </div>
                <label className="aac-label">Note
                  <input className="aac-input" value={gNote} onChange={(e) => setGNote(e.target.value)} placeholder="optional" />
                </label>
                <button type="submit" className="aac-btn" disabled={busy || !email.trim()}>Give access</button>
              </form>
            </div>

            <h2 className="aac-h aac-h--wide">Codes</h2>
            {codes.length === 0 ? <p className="aac-status">No codes yet.</p> : (
              <div className="aac-table">
                <div className="aac-row aac-row--head"><span>Code</span><span>Plan</span><span>Days</span><span>Used</span><span>Redeemed by</span><span>Note</span><span /></div>
                {codes.map((c) => (
                  <div className={`aac-row${c.active ? "" : " is-off"}`} key={c.code}>
                    <span className="aac-mono">{c.code}</span>
                    <span>{PLAN_LABEL[c.plan]}</span>
                    <span>{c.days}</span>
                    <span>{c.used_count}/{c.max_uses}</span>
                    <span className="aac-wrap">{c.redeemed_by || "-"}</span>
                    <span className="aac-wrap">{c.note || "-"}</span>
                    <button type="button" className="aac-ghost" disabled={busy}
                      onClick={() => run(() => supabase.rpc("admin_set_code_active", { p_code: c.code, p_active: !c.active }), c.active ? "Code turned off." : "Code turned on.")}>
                      {c.active ? "Turn off" : "Turn on"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            <h2 className="aac-h aac-h--wide">Trials and free access</h2>
            {grants.length === 0 ? <p className="aac-status">Nobody has started a trial or been given access yet.</p> : (
              <div className="aac-table">
                <div className="aac-row aac-row--head aac-row--g"><span>Email</span><span>Plan</span><span>Type</span><span>From</span><span>Ends</span><span>Status</span><span /></div>
                {grants.map((g) => (
                  <div className="aac-row aac-row--g" key={g.id}>
                    <span className="aac-wrap">{g.email}</span>
                    <span>{PLAN_LABEL[g.plan]}</span>
                    <span>{g.source === "trial" ? "Trial" : g.code ? `Code ${g.code}` : "Given"}</span>
                    <span>{fmt(g.starts_at)}</span>
                    <span>{fmt(g.ends_at)}</span>
                    <span className={g.active ? "aac-on" : "aac-offtxt"}>{g.active ? "Active" : "Ended"}</span>
                    {g.active
                      ? <button type="button" className="aac-ghost" disabled={busy} onClick={() => run(() => supabase.rpc("admin_revoke", { p_id: g.id }), "Access ended.")}>End now</button>
                      : <span />}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');
.aac-shell { min-height: 100vh; background: #FBFAF7; color: #2B2A4A; font-family: 'Quicksand', sans-serif; }
.aac-shell * { box-sizing: border-box; }
.aac-topbar { display: flex; align-items: center; justify-content: space-between; padding: 14px 28px; background: #fff; border-bottom: 1px solid rgba(43,42,74,0.09); }
.aac-brand { display: flex; align-items: center; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #2B2A4A; background: none; border: none; cursor: pointer; padding: 0; }
.aac-brand-logo { height: 24px; width: auto; display: block; margin-right: -5px; }
.aac-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; margin: 0; }
.aac-toplink { font: 700 13px 'Quicksand', sans-serif; color: #E8573A; background: none; border: none; cursor: pointer; text-decoration: underline; }
.aac-page { max-width: 1040px; margin: 0 auto; padding: 32px 24px 80px; }
.aac-status { color: #8B84A3; font-size: 14px; }
.aac-error { background: #FDE8E5; color: #A3322A; border-radius: 12px; padding: 12px 16px; font-size: 13.5px; margin: 0 0 18px; }
.aac-notice { border-radius: 12px; padding: 12px 16px; font-size: 13.5px; font-weight: 600; margin: 0 0 18px; }
.aac-notice.is-ok { background: #E3F5EA; color: #1F7A47; }
.aac-notice.is-error { background: #FDE8E5; color: #A3322A; }
.aac-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 0 0 32px; }
@media (max-width: 800px) { .aac-grid { grid-template-columns: 1fr; } }
.aac-card { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 16px; padding: 22px; display: grid; gap: 12px; align-content: start; }
.aac-h { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0; }
.aac-h--wide { margin: 8px 0 12px; }
.aac-sub { font-size: 12.5px; color: #8B84A3; margin: -6px 0 0; }
.aac-label { display: grid; gap: 5px; font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #8B84A3; }
.aac-inline { display: flex; gap: 8px; }
.aac-three { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 10px; }
.aac-input { width: 100%; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 14px; border: 1.5px solid rgba(43,42,74,0.14); border-radius: 10px; padding: 9px 12px; background: #fff; color: #2B2A4A; text-transform: none; letter-spacing: 0; }
.aac-input:focus { outline: 3px solid #1B2A4A; outline-offset: 1px; }
.aac-btn { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: #fff; background: #1B2A4A; border: none; border-radius: 999px; padding: 11px 20px; cursor: pointer; justify-self: start; }
.aac-btn:disabled { opacity: 0.5; cursor: default; }
.aac-ghost { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: #1B2A4A; background: #E9ECF3; border: none; border-radius: 999px; padding: 6px 14px; cursor: pointer; white-space: nowrap; }
.aac-table { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 14px; overflow: hidden; margin: 0 0 32px; }
.aac-row { display: grid; grid-template-columns: 1.3fr 0.6fr 0.5fr 0.6fr 1.6fr 1.2fr auto; gap: 10px; align-items: center; padding: 10px 16px; font-size: 13px; border-top: 1px solid rgba(43,42,74,0.06); }
.aac-row--g { grid-template-columns: 1.8fr 0.6fr 1.2fr 1fr 1fr 0.8fr auto; }
.aac-row--head { border-top: none; background: #F4F2EC; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8B84A3; }
.aac-row.is-off { opacity: 0.55; }
.aac-mono { font-family: ui-monospace, Menlo, monospace; font-weight: 700; }
.aac-wrap { overflow-wrap: anywhere; }
.aac-on { color: #1F7A47; font-weight: 800; }
.aac-offtxt { color: #8B84A3; font-weight: 700; }
`;
