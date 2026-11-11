import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { ADMIN_CSS } from "./adminStyles";

// Owner-only list of Maya payments: who paid, for which plan, how much, and when their pass ends.
// The rows come from admin_list_payments(), which returns nothing unless the caller is the owner,
// so hiding this page is a convenience, not the security.

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const PLAN_LABEL = { pro: "Pro", pro_plus: "Pro+" };
const PERIOD_LABEL = { month: "Monthly", year: "Yearly" };
const STATUS_LABEL = { paid: "Paid", pending: "Not finished", failed: "Failed", cancelled: "Cancelled", expired: "Expired" };
const FILTERS = [
  { id: "paid", label: "Paid" },
  { id: "unpaid", label: "Not paid" },
  { id: "all", label: "All" },
];

const peso = (n) => `₱${Number(n || 0).toLocaleString("en-PH", { maximumFractionDigits: 2 })}`;

function fmt(iso, withTime = false) {
  if (!iso) return "-";
  return new Date(iso).toLocaleString("en-PH", {
    year: "numeric", month: "short", day: "numeric",
    ...(withTime ? { hour: "numeric", minute: "2-digit" } : {}),
    timeZone: "Asia/Manila",
  });
}

const manilaMonth = (d) => new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "2-digit", timeZone: "Asia/Manila" });

