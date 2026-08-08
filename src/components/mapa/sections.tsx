import { Section, WhatsAppCta } from "./primitives";

export function ParaQuem() {
  return (
    <Section id="para-quem" kicker="Para quem é isso" accent="sage">
      <h2 className="title-section max-w-[22ch]">
        Duas histórias diferentes que terminam no mesmo lugar.
      </h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8">
        <div className="border-t border-sage/40 pt-6">
          <h3 className="title-sub text-creme">Você já tentou antes</h3>
          <p className="prose-mapa mt-3 text-[0.98rem]">
            Comprou o curso, assistiu às primeiras aulas, talvez tenha chegado longe. Em algum
            ponto parou — o método não cabia na sua rotina, o conteúdo não tinha nada a ver com a
            sua vida, a empolgação secou. Ficou a sensação de que o problema era você.
          </p>
        </div>
        <div className="border-t border-sage/40 pt-6">
          <h3 className="title-sub text-creme">Você nunca começou</h3>
          <p className="prose-mapa mt-3 text-[0.98rem]">
            A vontade existe há anos. O que não existe é um primeiro passo que pareça confiável:
            aplicativo, escola, professor particular, vídeo no YouTube. Tudo promete o mesmo e nada
            te diz onde você está nem para onde ir.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function ProblemaReal() {
  return (
    <Section id="problema" kicker="O problema real" accent="ocre">
      <h2 className="title-section max-w-[26ch]">
        Quase nenhum método falha por falta de conteúdo. Falha por falta de estrutura.
      </h2>
      <div className="prose-mapa mt-8 space-y-5">
        <p>
          Um curso self-paced entrega 200 aulas e nenhuma decisão: o que estudar hoje, o que fazer
          quando você perder três dias seguidos, como saber se avançou. A responsabilidade de
          montar o sistema fica com quem menos tem como montá-lo — você, que ainda não conhece o
          terreno.
        </p>
        <p>
          Depois vem o vocabulário de turista. Você aprende a pedir a conta e a perguntar onde fica
          a estação, mas não consegue falar do seu trabalho, da sua família, daquilo que você faria
          na língua se pudesse. O idioma nunca encosta na sua vida real, e o que não encosta na
          vida não gruda na memória.
        </p>
        <p>
          Some a isso a promessa de fluência em prazo fixo — que ignora ponto de partida, rotina e
          objetivo — e a gamificação que troca aprendizado por sequência de dias. Ofuscante por uma
          semana, irrelevante no segundo mês. Quando a motivação baixa, e ela sempre baixa, não
          sobra nada segurando você.
        </p>
      </div>
    </Section>
  );
}

export function ProvaViva() {
  return (
    <Section id="prova-viva" kicker="Prova viva" accent="ocre">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-start sm:gap-12">
        {/* Espaço reservado para a foto — trocar pelo arquivo enviado. */}
        <figure className="relative" data-photo-placeholder>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden translate-x-3 translate-y-3 border border-ocre/45 sm:block"
            />
            <div className="relative aspect-square w-full overflow-hidden border border-creme/15 bg-navy-deep">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(150deg, color-mix(in oklab, var(--ocre) 24%, transparent), transparent 55%, color-mix(in oklab, var(--plum) 20%, transparent))",
              }}
            />
            <div className="relative grid h-full place-items-center px-6 text-center">
              <span className="kicker text-[0.6rem] text-creme/45">
                espaço reservado
                <br />
                para a foto
              </span>
            </div>
            </div>
          </div>
          <figcaption className="kicker mt-7 text-[0.6rem] leading-relaxed text-ocre">
            fluente em inglês e espanhol · estudando mandarim e francês · engatinhando em coreano e
            catalão
          </figcaption>
        </figure>

        <div>
          <h2 className="title-section max-w-[24ch]">
            Se você já desistiu de um idioma, saiba: <em className="text-ocre">eu também.</em>
          </h2>
          <div className="prose-mapa mt-7 space-y-5">
            <p>
              Aprendi inglês sozinho na adolescência, movido só por curiosidade — eu queria
              entender as letras das bandas que ouvia e as piadas que a legenda não traduzia.
              Funcionou, mas levei mais de cinco anos para perceber que aquilo tinha virado
              fluência.
            </p>
            <p>
              Anos depois, já adulto, tentei outro idioma do jeito convencional: comprei o curso,
              comecei animado e abandonei no meio do caminho. Passei muito tempo achando que o
              problema era eu, até entender que me faltava um sistema que respeitasse como meu
              cérebro realmente aprende e que se adaptasse à minha rotina — não o contrário.
            </p>
            <p>
              Hoje, enquanto estudo mandarim e francês (e engatinho no coreano e no catalão), me
              dedico a investigar o processo de aprender idiomas. Não como linguista de formação,
              mas como alguém que testa métodos na prática, lê a pesquisa acadêmica com seriedade e
              organiza os padrões que observa. O que encontrei não foi uma fórmula. Foi um mapa.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const NIVEIS = [
  {
    n: "01",
    t: "Contato",
    d: "O idioma ainda é ruído organizado. Você reconhece que é uma língua, não o que ela diz.",
  },
  {
    n: "02",
    t: "Reconhecimento",
    d: "Palavras começam a se separar do fluxo. Você identifica antes de compreender.",
  },
  {
    n: "03",
    t: "Compreensão apoiada",
    d: "Você entende com contexto, imagem, legenda ou repetição ajudando.",
  },
  {
    n: "04",
    t: "Compreensão autônoma",
    d: "O sentido chega sem apoio, mesmo com lacunas — e as lacunas param de assustar.",
  },
  {
    n: "05",
    t: "Produção funcional",
    d: "Você diz o que precisa dizer, do seu jeito, com erros que não impedem a conversa.",
  },
  {
    n: "06",
    t: "Produção pessoal",
    d: "Você fala do que importa para você: trabalho, afeto, opinião, humor.",
  },
  {
    n: "07",
    t: "Vida no idioma",
    d: "A língua deixa de ser matéria de estudo e passa a ser lugar onde você existe.",
  },
];

export function BonusNiveis() {
  return (
    <Section id="bonus" kicker="Bônus gratuito" accent="sage">
      <h2 className="title-section max-w-[24ch]">A Arquitetura dos 7 Níveis</h2>
      <p className="lead mt-5 max-w-[34ch] text-creme/85">
        Não saber em que nível você está é parte do motivo de você não avançar.
      </p>
      <p className="prose-mapa mt-6">
        Um guia curto que mapeia os sete níveis de proficiência em qualquer idioma — o que muda em
        cada um, e o que costuma travar a passagem para o seguinte. Serve para você localizar onde
        parou de verdade, antes de qualquer conversa comigo.
      </p>

      <ol className="mt-10 max-w-[46ch] divide-y divide-border">
        {NIVEIS.map((nivel) => (
          <li key={nivel.n} className="flex gap-5 py-4">
            <span className="font-serif text-sm font-bold leading-relaxed text-terracota tabular-nums">
              {nivel.n}
            </span>
            <span className="min-w-0">
              <span className="block font-sans text-[0.98rem] font-semibold text-creme">
                {nivel.t}
              </span>
              <span className="prose-mapa block text-[0.92rem] leading-relaxed">{nivel.d}</span>
            </span>
          </li>
        ))}
      </ol>

      {/* Formulário visualmente pronto — persistência e envio entram na próxima etapa. */}
      <form
        className="mt-10 max-w-[46ch]"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="email-guia" className="kicker block text-sage">
          receber o guia por e-mail
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="email-guia"
            type="email"
            name="email"
            required
            placeholder="seu@email.com"
            className="w-full rounded-sm border border-input bg-navy-deep px-4 py-3.5 font-sans text-base text-creme placeholder:text-creme/35 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
          />
          <button
            type="submit"
            className="shrink-0 rounded-sm bg-sage px-6 py-3.5 font-sans text-base font-semibold text-accent-foreground transition-colors active:bg-sage/85 sm:hover:bg-sage/90"
          >
            Quero o guia
          </button>
        </div>
        <p className="mt-3 font-sans text-[0.82rem] text-creme/45">
          Só o guia e, de vez em quando, algo que eu ache que vale seu tempo. Nada de disparo
          diário.
        </p>
      </form>
    </Section>
  );
}

export function ComoFunciona() {
  const pilares = [
    {
      t: "Rede de Segurança",
      c: "sage" as const,
      d: "A estrutura externa que sustenta o estudo justamente quando a vontade não aparece: o que fazer no dia ruim, como voltar depois de faltar, qual é o mínimo que ainda conta. Você não precisa querer todos os dias — precisa ter onde se segurar.",
    },
    {
      t: "Ponte Pessoal",
      c: "ocre" as const,
      d: "O idioma entra pela sua vida, não pelo índice de um livro. O vocabulário que você constrói primeiro é o do que você faz, do que você gosta e do que você quer dizer — porque é isso que sua memória aceita guardar.",
    },
    {
      t: "Progresso sentido",
      c: "plum" as const,
      d: "Avanço não é nota de prova nem certificado. É perceber que entendeu uma frase que ontem passou batida, que respondeu sem traduzir na cabeça, que ficou dez minutos na conversa. A gente acompanha isso de perto e nomeia.",
    },
  ];
  const accentBorder = {
    sage: "border-sage/45",
    ocre: "border-ocre/45",
    plum: "border-plum/50",
  };
  const accentText = { sage: "text-sage", ocre: "text-ocre", plum: "text-plum" };

  return (
    <Section id="metodo" kicker="Como funciona o MAPA" accent="terracota">
      <h2 className="title-section max-w-[26ch]">
        Existe estrutura por trás. Não é intuição minha.
      </h2>
      <p className="prose-mapa mt-6">
        O método inteiro se desdobra dentro da mentoria, no seu caso específico. Mas três pilares
        sustentam tudo o resto — e dá para explicar os três sem enrolação:
      </p>
      <div className="mt-10 space-y-8">
        {pilares.map((p) => (
          <article key={p.t} className={`border-l ${accentBorder[p.c]} pl-5 sm:pl-6`}>
            <h3 className={`title-sub ${accentText[p.c]}`}>{p.t}</h3>
            <p className="prose-mapa mt-2 text-[0.98rem]">{p.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ComoEMentoria() {
  return (
    <Section id="mentoria" kicker="Como é a mentoria" accent="sage">
      <h2 className="title-section max-w-[24ch]">Individual, e por isso imprevisível no começo.</h2>
      <div className="prose-mapa mt-7 space-y-5">
        <p>
          Tudo parte do diagnóstico. Antes de qualquer plano, eu preciso entender qual idioma você
          quer, de onde você está partindo, quanto tempo real você tem numa semana comum e o que
          você quer poder fazer no idioma daqui a algum tempo.
        </p>
        <p>
          A partir daí é acompanhamento próximo: encontros combinados de acordo com a sua rotina,
          conteúdo adaptado ao seu idioma e ao seu nível, ajustes conforme a vida muda. Eu fico por
          perto entre os encontros — quando algo trava, você não precisa esperar duas semanas para
          contar.
        </p>
      </div>
      <div className="mt-9 border border-border bg-navy-raised/60 p-6 sm:p-7">
        <p className="kicker text-sage">sobre investimento</p>
        <p className="lead mt-3 max-w-[32ch] text-creme">
          Cada jornada é diferente, então o valor também é.
        </p>
        <p className="prose-mapa mt-4 text-[0.95rem]">
          O investimento é definido individualmente depois do diagnóstico, considerando idioma,
          ponto de partida e objetivo. Isso é combinado com você, não antes de eu te conhecer —
          porque não é um produto padronizado.
        </p>
      </div>
    </Section>
  );
}

const NAO_E = [
  "Não prometo fluência. Prometo processo e acompanhamento.",
  "Não trabalho com prazo fixo, porque ninguém honesto consegue prever o seu.",
  "Motivação é clima, não combustível — não vendo picos de empolgação.",
  "Não é curso gravado genérico servido para todo mundo igual.",
  "Não é gamificação disfarçada de método.",
  "Não é conduzido por inteligência artificial. Sou eu, conversando com você.",
  "Não falo mal de concorrente para parecer melhor do que sou.",
];

export function OQueNaoE() {
  return (
    <Section id="nao-e" kicker="O que isso não é" accent="plum">
      <h2 className="title-section max-w-[24ch]">Os inegociáveis, ditos antes de você perguntar.</h2>
      <ul className="mt-9 max-w-[52ch] space-y-5">
        {NAO_E.map((item) => (
          <li key={item} className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.35rem] shrink-0 font-serif text-sm leading-none text-plum"
            >
              ✕
            </span>
            <span className="prose-mapa text-[0.98rem]">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Diagnostico() {
  return (
    <Section id="diagnostico" kicker="Diagnóstico gratuito" accent="terracota">
      <h2 className="title-section max-w-[24ch]">Uma conversa de uns 30 minutos. Sem compromisso.</h2>
      <div className="prose-mapa mt-7 space-y-5">
        <p>
          A gente conversa pelo WhatsApp sobre onde você está: o que já tentou, onde travou, quanto
          tempo você tem, o que te fez querer esse idioma em primeiro lugar. Eu te digo com
          franqueza o que vejo — inclusive se eu achar que a mentoria não é o que você precisa
          agora.
        </p>
        <p>
          Não tem formulário longo, robô fazendo triagem nem sequência de e-mails depois. É uma
          conversa real, comigo, e ela vale por si só mesmo que você decida não seguir.
        </p>
      </div>
      <div className="mt-9">
        <WhatsAppCta>Chama no WhatsApp pro seu diagnóstico gratuito</WhatsAppCta>
      </div>
    </Section>
  );
}

const FAQ = [
  {
    q: "Quanto custa a mentoria?",
    a: "Não existe valor fixo, porque a mentoria é individual. O investimento é definido depois do diagnóstico, considerando idioma, ponto de partida e objetivo.",
  },
  {
    q: "Em quanto tempo eu fico fluente?",
    a: "Essa pergunta não tem resposta honesta em prazo fixo. Cada pessoa parte de um terreno diferente, com inclinações e rotinas diferentes. O que existe é acompanhamento constante do seu progresso real, não uma data prometida.",
  },
  {
    q: "Preciso já saber alguma coisa do idioma pra começar?",
    a: "Não. A mentoria funciona tanto para quem nunca começou quanto para quem já tentou antes e travou em algum ponto.",
  },
  {
    q: "Funciona pra qualquer idioma?",
    a: "Sim. O método nasceu de anos estudando múltiplos idiomas de verdade e a estrutura não depende de eu falar fluentemente o idioma que você escolheu — depende de como o cérebro adulto de fato aprende.",
  },
  {
    q: "É mentoria com inteligência artificial ou conteúdo gravado?",
    a: "Não. É acompanhamento humano e individual, com conversas reais. Nenhuma automação conduzindo o seu aprendizado.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "É uma conversa de cerca de 30 minutos pelo WhatsApp, sem compromisso, para entender sua situação atual e ver se faz sentido caminharmos juntos.",
  },
];

export function Faq() {
  return (
    <Section id="faq" kicker="Perguntas" accent="ocre">
      <h2 className="title-section max-w-[22ch]">O que costumam me perguntar</h2>
      <div className="mt-9 max-w-[54ch] border-t border-border">
        {FAQ.map((item) => (
          <details key={item.q} className="group border-b border-border py-5">
            <summary className="flex cursor-pointer list-none items-start gap-4 font-sans text-[1.02rem] font-semibold text-creme [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="mt-[0.3rem] shrink-0 font-serif text-sm leading-none text-ocre transition-transform group-open:rotate-45"
              >
                +
              </span>
              <span className="min-w-0">{item.q}</span>
            </summary>
            <p className="prose-mapa mt-3 pl-8 text-[0.96rem]">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}