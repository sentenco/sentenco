/* global process */
// Daily renewal reminder emails (Vercel Cron, see vercel.json; runs 09:00 Manila on the live site).
// 1. "Your Sentenco Pro ends on <date>" about 3 days before a paid pass ends.
// 2. "Your Sentenco Pro has ended" on the day it ends.
// Teachers who already bought a later pass are skipped. Each email is sent once (renewal_reminders).
//
// Environment variables (Vercel, server only):
//   CRON_SECRET       Vercel sends it as "Authorization: Bearer <CRON_SECRET>"; anyone else is refused
//   RESEND_API_KEY    re_...  (without it the job only lists who WOULD get an email: dry run)
//   REMINDER_FROM     e.g. Sentenco <hello@sentenco.com> (a sender on a domain verified in Resend)
//   SUPABASE_SERVICE_ROLE_KEY, VITE_SUPABASE_URL (already set for Maya)

import { adminDb, PLAN_LABEL } from "./_maya.js";

const RENEW_URL = "https://sentenco.com/library/subscription";

function manilaDate(iso) {
  return new Date(iso).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Manila" });
}

function emailFor(row) {
  const plan = PLAN_LABEL[row.plan] || "Pro";
  const date = manilaDate(row.ends_at);
  const soon = row.kind === "ending_soon";
  const subject = soon ? `Your Sentenco ${plan} ends on ${date}` : `Your Sentenco ${plan} has ended`;
  const lead = soon
    ? `Your Sentenco ${plan} pass ends on <strong>${date}</strong>. Renew before then to keep every lesson open with no break.`
    : `Your Sentenco ${plan} pass ended on <strong>${date}</strong>. Your account is still here, and your lessons open again as soon as you renew.`;
  const text = soon
    ? `Your Sentenco ${plan} pass ends on ${date}. Renew before then to keep every lesson open with no break.\n\nRenew here: ${RENEW_URL}\n\nPasses don't renew on their own, so you're never charged without choosing to pay.`
    : `Your Sentenco ${plan} pass ended on ${date}. Your account is still here, and your lessons open again as soon as you renew.\n\nRenew here: ${RENEW_URL}`;
  const html = `<!doctype html><html><body style="margin:0;background:#FBFAF7;font-family:Arial,Helvetica,sans-serif;color:#2B2A4A;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBFAF7;padding:32px 16px;"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;border:1px solid #ECEAE4;">
<tr><td style="padding:28px 28px 8px;font-size:20px;font-weight:bold;color:#1B2A4A;">Sentenco</td></tr>
<tr><td style="padding:8px 28px 0;font-size:16px;line-height:1.55;">Hi there,</td></tr>
<tr><td style="padding:12px 28px 0;font-size:16px;line-height:1.55;">${lead}</td></tr>
<tr><td style="padding:24px 28px;"><a href="${RENEW_URL}" style="display:inline-block;background:#E8573A;color:#ffffff;text-decoration:none;font-weight:bold;font-size:15px;padding:12px 24px;border-radius:999px;">Renew ${plan}</a></td></tr>
<tr><td style="padding:0 28px 28px;font-size:13px;line-height:1.5;color:#8B84A3;">Passes don't renew on their own, so you're never charged without choosing to pay. Pay with card, Maya or QR Ph.</td></tr>
</table></td></tr></table></body></html>`;
  return { subject, html, text };
}

export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    res.status(401).json({ error: "Not allowed." });
    return;
  }

  const db = adminDb();
  if (!db) {
    res.status(503).json({ error: "SUPABASE_SERVICE_ROLE_KEY is not set." });
    return;
  }

  const { data: due, error } = await db.rpc("renewal_reminders_due");
  if (error) {
    res.status(500).json({ error: "Run sql/payments_admin_and_reminders.sql first.", detail: error.message });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.REMINDER_FROM || "Sentenco <hello@sentenco.com>";
  if (!apiKey) {
    res.status(200).json({ dryRun: true, wouldSend: (due || []).map((r) => ({ email: r.email, plan: r.plan, kind: r.kind, ends_at: r.ends_at })) });
    return;
  }

  let sent = 0;
  const failed = [];
  for (const row of due || []) {
    const { subject, html, text } = emailFor(row);
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [row.email], subject, html, text }),
    });
    if (r.ok) {
      await db.from("renewal_reminders").insert({ entitlement_id: row.entitlement_id, kind: row.kind });
      sent += 1;
    } else {
      failed.push({ email: row.email, status: r.status });
    }
  }
  res.status(200).json({ sent, failed });
}
