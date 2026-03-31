"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { easeOutQuart } from "@/lib/animations"

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projectos", label: "Projectos" },
  { href: "/eventos", label: "Eventos" },
  { href: "/programacao", label: "Programação" },
  { href: "/equipa", label: "Equipa" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/contacto", label: "Contacto" },
]

type Props = {
  lightBg?: boolean
}

const Navigation = ({ lightBg = false }: Props) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isStudio = pathname?.startsWith("/studio")
  if (isStudio) return null

  const textOnLight = lightBg && !scrolled

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor:
            scrolled || lightBg
              ? lightBg && !scrolled
                ? "rgba(245, 237, 224, 0.92)"
                : "rgba(10, 8, 8, 0.72)"
              : "rgba(10, 8, 8, 0)",
        }}
        transition={{ duration: 0.45, ease: easeOutQuart }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl",
          scrolled || (lightBg && !scrolled)
            ? "border-white/10"
            : "border-transparent",
          lightBg && !scrolled ? "border-[var(--color-creme-escuro)]/40" : "",
        )}
        style={{
          backdropFilter: scrolled || lightBg ? "blur(20px)" : "none",
        }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8"
          aria-label="Principal"
        >
          <Link href="/" className="relative z-10 shrink-0 md:cursor-none">
            <Image
              src="/mindjer_i_futuro_logo.svg"
              alt="Mindjer i Futuro"
              width={160}
              height={56}
              className="h-10 w-auto object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "group relative text-[0.85rem] font-normal uppercase tracking-wider transition-colors duration-300 md:cursor-none",
                      textOnLight ? "text-[var(--color-preto)]" : "text-[var(--color-branco)]",
                      active && "text-[var(--color-ouro)]",
                    )}
                  >
                    {label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-[var(--color-ouro)] transition-all duration-300",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className={cn(
              "relative z-10 md:hidden",
              textOnLight ? "text-[var(--color-preto)]" : "text-[var(--color-branco)]",
            )}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[var(--color-borgonha)] pt-24 md:hidden"
          >
            <ul className="flex flex-col gap-6 px-8 py-8">
              {links.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: easeOutQuart }}
                >
                  <Link
                    href={href}
                    className="text-lg font-medium uppercase tracking-widest text-[var(--color-branco)]"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
