import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "Resumo" },
  { href: "/app/cartao", label: "Cartao" },
  { href: "/app/parcelas", label: "Parcelas" },
];

export function AppShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="pointer-events-none fixed inset-0 bg-hero-glow opacity-80" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-graphite/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-serif text-2xl text-ink">
            Princessmel Club
          </Link>
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-graphite/10 bg-ivory/70 px-4 py-2 text-sm text-graphite shadow-sm transition hover:border-brass/50 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className={cn("flex-1 py-8", className)}>{children}</main>
      </div>
    </div>
  );
}
