import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

import { BrandSignature } from "@/components/brand/brand-signature";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/50 bg-ivory/70">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <BrandSignature />
          <p className="mt-5 max-w-md text-sm leading-7 text-graphite">
            Delicadeza, propósito e presença para vestir uma boutique local com linguagem premium e comercial.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Navegação</p>
          <div className="mt-5 space-y-3 text-sm text-graphite">
            <Link className="block transition hover:text-ink" href="#colecao">
              Coleção
            </Link>
            <Link className="block transition hover:text-ink" href="#categorias">
              Categorias
            </Link>
            <Link className="block transition hover:text-ink" href="#proposito">
              Propósito
            </Link>
            <Link className="block transition hover:text-ink" href="#contato">
              Contato
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Contato</p>
          <div className="mt-5 space-y-4 text-sm text-graphite">
            <Link
              className="flex items-center gap-3 transition hover:text-ink"
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Princessmel."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp direto
            </Link>
            <Link
              className="flex items-center gap-3 transition hover:text-ink"
              href="https://instagram.com/princessmelboutique"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
              @princessmelboutique
            </Link>
            <p>Vestidos para a glória de Deus.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
