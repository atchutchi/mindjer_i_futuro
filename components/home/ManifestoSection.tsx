"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsapConfig"

const quote =
  "Mindjer i Futuro é um espaço criado por mulheres, para mulheres — onde histórias se tornam força, e força se torna mudança."

const stats = [
  { value: 7, suffix: "+", label: "Projectos realizados" },
  { value: 200, suffix: "+", label: "Mulheres impactadas" },
  { value: 10, suffix: "+", label: "Parceiros estratégicos" },
  { value: 3, suffix: "+", label: "Anos de impacto" },
]

const ManifestoSection = () => {
  const rootRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word")
      gsap.fromTo(
        words,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 78%",
            end: "top 40%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        },
      )

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      stats.forEach((_, i) => {
        const el = rootRef.current?.querySelector(`[data-count="${i}"]`)
        if (!el) return
        const end = stats[i].value
        const obj = { n: 0 }
        gsap.fromTo(
          obj,
          { n: 0 },
          {
            n: end,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            onUpdate: () => {
              el.textContent = `${Math.round(obj.n)}${stats[i].suffix}`
            },
          },
        )
      })

      ScrollTrigger.refresh()
    },
    { scope: rootRef },
  )

  const wordNodes = quote.split(/\s+/).map((w, i) => (
    <span key={`${w}-${i}`} className="manifesto-word inline-block pr-[0.35em]">
      {w}
    </span>
  ))

  return (
    <section
      ref={rootRef}
      id="manifesto"
      className="relative bg-[var(--color-preto)] px-5 py-[15vh] md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-great-vibes text-script-accent mb-10 text-[var(--color-ouro)]">porque</p>
        <blockquote className="font-cormorant text-section-title mb-12 font-light italic leading-tight text-[var(--color-branco)] md:text-[clamp(2rem,4vw,3.2rem)]">
          {wordNodes}
        </blockquote>
        <div
          ref={lineRef}
          className="mx-auto mb-20 h-px w-full max-w-md origin-left bg-gradient-to-r from-transparent via-[var(--color-ouro)] to-transparent"
          aria-hidden
        />
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <p
                data-count={i}
                className="font-cormorant text-4xl text-[var(--color-ouro)] md:text-5xl"
              >
                0{s.suffix}
              </p>
              <p className="mt-2 text-sm font-light uppercase tracking-widest text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManifestoSection
