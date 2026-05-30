"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, UserRound, X } from "lucide-react";

import { BrandSignature } from "@/components/brand/brand-signature";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "#novidades", label: "Novidades" },
  { href: "#colecao", label: "Coleção" },
  { href: "#club", label: "Princessmel Club" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-canvas/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-5">
        <Link href="/" aria-label="Princessmel Boutique">
          <BrandSignature compact />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-graphite transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            <UserRound className="mr-2 h-4 w-4" />
            Entrar no Club
          </Link>
          <Link
            href="#contato"
            className={buttonVariants({ size: "sm" })}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Atendimento
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm", className: "md:hidden" }),
            "h-11 w-11 px-0",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((state) => !state)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/50 bg-ivory/95 md:hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm text-graphite transition hover:border-graphite/10 hover:bg-white/50 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className={buttonVariants({ variant: "secondary", className: "w-full" })}
                onClick={() => setOpen(false)}
              >
                <UserRound className="mr-2 h-4 w-4" />
                Entrar no Princessmel Club
              </Link>
              <Link
                href="#contato"
                className={buttonVariants({ className: "w-full" })}
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar com a boutique
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
