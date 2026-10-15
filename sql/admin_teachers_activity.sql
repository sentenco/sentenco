-- Owner Teachers screen: adds activity to each account (last login, last seen,
-- email confirmed, posts, comments, code used). Only the site owner gets rows;
-- everyone else gets an empty list. Also lists accounts that have no profile row yet.
-- Needs entitlements_trial_and_codes.sql and one_active_session.sql to have been run.
-- Run once in the Supabase SQL editor. Safe to re-run.

drop function if exists public.admin_list_teachers();

create or replace function public.admin_list_teachers()
returns table (
  id uuid,
  email text,
  display_name text,
  years_teaching int,
  is_mentor boolean,
  created_at timestamptz,
  plan text,
  source text,
  access_ends_at timestamptz,
  trial_used boolean,
  last_sign_in_at timestamptz,
  email_confirmed_at timestamptz,
  last_seen timestamptz,
  post_count int,
  comment_count int,
  code_used text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    u.id,
    u.email::text,
    p.display_name,
    p.years_teaching,
    coalesce(p.is_mentor, false),
    u.created_at,
    case when e.plan is not null and public.plan_rank(e.plan) > public.plan_rank(coalesce(p.plan, 'free'))
         then e.plan else coalesce(p.plan, 'free') end,
    case when e.plan is not null and public.plan_rank(e.plan) > public.plan_rank(coalesce(p.plan, 'free'))
         then e.source else 'base' end,
    case when e.plan is not null and public.plan_rank(e.plan) > public.plan_rank(coalesce(p.plan, 'free'))
         then e.ends_at else null end,
    exists (select 1 from entitlements t where t.user_id = u.id and t.source = 'trial'),
    u.last_sign_in_at,
    u.email_confirmed_at,
    (select s.last_seen from active_sessions s where s.user_id = u.id),
    (select count(*)::int from community_posts cp where cp.author_id = u.id),
    (select count(*)::int from community_comments cc where cc.author_id = u.id),
    (select r.code from promo_redemptions r where r.user_id = u.id order by r.redeemed_at desc limit 1)
  from auth.users u
  left join profiles p on p.id = u.id
  left join lateral (
    select x.plan, x.source, x.ends_at
    from entitlements x
    where x.user_id = u.id and x.starts_at <= now() and x.ends_at > now()
    order by public.plan_rank(x.plan) desc, x.ends_at desc
    limit 1
  ) e on true
  where public.is_site_admin()
  order by u.created_at desc;
$$;

grant execute on function public.admin_list_teachers() to authenticated;
