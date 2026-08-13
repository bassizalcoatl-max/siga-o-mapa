import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quiz-diagnostico/")({
  head: () => ({
    meta: [
      { title: "Antes de começar · Quiz Diagnóstico · MAPA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: QuizStart,
});

function QuizStart() {
  return (
    <div className="editorial-card rounded-2xl border border-sage/25 bg-navy-card/60 p-6 sm:p-10">
      <p className="kicker text-sage">Antes de começar</p>
      <h1 className="title-section mt-4">Em que ponto da sua jornada você está?</h1>

      <div className="prose-mapa mt-8 space-y-5 text-[1.02rem]">
        <p>
          <strong className="font-sans font-bold text-creme">
            Este quiz não mede o quanto você &quot;sabe&quot; o idioma - mede em que ponto da
            jornada você está agora, segundo uma arquitetura universal de sete níveis de
            proficiência possíveis num idioma.
          </strong>
        </p>

        <p>
          As 15 perguntas estão divididas em três blocos, na mesma lógica que sustenta a
          fundamentação científica desta arquitetura:
        </p>

        <p>
          <strong className="font-sans font-bold text-creme">Bloco 1 - Aspectos Cognitivos.</strong>{" "}
          Como sua cabeça processa a língua no instante em que você fala e escuta: se ainda traduz
          mentalmente, se consegue improvisar quando falta uma palavra, se acompanha uma conversa em
          grupo sem ficar um passo atrás.
        </p>

        <p>
          <strong className="font-sans font-bold text-creme">
            Bloco 2 - Aspectos Neurológicos.
          </strong>{" "}
          O quanto essa língua já está consolidada no seu cérebro, independente de esforço
          consciente: se você pensa nela sem querer, se esqueceria tudo numa pausa longa, se um
          sotaque forte ainda te derruba.
        </p>

        <p>
          <strong className="font-sans font-bold text-creme">
            Bloco 3 - Aspectos Socioculturais.
          </strong>{" "}
          Como você é tratado por quem fala essa língua desde sempre: se ainda simplificam a fala
          pra você, se seu humor funciona no idioma, se alguém ainda pergunta de onde você é.
        </p>

        <p>
          Essa divisão existe porque proficiência não é uma linha reta. É perfeitamente possível
          estar avançado no Bloco 1 e travar no Bloco 3 - ou o contrário. Cada bloco fica numa
          página separada de propósito, para que você responda um de cada vez, sem tentar adivinhar
          onde a pergunta seguinte quer chegar.
        </p>

        <p>
          <strong className="font-sans font-bold text-creme">Dica:</strong> Responda pensando no que
          você realmente faz hoje - não no que gostaria de fazer, nem no que fazia há alguns meses.
        </p>

        <p>
          <strong className="font-sans font-bold text-creme">Nota de honestidade:</strong> Isto é um
          instrumento de autopercepção, não um teste de proficiência validado ou um exame oficial.
          Ele existe para ajudar a pessoa a se situar na jornada de aprendizado e entender que tipo
          de apoio faz sentido para ela agora - não para certificar nada.
        </p>

        <p>
          O resultado não é um prazo, nem uma nota de prova, nem uma previsão de quanto tempo falta
          para você chegar a algum lugar. É um retrato de agora - e o ponto de partida para saber o
          que você precisa neste momento para alcançar suas metas com o idioma.
        </p>
      </div>

      <div className="mt-10">
        <Link
          to="/quiz-diagnostico/informacoes"
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-terracota px-6 py-4 text-center font-sans text-base font-semibold text-creme shadow-md shadow-terracota/20 transition-all hover:bg-terracota/90 active:scale-[0.98] sm:w-auto"
        >
          Começar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <p className="mt-4 font-sans text-[0.85rem] text-creme/50 italic">
          Leva uns 5 minutos. Não existe resposta certa.
        </p>
      </div>
    </div>
  );
}
