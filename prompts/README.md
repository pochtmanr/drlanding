# MVP Prompts — Dr. Dubenko Clinic Site

The **foundation is already built** (design system, i18n, layout, Supabase schema/clients/forms).
These 8 prompts build all the feature pages. Each prompt owns a **disjoint set of files**, so
**all 8 can run in parallel** — open 8 Claude Code sessions in this directory (or use worktrees)
and paste one prompt file into each:

```
claude "$(cat prompts/01-home.md)"
claude "$(cat prompts/02-about-sports.md)"
claude "$(cat prompts/03-services-shoulder-knee.md)"
claude "$(cat prompts/04-services-ankle-injections.md)"
claude "$(cat prompts/05-services-arthroscopy.md)"
claude "$(cat prompts/06-patient-info.md)"
claude "$(cat prompts/07-appointment-contact-legal.md)"
claude "$(cat prompts/08-admin.md)"
```

Disjoint file ownership means even a shared checkout is safe; worktrees are optional.
Note: while several sessions run, `npm run build` may transiently fail because *other*
sessions' routes don't exist yet — each prompt's acceptance criteria only require that
**its own** files type-check; run the full build after all sessions finish.

## One-time setup (before or while prompts run)

1. **Env**: copy `.env.example` → `.env.local`, fill `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (project `pwvtjuklkfelpxzxjmsi`).
2. **Migration**: run `supabase/migrations/20260607000000_init.sql` in the Supabase SQL editor
   (or `supabase db push`). ⚠️ It **drops all existing tables** in `public` first — intended,
   the project is being reused.
3. **Admin user**: Supabase Dashboard → Authentication → Users → *Add user* (email + password,
   auto-confirm). Then **disable email signups**: Authentication → Sign In / Up → turn off
   "Allow new users to sign up". Any authenticated user is treated as the admin.

## After all prompts finish

```bash
npm run build && npm run lint
grep -rn "TODO\|Lorem\|placeholder" src/content messages   # must be empty
npm run dev
```

- Click through every route in `src/lib/routes.ts` at `/`, `/en/…`, `/ru/…`.
- Submit the appointment form → row appears in Supabase → visible at `/admin` → change
  status + add a note → persists.
- `/admin` while signed out → redirects to `/admin/login`.

## Shared rules (every prompt restates them)

- **Translation policy**: the executing agent writes ALL Hebrew/English/Russian copy itself,
  directly into files. Never any external API, script, or translation service.
- **File ownership**: each prompt lists exactly which files it may create/edit. Everything
  else — especially `src/components/**`, `src/lib/**`, `src/i18n/**`, `src/proxy.ts`,
  `messages/*/common.json`, other namespaces — is read-only.
- **Facts**: only verifiable info — 37 years experience, Maccabi, the 4 clinics in
  `src/content/clinics.ts`. No invented credentials, statistics, or patient outcomes.
