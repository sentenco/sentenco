-- Paid passes through Maya Checkout. Run once in the Supabase SQL editor (safe to re-run).
-- Needs sql/entitlements_trial_and_codes.sql first (entitlements table, my_plan()).
--
-- Flow: the server (api/maya-checkout.js) creates a `payments` row, then a Maya checkout.
-- When Maya says the payment succeeded (checked by api/maya-confirm.js or api/maya-webhook.js
-- with the secret key), the server calls grant_paid_plan(), which adds a 'paid' entitlement.
-- Browsers can only read their own payments; every write happens on the server.

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),       -- also sent to Maya as requestReferenceNumber
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null check (plan in ('pro', 'pro_plus')),
  period text not null check (period in ('month', 'year')),
  amount numeric(10, 2) not null check (amount > 0),
  currency text not null default 'PHP',
  provider text not null default 'maya',
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'cancelled', 'expired')),
  checkout_id text,
  maya_payment_id text,
  entitlement_id uuid references public.entitlements(id) on delete set null,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);
create index if not exists payments_user_idx on public.payments (user_id, created_at desc);

alter table public.payments enable row level security;
drop policy if exists "payments_select_own" on public.payments;
create policy "payments_select_own" on public.payments
  for select using (user_id = auth.uid());
revoke all on public.payments from anon, authenticated;
grant select on public.payments to authenticated;

-- Turn a confirmed payment into access. Called only by the server (service role).
-- Safe to call twice: a payment that is already paid returns its entitlement unchanged.
-- Buying again early stacks: the new pass starts when the current pass of the same plan ends.
create or replace function public.grant_paid_plan(p_payment_id uuid, p_maya_payment_id text default null)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  p payments%rowtype;
  start_at timestamptz;
  end_at timestamptz;
  ent_id uuid;
begin
  select * into p from payments where id = p_payment_id for update;
  if not found then
    raise exception 'payment_not_found';
  end if;

  if p.status = 'paid' then
    select ends_at into end_at from entitlements where id = p.entitlement_id;
    return jsonb_build_object('status', 'paid', 'plan', p.plan, 'ends_at', end_at, 'already', true);
  end if;

  select greatest(now(), coalesce(max(ends_at), now())) into start_at
  from entitlements
  where user_id = p.user_id and plan = p.plan and source in ('paid', 'grant') and ends_at > now();

  end_at := start_at + case when p.period = 'year' then interval '365 days' else interval '30 days' end;

  insert into entitlements (user_id, plan, source, starts_at, ends_at, note)
  values (p.user_id, p.plan, 'paid', start_at, end_at,
          'Maya ' || case when p.period = 'year' then 'yearly' else 'monthly' end || ' pass, payment ' || p.id)
  returning id into ent_id;

  update payments
     set status = 'paid', paid_at = now(), entitlement_id = ent_id,
         maya_payment_id = coalesce(p_maya_payment_id, maya_payment_id)
   where id = p.id;

  return jsonb_build_object('status', 'paid', 'plan', p.plan, 'starts_at', start_at, 'ends_at', end_at, 'already', false);
end;
$$;

revoke all on function public.grant_paid_plan(uuid, text) from public, anon, authenticated;
grant execute on function public.grant_paid_plan(uuid, text) to service_role;
