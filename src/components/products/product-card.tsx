import { ArrowRight, MessageCircle } from "lucide-react";

import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[1.6rem] border border-white/70 bg-ivory/82 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-velvet">
      <div className="relative">
        <EditorialPlaceholder
          label={product.note}
          palette={product.palette}
          className="min-h-[205px] rounded-[1.35rem] sm:min-h-[220px]"
        />
        {product.badge ? (
          <span className="absolute right-3 top-3 rounded-full border border-white/55 bg-ivory/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-ink shadow-sm backdrop-blur">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-brass">{product.category}</p>
            <h3 className="mt-2 font-serif text-[1.55rem] leading-none text-ink">{product.name}</h3>
          </div>
          <p className="shrink-0 rounded-full border border-brass/15 bg-canvas px-3 py-1 text-sm text-ink">{product.price}</p>
        </div>

        <p className="mt-3 line-clamp-2 min-h-[3.25rem] text-sm leading-6 text-graphite">{product.description}</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <button type="button" className={buttonVariants({ variant: "secondary", size: "sm", className: "w-full" })}>
            Ver peça
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href="#contato"
            className={buttonVariants({ size: "sm", className: "w-full" })}
            aria-label={`Reservar ${product.name}`}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Reservar
          </a>
        </div>
      </div>
    </article>
  );
}
