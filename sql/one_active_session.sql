-- One active login per account. Each sign-in claims the account with a fresh
-- random device token; any other device holding an older token is signed out
-- the next time it checks (about once a minute, and when its tab regains focus).
-- The site owner is exempt. Run once in the Supabase SQL editor (safe to re-run).

create table if not exists public.active_sessions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  token text not null,
  claimed_at timestamptz not null default now(),
  last_seen timestamptz not null default now()
);
alter table public.active_sessions enable row level security;   -- no policies: RPC access only
revoke all on public.active_sessions from anon, authenticated;

-- This device becomes the account's active login.
create or replace function public.claim_session(p_token text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_signed_in'; end if;
  if p_token is null or length(p_token) < 16 or length(p_token) > 128 then raise exception 'bad_token'; end if;
  insert into active_sessions (user_id, token, claimed_at, last_seen)
  values (uid, p_token, now(), now())
  on conflict (user_id) do update set token = excluded.token, claimed_at = now(), last_seen = now();
end;
$$;
grant execute on function public.claim_session(text) to authenticated;

-- Is this device still the active login? (true when nothing has been claimed yet, and for the owner)
create or replace function public.check_session(p_token text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  cur text;
begin
  if uid is null then return false; end if;
  if public.is_site_admin() then return true; end if;
  select token into cur from active_sessions where user_id = uid;
  if cur is null then return true; end if;
  if cur = p_token then
    update active_sessions set last_seen = now() where user_id = uid and last_seen < now() - interval '5 minutes';
    return true;
  end if;
  return false;
end;
$$;
grant execute on function public.check_session(text) to authenticated;
