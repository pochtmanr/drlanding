-- ============================================================
-- Table-level grants for the Supabase API roles.
--
-- The reused project (pwvtjuklkfelpxzxjmsi) had the default
-- privileges on the public schema revoked, so the tables created
-- by 20260607000000_init.sql ended up with NO grants at all:
-- both the anon INSERTs from the public forms and the admin
-- SELECT/UPDATE failed with 42501 "permission denied for table".
-- RLS policies only filter rows — the role still needs the
-- table-level privilege underneath.
-- ============================================================

grant usage on schema public to anon, authenticated, service_role;

-- Anonymous visitors: insert-only (RLS further restricts to status='new').
grant insert on public.appointments, public.contact_messages to anon;

-- Signed-in admin: read + update (RLS policies allow all rows).
grant select, update on public.appointments, public.contact_messages to authenticated;

-- Service role (dashboard tooling / future server-side jobs).
grant all on public.appointments, public.contact_messages to service_role;
