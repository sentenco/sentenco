-- 1. The owner's Teachers screen now shows each account's plan and where it
--    comes from (free, trial with end date, promo/grant, paid).
-- 2. The total teacher count is private: only the site owner gets a number.
-- Run once in the Supabase SQL editor (needs entitlements_trial_and_codes.sql
-- to have been run first). Safe to re-run.

drop function if exists public.admin_list_teachers();

create or replace function public.admin_list_teachers()
returns table (
  id uuid,
  email text,
  display_name text,
  years_teaching int,
  is_mentor boolean,
  created_at timestamptz,
  plan text,            -- what they can use right now: free | pro | pro_plus
  source text,          -- base | trial | grant | paid
  access_ends_at timestamptz,
  trial_used boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select
    p.id,
    u.email::text,
    p.display_name,
    p.years_teaching,
    p.is_mentor,
    u.created_at,
    case when e.plan is not null and public.plan_rank(e.plan) > public.plan_rank(coalesce(p.plan, 'free'))
         then e.plan else coalesce(p.plan, 'free') end,
    case when e.plan is not null and public.plan_rank(e.plan) > public.plan_rank(coalesce(p.plan, 'free'))
         then e.source else 'base' end,
    case when e.plan is not null and public.plan_rank(e.plan) > public.plan_rank(coalesce(p.plan, 'free'))
         then e.ends_at else null end,
    exists (select 1 from entitlements t where t.user_id = p.id and t.source = 'trial')
  from profiles p
  join auth.users u on u.id = p.id
  left join lateral (
    select x.plan, x.source, x.ends_at
    from entitlements x
    where x.user_id = p.id and x.starts_at <= now() and x.ends_at > now()
    order by public.plan_rank(x.plan) desc, x.ends_at desc
    limit 1
  ) e on true
  where public.is_site_admin()
  order by u.created_at desc;
$$;

grant execute on function public.admin_list_teachers() to authenticated;

-- Total teacher count: owner only. Everyone else (including logged-out visitors) gets null.
create or replace function public.get_teacher_count()
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select case when public.is_site_admin() then (select count(*) from profiles) else null end;
$$;

grant execute on function public.get_teacher_count() to anon, authenticated;
