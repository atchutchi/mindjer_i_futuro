"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsapConfig"

export type ProjectoCardProps = {
  titulo: string
  slug: string
  categoria: string
  imagemUrl: string
  index: number
}

export type ProjectoPreview = Omit<ProjectoCardProps, "index">

const ProjectoCard = ({ titulo, slug, categoria, imagemUrl, index }: ProjectoCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8])
  const springX = useSpring(rotateX, { stiffness: 260, damping: 24 })
  const springY = useSpring(rotateY, { stiffness: 260, damping: 24 })

  useGSAP(
    () => {
      if (!cardRef.current) return
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      )
      ScrollTrigger.refresh()
    },
    { scope: cardRef, dependencies: [index] },
  )

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    mx.set(x)
    my.set(y)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const num = String(index + 1).padStart(2, "0")

  return (
    <Link
      ref={cardRef}
      href={`/projectos/${slug}`}
      data-cursor="image"
      className="group relative block aspect-[4/5] overflow-hidden bg-[var(--color-cinza-quente)] shadow-[var(--shadow-borgonha)] perspective-[1000px] md:cursor-none"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <Image
          src={imagemUrl}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--color-borgonha)] opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
        <span
          className="pointer-events-none absolute right-4 top-4 font-cormorant text-6xl text-[var(--color-ouro)]/25 md:text-8xl"
          aria-hidden
        >
          {num}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-label mb-2 text-[var(--color-ouro)]">{categoria}</p>
          <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-branco)] md:text-3xl">
            {titulo}
          </h3>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProjectoCard
