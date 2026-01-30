"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  // Don't show on home page
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-black/70"
    >
      <ArrowLeft size={16} />
      <span>Back</span>
    </button>
  );
}
