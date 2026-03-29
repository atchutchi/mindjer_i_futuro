"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { useReducedMotion } from "motion/react"

type Props = {
  quote: string
  nome: string
  programa: string
  fotoUrl?: string
}

const ImpactoSection = ({ quote, nome, programa, fotoUrl }: Props) => {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "25%"])
  const smoothY = useSpring(y, { stiffness: 80, damping: 28 })

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] overflow-hidden py-24 md:py-32">
      <motion.div className="absolute inset-0 scale-110" style={{ y: smoothY }}>
        <Image
          src={fotoUrl ?? "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          aria-hidden
        />
      </motion.div>
      <div className="absolute inset-0 bg-[var(--color-borgonha)]/60" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-5 md:px-8">
        <motion.blockquote
          initial={reduce ? false : { opacity: 0, filter: "blur(8px)" }}
          whileInView={reduce ? undefined : { opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative text-center"
        >
          <span
            className="font-cormorant pointer-events-none absolute -left-2 -top-8 text-8xl leading-none text-[var(--color-ouro)] opacity-80 md:-left-8 md:-top-16 md:text-[10rem]"
            aria-hidden
          >
            “
          </span>
          <p className="font-cormorant relative z-10 text-2xl font-light italic leading-relaxed text-[var(--color-branco)] md:text-4xl">
            {quote}
          </p>
          <footer className="mt-10">
            <cite className="not-italic">
              <span className="block font-cormorant text-xl text-[var(--color-ouro-claro)]">{nome}</span>
              <span className="mt-1 block text-sm uppercase tracking-widest text-white/75">{programa}</span>
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

export default ImpactoSection
