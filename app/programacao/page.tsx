import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programação 2026",
  description:
    "Programação anual da Mindjer i Futuro 2026 — workshops, diálogos e conferências para mulheres na Guiné-Bissau.",
}

type Evento = {
  dia: string
  mes: string
  tipo: "Workshop" | "Conferência" | "Diálogo"
  titulo: string
  facilitador: string
  capacidade?: number
}

const programacao: Evento[] = [
  {
    dia: "21",
    mes: "fev",
    tipo: "Workshop",
    titulo: "Falar em Público",
    facilitador: "Né Vaz",
    capacidade: 30,
  },
  {
    dia: "07",
    mes: "mar",
    tipo: "Conferência",
    titulo: "4ª Conferência de Liderança Feminina",
    facilitador: "",
  },
  {
    dia: "18",
    mes: "abr",
    tipo: "Workshop",
    titulo: "Educação Financeira",
    facilitador: "Noella Bangura",
    capacidade: 30,
  },
  {
    dia: "16",
    mes: "mai",
    tipo: "Diálogo",
    titulo: "Saúde Sexual & Reprodutiva",
    facilitador: "Maria Mendes",
    capacidade: 30,
  },
  {
    dia: "20",
    mes: "jun",
    tipo: "Workshop",
    titulo: "Empreendedorismo",
    facilitador: "Ismael Pereira",
    capacidade: 30,
  },
  {
    dia: "18",
    mes: "jul",
    tipo: "Diálogo",
    titulo: "Inteligência Emocional",
    facilitador: "por confirmar",
    capacidade: 30,
  },
  {
    dia: "15",
    mes: "ago",
    tipo: "Workshop",
    titulo: "Literacia Digital",
    facilitador: "Abiptom Sarl.",
    capacidade: 30,
  },
  {
    dia: "19",
    mes: "set",
    tipo: "Workshop",
    titulo: "Falar em Público",
    facilitador: "Né Vaz",
    capacidade: 30,
  },
  {
    dia: "17",
    mes: "out",
    tipo: "Workshop",
    titulo: "Liderança Feminina",
    facilitador: "Lamine Sonco",
    capacidade: 30,
  },
  {
    dia: "",
    mes: "nov",
    tipo: "Diálogo",
    titulo: "Direito das Meninas & Mulheres",
    facilitador: "por confirmar",
    capacidade: 30,
  },
  {
    dia: "19",
    mes: "dec",
    tipo: "Workshop",
    titulo: "Habilidades Profissionais",
    facilitador: "Ana Djú",
    capacidade: 30,
  },
]

const tipoCor: Record<Evento["tipo"], string> = {
  Workshop: "text-[var(--color-borgonha)]",
  Conferência: "text-[var(--color-borgonha-claro)]",
  Diálogo: "text-[var(--color-borgonha)]",
}

export default function ProgramacaoPage() {
  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-label mb-4 text-center text-[var(--color-borgonha)]">
          Agenda 2026
        </p>
        <h1 className="font-cormorant text-section-title mb-6 text-center text-[var(--color-borgonha)]">
          Programação
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg font-light text-[var(--color-preto)]/75">
          Workshops, diálogos e conferências para inspirar e capacitar mulheres ao longo de 2026.
        </p>

        {/* Timeline */}
        <div className="space-y-0">
          {programacao.map((ev, i) => (
            <div
              key={`${ev.mes}-${ev.titulo}`}
              className={`flex items-start gap-5 py-6 md:gap-8 ${
                i < programacao.length - 1
                  ? "border-b border-[var(--color-borgonha)]/10"
                  : ""
              }`}
            >
              {/* Date box */}
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-sm bg-[var(--color-borgonha)] text-[var(--color-branco)] md:h-20 md:w-20">
                {ev.dia && (
                  <span className="text-lg font-semibold leading-tight md:text-xl">
                    {ev.dia}
                  </span>
                )}
                <span className="text-xs font-light uppercase tracking-wider md:text-sm">
                  {ev.mes}
                </span>
              </div>

              {/* Event info */}
              <div className="flex-1 pt-1">
                <p className={`text-xs font-bold uppercase tracking-wider ${tipoCor[ev.tipo]}`}>
                  {ev.tipo === "Conferência"
                    ? ev.titulo
                    : `${ev.tipo}: ${ev.titulo}`}
                </p>
                {ev.tipo !== "Conferência" && (
                  <p className="mt-1.5 text-sm font-light text-[var(--color-preto)]/70">
                    {ev.facilitador}
                    {ev.capacidade ? ` | Cap. ${ev.capacidade} pessoas` : ""}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Location note */}
        <p className="mt-12 text-center text-sm font-light italic text-[var(--color-preto)]/60">
          Todas as atividades serão no Centro Cultural Francês.
        </p>
      </div>
    </div>
  )
}
