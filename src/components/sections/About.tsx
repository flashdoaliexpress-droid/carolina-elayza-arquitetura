import { Pupa } from '@/components/ui/Pupa';
import { values } from '@/data/values';
import portrait from '@/assets/images/portrait.webp';

export function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-cream pt-32 md:pt-40 pb-24 md:pb-32 px-m-mobile md:px-m-desktop overflow-hidden"
    >
      <Pupa
        className="hidden md:block absolute top-32 right-0 h-[50%] w-auto max-w-none opacity-60 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-4 md:grid-cols-12 gap-gutter mt-16 md:mt-24">
        <div className="col-span-4 md:col-span-5 flex flex-col gap-4">
          <div className="relative w-full aspect-[4/5]">
            <img
              src={portrait}
              alt="Retrato de Carolina Elayza, arquiteta."
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <p className="font-body text-caption italic text-ink-muted text-center mt-2">
            Carolina Elayza, arquiteta · CAU A303147-0
          </p>
        </div>

        <div className="relative col-span-4 md:col-span-7 flex flex-col justify-center pt-8 md:pt-0 md:pl-8">
          <Pupa
            className="md:hidden absolute top-24 -right-5 h-[400px] w-auto max-w-none opacity-60 pointer-events-none z-0"
          />

          <span className="relative z-10 font-mono text-label text-terracotta tracking-[0.25em] mb-6 block uppercase">
            Quem eu sou
          </span>

          <h2 className="relative z-10 font-display text-olive text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-balance max-w-2xl mb-10">
            Arquitetura como <em className="italic">direito</em>, acolhimento como método
          </h2>

          <div className="font-body text-body-lg text-ink-muted space-y-6 max-w-xl mb-12">
            <p>
              Sou Carolina Elayza, arquiteta formada pela Universidade Federal e a primeira da
              minha família a chegar até lá. Foi nessa jornada que entendi meu propósito: levar
              arquitetura técnica e acessível para a periferia de Fortaleza, com a mesma seriedade
              dedicada aos projetos mais elaborados.
            </p>
            <p>
              Trabalho com reformas, projetos arquitetônicos, adequações de acessibilidade e
              consultorias. Cada projeto começa por uma escuta atenta e termina com um espaço
              pensado para a vida real de quem o habita, respeitando orçamento, contexto e a
              história de cada família.
            </p>
          </div>

          <blockquote className="pl-6 border-l-2 border-terracotta mb-16 max-w-lg">
            <p className="font-display text-[22px] md:text-[26px] leading-snug text-olive italic">
              "Espaços reais, para pessoas reais"
            </p>
          </blockquote>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-hairline pt-12">
            {values.map(({ id, title, description, icon: Icon }) => (
              <div key={id} className="flex flex-col gap-3">
                <Icon className="w-5 h-5 text-terracotta" strokeWidth={1.25} />
                <h3 className="font-mono text-label font-medium text-olive uppercase tracking-[0.2em]">
                  {title}
                </h3>
                <p className="font-body text-caption text-ink-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
