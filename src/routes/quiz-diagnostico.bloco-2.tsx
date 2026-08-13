import { createFileRoute } from "@tanstack/react-router";

import { BlockFlow } from "@/components/quiz/block-flow";

export const Route = createFileRoute("/quiz-diagnostico/bloco-2")({
  head: () => ({
    meta: [
      { title: "Bloco 2 - Aspectos Neurológicos · Quiz Diagnóstico · MAPA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Bloco2,
});

function Bloco2() {
  return <BlockFlow blockIndex={1} />;
}
