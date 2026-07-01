interface FeatherProps {
  className?: string;
}

export function Feather({ className }: FeatherProps) {
  return (
    <svg
      viewBox="0 0 100 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.5}
      aria-hidden="true"
      className={className}
    >
      <path d="M50,190 C50,190 20,150 20,100 C20,50 40,20 50,10 C60,20 80,50 80,100 C80,150 50,190 50,190 Z" />
      <path d="M50,10 L50,190" />
      <path d="M50,30 L65,40 M50,50 L70,65 M50,70 L75,90 M50,90 L75,115 M50,110 L70,135 M50,130 L65,150" />
      <path d="M50,40 L35,50 M50,60 L30,75 M50,80 L25,100 M50,100 L25,125 M50,120 L30,145 M50,140 L35,160" />
    </svg>
  );
}
