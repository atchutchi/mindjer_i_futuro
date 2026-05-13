import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays } from "lucide-react"
import PortableBody from "@/components/content/PortableBody"
import { fetchArtigoBySlug, fetchArtigoSlugs } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"

type Props = { params: Promise<{ slug: string }> }

type ArtigoDetail = {
  titulo: string
  slug: string
  resumo: string
  categoria?: string
  autor?: string
  imagemCapa?: { alt?: string }
  publicadoEm?: string
  conteudo?: unknown
  tags?: string[]
  seoTitulo?: string
  seoDescricao?: string
}

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

const categoriaLabel: Record<string, string> = {
  noticias: "Notícias",
  historias: "Histórias",
  recursos: "Recursos",
  eventos: "Eventos",
  opiniao: "Opinião",
}

const dataLabel = (value?: string) => {
  if (!value) return "Sem data"
  return new Date(value).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export async function generateStaticParams() {
  const slugs = ((await fetchArtigoSlugs()) as { slug: string }[] | null) ?? []
  return slugs.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const artigo = (await fetchArtigoBySlug(slug)) as ArtigoDetail | null
  if (!artigo) {
    return { title: "Artigo" }
  }

  const image = urlForImage(artigo.imagemCapa)?.width(1200).height(630).url()
  const title = artigo.seoTitulo ?? artigo.titulo
  const description = artigo.seoDescricao ?? artigo.resumo
  const url = `${site}/blog/${artigo.slug}`

  return {
    title,
    description,
    alternates: { canonical: `/blog/${artigo.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: artigo.publicadoEm,
      authors: artigo.autor ? [artigo.autor] : undefined,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: artigo.imagemCapa?.alt ?? artigo.titulo }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params
  const artigo = (await fetchArtigoBySlug(slug)) as ArtigoDetail | null
  if (!artigo) notFound()

  const imagemUrl =
    urlForImage(artigo.imagemCapa)?.width(1400).height(900).url() ??
    "/projectos/identidades-diasporicas/capa.png"
  const categoria = artigo.categoria
    ? categoriaLabel[artigo.categoria] ?? artigo.categoria
    : "Blog"

  return (
    <article className="bg-[var(--color-creme)] pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Link
          href="/blog"
          className="text-label mb-8 inline-flex items-center gap-2 text-[var(--color-borgonha)] hover:text-[var(--color-ouro-escuro)] md:cursor-none"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Blog
        </Link>
        <p className="text-label mb-4 text-[var(--color-ouro-escuro)]">{categoria}</p>
        <h1 className="font-cormorant text-section-title mb-6 text-[var(--color-borgonha)]">
          {artigo.titulo}
        </h1>
        <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-[var(--color-preto)]/65">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[var(--color-borgonha)]" aria-hidden />
            {dataLabel(artigo.publicadoEm)}
          </span>
          {artigo.autor ? <span>Por {artigo.autor}</span> : null}
        </div>
        <div className="relative mb-12 aspect-[16/10] overflow-hidden bg-[var(--color-creme-escuro)]">
          <Image
            src={imagemUrl}
            alt={artigo.imagemCapa?.alt ?? artigo.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
        <p className="mb-10 text-xl font-light leading-relaxed text-[var(--color-preto)]/85">
          {artigo.resumo}
        </p>
        <PortableBody value={artigo.conteudo} className="prose-mif" />
        {artigo.tags?.length ? (
          <ul className="mt-12 flex flex-wrap gap-2 border-t border-[var(--color-borgonha)]/15 pt-8">
            {artigo.tags.map((tag) => (
              <li
                key={tag}
                className="border border-[var(--color-borgonha)]/25 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-borgonha)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
