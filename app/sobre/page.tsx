import type { Metadata } from "next"
import Link from "next/link"
import Button from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Sobre a organização",
  description:
    "Mindjer i Futuro — Conferência de Liderança Feminina na Guiné-Bissau. Missão, valores e impacto.",
}

export default function SobrePage() {
  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-label mb-4 text-[var(--color-borgonha)]">Quem somos</p>
        <h1 className="font-cormorant text-section-title mb-10 text-[var(--color-borgonha)]">
          Sobre a Mindjer i Futuro
        </h1>
        <div className="space-y-8 text-base font-light leading-relaxed text-[var(--color-preto)]/90">
          <p>
            <strong className="font-medium text-[var(--color-borgonha)]">Mindjer i Futuro</strong> — Mulher é o
            Futuro, em Crioulo Guineense — é uma conferência criada na Guiné-Bissau com o propósito de promover
            debates, palestras e workshops para a partilha de conhecimento e experiências entre mulheres nos mais
            variados quadrantes da vida social, cultural e económica.
          </p>
          <p>
            Esta iniciativa não tem fins lucrativos e as suas promotoras visam sobretudo promover e motivar mulheres
            que, de forma exemplar, dão o seu contributo para o desenvolvimento da nossa sociedade e que se destacam
            pelo seu papel na transformação social, cultural e económica no nosso país.
          </p>
          <p>
            Através de programas de mentoria, bolsas de estudo, masterclasses e parcerias estratégicas, construímos
            redes de apoio para jovens mulheres guineenses.
          </p>
        </div>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Button href="/projectos">Ver projectos</Button>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center border border-[var(--color-borgonha)] px-9 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[var(--color-borgonha)] transition-colors hover:bg-[var(--color-borgonha)] hover:text-[var(--color-branco)] md:cursor-none"
          >
            Falar connosco
          </Link>
        </div>
      </div>
    </div>
  )
}
