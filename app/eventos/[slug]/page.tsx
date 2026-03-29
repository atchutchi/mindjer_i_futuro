import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { fetchEventoBySlug } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { eventosFallback } from "@/lib/site-content"
import PortableBody from "@/components/content/PortableBody"

type Props = { params: Promise<{ slug: string }> }

type SanityEventoDetail = {
  titulo: string
  slug: string
  data: string
  local?: string
  status: "passado" | "proximo" | "inscricoes-abertas"
  descricao?: unknown
  imagemCapa?: unknown
  linkInscricao?: string
  capacidade?: number
}

const statusLabel = {
  passado: "Passado",
  proximo: "Próximo",
  "inscricoes-abertas": "Inscrições Abertas",
} as const

export async function generateStaticParams() {
  return eventosFallback.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doc = (await fetchEventoBySlug(slug)) as SanityEventoDetail | null
  const fb = eventosFallback.find((e) => e.slug === slug)
  const title = doc?.titulo ?? fb?.titulo ?? "Evento"
  return {
    title,
    description: fb?.descricaoBreve ?? "",
  }
}

export default async function EventoDetalhePage({ params }: Props) {
  const { slug } = await params
  const doc = (await fetchEventoBySlug(slug)) as SanityEventoDetail | null
  const fb = eventosFallback.find((e) => e.slug === slug)

  if (!doc && !fb) notFound()

  const titulo = doc?.titulo ?? fb!.titulo
  const data = doc?.data ?? fb!.data
  const local = doc?.local ?? fb!.local
  const status = doc?.status ?? fb!.status
  const imagemUrl =
    urlForImage(doc?.imagemCapa)?.width(1200).height(800).url() ?? fb!.imagemCapaUrl

  const date = new Date(data)
  const dateStr = date.toLocaleDateString("pt-PT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <article className="bg-[var(--color-creme)] pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link
          href="/eventos"
          className="text-label mb-8 inline-block text-[var(--color-borgonha)] hover:text-[var(--color-ouro)] md:cursor-none"
        >
          ← Eventos
        </Link>
        <span className="text-label mb-4 block text-[var(--color-ouro)]">{statusLabel[status]}</span>
        <h1 className="font-cormorant text-section-title mb-4 text-[var(--color-borgonha)]">{titulo}</h1>
        <p className="font-great-vibes text-2xl text-[var(--color-borgonha)]/80 md:text-3xl">{dateStr}</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-[var(--color-preto)]/60">{local}</p>
        {doc?.capacidade ? (
          <p className="mt-4 text-sm text-[var(--color-preto)]/75">Capacidade: {doc.capacidade} lugares</p>
        ) : null}
        <div className="relative mb-12 mt-10 aspect-[16/10] w-full overflow-hidden bg-[var(--color-creme-escuro)]">
          <Image
            src={imagemUrl}
            alt={titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
        {fb?.descricaoBreve && !doc?.descricao ? (
          <p className="mb-8 text-lg font-light leading-relaxed text-[var(--color-preto)]/90">{fb.descricaoBreve}</p>
        ) : null}
        {doc?.descricao ? <PortableBody value={doc.descricao} className="prose-mif" /> : null}
        {doc?.linkInscricao && status === "inscricoes-abertas" ? (
          <a
            href={doc.linkInscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex bg-[var(--color-ouro)] px-9 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[var(--color-preto)] transition-colors hover:bg-[var(--color-borgonha)] hover:text-[var(--color-branco)] md:cursor-none"
          >
            Inscrever-me
          </a>
        ) : null}
      </div>
    </article>
  )
}
