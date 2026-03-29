"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsapConfig"
import { cn } from "@/lib/utils"

export type EventoListItem = {
  titulo: string
  slug: string
  data: string
  local: string
  descricaoBreve?: string
  status: "passado" | "proximo" | "inscricoes-abertas"
  imagemUrl: string
}

const statusLabel: Record<EventoListItem["status"], string> = {
  passado: "Passado",
  proximo: "Próximo",
  "inscricoes-abertas": "Inscrições Abertas",
}

type Props = {
  eventos: EventoListItem[]
  showHeading?: boolean
}

const EventosSection = ({ eventos, showHeading = true }: Props) => {
  const rootRef = useRef<HTMLElement>(null)
  const lineRef = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".evento-row")
      items.forEach((row, i) => {
        const fromX = i % 2 === 0 ? -80 : 80
        gsap.fromTo(
          row,
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      if (lineRef.current) {
        const len = lineRef.current.getTotalLength()
        lineRef.current.style.strokeDasharray = `${len}`
        lineRef.current.style.strokeDashoffset = `${len}`
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: true,
          },
        })
      }

      ScrollTrigger.refresh()
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} className="relative bg-[var(--color-creme)] px-5 py-[12vh] md:px-8">
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-24 hidden w-px md:block" aria-hidden>
        <svg className="h-full w-2 -translate-x-1/2 overflow-visible" preserveAspectRatio="none">
          <path
            ref={lineRef}
            d="M 1 0 V 2000"
            fill="none"
            stroke="var(--color-borgonha)"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl">
        {showHeading ? (
          <>
            <p className="text-label mb-3 text-center text-[var(--color-borgonha)]">Agenda</p>
            <h2 className="font-cormorant text-section-title mb-16 text-center text-[var(--color-borgonha)]">
              Eventos
            </h2>
          </>
        ) : null}

        <div className="flex flex-col gap-16 md:gap-24">
          {eventos.map((ev, i) => {
            const date = new Date(ev.data)
            const dateStr = date.toLocaleDateString("pt-PT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
            const isLeft = i % 2 === 0
            return (
              <article
                key={ev.slug}
                className="evento-row relative grid gap-8 md:grid-cols-2 md:items-center"
              >
                <div className={cn(!isLeft && "md:order-2")}>
                  <Link
                    href={`/eventos/${ev.slug}`}
                    className="group relative block aspect-square overflow-hidden bg-[var(--color-creme-escuro)] shadow-[var(--shadow-borgonha)] md:cursor-none"
                    data-cursor="image"
                  >
                    <Image
                      src={ev.imagemUrl}
                      alt={ev.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </Link>
                </div>
                <div
                  className={cn(
                    "text-center md:text-left",
                    !isLeft && "md:order-1 md:text-right",
                  )}
                >
                  <p className="font-great-vibes text-3xl text-[var(--color-ouro)] md:text-4xl">{dateStr}</p>
                  <span className="text-label mt-3 inline-block rounded-none border border-[var(--color-borgonha)] px-3 py-1 text-[var(--color-borgonha)]">
                    {statusLabel[ev.status]}
                  </span>
                  <h3 className="font-cormorant mt-4 text-3xl font-semibold text-[var(--color-borgonha)] md:text-4xl">
                    <Link href={`/eventos/${ev.slug}`} className="md:cursor-none">
                      {ev.titulo}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-wider text-[var(--color-preto)]/60">{ev.local}</p>
                  {ev.descricaoBreve ? (
                    <p className="mt-4 max-w-md text-base font-light leading-relaxed text-[var(--color-preto)]/85 md:mx-0">
                      {ev.descricaoBreve}
                    </p>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>

        {showHeading ? (
          <div className="mt-16 text-center">
            <Link
              href="/eventos"
              className="text-label text-[var(--color-borgonha)] underline decoration-[var(--color-ouro)] decoration-1 underline-offset-8 hover:text-[var(--color-borgonha-escuro)] md:cursor-none"
            >
              Ver todos os eventos
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default EventosSection
