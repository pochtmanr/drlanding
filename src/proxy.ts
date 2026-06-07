import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "./lib/supabase/middleware";

const intl = createMiddleware(routing);

const ADMIN_PATH = /^(\/(en|ru|he))?\/admin(\/|$)/;

export default async function proxy(request: NextRequest) {
  // Locale routing first (rewrites '/' → '/he' internally, sets cookies).
  const response = intl(request);

  // Gate the admin area: refresh the Supabase session and redirect
  // unauthenticated visitors to the login page.
  if (ADMIN_PATH.test(request.nextUrl.pathname)) {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.warn("Supabase env vars missing — admin gate skipped.");
      return response;
    }
    return updateSession(request, response);
  }

  return response;
}

export const config = {
  // Skip api routes, Next internals and all files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
