import { createFileRoute } from "@tanstack/react-router";

import { BlockFlow } from "@/components/quiz/block-flow";

export const Route = createFileRoute("/quiz-diagnostico/bloco-1")({
  head: () => ({
    meta: [
      { title: "Bloco 1 - Aspectos Cognitivos · Quiz Diagnóstico · MAPA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Bloco1,
});

function Bloco1() {
  return <BlockFlow blockIndex={0} />;
}
