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

## Payments page (owner only)

Run `sql/payments_admin_and_reminders.sql` once. Then open the account menu > **Payments** (`/library/admin/payments`): income this month and all time, paying teachers now, monthly vs yearly, passes ending in 7 days, and every payment with its status. Sandbox test payments are tagged **Test** and never count in the totals.

## Renewal reminder emails

`api/cron-renewal-reminders.js` runs every day at 09:00 Manila (Vercel Cron in `vercel.json`, live site only). It emails each paying teacher once about 3 days before their pass ends, and once on the day it ends, unless they already bought a later pass. Test payments never get emails.

To switch it on:
1. Make a free account at resend.com, add the domain `sentenco.com`, and add the DNS records it shows (at your domain provider). Wait until Resend says Verified.
2. In Resend, create an API key (Sending access).
3. On Vercel (Production): `RESEND_API_KEY=re_...`, `REMINDER_FROM=Sentenco <hello@sentenco.com>`, and `CRON_SECRET=<any long random text>`. Redeploy.

Without `RESEND_API_KEY` the job only lists who would get an email (dry run). Crons only run on the live site, so this starts after the Subscription page is released.

## Not handled here

- Refunds are done in Maya Business Manager; then end the pass under Access codes (`admin_revoke`).
