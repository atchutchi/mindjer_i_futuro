import type { Metadata } from "next"
import { parceirosNomes } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Parceiros",
  description:
    "Instituições e organizações que apoiam a Mindjer i Futuro na Guiné-Bissau e internacionalmente.",
}

export default function ParceirosPage() {
  return (
    <div className="bg-[var(--color-borgonha)] pb-24 pt-32 text-[var(--color-branco)] md:pb-32 md:pt-40">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="text-label mb-4 text-[var(--color-ouro)]">Rede</p>
        <h1 className="font-cormorant text-section-title mb-10">Parceiros</h1>
        <p className="mb-14 max-w-2xl text-lg font-light leading-relaxed text-white/85">
          O impacto da Mindjer i Futuro é possível graças a parceiros que acreditam na liderança feminina e no
          desenvolvimento da Guiné-Bissau.
        </p>
        <ul className="grid grid-cols-1 gap-6 border-t border-white/20 pt-10 sm:grid-cols-2">
          {parceirosNomes.map((nome) => (
            <li
              key={nome}
              className="text-xl font-light uppercase tracking-[0.15em] text-[var(--color-ouro-claro)]"
            >
              {nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
