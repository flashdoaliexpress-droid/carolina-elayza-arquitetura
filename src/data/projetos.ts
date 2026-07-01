import casaRaizesCapa from '@/Projetos/Casa Raízes/Casa raizes Capa.png';
import igrejaCapa from '@/Projetos/Igreja/Igreja Capa.png';
import quialterasCapa from '@/Projetos/Quialteras/Quialteras Capa.png';

export type ProjetoSlug = 'casa-raizes' | 'igreja-assembleia-de-deus-missao' | 'quialteras';

export interface Projeto {
  slug: ProjetoSlug;
  titulo: string;
  bairro: string;
  cidade: string;
  ano: string;
  area: string;
  tipologia: string;
  status: string;
  premiado?: boolean;
  premiacaoTexto?: string;
  descricao: string[];
  descricaoSecundaria: string;
  capa: string;
  renders: string[];
  pranchas: string[];
}

function toOrdered(glob: Record<string, unknown>): string[] {
  return Object.entries(glob)
    .sort(([a], [b]) => {
      const na = parseInt(a.match(/Render (\d+)/)?.[1] ?? '0', 10);
      const nb = parseInt(b.match(/Render (\d+)/)?.[1] ?? '0', 10);
      return na - nb;
    })
    .map(([, v]) => (v as { default: string }).default ?? (v as string));
}

const casaRaizesGlob = import.meta.glob('/src/Projetos/Casa Raízes/Render *.jpeg', {
  eager: true,
});
const igrejaPngGlob = import.meta.glob('/src/Projetos/Igreja/Render *.png', { eager: true });
const igrejaJpegGlob = import.meta.glob('/src/Projetos/Igreja/Render *.jpeg', { eager: true });
const quialterasPngGlob = import.meta.glob('/src/Projetos/Quialteras/Render *.png', {
  eager: true,
});
const quialterasJpegGlob = import.meta.glob('/src/Projetos/Quialteras/Render *.jpeg', {
  eager: true,
});

const casaRaizesRenders = toOrdered(casaRaizesGlob);
const igrejaRenders = toOrdered({ ...igrejaPngGlob, ...igrejaJpegGlob });
const quialterasAllRenders = toOrdered({ ...quialterasPngGlob, ...quialterasJpegGlob });

// Quialteras: Render 19–23 são pranchas técnicas; o restante são renders visuais.
const quialterasPranchas = quialterasAllRenders.slice(18, 23);
const quialterasRenders = [
  ...quialterasAllRenders.slice(0, 18),
  ...quialterasAllRenders.slice(23),
];

