import { useRef } from 'react';

interface HorizontalGalleryProps {
  label: string;
  images: string[];
  alt: (i: number) => string;
}

export function HorizontalGallery({ label, images, alt }: HorizontalGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.8) * dir;
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  if (images.length === 0) return null;

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-6 gap-6">
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
          <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
            {label}
          </span>
          <span className="font-mono text-label text-sage tracking-[0.2em]">
            {String(images.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-label text-olive tracking-[0.3em]">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={`${label}, imagem anterior`}
            className="hover:text-terracotta transition-colors"
          >
            ←
          </button>
          <span className="text-sage" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={`${label}, próxima imagem`}
            className="hover:text-terracotta transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3"
        style={{ scrollbarWidth: 'thin' }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt(i)}
            loading="lazy"
            className="h-[380px] md:h-[520px] w-auto shrink-0 object-cover snap-start bg-cream"
          />
        ))}
      </div>
    </section>
  );
}
