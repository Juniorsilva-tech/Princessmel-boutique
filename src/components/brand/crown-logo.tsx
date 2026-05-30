import { cn } from "@/lib/utils";

export function CrownLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 144 88"
      aria-hidden="true"
      className={cn("h-9 w-14 text-brass", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 60L30 34L48 52L72 18L96 52L114 34L126 60H18Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M28 66H116L108 76H36L28 66Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path d="M38 80H106" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      <path
        d="M51 60V43C51 37 56 33 62 33C68 33 73 37 73 43C73 49 68 53 62 53H51"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.25"
      />
      <path
        d="M79 60V36L91 52L103 36V60"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.25"
      />
      <circle cx="30" cy="34" r="3" fill="currentColor" />
      <circle cx="72" cy="18" r="3.5" fill="currentColor" />
      <circle cx="114" cy="34" r="3" fill="currentColor" />
    </svg>
  );
}
