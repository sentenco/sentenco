/* global process, Buffer */
// Shared helpers for the Maya Checkout functions (maya-checkout, maya-confirm, maya-webhook).
// The leading underscore keeps Vercel from treating this file as its own route.
//
// Environment variables (set on Vercel, never in the browser):
//   MAYA_API_BASE              https://pg-sandbox.paymaya.com (default) or https://pg.paymaya.com for live
//   MAYA_PUBLIC_KEY            pk-...  (creates checkouts)
//   MAYA_SECRET_KEY            sk-...  (reads payment status)
//   SUPABASE_SERVICE_ROLE_KEY  lets the server write payments and grant access
//   VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY (already set)

import { createClient } from "@supabase/supabase-js";

const SANDBOX_BASE = "https://pg-sandbox.paymaya.com";
// Maya's shared public sandbox keys ("Sandbox Party 1", published for public testing at
// developers.maya.ph/reference/sandbox-credentials-and-cards). Used ONLY against the sandbox
// when no keys are set, so the flow can be tested before Sentenco has its own Maya account.
const SANDBOX_PUBLIC_KEY = "pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah";
const SANDBOX_SECRET_KEY = "sk-X8qolYjy62kIzEbr0QRK1h4b4KDVHaNcwMYk39jInSl";

// Prices in pesos. The browser only sends the plan and the period; the amount always comes from here.
export const PRICES = {
  pro: { month: 299, year: 2990 },
  pro_plus: { month: 350, year: 3500 },
};
export const PLAN_LABEL = { pro: "Pro", pro_plus: "Pro+" };
export const PERIOD_LABEL = { month: "1 month", year: "1 year" };

export function mayaConfig() {
  const base = (process.env.MAYA_API_BASE || SANDBOX_BASE).replace(/\/+$/, "");
  const sandbox = base === SANDBOX_BASE;
  const publicKey = process.env.MAYA_PUBLIC_KEY || (sandbox ? SANDBOX_PUBLIC_KEY : "");
  const secretKey = process.env.MAYA_SECRET_KEY || (sandbox ? SANDBOX_SECRET_KEY : "");
  return { base, sandbox, publicKey, secretKey };
}

const basic = (key) => "Basic " + Buffer.from(`${key}:`).toString("base64");

export async function mayaFetch(path, { method = "GET", key, body } = {}) {
  const { base } = mayaConfig();
  const res = await fetch(base + path, {
    method,
    headers: { Authorization: basic(key), "Content-Type": "application/json", Accept: "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch { /* empty body */ }
  return { ok: res.ok, status: res.status, data };
}

// Server-side database client (bypasses row security, so only ever used here).
export function adminDb() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

// The signed-in teacher behind a request (Authorization: Bearer <supabase access token>).
export async function userFromRequest(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  const url = process.env.VITE_SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY;
  if (!token || !url || !anon) return null;
  const client = createClient(url, anon, { auth: { persistSession: false } });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

// The site's own address, for Maya's return links (works on staging, live and preview deployments).
export function siteOrigin(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "sentenco.com";
  const proto = req.headers["x-forwarded-proto"] || (String(host).startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

// Ask Maya (with the secret key) whether a payment really went through, then grant access.
// Never trusts the browser or the webhook body: the answer always comes from Maya.
// Returns { status: "paid" | "pending" | "failed" | "cancelled" | "expired", plan, ends_at }.
export async function confirmPayment(db, payment) {
  if (payment.status === "paid") {
    const { data } = await db.rpc("grant_paid_plan", { p_payment_id: payment.id });
    return { status: "paid", plan: payment.plan, ends_at: data?.ends_at || null };
  }
  const { secretKey, sandbox } = mayaConfig();
  if (sandbox && process.env.VERCEL_ENV === "production") return { status: "pending", plan: payment.plan, reason: "test_mode_on_live" };
  const { ok, data } = await mayaFetch(`/payments/v1/payment-rrns/${encodeURIComponent(payment.id)}`, { key: secretKey });
  const list = ok && Array.isArray(data) ? data : [];
  const paid = list.find((p) => p.isPaid === true || p.status === "PAYMENT_SUCCESS");

  if (paid) {
    const amountOk = Math.abs(Number(paid.amount) - Number(payment.amount)) < 0.01 && (paid.currency || "PHP") === payment.currency;
    if (!amountOk) {
      await db.from("payments").update({ status: "failed", maya_payment_id: paid.id || null }).eq("id", payment.id);
      return { status: "failed", plan: payment.plan, reason: "amount_mismatch" };
    }
    const { data: granted, error } = await db.rpc("grant_paid_plan", { p_payment_id: payment.id, p_maya_payment_id: paid.id || null });
    if (error) return { status: "pending", plan: payment.plan, reason: "grant_failed" };
    return { status: "paid", plan: payment.plan, ends_at: granted?.ends_at || null };
  }

  // Nothing paid yet: report the latest Maya status, and close out payments that can no longer succeed.
  const latest = list[list.length - 1];
  const s = latest?.status || "";
  const closed = s === "PAYMENT_EXPIRED" ? "expired" : s === "PAYMENT_CANCELLED" ? "cancelled" : s === "PAYMENT_FAILED" ? "failed" : null;
  if (closed && payment.status === "pending") {
    await db.from("payments").update({ status: closed }).eq("id", payment.id).eq("status", "pending");
  }
  return { status: closed || "pending", plan: payment.plan };
}
