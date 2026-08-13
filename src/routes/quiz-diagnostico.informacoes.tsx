"use client";

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { useQuiz } from "@/components/quiz/quiz-context";
import { LANGUAGE_OPTIONS, OTHER_LANGUAGE } from "@/components/quiz/quiz-data";

export const Route = createFileRoute("/quiz-diagnostico/informacoes")({
  head: () => ({
    meta: [
      { title: "Suas informações · Quiz Diagnóstico · MAPA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: QuizInfo,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function QuizInfo() {
  const { setInfo, advanceTo } = useQuiz();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [otherLanguage, setOtherLanguage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; language?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const showOther = language === OTHER_LANGUAGE;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    const finalLanguage = showOther ? otherLanguage.trim() : language;

    if (!name.trim()) nextErrors.name = "Preencha seu nome.";
    if (!email.trim()) nextErrors.email = "Preencha seu e-mail.";
    else if (!EMAIL_RE.test(email.trim())) nextErrors.email = "Esse e-mail não parece válido.";
    if (!finalLanguage) {
      nextErrors.language = showOther
        ? "Descreva o idioma que você estuda."
        : "Escolha o idioma que você estuda.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      const body = new URLSearchParams({
        "form-name": "quiz-lead",
        "bot-field": "",
        name: name.trim(),
        email: email.trim(),
        idioma: finalLanguage,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: body.toString(),
      });

      if (!res.ok) throw new Error("falha no envio");

      setInfo({ name: name.trim(), email: email.trim(), language: finalLanguage });
      advanceTo(2);
      navigate({ to: "/quiz-diagnostico/bloco-1" });
    } catch {
      setSubmitError("Não consegui enviar agora. Tenta de novo em instantes.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-md border border-input bg-navy-deep px-4 py-3.5 font-sans text-base text-creme placeholder:text-creme/35 transition-all focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/40";

  return (
    <div className="editorial-card rounded-2xl border border-sage/25 bg-navy-card/60 p-6 sm:p-10">
      <p className="kicker text-sage">Suas informações</p>
      <h1 className="title-section mt-4">Pra sabermos pra qual idioma ajustar as perguntas.</h1>
      <p className="prose-mapa mt-5 text-[1rem]">
        O idioma que você escolher aparece nas perguntas - e é o que usamos para deixar o seu
        resultado no seu contexto. Nada de spam depois disso.
      </p>

      <form
        name="quiz-lead"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        className="mt-9 space-y-6"
      >
        <input type="hidden" name="form-name" value="quiz-lead" />
        <p className="hidden" aria-hidden="true">
          <label>
            Não preencha este campo <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <div>
          <label htmlFor="quiz-nome" className="kicker block text-sage">
            Nome
          </label>
          <input
            id="quiz-nome"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            autoComplete="name"
            className={`mt-3 ${inputClass}`}
          />
          {errors.name && (
            <p role="alert" className="mt-2 font-sans text-sm font-medium text-terracota">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quiz-email" className="kicker block text-sage">
            E-mail
          </label>
          <input
            id="quiz-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            className={`mt-3 ${inputClass}`}
          />
          {errors.email && (
            <p role="alert" className="mt-2 font-sans text-sm font-medium text-terracota">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quiz-idioma" className="kicker block text-sage">
            Idioma que você está estudando no momento
          </label>
          <select
            id="quiz-idioma"
            name="idioma"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setOtherLanguage("");
            }}
            className={`mt-3 ${inputClass} appearance-none`}
          >
            <option value="" disabled>
              Selecione um idioma
            </option>
            {LANGUAGE_OPTIONS.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
            <option value={OTHER_LANGUAGE}>{OTHER_LANGUAGE}</option>
          </select>
          {errors.language && (
            <p role="alert" className="mt-2 font-sans text-sm font-medium text-terracota">
              {errors.language}
            </p>
          )}

          {showOther && (
            <div className="mt-4">
              <label htmlFor="quiz-outro-idioma" className="kicker block text-sage">
                Qual idioma?
              </label>
              <input
                id="quiz-outro-idioma"
                type="text"
                value={otherLanguage}
                onChange={(e) => setOtherLanguage(e.target.value)}
                placeholder="Ex.: Queniano, Persa..."
                className={`mt-3 ${inputClass}`}
              />
            </div>
          )}
        </div>

        {submitError && (
          <p
            role="alert"
            className="rounded-lg border border-terracota/40 bg-terracota/10 px-4 py-3 font-sans text-sm font-medium text-terracota"
          >
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-terracota px-6 py-4 font-sans text-base font-semibold text-creme shadow-md shadow-terracota/20 transition-all hover:bg-terracota/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Começar o quiz
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="font-sans text-[0.82rem] text-creme/45">
          Seus dados vão direto pro nosso formulário - usamos só pra personalizar sua jornada no
          MAPA.
        </p>
      </form>
    </div>
  );
}
