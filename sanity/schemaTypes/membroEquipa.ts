import { defineField, defineType } from "sanity"

export default defineType({
  name: "membroEquipa",
  title: "Membro da equipa",
  type: "document",
  fields: [
    defineField({ name: "nome", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "cargo", title: "Cargo", type: "string" }),
    defineField({ name: "bio", title: "Biografia", type: "text" }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
    defineField({ name: "instagram", title: "Instagram", type: "url" }),
    defineField({ name: "ordem", title: "Ordem", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "nome", subtitle: "cargo", media: "foto" },
  },
})
