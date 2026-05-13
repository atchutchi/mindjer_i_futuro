import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: "evento",
  title: "Evento",
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
      name: "tipo",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Workshop", value: "workshop" },
          { title: "Conferência", value: "conferencia" },
          { title: "Diálogo", value: "dialogo" },
          { title: "Mentoria", value: "mentoria" },
          { title: "Outro", value: "outro" },
        ],
      },
      initialValue: "workshop",
    }),
    defineField({ name: "data", title: "Data e hora de início", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "dataFim", title: "Data e hora de fim", type: "datetime" }),
    defineField({ name: "local", title: "Local", type: "string" }),
    defineField({ name: "descricaoBreve", title: "Descrição breve", type: "text", rows: 3, validation: (r) => r.max(220) }),
    defineField({ name: "descricao", title: "Descrição", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "imagemCapa",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (r) => r.max(140),
        }),
      ],
    }),
    defineField({
      name: "galeria",
      title: "Galeria",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              validation: (r) => r.max(140),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "status",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "Passado", value: "passado" },
          { title: "Próximo", value: "proximo" },
          { title: "Inscrições abertas", value: "inscricoes-abertas" },
        ],
      },
      initialValue: "proximo",
    }),
    defineField({
      name: "linkInscricao",
      title: "Link de inscrição",
      type: "url",
      validation: (r) => r.uri({ scheme: ["https"] }),
    }),
    defineField({ name: "capacidade", title: "Capacidade", type: "number" }),
    defineField({ name: "facilitador", title: "Facilitador", type: "string" }),
    defineField({ name: "parceiros", title: "Parceiros", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "destaque", title: "Destaque na homepage", type: "boolean", initialValue: false }),
    defineField({
      name: "oradores",
      title: "Oradores",
      type: "array",
      of: [{ type: "reference", to: [{ type: "membroEquipa" }] }],
    }),
    defineField({ name: "seoTitulo", title: "Título SEO", type: "string", validation: (r) => r.max(70) }),
    defineField({ name: "seoDescricao", title: "Descrição SEO", type: "text", rows: 2, validation: (r) => r.max(160) }),
  ],
  preview: {
    select: { title: "titulo", media: "imagemCapa", subtitle: "status" },
  },
})
