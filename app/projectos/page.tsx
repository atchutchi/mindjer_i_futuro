import type { Metadata } from "next"
import Link from "next/link"
import { fetchTodosProjectos } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { projectosFallback } from "@/lib/site-content"
import ProjectoCard, { type ProjectoPreview } from "@/components/projectos/ProjectoCard"

export const metadata: Metadata = {
  title: "Projectos",
  description:
    "Cursos, mentoria, bolsas, cultura e podcast — iniciativas Mindjer i Futuro na Guiné-Bissau.",
}

type SanityProjecto = {
  titulo: string
  slug: string
  categoria?: string
  imagemCapa?: unknown
}

const buildList = (raw: SanityProjecto[] | null): ProjectoPreview[] => {
  if (raw?.length) {
    return raw.map((p, i) => ({
      titulo: p.titulo,
      slug: p.slug,
      categoria: p.categoria ?? "Capacitação",
      imagemUrl:
        urlForImage(p.imagemCapa)?.width(900).height(1125).url() ??
        projectosFallback[i % projectosFallback.length].imagemCapaUrl,
    }))
  }
  return projectosFallback.map((p) => ({
    titulo: p.titulo,
    slug: p.slug,
    categoria: p.categoria,
    imagemUrl: p.imagemCapaUrl,
  }))
}

export default async function ProjectosPage() {
  const raw = await fetchTodosProjectos()
  const list = buildList(raw as SanityProjecto[] | null)

  return (
    <div className="bg-[var(--color-cinza-fundo)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-label mb-3 text-[var(--color-ouro)]">Impacto</p>
        <h1 className="font-cormorant text-section-title mb-6 text-[var(--color-branco)]">Todos os projectos</h1>
        <p className="mb-14 max-w-2xl text-lg font-light text-white/75">
          Capacitação profissional, mentoria, bolsas, cultura e angariação — iniciativas sem fins lucrativos para
          mulheres guineenses.
        </p>
        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
          {list.map((p, i) => (
            <ProjectoCard key={p.slug} {...p} index={i} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/contacto"
            className="text-label text-[var(--color-ouro)] underline decoration-[var(--color-ouro)] underline-offset-8 md:cursor-none"
          >
            Queres colaborar?
          </Link>
        </div>
      </div>
    </div>
  )
}
