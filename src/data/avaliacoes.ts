export interface Avaliacao {
  id: string;
  nome: string;
  local?: string;
  texto: string;
}

export const avaliacoes: Avaliacao[] = [
  {
    id: 'raquel',
    nome: 'Raquel Moreira',
    texto:
      'Profissional incrível. Desde o primeiro atendimento até a entrega final, tudo foi feito com muito cuidado e clareza. Trouxe soluções práticas, funcionais e deixou o ambiente exatamente como eu sonhava. Super recomendo para quem busca alguém comprometida, criativa e que realmente faz a diferença no projeto.',
  },
  {
    id: 'casa-raizes',
    nome: 'Cliente Casa Raízes',
    local: 'Jatobá no Siqueira',
    texto:
      'Estou passando para agradecer por todo o seu empenho em fazer uma parte do meu sonho se tornar real. Muito obrigada pela sua paciência, por entender os meus gostos e cuidar de cada detalhe da minha casa com muito amor. Hoje, com o projeto em mãos, me sinto mais entusiasmada e confiante de que logo estarei morando na casa em que sempre sonhei.',
  },
  {
    id: 'cris',
    nome: 'Cris Santos',
    texto: 'Atendimento excelente.',
  },
];
