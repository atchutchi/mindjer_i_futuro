import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"

export const runtime = "nodejs"

const motivoLabels: Record<string, string> = {
  participacao: "Participação em atividades",
  parcerias: "Parcerias",
  voluntariado: "Voluntariado",
  mentoria: "Mentoria",
  media: "Media / Imprensa",
  outros: "Outros",
}

export const POST = async (req: Request) => {
  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL ?? "ferreira.atchutchi@gmail.com"

  if (!key) {
    return NextResponse.json(
      { error: "Serviço de email não configurado." },
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const msg = parsed.error.flatten().fieldErrors
    return NextResponse.json({ error: "Validação falhou.", fields: msg }, { status: 400 })
  }

  const d = parsed.data
  const resend = new Resend(key)
  const from = process.env.RESEND_FROM ?? "Mindjer i Futuro <onboarding@resend.dev>"

  const html = `
    <h2>Novo contacto — Mindjer i Futuro</h2>
    <p><strong>Nome:</strong> ${escapeHtml(d.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(d.email)}</p>
    ${d.phone ? `<p><strong>Telefone:</strong> ${escapeHtml(d.phone)}</p>` : ""}
    ${d.organization ? `<p><strong>Organização:</strong> ${escapeHtml(d.organization)}</p>` : ""}
    <p><strong>Motivo:</strong> ${motivoLabels[d.reason] ?? d.reason}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(d.message).replace(/\n/g, "<br/>")}</p>
  `

  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: `[Mindjer i Futuro] ${motivoLabels[d.reason] ?? "Contacto"}`,
    replyTo: d.email,
    html,
  })

  if (error) {
    return NextResponse.json({ error: "Falha ao enviar email." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
