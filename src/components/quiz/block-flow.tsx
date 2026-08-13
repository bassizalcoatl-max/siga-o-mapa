"use client";

import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import { RequireStep } from "@/components/quiz/quiz-guard";
import { useQuiz } from "@/components/quiz/quiz-context";
import { BLOCKS } from "@/components/quiz/quiz-data";

const BACK_PATHS = [
  "/quiz-diagnostico/informacoes",
  "/quiz-diagnostico/bloco-1",
  "/quiz-diagnostico/bloco-2",
] as const;

const NEXT_PATHS = [
  "/quiz-diagnostico/bloco-2",
  "/quiz-diagnostico/bloco-3",
  "/quiz-diagnostico/resultado",
] as const;

const REQUIRED_STEPS = [2, 3, 4] as const;

export function BlockFlow({ blockIndex }: { blockIndex: 0 | 1 | 2 }) {
  const { state, setAnswer, advanceTo } = useQuiz();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const block = BLOCKS[blockIndex]!;
  const question = block.questions[current];

  const answered = question ? state.answers[question.id] !== undefined : false;
  const lang = state.language || "seu idioma";
  const totalQuestions = block.questions.length;

  const renderText = (text: string) => text.replace(/\[idioma\]/g, lang);

  if (!question) return null;

  const handleSelect = (points: number) => {
    setShowWarning(false);
    setAnswer(question.id, points);
  };

  const handleNext = () => {
    if (state.answers[question.id] === undefined) {
      setShowWarning(true);
      return;
    }
    if (current < totalQuestions - 1) {
      setShowWarning(false);
      setCurrent((idx) => idx + 1);
      return;
    }
    advanceTo(REQUIRED_STEPS[blockIndex]! + 1);
    navigate({ to: NEXT_PATHS[blockIndex] });
  };

  const handleBack = () => {
    if (current > 0) {
      setShowWarning(false);
      setCurrent((idx) => idx - 1);
      return;
    }
    navigate({ to: BACK_PATHS[blockIndex] });
  };

  return (
    <RequireStep minStep={REQUIRED_STEPS[blockIndex]!}>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="kicker inline-block rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1 text-sage">
            Bloco {block.number} - {block.title}
          </span>
          <span className="font-sans text-sm font-semibold text-creme/60">
            Pergunta {current + 1} de {totalQuestions}
          </span>
        </div>

        <div className="mt-4 flex gap-1.5" aria-hidden="true">
          {block.questions.map((q, idx) => {
            const isAnswered = state.answers[q.id] !== undefined;
            const isActive = idx === current;
            return (
              <span
                key={q.id}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-terracota" : isAnswered ? "bg-sage/60" : "bg-border/40"
                }`}
              />
            );
          })}
        </div>

        <h2 className="title-section mt-8">{renderText(question.text)}</h2>

        <div className="mt-8 space-y-3">
          {question.alternatives.map((alt) => {
            const selected = state.answers[question.id] === alt.points;
            return (
              <button
                key={alt.letter}
                type="button"
                onClick={() => handleSelect(alt.points)}
                className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left font-sans text-[0.98rem] leading-relaxed transition-all active:scale-[0.99] ${
                  selected
                    ? "border-terracota bg-terracota/15 text-creme shadow-md shadow-terracota/10"
                    : "border-border/40 bg-navy-card/50 text-creme/85 hover:border-sage/60 hover:bg-navy-raised"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold ${
                    selected ? "bg-terracota text-creme" : "bg-navy-deep text-creme/60"
                  }`}
                >
                  {alt.letter}
                </span>
                <span className="pt-1">{renderText(alt.text)}</span>
              </button>
            );
          })}
        </div>

        {showWarning && (
          <p
            role="alert"
            className="mt-5 rounded-lg border border-terracota/40 bg-terracota/10 px-4 py-3 font-sans text-sm font-medium text-terracota"
          >
            Selecione uma alternativa antes de avançar.
          </p>
        )}

        <div className="mt-9 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-md border border-border/50 bg-navy-raised/50 px-5 py-3 font-sans text-sm font-semibold text-creme/80 transition-all hover:bg-navy-raised hover:text-creme active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-md bg-terracota px-6 py-3 font-sans text-sm font-bold text-creme shadow-md shadow-terracota/20 transition-all hover:bg-terracota/90 active:scale-[0.98]"
          >
            {current < totalQuestions - 1 ? "Próxima" : "Ver resultado"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </RequireStep>
  );
}
