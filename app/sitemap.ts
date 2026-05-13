import type { MetadataRoute } from "next"
import {
  fetchArtigoSlugs,
  fetchEventoSlugs,
  fetchProjectoSlugs,
} from "@/lib/sanity.fetch"
import { eventosFallbackOrdenados, projectosFallback } from "@/lib/site-content"

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

type SlugEntry = {
  slug: string
  updatedAt?: string
}

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>

const staticRoutes = [
  "",
  "/sobre",
  "/projectos",
  "/eventos",
  "/calendario",
  "/blog",
  "/programacao",
  "/equipa",
  "/parceiros",
  "/contacto",
]

const toDate = (value?: string) => (value ? new Date(value) : new Date())

const staticFrequency = (path: string): ChangeFrequency =>
  path === "/blog" || path === "/eventos" ? "weekly" : "monthly"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projectoSlugs, eventoSlugs, artigoSlugs] = await Promise.all([
    fetchProjectoSlugs(),
    fetchEventoSlugs(),
    fetchArtigoSlugs(),
  ])

  const projectos = new Map<string, SlugEntry>()
  projectosFallback.forEach((p) => projectos.set(p.slug, { slug: p.slug }))
  ;((projectoSlugs as SlugEntry[] | null) ?? []).forEach((p) => projectos.set(p.slug, p))

  const eventos = new Map<string, SlugEntry>()
  eventosFallbackOrdenados.forEach((e) => eventos.set(e.slug, { slug: e.slug }))
  ;((eventoSlugs as SlugEntry[] | null) ?? []).forEach((e) => eventos.set(e.slug, e))

  const artigos = ((artigoSlugs as SlugEntry[] | null) ?? []).filter((a) => a.slug)

  return [
    ...staticRoutes.map((path) => ({
      url: `${site}${path}`,
      lastModified: new Date(),
      changeFrequency: staticFrequency(path),
      priority: path === "" ? 1 : 0.8,
    })),
    ...[...projectos.values()].map((p) => ({
      url: `${site}/projectos/${p.slug}`,
      lastModified: toDate(p.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...[...eventos.values()].map((e) => ({
      url: `${site}/eventos/${e.slug}`,
      lastModified: toDate(e.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...artigos.map((a) => ({
      url: `${site}/blog/${a.slug}`,
      lastModified: toDate(a.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ]
}
