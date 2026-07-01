import { services } from '@/data/services';

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full bg-olive py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-terracotta/40" />

      <div className="max-w-[1440px] mx-auto px-m-mobile md:px-m-desktop">
        <header className="mb-20 md:mb-28 max-w-3xl">
          <h2
            id="services-heading"
            className="font-display text-cream text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight text-balance mb-8"
          >
            Como posso te <em className="italic font-normal">ajudar</em>
          </h2>
          <p className="font-body text-body-lg text-cream/75 max-w-xl">
            Soluções pensadas para a vida real, da reforma à acessibilidade plena.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ id, index, title, description, icon: Icon }) => (
            <article
              key={id}
              className="group relative bg-cream p-8 md:p-10 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[3px] bg-terracotta"
              />

              <div className="flex items-start justify-between mb-10 md:mb-12">
                <span
                  aria-hidden="true"
                  className="font-display text-[56px] md:text-[64px] leading-none text-terracotta tracking-tight"
                >
                  {index}
                </span>
                <Icon
                  className="w-7 h-7 text-terracotta mt-4"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-display text-[26px] md:text-[28px] leading-tight text-terracotta mb-4 text-balance">
                {title}
              </h3>

              <p className="font-body text-body-md text-terracotta/80 mb-10 flex-grow">
                {description}
              </p>

              <a
                href="#"
                className="self-start font-mono text-label text-terracotta uppercase tracking-[0.2em] border-b border-terracotta pb-1 transition-colors duration-150 hover:text-olive hover:border-olive"
              >
                Saiba mais →
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-24 md:mt-32 flex flex-col items-center gap-5">
          <div className="h-px w-24 bg-terracotta" />
          <p className="font-mono text-label text-cream/65 tracking-[0.3em] uppercase text-center">
            Atendimento em Fortaleza e Região Metropolitana
          </p>
        </footer>
      </div>
    </section>
  );
}
