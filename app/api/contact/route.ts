import { NextResponse } from "next/server"
import { Resend } from "resend"
import { escapeHtml } from "@/lib/escape-html"
import { rateLimit, requestIp } from "@/lib/rate-limit"
import { readJsonBody } from "@/lib/request-json"
import { contactSchema } from "@/lib/validations/contact"

export const runtime = "nodejs"

const motivoLabels: Record<string, string> = {
  participacao: "Participação em actividades",
  parcerias: "Parcerias",
  voluntariado: "Voluntariado",
  mentoria: "Mentoria",
  media: "Media / Imprensa",
  outros: "Outros",
}

export const POST = async (req: Request) => {
  const ip = requestIp(req)
  const limited = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000)
  if (!limited.ok) {
    return NextResponse.json({ error: "Muitas tentativas. Tenta mais tarde." }, { status: 429 })
  }

  const body = await readJsonBody(req)
  if (!body.ok) {
    return NextResponse.json({ error: body.message }, { status: body.status })
  }

  const parsed = contactSchema.safeParse(body.data)
  if (!parsed.success) {
    const msg = parsed.error.flatten().fieldErrors
    return NextResponse.json({ error: "Validação falhou.", fields: msg }, { status: 400 })
  }

  const d = parsed.data
  if (d.website) {
    return NextResponse.json({ ok: true })
  }

  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL ?? "info@mindjerifuturo.org"

  if (!key) {
    return NextResponse.json(
      { error: "Serviço de email não configurado." },
      { status: 503 },
    )
  }

  const resend = new Resend(key)
  const from = process.env.RESEND_FROM ?? "Mindjer i Futuro <info@mindjerifuturo.org>"

  const html = `
    <h2>Novo contacto: Mindjer i Futuro</h2>
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
