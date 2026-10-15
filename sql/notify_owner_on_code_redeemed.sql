-- Tells the site owner (the bell) when someone redeems an access code:
-- "<email> (<CODE>) redeemed an access code". Tapping it opens the Access codes page.
-- Run once in the Supabase SQL editor (safe to re-run). Past redemptions are not back-filled.

-- 1. the new notification type
alter table notifications drop constraint if exists notifications_type_check;
alter table notifications add constraint notifications_type_check
  check (type in ('post_reply', 'comment_reply', 'connect_request', 'connect_accepted', 'new_follower', 'code_redeemed'));

-- 2. a trigger on every redemption
create or replace function public._notify_owner_code_redeemed()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  owner_id uuid;
  who text;
begin
  select id into owner_id from auth.users where lower(email) = 'caldrin1999@gmail.com';
  if owner_id is null or owner_id = new.user_id then
    return new;                      -- nobody to tell, or the owner is testing their own code
  end if;
  select email into who from auth.users where id = new.user_id;
  insert into notifications (recipient_id, actor_id, actor_name, type)
  values (owner_id, new.user_id, coalesce(who, 'Someone') || ' (' || new.code || ')', 'code_redeemed');
  return new;
exception when others then
  return new;                        -- never block a teacher from redeeming because the notice failed
end;
$$;

drop trigger if exists promo_redemptions_notify_owner on public.promo_redemptions;
create trigger promo_redemptions_notify_owner
  after insert on public.promo_redemptions
  for each row execute function public._notify_owner_code_redeemed();
