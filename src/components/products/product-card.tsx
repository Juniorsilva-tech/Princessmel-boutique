import { ArrowRight, MessageCircle } from "lucide-react";

import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[2rem] border border-white/70 bg-ivory/78 p-4 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brass/30 hover:shadow-velvet">
      <div className="relative">
        <EditorialPlaceholder
          label={product.note}
          palette={product.palette}
          className="min-h-[280px] rounded-[1.7rem]"
        />
        {product.badge ? (
          <span className="absolute right-4 top-4 rounded-full border border-white/55 bg-ivory/85 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-ink shadow-sm backdrop-blur">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="px-2 pb-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brass">{product.category}</p>
            <h3 className="mt-3 font-serif text-2xl text-ink">{product.name}</h3>
          </div>
          <p className="rounded-full border border-brass/15 bg-canvas px-3 py-1 text-sm text-ink">{product.price}</p>
        </div>

        <p className="mt-4 text-sm leading-7 text-graphite">{product.description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
          <button type="button" className={buttonVariants({ variant: "secondary", className: "w-full" })}>
            Ver peça
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá, quero reservar ou consultar disponibilidade da peça ${product.name}.`)}`}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ className: "w-full sm:w-12 sm:px-0" })}
            aria-label={`Reservar ${product.name} no WhatsApp`}
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
