import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm";

export function buttonVariants({
  variant = "primary",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full border text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    size === "default" ? "h-12 px-6" : "h-10 px-4",
    variant === "primary" &&
      "border-ink bg-ink text-ivory hover:border-brass hover:bg-brass hover:text-ivory",
    variant === "secondary" &&
      "border-graphite/20 bg-ivory/80 text-ink hover:border-brass/40 hover:bg-cream",
    variant === "ghost" &&
      "border-transparent bg-transparent text-ink hover:border-graphite/15 hover:bg-ivory/80",
    className,
  );
}
