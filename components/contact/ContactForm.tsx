"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "motion/react"
import { contactSchema, type ContactInput } from "@/lib/validations/contact"
import { cn } from "@/lib/utils"

const motivoOptions: { value: ContactInput["reason"]; label: string }[] = [
  { value: "participacao", label: "Participação em atividades" },
  { value: "parcerias", label: "Parcerias" },
  { value: "voluntariado", label: "Voluntariado" },
  { value: "mentoria", label: "Mentoria" },
  { value: "media", label: "Media / Imprensa" },
  { value: "outros", label: "Outros" },
]

const ContactForm = () => {
  const [toast, setToast] = useState<{ type: "ok" | "err"; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      reason: "participacao",
    },
  })

  const onSubmit = async (data: ContactInput) => {
    setToast(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) {
        setToast({ type: "err", text: j.error ?? "Não foi possível enviar." })
        return
      }
      setToast({ type: "ok", text: "Mensagem enviada com sucesso. Obrigada." })
      reset({ reason: "participacao" })
    } catch {
      setToast({ type: "err", text: "Erro de rede. Tenta novamente." })
    }
  }

  const fieldClass =
    "w-full border-0 border-b border-[var(--color-preto)]/20 bg-transparent py-3 text-[var(--color-preto)] focus:border-[var(--color-ouro)] focus:outline-none focus:ring-0 transition-colors"

  return (
    <div className="relative">
      <AnimatePresence>
        {toast ? (
          <motion.div
            role="status"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
              "fixed bottom-8 right-8 z-50 max-w-sm border px-6 py-4 text-sm shadow-[var(--shadow-borgonha)]",
              toast.type === "ok"
                ? "border-[var(--color-ouro)] bg-[var(--color-preto)] text-[var(--color-branco)]"
                : "border-red-400/50 bg-[var(--color-preto)] text-red-200",
            )}
          >
            {toast.text}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-8" noValidate>
        <div>
          <label htmlFor="name" className="text-label text-[var(--color-borgonha)]">
            Nome completo *
          </label>
          <input id="name" className={fieldClass} autoComplete="name" {...register("name")} />
          {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-label text-[var(--color-borgonha)]">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            {...register("email")}
          />
          {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-label text-[var(--color-borgonha)]">
            Telefone
          </label>
          <input id="phone" type="tel" className={fieldClass} autoComplete="tel" {...register("phone")} />
        </div>
        <div>
          <label htmlFor="organization" className="text-label text-[var(--color-borgonha)]">
            Organização
          </label>
          <input id="organization" className={fieldClass} {...register("organization")} />
        </div>
        <div>
          <label htmlFor="reason" className="text-label text-[var(--color-borgonha)]">
            Motivo do contacto *
          </label>
          <select id="reason" className={fieldClass} {...register("reason")}>
            {motivoOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="text-label text-[var(--color-borgonha)]">
            Mensagem * (mín. 20 caracteres)
          </label>
          <textarea
            id="message"
            rows={5}
            className={cn(fieldClass, "resize-y")}
            {...register("message")}
          />
          {errors.message ? (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--color-ouro)] py-4 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[var(--color-preto)] transition-colors hover:bg-[var(--color-borgonha)] hover:text-[var(--color-branco)] disabled:opacity-50 md:cursor-none"
        >
          {isSubmitting ? "A enviar…" : "Enviar"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
