"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [focused, setFocused] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMsg("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? "Erro")
      setStatus("ok")
      setMsg("Obrigada pela subscrição.")
      setEmail("")
    } catch {
      setStatus("err")
      setMsg("Não foi possível subscrever. Tenta novamente.")
    }
  }

  return (
    <section className="bg-[var(--color-preto)] px-5 py-[12vh] md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-great-vibes text-script-accent mb-6 text-[var(--color-ouro)]">juntas</p>
        <h2 className="font-cormorant text-section-title mb-4 text-[var(--color-branco)]">
          Faz parte da mudança
        </h2>
        <p className="text-subtitle mb-10 font-light text-white/75">
          Subscreve para receber novidades sobre eventos e oportunidades.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
          <div className="relative">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--color-borgonha)] to-[var(--color-ouro)] transition-all duration-500 ease-out"
              style={{ width: focused ? "100%" : "0%" }}
              aria-hidden
            />
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="O teu email"
              className="w-full border-0 border-b border-white/20 bg-transparent py-3 text-[var(--color-branco)] placeholder:text-white/40 focus:border-transparent focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-8 w-full bg-[var(--color-ouro)] py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[var(--color-preto)] transition-colors hover:bg-[var(--color-ouro-claro)] disabled:opacity-50 md:cursor-none"
          >
            {status === "loading" ? "A enviar…" : "Subscrever"}
          </button>
        </form>
        <AnimatePresence mode="wait">
          {msg ? (
            <motion.p
              key={msg}
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className={`mt-6 text-sm ${status === "ok" ? "text-[var(--color-ouro)]" : "text-red-300"}`}
            >
              {msg}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default NewsletterSection
