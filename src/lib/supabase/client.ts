import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

/** Browser client — used only by client components (admin login). */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
