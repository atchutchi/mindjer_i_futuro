"use client"

import { useEffect, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react"

const CustomCursor = () => {
  const reduce = useReducedMotion()
  const [variant, setVariant] = useState<"default" | "link" | "image">("default")
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 28 })
  const sy = useSpring(y, { stiffness: 280, damping: 28 })
  const scale = useSpring(variant === "default" ? 1 : variant === "link" ? 2 : 1.15, {
    stiffness: 320,
    damping: 30,
  })

  useEffect(() => {
    if (reduce) return

    const mq = window.matchMedia("(min-width: 768px)")
    if (!mq.matches) return

    document.body.dataset.cursorCustom = "true"

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 20)
      y.set(e.clientY - 20)
      setVisible(true)
    }

    const leave = () => setVisible(false)

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      const link = t.closest("a, button, [data-cursor='link']")
      const img = t.closest("[data-cursor='image']")
      if (img) setVariant("image")
      else if (link) setVariant("link")
      else setVariant("default")
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseleave", leave)
    document.addEventListener("mouseover", onOver)

    return () => {
      delete document.body.dataset.cursorCustom
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseleave", leave)
      document.removeEventListener("mouseover", onOver)
    }
  }, [reduce, x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 rounded-full border border-[var(--color-ouro)] mix-blend-difference md:block"
      style={{
        x: sx,
        y: sy,
        scale,
        opacity: visible ? 1 : 0,
        backgroundColor:
          variant === "image"
            ? "rgba(201, 165, 90, 0.35)"
            : "rgba(123, 29, 64, 0.85)",
      }}
    >
      {variant === "image" && (
        <span className="absolute inset-0 flex items-center justify-center text-[0.55rem] font-medium uppercase tracking-wider text-[var(--color-branco)]">
          Ver +
        </span>
      )}
    </motion.div>
  )
}

export default CustomCursor
