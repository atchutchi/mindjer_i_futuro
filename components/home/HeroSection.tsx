"use client"

import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion } from "motion/react"
import { useGSAP } from "@gsap/react"
import { ChevronDown } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsapConfig"
import { heroSlideUrls } from "@/lib/site-content"
import { easeOutQuart } from "@/lib/animations"
import Button, { ButtonOutline } from "@/components/ui/Button"

const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false })

const titleWords = ["Mindjer", "i", "Futuro"]

const HeroSection = () => {
  const rootRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlideUrls.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [])

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(logoRef.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.1 })
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
        {heroSlideUrls.map((url, i) => (
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
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-borgonha)]/75 via-[var(--color-preto)]/50 to-[var(--color-preto)]"
          aria-hidden
        />
      </div>

      <HeroParticles />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <p className="text-label mb-6 text-[var(--color-ouro)]">Guiné-Bissau · Desde 2022</p>

        <div ref={logoRef} className="mb-10">
          <Image
            src="/mindjer_i_futuro_logo.svg"
            alt="Mindjer i Futuro — Conferência de Liderança Feminina"
            width={320}
            height={320}
            className="mx-auto h-36 w-auto max-w-[min(90vw,22rem)] object-contain drop-shadow-[var(--shadow-borgonha)] md:h-44"
            priority
            unoptimized
          />
        </div>

        <h1 className="font-cormorant text-hero-title mb-4 text-[var(--color-branco)]">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.85, ease: easeOutQuart }}
              className="inline-block pr-[0.2em] last:pr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-label mb-12 max-w-xl text-[var(--color-branco)]/90"
        >
          Conferência de Liderança Feminina
        </motion.p>

        <div className="hero-cta-row flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/sobre">Conhecer a Missão</Button>
          <ButtonOutline href="/eventos">Ver Eventos</ButtonOutline>
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
