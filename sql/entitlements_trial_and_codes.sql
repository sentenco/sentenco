-- Free trial + promo-code access for the beta. Run once in the Supabase SQL
-- editor. Safe to re-run (everything is "if not exists" / "create or replace").
--
-- Model: a user's effective plan is the highest of
--   1. profiles.plan (the manual / future-paid base plan), and
--   2. any ACTIVE row in `entitlements` (trial, promo grant, later: paid).
-- Clients can only READ their own entitlements. Every write goes through the
-- SECURITY DEFINER functions below, which check who is calling.

-- ------------------------------------------------------------------
-- 0. Close a hole: clients must never be able to write profiles.plan.
--    (profiles_update_own / profiles_insert_own let any signed-in user
--    update their own row, including the plan column.)
-- ------------------------------------------------------------------
create or replace function public.profiles_protect_plan()
returns trigger
language plpgsql
as $$
begin
  -- Direct client writes run as the `authenticated` / `anon` role; the
  -- SECURITY DEFINER functions and the SQL editor do not.
  if current_user in ('authenticated', 'anon') then
    if tg_op = 'INSERT' then
      new.plan := 'free';
    elsif new.plan is distinct from old.plan then
      new.plan := old.plan;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_protect_plan on public.profiles;
create trigger profiles_protect_plan
  before insert or update on public.profiles
  for each row execute function public.profiles_protect_plan();

-- ------------------------------------------------------------------
-- 1. Tables
-- ------------------------------------------------------------------
create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null check (plan in ('pro', 'pro_plus')),
  source text not null check (source in ('trial', 'grant', 'paid')),
  starts_at timestamptz not null default now(),
  ends_at timestamptz not null,
  code text,
  note text,
  granted_by uuid,
  created_at timestamptz not null default now()
);

create index if not exists entitlements_user_idx on public.entitlements (user_id, ends_at);
-- One free trial per account, ever.
create unique index if not exists entitlements_one_trial_per_user
  on public.entitlements (user_id) where source = 'trial';

alter table public.entitlements enable row level security;
drop policy if exists "entitlements_select_own" on public.entitlements;
create policy "entitlements_select_own" on public.entitlements
  for select using (user_id = auth.uid());
revoke all on public.entitlements from anon, authenticated;
grant select on public.entitlements to authenticated;

create table if not exists public.promo_codes (
  code text primary key,
  plan text not null check (plan in ('pro', 'pro_plus')),
  days int not null check (days between 1 and 366),
  max_uses int not null default 1 check (max_uses >= 1),
  used_count int not null default 0,
  expires_at timestamptz,
  active boolean not null default true,
  note text,
  created_by uuid,
  created_at timestamptz not null default now()
);
alter table public.promo_codes enable row level security;   -- no policies: RPC access only
revoke all on public.promo_codes from anon, authenticated;

create table if not exists public.promo_redemptions (
  code text not null references public.promo_codes(code) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  redeemed_at timestamptz not null default now(),
  primary key (code, user_id)
);
alter table public.promo_redemptions enable row level security;
revoke all on public.promo_redemptions from anon, authenticated;

-- Daily AI use during a trial (cost cap). One row per user per Manila day.
create table if not exists public.ai_trial_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  hits int not null default 0,
  primary key (user_id, day)
);
alter table public.ai_trial_usage enable row level security;
revoke all on public.ai_trial_usage from anon, authenticated;

-- ------------------------------------------------------------------
-- 2. Helpers
-- ------------------------------------------------------------------
create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select lower(email) from auth.users where id = auth.uid()) = 'caldrin1999@gmail.com', false);
$$;
grant execute on function public.is_site_admin() to authenticated;

create or replace function public.plan_rank(p text)
returns int
language sql
immutable
as $$
  select case p when 'pro_plus' then 2 when 'pro' then 1 else 0 end;
$$;

-- What the caller currently has, as JSON:
-- { plan, source, ends_at, trial_available }
create or replace function public.my_plan()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  base text;
  best_plan text := 'free';
  best_source text := 'base';
  best_end timestamptz := null;
  e record;
  used boolean;
begin
  if uid is null then
    return jsonb_build_object('plan', 'free', 'source', 'none', 'ends_at', null, 'trial_available', false);
  end if;

  select coalesce(plan, 'free') into base from profiles where id = uid;
  base := coalesce(base, 'free');
  best_plan := base;

  for e in
    select plan, source, ends_at from entitlements
    where user_id = uid and starts_at <= now() and ends_at > now()
  loop
    if plan_rank(e.plan) > plan_rank(best_plan)
       or (plan_rank(e.plan) = plan_rank(best_plan) and best_source <> 'base'
           and e.ends_at > coalesce(best_end, now())) then
      best_plan := e.plan; best_source := e.source; best_end := e.ends_at;
    end if;
  end loop;

  select exists (select 1 from entitlements where user_id = uid and source = 'trial') into used;

  return jsonb_build_object(
    'plan', best_plan,
    'source', best_source,
    'ends_at', best_end,
    'trial_available', not used and plan_rank(base) < 2
  );
end;
$$;
grant execute on function public.my_plan() to authenticated;

-- ------------------------------------------------------------------
-- 3. Start the 7-day trial (Pro+, once per account, no card)
-- ------------------------------------------------------------------
create or replace function public.start_trial()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not_signed_in';
  end if;
  if exists (select 1 from entitlements where user_id = uid and source = 'trial') then
    raise exception 'trial_already_used';
  end if;
  insert into entitlements (user_id, plan, source, starts_at, ends_at, note)
  values (uid, 'pro_plus', 'trial', now(), now() + interval '7 days', '7-day free trial');
  return public.my_plan();
