"use client"

import Link from "next/link"
import ProjectoCard, { type ProjectoPreview } from "@/components/projectos/ProjectoCard"

type Props = {
  projectos: ProjectoPreview[]
}

const ProjectosSection = ({ projectos }: Props) => (
  <section className="border-b border-[var(--color-borgonha)]/10 bg-[var(--color-creme)] px-5 py-[12vh] md:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-label mb-3 text-[var(--color-ouro-escuro)]">Impacto</p>
          <h2 className="font-cormorant text-section-title text-[var(--color-borgonha)]">Projectos</h2>
        </div>
        <Link
          href="/projectos"
          className="group relative inline-flex w-fit text-sm font-medium uppercase tracking-widest text-[var(--color-borgonha)] md:cursor-none"
        >
          Ver todos os projectos
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-borgonha)] transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectos.map((p, i) => (
          <ProjectoCard key={p.slug} {...p} index={i} />
        ))}
      </div>
    </div>
  </section>
)

export default ProjectosSection
