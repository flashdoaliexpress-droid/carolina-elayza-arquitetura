import { useEffect } from 'react';
import { alfabeto, termosPorLetra } from '@/data/dicionario';

export function Dicionario() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const letrasComTermos = new Set(Object.keys(termosPorLetra));

  return (
    <article className="w-full bg-cream pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="max-w-[900px] mx-auto px-m-mobile md:px-m-desktop">
        <header className="mb-16 md:mb-20">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Dicionário
            </span>
          </div>

          <h1 className="font-display text-olive text-[44px] md:text-[64px] leading-[1.05] tracking-tight text-balance mb-8">
            Palavras da arquitetura, <em className="italic">sem enrolação</em>
          </h1>

          <p className="font-body text-body-lg text-ink-muted max-w-xl">
            Um vocabulário curto para você não se perder nas conversas de projeto e obra.
            Vamos ampliando com o tempo — se sentir falta de algum termo, é só me mandar.
          </p>
        </header>

        <nav
          aria-label="Índice alfabético"
          className="flex flex-wrap gap-2 md:gap-3 border-y border-hairline py-6 mb-16 md:mb-20"
        >
          {alfabeto.map((letra) => {
            const ativa = letrasComTermos.has(letra);
            return ativa ? (
              <a
                key={letra}
                href={`#letra-${letra}`}
                className="font-mono text-label text-olive tracking-[0.15em] uppercase w-8 h-8 flex items-center justify-center border border-hairline hover:border-terracotta hover:text-terracotta transition-colors"
              >
                {letra}
              </a>
            ) : (
              <span
                key={letra}
                aria-hidden="true"
                className="font-mono text-label text-sage/50 tracking-[0.15em] uppercase w-8 h-8 flex items-center justify-center border border-hairline/50"
              >
                {letra}
              </span>
            );
          })}
        </nav>

        <div className="flex flex-col gap-16 md:gap-20">
          {Object.entries(termosPorLetra).map(([letra, termos]) => (
            <section key={letra} id={`letra-${letra}`} className="scroll-mt-32">
              <div className="flex items-baseline gap-6 mb-10">
                <h2 className="font-display text-terracotta text-[56px] md:text-[72px] leading-none">
                  {letra}
                </h2>
                <span className="flex-1 h-px bg-hairline" aria-hidden="true" />
                <span className="font-mono text-label text-sage tracking-[0.25em] uppercase">
                  {termos.length} {termos.length === 1 ? 'termo' : 'termos'}
                </span>
              </div>

              <dl className="flex flex-col gap-10 border-t border-hairline pt-10">
                {termos.map((t) => (
                  <div key={t.termo} className="flex flex-col gap-3">
                    <dt className="font-display text-olive text-[24px] md:text-[28px] leading-tight">
                      {t.termo}
                    </dt>
                    <dd className="font-body text-body-lg text-ink-muted leading-[1.6]">
                      {t.definicao}
                    </dd>
                    {t.exemplo ? (
                      <p className="font-body text-body-md text-sage italic max-w-2xl">
                        {t.exemplo}
                      </p>
                    ) : null}
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t border-hairline">
          <p className="font-body text-body-md text-ink-muted">
            Sentiu falta de algum termo? Me manda uma mensagem no{' '}
            <a
              href="https://wa.me/5585999873435"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label uppercase tracking-[0.2em] text-terracotta underline underline-offset-4 decoration-terracotta hover:text-olive hover:decoration-olive transition-colors"
            >
              WhatsApp
            </a>{' '}
            que a gente adiciona por aqui.
          </p>
        </footer>
      </div>
    </article>
  );
}
