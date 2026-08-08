import type { ReactNode } from "react";

/** Número de WhatsApp — substituir SEUNUMERO pelo número real (ex: 5511999999999). */
export const WHATSAPP_URL = "https://wa.me/SEUNUMERO";
export const CONTACT_EMAIL = "contato@metodomapa.com";

/** Placeholder de logo — trocar pelo SVG real. */
export function LogoPlaceholder({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const label = size === "lg" ? "text-lg" : "text-base";
  return (
    <span className="flex items-center gap-3" data-logo-placeholder>
      <span
        className={`${box} grid shrink-0 place-items-center rounded-sm border border-terracota/60 font-serif text-terracota`}
        aria-hidden="true"
      >
        <span className="text-sm font-bold tracking-tight">M</span>
      </span>
      <span className="min-w-0">
        <span className={`${label} block font-serif font-bold leading-none tracking-tight`}>
          MAPA
        </span>
        <span className="kicker block text-[0.58rem] leading-none text-sage">
          método do poliglota autodidata
        </span>
      </span>
    </span>
  );
}

export function WhatsAppCta({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-4 text-center font-sans text-base font-semibold leading-snug transition-colors sm:w-auto";
  const skin =
    variant === "solid"
      ? "bg-terracota text-primary-foreground active:bg-terracota/85 sm:hover:bg-terracota/90"
      : "border border-sage/70 text-creme active:bg-sage/20 sm:hover:bg-sage/15";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${skin} ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * Seção ancorada na Rota: filete vertical discreto na lateral com um marco
 * (nó) no início de cada seção.
 */
export function Section({
  id,
  kicker,
  accent = "terracota",
  children,
}: {
  id: string;
  kicker?: string;
  accent?: "terracota" | "sage" | "ocre" | "plum";
  children: ReactNode;
}) {
  const accentText = {
    terracota: "text-terracota",
    sage: "text-sage",
    ocre: "text-ocre",
    plum: "text-plum",
  }[accent];

  return (
    <section id={id} className="relative scroll-mt-20 py-16 sm:py-24">
      <span aria-hidden="true" className="route-node" />
      <div className="pl-6 sm:pl-14">
        {kicker ? <p className={`kicker mb-5 ${accentText}`}>{kicker}</p> : null}
        {children}
      </div>
    </section>
  );
}