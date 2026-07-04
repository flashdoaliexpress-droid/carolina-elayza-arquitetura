import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPost, formatarData, type Bloco } from '@/data/blog';

function BlocoRenderer({ bloco }: { bloco: Bloco }) {
  switch (bloco.tipo) {
    case 'paragrafo':
      return (
        <p className="font-body text-body-lg text-ink-muted leading-[1.7]">{bloco.texto}</p>
      );
    case 'h2':
      return (
        <h2 className="font-display text-olive text-[32px] md:text-[40px] leading-tight text-balance mt-6">
          {bloco.texto}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="font-display text-olive text-[24px] md:text-[28px] leading-tight text-balance mt-4">
          {bloco.texto}
        </h3>
      );
    case 'lista':
      return (
        <ul className="flex flex-col gap-3">
          {bloco.itens.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-body-lg text-ink-muted">
              <span
                aria-hidden="true"
                className="mt-[14px] w-2 h-px bg-terracotta shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'citacao':
      return (
        <blockquote className="pl-6 border-l-2 border-terracotta my-4">
          <p className="font-display text-olive text-[22px] md:text-[26px] leading-snug italic text-balance">
            "{bloco.texto}"
          </p>
          {bloco.autor ? (
            <cite className="mt-3 block font-mono text-label text-sage tracking-[0.25em] uppercase not-italic">
              — {bloco.autor}
            </cite>
          ) : null}
        </blockquote>
      );
    case 'imagem':
      return (
        <figure className="flex flex-col gap-3 my-4">
          <img src={bloco.src} alt={bloco.alt} className="w-full h-auto" loading="lazy" />
          {bloco.legenda ? (
            <figcaption className="font-body text-caption italic text-ink-muted">
              {bloco.legenda}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}

export function BlogPost() {
  const { slug = '' } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="w-full bg-cream pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="max-w-[900px] mx-auto px-m-mobile md:px-m-desktop">
        <header className="flex flex-col gap-8 mb-16 md:mb-20">
          <div className="flex items-center gap-4 flex-wrap font-mono text-label text-sage tracking-[0.25em] uppercase">
            <Link
              to="/blog"
              className="text-olive hover:text-terracotta transition-colors"
            >
              ← Blog
            </Link>
            <span aria-hidden="true" className="w-1 h-1 bg-terracotta rounded-full" />
            <span>{formatarData(post.data)}</span>
            <span aria-hidden="true" className="w-1 h-1 bg-terracotta rounded-full" />
            <span>{post.tempoLeitura}</span>
          </div>

          <h1 className="font-display text-olive text-[40px] md:text-[56px] leading-[1.05] tracking-tight text-balance">
            {post.titulo}
          </h1>

          <p className="font-body text-body-lg text-ink-muted italic max-w-2xl">
            {post.resumo}
          </p>

          <div className="flex items-center gap-4 border-t border-hairline pt-6 font-mono text-label text-sage tracking-[0.25em] uppercase">
            <span>Por {post.autor}</span>
            {post.tags.length > 0 ? (
              <>
                <span aria-hidden="true" className="w-1 h-1 bg-terracotta rounded-full" />
                <span className="text-terracotta">{post.tags.join(' · ')}</span>
              </>
            ) : null}
          </div>
        </header>

        <figure className="mb-16 md:mb-20">
          <img
            src={post.imagem}
            alt={post.imagemAlt}
            className="w-full h-auto object-cover"
          />
        </figure>

        <div className="flex flex-col gap-6 md:gap-8">
          {post.conteudo.map((bloco, i) => (
            <BlocoRenderer key={i} bloco={bloco} />
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t border-hairline flex justify-between items-center">
          <Link
            to="/blog"
            className="font-mono text-label text-olive uppercase tracking-[0.3em] hover:text-terracotta transition-colors"
          >
            ← Voltar para o Blog
          </Link>
          <Link
            to="/dicionario"
            className="font-mono text-label text-sage uppercase tracking-[0.3em] hover:text-terracotta transition-colors"
          >
            Dicionário →
          </Link>
        </footer>
      </div>
    </article>
  );
}
