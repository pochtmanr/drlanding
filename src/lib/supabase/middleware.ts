import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Refreshes the Supabase auth session inside the proxy and gates /admin.
 * `response` is the response produced by the next-intl middleware so the
 * locale cookies/rewrites it set are preserved.
 */
export async function updateSession(
  request: NextRequest,
  response: NextResponse,
) {
  let supabaseResponse = response;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: do not run code between createServerClient and getUser().
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isLoginPage = /^(\/(en|ru|he))?\/admin\/login\/?$/.test(pathname);

  if (!user && !isLoginPage) {
    const locale = pathname.match(/^\/(en|ru)\//)?.[1];
    const url = request.nextUrl.clone();
    url.pathname = locale ? `/${locale}/admin/login` : "/admin/login";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
