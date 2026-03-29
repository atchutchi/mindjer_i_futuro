"use client"

import { parceirosNomes } from "@/lib/site-content"

const Row = ({ reverse, slow }: { reverse?: boolean; slow?: boolean }) => (
  <div
    className={`flex w-max gap-16 py-6 ${slow ? "animate-marquee-slow marquee-pause" : "animate-marquee marquee-pause"} ${
      reverse ? "[animation-direction:reverse]" : ""
    }`}
  >
    {[...parceirosNomes, ...parceirosNomes].map((nome, i) => (
      <span
        key={`${nome}-${i}`}
        className="shrink-0 text-2xl font-light uppercase tracking-[0.2em] text-[var(--color-branco)] brightness-0 invert transition-transform duration-300 hover:scale-110 hover:brightness-100 hover:invert-0 md:text-3xl"
      >
        {nome}
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
      <Row reverse slow />
    </div>
  </section>
)

export default ParceirosSection
