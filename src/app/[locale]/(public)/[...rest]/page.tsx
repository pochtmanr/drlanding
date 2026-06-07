import { notFound } from "next/navigation";

// Catch-all for unknown paths inside a valid locale → renders
// src/app/[locale]/not-found.tsx. Explicit routes always win over this.
export default function CatchAllPage() {
  notFound();
}
