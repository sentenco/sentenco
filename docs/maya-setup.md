# Maya Business payments: setup and go-live

How Sentenco takes payments for Pro and Pro+ through **Maya Checkout** (one-time passes, no auto-charge).

## How it works

1. A teacher picks a plan (Pro or Pro+) and a period (1 month or 1 year) on `/library/subscription`.
2. `api/maya-checkout.js` checks who they are, saves a `payments` row (status `pending`) and asks Maya for a checkout. The amount always comes from `PRICES` in `api/_maya.js`, never from the browser.
3. The teacher pays on Maya's page (card, Maya wallet or QR Ph).
4. Maya sends them back to `/library/subscription?pay=done&ref=<payment id>`. The page calls `api/maya-confirm.js`, which asks Maya (secret key) whether the payment really went through and checks the amount.
5. If it did, `grant_paid_plan()` adds a 30-day or 365-day `paid` row in `entitlements`. `my_plan()` already reads it, so every gate in the app opens. Buying again early stacks after the current pass.
6. `api/maya-webhook.js` does the same check when Maya calls it, for teachers who close the tab before coming back.

Prices: Pro ₱299 a month or ₱2,990 a year; Pro+ ₱350 a month or ₱3,500 a year.

## Test it on staging now (no Maya account needed)

1. Run `sql/maya_payments.sql` in the Supabase SQL editor (once).
2. On Vercel, add `SUPABASE_SERVICE_ROLE_KEY` (Supabase > Settings > API > service_role). Server-side only: never put it in a `VITE_` variable.
3. Leave `MAYA_PUBLIC_KEY`, `MAYA_SECRET_KEY` and `MAYA_API_BASE` empty: staging then uses Maya's shared public sandbox keys. The live site refuses test mode on its own (`VERCEL_ENV=production`).
4. On staging, open Subscription, sign in, press **Get Pro, 1 month**, and pay with a Maya test card:
   - VISA `4123 4501 3100 1381`, expiry `12/30`, CVV `123`, 3-D Secure password `mctest1`
   - or Mastercard `5123 4567 8901 2346`, expiry `12/30`, CVV `111` (no 3-D Secure)
5. You should come back to Subscription with "Payment received. Pro is active until ...". Check the `payments` and `entitlements` tables in Supabase.

## Go live (after DTI, BIR and Maya Business approval)

1. In Maya Business Manager, get the **live** public and secret keys.
2. On Vercel (Production environment): `MAYA_API_BASE=https://pg.paymaya.com`, `MAYA_PUBLIC_KEY=pk-...`, `MAYA_SECRET_KEY=sk-...`.
3. Register the webhook for PAYMENT_SUCCESS, PAYMENT_FAILED, PAYMENT_EXPIRED and PAYMENT_CANCELLED to `https://sentenco.com/api/maya-webhook` (Maya Business Manager > Settings > Webhooks).
4. Do one real ₱299 payment yourself, then refund it in Maya Business Manager if you want.
5. Release the Subscription page to `main`.

## Not built yet

- Reminder email a few days before a pass ends.
- Admin view of payments (for now, read the `payments` table in Supabase).
- Refunds are done in Maya Business Manager; the entitlement must then be removed by hand (`admin_revoke`).
