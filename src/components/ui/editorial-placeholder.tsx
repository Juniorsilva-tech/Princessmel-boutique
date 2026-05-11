import { cn } from "@/lib/utils";

export function EditorialPlaceholder({
  label,
  className,
  palette,
}: {
  label: string;
  className?: string;
  palette: string;
}) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br shadow-frame",
        palette,
        className,
      )}
    >
      <div className="absolute inset-5 rounded-[1.5rem] border border-white/40" />
      <div className="absolute left-[12%] top-[18%] h-24 w-24 rounded-full border border-white/35 bg-white/10 blur-[1px]" />
      <div className="absolute bottom-[14%] right-[12%] h-40 w-28 rounded-t-[999px] rounded-b-[2.5rem] border border-white/30 bg-white/15" />
      <div className="absolute inset-x-[28%] bottom-[12%] h-28 rounded-t-[999px] border border-white/25 bg-transparent" />
      <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-ink/55">
        <span>{label}</span>
        <span>Placeholder foto</span>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.30),transparent_35%,rgba(31,26,23,0.08)_100%)] opacity-80 transition duration-500 group-hover:opacity-100" />
    </div>
  );
}
