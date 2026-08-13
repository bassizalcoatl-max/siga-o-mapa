import type { ReactNode } from "react";

export type Alternative = {
  letter: string;
  text: string;
  points: number;
};

export type Question = {
  id: string;
  text: string;
  alternatives: Alternative[];
};

export type Block = {
  id: string;
  number: number;
  title: string;
  questions: Question[];
};

export const BLOCKS: Block[] = [
  {
    id: "bloco-1",
    number: 1,
    title: "Aspectos Cognitivos",
    questions: [
      {
        id: "q1",
        text: "Quando você fala [idioma], o que acontece na sua cabeça?",
        alternatives: [
          {
            letter: "A",
            text: "Penso a frase inteira em português primeiro e traduzo palavra por palavra.",
            points: 0,
          },
          {
            letter: "B",
            text: "Monto frases simples direto no idioma, mas em qualquer coisa mais complexa preciso traduzir mentalmente.",
            points: 1,
          },
          {
            letter: "C",
            text: 'Consigo falar sem traduzir na maioria das vezes, mas ainda "ensaio" a frase por alguns segundos antes de falar.',
            points: 2,
          },
          {
            letter: "D",
            text: "Falo sem perceber que estou construindo frases - só saem, mesmo em assuntos do dia a dia.",
            points: 3,
          },
          {
            letter: "E",
            text: "Não existe mais essa distinção - penso, e às vezes até sonho, em [idioma] sem notar a troca.",
            points: 5,
          },
        ],
      },
      {
        id: "q2",
        text: "Quando dois falantes nativos de [idioma] conversam rápido entre si (sem falar com você), o que você consegue acompanhar?",
        alternatives: [
          {
            letter: "A",
            text: "Quase nada - reconheço só uma palavra solta aqui e ali.",
            points: 0,
          },
          {
            letter: "B",
            text: "Entendo se prestar muita atenção e o tema for familiar, mas perco pedaços.",
            points: 1,
          },
          {
            letter: "C",
            text: "Acompanho a conversa geral, mas travo em gírias, contrações ou reduções.",
            points: 2,
          },
          {
            letter: "D",
            text: "Entendo praticamente tudo, incluindo reduções e contrações, mesmo em ritmo natural.",
            points: 4,
          },
          {
            letter: "E",
            text: "Não faço mais esforço consciente para entender - processo a fala reduzida como processaria em português.",
            points: 5,
          },
        ],
      },
      {
        id: "q3",
        text: "Você está no meio de uma frase e esquece uma palavra específica. O que normalmente acontece?",
        alternatives: [
          {
            letter: "A",
            text: "Travo - sem a palavra exata, simplesmente não consigo continuar.",
            points: 0,
          },
          {
            letter: "B",
            text: "Troco para o português no meio da frase ou peço ajuda.",
            points: 1,
          },
          {
            letter: "C",
            text: 'Consigo descrever a palavra de forma simples ("a coisa que corta"), mas com esforço perceptível.',
            points: 2,
          },
          {
            letter: "D",
            text: "Parafraseio quase automaticamente, sem parar a conversa.",
            points: 3,
          },
          {
            letter: "E",
            text: "Isso praticamente não acontece mais - meu vocabulário ativo cobre o que preciso dizer.",
            points: 5,
          },
        ],
      },
      {
        id: "q4",
        text: "Depois de uma hora de conversa contínua em [idioma], como você se sente?",
        alternatives: [
          {
            letter: "A",
            text: "Exausto - mesmo trechos curtos já cansam bastante.",
            points: 0,
          },
          {
            letter: "B",
            text: "Cansado, principalmente se o assunto for menos familiar.",
            points: 1,
          },
          {
            letter: "C",
            text: "Um pouco cansado, mas consigo manter o ritmo sem grandes problemas.",
            points: 2,
          },
          {
            letter: "D",
            text: "Praticamente sem fadiga extra - é parecido com uma conversa longa em português.",
            points: 4,
          },
          {
            letter: "E",
            text: "Nenhuma diferença perceptível em relação à minha língua nativa.",
            points: 5,
          },
        ],
      },
      {
        id: "q5",
        text: "Em uma conversa com várias pessoas nativas ao mesmo tempo (em grupo, não em dupla), você:",
        alternatives: [
          {
            letter: "A",
            text: "Fica principalmente calado, tentando entender o básico do que se passa.",
            points: 0,
          },
          {
            letter: "B",
            text: "Participa pouco, só quando alguém fala diretamente com você e devagar.",
            points: 1,
          },
          {
            letter: "C",
            text: "Participa ativamente, mas sente que fica um passo atrás do ritmo do grupo.",
            points: 2,
          },
          {
            letter: "D",
            text: "Acompanha e entra na conversa no timing certo, sem travar.",
            points: 4,
          },
          {
            letter: "E",
            text: "Ninguém percebe diferença entre a sua participação e a de qualquer outro nativo do grupo.",
            points: 5,
          },
        ],
      },
    ],
  },
  {
    id: "bloco-2",
    number: 2,
    title: "Aspectos Neurológicos",
    questions: [
      {
        id: "q6",
        text: 'Seus pensamentos automáticos (tipo "nossa, esqueci as chaves") alguma vez acontecem em [idioma]?',
        alternatives: [
          {
            letter: "A",
            text: "Nunca - meus pensamentos são inteiramente em português.",
            points: 0,
          },
          {
            letter: "B",
            text: "Muito raramente, e só com frases bem decoradas.",
            points: 1,
          },
          {
            letter: "C",
            text: "Às vezes, principalmente logo depois de estudar ou consumir conteúdo em [idioma].",
            points: 2,
          },
          {
            letter: "D",
            text: 'Com frequência, mesmo sem estar "no clima" do [idioma].',
            points: 3,
          },
          {
            letter: "E",
            text: "Constantemente - inclusive sonho em [idioma] de vez em quando.",
            points: 5,
          },
        ],
      },
      {
        id: "q7",
        text: "Se você ficasse 6 meses sem nenhum contato com o [idioma], o que imagina que aconteceria?",
        alternatives: [
          {
            letter: "A",
            text: "Esqueceria quase tudo rapidamente - minha base ainda é frágil.",
            points: 0,
          },
          {
            letter: "B",
            text: 'Perderia bastante fluidez e teria que "reaprender" boa parte.',
            points: 1,
          },
          {
            letter: "C",
            text: "Ficaria enferrujado, mas voltaria ao normal rápido, em poucas semanas.",
            points: 2,
          },
          {
            letter: "D",
            text: "Mudaria muito pouco - a língua já parece bem fixada.",
            points: 4,
          },
          {
            letter: "E",
            text: "Nada mudaria de forma perceptível - o [idioma] para mim é como andar de bicicleta.",
            points: 5,
          },
        ],
      },
      {
        id: "q8",
        text: "Como é assistir ou ouvir conteúdo 100% nativo em [idioma] (sem legenda, sem adaptação para estudantes)?",
        alternatives: [
          {
            letter: "A",
            text: "Impossível de acompanhar - preciso de material feito para iniciantes.",
            points: 0,
          },
          {
            letter: "B",
            text: "Consigo pegar o tema geral, mas perco a maior parte dos detalhes.",
            points: 1,
          },
          {
            letter: "C",
            text: "Acompanho bem séries e podcasts sobre temas familiares, mas me canso rápido ou perco nuances.",
            points: 2,
          },
          {
            letter: "D",
            text: "Consumo horas de conteúdo nativo sem esforço perceptível, em temas variados.",
            points: 4,
          },
          {
            letter: "E",
            text: "Esqueço completamente que [idioma] não é a minha língua nativa enquanto consumo.",
            points: 5,
          },
        ],
      },
      {
        id: "q9",
        text: "Como você reage a um sotaque forte ou uma variante regional bem diferente da que aprendeu?",
        alternatives: [
          {
            letter: "A",
            text: "Não reconheço nem que é o mesmo idioma que estudei.",
            points: 0,
          },
          {
            letter: "B",
            text: "Entendo muito pouco e preciso pedir para repetirem.",
            points: 1,
          },
          {
            letter: "C",
            text: "Estranho no início, mas me adapto depois de alguns minutos de exposição.",
            points: 2,
          },
          {
            letter: "D",
            text: "Entendo praticamente de cara, sem precisar pedir para repetir.",
            points: 4,
          },
          {
            letter: "E",
            text: "Reconheço até de qual região ou país é o sotaque, sem nenhum estranhamento.",
            points: 5,
          },
        ],
      },
      {
        id: "q10",
        text: "O que os nativos costumam falar sobre o seu sotaque quando você fala em [idioma]?",
        alternatives: [
          {
            letter: "A",
            text: "Frequentemente dizem que não entendem o que eu falo.",
            points: 0,
          },
          {
            letter: "B",
            text: "Percebem forte sotaque estrangeiro, mas geralmente me entendem.",
            points: 1,
          },
          {
            letter: "C",
            text: "Notam que não sou nativo, mas isso não é obstáculo para a comunicação.",
            points: 2,
          },
          {
            letter: "D",
            text: "Alguns comentam, surpresos, que meu sotaque é bem leve.",
            points: 4,
          },
          {
            letter: "E",
            text: "Ninguém comenta nada - meu jeito de falar não chama atenção.",
            points: 5,
          },
        ],
      },
    ],
  },
  {
    id: "bloco-3",
    number: 3,
    title: "Aspectos Socioculturais",
    questions: [
      {
        id: "q11",
        text: "Fazer humor, ironia ou sarcasmo em [idioma]:",
        alternatives: [
          {
            letter: "A",
            text: "Nem tento - não me sinto confortável o suficiente para arriscar.",
            points: 0,
          },
          {
            letter: "B",
            text: "Tento às vezes, mas as piadas quase nunca funcionam como eu esperava.",
            points: 1,
          },
          {
            letter: "C",
            text: "Funciona de vez em quando, mas sinto que meu timing ainda não é natural.",
            points: 2,
          },
          {
            letter: "D",
            text: "Minhas piadas geralmente funcionam, embora eu ainda erre o tom às vezes.",
            points: 3,
          },
          {
            letter: "E",
            text: "Faço humor com a mesma naturalidade que faço em português, e funciona igual.",
            points: 5,
          },
        ],
      },
      {
        id: "q12",
        text: "Quando você está com nativos, como eles tendem a te tratar?",
        alternatives: [
          {
            letter: "A",
            text: "Falam devagar, simplificam o vocabulário e usam gestos para se fazer entender.",
            points: 0,
          },
          {
            letter: "B",
            text: "Falam normal às vezes, mas voltam a simplificar se demonstro dificuldade.",
            points: 1,
          },
          {
            letter: "C",
            text: 'Tratam-me quase como nativo, mas ainda "ajudam" ocasionalmente sem eu pedir.',
            points: 2,
          },
          {
            letter: "D",
            text: "Esquecem que estou aprendendo e falam comigo como fariam com qualquer outro nativo.",
            points: 4,
          },
          {
            letter: "E",
            text: "Ninguém jamais imaginaria que essa não é a minha língua materna.",
            points: 5,
          },
        ],
      },
      {
        id: "q13",
        text: "Gírias e expressões idiomáticas regionais:",
        alternatives: [
          {
            letter: "A",
            text: "São basicamente incompreensíveis para mim.",
            points: 0,
          },
          {
            letter: "B",
            text: "Reconheço algumas das mais comuns, mas não as uso.",
            points: 1,
          },
          {
            letter: "C",
            text: "Entendo a maioria e uso algumas, mesmo que ainda com certa hesitação.",
            points: 2,
          },
          {
            letter: "D",
            text: "Uso naturalmente as que já conheço, no contexto certo.",
            points: 3,
          },
          {
            letter: "E",
            text: "Incorporo gírias novas quase automaticamente só de ouvir uma ou duas vezes.",
            points: 5,
          },
        ],
      },
      {
        id: "q14",
        text: "Provérbios, referências culturais ou trocadilhos em [idioma]:",
        alternatives: [
          {
            letter: "A",
            text: "Não conheço nenhum.",
            points: 0,
          },
          {
            letter: "B",
            text: "Conheço um ou dois bem clássicos, decorados.",
            points: 1,
          },
          {
            letter: "C",
            text: "Reconheço vários quando ouço, mas raramente uso por conta própria.",
            points: 2,
          },
          {
            letter: "D",
            text: "Uso alguns no momento certo, e funcionam bem na conversa.",
            points: 3,
          },
          {
            letter: "E",
            text: "Uso no timing exato, incluindo trocadilhos que dependem de nuances finas do [idioma].",
            points: 5,
          },
        ],
      },
      {
        id: "q15",
        text: 'Ao conhecer alguém novo, a pergunta "De onde você é?" baseada no seu jeito de falar:',
        alternatives: [
          {
            letter: "A",
            text: "É praticamente a primeira coisa que perguntam.",
            points: 0,
          },
          {
            letter: "B",
            text: "Aparece com frequência, assim que percebem meu sotaque.",
            points: 1,
          },
          {
            letter: "C",
            text: "Aparece ocasionalmente, mas nem sempre.",
            points: 2,
          },
          {
            letter: "D",
            text: "É rara - a maioria não percebe que não sou nativo até eu mencionar.",
            points: 4,
          },
          {
            letter: "E",
            text: "Nunca acontece - sou tratado como só mais uma pessoa do lugar.",
            points: 5,
          },
        ],
      },
    ],
  },
];

