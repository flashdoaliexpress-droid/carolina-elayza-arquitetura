import { Link } from 'react-router-dom';
import { projetos } from '@/data/projetos';

const tileMeta: Record<string, { tag: string; subtitle: string }> = {
  quialteras: {
    tag: 'Barra do Ceará · Escola de música · Projeto acadêmico premiado',
    subtitle: 'escola de música na periferia',
  },
  'igreja-assembleia-de-deus-missao': {
    tag: 'Granja Portugal · Templo comunitário · 250 fiéis',
    subtitle: 'o primeiro projeto solo do escritório',
  },
  'casa-raizes': {
    tag: 'Jatobá no Siqueira · Residencial · 90m²',
    subtitle: 'um lar pronto para criar raízes',
  },
};

const order: string[] = ['quialteras', 'igreja-assembleia-de-deus-missao', 'casa-raizes'];

export function Projetos() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="relative w-full bg-cream overflow-hidden"
    >
      <header className="relative px-m-mobile md:px-m-desktop pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[720px]">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Projetos
            </span>
          </div>

          <h2
            id="projetos-heading"
            className="font-display text-olive text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-balance mb-6"
          >
            Obras que <em className="italic">contam</em> histórias
          </h2>

          <p className="font-body text-body-md text-sage max-w-md">
            Três projetos, três realidades: da Barra do Ceará à Granja Portugal, da escola premiada
            à casa recém-projetada em Jatobá no Siqueira.
          </p>
        </div>
      </header>

      <div className="w-full flex flex-col md:flex-row">
        {order.map((slug) => {
          const projeto = projetos.find((p) => p.slug === slug);
          if (!projeto) return null;
          const meta = tileMeta[slug];
          return (
            <Link
              key={slug}
              to={`/projetos/${slug}`}
              className="relative w-full md:w-1/3 h-[520px] md:h-[720px] block group overflow-hidden"
              aria-label={`Ver projeto ${projeto.titulo}`}
            >
              <img
                src={projeto.capa}
                alt={projeto.titulo}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(29,27,24,0.65) 0%, rgba(29,27,24,0.25) 40%, rgba(29,27,24,0) 65%)',
                }}
              />

              <span
                aria-hidden="true"
                className="absolute inset-4 md:inset-6 pointer-events-none border-2 border-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-cream">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3 opacity-85">
                  {meta.tag}
                </p>
                <h3 className="font-display text-[26px] md:text-[32px] leading-tight mb-1">
                  {projeto.titulo}
                </h3>
                <p className="font-body text-caption italic opacity-85">{meta.subtitle}</p>

                <div className="flex items-center gap-3 mt-6">
                  <span className="w-8 h-px bg-cream/60" aria-hidden="true" />
                  <span className="font-mono text-label uppercase tracking-[0.3em]">
                    Ver projeto →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
