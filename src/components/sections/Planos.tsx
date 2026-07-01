import casaRaizesCapa from '@/Projetos/Casa Raízes/Casa raizes Capa.png';
import igrejaCapa from '@/Projetos/Igreja/Igreja Capa.png';
import quialterasCapa from '@/Projetos/Quialteras/Quialteras Capa.png';

interface Bloco {
  id: string;
  tag: string;
  titulo: string;
  paragrafo: string;
  bullets: string[];
  imagem: string;
  imagemAlt: string;
  imgSide: 'left' | 'right';
}

const blocos: Bloco[] = [
  {
    id: 'essencial',
    tag: 'O primeiro passo',
    titulo: 'Essencial',
    paragrafo:
      'A base técnica segura para começar sua obra. Aqui você recebe orientação profissional qualificada, sem excesso de detalhes, com uma leitura clara de como a obra vai ficar. É a forma mais acessível de entrar no mundo do projeto arquitetônico com previsibilidade de orçamento.',
    bullets: [
      'Orientações iniciais e visão geral da obra',
      'Redução de surpresas e retrabalhos',
      'Ponto de partida honesto e transparente',
    ],
    imagem: casaRaizesCapa,
    imagemAlt: 'Capa do projeto Casa Raízes',
    imgSide: 'left',
  },
  {
    id: 'pleno',
    tag: 'Detalhamento sem complicação',
    titulo: 'Pleno',
    paragrafo:
      'Para quem quer mais clareza no processo e menos decisões técnicas no meio da obra. Além da orientação segura, o Pleno traz apoio visual e explicações que ajudam a compreender melhor cada escolha. Você conduz com tranquilidade e a Carol assume mais decisões técnicas por você.',
    bullets: [
      'Explicações visuais e apoio na tomada de decisão',
      'Menos ajustes durante a execução da obra',
      'Meio-termo entre autonomia e acompanhamento',
    ],
    imagem: igrejaCapa,
    imagemAlt: 'Capa do projeto Igreja Assembleia de Deus Missão',
    imgSide: 'right',
  },
  {
    id: 'premium',
    tag: 'Tudo o que você tem direito',
    titulo: 'Premium',
    paragrafo:
      'O caminho mais completo: máximo detalhamento técnico e visual, com acompanhamento nas visitas presenciais e online previstas. Escolha ideal para quem busca segurança, eficiência e previsibilidade em cada etapa, reduzindo modificações e garantindo economia ao longo de todo o processo.',
    bullets: [
      'Detalhamento técnico e visual completo',
      'Visitas de acompanhamento presenciais e online',
      'Máxima previsibilidade do primeiro traço à chave',
    ],
    imagem: quialterasCapa,
    imagemAlt: 'Capa do projeto Quiálteras',
    imgSide: 'left',
  },
];

export function Planos() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-heading"
      className="relative w-full bg-cream border-t border-hairline overflow-hidden py-24 md:py-32"
    >
      <header className="px-m-mobile md:px-m-desktop mb-20 md:mb-28">
        <div className="max-w-[720px]">
          <div className="flex items-center gap-6 mb-8">
            <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Três caminhos, um mesmo cuidado
            </span>
          </div>

          <h2
            id="planos-heading"
            className="font-display text-olive text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-balance mb-6"
          >
            Escolha o quanto quer ser <em className="italic">guiado</em>
          </h2>

          <p className="font-body text-body-md text-sage max-w-md">
            Do essencial ao completo, cada plano é uma forma de você entrar no projeto no ritmo
            que faz sentido para sua obra.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-24 md:gap-32">
        {blocos.map((b, i) => (
          <div
            key={b.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center px-m-mobile md:px-m-desktop"
          >
            <div
              className={`md:col-span-6 relative aspect-[4/3] md:aspect-[5/4] w-full ${
                b.imgSide === 'right' ? 'md:order-2' : ''
              }`}
            >
              <img
                src={b.imagem}
                alt={b.imagemAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div
              className={`md:col-span-6 flex flex-col ${
                b.imgSide === 'right' ? 'md:order-1 md:pr-8' : 'md:pl-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-terracotta tracking-[0.2em]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-label text-sage tracking-[0.3em] uppercase">
                  {b.tag}
                </span>
              </div>

              <h3 className="font-display text-olive text-[40px] md:text-[48px] leading-[1.05] tracking-tight mb-6">
                {b.titulo}
              </h3>

              <p className="font-body text-body-lg text-ink-muted max-w-lg mb-8">{b.paragrafo}</p>

              <ul className="flex flex-col gap-3 max-w-md">
                {b.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 font-body text-body-md text-olive"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 w-2 h-px bg-terracotta shrink-0"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[720px] mx-auto px-m-mobile md:px-0 mt-24 md:mt-32 text-center">
        <p className="font-body text-body-md text-ink-muted">
          Não sabe qual faz sentido para você?{' '}
          <a
            href="#contato"
            className="font-mono text-label uppercase tracking-[0.25em] text-terracotta underline underline-offset-4 decoration-terracotta hover:decoration-olive hover:text-olive transition-colors"
          >
            Fale com a Carol
          </a>
        </p>
      </div>
    </section>
  );
}
