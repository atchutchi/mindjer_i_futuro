import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { fetchTodosProjectos } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { actividadesRealizadas, projectosFallback } from "@/lib/site-content"
import ProjectoCard, { type ProjectoPreview } from "@/components/projectos/ProjectoCard"

export const metadata: Metadata = {
  title: "Actividades realizadas",
  description:
    "Workshops, mentoria, bolsas, diálogos, podcast e conferências da Mindjer i Futuro na Guiné-Bissau.",
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
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-label mb-3 text-[var(--color-ouro-escuro)]">Impacto</p>
        <h1 className="font-cormorant text-section-title mb-6 text-[var(--color-borgonha)]">
          Actividades realizadas
        </h1>
        <p className="mb-14 max-w-2xl text-lg font-light text-[var(--color-preto)]/75">
          Mais de 30 actividades entre capacitação profissional, mentoria, bolsas, diálogos, angariação,
          podcast e conferências para mulheres guineenses.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {list.map((p, i) => (
            <ProjectoCard key={p.slug} {...p} index={i} />
          ))}
        </div>
        <section className="mt-20 border-t border-[var(--color-borgonha)]/15 pt-14">
          <p className="text-label mb-3 text-[var(--color-ouro-escuro)]">Temas</p>
          <h2 className="font-cormorant mb-6 text-4xl font-semibold text-[var(--color-borgonha)]">
            30+ actividades por tema
          </h2>
          <p className="mb-10 max-w-3xl text-base font-light leading-relaxed text-[var(--color-preto)]/75">
            Abaixo está a organização dos principais temas já realizados, com número de edições, participantes,
            parceiros e uma breve descrição de cada actividade.
          </p>
          <div className="overflow-hidden border border-[var(--color-borgonha)]/15 bg-white/45">
            <div className="hidden grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-4 border-b border-[var(--color-borgonha)]/15 px-5 py-4 text-xs font-medium uppercase tracking-widest text-[var(--color-borgonha)] lg:grid">
              <span>Tema</span>
              <span>Edições</span>
              <span>Participantes</span>
              <span>Parceiros</span>
            </div>
            <div className="divide-y divide-[var(--color-borgonha)]/12">
              {actividadesRealizadas.map((atividade) => (
                <article key={atividade.tema} className="grid gap-5 px-5 py-6 lg:grid-cols-[9rem_1.2fr_0.8fr_1fr_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-creme-escuro)] lg:aspect-square">
                    <Image
                      src={atividade.imagemUrl}
                      alt={atividade.tema}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 144px"
                    />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-borgonha)]">
                      {atividade.tema}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[var(--color-preto)]/75">
                      {atividade.descricao}
                    </p>
                  </div>
                  <p className="text-sm font-light text-[var(--color-preto)]/75">
                    <span className="text-label mb-1 block text-[var(--color-borgonha)] lg:hidden">Edições</span>
                    {atividade.edicoes}
                  </p>
                  <p className="text-sm font-light text-[var(--color-preto)]/75">
                    <span className="text-label mb-1 block text-[var(--color-borgonha)] lg:hidden">Participantes</span>
                    {atividade.participantes}
                  </p>
                  <p className="text-sm font-light text-[var(--color-preto)]/75">
                    <span className="text-label mb-1 block text-[var(--color-borgonha)] lg:hidden">Parceiros</span>
                    {atividade.parceiros}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-16 text-center">
          <Link
            href="/contacto"
            className="text-label text-[var(--color-borgonha)] underline decoration-[var(--color-ouro-escuro)] underline-offset-8 md:cursor-none"
          >
            Queres colaborar?
          </Link>
        </div>
      </div>
    </div>
  )
}
