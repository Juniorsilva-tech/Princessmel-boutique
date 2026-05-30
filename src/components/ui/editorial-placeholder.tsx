import { BookOpen, Droplets, Gem, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

function getScene(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("palavra") || normalized.includes("devocional")) {
    return {
      kind: "dailyWord",
      tag: "Palavra do dia",
      Icon: BookOpen,
    };
  }

  if (normalized.includes("bíblia") || normalized.includes("biblia")) {
    return {
      kind: "bible",
      tag: "Bíblia",
      Icon: BookOpen,
    };
  }

  if (normalized.includes("beleza") || normalized.includes("óleo") || normalized.includes("ritual")) {
    return {
      kind: "beauty",
      tag: "Ritual",
      Icon: Droplets,
    };
  }

  if (normalized.includes("acess") || normalized.includes("bolsa") || normalized.includes("detalhe")) {
    return {
      kind: "accessory",
      tag: "Acessório",
      Icon: Gem,
    };
  }

  if (normalized.includes("vitrine") || normalized.includes("tecido") || normalized.includes("textura")) {
    return {
      kind: "still",
      tag: "Editorial",
      Icon: Sparkles,
    };
  }

  return {
    kind: "fashion",
    tag: "Foto real em breve",
    Icon: Sparkles,
  };
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
        "group relative isolate overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br shadow-frame",
        palette,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.52),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.32),transparent_38%,rgba(31,26,23,0.12)_100%)]" />
      <div className="absolute inset-5 rounded-[1.5rem] border border-white/40" />
      <div className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-12 right-0 h-52 w-52 rounded-full bg-ink/10 blur-2xl" />

      {scene.kind === "dailyWord" ? (
        <div className="absolute inset-0 flex items-center justify-center px-7 py-8">
          <div className="relative w-full max-w-[300px] rounded-[1.5rem] border border-white/35 bg-ink/62 p-6 text-center text-ivory shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015]">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne/80">Palavra do dia</p>
            <p className="mt-5 font-serif text-3xl leading-tight">Graça para hoje.</p>
            <p className="mx-auto mt-4 max-w-[220px] text-xs leading-6 text-ivory/70">
              Uma reflexão curta para abrir o dia com fé, direção e paz.
            </p>
            <div className="mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/35 text-champagne">
              <BookOpen className="h-4 w-4" />
            </div>
          </div>
        </div>
      ) : null}

      {scene.kind === "bible" ? (
        <div className="absolute inset-0 flex items-center justify-center px-10 pb-12 pt-8">
          <div className="relative h-[68%] w-[68%] max-w-[270px] rounded-[1.2rem] border border-ink/12 bg-[#5b4432]/90 shadow-velvet transition duration-500 group-hover:-rotate-2 group-hover:scale-[1.025]">
            <div className="absolute inset-y-4 left-5 w-px bg-champagne/45" />
            <div className="absolute inset-x-8 top-8 h-px bg-champagne/40" />
            <div className="absolute inset-x-8 top-14 h-px bg-champagne/25" />
            <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-champagne/35 text-champagne">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="absolute bottom-7 left-8 right-8">
              <p className="font-serif text-2xl text-ivory">Bíblia Sagrada</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-champagne/80">Produto físico</p>
            </div>
          </div>
          <div className="absolute bottom-[21%] left-[18%] h-12 w-28 rounded-full bg-white/30 blur-md" />
        </div>
      ) : null}

      {scene.kind === "beauty" ? (
        <div className="absolute inset-0 flex items-end justify-center gap-4 px-10 pb-16">
          <div className="h-[46%] w-16 rounded-t-[2rem] border border-white/45 bg-white/35 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-2" />
          <div className="relative h-[62%] w-20 rounded-t-[2.5rem] border border-white/50 bg-ivory/55 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-4">
            <div className="absolute left-1/2 top-[-26px] h-8 w-9 -translate-x-1/2 rounded-t-xl bg-ink/45" />
            <div className="absolute inset-x-4 bottom-8 h-px bg-brass/45" />
            <div className="absolute inset-x-5 bottom-12 h-px bg-brass/30" />
          </div>
          <div className="h-[38%] w-14 rounded-t-[1.6rem] border border-white/40 bg-white/25 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:-translate-y-1" />
        </div>
      ) : null}

      {scene.kind === "accessory" ? (
        <div className="absolute inset-0 flex items-center justify-center px-10 pb-10 pt-12">
          <div className="relative h-[58%] w-[68%] max-w-[280px] rounded-b-[2rem] rounded-t-[3rem] border border-white/45 bg-ink/20 shadow-velvet backdrop-blur-sm transition duration-500 group-hover:rotate-1 group-hover:scale-[1.025]">
            <div className="absolute -top-10 left-1/2 h-20 w-32 -translate-x-1/2 rounded-t-full border border-white/45 border-b-0" />
            <div className="absolute left-1/2 top-10 h-8 w-8 -translate-x-1/2 rounded-full border border-champagne/55" />
            <div className="absolute inset-x-8 bottom-9 h-px bg-white/35" />
          </div>
        </div>
      ) : null}

      {scene.kind === "still" ? (
        <div className="absolute inset-0">
          <div className="absolute left-[13%] top-[20%] h-28 w-28 rounded-full border border-white/40 bg-white/15" />
          <div className="absolute bottom-[18%] right-[12%] h-44 w-32 rounded-t-[999px] rounded-b-[2.5rem] border border-white/35 bg-white/20 shadow-velvet" />
          <div className="absolute inset-x-[25%] bottom-[13%] h-28 rounded-t-[999px] border border-white/25" />
          <div className="absolute left-[20%] top-[54%] h-px w-[54%] rotate-[-7deg] bg-white/45" />
        </div>
      ) : null}

      {scene.kind === "fashion" ? (
        <div className="absolute inset-0">
          <div className="absolute left-[12%] top-[18%] h-24 w-24 rounded-full border border-white/35 bg-white/10 blur-[1px]" />
          <div className="absolute bottom-[14%] right-[12%] h-40 w-28 rounded-t-[999px] rounded-b-[2.5rem] border border-white/30 bg-white/15" />
          <div className="absolute inset-x-[28%] bottom-[12%] h-28 rounded-t-[999px] border border-white/25 bg-transparent" />
          <div className="absolute left-[18%] top-[38%] h-[42%] w-px rotate-12 bg-white/35" />
          <div className="absolute right-[24%] top-[28%] h-[50%] w-px -rotate-6 bg-ink/10" />
        </div>
      ) : null}

      <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/35 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-ink/60 backdrop-blur">
        <Icon className="h-3.5 w-3.5" />
        {scene.tag}
      </div>

      <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-ink/60">
        <span>{label}</span>
        <span>{scene.kind === "fashion" ? "Foto real em breve" : scene.kind === "dailyWord" ? "Reflexão diária" : scene.kind === "bible" ? "Produto físico" : "Arte editorial"}</span>
      </div>
    </div>
  );
}
