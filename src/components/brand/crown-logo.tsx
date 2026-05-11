import { cn } from "@/lib/utils";

export function CrownLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 132 70"
      aria-hidden="true"
      className={cn("h-8 w-14 text-brass", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 52L30 24L47 42L66 10L85 42L102 24L114 52"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.5"
      />
      <path
        d="M14 52H118L110 60H22L14 52Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4.5"
      />
      <path d="M24 60H108" stroke="currentColor" strokeLinecap="round" strokeWidth="4.5" />
    </svg>
  );
}
