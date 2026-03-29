import type { Metadata } from "next"
import { fetchEquipa } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { equipaFallback } from "@/lib/site-content"
import EquipaSection from "@/components/home/EquipaSection"
import type { MembroItem } from "@/components/home/EquipaSection"

export const metadata: Metadata = {
  title: "Equipa",
  description:
    "Conhece as co-fundadoras, coordenadoras e assistentes que constroem a Mindjer i Futuro na Guiné-Bissau.",
}

type SanityMembro = {
  nome: string
  cargo?: string
  bio?: string
  foto?: unknown
  linkedin?: string
  instagram?: string
  ordem?: number
}

const mapMembros = (raw: SanityMembro[] | null): MembroItem[] => {
  if (raw?.length) {
    return [...raw]
      .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))
      .map((m) => ({
        nome: m.nome,
        cargo: m.cargo ?? "",
        bio: m.bio ?? "",
        fotoUrl: urlForImage(m.foto)?.width(600).height(800).url() ?? undefined,
        linkedin: m.linkedin,
        instagram: m.instagram,
      }))
  }
  return [...equipaFallback]
    .sort((a, b) => a.ordem - b.ordem)
    .map((m) => ({
      nome: m.nome,
      cargo: m.cargo,
      bio: m.bio,
      fotoUrl: m.fotoUrl,
      linkedin: m.linkedin,
      instagram: m.instagram,
    }))
}

export default async function EquipaPage() {
  const raw = await fetchEquipa()
  const membros = mapMembros(raw as SanityMembro[] | null)

  return (
    <div className="bg-[var(--color-preto)] pb-8 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-label mb-3 text-[var(--color-ouro)]">Equipa completa</p>
        <h1 className="font-cormorant text-section-title mb-6 text-[var(--color-branco)]">
          Quem somos
        </h1>
        <p className="mb-16 max-w-2xl text-lg font-light text-white/75">
          Co-fundadoras, coordenação e equipa operacional que levam a conferência e os projectos a cada edição.
        </p>
      </div>
      <EquipaSection membros={membros} variant="page" />
    </div>
  )
}
