"use client";

import { useLocation } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import { LogoPlaceholder, WHATSAPP_URL } from "@/components/mapa/primitives";

export const QUIZ_STEPS: { path: string; label: string }[] = [
  { path: "/quiz-diagnostico", label: "Antes de começar" },
  { path: "/quiz-diagnostico/informacoes", label: "Informações" },
  { path: "/quiz-diagnostico/bloco-1", label: "Bloco 1" },
  { path: "/quiz-diagnostico/bloco-2", label: "Bloco 2" },
  { path: "/quiz-diagnostico/bloco-3", label: "Bloco 3" },
  { path: "/quiz-diagnostico/resultado", label: "Resultado" },
];

function stepFromPathname(pathname: string): number {
  const idx = QUIZ_STEPS.findIndex((step) => step.path === pathname);
  return idx === -1 ? 1 : idx + 1;
}

export function QuizShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const step = stepFromPathname(pathname);

  return (
    <div className="min-h-screen bg-navy text-creme selection:bg-terracota selection:text-creme">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-navy-deep/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="/" aria-label="Voltar para a página inicial do MAPA" className="min-w-0">
            <LogoPlaceholder />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-terracota/70 bg-terracota/10 px-3.5 py-1.5 text-xs font-semibold text-terracota transition-all active:scale-95"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="font-sans">WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-10">
          <div className="flex items-center justify-between gap-3">
            <p className="kicker text-sage">Quiz diagnóstico · MAPA</p>
            <p className="font-sans text-xs font-semibold text-creme/60">
              Etapa {step} de {QUIZ_STEPS.length}
            </p>
          </div>
          <div className="mt-3 flex gap-1.5" aria-hidden="true">
            {QUIZ_STEPS.map((item, idx) => {
              const filled = idx < step;
              const active = idx === step - 1;
              return (
                <span
                  key={item.path}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                    active
                      ? "bg-terracota shadow-[0_0_10px_rgba(217,107,67,0.6)]"
                      : filled
                        ? "bg-terracota/50"
                        : "bg-border/40"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {children}
      </main>

      <footer className="border-t border-border/60 bg-navy-deep py-8">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="font-sans text-[0.82rem] text-creme/45">
            © 2026 MAPA · Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
