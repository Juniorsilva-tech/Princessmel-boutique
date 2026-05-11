"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";

import { BrandSignature } from "@/components/brand/brand-signature";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "#colecao", label: "Coleção" },
  { href: "#categorias", label: "Categorias" },
  { href: "#proposito", label: "Propósito" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-canvas/75 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Princessmel Boutique">
          <BrandSignature compact />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="hidden md:block">
          <Link
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Princessmel."
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "sm" })}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
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
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Princessmel."
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ className: "w-full" })}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
