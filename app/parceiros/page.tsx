import type { Metadata } from "next"
import { parceirosItems } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Parceiros",
  description:
    "Instituições e organizações que apoiam a Mindjer i Futuro na Guiné-Bissau e internacionalmente.",
}

const logoClass =
  "mx-auto h-16 w-auto max-w-[240px] object-contain object-center transition-transform duration-300 hover:scale-105 md:h-20 md:max-w-[280px]"

export default function ParceirosPage() {
  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 text-[var(--color-preto)] md:pb-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="text-label mb-4 text-[var(--color-ouro-escuro)]">Rede</p>
        <h1 className="font-cormorant text-section-title mb-10 text-[var(--color-borgonha)]">Parceiros</h1>
        <p className="mb-14 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-preto)]/75">
          O impacto da Mindjer i Futuro é possível graças a parceiros que acreditam na liderança feminina e no
          desenvolvimento da Guiné-Bissau.
        </p>
        <ul className="grid grid-cols-1 gap-10 border-t border-[var(--color-borgonha)]/20 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {parceirosItems.map((p) => (
            <li
              key={p.nome}
              className={`flex items-center justify-center rounded-sm border border-[var(--color-borgonha)]/15 px-6 py-12 shadow-lg ${
                p.darkBackground ? "bg-[var(--color-borgonha)]" : "bg-white"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img data-testid="partner-logo" src={p.logoSrc} alt={p.nome} className={logoClass} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
