import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { fetchArtigos } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notícias, histórias, recursos e actualizações da Mindjer i Futuro.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Mindjer i Futuro",
    description:
      "Notícias, histórias, recursos e actualizações da Mindjer i Futuro.",
    url: `${site}/blog`,
    type: "website",
  },
}

type ArtigoPreview = {
  titulo: string
  slug: string
  resumo: string
  categoria?: string
  autor?: string
  imagemCapa?: { alt?: string }
  publicadoEm?: string
  tags?: string[]
}

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

export default async function BlogPage() {
  const artigos = ((await fetchArtigos()) as ArtigoPreview[] | null) ?? []

  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-label mb-4 text-center text-[var(--color-borgonha)]">Conteúdos</p>
        <h1 className="font-cormorant text-section-title mb-6 text-center text-[var(--color-borgonha)]">
          Blog
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg font-light text-[var(--color-preto)]/75">
          Notícias, histórias e recursos para acompanhar o trabalho da Mindjer i Futuro.
        </p>

        {artigos.length ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artigos.map((artigo) => {
              const imagemUrl =
                urlForImage(artigo.imagemCapa)?.width(900).height(620).url() ??
                "/projectos/identidades-diasporicas/capa.png"
              const categoria = artigo.categoria
                ? categoriaLabel[artigo.categoria] ?? artigo.categoria
                : "Blog"

              return (
                <article
                  key={artigo.slug}
                  className="group flex min-h-full flex-col overflow-hidden bg-[var(--color-branco)] shadow-[0_18px_45px_rgba(84,16,48,0.12)]"
                >
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="relative block aspect-[16/11] overflow-hidden bg-[var(--color-creme-escuro)] md:cursor-none"
                    aria-label={`Ler artigo: ${artigo.titulo}`}
                  >
                    <Image
                      src={imagemUrl}
                      alt={artigo.imagemCapa?.alt ?? artigo.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest">
                      <span className="text-[var(--color-borgonha)]">{categoria}</span>
                      <span className="inline-flex items-center gap-1 text-[var(--color-preto)]/55">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {dataLabel(artigo.publicadoEm)}
                      </span>
                    </div>
                    <h2 className="font-cormorant text-3xl font-semibold leading-tight text-[var(--color-borgonha)]">
                      <Link href={`/blog/${artigo.slug}`} className="md:cursor-none">
                        {artigo.titulo}
                      </Link>
                    </h2>
                    <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-[var(--color-preto)]/75">
                      {artigo.resumo}
                    </p>
                    <Link
                      href={`/blog/${artigo.slug}`}
                      className="text-label mt-6 inline-flex items-center gap-2 text-[var(--color-borgonha)] transition-colors hover:text-[var(--color-ouro-escuro)] md:cursor-none"
                    >
                      Ler artigo
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl border border-[var(--color-borgonha)]/15 bg-[var(--color-branco)] px-6 py-10 text-center">
            <p className="font-cormorant text-3xl text-[var(--color-borgonha)]">
              Ainda não há artigos publicados.
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[var(--color-preto)]/70">
              Quando os conteúdos forem publicados no Sanity Studio, aparecem aqui automaticamente.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
