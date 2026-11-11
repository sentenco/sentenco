/* global process */
// Starts a Maya Checkout for a Pro or Pro+ pass (one month or one year).
// POST { plan: "pro" | "pro_plus", period: "month" | "year" } with the teacher's Supabase token.
// Returns { redirectUrl } (Maya's payment page) or { error }.

import { PRICES, PLAN_LABEL, PERIOD_LABEL, mayaConfig, mayaFetch, adminDb, userFromRequest, siteOrigin } from "./_maya.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const user = await userFromRequest(req);
  if (!user) {
    res.status(401).json({ error: "Sign in first, then try again." });
    return;
  }

  const plan = req.body?.plan;
  const period = req.body?.period;
  const amount = PRICES[plan]?.[period];
  if (!amount) {
    res.status(400).json({ error: "Choose a plan and a billing period." });
    return;
  }

  const db = adminDb();
  const { publicKey, sandbox } = mayaConfig();
  // Never let the live site take test payments: test mode only runs on staging and previews.
  const liveSite = process.env.VERCEL_ENV === "production";
  if (!db || !publicKey || (sandbox && liveSite)) {
    res.status(503).json({ error: "Payments aren't switched on yet. Please try again later." });
    return;
  }

  const { data: payment, error: insertError } = await db
    .from("payments")
    .insert({ user_id: user.id, plan, period, amount, currency: "PHP", status: "pending" })
    .select()
    .single();
  if (insertError || !payment) {
    res.status(500).json({ error: "We couldn't start the payment. Please try again." });
    return;
  }

  const origin = siteOrigin(req);
  const back = (result) => `${origin}/library/subscription?pay=${result}&ref=${payment.id}`;
  const itemName = `Sentenco ${PLAN_LABEL[plan]}, ${PERIOD_LABEL[period]}`;

  const { ok, data } = await mayaFetch("/checkout/v1/checkouts", {
    method: "POST",
    key: publicKey,
    body: {
      totalAmount: { value: amount, currency: "PHP" },
      requestReferenceNumber: payment.id,
      items: [{ name: itemName, quantity: "1", totalAmount: { value: amount } }],
      buyer: user.email ? { contact: { email: user.email } } : undefined,
      redirectUrl: { success: back("done"), failure: back("failed"), cancel: back("cancelled") },
    },
  });

  if (!ok || !data?.redirectUrl) {
    await db.from("payments").update({ status: "failed" }).eq("id", payment.id);
    res.status(502).json({ error: "Maya didn't accept the payment request. Please try again in a moment." });
    return;
  }

  await db.from("payments").update({ checkout_id: data.checkoutId || null }).eq("id", payment.id);
  res.status(200).json({ redirectUrl: data.redirectUrl });
}
