import hero2 from '@/assets/images/hero-2.webp';
import capaPeriferia from '@/Blog/capa-arquitetura-periferia.jpeg';
import capaSimplificacao from '@/Blog/capa-simplificacao-projetos.jpeg';
import capaDicionario from '@/Blog/capa-dicionario-abre-portas.jpeg';
import capaAcessibilidade from '@/Blog/capa-acessibilidade-salva-vidas.jpeg';
import capaCasaFresca from '@/Blog/capa-casa-fresca-fortaleza.jpeg';
import inlineCasaDemolida from '@/Blog/inline-casa-demolida.jpeg';
import inlineElementosAcessiveis from '@/Blog/inline-elementos-acessiveis.jpeg';

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
    slug: 'casa-fresca-em-fortaleza-sem-falir-na-conta-de-energia',
    titulo: 'Como ter uma casa fresca em Fortaleza sem falir com a conta de energia?',
    resumo:
      'Três estratégias de arquitetura bioclimática, usadas há gerações nas casas do interior, para deixar sua casa mais fresca e sua conta de energia mais leve.',
    data: '2026-07-14',
    autor: 'Carolina Elayza',
    imagem: capaCasaFresca,
    imagemAlt: 'Desenho autoral representando ventilação e sombra em uma casa em Fortaleza',
    tags: ['Conforto térmico', 'Bioclimática'],
    tempoLeitura: '7 min de leitura',
    conteudo: [
      {
        tipo: 'paragrafo',
        texto:
          'Sobreviver em uma cidade em que temos um sol para cada morador é um grande desafio. A arquitetura tem o poder de amenizar muitos desconfortos térmicos e diminuir a sua conta de energia. Com técnicas simples, o calor escaldante se transforma em ambiente fresco.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O calor e a luz da terra não podemos evitar, mas dentro dos imóveis é possível resolver isso sem ideias mirabolantes.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Como arquiteta, estudei uma arquitetura chamada bioclimática — uma arquitetura adaptada para diferentes climas, seja o calorão de Fortaleza ou o frio da Antártida. Existem técnicas para manter o conforto em situações extremas, e, com a atual situação do mundo — aquecimento global, desmatamento desenfreado, poluição, "desastres ambientais" que na verdade são causados pela ação humana —, esse tipo de arquitetura precisa ser melhor explorado.',
      },
      {
        tipo: 'paragrafo',
        texto: 'Mas o que isso tem a ver com a minha conta de energia?',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Simples: quanto mais desconfortável o espaço, mais ele vai depender de energia elétrica. Seja um ventilador, um climatizador, um ar-condicionado ou uma lâmpada acesa para iluminar ambientes escuros — quando você coloca no papel o gasto periódico mais o valor desses equipamentos, o bolso chora.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'A arquitetura adaptada ao clima é o verdadeiro pulo do gato, pois, em Fortaleza, existem várias estratégias para se construir com conforto. O arquiteto Armando de Holanda escreveu um excelente livro chamado "Roteiro para Construir no Nordeste", que fala exatamente sobre isso: quando aplicamos certas ideias às nossas construções, temos um verdadeiro oásis. Ele cita nove pontos, mas eu simplifico em três: criar sombras, aproveitar a ventilação natural e usar o efeito chaminé.',
      },
      {
        tipo: 'paragrafo',
        texto: 'Podemos observar as casas antigas do interior — elas fazem exatamente isso.',
      },
      { tipo: 'h3', texto: 'Criam sombras' },
      {
        tipo: 'paragrafo',
        texto:
          'Essas casas possuem os famosos alpendres, espaços cobertos por telhado na frente da casa. Os alpendres protegem as paredes do sol, e essas paredes não esquentam tanto quanto as que ficam expostas — isso significa que a sua casa para de virar um forno. E a diferença é gritante: a temperatura pode cair até 3 graus. Imagine, num dia quente em que lá fora está 32° e dentro de casa 29° — é uma diferença gigante. Mas o sombreamento com alpendre só funciona na posição e no tamanho certos: se você colocar um alpendre do lado errado, ele não resolve o seu problema.',
      },
      { tipo: 'h3', texto: 'Aproveitam a ventilação natural' },
      {
        tipo: 'paragrafo',
        texto:
          'Fortaleza, por ser uma cidade próxima ao mar, tem muito vento — e não é um vento quente, é a brisa do mar, fresca. Perfeita para se ter dentro de casa. Para aproveitar essa ventilação, precisamos de grandes aberturas de entrada — portas, janelas, elementos vazados como os cobogós. Mas atenção: a ventilação só funciona quando o ar circula dentro do espaço, então é preciso ter aberturas de saída dos ventos. Elas podem — e é até melhor que sejam — menores que as de entrada, pois isso cria uma pressão, como em uma seringa, que dá velocidade ao vento e refresca mais. Mas só funciona se você souber de onde vem o vento: se fizer ao contrário, a sua casa vira uma airfryer.',
      },
      { tipo: 'h3', texto: 'Usam o efeito chaminé' },
      {
        tipo: 'paragrafo',
        texto:
          'Não tem nada a ver com o Natal norte-americano — e, diferente de lá, onde usam lareiras, aqui usamos essa saída quando o vento está fraco, daqueles dias em que a roupa quase não seca no varal, quanto mais mandar embora o calor. Funciona assim: quando estamos em um ambiente, produzimos calor. Esse calor se junta à temperatura externa, à temperatura de televisores, celulares, computadores, luzes acesas e até dos animais, e fica preso no ambiente. Quando deixamos o telhado ventilado — só com a telha de barro, janelas altas, ou abrimos um jardim no meio da casa com um vão para cima —, esse calor acumulado sobe e dá lugar a um ar mais fresco. Isso funciona porque esse ar mais leve sai como uma fumaça e puxa, como uma seringa, um ar novo e mais fresco. Diferente da seringa, porém, essa renovação é constante — ainda assim depende da ventilação: por menor que seja, se as janelas não captam o vento, a chaminé não funciona.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Usando essas estratégias, às vezes isoladas, às vezes juntas, você garante uma independência dos equipamentos de conforto, porque a sua casa passa a trabalhar para você, te deixando confortável e, como consequência, gerando economia a longo prazo — porque, em vez de chegar em casa e ligar o ar-condicionado, você vai abrir as janelas. Sua casa, mais econômica.',
      },
      {
        tipo: 'citacao',
        texto:
          'Estas são algumas das várias formas que o meu escritório usa para garantir o conforto nos projetos — provando que o arquiteto trabalha além da estética, nos mínimos detalhes que fazem grande diferença depois, gerando conforto, estética e economia a longo prazo.',
        autor: 'Carolina Elayza',
      },
    ],
  },
  {
    slug: 'por-que-a-acessibilidade-pode-salvar-vidas',
    titulo: 'Por que a acessibilidade pode salvar vidas?',
    resumo:
      'Acessibilidade não é sobre deficiência permanente — é sobre prevenção, autonomia e valorização do imóvel em qualquer fase da vida. Veja os elementos que tornam um espaço mais seguro.',
    data: '2026-07-11',
    autor: 'Carolina Elayza',
    imagem: capaAcessibilidade,
    imagemAlt: 'Ambiente projetado com elementos de acessibilidade por Carolina Elayza',
    tags: ['Acessibilidade', 'Segurança'],
    tempoLeitura: '5 min de leitura',
    conteudo: [
      {
        tipo: 'paragrafo',
        texto:
          'A acessibilidade não é apenas uma palavra bonita. Ela é a forma de evitar acidentes e facilitar o socorro em situações de emergência.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Muitas pessoas dizem: "meu imóvel não precisa disso". Mas o tempo passa e surgem situações inesperadas: uma gravidez, um acidente ou a necessidade de atendimento de socorristas. Sem espaços adaptados, tudo se torna mais difícil.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'A verdade é que nunca sabemos quando vamos precisar de ambientes inclusivos em nossos imóveis. Quando o projeto é pensado para minimizar riscos e atender a todos igualmente, as barreiras são reduzidas.',
      },
      {
        tipo: 'paragrafo',
        texto: 'Não é só para pessoas com deficiência permanente. Ela atende diferentes fases da vida:',
      },
      {
        tipo: 'lista',
        itens: [
          'Idosos, gestantes, lactantes, pessoas com mobilidade temporária (pé quebrado, pós-cirurgia, carregando peso).',
          'Situações de emergência, em que portas largas e sinalização clara podem salvar vidas.',
        ],
      },
      { tipo: 'h3', texto: 'Projetar sem barreiras é prevenção' },
      {
        tipo: 'paragrafo',
        texto:
          'Com limitações físicas, idosos ou pessoas com deficiência são mais vulneráveis a acidentes. Ambientes adaptados ajudam a evitar quedas e acidentes domésticos. Além disso, pensar nessas situações extremas gera economia, já que evita reformas futuras.',
      },
      { tipo: 'h3', texto: 'Espaços inclusivos valorizam o imóvel' },
      {
        tipo: 'paragrafo',
        texto:
          'Além de prevenir acidentes e reduzir custos, eles aumentam o valor de venda ou aluguel, tornando o imóvel mais atrativo no mercado.',
      },
      { tipo: 'h2', texto: 'Quais elementos tornam um imóvel mais seguro e inclusivo?' },
      {
        tipo: 'imagem',
        src: inlineElementosAcessiveis,
        alt: 'Elementos que tornam um imóvel mais seguro e inclusivo',
      },
      {
        tipo: 'lista',
        itens: [
          'Banheiros com barras de apoio para evitar quedas.',
          'Portas largas que permitem a entrada de socorristas e a circulação de cadeiras de rodas.',
          'Espaços livres de degraus e rampas bem dimensionadas, que facilitam a circulação sem risco.',
          'Corrimãos em escadas e rampas, com modelos que evitam acidentes com crianças.',
          'Iluminação adequada e revestimentos com contraste de cor, que ajudam pessoas com visão reduzida a diferenciar piso e parede.',
        ],
      },
      { tipo: 'h3', texto: 'Já é lei no Brasil' },
      {
        tipo: 'paragrafo',
        texto:
          'A Lei Brasileira de Inclusão garante que espaços públicos e privados sejam pensados para atender pessoas com deficiência e mobilidade reduzida. A tendência é que essas exigências se ampliem cada vez mais, tornando ambientes acessíveis obrigatórios em diferentes áreas.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Acessibilidade não é luxo, nem moda passageira. É sobre dar autonomia a quem já a tem e oferecer liberdade a quem enfrenta limitações, sejam elas permanentes ou temporárias. É conforto, segurança e inclusão para todos. Essa é a verdadeira arquitetura humana.',
      },
      {
        tipo: 'citacao',
        texto:
          'Se você quer garantir que seu imóvel seja seguro, valorizado e pensado para todos, meu escritório desenvolve projetos inclusivos que unem técnica, prevenção e conforto. Entre em contato e descubra como podemos adaptar ou planejar seu espaço para ser livre de barreiras e preparado para o futuro.',
        autor: 'Carolina Elayza',
      },
    ],
  },
  {
    slug: 'arquitetura-sem-misterio-dicionario-que-abre-portas',
    titulo: 'Arquitetura sem mistério: o dicionário que abre portas',
    resumo:
      'Um vocabulário claro derruba o maior medo de quem constrói: o medo do desconhecido. Entenda por que compreender os termos técnicos é economia, autonomia e segurança.',
    data: '2026-07-08',
    autor: 'Carolina Elayza',
    imagem: capaDicionario,
    imagemAlt: 'Ilustração representando o dicionário de arquitetura de Carolina Elayza',
    tags: ['Dicionário', 'Autonomia'],
    tempoLeitura: '6 min de leitura',
    conteudo: [
      {
        tipo: 'paragrafo',
        texto:
          'A periferia vive com um medo constante: ter prejuízos na obra por não entender os termos técnicos da construção. Com o meu dicionário, o medo dá lugar à descoberta. São novas palavras, novos horizontes e a segurança de compreender o que os profissionais falam — e saber a importância de cada elemento construtivo.',
      },
      {
        tipo: 'paragrafo',
        texto: 'O desconhecido nos causa medo, e na construção o medo custa caro.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Existe uma cultura muito forte de que "quem não tem dinheiro não contrata arquiteto". Mas, como profissional, preciso revelar o segredo: a economia está no planejamento, não na ausência de um projeto. Para vencer esse medo, precisamos diminuir o tamanho dele — e conhecer os termos técnicos te aproxima desse universo.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O "clubinho fechado" da arquitetura começa a virar uma praça aberta, onde todos têm acesso. Muitas vezes o preço é uma barreira, mas você já parou para pensar que quem tem mais dinheiro gasta menos, proporcionalmente, pelo simples fato de projetar antes de construir?',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Infelizmente, não adianta apenas construir aos poucos na tentativa de economizar — isso quase sempre gera desperdício. O caminho é: entender a necessidade, economizar e planejar com um arquiteto.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Já parou para pensar em quantas soluções você não usou no seu imóvel pelo simples fato de não ter conhecimento técnico sobre elas?',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Esse é o poder da arquitetura: criatividade aplicada em um local completamente limitado. Em um caso real, uma família começa cheia de esperança e expectativa em construir o seu próprio lar. Comprou materiais de qualidade e contratou um pedreiro que parecia de confiança. Mas, sem informação, cada decisão era tomada sem a verdadeira noção do que significava — estavam completamente no escuro. O resultado: o pedreiro desperdiçava os recursos, inventava problemas inexistentes e ainda se fazia de herói, usando o famoso "jeitinho brasileiro". A casa que tinha recursos para ser ampla e completa se tornou muito menor do que o sonhado — e o profissional ainda se saiu como quem lutou muito e fez o melhor trabalho possível. Vinte anos depois, a construção precisou ser demolida, o que é inaceitável para um imóvel novo.',
      },
      {
        tipo: 'imagem',
        src: inlineCasaDemolida,
        alt: 'Construção demolida após vinte anos por falta de acompanhamento técnico',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O dicionário nasce justamente para evitar que esse tipo de história se repita. Ele é uma das ferramentas que, junto com o arquiteto, te auxiliam na sua construção.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Com o nosso dicionário você ganha autonomia — não da forma como os tutoriais de "faça você mesmo" pregam, mas passando a participar mais ativamente das decisões da sua construção. Compreendendo, por exemplo, que o cobogó não é só um belo elemento, mas uma solução de ventilação natural completamente funcional.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Construir não é apenas subir paredes — exige tempo, dedicação, conhecimento técnico e dinheiro. É o sonho das pessoas.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Quando esse conhecimento técnico chega às mãos de quem está construindo, o medo dá lugar à confiança, e as decisões tomadas são amparadas e discutidas de forma clara.',
      },
      {
        tipo: 'citacao',
        texto:
          'O dicionário é o primeiro passo para que a arquitetura deixe de ser um privilégio de alguns e se torne um direito: o direito de entender, planejar e transformar tijolos em um lar.',
        autor: 'Carolina Elayza',
      },
    ],
  },
  {
    slug: 'simplificacao-de-projetos-evita-desperdicio',
    titulo: 'O que é "Simplificação de Projetos" e como ela evita o desperdício na sua obra?',
    resumo:
      'Nem todo projeto precisa ser um pacote completo e caro para funcionar. Entenda como nasceram os planos de simplificação e por que eles tornam a arquitetura viável na periferia.',
    data: '2026-07-05',
    autor: 'Carolina Elayza',
    imagem: capaSimplificacao,
    imagemAlt: 'Representação dos planos de simplificação de projetos de Carolina Elayza',
    tags: ['Planos', 'Simplificação'],
    tempoLeitura: '4 min de leitura',
    conteudo: [
      {
        tipo: 'paragrafo',
        texto:
          'A arquitetura tradicional prega que o projeto precisa ser completamente detalhado — e eu até concordo. Mas, se reduzir os detalhes torna o valor mais acessível, então é hora de popularizar a arquitetura.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O grande vilão da construção no Brasil é a obra sem técnica profissional. Cerca de 80% das casas são feitas em autoconstrução. Claro que existem exceções, mas a regra é: quanto menos conhecimento técnico, mais desperdício de materiais e recursos.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'É uma ironia pensar que a maioria das pessoas faz isso na esperança de economizar, mas o resultado é exatamente o contrário. Por essa razão, lá atrás, decidi que me tornaria a arquiteta da periferia. No início, eu não tinha ideia de como resolver esse problema.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Fiz diversos orçamentos tradicionais, com pacotes completos, mas os valores estavam sempre acima do que os clientes podiam pagar. Eu sabia que o preço era justo, mas também sabia que não atendia às necessidades de quem mais precisava. Muitos profissionais pensariam: "o mercado não me valoriza". Mas o meu desejo de melhorar a vida das pessoas sempre foi mais forte.',
      },
      {
        tipo: 'paragrafo',
        texto: 'Pensei então: o que posso fazer para facilitar o acesso ao projeto, além de ser arquiteta?',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Com o tempo, percebi que a maioria dos meus clientes não estava interessada em detalhar cada parafuso. Eles queriam saber onde ficaria a sala, o quarto, a cozinha. Foi aí que tive um estalo: a ideia dos planos simplificados.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Comecei a refletir sobre qual é o mínimo necessário para tornar uma obra viável com a minha assistência técnica, e ainda reduzir o desperdício e o famoso "quebra-quebra" da autoconstrução.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'E assim nasceram os planos de simplificação de projetos: um modelo com valor justo, pensado para tornar a arquitetura viável na periferia.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Esses planos mantêm a qualidade dos meus serviços, mas tornam a arquitetura realmente acessível — diferente do que se fala apenas na teoria dos eventos acadêmicos. Aqui, a acessibilidade é prática e concreta.',
      },
      {
        tipo: 'citacao',
        texto:
          'Uma solução simples e viável, que não depende de ONGs ou governo. Você contrata sem burocracia e tem o conforto de saber que a arquitetura pode, sim, ser normal para todos.',
        autor: 'Carolina Elayza',
      },
    ],
  },
  {
    slug: 'por-que-fazer-arquitetura-para-a-periferia',
    titulo: 'Por que fazer arquitetura para a periferia?',
    resumo:
      'A periferia, local em que a maioria dos profissionais da construção civil não chega, é o lugar perfeito para se criar uma boa arquitetura, funcional, afetiva e econômica.',
    data: '2026-07-02',
    autor: 'Carolina Elayza',
    imagem: capaPeriferia,
    imagemAlt: 'Arquitetura pensada para a periferia de Fortaleza por Carolina Elayza',
    tags: ['Periferia', 'Economia'],
    tempoLeitura: '7 min de leitura',
    conteudo: [
      {
        tipo: 'paragrafo',
        texto:
          'Para muitos, o meu trabalho é o luxo, mas é uma retribuição de todo o investimento feito em mim durante os anos da minha educação.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Se pararmos para pensar, a maioria da população é quem movimenta a sociedade, movendo os comércios, empresas e instituições.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'E eu, Carolina, natural de Fortaleza, cresci em um dos bairros mais pobres de Fortaleza, o bairro Siqueira. Sei exatamente o peso e a dor da exclusão social, a dor de ter uma casa inadequada, a dor de sofrer na mão de profissionais desqualificados. Por muito tempo, pensei que isso fosse uma fraqueza, mas hoje eu vejo como a maior vantagem.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O problema é claro: faltam profissionais — arquitetos, engenheiros, entre outros — que invistam na periferia.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O mundo acadêmico, em sua maioria pessoas de classe alta, vive uma bolha, e quem fura essa bolha é completamente apagado.',
      },
      {
        tipo: 'paragrafo',
        texto: 'Estranho, mas comum: o chamado comportamento de manada.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Eu, inquieta, passei o curso inteiro na faculdade buscando incluir o nosso mundo na arquitetura. Quando finalmente o tema surgiu, percebi o problema: na faculdade, a periferia só tem direito a projeto se for de habitação de interesse social — o que é importante, óbvio, mas resumir a periferia a depender apenas de políticas públicas é demais.',
      },
      {
        tipo: 'paragrafo',
        texto: 'Quem mais constrói é a maioria da população, e a maioria é a periferia!',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Olhando o meu próprio bairro, e vivendo nele, a verdade é clara: nós construímos, e muito. Basta observar as ruas — quantas construções, quantos sonhos sendo construídos, em uma velocidade menor, mas constante.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O que me chama atenção não é ter muitas construções — isso é padrão normal —, mas o fato de essas construções consumirem, por completo, a parte mais cara da obra: os materiais construtivos e os pedreiros.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Além disso, há o quebra-quebra da autoconstrução — a quantidade de vezes que uma obra é modificada mostra um problema sério: nós, da periferia, estamos desperdiçando dinheiro, refazendo coisas que deram errado, só por falta de conhecimento técnico.',
      },
      {
        tipo: 'paragrafo',
        texto: 'É nesse ponto que o profissional de arquitetura — vulgo eu — entra em ação!',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Com o projeto de arquitetura, consigo prever problemas corriqueiros nas construções: falta de ventilação, calor excessivo, falta de iluminação, pisos escorregadios.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'Trago soluções funcionais para espaços compactos — cozinhas, banheiros, lavanderias, casas minúsculas, pequenos pontos comerciais.',
      },
      {
        tipo: 'paragrafo',
        texto:
          'O seu espaço, por menor que seja, merece a atenção de um arquiteto, pois a arquitetura não é um luxo, mas uma necessidade real, que transforma um grande problema em uma solução inteligente e econômica.',
      },
      {
        tipo: 'paragrafo',
        texto: 'A periferia é o local perfeito para se estar, viver e sonhar.',
      },
      { tipo: 'h2', texto: 'Como a arquitetura me ajuda a economizar na obra?' },
      {
        tipo: 'paragrafo',
        texto:
          'Muitos acreditam que contratar um arquiteto vai aumentar o preço da construção, mas o efeito é completamente o contrário. O planejamento proporcionado por um arquiteto permite economia não só na obra, mas no futuro, quando você já estiver usando o espaço.',
      },
      { tipo: 'h3', texto: 'O fim do quebra-quebra por erro' },
      {
        tipo: 'paragrafo',
        texto:
          'O primeiro efeito positivo que gera economia é você parar de levantar uma parede e, depois, descobrir que vai precisar de uma janela, ou decidir abrir uma porta porque o que você pediu para o pedreiro não ficou funcional. O projeto é, literalmente, uma simulação no papel ou no computador do que vai ser construído, e o arquiteto, junto com você, decide se aquilo vai ficar funcional e vai fazer sentido.',
      },
      { tipo: 'h3', texto: 'Diminuição do uso de equipamentos elétricos' },
      {
        tipo: 'paragrafo',
        texto:
          'Todo mundo sabe que o ventilador, o ar-condicionado e as luzes são os verdadeiros salvadores dos imóveis com problemas de ventilação e iluminação. Só que existe um preço: a conta de energia alta. A arquitetura preza muito pelo conforto, e em Fortaleza-CE, terra do sol, a ventilação e a iluminação natural são os melhores remédios. Mas é preciso atenção: de que lado vem o vento, de que lado vem o sol, e como conciliar os dois — a arquitetura pode te ajudar com isso.',
      },
      { tipo: 'h3', texto: 'Aproveitamento máximo de espaços compactos' },
      {
        tipo: 'paragrafo',
        texto:
          'A maioria das casas dos meus clientes são resultado de desmembramentos de lotes — ou seja, medem metade de um lote padrão, ou até menos. Não dá para fazer uma cozinha medonha, e pior, uma cozinha que não funciona: isso sim é o cúmulo do desperdício. A função do arquiteto é aproveitar cada centímetro; por mínimo que seja, ele fará diferença, e as simulações provam o que funciona e o que não funciona.',
      },
      {
        tipo: 'citacao',
        texto:
          'Contratar um arquiteto é um investimento que se paga sozinho, porque, ao longo da obra ou do uso, você tem mais qualidade de vida — e ainda valoriza o seu imóvel.',
        autor: 'Carolina Elayza',
      },
    ],
  },
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
