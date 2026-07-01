import metodoCobogo from '@/assets/images/Sessão Complementar.png';

export function Metodo() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-heading"
      className="relative w-full bg-cream flex flex-col md:flex-row min-h-[820px] overflow-hidden border-t border-hairline"
    >
      <div className="w-full md:w-1/2 relative px-m-mobile md:pl-m-desktop md:pr-16 lg:pr-24 py-24 md:py-32 flex flex-col">
        <div className="flex-grow flex flex-col justify-center max-w-xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-terracotta" aria-hidden="true" />
            <span className="font-mono text-label text-olive tracking-[0.3em] uppercase">
              Um jeito próprio de projetar
            </span>
          </div>

          <h2
            id="metodo-heading"
            className="font-display text-olive text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-balance mb-10"
          >
            Projeto de arquitetura é para quem <em className="italic">sonha</em>
          </h2>

          <div className="font-body text-body-lg text-ink-muted space-y-6 max-w-lg mb-12">
            <p>
              Por muito tempo, arquitetura foi tratada como serviço só para quem tem sobra no
              orçamento. Aqui o ponto de partida é outro: cada família, cada comércio de bairro,
              cada instituição merece um espaço pensado com técnica e cuidado real.
            </p>
            <p>
              Nasci na periferia e sei o valor de cada centímetro e de cada real investido. Por
              isso projeto ouvindo antes de desenhar, respeitando o orçamento que existe e
              mostrando o caminho seguro até a obra pronta.
            </p>
          </div>

          <p className="font-mono text-label text-sage tracking-[0.25em] uppercase mt-auto">
            Escuta primeiro · Técnica sempre · Espaço para caber a sua vida
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[420px] md:h-auto md:min-h-[820px] relative">
        <img
          src={metodoCobogo}
          alt="Detalhe arquitetônico: almofada terracota sobre bancada de concreto, iluminada por luz filtrada por parede de cobogó."
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
