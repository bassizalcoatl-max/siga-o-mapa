import { useState, type FormEvent } from "react";
import {
  RotateCcw,
  Compass,
  ShieldCheck,
  Workflow,
  TrendingUp,
  X,
  CheckCircle2,
  Calendar,
  Sparkles,
  BookOpen,
  Send,
  MessageCircle,
  ChevronDown,
  Lock,
  ArrowRight,
  Target,
  Layers,
  HeartHandshake,
} from "lucide-react";

import retrato from "@/assets/profilepicmapa.png";
import mockupGuia from "@/assets/book_smartphone_mockup.webp";
import { Section, WhatsAppCta } from "./primitives";

export function ParaQuem() {
  return (
    <Section id="para-quem" kicker="Para quem é isso" accent="sage">
      <h2 className="title-section">Duas histórias diferentes que terminam no mesmo lugar.</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
        {/* Card 1 */}
        <div className="editorial-card relative overflow-hidden rounded-xl p-6 sm:p-8">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sage/15 text-sage">
            <RotateCcw className="h-5 w-5" />
          </div>
          <h3 className="title-sub text-creme">Você já tentou antes</h3>
          <p className="prose-mapa mt-3 text-[0.98rem] leading-relaxed">
            Comprou o curso, assistiu às primeiras aulas, talvez tenha chegado longe. Em algum ponto
            parou - o método não cabia na sua rotina, o conteúdo não tinha nada a ver com a sua
            vida, a empolgação secou. Ficou a sensação de que o problema era você.
          </p>
          <div className="mt-6 border-t border-border/40 pt-4 font-serif text-xs italic text-sage/80">
            "Ficou a sensação de que o problema era você."
          </div>
        </div>

        {/* Card 2 */}
        <div className="editorial-card relative overflow-hidden rounded-xl p-6 sm:p-8">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-terracota/15 text-terracota">
            <Compass className="h-5 w-5" />
          </div>
          <h3 className="title-sub text-creme">Você nunca começou</h3>
          <p className="prose-mapa mt-3 text-[0.98rem] leading-relaxed">
            A vontade existe há anos. O que não existe é um primeiro passo que pareça confiável:
            aplicativo, escola, professor particular, vídeo no YouTube. Tudo promete o mesmo e nada
            te diz onde você está nem para onde ir.
          </p>
          <div className="mt-6 border-t border-border/40 pt-4 font-serif text-xs italic text-terracota/80">
            "Tudo promete o mesmo e nada te diz onde você está."
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ProblemaReal() {
  return (
    <Section id="problema" kicker="O problema real" accent="ocre">
      <h2 className="title-section">
        Quase nenhum método falha por falta de conteúdo. Falha por falta de estrutura.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="editorial-card rounded-xl p-6">
          <span className="font-serif text-2xl font-bold text-ocre/70">01</span>
          <h3 className="mt-2 font-serif text-lg font-bold text-creme">Cursos Sem Decisão</h3>
          <p className="prose-mapa mt-3 text-[0.94rem]">
            Um curso self-paced entrega 200 aulas e nenhuma decisão: o que estudar hoje, o que fazer
            quando você perder três dias seguidos, como saber se avançou. A responsabilidade de
            montar o sistema fica com quem menos tem como montá-lo - você, que ainda não conhece o
            terreno.
          </p>
        </div>

        <div className="editorial-card rounded-xl p-6">
          <span className="font-serif text-2xl font-bold text-ocre/70">02</span>
          <h3 className="mt-2 font-serif text-lg font-bold text-creme">Vocabulário de Turista</h3>
          <p className="prose-mapa mt-3 text-[0.94rem]">
            Depois vem o vocabulário de turista. Você aprende a pedir a conta e a perguntar onde
            fica a estação, mas não consegue falar do seu trabalho, da sua família, daquilo que você
            faria na língua se pudesse. O idioma nunca encosta na sua vida real, e o que não encosta
            na vida não gruda na memória.
          </p>
        </div>

        <div className="editorial-card rounded-xl p-6">
          <span className="font-serif text-2xl font-bold text-ocre/70">03</span>
          <h3 className="mt-2 font-serif text-lg font-bold text-creme">Promessas & Gamificação</h3>
          <p className="prose-mapa mt-3 text-[0.94rem]">
            Some a isso a promessa de fluência em prazo fixo - que ignora ponto de partida, rotina e
            objetivo - e a gamificação que troca aprendizado por sequência de dias. Ofuscante por
            uma semana, irrelevante no segundo mês. Quando a motivação baixa, e ela sempre baixa,
            não sobra nada segurando você.
          </p>
        </div>
      </div>

      {/* Destaque Editorial Quote */}
      <div className="mt-10 rounded-xl bg-terracota p-6 sm:p-8 shadow-xl text-creme">
        <blockquote className="font-serif text-lg italic sm:text-xl">
          "O idioma nunca encosta na sua vida real, e o que não encosta na vida não gruda na
          memória."
        </blockquote>
      </div>
    </Section>
  );
}

export function ProvaViva() {
  return (
    <Section id="prova-viva" kicker="Prova viva" accent="ocre">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
        <figure className="relative">
          <div className="group relative overflow-hidden rounded-2xl border border-creme/20 bg-navy-card p-2 shadow-2xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-navy-deep">
              <img
                src={retrato}
                alt="Retrato do mentor do MAPA"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top saturate-[0.9] transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 mix-blend-soft-light"
                style={{
                  background:
                    "linear-gradient(150deg, color-mix(in oklab, var(--ocre) 28%, transparent), transparent 55%, color-mix(in oklab, var(--plum) 22%, transparent))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-creme/10 bg-navy-deep/85 p-3 backdrop-blur-md">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocre">
                  <span className="h-2 w-2 rounded-full bg-ocre animate-pulse" />
                  Mentoria Individual
                </span>
                <p className="mt-1 text-xs text-creme/80">
                  Estudando múltiplos idiomas na prática todos os dias.
                </p>
              </div>
            </div>
          </div>
          <figcaption className="kicker mt-5 text-[0.68rem] leading-relaxed text-ocre/90">
            fluente em inglês e espanhol · estudando mandarim e francês · engatinhando em coreano e
            catalão
          </figcaption>
        </figure>

        <div>
          <h2 className="title-section text-creme">
            Se você já desistiu de um idioma, saiba:{" "}
            <em className="text-ocre font-serif italic">eu também.</em>
          </h2>
          <p className="lead mt-6 text-creme/90">
            Eu aprendi inglês sozinho por prazer, mas levei tempo até a fluência. Depois abandonei
            outro idioma porque o sistema não se adaptava a mim. Só saí do lugar quando entendi: não
            existe método milagroso, sistema infalível nem nada do tipo. Aprender um idioma não
            envolve dom, inspiração e nem mesmo perfeição - basta um método que caiba na sua vida e
            na sua realidade.
            <span className="mt-4 block text-ocre">O resto do percurso, conto abaixo.</span>
          </p>
        </div>
      </div>

      <div className="prose-mapa mt-10 space-y-6 text-[1.02rem]">
        <p>
          O inglês chegou primeiro: na adolescência, sozinho, movido só por curiosidade - eu queria
          entender as letras das bandas que ouvia e as piadas que a legenda não traduzia. Funcionou,
          mas levei mais de cinco anos para perceber que aquilo tinha virado fluência.
        </p>
        <p>
          Anos depois, já adulto, tentei outro idioma do jeito convencional: comprei o curso,
          comecei animado e abandonei no meio do caminho. Passei muito tempo achando que o problema
          era eu, até entender que me faltava um sistema que respeitasse como meu cérebro realmente
          aprende e que se adaptasse à minha rotina - não o contrário.
        </p>
        <p>
          Hoje, enquanto estudo mandarim e francês (e engatinho no coreano e no catalão), me dedico
          a investigar o processo de aprender idiomas. Não como linguista de formação, mas como
          alguém que testa métodos na prática, lê a pesquisa acadêmica com seriedade e organiza os
          padrões que observa. O que encontrei não foi uma fórmula. Foi um mapa.
        </p>
      </div>
    </Section>
  );
}

export function ComoFunciona() {
  const pilares = [
    {
      t: "Rede de Segurança",
      c: "sage" as const,
      icon: ShieldCheck,
      d: "A estrutura externa que sustenta o estudo justamente quando a vontade não aparece: o que fazer no dia ruim, como voltar depois de faltar, qual é o mínimo que ainda conta. Você não precisa querer todos os dias - precisa ter onde se segurar.",
    },
    {
      t: "Ponte Pessoal",
      c: "ocre" as const,
      icon: Workflow,
      d: "O idioma entra pela sua vida, não pelo índice de um livro. O vocabulário que você constrói primeiro é o do que você faz, do que você gosta e do que você quer dizer - porque é isso que sua memória aceita guardar.",
    },
    {
      t: "Progresso sentido",
      c: "plum" as const,
      icon: TrendingUp,
      d: "Avanço não é nota de prova nem certificado. É perceber que entendeu uma frase que ontem passou batida, que respondeu sem traduzir na cabeça, que ficou dez minutos na conversa. A gente acompanha isso de perto e nomeia.",
    },
  ];

  const accentStyles = {
    sage: {
      border: "border-sage/40",
      text: "text-sage",
      bg: "bg-sage/10",
      glow: "hover:border-sage/70",
    },
    ocre: {
      border: "border-ocre/40",
      text: "text-ocre",
      bg: "bg-ocre/10",
      glow: "hover:border-ocre/70",
    },
    plum: {
      border: "border-plum/40",
      text: "text-plum",
      bg: "bg-plum/10",
      glow: "hover:border-plum/70",
    },
  };

  return (
    <Section id="metodo" kicker="Como funciona o MAPA" accent="terracota">
      <h2 className="title-section">Existe estrutura por trás. Não é intuição minha.</h2>
      <p className="prose-mapa mt-6 text-[1.05rem]">
        O método inteiro se desdobra dentro da mentoria, no seu caso específico. Mas três pilares
        sustentam tudo o resto - e dá para explicar os três sem enrolação:
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pilares.map((p) => {
          const IconComponent = p.icon;
          const style = accentStyles[p.c];
          return (
            <article
              key={p.t}
              className={`editorial-card group relative flex flex-col justify-between rounded-xl p-6 sm:p-7 transition-all ${style.glow}`}
            >
              <div>
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${style.bg} ${style.text}`}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className={`title-sub ${style.text}`}>{p.t}</h3>
                <p className="prose-mapa mt-3 text-[0.96rem] leading-relaxed">{p.d}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function ComoEMentoria() {
  return (
    <Section id="mentoria" kicker="Como é a mentoria" accent="sage">
      <h2 className="title-section">Individual, e por isso imprevisível no começo.</h2>

      <div className="prose-mapa mt-7 space-y-5 text-[1.02rem]">
        <p>
          Tudo parte do diagnóstico - a call de 30 minutos que a gente marca pelo WhatsApp. Antes de
          qualquer plano, eu preciso entender qual idioma você quer, de onde você está partindo,
          quanto tempo real você tem numa semana comum e o que você quer poder fazer no idioma daqui
          a algum tempo.
        </p>
        <p>
          A partir daí é acompanhamento próximo: encontros combinados de acordo com a sua rotina,
          conteúdo adaptado ao seu idioma e ao seu nível, ajustes conforme a vida muda. Eu fico por
          perto entre os encontros - quando algo trava, você não precisa esperar duas semanas para
          contar.
        </p>
      </div>

      {/* Timeline visual da mentoria */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="editorial-card rounded-xl p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage/20 font-serif text-xs font-bold text-sage">
              1
            </span>
            <h4 className="font-sans text-sm font-semibold text-creme">Diagnóstico 30m</h4>
          </div>
          <p className="mt-2 text-xs text-creme/70">
            Call ao vivo no WhatsApp para entender seu ponto de partida e rotina real.
          </p>
        </div>

        <div className="editorial-card rounded-xl p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage/20 font-serif text-xs font-bold text-sage">
              2
            </span>
            <h4 className="font-sans text-sm font-semibold text-creme">Construção da Rota</h4>
          </div>
          <p className="mt-2 text-xs text-creme/70">
            Plano individualizado focado na sua vida e no que você realmente quer falar.
          </p>
        </div>

        <div className="editorial-card rounded-xl p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage/20 font-serif text-xs font-bold text-sage">
              3
            </span>
            <h4 className="font-sans text-sm font-semibold text-creme">Acompanhamento</h4>
          </div>
          <p className="mt-2 text-xs text-creme/70">
            Presença constante entre encontros para destravar qualquer obstáculo.
          </p>
        </div>
      </div>

      <div className="editorial-card mt-9 rounded-xl border border-sage/30 bg-navy-card/90 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2">
          <HeartHandshake className="h-5 w-5 text-sage" />
          <p className="kicker text-sage">sobre investimento</p>
        </div>
        <p className="lead mt-3 text-creme">Combinado só depois de te conhecer.</p>
        <p className="prose-mapa mt-4 text-[0.98rem]">
          Como cada jornada é diferente, não existe valor de prateleira. O investimento é definido
          individualmente depois do diagnóstico, considerando idioma, ponto de partida e objetivo.
          Não é tática de barganha pra parecer mais em conta: um serviço personalizado não tem como
          ser precificado antes de eu te conhecer de verdade.
        </p>
      </div>
    </Section>
  );
}

const NAO_E = [
  "Não prometo fluência. Prometo processo estruturado e acompanhamento.",
  "Não trabalho com prazo fixo, porque ninguém honesto consegue prever o seu.",
  "Não vendo picos de empolgação. Motivação é clima, não combustível.",
  "Não é um curso gravado servido igual para todo mundo, é algo personalizado.",
  "Não é gamificação disfarçada: sequência de dias não ensina, só empolga.",
  "Não é conduzido por inteligência artificial. Sou eu, conversando com você.",
];

export function OQueNaoE() {
  return (
    <Section
      id="nao-e"
      kicker="O que isso não é"
      accent="plum"
      padX="px-7 sm:px-16"
      className="rounded-3xl bg-creme text-navy"
    >
      <h2 className="title-section text-navy">Os inegociáveis, ditos antes de você perguntar.</h2>

      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        {NAO_E.map((item) => {
          const rest = item.replace(/^Não\s+/, "");
          return (
            <div
              key={item}
              className="editorial-card flex items-start gap-4 rounded-xl border-navy/15 p-5 transition-all hover:border-plum/50"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-plum/20 text-plum font-serif font-bold text-sm">
                ✕
              </div>
              <span className="prose-mapa text-[0.98rem] leading-snug">
                <strong className="font-sans font-extrabold uppercase tracking-wide text-creme">
                  não
                </strong>{" "}
                {rest}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Diagnostico() {
  return (
    <Section id="diagnostico" kicker="Diagnóstico gratuito" accent="terracota" padX="px-7 sm:px-16">
      <div className="editorial-card relative overflow-hidden rounded-2xl border border-terracota/30 bg-gradient-to-br from-navy-card via-navy-raised to-navy-deep p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-terracota/40 bg-terracota/10 px-3.5 py-1 text-xs font-semibold text-terracota mb-4">
            <span className="h-2 w-2 rounded-full bg-terracota animate-pulse" />
            Call individual ao vivo
          </div>

          <h2 className="title-section text-creme">
            Uma call de 30 minutos, marcada pelo WhatsApp. Sem compromisso.
          </h2>

          <div className="prose-mapa mt-6 space-y-4 text-[1.02rem]">
            <p>
              O WhatsApp é só a porta: você me chama por lá e a gente combina dia e horário. O
              diagnóstico em si é uma call de cerca de 30 minutos, ao vivo, comigo.
            </p>
            <p>
              Nessa call falamos sobre onde você está: o que já tentou, onde travou, quanto tempo
              você tem numa semana comum, o que te fez querer esse idioma. Eu te digo com franqueza
              o que vejo - inclusive se eu achar que a mentoria não é o que você precisa agora.
            </p>
            <p>
              Não tem formulário longo, robô fazendo triagem nem sequência de e-mails depois. É uma
              conversa real, comigo, e ela vale por si só mesmo que você decida não seguir.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppCta variant="solid">Chama no WhatsApp pra marcar o diagnóstico</WhatsAppCta>
          </div>
        </div>
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
    a: "Sim. O método nasceu de anos estudando múltiplos idiomas de verdade e a estrutura não depende de eu falar fluentemente o idioma que você escolheu - depende de como o cérebro adulto aprende.",
  },
  {
    q: "É mentoria com inteligência artificial ou conteúdo gravado?",
    a: "Não. É acompanhamento humano e individual, com conversas reais. Nenhuma automação conduzindo o seu aprendizado.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Você me chama no WhatsApp e a gente combina dia e horário. O diagnóstico é uma call de cerca de 30 minutos, ao vivo e sem compromisso, para entender sua situação atual e ver se faz sentido caminharmos juntos.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" kicker="Perguntas" accent="ocre">
      <h2 className="title-section">O que costumam me perguntar</h2>

      <div className="mt-9 grid gap-4">
        {FAQ.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.q}
              className={`editorial-card rounded-xl transition-all ${
                isOpen ? "border-ocre/50 bg-navy-card/90" : "hover:border-creme/20"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full cursor-pointer items-start justify-between gap-4 p-5 text-left font-sans text-[1.02rem] font-semibold text-creme"
              >
                <span className="min-w-0">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ocre transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-border/40 px-5 pb-5 pt-3">
                  <p className="prose-mapa text-[0.98rem] leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const NIVEIS = [
  {
    n: "01",
    t: "Repertório de Roteiros Sociais",
    d: "O aprendiz não processa a língua ativamente, apenas reproduz frases decoradas como um ator lendo um roteiro. A sensação de proficiência dura segundos, pois não há capacidade de lidar com imprevistos.",
  },
  {
    n: "02",
    t: "Compreensão em Contexto Controlado",
    d: "A língua começa a ter utilidade prática - desde que o interlocutor colabore (fale devagar, de forma clara, com vocabulário simples). O aprendiz realiza transações previsíveis e consegue ler placas, menus e formulários.",
  },
  {
    n: "03",
    t: "Muralha da Dicção Natural",
    d: "O abismo mais longo. O aprendiz já se comunica bem, mas a fala nativa em velocidade real é incompreensível. O que se entende por escrito vira ruído. O cérebro entra em sobrecarga cognitiva.",
  },
  {
    n: "04",
    t: "Autonomia Cognitiva e Improviso",
    d: "A tradução mental e o ensaio antes de falar desaparecem. Quando falta uma palavra, o aprendiz improvisa. Legendas viram opcionais. Ainda há erros e alguma perda em tópicos abstratos, mas o fluxo é natural.",
  },
  {
    n: "05",
    t: "Ancoragem Permanente",
    d: "O nível da fixação vitalícia. A língua se ancora de tal forma que você pode parar por anos e não esquecer. Mídia nativa flui sem esforço, nativos não trocam mais de idioma. A língua é vivida e não mais apenas estudada.",
  },
  {
    n: "06",
    t: "Versatilidade Dialetal e Regional",
    d: "O idioma deixa de ser monolítico. O aprendiz entende sotaques fortes, variantes regionais e gírias locais sem pedir para repetir - seus ouvidos abraçam o ecossistema completo, mesmo que ele não fale todos os dialetos.",
  },
  {
    n: "07",
    t: "Integração e Pertencimento",
    d: "O topo. Ninguém mais lembra que o aprendiz é estrangeiro - e isso tem a ver com pertencimento, não perfeição. Suas piadas funcionam pelo conteúdo e o sotaque, se ainda existe, tornou-se irrelevante.",
  },
];

export function BonusNiveis() {
  const [activeNivel, setActiveNivel] = useState(0);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });
    try {
      const res = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        setStatus({
          type: "error",
          message: data?.error || "Não consegui enviar o guia agora. Tenta de novo em instantes.",
        });
        return;
      }
      setStatus({
        type: "success",
        message: `Guia tá a caminho! Confere sua caixa de entrada (${email}).`,
      });
      setEmail("");
    } catch {
      setStatus({
        type: "error",
        message: "Erro de conexão. Tenta de novo em instantes.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="bonus" kicker="Já que você chegou até aqui" accent="sage">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
        <div>
          <h2 className="title-section">Um presente pra você que chegou até aqui.</h2>
          <p className="lead mt-5 text-creme/85">
            Não saber em que nível você está é parte do motivo de você não avançar e pra te ajudar
            nisso, trazemos aqui um pequeno guia abordando os Sete Níveis de Proficiência de
            qualquer idioma.
          </p>

          <div className="prose-mapa mt-6 space-y-4 text-[1.02rem]">
            <p>
              Não é um PDF de duas páginas. É um guia extenso, em que a fluência aparece dividida em
              sete níveis distintos, cada um com respaldo em pesquisa científica - porque cada nível
              corresponde a um estágio cognitivo, neurológico e sociocultural que se repete em
              qualquer idioma e em qualquer pessoa.
            </p>
            <p>
              Nele você entende o que muda dentro da sua cabeça em cada estágio, o que costuma
              travar a passagem para o seguinte e por que tanta gente acha que estagnou quando na
              verdade está no meio de uma transição. Serve para você localizar onde parou de verdade
              - mesmo que a gente nunca converse.
            </p>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-sage/25 bg-navy-card/70 p-2 shadow-2xl">
            <img
              src={mockupGuia}
              alt="Mockup do guia dos Sete Níveis de Proficiência"
              loading="lazy"
              className="h-auto w-full rounded-xl"
            />
          </div>
          <figcaption className="kicker mt-4 text-[0.68rem] leading-relaxed text-sage/90">
            sete níveis num só material · para localizar onde você parou
          </figcaption>
        </figure>
      </div>

      {/* 7 Níveis Interactive Component */}
      <div className="mt-10 rounded-2xl border border-sage/30 bg-navy-card/80 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-sage" />
            <span className="font-serif text-sm font-semibold uppercase tracking-wider text-sage">
              Explorar os 7 Níveis Cognitivos
            </span>
          </div>
          <span className="text-xs text-creme/50">Nível {activeNivel + 1} de 7</span>
        </div>

        {/* Level Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {NIVEIS.map((n, idx) => (
            <button
              key={n.n}
              onClick={() => setActiveNivel(idx)}
              className={`rounded-lg px-3.5 py-2 font-serif text-sm font-bold transition-all ${
                activeNivel === idx
                  ? "bg-terracota text-creme shadow-md shadow-terracota/20 scale-105"
                  : "bg-navy-deep/60 text-creme/70 hover:bg-navy-deep hover:text-creme"
              }`}
            >
              {n.n}. {n.t}
            </button>
          ))}
        </div>

        {/* Selected Level Display */}
        {(() => {
          const current = NIVEIS[activeNivel] ?? NIVEIS[0]!;
          return (
            <div className="mt-6 rounded-xl border border-terracota/20 bg-navy-deep/90 p-5 sm:p-6 transition-all">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-bold text-terracota">{current.n}</span>
                <h4 className="font-sans text-lg font-bold text-creme">{current.t}</h4>
              </div>
              <p className="prose-mapa mt-3 text-[1rem] leading-relaxed text-creme/90">
                {current.d}
              </p>
            </div>
          );
        })()}
      </div>

      {/* Formulário */}
      <div className="mt-12">
        <p className="prose-mapa text-[1.02rem] leading-relaxed text-creme/85">
          É um guia para usar, não para acumular: dá para ler numa pausa do dia ou no trajeto para o
          trabalho e, antes de terminar, você já sai com clareza do seu próximo passo no idioma.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <label htmlFor="email-guia" className="kicker block text-sage">
            receber o guia completo por e-mail
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="email-guia"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
              className="w-full rounded-md border border-input bg-navy-deep px-4 py-3.5 font-sans text-base text-creme placeholder:text-creme/35 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/40 transition-all"
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-sage px-6 py-3.5 font-sans text-base font-semibold text-accent-foreground transition-all hover:bg-sage/90 active:scale-[0.98] disabled:opacity-70 cursor-pointer shadow-md"
            >
              {submitting ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <span>Quero o guia</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
          <p className="mt-3 font-sans text-[0.82rem] text-creme/45">
            Só o guia e, de vez em quando, algo que eu ache que vale seu tempo. Nada de disparo
            diário.
          </p>
          {status.type !== "idle" && (
            <p
              role="status"
              className={`mt-3 font-sans text-[0.9rem] font-medium ${
                status.type === "success" ? "text-sage" : "text-terracota"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