export default function AdminPayments() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [rows, setRows] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("paid");
  const [now] = useState(() => Date.now());

  const apply = useCallback(({ data, error: err }) => {
    if (err) {
      setError(err.message.includes("function")
        ? "The payments list isn't set up yet. Run sql/payments_admin_and_reminders.sql in the Supabase SQL editor."
        : err.message);
      setRows([]);
      return;
    }
    setError(null);
    setRows(data || []);
  }, []);
  const load = () => supabase.rpc("admin_list_payments").then(apply);

  useEffect(() => {
    if (isAdmin) supabase.rpc("admin_list_payments").then(apply);
  }, [isAdmin, apply]);

  const stats = useMemo(() => {
    const real = (rows || []).filter((r) => r.status === "paid" && !r.test_mode);
    const thisMonth = manilaMonth(now);
    const monthIncome = real.filter((r) => manilaMonth(r.paid_at || r.created_at) === thisMonth).reduce((s, r) => s + Number(r.amount), 0);
    const allIncome = real.reduce((s, r) => s + Number(r.amount), 0);
    const payingNow = new Set(real.filter((r) => r.ends_at && new Date(r.ends_at).getTime() > now && new Date(r.starts_at).getTime() <= now).map((r) => r.email)).size;
    const monthly = real.filter((r) => r.period === "month").length;
    const yearly = real.filter((r) => r.period === "year").length;
    const endingSoon = real.filter((r) => {
      const end = r.ends_at ? new Date(r.ends_at).getTime() : 0;
      return end > now && end <= now + 7 * 86400000;
    }).length;
    return { monthIncome, allIncome, payingNow, monthly, yearly, endingSoon };
  }, [rows, now]);

  const shown = useMemo(() => (rows || []).filter((r) => (
    filter === "all" ? true : filter === "paid" ? r.status === "paid" : r.status !== "paid"
  )), [rows, filter]);

  if (authLoading) return null;

  return (
    <div className="aac-shell">
      <style>{ADMIN_CSS + CSS}</style>
      <div className="aac-topbar">
        <button type="button" className="aac-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentenco.png" alt="" className="aac-brand-logo" />entenco
        </button>
        <h1 className="aac-title">Payments</h1>
        <button type="button" className="aac-toplink" onClick={() => navigate("/library/admin/access")}>Access codes</button>
      </div>

      <div className="aac-page">
        {!isAdmin ? (
          <p className="aac-status">Not authorized.</p>
        ) : (
          <>
            {error && <div className="aac-error">{error}</div>}

            <div className="apy-stats">
              <div className="apy-stat"><span className="apy-k">This month</span><span className="apy-v">{peso(stats.monthIncome)}</span></div>
              <div className="apy-stat"><span className="apy-k">All time</span><span className="apy-v">{peso(stats.allIncome)}</span></div>
              <div className="apy-stat"><span className="apy-k">Paying teachers now</span><span className="apy-v">{stats.payingNow}</span></div>
              <div className="apy-stat"><span className="apy-k">Monthly / yearly</span><span className="apy-v">{stats.monthly} / {stats.yearly}</span></div>
              <div className="apy-stat"><span className="apy-k">Ending in 7 days</span><span className="apy-v">{stats.endingSoon}</span></div>
            </div>
            <p className="aac-sub apy-note">Totals count real payments only. Rows tagged Test were paid with Maya's test cards on staging. Money arrives in Maya Business Manager; refunds are done there too, then end the pass under Access codes.</p>

            <div className="apy-head">
              <h2 className="aac-h">Payments</h2>
              <div className="apy-seg" role="tablist" aria-label="Show">
                {FILTERS.map((f) => (
                  <button key={f.id} type="button" role="tab" aria-selected={filter === f.id}
                    className={`apy-seg-btn${filter === f.id ? " is-on" : ""}`} onClick={() => setFilter(f.id)}>{f.label}</button>
                ))}
              </div>
              <button type="button" className="aac-ghost" onClick={load}>Refresh</button>
            </div>

            {rows === null ? <p className="aac-status">Loading...</p> : shown.length === 0 ? (
              <p className="aac-status">{filter === "paid" ? "No payments yet." : "Nothing here."}</p>
            ) : (
              <div className="apy-scroll">
                <div className="aac-table apy-table">
                  <div className="aac-row aac-row--head apy-row"><span>Date</span><span>Email</span><span>Plan</span><span>Amount</span><span>Status</span><span>Pass ends</span></div>
                  {shown.map((r) => {
                    const active = r.status === "paid" && r.ends_at && new Date(r.ends_at).getTime() > now;
                    return (
                      <div className={`aac-row apy-row${r.status === "paid" ? "" : " is-off"}`} key={r.id}>
                        <span>{fmt(r.paid_at || r.created_at, true)}</span>
                        <span className="aac-wrap">{r.email || "(deleted account)"}</span>
                        <span>{PLAN_LABEL[r.plan]} {PERIOD_LABEL[r.period]}</span>
                        <span>{peso(r.amount)}{r.test_mode && <em className="apy-test">Test</em>}</span>
                        <span className={`apy-status is-${r.status}`}>{STATUS_LABEL[r.status] || r.status}</span>
                        <span className={active ? "aac-on" : "aac-offtxt"}>{r.status === "paid" ? fmt(r.ends_at) : "-"}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
.apy-stats { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; }
@media (max-width: 860px) { .apy-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.apy-stat { background: #fff; border: 1px solid rgba(43,42,74,0.09); border-radius: 14px; padding: 14px 16px; display: grid; gap: 4px; }
.apy-k { font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #8B84A3; }
.apy-v { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 24px; color: #1B2A4A; }
.apy-note { margin: 12px 0 28px; max-width: 70ch; line-height: 1.5; }
.apy-head { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin: 0 0 12px; }
.apy-seg { display: inline-flex; background: #E9ECF3; border-radius: 999px; padding: 3px; }
.apy-seg-btn { font: 700 12.5px 'Quicksand', sans-serif; color: #1B2A4A; background: none; border: none; border-radius: 999px; padding: 6px 14px; cursor: pointer; }
.apy-seg-btn.is-on { background: #1B2A4A; color: #fff; }
.apy-scroll { overflow-x: auto; }
.apy-table { min-width: 720px; }
.aac-row.apy-row { grid-template-columns: 1.3fr 1.8fr 1.1fr 0.9fr 0.9fr 0.9fr; }
.apy-test { font-style: normal; font-size: 10.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #8A5A00; background: #FFF1C2; border-radius: 999px; padding: 2px 7px; margin-left: 6px; }
.apy-status { font-weight: 800; }
.apy-status.is-paid { color: #1F7A47; }
.apy-status.is-pending { color: #8A5A00; }
.apy-status.is-failed, .apy-status.is-cancelled, .apy-status.is-expired { color: #A3322A; }
`;
