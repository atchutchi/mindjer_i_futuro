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
  name: z.string().trim().min(2, "Indica o nome completo.").max(120, "Nome demasiado longo."),
  email: z.string().trim().toLowerCase().email("Email inválido.").max(254, "Email demasiado longo."),
  phone: z.string().trim().max(40, "Telefone demasiado longo.").optional(),
  organization: z.string().trim().max(160, "Organização demasiado longa.").optional(),
  reason: z.enum(contactMotivos),
  message: z
    .string()
    .trim()
    .min(20, "A mensagem deve ter pelo menos 20 caracteres.")
    .max(5000, "Mensagem demasiado longa."),
  website: z.string().trim().max(200).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email("Email inválido.").max(254, "Email demasiado longo."),
  company: z.string().trim().max(200).optional(),
})
