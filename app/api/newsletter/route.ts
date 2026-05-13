import { NextResponse } from "next/server"
import { Resend } from "resend"
import { rateLimit, requestIp } from "@/lib/rate-limit"
import { newsletterSchema } from "@/lib/validations/contact"

export const runtime = "nodejs"

export const POST = async (req: Request) => {
  const ip = requestIp(req)
  const limited = rateLimit(`newsletter:${ip}`, 10, 60 * 60 * 1000)
  if (!limited.ok) {
    return NextResponse.json({ error: "Muitas tentativas. Tenta mais tarde." }, { status: 429 })
  }

  const key = process.env.RESEND_API_KEY
  const admin = process.env.CONTACT_EMAIL ?? "ferreira.atchutchi@gmail.com"

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

  const parsed = newsletterSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 })
  }
  if (parsed.data.company) {
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(key)
  const from = process.env.RESEND_FROM ?? "Mindjer i Futuro <onboarding@resend.dev>"

  const { error } = await resend.emails.send({
    from,
    to: [admin],
    subject: "[Mindjer i Futuro] Nova subscrição newsletter",
    html: `<p>Nova subscrição: <strong>${parsed.data.email}</strong></p>`,
    replyTo: parsed.data.email,
  })

  if (error) {
    return NextResponse.json({ error: "Falha ao registar subscrição." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
