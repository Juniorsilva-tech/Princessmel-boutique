import { BookOpen, Droplets, Gem, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

function getScene(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("palavra") || normalized.includes("devocional")) {
    return { kind: "dailyWord", tag: "Palavra do dia", Icon: BookOpen };
  }

  if (normalized.includes("bíblia") || normalized.includes("biblia")) {
    return { kind: "bible", tag: "Bíblia", Icon: BookOpen };
  }

  if (normalized.includes("beleza") || normalized.includes("óleo") || normalized.includes("ritual")) {
    return { kind: "beauty", tag: "Ritual", Icon: Droplets };
  }

  if (normalized.includes("acess") || normalized.includes("bolsa") || normalized.includes("detalhe")) {
    return { kind: "accessory", tag: "Acessório", Icon: Gem };
  }

  if (normalized.includes("vitrine") || normalized.includes("tecido") || normalized.includes("textura")) {
    return { kind: "still", tag: "Editorial", Icon: Sparkles };
  }

  return { kind: "fashion", tag: "Coleção", Icon: Sparkles };
}

export function EditorialPlaceholder({
  label,
  className,
  palette,
}: {
  label: string;
  className?: string;
  palette: string;
}) {
  const scene = getScene(label);
  const Icon = scene.Icon;

  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br shadow-frame",
        palette,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(255,255,255,0.70),transparent_27%),radial-gradient(circle_at_85%_72%,rgba(31,26,23,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.36),transparent_42%,rgba(31,26,23,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.10)_0_1px,transparent_1px_100%),linear-gradient(180deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-white/22 blur-3xl" />
      <div className="absolute -bottom-16 right-0 h-60 w-60 rounded-full bg-ink/10 blur-3xl" />

      {scene.kind === "dailyWord" ? (
        <div className="absolute inset-0 flex items-center justify-center px-7 py-8">
          <div className="relative w-full max-w-[300px] rounded-[1.6rem] border border-white/35 bg-ink/62 p-6 text-center text-ivory shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015]">
            <div className="absolute inset-3 rounded-[1.25rem] border border-champagne/16" />
            <p className="relative text-[10px] uppercase tracking-[0.32em] text-champagne/80">Palavra do dia</p>
            <p className="relative mt-5 font-serif text-3xl leading-tight">Graça para hoje.</p>
            <p className="relative mx-auto mt-4 max-w-[220px] text-xs leading-6 text-ivory/70">
              Fé, direção e paz para começar o dia.
            </p>
            <div className="relative mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/35 text-champagne">
              <BookOpen className="h-4 w-4" />
            </div>
          </div>
        </div>
      ) : null}

      {scene.kind === "bible" ? (
        <div className="absolute inset-0 flex items-center justify-center px-10 pb-12 pt-8">
          <div className="relative h-[70%] w-[62%] max-w-[245px] rotate-[-5deg] rounded-[1.15rem] border border-ink/12 bg-[#594431]/92 shadow-velvet transition duration-500 group-hover:-rotate-2 group-hover:scale-[1.025]">
            <div className="absolute inset-y-5 left-5 w-px bg-champagne/38" />
            <div className="absolute inset-x-9 top-8 h-px bg-champagne/36" />
            <div className="absolute inset-x-9 top-14 h-px bg-champagne/20" />
            <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-champagne/34 text-champagne">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="absolute bottom-7 left-8 right-8">
              <p className="font-serif text-2xl leading-none text-ivory">Bíblia Sagrada</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-champagne/78">Produto físico</p>
            </div>
          </div>
          <div className="absolute bottom-[18%] left-[21%] h-10 w-32 rounded-full bg-white/28 blur-xl" />
        </div>
      ) : null}

      {scene.kind === "beauty" ? (
        <div className="absolute inset-0 flex items-end justify-center gap-5 px-10 pb-14">
          <div className="h-[44%] w-16 rounded-t-[2rem] border border-white/42 bg-white/32 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-2" />
          <div className="relative h-[64%] w-20 rounded-t-[2.4rem] border border-white/52 bg-ivory/56 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-4">
            <div className="absolute left-1/2 top-[-26px] h-8 w-9 -translate-x-1/2 rounded-t-xl bg-ink/42" />
            <div className="absolute inset-x-4 bottom-10 h-px bg-brass/42" />
            <div className="absolute inset-x-5 bottom-14 h-px bg-brass/25" />
          </div>
          <div className="h-[36%] w-14 rounded-t-[1.6rem] border border-white/40 bg-white/24 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-1" />
        </div>
      ) : null}

      {scene.kind === "accessory" ? (
        <div className="absolute inset-0 flex items-center justify-center px-10 pb-10 pt-12">
          <div className="relative h-[54%] w-[67%] max-w-[270px] rounded-b-[2rem] rounded-t-[3rem] border border-white/46 bg-ink/20 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:rotate-1 group-hover:scale-[1.025]">
            <div className="absolute -top-9 left-1/2 h-20 w-32 -translate-x-1/2 rounded-t-full border border-white/48 border-b-0" />
            <div className="absolute left-1/2 top-10 h-8 w-8 -translate-x-1/2 rounded-full border border-champagne/55" />
            <div className="absolute inset-x-8 bottom-9 h-px bg-white/35" />
          </div>
        </div>
      ) : null}

      {scene.kind === "still" ? (
        <div className="absolute inset-0">
          <div className="absolute left-[12%] top-[18%] h-28 w-28 rounded-full border border-white/42 bg-white/18 shadow-velvet" />
          <div className="absolute bottom-[14%] right-[12%] h-44 w-32 rounded-t-[999px] rounded-b-[2.5rem] border border-white/36 bg-white/20 shadow-velvet" />
          <div className="absolute inset-x-[24%] bottom-[12%] h-28 rounded-t-[999px] border border-white/28" />
          <div className="absolute left-[20%] top-[54%] h-px w-[54%] rotate-[-7deg] bg-white/48" />
        </div>
      ) : null}

      {scene.kind === "fashion" ? (
        <div className="absolute inset-0">
          <div className="absolute left-[13%] top-[18%] h-24 w-24 rounded-full border border-white/36 bg-white/14 shadow-velvet" />
          <div className="absolute bottom-[13%] right-[13%] h-40 w-28 rounded-t-[999px] rounded-b-[2.5rem] border border-white/32 bg-white/16 shadow-velvet" />
          <div className="absolute inset-x-[27%] bottom-[12%] h-28 rounded-t-[999px] border border-white/28 bg-transparent" />
          <div className="absolute left-[18%] top-[38%] h-[42%] w-px rotate-12 bg-white/35" />
          <div className="absolute right-[24%] top-[28%] h-[50%] w-px -rotate-6 bg-ink/10" />
        </div>
      ) : null}

      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-ink/58 backdrop-blur">
        <Icon className="h-3.5 w-3.5" />
        {scene.tag}
      </div>
    </div>
  );
}
