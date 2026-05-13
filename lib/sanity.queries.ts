const published = `!(_id in path("drafts.**"))`

export const configuracaoSiteQuery = `*[_type == "configuracaoSite" && ${published}] | order(_updatedAt desc)[0] {
  titulo,
  descricao,
  heroEyebrow,
  heroTitulo,
  heroSubtitulo,
  heroImagens,
  paginas,
  instagram,
  emailContacto
}`

export const projectosDestaqueQuery = `*[_type == "projecto" && ${published} && destaque == true] | order(coalesce(dataRealizacao, "2000-01-01") desc) [0...6] {
  _id,
  titulo,
  "slug": slug.current,
  categoria,
  descricaoBreve,
  destaque,
  impacto,
  imagemCapa
}`

export const todosProjectosQuery = `*[_type == "projecto" && ${published}] | order(coalesce(dataRealizacao, "2000-01-01") desc) {
  _id,
  titulo,
  "slug": slug.current,
  categoria,
  descricaoBreve,
  destaque,
  impacto,
  imagemCapa
}`

export const projectoPorSlugQuery = `*[_type == "projecto" && ${published} && slug.current == $slug][0] {
  ...,
  "slug": slug.current
}`

export const projectosSlugsQuery = `*[_type == "projecto" && ${published} && defined(slug.current)] {
  "slug": slug.current,
  "updatedAt": _updatedAt
}`

export const eventosQuery = `*[_type == "evento" && ${published}] | order(data desc) {
  _id,
  titulo,
  "slug": slug.current,
  tipo,
  data,
  dataFim,
  local,
  status,
  linkInscricao,
  facilitador,
  capacidade,
  imagemCapa,
  "descricaoBreve": coalesce(descricaoBreve, string::substring(coalesce(pt::text(descricao), ""), 0, 200))
}`

export const eventoPorSlugQuery = `*[_type == "evento" && ${published} && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  oradores[]->{ nome, cargo, foto }
}`

export const eventosSlugsQuery = `*[_type == "evento" && ${published} && defined(slug.current)] {
  "slug": slug.current,
  "updatedAt": _updatedAt
}`

export const equipaQuery = `*[_type == "membroEquipa" && ${published}] | order(ordem asc) {
  _id,
  nome,
  cargo,
  bio,
  foto,
  linkedin,
  instagram,
  ordem
}`

export const testemunhoDestaqueQuery = `*[_type == "testemunho" && ${published} && destaque == true][0] {
  quote,
  nome,
  programa,
  foto
}`

export const artigosQuery = `*[_type == "artigo" && ${published} && estado == "publicado" && defined(slug.current)] | order(coalesce(publicadoEm, _createdAt) desc) {
  _id,
  titulo,
  "slug": slug.current,
  resumo,
  categoria,
  autor,
  imagemCapa,
  publicadoEm,
  destaque,
  tags,
  "updatedAt": _updatedAt
}`

export const artigosDestaqueQuery = `*[_type == "artigo" && ${published} && estado == "publicado" && destaque == true && defined(slug.current)] | order(coalesce(publicadoEm, _createdAt) desc) [0...3] {
  _id,
  titulo,
  "slug": slug.current,
  resumo,
  categoria,
  autor,
  imagemCapa,
  publicadoEm,
  tags
}`

export const artigoPorSlugQuery = `*[_type == "artigo" && ${published} && estado == "publicado" && slug.current == $slug][0] {
  ...,
  "slug": slug.current
}`

export const artigosSlugsQuery = `*[_type == "artigo" && ${published} && estado == "publicado" && defined(slug.current)] {
  "slug": slug.current,
  "updatedAt": _updatedAt
}`
