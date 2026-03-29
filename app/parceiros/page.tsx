import type { Metadata } from "next"
import { parceirosItems } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Parceiros",
  description:
    "Instituições e organizações que apoiam a Mindjer i Futuro na Guiné-Bissau e internacionalmente.",
}

const logoClass =
  "mx-auto h-16 w-auto max-w-[240px] object-contain object-center brightness-0 invert opacity-95 transition-all duration-300 hover:brightness-100 hover:invert-0 md:h-20 md:max-w-[280px]"

export default function ParceirosPage() {
  return (
    <div className="bg-[var(--color-borgonha)] pb-24 pt-32 text-[var(--color-branco)] md:pb-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="text-label mb-4 text-[var(--color-ouro)]">Rede</p>
        <h1 className="font-cormorant text-section-title mb-10">Parceiros</h1>
        <p className="mb-14 max-w-2xl text-lg font-light leading-relaxed text-white/85">
          O impacto da Mindjer i Futuro é possível graças a parceiros que acreditam na liderança feminina e no
          desenvolvimento da Guiné-Bissau.
        </p>
        <ul className="grid grid-cols-1 gap-10 border-t border-white/20 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {parceirosItems.map((p) => (
            <li
              key={p.nome}
              className="flex items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] px-6 py-12"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logoSrc} alt={p.nome} className={logoClass} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
