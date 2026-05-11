import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4 text-xs uppercase tracking-[0.32em] text-brass">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-graphite sm:text-lg">{description}</p>
    </div>
  );
}
