import { defineField, defineType } from "sanity"

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
    defineField({ name: "data", title: "Data e hora", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "local", title: "Local", type: "string" }),
    defineField({ name: "descricao", title: "Descrição", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "imagemCapa",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
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
    defineField({ name: "linkInscricao", title: "Link de inscrição", type: "url" }),
    defineField({ name: "capacidade", title: "Capacidade", type: "number" }),
    defineField({
      name: "oradores",
      title: "Oradores",
      type: "array",
      of: [{ type: "reference", to: [{ type: "membroEquipa" }] }],
    }),
  ],
  preview: {
    select: { title: "titulo", media: "imagemCapa", subtitle: "status" },
  },
})
