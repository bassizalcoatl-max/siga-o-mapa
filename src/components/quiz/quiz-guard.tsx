"use client";

import { useNavigate } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { useQuiz } from "@/components/quiz/quiz-context";

export function RequireStep({ minStep, children }: { minStep: number; children: ReactNode }) {
  const { state, hydrated } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hydrated) return;
    if (state.step < minStep) {
      navigate({ to: "/quiz-diagnostico" });
    }
  }, [hydrated, state.step, minStep, navigate]);

  if (!hydrated || state.step < minStep) return null;

  return <>{children}</>;
}
