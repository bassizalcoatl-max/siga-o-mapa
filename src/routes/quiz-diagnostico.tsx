import { createFileRoute, Outlet } from "@tanstack/react-router";

import { QuizProvider } from "@/components/quiz/quiz-context";
import { QuizShell } from "@/components/quiz/quiz-shell";

export const Route = createFileRoute("/quiz-diagnostico")({
  head: () => ({
    meta: [
      { title: "Quiz Diagnóstico · MAPA" },
      {
        name: "description",
        content:
          "Um diagnóstico de autopercepção para descobrir em que ponto da jornada você está num idioma.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: QuizDiagnosticoLayout,
});

function QuizDiagnosticoLayout() {
  return (
    <QuizProvider>
      <QuizShell>
        <Outlet />
      </QuizShell>
    </QuizProvider>
  );
}
