// Maya calls this when a payment changes (register PAYMENT_SUCCESS, PAYMENT_FAILED, PAYMENT_EXPIRED
// and PAYMENT_CANCELLED to https://<site>/api/maya-webhook once Sentenco has its own Maya keys).
// It is a backup for teachers who close the tab before coming back to Sentenco.
// The body is never trusted: we only read the reference number from it and then ask Maya directly.
// Always answers 200 quickly, so Maya doesn't keep retrying.

import { adminDb, confirmPayment } from "./_maya.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  try {
    const ref = String(req.body?.requestReferenceNumber || "");
    const db = adminDb();
    if (db && /^[0-9a-f-]{36}$/i.test(ref)) {
      const { data: payment } = await db.from("payments").select("*").eq("id", ref).maybeSingle();
      if (payment) await confirmPayment(db, payment);
    }
  } catch {
    // Swallow errors: the teacher's return page and later webhooks retry the same check.
  }
  res.status(200).json({ received: true });
}
