alter table public.waitlist
    add column if not exists unsubscribed    boolean not null default false,
    add column if not exists unsubscribed_at timestamptz;

comment on column public.waitlist.unsubscribed is
    'Set from /unsubscribe. Exclude these rows from every campaign send.';

create index if not exists waitlist_subscribed_idx
    on public.waitlist (created_at desc)
    where unsubscribed = false;

alter table public.waitlist enable row level security;

-- The unsubscribe link carries no token, so the update has to be open to anon.
-- Narrow the blast radius at the grant level: these are the only two columns
-- anon may write, so the policy cannot be turned into an email-rewrite hole.
revoke update on public.waitlist from anon, authenticated;
grant update (unsubscribed, unsubscribed_at) on public.waitlist to anon, authenticated;

-- Both directions: /unsubscribe sets the flag, the waitlist form clears it again
-- when someone who left opts back in.
drop policy if exists "anon can toggle subscription" on public.waitlist;
create policy "anon can toggle subscription"
    on public.waitlist
    for update
    to anon, authenticated
    using (true)
    with check (true);