export const ALL_QUESTIONS: Question[] = BLOCKS.flatMap((block) => block.questions);

export type ResultLevel = {
  min: number;
  max: number;
  name: string;
  title: string;
  ondeVoceEsta: string;
  proximosPassos: string;
  comoMapaAjuda: ReactNode;
  cta: string;
};

export const RESULT_LEVELS: ResultLevel[] = [
  {
    min: 0,
    max: 11,
    name: "1 - Repertório de Roteiros Sociais",
    title: "Repertório de Roteiros Sociais",
    ondeVoceEsta:
      "você já tem um repertório de frases prontas - cumprimentos, agradecimentos, pedidos simples - e reconhece palavras cognatas quando aparecem. Fora do roteiro esperado, porém, a compreensão ainda cai a zero. É o começo de tudo, e é uma base real, não uma ilusão de progresso.",
    proximosPassos:
      'sair do modo "frase decorada" e começar a processar a língua de forma mais ativa - entender respostas que fogem do previsto, construir um vocabulário funcional para o seu dia a dia real, não só para situações de manual de viagem.',
    comoMapaAjuda: (
      <>
        este é o momento do <strong>Plano de Piso</strong> - um compromisso mínimo e diário,
        sustentável mesmo antes de a motivação estar 100% presente - combinado com a{" "}
        <strong>Curadoria de Criadores</strong>, que te expõe a conteúdo real do idioma desde já,
        mesmo sem entender tudo. A mentoria estrutura essas duas peças desde a primeira semana.
      </>
    ),
    cta: "Todo mapa começa com o primeiro passo. Quer estruturar seu Plano de Piso na mentoria? Chama no WhatsApp.",
  },
  {
    min: 12,
    max: 23,
    name: "2 - Compreensão em Contexto Controlado",
    title: "Compreensão em Contexto Controlado",
    ondeVoceEsta:
      "a língua já tem utilidade prática - desde que o interlocutor colabore, falando devagar e com vocabulário simples. Você resolve transações previsíveis e lê informação estática (placas, cardápios, formulários) sem problema.",
    proximosPassos:
      'tolerar mais ambiguidade e depender cada vez menos de alguém "ajudar" falando devagar. O objetivo aqui não é decorar mais frases, e sim treinar o ouvido para lidar com um pouco mais de imprevisibilidade a cada semana.',
    comoMapaAjuda: (
      <>
        o <strong>Plano de Piso</strong> continua sendo a espinha dorsal, mas a{" "}
        <strong>Curadoria de Criadores</strong> já começa a incluir conteúdo com apoio visual e cada
        vez menos simplificado - preparando o terreno perceptivo para o que vem a seguir.
      </>
    ),
    cta: 'Pronto pra depender cada vez menos de "falar devagar"? Chama no WhatsApp pra montarmos essa próxima fase na mentoria.',
  },
  {
    min: 24,
    max: 42,
    name: "3 - Muralha da Dicção Natural",
    title: "Muralha da Dicção Natural",
    ondeVoceEsta:
      "você já fala razoavelmente - conta o seu dia, faz planos, escreve mensagens -, mas os ouvidos ainda falham diante da fala nativa em velocidade real. Isto não é um sinal de que você está fazendo algo errado: é o ponto de maior carga cognitiva de todo o processo, documentado como o estágio em que a maioria das pessoas desiste.",
    proximosPassos:
      "atravessar esse platô sem abandonar o processo. Não existe atalho para isso - existe exposição sustentada às reduções fonéticas reais do idioma, e uma estrutura que te segure firme enquanto o ouvido se reorganiza.",
    comoMapaAjuda: (
      <>
        este é exatamente o momento em que a <strong>Rede de Segurança</strong> - estrutura externa
        que sustenta o aprendizado quando a motivação naturalmente oscila - e o protocolo{" "}
        <strong>Hipótese → Investigação → Validação</strong> entram em ação, dando um método
        concreto para tolerar o que ainda não se entende, em vez de reagir ao platô com desistência.
      </>
    ),
    cta: "Quer ajuda pra escalar essa muralha? Chama no WhatsApp pra marcarmos um diagnóstico de 30 minutos.",
  },
  {
    min: 43,
    max: 56,
    name: "4 - Autonomia Cognitiva e Improviso",
    title: "Autonomia Cognitiva e Improviso",
    ondeVoceEsta:
      "você já parou de traduzir mentalmente. Não ensaia mais o que vai dizer, consegue parafrasear quando falta uma palavra e participa de conversas em grupo sem passividade. Ainda há erros e algum sotaque, mas o filtro da língua materna já não trava sua fala.",
    proximosPassos:
      "ganhar consistência - reduzir a perda em tópicos abstratos, ampliar o vocabulário ativo para que a paráfrase seja cada vez mais rara, e não mais necessária.",
    comoMapaAjuda: (
      <>
        você já vive, na prática, o que chamamos de <strong>Compressão</strong> - o momento em que
        peças soltas se encaixaram e você passou a processar a língua diretamente. A técnica de{" "}
        <strong>tentativa-lacuna-busca</strong> é a forma de tornar esse mecanismo ainda mais
        eficiente, transformando cada lacuna de vocabulário em uma busca cirúrgica, não numa trava.
      </>
    ),
    cta: "Sua autonomia já existe. Agora é consistência - chama no WhatsApp pra levarmos sua jornada adiante.",
  },
  {
    min: 57,
    max: 67,
    name: "5 - Ancoragem Permanente",
    title: "Ancoragem Permanente",
    ondeVoceEsta:
      'a língua está fixada. Você consome mídia nativa sem esforço perceptível, pensa automaticamente no idioma às vezes, e os nativos já pararam de "ajudar" - te tratam como um igual funcional. Mesmo uma pausa longa sem prática não apagaria isso.',
    proximosPassos:
      "a partir daqui, o desafio deixa de ser sobre entender e passa a ser sobre amplitude - abraçar a diversidade de sotaques, variantes regionais e registros que existem dentro do idioma que você já domina.",
    comoMapaAjuda: (
      <>
        a <strong>Ponte Pessoal</strong> já não precisa mais ser cultivada de forma deliberada - a
        língua deixou de ser objeto de estudo e virou meio de vida. A partir daqui, a mentoria foca
        em ampliar a <strong>Curadoria de Criadores</strong> para fontes de regiões e registros
        diferentes.
      </>
    ),
    cta: "Seu idioma está ancorado. Quer ampliar horizontes? Chama no WhatsApp pra desenharmos o próximo capítulo.",
  },
  {
    min: 68,
    max: 71,
    name: "6 - Versatilidade Dialetal e Regional",
    title: "Versatilidade Dialetal e Regional",
    ondeVoceEsta:
      "poucas pessoas chegam até aqui. Sotaques fortes, variantes regionais e gírias locais deixaram de ser um obstáculo - o idioma não é mais monolítico para você. Não significa que você fale todos os dialetos que existem, mas seus ouvidos já estão treinados para o ecossistema completo da língua.",
    proximosPassos:
      "o que falta não é mais estrutura linguística - é imersão cultural cada vez mais profunda. É a diferença entre entender uma piada e senti-la; entre reconhecer uma referência e ela já fazer parte do seu próprio repertório.",
    comoMapaAjuda: (
      <>
        neste estágio, o papel da mentoria muda de natureza - deixa de ensinar mecanismo e passa a{" "}
        <strong>curar experiência</strong>: direcionar exposição a fontes cada vez mais específicas
        e culturalmente densas, do tipo que só faz sentido buscar quando a base técnica já não é
        mais o gargalo.
      </>
    ),
    cta: "Você está em território raro. A mentoria agora cura experiência - chama no WhatsApp pra continuar a jornada.",
  },
  {
    min: 72,
    max: 75,
    name: "7 - Integração e Pertencimento",
    title: "Integração e Pertencimento",
    ondeVoceEsta:
      "o topo da montanha. Não se trata mais de gramática correta - trata-se de pertencimento. As pessoas esquecem que você é estrangeiro. Suas piadas funcionam pelo conteúdo, não pela execução. Ninguém pergunta de onde você é com base na sua fala. Chegar até aqui é raro, e se você está lendo este resultado, está entre uma fração muito pequena de aprendizes.",
    proximosPassos:
      'dentro deste idioma, não há um "próximo nível" - o que existe é manutenção natural, que já acontece sozinha, porque a língua virou parte de quem você é. Se existe uma fronteira daqui pra frente, ela normalmente não está mais dentro deste idioma: está em repetir esse processo, com tudo o que você já aprendeu sobre si mesmo como aprendiz, em um idioma novo.',
    comoMapaAjuda: (
      <>
        aqui a <strong>Ponte Pessoal</strong> está em plenitude - não é mais uma técnica, é a sua
        relação vivida com a língua. Se o interesse for começar um novo idioma do zero, a mentoria
        parte de um lugar muito mais raro: você já sabe, na prática, como é chegar até aqui e pode
        fazê-lo novamente com poucas adaptações no caminho.
      </>
    ),
    cta: "Você chegou ao topo. Quer repetir esse processo num idioma novo? Chama no WhatsApp.",
  },
];

export function getLevel(total: number): ResultLevel {
  for (let i = RESULT_LEVELS.length - 1; i >= 0; i--) {
    const level = RESULT_LEVELS[i]!;
    if (total >= level.min) return level;
  }
  return RESULT_LEVELS[0]!;
}

export const LANGUAGE_OPTIONS = [
  "Alemão",
  "Árabe",
  "Cantonês",
  "Coreano",
  "Espanhol",
  "Francês",
  "Grego",
  "Hebraico",
  "Holandês",
  "Inglês",
  "Italiano",
  "Japonês",
  "Latim",
  "Mandarim",
  "Norueguês",
  "Polonês",
  "Romeno",
  "Russo",
  "Turco",
].sort((a, b) => a.localeCompare(b, "pt-BR"));

export const OTHER_LANGUAGE = "Outro (descreva)";
