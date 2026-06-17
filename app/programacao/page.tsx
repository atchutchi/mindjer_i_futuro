import type { Metadata } from "next"
import { programacao2026, type Programacao2026Item } from "@/lib/programacao-2026"

export const metadata: Metadata = {
  title: "Programação 2026",
  description:
    "Programação anual da Mindjer i Futuro 2026, com workshops, diálogos e conferências para mulheres na Guiné-Bissau.",
}

const tipoCor: Record<Programacao2026Item["tipo"], string> = {
  Workshop: "text-[var(--color-borgonha)]",
  Conferência: "text-[var(--color-borgonha-claro)]",
  Diálogo: "text-[var(--color-borgonha)]",
}

const formatMes = (value: string) =>
  new Date(value).toLocaleDateString("pt-PT", { month: "short" }).replace(".", "")

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
          {programacao2026.map((ev, i) => (
            <div
              key={`${ev.data}-${ev.titulo}`}
              className={`flex items-start gap-5 py-6 md:gap-8 ${
                i < programacao2026.length - 1
                  ? "border-b border-[var(--color-borgonha)]/10"
                  : ""
              }`}
            >
              {/* Date box */}
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-sm bg-[var(--color-borgonha)] text-[var(--color-branco)] md:h-20 md:w-20">
                <span className={`${ev.dia ? "text-lg md:text-xl" : "text-[0.62rem] md:text-xs"} font-semibold leading-tight`}>
                  {ev.dia ?? "A definir"}
                </span>
                <span className="text-xs font-light uppercase tracking-wider md:text-sm">
                  {formatMes(ev.data)}
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
          Todas as actividades serão no Centro Cultural Francês.
        </p>
      </div>
    </div>
  )
}
