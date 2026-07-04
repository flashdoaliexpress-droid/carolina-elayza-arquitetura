import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { HorizontalGallery } from '@/components/ui/HorizontalGallery';
import { getProjeto, getProjetoIndex, projetos } from '@/data/projetos';

export function Projeto() {
  const { slug = '' } = useParams();
  const projeto = getProjeto(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!projeto) {
    return <Navigate to="/" replace />;
  }

  const idx = getProjetoIndex(projeto.slug);
  const prev = idx > 0 ? projetos[idx - 1] : null;
  const next = idx < projetos.length - 1 ? projetos[idx + 1] : null;

  return (
    <article className="w-full bg-cream pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-m-mobile md:px-m-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5 flex flex-col">
            <div className="md:sticky md:top-32 flex flex-col gap-10">
              {projeto.premiado ? (
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
                  <span className="font-mono text-label text-terracotta tracking-[0.3em] uppercase">
                    {projeto.premiacaoTexto}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
                  <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
                    Projeto
                  </span>
                </div>
              )}

              <h1 className="font-display text-olive text-[44px] md:text-[64px] leading-[1.05] tracking-tight text-balance">
                {projeto.titulo}
              </h1>

              <p className="font-mono text-label text-sage tracking-[0.25em] uppercase leading-loose">
                {projeto.status} · {projeto.bairro} · {projeto.cidade}
              </p>

              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8">
                {[
                  { label: 'Localização', value: `${projeto.bairro}, ${projeto.cidade}` },
                  { label: 'Ano', value: projeto.ano },
                  { label: 'Área', value: projeto.area },
                  { label: 'Tipologia', value: projeto.tipologia },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <dt className="font-mono text-label text-sage tracking-[0.25em] uppercase">
                      {item.label}
                    </dt>
                    <dd className="font-body text-body-md text-olive">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="font-body text-body-lg text-ink-muted space-y-6 border-t border-hairline pt-8">
                {projeto.descricao.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <p className="font-display text-olive text-[22px] md:text-[26px] leading-snug italic text-balance border-t border-hairline pt-8">
                {projeto.descricaoSecundaria}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-16 md:gap-20">
            <figure className="w-full">
              <img
                src={projeto.capa}
                alt={`Capa do projeto ${projeto.titulo}`}
                className="w-full h-auto object-cover"
              />
            </figure>

            {projeto.pranchas.length > 0 ? (
              <HorizontalGallery
                label="Pranchas técnicas"
                images={projeto.pranchas}
                alt={(i) => `${projeto.titulo}, prancha ${i + 1}`}
              />
            ) : null}

            {projeto.renders.length > 0 ? (
              <HorizontalGallery
                label="Renders"
                images={projeto.renders}
                alt={(i) => `${projeto.titulo}, render ${i + 1}`}
              />
            ) : null}

            {projeto.videoTour ? (
              <figure className="flex flex-col gap-4">
                <figcaption className="font-mono text-label text-sage tracking-[0.3em] uppercase">
                  Vídeo tour
                </figcaption>
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-auto bg-ink"
                  src={projeto.videoTour}
                >
                  Seu navegador não suporta reprodução de vídeo.
                </video>
                {projeto.videoTourLegenda ? (
                  <p className="font-body text-caption italic text-ink-muted">
                    {projeto.videoTourLegenda}
                  </p>
                ) : null}
              </figure>
            ) : null}
          </div>
        </div>

        <nav
          aria-label="Navegar entre projetos"
          className="border-t border-hairline mt-24 md:mt-32 pt-12 md:pt-16"
        >
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {prev ? (
              <Link to={`/projetos/${prev.slug}`} className="group flex flex-col gap-2 text-left">
                <span className="font-mono text-label text-sage tracking-[0.3em] uppercase">
                  ← Projeto anterior
                </span>
                <span className="font-display text-[26px] md:text-[32px] text-olive group-hover:text-terracotta transition-colors">
                  {prev.titulo}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}

            {next ? (
              <Link
                to={`/projetos/${next.slug}`}
                className="group flex flex-col gap-2 text-right md:items-end"
              >
                <span className="font-mono text-label text-sage tracking-[0.3em] uppercase">
                  Próximo projeto →
                </span>
                <span className="font-display text-[26px] md:text-[32px] text-olive group-hover:text-terracotta transition-colors">
                  {next.titulo}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
