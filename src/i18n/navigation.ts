import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware drop-in replacements for Next.js navigation APIs.
// Always import these (never from next/link / next/navigation) in app code.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
