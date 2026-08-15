create extension if not exists "pgcrypto";

create table if not exists public.contact_messages (
    id          uuid primary key default gen_random_uuid(),
    created_at  timestamptz not null default now(),

    name        text not null,
    email       text not null,
    message     text not null,

    topic       text,
    business    text,
    volume      text,

    status      text not null default 'new',
    handled_at  timestamptz,
    notes       text,

    constraint contact_messages_name_len    check (char_length(name) between 1 and 120),
    constraint contact_messages_email_len   check (char_length(email) between 3 and 254),
    constraint contact_messages_email_shape check (position('@' in email) > 1),
    constraint contact_messages_message_len check (char_length(message) between 1 and 5000),
    constraint contact_messages_status_vals check (status in ('new', 'in_progress', 'replied', 'spam'))
);

comment on table public.contact_messages is 'Submissions from the /contact form.';

create index if not exists contact_messages_created_at_idx
    on public.contact_messages (created_at desc);

create index if not exists contact_messages_status_idx
    on public.contact_messages (status)
    where status = 'new';

create index if not exists contact_messages_email_idx
    on public.contact_messages (lower(email));

alter table public.contact_messages enable row level security;

drop policy if exists "anon can submit contact messages" on public.contact_messages;
create policy "anon can submit contact messages"
    on public.contact_messages
    for insert
    to anon, authenticated
    with check (true);

create or replace function public.contact_messages_touch_handled_at()
returns trigger
language plpgsql
as $$
begin
    if new.status is distinct from old.status then
        new.handled_at := case when new.status = 'new' then null else now() end;
    end if;
    return new;
end;
$$;

drop trigger if exists contact_messages_handled_at on public.contact_messages;
create trigger contact_messages_handled_at
    before update on public.contact_messages
    for each row
    execute function public.contact_messages_touch_handled_at();
