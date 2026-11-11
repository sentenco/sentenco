import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { ADMIN_CSS } from "./adminStyles";

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
      <style>{ADMIN_CSS}</style>
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
