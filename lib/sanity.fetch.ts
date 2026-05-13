import { sanityClient, sanityConfigured } from "./sanity"
import {
  artigoPorSlugQuery,
  artigosQuery,
  artigosSlugsQuery,
  configuracaoSiteQuery,
  equipaQuery,
  eventosQuery,
  eventosSlugsQuery,
  projectoPorSlugQuery,
  projectosSlugsQuery,
  projectosDestaqueQuery,
  testemunhoDestaqueQuery,
  todosProjectosQuery,
  eventoPorSlugQuery,
} from "./sanity.queries"

type QueryParams = Record<string, string | number | boolean | null>

const fetchFromSanity = async <T>(
  label: string,
  query: string,
  params?: QueryParams,
): Promise<T | null> => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch<T>(query, params ?? {})
  } catch (error) {
    console.error(`[sanity] Falha ao carregar ${label}`, error)
    return null
  }
}

export const fetchConfiguracaoSite = async () =>
  fetchFromSanity("configuração do site", configuracaoSiteQuery)

export const fetchProjectosDestaque = async () => {
  return fetchFromSanity("projectos em destaque", projectosDestaqueQuery)
}

export const fetchTodosProjectos = async () => {
  return fetchFromSanity("projectos", todosProjectosQuery)
}

export const fetchProjectoBySlug = async (slug: string) => {
  return fetchFromSanity("projecto", projectoPorSlugQuery, { slug })
}

export const fetchEventos = async () => {
  return fetchFromSanity("eventos", eventosQuery)
}

export const fetchEventoBySlug = async (slug: string) => {
  return fetchFromSanity("evento", eventoPorSlugQuery, { slug })
}

export const fetchEquipa = async () => {
  return fetchFromSanity("equipa", equipaQuery)
}

export const fetchTestemunhoDestaque = async () => {
  return fetchFromSanity("testemunho em destaque", testemunhoDestaqueQuery)
}

export const fetchArtigos = async () => {
  return fetchFromSanity("artigos", artigosQuery)
}

export const fetchArtigoBySlug = async (slug: string) => {
  return fetchFromSanity("artigo", artigoPorSlugQuery, { slug })
}

export const fetchArtigoSlugs = async () => {
  return fetchFromSanity("slugs de artigos", artigosSlugsQuery)
}

export const fetchEventoSlugs = async () => {
  return fetchFromSanity("slugs de eventos", eventosSlugsQuery)
}

export const fetchProjectoSlugs = async () => {
  return fetchFromSanity("slugs de projectos", projectosSlugsQuery)
}
