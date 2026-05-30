import { cn } from "@/lib/utils";

export function CrownLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 144 92"
      aria-hidden="true"
      className={cn("h-9 w-14 text-brass", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 63L33 31L54 54L72 17L90 54L111 31L125 63"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M42 63V42C42 34 48 29 56 29C64 29 70 34 70 42C70 50 64 55 56 55H42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.6"
        opacity="0.9"
      />
      <path
        d="M74 63V34L91 55L108 34V63"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.6"
        opacity="0.9"
      />
      <path
        d="M22 64H122L114 74H30L22 64Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path d="M34 78H110" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      <circle cx="33" cy="31" r="3.5" fill="currentColor" />
      <circle cx="72" cy="17" r="4" fill="currentColor" />
      <circle cx="111" cy="31" r="3.5" fill="currentColor" />
      <circle cx="19" cy="63" r="3" fill="currentColor" />
      <circle cx="125" cy="63" r="3" fill="currentColor" />
    </svg>
  );
}
