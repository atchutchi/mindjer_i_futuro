import { defineField, defineType } from "sanity"

export default defineType({
  name: "testemunho",
  title: "Testemunho",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Citação", type: "text", validation: (r) => r.required() }),
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "programa", title: "Programa", type: "string" }),
    defineField({ name: "foto", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "destaque", title: "Destaque na homepage", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "nome", subtitle: "programa" },
  },
})
