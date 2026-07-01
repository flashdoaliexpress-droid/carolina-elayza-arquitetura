import { Feather } from '@/components/ui/Feather';
import portrait from '@/assets/images/IMAGEM CTA FINAL.png';

export function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="relative w-full bg-cream flex flex-col md:flex-row min-h-[760px] border-t border-hairline overflow-hidden"
    >
      <div className="w-full md:w-5/12 h-[480px] md:h-auto md:min-h-[760px] relative overflow-hidden group border-b md:border-b-0 md:border-r border-hairline">
        <img
          src={portrait}
          alt="Retrato de Carolina Elayza sorrindo em ambiente natural iluminado, próximo a uma janela."
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        <div className="absolute bottom-8 left-8 flex flex-col gap-2">
          <span className="w-6 h-px bg-cream/80" aria-hidden="true" />
          <span className="font-mono text-label text-cream tracking-[0.3em] uppercase">
            Carolina Elayza · CAU A303147-0
          </span>
        </div>
      </div>

      <div className="w-full md:w-7/12 relative flex flex-col justify-center px-m-mobile md:px-16 lg:pr-m-desktop py-20 md:py-32">
        <div className="max-w-2xl w-full flex flex-col items-start">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Vamos conversar
            </span>
          </div>

          <h2
            id="contato-heading"
            className="font-display text-olive text-[40px] md:text-[64px] leading-[1.05] tracking-tight text-balance mb-8 max-w-xl"
          >
            Sua casa merece um lar, vamos{' '}
            <em className="italic">construir</em> o seu?
          </h2>

          <p className="font-body text-body-lg text-ink-muted mb-12 max-w-lg">
            Cada projeto começa com uma escuta atenta. Me conte um pouco sobre os seus planos, o
            espaço que você quer transformar e como você imagina o seu dia a dia nele. Vamos
            juntos entender as possibilidades para o seu investimento.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf57sXuZeao_oP5nkvTeEqFdAiarJLjRyPbXjBj-MEMSqeN1g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-olive font-mono text-label uppercase tracking-[0.3em] text-olive transition-colors duration-150 hover:bg-olive hover:text-cream"
            >
              Solicitar orçamento
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="https://wa.me/5585999873435"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-label uppercase tracking-[0.3em] text-ink-muted underline underline-offset-4 decoration-sage transition-colors duration-150 hover:text-terracotta hover:decoration-terracotta"
            >
              WhatsApp direto
            </a>
          </div>

          <div className="mt-auto pt-10 border-t border-sage/60 w-full">
            <p className="font-mono text-label text-sage tracking-[0.25em] uppercase leading-loose">
              Resposta em 24h · Atendimento remoto ou presencial · Fortaleza / CE
            </p>
          </div>
        </div>

        <Feather
          className="absolute bottom-10 right-10 md:bottom-12 md:right-12 w-[110px] md:w-[160px] h-auto text-terracotta opacity-25 -rotate-6 pointer-events-none hidden sm:block"
        />
      </div>
    </section>
  );
}