export const projetos: Projeto[] = [
  {
    slug: 'casa-raizes',
    titulo: 'Casa Raízes',
    bairro: 'Jatobá no Siqueira',
    cidade: 'Fortaleza / CE',
    ano: '2024',
    area: '90 m²',
    tipologia: 'Residencial',
    status: 'Projeto concluído',
    descricao: [
      'O projeto residencial mais especial do escritório surgiu de uma casa em Jatobá no Siqueira que estava fechada havia um ano. A cliente chegou com várias ideias já pensadas, mas ainda sem uma forma de organizar os ambientes de maneira funcional e harmoniosa.',
      'Como em todos os trabalhos do escritório, a escuta atenta foi essencial. Compreender os gostos, rotinas e prioridades da cliente permitiu transformar limitações em oportunidades, criando um projeto que respeita suas raízes e traduz suas reais necessidades em um lar acolhedor e cheio de significado.',
      'Entre os principais desafios: o tamanho reduzido da casa, com apenas 5,0 m de largura por 18,0 m de profundidade; a ausência de espaços abertos e áreas permeáveis; ambientes pouco ventilados e mal iluminados; e a limitação de demolições estruturais, já que parte da casa possuía pavimento superior.',
      'O projeto foi pensado considerando todas essas restrições. Criamos um quintal, demolimos a escada antiga (inadequada e perigosa), ampliamos a garagem para que também pudesse ser usada como área de festas, e expandimos o pavimento superior com mais um quarto. Esse novo espaço ganhou um jardim que capta iluminação e ventilação, funcionando ao mesmo tempo como refúgio no quarto principal.',
    ],
    descricaoSecundaria:
      'A casa que antes era somente uma construção sem vida se transformou em um lar, pronto para criar raízes.',
    capa: casaRaizesCapa,
    renders: casaRaizesRenders,
    pranchas: [],
  },
  {
    slug: 'igreja-assembleia-de-deus-missao',
    titulo: 'Igreja Assembleia de Deus Missão',
    bairro: 'Granja Portugal',
    cidade: 'Fortaleza / CE',
    ano: '2022',
    area: 'Templo comunitário',
    tipologia: 'Institucional religioso',
    status: 'Projeto concluído',
    descricao: [
      'Este foi o primeiro projeto solo do escritório, entregue quando ainda não havia sequer sido pensada a ideia de um escritório. Foi aqui que tudo começou. Recém-formada, enfrentei novidades e desafios; o principal foi traduzir em arquitetura o sonho idealizado pela comunidade da Granja Portugal.',
      'As demandas eram muitas, mas o terreno de 15,78 m de largura por 17,00 m de comprimento era pequeno para o tipo de edifício. Era necessário ampliar a capacidade de fiéis, criar salas de estudos bíblicos, reorganizar a administração e a diretoria, e comportar um anexo de salão de festas. O sagrado precisava ser representado mesmo em um projeto contemporâneo, e o espaço deveria ser acolhedor e convidativo.',
      'Foram criadas jardineiras e arandelas para trazer atmosfera confortável. No centro da igreja, o claustro permite a entrada de iluminação natural e ventilação. Um módulo de serviços concentra escadas, banheiros e caixas d’água em um único espaço, aproveitando cada centímetro. A entrada coberta, as transparências nas janelas e o mezanino aumentaram a capacidade do templo de 100 para 250 pessoas. Com o anexo, que abriga salas de aula, convivência, administração e salão de festas, a capacidade total saltou para 400 pessoas.',
      'Na entrega, todas as demandas foram atendidas. Este projeto ensinou que, antes de desenhar qualquer linha, é necessário ouvir o cliente e conciliar desejo, necessidade e viabilidade. Mais que um edifício, é memória e marco: o início de uma caminhada que hoje se transforma em propósito.',
    ],
    descricaoSecundaria:
      'A inauguração perfeita para o escritório: o projeto que mostrou que arquitetura começa pela escuta.',
    capa: igrejaCapa,
    renders: igrejaRenders,
    pranchas: [],
  },
  {
    slug: 'quialteras',
    titulo: 'Quiálteras',
    bairro: 'Barra do Ceará',
    cidade: 'Fortaleza / CE',
    ano: 'TCC · UFC',
    area: '80 alunos (ampliável até 3×)',
    tipologia: 'Escola de música · Educacional',
    status: 'Projeto não construído',
    premiado: true,
    premiacaoTexto: 'Projeto acadêmico premiado · não construído',
    descricao: [
      'O nome Quiálteras vem da música e significa um grupo de notas que não obedecem à divisão normal do compasso. Esse conceito inspirou o projeto: um edifício educacional que permitisse a crianças e adolescentes da Barra do Ceará ter uma ocupação durante o dia, servisse de apoio às famílias e, como consequência, os afastasse da violência urbana tão presente na periferia.',
      'A escola de música adota uma arquitetura regional contemporânea, com tijolos cerâmicos, cobogós, estruturas metálicas nos pátios e coberturas. Comporta inicialmente 80 alunos, com capacidade de ser ampliada até três vezes, acompanhando a demanda da comunidade.',
      'A escola se integra à cidade pelo auditório, que permite apresentações externas. As escadarias da praça viram auditórios ao ar livre para shows, apresentações de quadrilha junina, natal e outros eventos culturais. Todos os ambientes, internos e externos, foram projetados com acessibilidade: rampas de acesso, piso tátil e contraste de materiais garantem inclusão e autonomia a todos os usuários.',
    ],
    descricaoSecundaria:
      'Quiálteras é um manifesto arquitetônico contra uma das maiores dores da periferia (a violência) e a esperança de que, com cultura, é possível crescer.',
    capa: quialterasCapa,
    renders: quialterasRenders,
    pranchas: quialterasPranchas,
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}

export function getProjetoIndex(slug: string): number {
  return projetos.findIndex((p) => p.slug === slug);
}
