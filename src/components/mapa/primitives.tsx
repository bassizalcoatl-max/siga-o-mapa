import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "@/assets/mapa-logo.svg.asset.json";
import { MessageCircle, ArrowRight } from "lucide-react";

/** Número de WhatsApp - substituir SEUNUMERO pelo número real (ex: 5511999999999). */
export const WHATSAPP_URL = "https://wa.me/554488090350";
export const CONTACT_EMAIL = "contato@metodomapa.com";

export function LogoPlaceholder({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const label = size === "lg" ? "text-xl tracking-tight" : "text-base tracking-tight";
  return (
    <span className="group flex items-center gap-3.5 transition-transform duration-200 hover:scale-[1.01]">
      <div className="relative">
        <img
          src={logo.url}
          alt="MAPA"
          className={`${box} shrink-0 transition-transform duration-300 group-hover:rotate-6`}
        />
      </div>
      <span className="min-w-0">
        <span className={`${label} block font-serif font-bold leading-none text-creme`}>
          MAPA
        </span>
        <span className="kicker mt-1 block text-[0.56rem] leading-none text-sage/90 font-medium tracking-[0.2em]">
          método de aprendizado do poliglota autodidata
        </span>
      </span>
    </span>
  );
}

export function WhatsAppCta({
  children,
  variant = "solid",
  showIcon = true,
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  showIcon?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex w-full items-center justify-center gap-2.5 rounded-md px-6 py-4 text-center font-sans text-base font-semibold leading-snug transition-all duration-200 ease-out shadow-sm sm:w-auto active:scale-[0.98]";
  
  const skin =
    variant === "solid"
      ? "bg-terracota text-creme hover:bg-terracota/90 hover:shadow-lg hover:shadow-terracota/20 border border-terracota/30"
      : variant === "outline"
      ? "border border-sage/60 text-creme hover:bg-sage/15 hover:border-sage bg-navy-raised/50 backdrop-blur-sm"
      : "text-terracota hover:bg-terracota/10 border border-transparent";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${skin} ${className}`}
    >
      {showIcon && (
        <MessageCircle className="h-5 w-5 shrink-0 text-current transition-transform group-hover:scale-110" />
      )}
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 opacity-70 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

/** Marco da Rota: preenche quando o topo da seção cruza a metade da altura da tela. */
export function RouteNode({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const bounds = el.getBoundingClientRect();
      const threshold = window.innerHeight * 0.5;
      setReached(bounds.top < threshold);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`route-node ${reached ? "route-node-filled" : ""} ${className}`}
    />
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
  padX = "pl-7 sm:pl-16",
  children,
  className = "",
}: {
  id: string;
  kicker?: string;
  accent?: "terracota" | "sage" | "ocre" | "plum";
  padX?: string;
  children: ReactNode;
  className?: string;
}) {
  const accentText = {
    terracota: "text-terracota",
    sage: "text-sage",
    ocre: "text-ocre",
    plum: "text-plum",
  }[accent];

  const accentBadgeBg = {
    terracota: "bg-terracota/10 border-terracota/30",
    sage: "bg-sage/10 border-sage/30",
    ocre: "bg-ocre/10 border-ocre/30",
    plum: "bg-plum/10 border-plum/30",
  }[accent];

  return (
    <section id={id} className={`relative scroll-mt-24 py-12 sm:py-16 ${className}`}>
      <RouteNode className="top-14 sm:top-[4.5rem]" />
      <div className={padX}>
        {kicker ? (
          <div className="mb-5 inline-flex items-center gap-2">
            <span
              className={`kicker inline-block rounded-full border px-3 py-1 text-[0.68rem] ${accentText} ${accentBadgeBg}`}
            >
              {kicker}
            </span>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}