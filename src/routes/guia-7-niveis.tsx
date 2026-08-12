import { createFileRoute } from "@tanstack/react-router";
import { Download, MessageCircle } from "lucide-react";

import pdf from "@/assets/Ebook.pdf";
import { LogoPlaceholder, WhatsAppCta, WHATSAPP_URL } from "@/components/mapa/primitives";

export const Route = createFileRoute("/guia-7-niveis")({
  head: () => ({
    meta: [
      { title: "Guia dos 7 Níveis · MAPA" },
      {
        name: "description",
        content:
          "Seu guia dos Sete Níveis de Proficiência está aqui. Leia direto na página ou baixe o PDF.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: GuiaPage,
});

function GuiaPage() {
  return (
    <div className="min-h-screen bg-navy text-creme selection:bg-terracota selection:text-creme">
      <header className="border-b border-border/60 bg-navy-deep/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="/" aria-label="Voltar para a página inicial do MAPA">
            <LogoPlaceholder />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-terracota/70 bg-terracota/10 px-3.5 py-1.5 text-xs font-semibold text-terracota transition-all active:scale-95"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="font-sans">WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-2xl">
          <p className="kicker inline-block rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1 text-sage">
            Seu presente
          </p>
          <h1 className="headline mt-6">Sete níveis, um só caminho de volta pro idioma.</h1>
          <p className="lead mt-7 text-creme/90">
            Este guia foi escrito pra você que percorreu a página até o fim. Leia aqui mesmo ou
            baixe e guarde — o download é seu, sem pedir e-mail.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-sage/25 bg-navy-raised/60 p-2 shadow-2xl">
          <iframe
            src={pdf}
            title="Guia dos Sete Níveis de Proficiência"
            className="h-[68vh] min-h-[420px] w-full rounded-xl bg-white"
          />
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={pdf}
            download="guia-7-niveis.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-sage px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:bg-sage/90 active:scale-[0.98]"
          >
            <Download className="h-4 w-4" />
            Baixar o PDF
          </a>
          <span className="text-sm text-creme/60">
            Sem e-mail, sem pegadinha. É só o guia na sua mão.
          </span>
        </div>

        <div className="mt-14 max-w-2xl">
          <h2 className="title-section">
            Se quiser ir além do mapa, existe um caminho acompanhado.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-creme/85">
            O guia te dá o mapa. A mentoria te dá quem percorre ele junto de você: um diagnóstico
            gratuito pelo WhatsApp e um plano construído na sua rotina real — não em cronograma
            genérico.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <WhatsAppCta variant="solid">Chama no WhatsApp pra marcar o diagnóstico</WhatsAppCta>
            <p className="text-sm italic text-creme/55">
              Call de 30 minutos, gratuita e sem compromisso.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/60 bg-navy-deep py-10">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-[0.82rem] text-creme/45">
            © 2026 MAPA · Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
