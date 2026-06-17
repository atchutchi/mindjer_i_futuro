"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { useGSAP } from "@gsap/react"
import { ChevronDown } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsapConfig"
import { heroSlideUrls } from "@/lib/site-content"
import { easeOutQuart } from "@/lib/animations"
import Button, { ButtonOutline } from "@/components/ui/Button"

type Props = {
  eyebrow?: string
  titulo?: string
  subtitulo?: string
  slideUrls?: string[]
}

const HeroSection = ({
  eyebrow = "",
  titulo = "Mindjer i Futuro",
  subtitulo = "Elevando vozes, inspirando mudanças!",
  slideUrls = heroSlideUrls,
}: Props) => {
  const rootRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const titleWords = titulo.split(" ").filter(Boolean)
  const images = slideUrls.length ? slideUrls : heroSlideUrls

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % images.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [images.length, reducedMotion])

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(
        ".hero-cta-row",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4",
      )
      tl.fromTo(
        ".hero-scroll-hint",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3",
      )

      if (bgRef.current && rootRef.current) {
        gsap.fromTo(
          bgRef.current,
          { yPercent: 0 },
          {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      }

      ScrollTrigger.refresh()
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        {images.map((url, i) => (
          <Image
            key={url}
            src={url}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-[2000ms] ease-out ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
            aria-hidden
          />
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-creme)]/10 via-[var(--color-borgonha)]/24 to-[var(--color-borgonha)]/72"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-5 text-left md:px-8">
        {eyebrow ? <p className="text-label mb-6 text-[var(--color-ouro)]">{eyebrow}</p> : null}

        <h1 className="font-cormorant text-hero-title mb-4 max-w-full text-[var(--color-branco)] drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)]">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.85, ease: easeOutQuart }}
              className="block sm:inline-block sm:pr-[0.2em] sm:last:pr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-label mb-12 max-w-xl text-[var(--color-branco)]/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
        >
          {subtitulo}
        </motion.p>

        <div className="hero-cta-row flex flex-col items-start gap-4 sm:flex-row">
          <Button href="/sobre">Conhecer a Missão</Button>
          <ButtonOutline href="/calendario">Ver Agenda</ButtonOutline>
        </div>

        <motion.a
          href="#manifesto"
          className="hero-scroll-hint mt-16 flex flex-col items-center gap-2 text-[var(--color-ouro)] md:cursor-none"
          aria-label="Deslocar para o manifesto"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <span className="text-label text-[var(--color-ouro)]">Scroll</span>
          <ChevronDown className="h-6 w-6" aria-hidden />
        </motion.a>
      </div>
    </section>
  )
}

export default HeroSection
