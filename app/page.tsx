import {
  fetchConfiguracaoSite,
  fetchEquipa,
  fetchEventos,
  fetchProjectosDestaque,
  fetchTestemunhoDestaque,
} from "@/lib/sanity.fetch"
import { urlForImage } from "@/lib/sanity.image"
import {
  equipaFallback,
  eventosFallbackOrdenados,
  projectosFallback,
  testemunhoFallback,
} from "@/lib/site-content"
import type { ProjectoPreview } from "@/components/projectos/ProjectoCard"
import type { EventoListItem } from "@/components/home/EventosSection"
import type { MembroItem } from "@/components/home/EquipaSection"
import HeroSection from "@/components/home/HeroSection"
import ManifestoSection from "@/components/home/ManifestoSection"
import ProjectosSection from "@/components/home/ProjectosSection"
import EventosSection from "@/components/home/EventosSection"
import ImpactoSection from "@/components/home/ImpactoSection"
import EquipaSection from "@/components/home/EquipaSection"
import ParceirosSection from "@/components/home/ParceirosSection"
import NewsletterSection from "@/components/home/NewsletterSection"

type SanityProjecto = {
  titulo: string
  slug: string
  categoria?: string
  imagemCapa?: unknown
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

type SanityMembro = {
  nome: string
  cargo?: string
  bio?: string
  foto?: unknown
  linkedin?: string
  instagram?: string
  ordem?: number
}

type SanityTestemunho = {
  quote: string
  nome: string
  programa?: string
  foto?: unknown
}

type SanitySiteConfig = {
  heroEyebrow?: string
  heroTitulo?: string
  heroSubtitulo?: string
  heroImagens?: unknown[]
}

const buildProjectos = (raw: SanityProjecto[] | null): ProjectoPreview[] => {
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
  return projectosFallback.slice(0, 7).map((p) => ({
    titulo: p.titulo,
    slug: p.slug,
    categoria: p.categoria,
    imagemUrl: p.imagemCapaUrl,
  }))
}

const buildEventos = (raw: SanityEvento[] | null): EventoListItem[] => {
  const fb = eventosFallbackOrdenados
  const mapSanity = (ev: SanityEvento, i: number): EventoListItem => ({
    titulo: ev.titulo,
    slug: ev.slug,
    data: ev.data,
    local: ev.local ?? "Bissau, Guiné-Bissau",
    descricaoBreve: ev.descricaoBreve,
    status: ev.status,
    imagemUrl:
      urlForImage(ev.imagemCapa)?.width(800).height(800).url() ??
      fb[i % fb.length].imagemCapaUrl,
  })
  const proximos = (items: EventoListItem[]) =>
    items
      .filter((evento) => new Date(evento.data).getTime() > Date.now())
      .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
      .slice(0, 3)

  if (raw?.length) {
    return proximos(raw.map(mapSanity))
  }
  return proximos(
    fb.map((ev) => ({
      titulo: ev.titulo,
      slug: ev.slug,
      data: ev.data,
      local: ev.local,
      descricaoBreve: ev.descricaoBreve,
      status: ev.status,
      imagemUrl: ev.imagemCapaUrl,
    })),
  )
}

const buildEquipa = (raw: SanityMembro[] | null): MembroItem[] => {
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

const buildTestemunho = (raw: SanityTestemunho | null) => {
  if (raw?.quote) {
    return {
      quote: raw.quote,
      nome: raw.nome,
      programa: raw.programa ?? "",
      fotoUrl: urlForImage(raw.foto)?.width(1920).height(1080).url() ?? undefined,
    }
  }
  return testemunhoFallback
}

const buildHero = (raw: SanitySiteConfig | null) => ({
  eyebrow: raw?.heroEyebrow?.includes("2022") ? undefined : raw?.heroEyebrow,
  titulo: raw?.heroTitulo,
  subtitulo: raw?.heroSubtitulo,
  slideUrls:
    raw?.heroImagens
      ?.map((img) => urlForImage(img)?.width(1920).height(1080).url())
      .filter((url): url is string => Boolean(url)) ?? undefined,
})

export default async function HomePage() {
  const [rawConfig, rawP, rawE, rawEq, rawT] = await Promise.all([
    fetchConfiguracaoSite(),
    fetchProjectosDestaque(),
    fetchEventos(),
    fetchEquipa(),
    fetchTestemunhoDestaque(),
  ])

  const projectos = buildProjectos(rawP as SanityProjecto[] | null)
  const eventos = buildEventos(rawE as SanityEvento[] | null)
  const equipa = buildEquipa(rawEq as SanityMembro[] | null)
  const testemunho = buildTestemunho(rawT as SanityTestemunho | null)
  const hero = buildHero(rawConfig as SanitySiteConfig | null)

  return (
    <>
      <HeroSection {...hero} />
      <ManifestoSection />
      <ProjectosSection projectos={projectos} />
      <EventosSection eventos={eventos} />
      <ImpactoSection
        quote={testemunho.quote}
        nome={testemunho.nome}
        programa={testemunho.programa}
        fotoUrl={testemunho.fotoUrl}
      />
      <EquipaSection membros={equipa} />
      <ParceirosSection />
      <NewsletterSection />
    </>
  )
}
