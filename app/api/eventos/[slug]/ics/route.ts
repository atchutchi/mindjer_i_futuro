import { fetchEventoBySlug } from "@/lib/sanity.fetch"
import { eventosFallback } from "@/lib/site-content"

type Props = { params: Promise<{ slug: string }> }

type EventoIcs = {
  titulo: string
  slug: string
  data: string
  dataFim?: string
  local?: string
  descricaoBreve?: string
  descricao?: unknown
}

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

const toIcsDate = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z")

const escapeIcs = (value: string) =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")

const foldLine = (line: string) => {
  const max = 74
  if (line.length <= max) return line
  const chunks: string[] = []
  for (let i = 0; i < line.length; i += max) {
    chunks.push(i === 0 ? line.slice(i, i + max) : ` ${line.slice(i, i + max)}`)
  }
  return chunks.join("\r\n")
}

const filename = (slug: string) => slug.replace(/[^a-z0-9-]/gi, "").toLowerCase()

export async function GET(_request: Request, { params }: Props) {
  const { slug } = await params
  const doc = (await fetchEventoBySlug(slug)) as EventoIcs | null
  const fb = eventosFallback.find((evento) => evento.slug === slug)

  if (!doc && !fb) {
    return new Response("Evento não encontrado.", { status: 404 })
  }

  const titulo = doc?.titulo ?? fb!.titulo
  const data = doc?.data ?? fb!.data
  const local = doc?.local ?? fb!.local
  const descricao = doc?.descricaoBreve ?? fb?.descricaoBreve ?? ""
  const start = new Date(data)
  const end = doc?.dataFim ? new Date(doc.dataFim) : new Date(start.getTime() + 2 * 60 * 60 * 1000)
  const now = new Date()
  const url = `${site}/eventos/${slug}`

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mindjer i Futuro//Eventos//PT",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${escapeIcs(slug)}@mindjerifuturo.org`,
    `DTSTAMP:${toIcsDate(now)}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:${escapeIcs(titulo)}`,
    `DESCRIPTION:${escapeIcs(descricao)}`,
    `LOCATION:${escapeIcs(local)}`,
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ]

  return new Response(lines.map(foldLine).join("\r\n"), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename(slug)}.ics"`,
      "Cache-Control": "public, max-age=300",
    },
  })
}
