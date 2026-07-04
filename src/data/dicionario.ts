export interface Termo {
  termo: string;
  definicao: string;
  exemplo?: string;
}

export const termos: Termo[] = [
  {
    termo: 'Área de projeção',
    definicao:
      'Área do terreno ocupada pela projeção horizontal da edificação, como se o prédio fosse "desenhado" no chão visto de cima.',
    exemplo:
      'A área de projeção limita quanto do terreno pode ser construído em planta, por causa do coeficiente de aproveitamento.',
  },
  {
    termo: 'Área útil',
    definicao:
      'Soma das áreas internas dos ambientes efetivamente usados no dia a dia, sem contar paredes, áreas comuns e áreas técnicas.',
  },
  {
    termo: 'Boneca',
    definicao:
      'Pequeno pilar de alvenaria, isolado, geralmente em cantos de portas ou vãos. Serve de acabamento e apoio para o caixilho da esquadria.',
    exemplo:
      'Quando a parede não vai até a divisa, a boneca dá suporte à porta e arremata visualmente o vão.',
  },
  {
    termo: 'Cobogó',
    definicao:
      'Elemento vazado, geralmente de concreto ou cerâmica, que permite ventilação cruzada e passagem parcial de luz sem abrir mão da privacidade.',
    exemplo:
      'Cobogós são clássicos da arquitetura brasileira: resolvem iluminação, ventilação e desenho ao mesmo tempo.',
  },
  {
    termo: 'Empena cega',
    definicao:
      'Parede lateral externa de uma construção que não tem aberturas (janelas ou portas), geralmente na divisa do terreno.',
    exemplo:
      'A empena cega é comum em construções coladas na divisa e vira parede pintada quando o vizinho constrói ao lado.',
  },
  {
    termo: 'Insolação',
    definicao:
      'Quantidade, direção e intensidade da luz solar que incide sobre um ambiente ao longo do dia e das estações.',
    exemplo:
      'Estudar a insolação antes de projetar evita cômodos quentes demais no verão ou escuros demais no inverno.',
  },
  {
    termo: 'Pé-direito',
    definicao:
      'Altura útil de um ambiente, medida entre o piso acabado e o teto (forro ou laje visível).',
    exemplo:
      'Um pé-direito generoso deixa o ambiente mais arejado e favorece a sensação de conforto.',
  },
  {
    termo: 'Pé-esquerdo',
    definicao:
      'Altura bruta do ambiente, medida entre o piso e a face inferior da laje ou viga, antes de forros e acabamentos.',
    exemplo:
      'É o pé-esquerdo que a estrutura considera; o pé-direito final costuma ser menor por causa do forro.',
  },
  {
    termo: 'Piso tátil',
    definicao:
      'Piso com relevo, direcional (linhas paralelas) ou de alerta (bolinhas), usado para orientar pessoas com deficiência visual.',
    exemplo:
      'Piso tátil é obrigatório em rotas acessíveis de espaços públicos, mudanças de nível e antes de escadas ou rampas.',
  },
  {
    termo: 'Prancha',
    definicao:
      'Desenho técnico em escala apresentando plantas, cortes, fachadas ou detalhes. É a linguagem oficial que arquitetura fala com a obra.',
    exemplo:
      'Cada prancha traz um conjunto de informações — a planta baixa, o corte AA, a fachada — para orientar o pedreiro e o cliente.',
  },
  {
    termo: 'Rampa acessível',
    definicao:
      'Rampa com inclinação máxima de 8,33%, corrimãos duplos, patamares de descanso e piso antiderrapante, conforme a NBR 9050.',
    exemplo:
      'Rampa acessível não é só sobre inclinação: é o conjunto que garante autonomia com segurança.',
  },
  {
    termo: 'Recuo',
    definicao:
      'Distância mínima entre a edificação e as divisas do terreno (frente, fundo e laterais), definida pela lei municipal.',
    exemplo:
      'Respeitar recuos evita problemas de aprovação na prefeitura e garante iluminação e ventilação entre lotes.',
  },
];

export const termosOrdenados = [...termos].sort((a, b) =>
  a.termo.localeCompare(b.termo, 'pt-BR'),
);

const DIACRITICS = /[̀-ͯ]/g;

function normalizarPrimeiraLetra(termo: string): string {
  const primeira = termo.trim().normalize('NFD').replace(DIACRITICS, '')[0] ?? '';
  return primeira.toUpperCase();
}

export const termosPorLetra: Record<string, Termo[]> = termosOrdenados.reduce(
  (acc, t) => {
    const letra = normalizarPrimeiraLetra(t.termo);
    if (!acc[letra]) acc[letra] = [];
    acc[letra].push(t);
    return acc;
  },
  {} as Record<string, Termo[]>,
);

export const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
