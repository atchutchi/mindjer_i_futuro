import type { Metadata } from "next"
import { fetchEventos } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { eventosFallback } from "@/lib/site-content"
import EventosSection, { type EventoListItem } from "@/components/home/EventosSection"

export const metadata: Metadata = {
  title: "Eventos",
  description: "Edições passadas e próximas da conferência Mindjer i Futuro na Guiné-Bissau.",
}

type SanityEvento = {
  titulo: string
  slug: string
  data: string
  local?: string
  descricaoBreve?: string
  status: EventoListItem["status"]
  imagemCapa?: unknown
}

const build = (raw: SanityEvento[] | null): EventoListItem[] => {
  if (raw?.length) {
    return raw.map((ev, i) => ({
      titulo: ev.titulo,
      slug: ev.slug,
      data: ev.data,
      local: ev.local ?? "Bissau, Guiné-Bissau",
      descricaoBreve: ev.descricaoBreve,
      status: ev.status,
      imagemUrl:
        urlForImage(ev.imagemCapa)?.width(800).height(800).url() ??
        eventosFallback[i % eventosFallback.length].imagemCapaUrl,
    }))
  }
  return eventosFallback.map((ev) => ({
    titulo: ev.titulo,
    slug: ev.slug,
    data: ev.data,
    local: ev.local,
    descricaoBreve: ev.descricaoBreve,
    status: ev.status,
    imagemUrl: ev.imagemCapaUrl,
  }))
}

export default async function EventosPage() {
  const raw = await fetchEventos()
  const eventos = build(raw as SanityEvento[] | null)

  return (
    <div className="pb-8 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-label mb-3 text-center text-[var(--color-borgonha)]">Agenda</p>
        <h1 className="font-cormorant text-section-title mb-6 text-center text-[var(--color-borgonha)]">
          Eventos
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg font-light text-[var(--color-preto)]/75">
          Encontros que reúnem mulheres de todo o país para aprender, partilhar e liderar.
        </p>
      </div>
      <EventosSection eventos={eventos} showHeading={false} />
    </div>
  )
}
