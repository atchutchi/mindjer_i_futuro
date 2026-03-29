import { sanityClient, sanityConfigured } from "./sanity"
import {
  equipaQuery,
  eventosQuery,
  projectoPorSlugQuery,
  projectosDestaqueQuery,
  testemunhoDestaqueQuery,
  todosProjectosQuery,
  eventoPorSlugQuery,
} from "./sanity.queries"

export const fetchProjectosDestaque = async () => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(projectosDestaqueQuery)
  } catch {
    return null
  }
}

export const fetchTodosProjectos = async () => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(todosProjectosQuery)
  } catch {
    return null
  }
}

export const fetchProjectoBySlug = async (slug: string) => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(projectoPorSlugQuery, { slug })
  } catch {
    return null
  }
}

export const fetchEventos = async () => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(eventosQuery)
  } catch {
    return null
  }
}

export const fetchEventoBySlug = async (slug: string) => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(eventoPorSlugQuery, { slug })
  } catch {
    return null
  }
}

export const fetchEquipa = async () => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(equipaQuery)
  } catch {
    return null
  }
}

export const fetchTestemunhoDestaque = async () => {
  if (!sanityConfigured) return null
  try {
    return await sanityClient.fetch(testemunhoDestaqueQuery)
  } catch {
    return null
  }
}
