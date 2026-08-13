import { createFileRoute } from "@tanstack/react-router";

import { BlockFlow } from "@/components/quiz/block-flow";

export const Route = createFileRoute("/quiz-diagnostico/bloco-3")({
  head: () => ({
    meta: [
      { title: "Bloco 3 - Aspectos Socioculturais · Quiz Diagnóstico · MAPA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Bloco3,
});

function Bloco3() {
  return <BlockFlow blockIndex={2} />;
}
