export const projectosDestaqueQuery = `*[_type == "projecto" && destaque == true] | order(coalesce(dataRealizacao, "2000-01-01") desc) [0...6] {
  _id,
  titulo,
  "slug": slug.current,
  categoria,
  descricaoBreve,
  destaque,
  impacto,
  imagemCapa
}`

export const todosProjectosQuery = `*[_type == "projecto"] | order(coalesce(dataRealizacao, "2000-01-01") desc) {
  _id,
  titulo,
  "slug": slug.current,
  categoria,
  descricaoBreve,
  destaque,
  impacto,
  imagemCapa
}`

export const projectoPorSlugQuery = `*[_type == "projecto" && slug.current == $slug][0] {
  ...,
  "slug": slug.current
}`

export const eventosQuery = `*[_type == "evento"] | order(data desc) {
  _id,
  titulo,
  "slug": slug.current,
  data,
  local,
  status,
  linkInscricao,
  imagemCapa,
  "descricaoBreve": string::substring(coalesce(pt::text(descricao), ""), 0, 200)
}`

export const eventoPorSlugQuery = `*[_type == "evento" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  oradores[]->{ nome, cargo, foto }
}`

export const equipaQuery = `*[_type == "membroEquipa"] | order(ordem asc) {
  _id,
  nome,
  cargo,
  bio,
  foto,
  linkedin,
  instagram,
  ordem
}`

export const testemunhoDestaqueQuery = `*[_type == "testemunho" && destaque == true][0] {
  quote,
  nome,
  programa,
  foto
}`
