import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { posts, formatarData } from '@/data/blog';

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="w-full bg-cream pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-m-mobile md:px-m-desktop">
        <header className="max-w-3xl mb-20 md:mb-28">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Blog
            </span>
          </div>

          <h1 className="font-display text-olive text-[44px] md:text-[64px] leading-[1.05] tracking-tight text-balance mb-8">
            Ideias e <em className="italic">reflexões</em> sobre morar bem
          </h1>

          <p className="font-body text-body-lg text-ink-muted max-w-xl">
            Escritos curtos sobre arquitetura acessível, projetos em contextos reais e o cotidiano
            de quem transforma casas em lares.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="font-body text-body-md text-ink-muted">Em breve novos textos por aqui.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col gap-6 border-t border-hairline pt-8"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={post.imagem}
                    alt={post.imagemAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-center gap-4 font-mono text-label text-sage tracking-[0.25em] uppercase">
                  <span>{formatarData(post.data)}</span>
                  {post.tags[0] ? (
                    <>
                      <span aria-hidden="true" className="w-1 h-1 bg-terracotta rounded-full" />
                      <span className="text-terracotta">{post.tags[0]}</span>
                    </>
                  ) : null}
                </div>

                <h2 className="font-display text-[26px] md:text-[30px] leading-tight text-olive text-balance group-hover:text-terracotta transition-colors">
                  {post.titulo}
                </h2>

                <p className="font-body text-body-md text-ink-muted">{post.resumo}</p>

                <span className="mt-2 font-mono text-label text-terracotta uppercase tracking-[0.25em]">
                  Ler artigo →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
