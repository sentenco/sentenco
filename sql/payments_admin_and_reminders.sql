-- Owner payments page + renewal reminder emails.
-- Run once in the Supabase SQL editor (after sql/maya_payments.sql).
--
-- 1. admin_list_payments(): every Maya payment with the teacher's email and when the pass ends.
--    Only the owner (is_site_admin) gets rows back.
-- 2. renewal_reminders: which reminder emails were already sent, so nobody gets the same one twice.
-- 3. renewal_reminders_due(): paid passes that end in the next 3 days, or ended in the last 2 days,
--    and have no later pass after them. Only the server (service role) can call it.

-- 0. Mark test-mode payments (Maya sandbox) so they don't count as income -----------------
-- Every payment made before this column existed was a sandbox test (there are no live keys yet).
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'payments' and column_name = 'test_mode'
  ) then
    alter table public.payments add column test_mode boolean not null default false;
    update public.payments set test_mode = true;
  end if;
end $$;

-- 1. Owner list of payments ------------------------------------------------------------

drop function if exists public.admin_list_payments();
create function public.admin_list_payments()
returns table (
  id uuid,
  created_at timestamptz,
  paid_at timestamptz,
  email text,
  plan text,
  period text,
  amount numeric,
  currency text,
  status text,
  maya_payment_id text,
  test_mode boolean,
  starts_at timestamptz,
  ends_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select p.id, p.created_at, p.paid_at, u.email::text, p.plan, p.period, p.amount, p.currency, p.status,
         p.maya_payment_id, p.test_mode, e.starts_at, e.ends_at
  from public.payments p
  left join auth.users u on u.id = p.user_id
  left join public.entitlements e on e.id = p.entitlement_id
  where public.is_site_admin()
  order by p.created_at desc
  limit 1000;
$$;
revoke all on function public.admin_list_payments() from public, anon;
grant execute on function public.admin_list_payments() to authenticated;

-- 2. Sent reminders ----------------------------------------------------------------------

create table if not exists public.renewal_reminders (
  entitlement_id uuid not null references public.entitlements(id) on delete cascade,
  kind text not null check (kind in ('ending_soon', 'ended')),
  sent_at timestamptz not null default now(),
  primary key (entitlement_id, kind)
);
alter table public.renewal_reminders enable row level security;
-- No policies: browsers can't read or write it. The server uses the service role.
revoke all on public.renewal_reminders from anon, authenticated;
grant all on public.renewal_reminders to service_role;

-- 3. Who needs a reminder today ----------------------------------------------------------

create or replace function public.renewal_reminders_due()
returns table (
  entitlement_id uuid,
  user_id uuid,
  email text,
  plan text,
  ends_at timestamptz,
  kind text
)
language sql
stable
security definer
set search_path = public
as $$
  with candidates as (
    select e.id, e.user_id, e.plan, e.ends_at,
           case when e.ends_at > now() then 'ending_soon' else 'ended' end as kind
    from public.entitlements e
    where e.source = 'paid'
      and e.ends_at > now() - interval '2 days'
      and not exists (select 1 from public.payments t where t.entitlement_id = e.id and t.test_mode)
      and e.ends_at <= now() + interval '3 days'
  )
  select c.id, c.user_id, u.email::text, c.plan, c.ends_at, c.kind
  from candidates c
  join auth.users u on u.id = c.user_id
  where u.email is not null
    -- not sent yet
    and not exists (
      select 1 from public.renewal_reminders r where r.entitlement_id = c.id and r.kind = c.kind
    )
    -- no later pass of the same plan or higher (they already renewed, or the owner gave them more)
    and not exists (
      select 1 from public.entitlements later
      where later.user_id = c.user_id
        and later.id <> c.id
        and later.source in ('paid', 'grant')
        and public.plan_rank(later.plan) >= public.plan_rank(c.plan)
        and later.ends_at > c.ends_at
    );
$$;
revoke all on function public.renewal_reminders_due() from public, anon, authenticated;
grant execute on function public.renewal_reminders_due() to service_role;
