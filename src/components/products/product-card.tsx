import { ArrowRight } from "lucide-react";

import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[2rem] border border-white/70 bg-ivory/70 p-4 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-velvet">
      <EditorialPlaceholder
        label={product.note}
        palette={product.palette}
        className="min-h-[280px] rounded-[1.7rem]"
      />

      <div className="px-2 pb-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brass">{product.category}</p>
            <h3 className="mt-3 font-serif text-2xl text-ink">{product.name}</h3>
          </div>
          <p className="text-sm text-ink">{product.price}</p>
        </div>

        <p className="mt-4 text-sm leading-7 text-graphite">{product.description}</p>

        <button type="button" className={buttonVariants({ variant: "secondary", className: "mt-6 w-full" })}>
          Ver peça
          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
