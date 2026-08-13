"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "mapa-quiz-diagnostico-v1";

export type QuizState = {
  name: string;
  email: string;
  language: string;
  answers: Record<string, number>;
  step: number;
};

export const DEFAULT_QUIZ_STATE: QuizState = {
  name: "",
  email: "",
  language: "",
  answers: {},
  step: 1,
};

type QuizContextValue = {
  state: QuizState;
  hydrated: boolean;
  setInfo: (info: Pick<QuizState, "name" | "email" | "language">) => void;
  setLanguage: (language: string) => void;
  setAnswer: (questionId: string, points: number) => void;
  advanceTo: (step: number) => void;
  reset: () => void;
  total: number;
};

const QuizContext = createContext<QuizContextValue | null>(null);

function readStoredState(): QuizState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const p = parsed as Partial<QuizState>;
    return {
      name: typeof p.name === "string" ? p.name : "",
      email: typeof p.email === "string" ? p.email : "",
      language: typeof p.language === "string" ? p.language : "",
      answers:
        p.answers && typeof p.answers === "object" ? (p.answers as Record<string, number>) : {},
      step: typeof p.step === "number" ? Math.max(1, Math.min(6, Math.round(p.step))) : 1,
    };
  } catch {
    return null;
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizState>(DEFAULT_QUIZ_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredState();
    if (stored) setState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // armazenamento indisponível: segue com estado em memória
    }
  }, [state, hydrated]);

  const value = useMemo<QuizContextValue>(
    () => ({
      state,
      hydrated,
      setInfo: (info) => setState((prev) => ({ ...prev, ...info })),
      setLanguage: (language) => setState((prev) => ({ ...prev, language })),
      setAnswer: (questionId, points) =>
        setState((prev) => ({
          ...prev,
          answers: { ...prev.answers, [questionId]: points },
        })),
      advanceTo: (step) => setState((prev) => ({ ...prev, step: Math.max(prev.step, step) })),
      reset: () => {
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch {
          // ignore
        }
        setState(DEFAULT_QUIZ_STATE);
      },
      total: Object.values(state.answers).reduce((acc, value) => acc + value, 0),
    }),
    [state, hydrated],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz deve ser usado dentro de <QuizProvider>");
  return ctx;
}
