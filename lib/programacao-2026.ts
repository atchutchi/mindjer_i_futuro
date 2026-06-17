export type Programacao2026Item = {
  data: string
  dia?: string
  tipo: "Workshop" | "Conferência" | "Diálogo"
  titulo: string
  facilitador: string
  capacidade?: number
  local: string
}

export const programacao2026: Programacao2026Item[] = [
  {
    data: "2026-02-21T12:00:00.000Z",
    dia: "21",
    tipo: "Workshop",
    titulo: "Falar em Público",
    facilitador: "Né Vaz",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-03-07T12:00:00.000Z",
    dia: "07",
    tipo: "Conferência",
    titulo: "4.ª Conferência de Liderança Feminina",
    facilitador: "MiF",
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-04-18T12:00:00.000Z",
    dia: "18",
    tipo: "Workshop",
    titulo: "Educação Financeira",
    facilitador: "Noella Bangura",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-05-16T12:00:00.000Z",
    dia: "16",
    tipo: "Diálogo",
    titulo: "Saúde Sexual e Reprodutiva",
    facilitador: "Maria Mendes",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-06-20T12:00:00.000Z",
    dia: "20",
    tipo: "Workshop",
    titulo: "Empreendedorismo",
    facilitador: "Ismael Pereira",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-07-18T12:00:00.000Z",
    dia: "18",
    tipo: "Diálogo",
    titulo: "Inteligência Emocional",
    facilitador: "por confirmar",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-08-15T12:00:00.000Z",
    dia: "15",
    tipo: "Workshop",
    titulo: "Literacia Digital",
    facilitador: "Abiptom SARL",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-09-19T12:00:00.000Z",
    dia: "19",
    tipo: "Workshop",
    titulo: "Falar em Público",
    facilitador: "Né Vaz",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-10-17T12:00:00.000Z",
    dia: "17",
    tipo: "Workshop",
    titulo: "Liderança Feminina",
    facilitador: "Lamine Sonco",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-11-01T12:00:00.000Z",
    tipo: "Diálogo",
    titulo: "Direito das Meninas e Mulheres",
    facilitador: "por confirmar",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
  {
    data: "2026-12-19T12:00:00.000Z",
    dia: "19",
    tipo: "Workshop",
    titulo: "Habilidades Profissionais",
    facilitador: "Ana Djú",
    capacidade: 30,
    local: "Centro Cultural Francês",
  },
]
