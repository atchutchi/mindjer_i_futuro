import { defineField, defineType } from "sanity"

export default defineType({
  name: "projecto",
  title: "Projecto",
  type: "document",
  fields: [
    defineField({ name: "titulo", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titulo", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categoria",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Capacitação", value: "Capacitação" },
          { title: "Mentoria", value: "Mentoria" },
          { title: "Cultura", value: "Cultura" },
          { title: "Bolsas", value: "Bolsas" },
          { title: "Podcast", value: "Podcast" },
          { title: "Angariação", value: "Angariação" },
        ],
      },
    }),
    defineField({ name: "descricaoBreve", title: "Descrição breve", type: "text", rows: 3 }),
    defineField({ name: "descricaoCompleta", title: "Descrição completa", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "imagemCapa",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "galeria",
      title: "Galeria",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "destaque", title: "Destaque na homepage", type: "boolean", initialValue: false }),
    defineField({ name: "parceiros", title: "Parceiros", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "impacto", title: "Impacto (ex.: 30 participantes)", type: "string" }),
    defineField({ name: "dataRealizacao", title: "Data de realização", type: "date" }),
  ],
  preview: {
    select: { title: "titulo", media: "imagemCapa" },
  },
})
