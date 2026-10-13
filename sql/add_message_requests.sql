-- Message requests: a first message to a teacher you are not connected with (and do not follow each other)
-- waits as a request they can accept or decline. Run once in the Supabase SQL editor
-- (after add_follow_and_connect.sql and add_report_and_block.sql). Safe to run again.
-- Existing conversations stay as they are (accepted). Group chats are not affected.

alter table conversations add column if not exists request_status text not null default 'accepted';
alter table conversations drop constraint if exists conversations_request_status_check;
alter table conversations add constraint conversations_request_status_check check (request_status in ('pending', 'accepted', 'declined'));
alter table conversations add column if not exists requested_by uuid references auth.users(id) on delete set null;

-- Connected, or following each other: messages go straight through.
create or replace function _can_message_directly(a uuid, b uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from connections
    where status = 'accepted'
      and least(requester_id, addressee_id) = least(a, b) and greatest(requester_id, addressee_id) = greatest(a, b)
  ) or (
    exists (select 1 from follows where follower_id = a and followee_id = b)
    and exists (select 1 from follows where follower_id = b and followee_id = a)
  )
$$;

-- A new one-to-one conversation starts as a request unless the two can already message directly.
create or replace function _set_message_request() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if coalesce(new.is_group, false) then return new; end if;
  new.requested_by := auth.uid();
  if new.user_a_id is not null and new.user_b_id is not null and _can_message_directly(new.user_a_id, new.user_b_id) then
    new.request_status := 'accepted';
  else
    new.request_status := 'pending';
  end if;
  return new;
end $$;
drop trigger if exists conversations_set_request on conversations;
create trigger conversations_set_request before insert on conversations for each row execute function _set_message_request();

-- Nobody changes the request columns by hand; only the functions below do.
create or replace function _guard_request_columns() returns trigger
language plpgsql as $$
begin
  if (new.request_status is distinct from old.request_status or new.requested_by is distinct from old.requested_by)
     and coalesce(current_setting('app.request_rpc', true), '') <> 'on' then
    new.request_status := old.request_status;
    new.requested_by := old.requested_by;
  end if;
  return new;
end $$;
drop trigger if exists conversations_guard_request on conversations;
create trigger conversations_guard_request before update on conversations for each row execute function _guard_request_columns();

-- While a request is waiting: the sender gets one message. If the other teacher replies, it counts as accepting.
create or replace function _enforce_message_request() returns trigger
language plpgsql security definer set search_path = public as $$
declare c conversations%rowtype; other uuid;
begin
  select * into c from conversations where id = new.conversation_id;
  if c.id is null or coalesce(c.is_group, false) or c.request_status = 'accepted' then return new; end if;
  other := case when c.user_a_id = new.sender_id then c.user_b_id else c.user_a_id end;
  if _can_message_directly(new.sender_id, other) then
    perform set_config('app.request_rpc', 'on', true);
    update conversations set request_status = 'accepted' where id = c.id;
    return new;
  end if;
  if new.sender_id = c.requested_by then
    if c.request_status = 'declined' then raise exception 'request_declined'; end if;
    if exists (select 1 from messages where conversation_id = c.id and sender_id = new.sender_id) then
      raise exception 'request_pending';
    end if;
    return new;
  end if;
  perform set_config('app.request_rpc', 'on', true);
  update conversations set request_status = 'accepted' where id = c.id;
  return new;
end $$;
drop trigger if exists messages_request_check on messages;
create trigger messages_request_check before insert on messages for each row execute function _enforce_message_request();

create or replace function respond_message_request(p_conv uuid, p_accept boolean) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); c conversations%rowtype;
begin
  if me is null then return; end if;
  select * into c from conversations where id = p_conv;
  if c.id is null or coalesce(c.is_group, false) or c.request_status <> 'pending' then return; end if;
  if me not in (c.user_a_id, c.user_b_id) or c.requested_by = me then return; end if;
  perform set_config('app.request_rpc', 'on', true);
  update conversations set request_status = case when p_accept then 'accepted' else 'declined' end where id = p_conv;
end $$;

grant execute on function respond_message_request(uuid, boolean) to authenticated;
