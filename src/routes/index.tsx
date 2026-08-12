import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { MessageCircle, Menu, X as CloseIcon, Compass, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

import {
  CONTACT_EMAIL,
  LogoPlaceholder,
  RouteNode,
  WhatsAppCta,
  WHATSAPP_URL,
} from "@/components/mapa/primitives";
import {
  BonusNiveis,
  ComoEMentoria,
  ComoFunciona,
  Diagnostico,
  Faq,
  OQueNaoE,
  ParaQuem,
  ProblemaReal,
  ProvaViva,
} from "@/components/mapa/sections";

const DESCRIPTION =
  "Mentoria individual de idiomas para quem já tentou e travou ou nunca soube por onde começar. Sem promessa de fluência, sem prazo genérico. Diagnóstico gratuito: uma call de 30 minutos marcada pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAPA · Método de Aprendizado do Poliglota Autodidata" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "MAPA · Método de Aprendizado do Poliglota Autodidata",
      },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#para-quem", label: "Para quem" },
  { href: "#prova-viva", label: "Quem sou" },
  { href: "#metodo", label: "Método" },
  { href: "#faq", label: "Perguntas" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-creme selection:bg-terracota selection:text-creme">
      <Toaster position="bottom-right" theme="dark" />

      {/* Header Sticky */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-navy-deep/88 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="#top" className="min-w-0">
            <LogoPlaceholder />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-[0.88rem] font-medium text-creme/70 transition-colors hover:text-creme"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppCta variant="solid" className="py-2 px-4 text-xs font-semibold">
              WhatsApp
            </WhatsAppCta>
          </nav>

          {/* Mobile Menu Toggle & WhatsApp button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-terracota/70 bg-terracota/10 px-3.5 py-1.5 font-sans text-xs font-semibold text-terracota active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md border border-border/50 p-2 text-creme/80 hover:bg-navy-raised"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-border/50 bg-navy-card/95 px-6 py-5 md:hidden backdrop-blur-lg">
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-medium text-creme/90 transition-colors hover:text-terracota"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <WhatsAppCta variant="solid" className="w-full">
                  Chama no WhatsApp
                </WhatsAppCta>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* A Rota: filete vertical discreto que atravessa a página. */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="hero-draw pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-terracota/80 via-terracota/40 to-terracota/10"
            style={{ animationDelay: "0.1s" }}
          />

          {/* Hero Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
            <RouteNode className="top-14 sm:top-[4.5rem] lg:top-[5.5rem]" />
            
            <div className="pl-6 sm:pl-14">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                {/* Text column */}
                <div className="lg:col-span-7">
                  <p
                    className="kicker hero-rise inline-block rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1 text-sage"
                    style={{ animationDelay: "0.25s" }}
                  >
                    Método de Aprendizado do Poliglota Autodidata
                  </p>
                  
                  <h1 className="headline mt-6 max-w-[20ch]">
                    <span className="hero-rise block" style={{ animationDelay: "0.4s" }}>
                      Se você já tentou
                    </span>
                    <span className="hero-rise block" style={{ animationDelay: "0.55s" }}>
                      <em className="text-terracota font-serif italic">e travou</em>, ou nunca
                    </span>
                    <span className="hero-rise block" style={{ animationDelay: "0.7s" }}>
                      soube por onde começar.
                    </span>
                  </h1>

                  <p
                    className="lead hero-rise mt-7 max-w-[32ch] text-creme/90"
                    style={{ animationDelay: "0.9s" }}
                  >
                    Mentoria individual de idiomas, construída a partir da sua rotina e não de um
                    cronograma pronto.
                  </p>

                  <p
                    className="hero-rise mt-6 max-w-[46ch] border-l-2 border-sage/60 bg-navy-card/40 p-4 font-sans text-[0.95rem] leading-relaxed text-creme/75 rounded-r-lg"
                    style={{ animationDelay: "1.05s" }}
                  >
                    Nenhuma data de fluência prometida, nenhum prazo genérico, nenhuma fórmula. Um
                    diagnóstico primeiro - uma call de 30 minutos, que a gente marca pelo WhatsApp - e um
                    caminho depois: o seu.
                  </p>

                  <div
                    className="hero-rise mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <WhatsAppCta variant="solid">
                      Chama no WhatsApp pra marcar o diagnóstico
                    </WhatsAppCta>
                    <span className="font-sans text-[0.84rem] text-creme/50 italic">
                      Call de 30 minutos, gratuita e sem compromisso.
                    </span>
                  </div>
                </div>

                {/* Visual Feature Card (Map Milestone Preview) */}
                <div className="lg:col-span-5 hero-rise lg:mt-12" style={{ animationDelay: "1.35s" }}>
                  <div className="editorial-card relative overflow-hidden rounded-2xl border border-terracota/25 bg-gradient-to-b from-navy-card via-navy-raised to-navy-deep p-6 shadow-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-4">
                      <div className="flex items-center gap-2">
                        <Compass className="h-5 w-5 shrink-0 text-terracota" />
                        <span className="whitespace-nowrap font-serif text-sm font-bold text-creme">A Jornada no MAPA</span>
                      </div>
                      <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-sage/20 px-2.5 py-0.5 text-[0.7rem] font-semibold text-sage">
                        <span className="h-1.5 w-1.5 rounded-full bg-sage animate-ping" />
                        Mentoria Individual
                      </span>
                    </div>

                    <div className="mt-5 space-y-4 font-sans text-xs">
                      <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-navy-deep/60 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracota/20 font-serif font-bold text-terracota">1</span>
                        <div>
                          <p className="font-semibold text-creme">Diagnóstico Inicial (30m)</p>
                          <p className="text-creme/60">Análise honesta da sua rotina e histórico com idiomas.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-navy-deep/60 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 font-serif font-bold text-sage">2</span>
                        <div>
                          <p className="font-semibold text-creme">Construção da Rota Pessoal</p>
                          <p className="text-creme/60">Um sistema adaptado à sua vida real, sem listas decoradas.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-navy-deep/60 p-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocre/20 font-serif font-bold text-ocre">3</span>
                        <div>
                          <p className="font-semibold text-creme">Acompanhamento Humano Próximo</p>
                          <p className="text-creme/60">Conversas diretas e suporte contínuo para destravar o progresso.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-border/40 pt-4 text-center">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracota hover:underline"
                      >
                        <span>Marcar call de 30min pelo WhatsApp</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ParaQuem />
          <ProblemaReal />
          <ProvaViva />
          <ComoFunciona />
          <ComoEMentoria />
          <OQueNaoE />
          <Diagnostico />
          <Faq />
          <BonusNiveis />
        </div>
      </main>

      {/* Floating WhatsApp Sticky Bar */}
      <div
        className={`fixed bottom-6 left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 transition-all duration-500 ${
          showFloatingCta ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between gap-3 rounded-full border border-terracota/40 bg-navy-deep/95 p-2 pl-4 shadow-2xl backdrop-blur-xl">
          <div className="min-w-0">
            <p className="text-xs font-bold text-creme">Diagnóstico Gratuito</p>
            <p className="truncate text-[0.72rem] text-creme/65">Call de 30min marcada pelo WhatsApp</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-terracota px-4 py-2.5 font-sans text-xs font-bold text-creme hover:bg-terracota/90 transition-transform active:scale-95 shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chamar</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-navy-deep py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <LogoPlaceholder size="lg" />
              <p className="lead mt-6 max-w-[26ch] text-creme/90">
                O primeiro passo é uma conversa, não uma compra.
              </p>
            </div>
            <div>
              <WhatsAppCta variant="outline">
                Chama no WhatsApp pra marcar o diagnóstico
              </WhatsAppCta>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-border/40 pt-8 font-sans text-[0.85rem] text-creme/50 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-creme"
            >
              {CONTACT_EMAIL}
            </a>
            <span>MAPA · Método de Aprendizado do Poliglota Autodidata</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

