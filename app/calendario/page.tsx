import type { Metadata } from "next"
import Link from "next/link"
import { CalendarPlus, Clock, MapPin } from "lucide-react"
import { fetchEventos } from "@/lib/sanity.fetch"
import { eventosFallbackOrdenados } from "@/lib/site-content"

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

export const metadata: Metadata = {
  title: "Calendário",
  description:
    "Calendário de workshops, conferências, diálogos e actividades da Mindjer i Futuro.",
  alternates: { canonical: "/calendario" },
  openGraph: {
    title: "Calendário | Mindjer i Futuro",
    description:
      "Calendário de workshops, conferências, diálogos e actividades da Mindjer i Futuro.",
    url: `${site}/calendario`,
    type: "website",
  },
}

type EventoCalendario = {
  titulo: string
  slug: string
  tipo?: string
  data: string
  dataFim?: string
  local: string
  status: "passado" | "proximo" | "inscricoes-abertas"
  descricaoBreve?: string
  facilitador?: string
  capacidade?: number
}

type SanityEvento = {
  titulo: string
  slug: string
  tipo?: string
  data: string
  dataFim?: string
  local?: string
  status: EventoCalendario["status"]
  descricaoBreve?: string
  facilitador?: string
  capacidade?: number
}

const statusLabel: Record<EventoCalendario["status"], string> = {
  passado: "Passado",
  proximo: "Próximo",
  "inscricoes-abertas": "Inscrições abertas",
}

const tipoLabel: Record<string, string> = {
  workshop: "Workshop",
  conferencia: "Conferência",
  dialogo: "Diálogo",
  mentoria: "Mentoria",
  outro: "Evento",
}

const buildEventos = (raw: SanityEvento[] | null): EventoCalendario[] => {
  if (raw?.length) {
    return raw
      .map((ev) => ({
        titulo: ev.titulo,
        slug: ev.slug,
        tipo: ev.tipo,
        data: ev.data,
        dataFim: ev.dataFim,
        local: ev.local ?? "Bissau, Guiné-Bissau",
        status: ev.status,
        descricaoBreve: ev.descricaoBreve,
        facilitador: ev.facilitador,
        capacidade: ev.capacidade,
      }))
      .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
  }

  return [...eventosFallbackOrdenados]
    .reverse()
    .map((ev) => ({
      titulo: ev.titulo,
      slug: ev.slug,
      tipo: ev.titulo.toLowerCase().includes("conferência") ? "conferencia" : "workshop",
      data: ev.data,
      local: ev.local,
      status: ev.status,
      descricaoBreve: ev.descricaoBreve,
      facilitador: ev.facilitador,
      capacidade: ev.totalParticipantes,
    }))
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("pt-PT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

const formatTime = (value: string) =>
  new Date(value).toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  })

const monthKey = (value: string) =>
  new Date(value).toLocaleDateString("pt-PT", {
    month: "long",
    year: "numeric",
  })

export default async function CalendarioPage() {
  const raw = await fetchEventos()
  const eventos = buildEventos(raw as SanityEvento[] | null)
  const grupos = eventos.reduce<Record<string, EventoCalendario[]>>((acc, evento) => {
    const key = monthKey(evento.data)
    acc[key] = [...(acc[key] ?? []), evento]
    return acc
  }, {})

  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <p className="text-label mb-4 text-center text-[var(--color-borgonha)]">Agenda</p>
        <h1 className="font-cormorant text-section-title mb-6 text-center text-[var(--color-borgonha)]">
          Calendário
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg font-light text-[var(--color-preto)]/75">
          Workshops, conferências e diálogos organizados pela Mindjer i Futuro.
        </p>

        <div className="space-y-14">
          {Object.entries(grupos).map(([mes, items]) => (
            <section key={mes} aria-labelledby={`mes-${mes.replace(/\s+/g, "-")}`}>
              <h2
                id={`mes-${mes.replace(/\s+/g, "-")}`}
                className="font-cormorant mb-6 text-3xl font-semibold capitalize text-[var(--color-borgonha)]"
              >
                {mes}
              </h2>
              <div className="divide-y divide-[var(--color-borgonha)]/12 border-y border-[var(--color-borgonha)]/12">
                {items.map((evento) => {
                  const tipo = evento.tipo ? tipoLabel[evento.tipo] ?? evento.tipo : "Evento"
                  return (
                    <article key={evento.slug} className="grid gap-5 py-7 md:grid-cols-[9rem_1fr]">
                      <div className="rounded-sm bg-[var(--color-borgonha)] px-4 py-5 text-center text-[var(--color-branco)]">
                        <p className="text-label text-[var(--color-ouro)]">{tipo}</p>
                        <p className="mt-3 font-cormorant text-4xl leading-none">
                          {new Date(evento.data).getDate()}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-widest">
                          {new Date(evento.data).toLocaleDateString("pt-PT", { month: "short" })}
                        </p>
                      </div>
                      <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="text-label border border-[var(--color-borgonha)]/30 px-3 py-1 text-[var(--color-borgonha)]">
                            {statusLabel[evento.status]}
                          </span>
                          {evento.capacidade ? (
                            <span className="text-label border border-[var(--color-ouro)]/45 px-3 py-1 text-[var(--color-ouro-escuro)]">
                              {evento.capacidade} lugares
                            </span>
                          ) : null}
                        </div>
                        <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-borgonha)]">
                          <Link href={`/eventos/${evento.slug}`} className="md:cursor-none">
                            {evento.titulo}
                          </Link>
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-preto)]/65">
                          <span className="inline-flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[var(--color-borgonha)]" aria-hidden />
                            {formatDate(evento.data)} às {formatTime(evento.data)}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[var(--color-borgonha)]" aria-hidden />
                            {evento.local}
                          </span>
                        </div>
                        {evento.descricaoBreve ? (
                          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[var(--color-preto)]/75">
                            {evento.descricaoBreve}
                          </p>
                        ) : null}
                        <div className="mt-5 flex flex-wrap gap-3">
                          <Link
                            href={`/eventos/${evento.slug}`}
                            className="text-label text-[var(--color-borgonha)] underline decoration-[var(--color-ouro)] underline-offset-4 md:cursor-none"
                          >
                            Ver detalhes
                          </Link>
                          <a
                            href={`/api/eventos/${evento.slug}/ics`}
                            className="text-label inline-flex items-center gap-2 text-[var(--color-ouro-escuro)] hover:text-[var(--color-borgonha)] md:cursor-none"
                          >
                            <CalendarPlus className="h-4 w-4" aria-hidden />
                            Adicionar ao calendário
                          </a>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
