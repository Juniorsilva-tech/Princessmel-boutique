import { CrownLogo } from "@/components/brand/crown-logo";
import { cn } from "@/lib/utils";

export function BrandSignature({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <CrownLogo className={compact ? "h-7 w-12" : "h-9 w-16"} />
      <div className="min-w-0">
        <p className="font-serif text-xl tracking-[0.08em] text-ink sm:text-2xl">Princessmel</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-graphite/70 sm:text-[11px]">
          Boutique with purpose
        </p>
      </div>
    </div>
  );
}
