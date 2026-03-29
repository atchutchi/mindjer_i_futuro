"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Link2, Share2 } from "lucide-react"

export type MembroItem = {
  nome: string
  cargo: string
  bio: string
  fotoUrl?: string
  linkedin?: string
  instagram?: string
}

type Props = {
  membros: MembroItem[]
  variant?: "home" | "page"
}

const EquipaSection = ({ membros, variant = "home" }: Props) => (
  <section
    className={
      variant === "home"
        ? "bg-[var(--color-preto)] px-5 py-[12vh] md:px-8"
        : "bg-[var(--color-preto)] px-5 pb-[12vh] md:px-8"
    }
  >
    <div className="mx-auto max-w-7xl">
      {variant === "home" ? (
        <>
          <p className="text-label mb-3 text-[var(--color-ouro)]">Quem somos</p>
          <h2 className="font-cormorant text-section-title mb-16 text-[var(--color-branco)]">Equipa</h2>
        </>
      ) : null}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {membros.map((m, i) => (
          <MembroCard key={m.nome} membro={m} index={i} />
        ))}
      </div>
      {variant === "home" ? (
        <div className="mt-12 text-center">
          <Link
            href="/equipa"
            className="text-label text-[var(--color-ouro)] underline decoration-[var(--color-ouro)] underline-offset-8 md:cursor-none"
          >
            Ver página completa
          </Link>
        </div>
      ) : null}
    </div>
  </section>
)

const MembroCard = ({ membro, index }: { membro: MembroItem; index: number }) => {
  const [open, setOpen] = useState(false)
  const src =
    membro.fotoUrl ??
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="group relative mx-auto block aspect-[3/4] w-full max-w-sm overflow-hidden bg-[var(--color-cinza-quente)] text-left md:cursor-none"
        aria-expanded={open}
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={membro.nome}
            fill
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            sizes="(max-width: 640px) 100vw, 33vw"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-[var(--color-borgonha)] opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30" />
        </div>
      </button>
      <h3 className="font-cormorant mt-6 text-2xl text-[var(--color-branco)]">{membro.nome}</h3>
      <p className="text-label mt-2 text-[var(--color-ouro)]">{membro.cargo}</p>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-sm font-light leading-relaxed text-white/75">{membro.bio}</p>
      </motion.div>
      <div className="mt-4 flex justify-center gap-4">
        {membro.linkedin ? (
          <Link
            href={membro.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-[var(--color-ouro)] md:cursor-none"
            aria-label={`LinkedIn de ${membro.nome}`}
          >
            <Link2 className="h-5 w-5" />
          </Link>
        ) : null}
        {membro.instagram ? (
          <Link
            href={membro.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-[var(--color-ouro)] md:cursor-none"
            aria-label={`Instagram de ${membro.nome}`}
          >
            <Share2 className="h-5 w-5" />
          </Link>
        ) : null}
      </div>
    </motion.article>
  )
}

export default EquipaSection
