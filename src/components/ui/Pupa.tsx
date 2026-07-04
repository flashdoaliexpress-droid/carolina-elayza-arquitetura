interface PupaProps {
  className?: string;
}

export function Pupa({ className }: PupaProps) {
  return (
    <svg
      viewBox="0 0 100 220"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M50,0 L50,26" />
      <path d="M47,22 L50,28 L53,22" />
      <path d="M50,28 C40,28 34,38 34,52 C31,60 27,72 25,92 C22,120 26,158 40,195 L50,212 L60,195 C74,158 78,120 75,92 C73,72 69,60 66,52 C66,38 60,28 50,28 Z" />
      <path d="M32,66 C42,70 58,70 68,66" />
      <path d="M28,96 C42,102 58,102 72,96" />
      <path d="M27,126 C42,132 58,132 73,126" />
      <path d="M30,156 C42,161 58,161 70,156" />
      <path d="M50,40 L50,200" strokeDasharray="1 4" opacity="0.5" />
    </svg>
  );
}
