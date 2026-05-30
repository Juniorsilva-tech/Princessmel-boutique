import type { AdminMetric } from "@/types/finance";

export function MetricCard({ metric }: { metric: AdminMetric }) {
  return (
    <article className="rounded-3xl border border-graphite/10 bg-ivory/90 p-5 shadow-velvet">
      <p className="text-xs uppercase tracking-editorial text-brass">{metric.label}</p>
      <strong className="mt-3 block font-serif text-3xl font-normal text-ink">{metric.value}</strong>
      <p className="mt-3 text-sm leading-6 text-graphite">{metric.description}</p>
    </article>
  );
}
