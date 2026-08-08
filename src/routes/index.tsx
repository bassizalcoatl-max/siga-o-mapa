import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <div className="min-h-screen bg-navy text-creme">
      <header className="sticky top-0 z-40 border-b border-border bg-navy/92 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
          <a href="#top" className="min-w-0">
            <LogoPlaceholder />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-[0.86rem] text-creme/65 transition-colors hover:text-creme"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-terracota/70 px-4 py-2 font-sans text-[0.82rem] font-semibold text-terracota md:hidden"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* A Rota: filete vertical discreto que atravessa a página. */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="hero-draw pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-terracota/70 via-terracota/40 to-terracota/15"
            style={{ animationDelay: "0.1s" }}
          />

          <section className="relative py-20 sm:py-28">
            <RouteNode />
            <div className="pl-6 sm:pl-14">
              <p
                className="kicker hero-rise text-sage"
                style={{ animationDelay: "0.25s" }}
              >
                Método de Aprendizado do Poliglota Autodidata
              </p>
              <h1 className="headline mt-6 max-w-[19ch]">
                <span className="hero-rise block" style={{ animationDelay: "0.4s" }}>
                  Se você já tentou
                </span>
                <span className="hero-rise block" style={{ animationDelay: "0.55s" }}>
                  <em className="text-terracota">e travou</em>, ou nunca
                </span>
                <span className="hero-rise block" style={{ animationDelay: "0.7s" }}>
                  soube por onde começar.
                </span>
              </h1>
              <p
                className="lead hero-rise mt-7 max-w-[30ch] text-creme/85"
                style={{ animationDelay: "0.9s" }}
              >
                Mentoria individual de idiomas, construída a partir da sua rotina e não de um
                cronograma pronto.
              </p>
              <p
                className="hero-rise mt-6 max-w-[44ch] border-l border-sage/50 pl-4 font-sans text-[0.92rem] leading-relaxed text-creme/60"
                style={{ animationDelay: "1.05s" }}
              >
                Nenhuma data de fluência prometida, nenhum prazo genérico, nenhuma fórmula. Um
                diagnóstico primeiro — uma call de 30 minutos, que a gente marca pelo WhatsApp — e um
                caminho depois: o seu.
              </p>
              <div
                className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "1.2s" }}
              >
                <WhatsAppCta>Chama no WhatsApp pra marcar o diagnóstico</WhatsAppCta>
                <span className="font-sans text-[0.82rem] text-creme/45">
                  Call de 30 minutos, gratuita e sem compromisso.
                </span>
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

      <footer className="border-t border-border bg-navy-deep">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <LogoPlaceholder size="lg" />
          <p className="lead mt-8 max-w-[26ch] text-creme">
            O primeiro passo é uma conversa, não uma compra.
          </p>
          <div className="mt-7">
            <WhatsAppCta variant="outline">
              Chama no WhatsApp pra marcar o diagnóstico
            </WhatsAppCta>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-7 font-sans text-[0.85rem] text-creme/50 sm:flex-row sm:items-center sm:justify-between">
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
