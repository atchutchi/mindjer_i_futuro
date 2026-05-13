import { defineArrayMember, defineField, defineType } from "sanity"

const linkMark = {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["https", "mailto", "tel"],
          allowRelative: false,
        }),
    }),
  ],
}

export default defineType({
  name: "artigo",
  title: "Artigo do blog",
  type: "document",
  fields: [
    defineField({
      name: "estado",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "Rascunho", value: "rascunho" },
          { title: "Publicado", value: "publicado" },
          { title: "Arquivado", value: "arquivado" },
        ],
        layout: "radio",
      },
      initialValue: "rascunho",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required().min(5).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titulo", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resumo",
      title: "Resumo",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "categoria",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Notícias", value: "noticias" },
          { title: "Histórias", value: "historias" },
          { title: "Recursos", value: "recursos" },
          { title: "Eventos", value: "eventos" },
          { title: "Opinião", value: "opiniao" },
        ],
      },
      initialValue: "noticias",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "autor",
      title: "Autor",
      type: "string",
      initialValue: "Mindjer i Futuro",
      validation: (rule) => rule.required().max(80),
    }),
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
          validation: (rule) => rule.required().max(140),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publicadoEm",
      title: "Data de publicação",
      type: "datetime",
      validation: (rule) =>
        rule.custom((value, context) => {
          const document = context.document as { estado?: string } | undefined
          if (document?.estado === "publicado" && !value) {
            return "A data é obrigatória para artigos publicados."
          }
          return true
        }),
    }),
    defineField({
      name: "destaque",
      title: "Destaque",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "conteudo",
      title: "Conteúdo",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Título 2", value: "h2" },
            { title: "Título 3", value: "h3" },
            { title: "Citação", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Itálico", value: "em" },
            ],
            annotations: [linkMark],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              validation: (rule) => rule.required().max(140),
            }),
            defineField({
              name: "legenda",
              title: "Legenda",
              type: "string",
              validation: (rule) => rule.max(160),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "seoTitulo",
      title: "Título SEO",
      type: "string",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescricao",
      title: "Descrição SEO",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: "titulo",
      subtitle: "estado",
      media: "imagemCapa",
    },
  },
})
