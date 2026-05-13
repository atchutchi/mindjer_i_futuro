import { z } from "zod"

export const contactMotivos = [
  "participacao",
  "parcerias",
  "voluntariado",
  "mentoria",
  "media",
  "outros",
] as const

export const contactSchema = z.object({
  name: z.string().min(2, "Indica o nome completo."),
  email: z.string().email("Email inválido."),
  phone: z.string().optional(),
  organization: z.string().optional(),
  reason: z.enum(contactMotivos),
  message: z.string().min(20, "A mensagem deve ter pelo menos 20 caracteres."),
  website: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().email("Email inválido."),
  company: z.string().optional(),
})
