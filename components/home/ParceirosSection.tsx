"use client"

import { parceirosItems } from "@/lib/site-content"

const logoClass =
  "h-12 w-auto max-w-[min(200px,42vw)] object-contain object-center transition-transform duration-300 hover:scale-105 md:h-16 md:max-w-[220px]"

const Row = ({ reverse, slow }: { reverse?: boolean; slow?: boolean }) => (
  <div
    className={`flex w-max items-center gap-12 py-6 md:gap-20 ${
      slow ? "animate-marquee-slow marquee-pause" : "animate-marquee marquee-pause"
    } ${reverse ? "[animation-direction:reverse]" : ""}`}
  >
    {[...parceirosItems, ...parceirosItems].map((p, i) => (
      <span
        key={`${p.nome}-${i}`}
        className={`flex min-h-28 min-w-56 shrink-0 items-center justify-center rounded-sm px-7 py-5 shadow-lg ${
          p.darkBackground ? "bg-[var(--color-borgonha)]" : "bg-white"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- SVGs locais variados; evita otimização pesada */}
        <img src={p.logoSrc} alt={p.nome} className={logoClass} loading="lazy" />
      </span>
    ))}
  </div>
)

const ParceirosSection = () => (
  <section className="overflow-hidden border-b border-[var(--color-borgonha)]/10 bg-[var(--color-creme)] py-12">
    <p className="text-label mb-6 text-center text-[var(--color-ouro-escuro)]">Confiança</p>
    <h2 className="font-cormorant text-section-title mb-10 text-center text-[var(--color-borgonha)]">
      Parceiros
    </h2>
    <div className="flex flex-col gap-2">
      <Row />
    </div>
  </section>
)

export default ParceirosSection
