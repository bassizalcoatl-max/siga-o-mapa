"use client";

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Compass, MessageCircle, RotateCcw } from "lucide-react";

import { RequireStep } from "@/components/quiz/quiz-guard";
import { useQuiz } from "@/components/quiz/quiz-context";
import { getLevel } from "@/components/quiz/quiz-data";
import { WHATSAPP_URL } from "@/components/mapa/primitives";

export const Route = createFileRoute("/quiz-diagnostico/resultado")({
  head: () => ({
    meta: [
      { title: "Seu resultado · Quiz Diagnóstico · MAPA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: QuizResult,
});

function QuizResult() {
  const { state, total, reset } = useQuiz();
  const navigate = useNavigate();

  const level = getLevel(total);
  const waNumber = WHATSAPP_URL.replace(/^https:\/\/wa\.me\//, "");
  const waMessage = `Fiz o quiz diagnóstico do MAPA e estou no nível ${level.name}. Quero continuar minha jornada!`;
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  const handleRestart = () => {
    reset();
    navigate({ to: "/quiz-diagnostico" });
  };

  return (
    <RequireStep minStep={5}>
      <div className="editorial-card rounded-2xl border border-sage/25 bg-navy-card/60 p-6 sm:p-10">
        <p className="kicker text-sage">Seu resultado</p>

        <div className="mt-6 flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-terracota/15 text-terracota">
            <Compass className="h-6 w-6" />
          </span>
          <div>
            <h1 className="title-section">Nível {level.name}</h1>
            <p className="mt-2 font-sans text-sm text-creme/55">
              {state.name ? `${state.name}, e` : "Este"} é o seu retrato de agora - não uma nota,
              não um prazo.
            </p>
          </div>
        </div>

        <div className="mt-9 space-y-7">
          <div>
            <h2 className="kicker text-ocre">Onde você está</h2>
            <p className="prose-mapa mt-3 text-[1.02rem] leading-relaxed">{level.ondeVoceEsta}</p>
          </div>

          <div>
            <h2 className="kicker text-sage">Seus próximos passos</h2>
            <p className="prose-mapa mt-3 text-[1.02rem] leading-relaxed">{level.proximosPassos}</p>
          </div>

          <div>
            <h2 className="kicker text-terracota">Como o MAPA ajuda</h2>
            <p className="prose-mapa mt-3 text-[1.02rem] leading-relaxed">{level.comoMapaAjuda}</p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-terracota/30 bg-gradient-to-br from-navy-card via-navy-raised to-navy-deep p-6 sm:p-8">
          <p className="title-sub text-creme">E se esse retrato for só o começo?</p>
          <p className="prose-mapa mt-3 text-[0.98rem] leading-relaxed">
            {level.cta} Uma mentoria começa com um diagnóstico de 30 minutos, sem compromisso - pra
            a gente desenhar o caminho a partir de onde você está, não de onde todo mundo acha que
            você deveria estar.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-terracota px-6 py-4 font-sans text-base font-semibold text-creme shadow-md shadow-terracota/20 transition-all hover:bg-terracota/90 active:scale-[0.98] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
            Chama no WhatsApp
          </a>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-creme/60 transition-colors hover:text-creme"
          >
            <RotateCcw className="h-4 w-4" />
            Refazer o quiz
          </button>
        </div>
      </div>
    </RequireStep>
  );
}
