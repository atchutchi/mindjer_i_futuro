import type { Metadata } from "next"
import { fetchEquipa } from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import { equipaFallback } from "@/lib/site-content"
import EquipaSection from "@/components/home/EquipaSection"
import type { MembroItem } from "@/components/home/EquipaSection"

export const metadata: Metadata = {
  title: "Equipa",
  description: "Conhece as mulheres por detrás da Mindjer i Futuro e da conferência de liderança feminina.",
}

type SanityMembro = {
  nome: string
  cargo?: string
  bio?: string
  foto?: unknown
  linkedin?: string
  instagram?: string
}

const mapMembros = (raw: SanityMembro[] | null): MembroItem[] => {
  if (raw?.length) {
    return raw.map((m) => ({
      nome: m.nome,
      cargo: m.cargo ?? "",
      bio: m.bio ?? "",
      fotoUrl: urlForImage(m.foto)?.width(600).height(800).url() ?? undefined,
      linkedin: m.linkedin,
      instagram: m.instagram,
    }))
  }
  return equipaFallback.map((m) => ({
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
          Mulheres que lideram a mudança
        </h1>
        <p className="mb-16 max-w-2xl text-lg font-light text-white/75">
          Promotoras, mentoras e voluntárias que constroem, dia a dia, o futuro que queremos ver.
        </p>
      </div>
      <EquipaSection membros={membros} variant="page" />
    </div>
  )
}
