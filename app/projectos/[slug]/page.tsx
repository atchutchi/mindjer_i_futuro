import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { fetchProjectoBySlug } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { projectosFallback } from "@/lib/site-content"
import { paragrafosDeTexto } from "@/lib/texto"
import PortableBody from "@/components/content/PortableBody"

type Props = { params: Promise<{ slug: string }> }

type SanityProjectoDetail = {
  titulo: string
  slug: string
  categoria?: string
  descricaoBreve?: string
  descricaoCompleta?: unknown
  imagemCapa?: unknown
  galeria?: { asset?: unknown }[]
  impacto?: string
  parceiros?: string[]
}

export async function generateStaticParams() {
  return projectosFallback.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doc = (await fetchProjectoBySlug(slug)) as SanityProjectoDetail | null
  const fb = projectosFallback.find((p) => p.slug === slug)
  const title = doc?.titulo ?? fb?.titulo ?? "Projecto"
  return {
    title,
    description: doc?.descricaoBreve ?? fb?.descricaoBreve ?? "",
  }
}

export default async function ProjectoDetalhePage({ params }: Props) {
  const { slug } = await params
  const doc = (await fetchProjectoBySlug(slug)) as SanityProjectoDetail | null
  const fb = projectosFallback.find((p) => p.slug === slug)

  if (!doc && !fb) notFound()

  const titulo = doc?.titulo ?? fb!.titulo
  const categoria = doc?.categoria ?? fb!.categoria
  const descricaoBreve = doc?.descricaoBreve ?? fb!.descricaoBreve
  const descricaoLongaFallback = fb?.descricaoLonga
  const galeriaFallback = fb?.galeriaUrls
  const impacto = doc?.impacto ?? fb!.impacto
  const capaUrl =
    urlForImage(doc?.imagemCapa)?.width(1200).height(900).url() ?? fb!.imagemCapaUrl

  const corpoParagrafos =
    !doc?.descricaoCompleta && descricaoLongaFallback
      ? paragrafosDeTexto(descricaoLongaFallback)
      : null

  return (
    <article className="bg-[var(--color-creme)] pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="text-label mb-3 text-[var(--color-borgonha)]">{categoria}</p>
        <h1 className="font-cormorant text-section-title mb-6 text-[var(--color-borgonha)]">{titulo}</h1>
        {impacto ? (
          <p className="mb-8 text-sm uppercase tracking-widest text-[var(--color-ouro-escuro)]">{impacto}</p>
        ) : null}
        <div className="relative mb-12 aspect-[16/10] w-full overflow-hidden bg-[var(--color-creme-escuro)]">
          <Image src={capaUrl} alt={titulo} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
        </div>
        {doc?.descricaoCompleta ? (
          <>
            <p className="mb-10 text-lg font-light leading-relaxed text-[var(--color-preto)]/90">{descricaoBreve}</p>
            <PortableBody value={doc.descricaoCompleta} className="prose-mif" />
          </>
        ) : corpoParagrafos ? (
          <div className="space-y-6 text-base font-light leading-relaxed text-[var(--color-preto)]/90">
            {corpoParagrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="text-lg font-light leading-relaxed text-[var(--color-preto)]/90">{descricaoBreve}</p>
        )}
        {doc?.parceiros?.length ? (
          <div className="mt-12 border-t border-[var(--color-creme-escuro)] pt-8">
            <p className="text-label mb-4 text-[var(--color-borgonha)]">Parceiros</p>
            <ul className="flex flex-wrap gap-3 text-sm text-[var(--color-preto)]/80">
              {doc.parceiros.map((p) => (
                <li key={p} className="border border-[var(--color-borgonha)]/30 px-3 py-1">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {doc?.galeria?.length ? (
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3">
            {doc.galeria.map((img, i) => {
              const u = urlForImage(img)?.width(600).height(600).url()
              if (!u) return null
              return (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <Image src={u} alt="" fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" loading="lazy" />
                </div>
              )
            })}
          </div>
        ) : galeriaFallback?.length ? (
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3">
            {galeriaFallback.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden bg-[var(--color-creme-escuro)]">
                <Image
                  src={src}
                  alt={`${titulo} — fotografia ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
