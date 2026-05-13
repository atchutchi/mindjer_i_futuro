import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: "configuracaoSite",
  title: "Configuração do site",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Nome público",
      type: "string",
      initialValue: "Mindjer i Futuro",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "descricao",
      title: "Descrição global",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "heroEyebrow",
      title: "Texto pequeno do hero",
      type: "string",
      initialValue: "Guiné-Bissau · Desde 2022",
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: "heroTitulo",
      title: "Título do hero",
      type: "string",
      initialValue: "Mindjer i Futuro",
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: "heroSubtitulo",
      title: "Subtítulo do hero",
      type: "string",
      initialValue: "Conferência de Liderança Feminina",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "heroImagens",
      title: "Imagens do hero",
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
              validation: (rule) => rule.required().max(140),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "paginas",
      title: "Imagens e textos por página",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "pagina",
              title: "Página",
              type: "string",
              options: {
                list: [
                  { title: "Sobre", value: "sobre" },
                  { title: "Projectos", value: "projectos" },
                  { title: "Eventos", value: "eventos" },
                  { title: "Programação", value: "programacao" },
                  { title: "Blog", value: "blog" },
                  { title: "Calendário", value: "calendario" },
                  { title: "Equipa", value: "equipa" },
                  { title: "Parceiros", value: "parceiros" },
                  { title: "Contacto", value: "contacto" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "titulo",
              title: "Título",
              type: "string",
              validation: (rule) => rule.max(100),
            }),
            defineField({
              name: "descricao",
              title: "Descrição",
              type: "text",
              rows: 2,
              validation: (rule) => rule.max(220),
            }),
            defineField({
              name: "imagem",
              title: "Imagem",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Texto alternativo",
                  type: "string",
                  validation: (rule) => rule.max(140),
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "pagina", subtitle: "titulo", media: "imagem" },
          },
        }),
      ],
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "emailContacto",
      title: "Email de contacto",
      type: "email",
    }),
  ],
  preview: {
    select: { title: "titulo" },
  },
})
