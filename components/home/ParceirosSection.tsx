"use client"

import { parceirosItems } from "@/lib/site-content"

const logoClass =
  "h-11 w-auto max-w-[min(200px,42vw)] object-contain object-center brightness-0 invert opacity-90 transition-all duration-300 hover:scale-105 hover:brightness-100 hover:invert-0 md:h-14 md:max-w-[220px]"

const Row = ({ reverse, slow }: { reverse?: boolean; slow?: boolean }) => (
  <div
    className={`flex w-max items-center gap-12 py-6 md:gap-20 ${
      slow ? "animate-marquee-slow marquee-pause" : "animate-marquee marquee-pause"
    } ${reverse ? "[animation-direction:reverse]" : ""}`}
  >
    {[...parceirosItems, ...parceirosItems].map((p, i) => (
      <span key={`${p.nome}-${i}`} className="flex shrink-0 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- SVGs locais variados; evita otimização pesada */}
        <img src={p.logoSrc} alt={p.nome} className={logoClass} loading="lazy" />
      </span>
    ))}
  </div>
)

const ParceirosSection = () => (
  <section className="overflow-hidden bg-[var(--color-borgonha)] py-12">
    <p className="text-label mb-6 text-center text-[var(--color-ouro)]">Confiança</p>
    <h2 className="font-cormorant text-section-title mb-10 text-center text-[var(--color-branco)]">
      Parceiros
    </h2>
    <div className="flex flex-col gap-2">
      <Row />
    </div>
  </section>
)

export default ParceirosSection
