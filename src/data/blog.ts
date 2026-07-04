import hero2 from '@/assets/images/hero-2.webp';

export type Bloco =
  | { tipo: 'paragrafo'; texto: string }
  | { tipo: 'h2'; texto: string }
  | { tipo: 'h3'; texto: string }
  | { tipo: 'lista'; itens: string[] }
  | { tipo: 'citacao'; texto: string; autor?: string }
  | { tipo: 'imagem'; src: string; alt: string; legenda?: string };

export interface Post {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  autor: string;
  imagem: string;
  imagemAlt: string;
  tags: string[];
  tempoLeitura: string;
  conteudo: Bloco[];
}

export const posts: Post[] = [
  {
    slug: 'acessibilidade-universal-nao-e-detalhe',
    titulo: 'Acessibilidade universal não é detalhe — é ponto de partida',
    resumo:
      'Rampas, portas mais largas e piso tátil não são cortesias. São o mínimo para que qualquer pessoa consiga entrar, circular e viver bem no espaço.',
    data: '2026-06-30',
    autor: 'Carolina Elayza',
    imagem: hero2,
    imagemAlt: 'Ambiente residencial com iluminação natural, projeto por Carolina Elayza',
    tags: ['Acessibilidade', 'Projeto'],
    tempoLeitura: '5 min de leitura',
    conteudo: [
      {
        tipo: 'paragrafo',
        texto:
          'A gente ainda escuta muito por aí que acessibilidade é "um adicional" no projeto — algo que a família pensa quando alguém da casa passa por uma limitação. Só que essa é a forma mais cara e mais dolorida de encarar o assunto. Quando a acessibilidade entra no traço inicial, ela deixa de ser reforma emergencial e vira o próprio jeito de morar bem.',
      },
      { tipo: 'h2', texto: 'O que muda quando pensamos primeiro na pessoa' },
      {
        tipo: 'paragrafo',
        texto:
          'Projeto acessível é projeto pensado para o corpo humano em qualquer fase da vida. Uma criança pequena, uma pessoa cadeirante, uma avó com a mobilidade reduzida, uma mãe carregando bebê e compras nos braços — todas elas ganham quando o espaço foi desenhado com generosidade de circulação, transição sem degraus e alturas confortáveis.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Também é uma questão de dignidade. Ninguém deveria precisar da ajuda de outra pessoa para entrar em casa, usar o próprio banheiro ou chegar até a janela. Quando o espaço acolhe, ele devolve autonomia.',
      },
      { tipo: 'h2', texto: 'Erros comuns em projetos de adequação' },
      { tipo: 'h3', texto: 'Rampa não é rampa' },
      {
        tipo: 'paragrafo',
        texto:
          'A NBR 9050 exige inclinação máxima de 8,33% para rampas acessíveis, com corrimãos duplos, patamares de descanso e piso antiderrapante. Muita rampa por aí é íngreme demais, sem corrimão e feita de material escorregadio — na prática, ela existe, mas não funciona. Vale mais uma rampa bem calculada do que três feitas às pressas.',
      },
      { tipo: 'h3', texto: 'Porta estreita continua sendo barreira' },
      {
        tipo: 'paragrafo',
        texto:
          'O vão livre mínimo para circulação em cadeira de rodas é de 80 cm. Portas de 70 cm — que ainda aparecem em muitas casas antigas — travam qualquer pessoa que precise entrar assistida. Trocar uma porta é barato perto do impacto que ela tem no dia a dia.',
      },
      {
        tipo: 'lista',
        itens: [
          'Corredores com pelo menos 1,20 m de largura, para dois fluxos.',
          'Interruptores entre 60 cm e 1,00 m do piso, alcance confortável para todos.',
          'Bancadas e pias com espaço livre embaixo para aproximação frontal.',
          'Sinalização visual e tátil em ambientes de uso comum.',
        ],
      },
      {
        tipo: 'citacao',
        texto:
          'Um espaço só é bonito de verdade quando cabe todo mundo. O resto é decoração.',
        autor: 'Carolina Elayza',
      },
      { tipo: 'h2', texto: 'Por onde começar' },
      {
        tipo: 'paragrafo',
        texto:
          'Se sua casa ou seu comércio já está pronto, o primeiro passo é um diagnóstico de acessibilidade. Ele mapeia os pontos críticos, o que é urgente e o que pode ser resolvido aos poucos. Se você ainda está no papel do projeto, melhor ainda: dá para desenhar um espaço universal desde o início, sem custo extra significativo. A diferença está na intenção, não no orçamento.',
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatarData(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
