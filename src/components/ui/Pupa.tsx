import pupaImg from '@/assets/images/pupa.png';

interface PupaProps {
  className?: string;
}

export function Pupa({ className }: PupaProps) {
  return (
    <img
      src={pupaImg}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={className}
    />
  );
}
