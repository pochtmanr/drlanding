-- ============================================================
-- Allow signed-in users to submit the public forms.
--
-- The forms' server actions run with the visitor's cookie
-- session. A visitor signed in to /admin therefore inserts as
-- the `authenticated` role — which had no INSERT policy, so
-- submitting the appointment/contact form while logged in
-- failed with "new row violates row-level security policy".
-- Same restriction as anon: fresh rows only.
-- ============================================================

grant insert on public.appointments, public.contact_messages to authenticated;

create policy "authenticated can create appointment"
  on public.appointments
  for insert
  to authenticated
  with check (status = 'new' and admin_notes is null);

create policy "authenticated can create contact message"
  on public.contact_messages
  for insert
  to authenticated
  with check (status = 'new' and admin_notes is null);