end;
$$;
grant execute on function public.start_trial() to authenticated;

-- ------------------------------------------------------------------
-- 4. Redeem a promo code
-- ------------------------------------------------------------------
create or replace function public.redeem_code(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  c promo_codes%rowtype;
  norm text := upper(trim(coalesce(p_code, '')));
begin
  if uid is null then
    raise exception 'not_signed_in';
  end if;

  select * into c from promo_codes where code = norm for update;
  if not found or not c.active then
    raise exception 'invalid_code';
  end if;
  if c.expires_at is not null and c.expires_at <= now() then
    raise exception 'code_expired';
  end if;
  if c.used_count >= c.max_uses then
    raise exception 'code_used_up';
  end if;
  if exists (select 1 from promo_redemptions where code = c.code and user_id = uid) then
    raise exception 'already_redeemed';
  end if;

  insert into promo_redemptions (code, user_id) values (c.code, uid);
  update promo_codes set used_count = used_count + 1 where code = c.code;
  insert into entitlements (user_id, plan, source, starts_at, ends_at, code, note)
  values (uid, c.plan, 'grant', now(), now() + make_interval(days => c.days), c.code, c.note);

  return public.my_plan();
end;
$$;
grant execute on function public.redeem_code(text) to authenticated;

-- ------------------------------------------------------------------
-- 5. AI cost cap during the trial (called by the AI endpoints)
--    Returns true if this call is allowed.
-- ------------------------------------------------------------------
create or replace function public.ai_trial_hit(p_limit int default 30)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  src text;
  today date := (now() at time zone 'Asia/Manila')::date;
  n int;
begin
  if uid is null then
    return false;
  end if;
  src := public.my_plan() ->> 'source';
  if src is distinct from 'trial' then
    return true;          -- the cap only applies to trial accounts
  end if;
  insert into ai_trial_usage (user_id, day, hits) values (uid, today, 1)
  on conflict (user_id, day) do update set hits = ai_trial_usage.hits + 1
  returning hits into n;
  return n <= p_limit;
end;
$$;
grant execute on function public.ai_trial_hit(int) to authenticated;

-- ------------------------------------------------------------------
-- 6. Owner-only admin functions
-- ------------------------------------------------------------------
create or replace function public.admin_create_code(
  p_code text, p_plan text, p_days int, p_max_uses int, p_expires timestamptz, p_note text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_site_admin() then raise exception 'forbidden'; end if;
  insert into promo_codes (code, plan, days, max_uses, expires_at, note, created_by)
  values (upper(trim(p_code)), p_plan, p_days, greatest(coalesce(p_max_uses, 1), 1), p_expires, p_note, auth.uid());
end;
$$;
grant execute on function public.admin_create_code(text, text, int, int, timestamptz, text) to authenticated;

create or replace function public.admin_set_code_active(p_code text, p_active boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_site_admin() then raise exception 'forbidden'; end if;
  update promo_codes set active = p_active where code = upper(trim(p_code));
end;
$$;
grant execute on function public.admin_set_code_active(text, boolean) to authenticated;

create or replace function public.admin_list_codes()
returns table (
  code text, plan text, days int, max_uses int, used_count int,
  expires_at timestamptz, active boolean, note text, created_at timestamptz, redeemed_by text
)
language sql
security definer
set search_path = public
as $$
  select c.code, c.plan, c.days, c.max_uses, c.used_count, c.expires_at, c.active, c.note, c.created_at,
         coalesce((select string_agg(u.email, ', ' order by r.redeemed_at)
                   from promo_redemptions r join auth.users u on u.id = r.user_id
                   where r.code = c.code), '') as redeemed_by
  from promo_codes c
  where public.is_site_admin()
  order by c.created_at desc;
$$;
grant execute on function public.admin_list_codes() to authenticated;

-- Grant straight to an account by email (no code needed).
create or replace function public.admin_grant(p_email text, p_plan text, p_days int, p_note text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid;
begin
  if not public.is_site_admin() then raise exception 'forbidden'; end if;
  select id into uid from auth.users where lower(email) = lower(trim(p_email));
  if uid is null then raise exception 'no_such_user'; end if;
  insert into entitlements (user_id, plan, source, starts_at, ends_at, note, granted_by)
  values (uid, p_plan, 'grant', now(), now() + make_interval(days => p_days), p_note, auth.uid());
end;
$$;
grant execute on function public.admin_grant(text, text, int, text) to authenticated;

create or replace function public.admin_list_entitlements()
returns table (
  id uuid, email text, plan text, source text, starts_at timestamptz, ends_at timestamptz,
  code text, note text, active boolean
)
language sql
security definer
set search_path = public
as $$
  select e.id, u.email, e.plan, e.source, e.starts_at, e.ends_at, e.code, e.note,
         (e.starts_at <= now() and e.ends_at > now()) as active
  from entitlements e join auth.users u on u.id = e.user_id
  where public.is_site_admin()
  order by e.created_at desc
  limit 200;
$$;
grant execute on function public.admin_list_entitlements() to authenticated;

create or replace function public.admin_revoke(p_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_site_admin() then raise exception 'forbidden'; end if;
  update entitlements set ends_at = now() where id = p_id and ends_at > now();
end;
$$;
grant execute on function public.admin_revoke(uuid) to authenticated;
