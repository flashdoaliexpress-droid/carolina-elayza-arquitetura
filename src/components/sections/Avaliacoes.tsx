import { useEffect, useState } from 'react';
import { Pupa } from '@/components/ui/Pupa';
import { avaliacoes } from '@/data/avaliacoes';

const AUTO_ADVANCE_MS = 9000;

export function Avaliacoes() {
  const [index, setIndex] = useState(0);
  const total = avaliacoes.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-heading"
      className="relative w-full bg-cream border-t border-hairline overflow-hidden py-24 md:py-32"
    >
      <Pupa
        className="absolute top-0 right-[4%] md:right-[8%] w-[14vw] max-w-[140px] h-auto text-olive opacity-[0.12] rotate-6 pointer-events-none"
      />

      <header className="px-m-mobile md:px-m-desktop mb-16 md:mb-20">
        <div className="max-w-[720px]">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Quem já viveu
            </span>
          </div>

          <h2
            id="avaliacoes-heading"
            className="font-display text-olive text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-balance"
          >
            O que dizem sobre o <em className="italic">projeto</em>
          </h2>
        </div>
      </header>

      <div className="relative max-w-3xl mx-auto px-m-mobile md:px-0">
        <div
          className="relative min-h-[380px] md:min-h-[320px]"
          aria-live="polite"
        >
          {avaliacoes.map((a, i) => (
            <article
              key={a.id}
              aria-hidden={i !== index}
              className={`absolute inset-0 flex flex-col transition-opacity duration-500 ${
                i === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <span
                aria-hidden="true"
                className="font-display text-terracotta text-[96px] md:text-[128px] leading-none mb-2 select-none"
              >
                “
              </span>

              <p className="font-body text-body-lg md:text-[22px] leading-[1.55] text-olive mb-10 max-w-2xl">
                {a.texto}
              </p>

              <div className="flex flex-col gap-1 mt-auto">
                <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
                  {a.nome}
                </span>
                {a.local ? (
                  <span className="font-mono text-label text-sage tracking-[0.25em] uppercase">
                    {a.local}
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-16">
          <div className="flex items-center gap-3">
            {avaliacoes.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir para avaliação de ${a.nome}`}
                className={`w-1.5 h-1.5 border transition-colors ${
                  index === i
                    ? 'bg-terracotta border-terracotta'
                    : 'bg-transparent border-sage'
                }`}
              />
            ))}
          </div>

          <span className="w-px h-5 bg-sage/60" aria-hidden="true" />

          <div className="flex items-center gap-4 font-mono text-label text-olive tracking-[0.3em]">
            <button
              type="button"
              onClick={prev}
              aria-label="Avaliação anterior"
              className="transition-colors hover:text-terracotta"
            >
              ←
            </button>
            <span className="text-sage" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima avaliação"
              className="transition-colors hover:text-terracotta"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
