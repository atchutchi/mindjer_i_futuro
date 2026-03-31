import type { Metadata } from "next"
import Link from "next/link"
import Button from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Sobre a organização",
  description:
    "Mindjer i Futuro — Conferência de Liderança Feminina na Guiné-Bissau. Missão, valores e impacto.",
}

const valores = [
  {
    titulo: "Igualdade",
    descricao:
      "Acreditamos num mundo onde todas as mulheres têm os mesmos direitos, oportunidades e reconhecimento.",
  },
  {
    titulo: "Empoderamento",
    descricao:
      "Valorizamos a força interior de cada mulher e apoiamos o seu crescimento e autonomia.",
  },
  {
    titulo: "Educação",
    descricao:
      "Defendemos o conhecimento como ferramenta de transformação e liberdade.",
  },
  {
    titulo: "Sororidade",
    descricao:
      "Cultivamos uma rede de apoio, união e partilha entre mulheres, na Guiné-Bissau e na diáspora.",
  },
  {
    titulo: "Coragem",
    descricao:
      "Incentivamos mulheres a desafiar limites, quebrar barreiras e ocupar o seu lugar.",
  },
  {
    titulo: "Impacto",
    descricao:
      "Trabalhamos para gerar mudanças reais e duradouras na vida das mulheres e na sociedade.",
  },
]

export default function SobrePage() {
  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        {/* Quem Somos */}
        <p className="text-label mb-4 text-[var(--color-borgonha)]">Quem somos</p>
        <h1 className="font-cormorant text-section-title mb-10 text-[var(--color-borgonha)]">
          Mindjer i Futuro
        </h1>
        <div className="space-y-6 text-base font-light leading-relaxed text-[var(--color-preto)]/90">
          <p>
            A{" "}
            <strong className="font-medium text-[var(--color-borgonha)]">
              Mindjer i Futuro (MiF)
            </strong>{" "}
            nasce da convicção de que quando uma mulher avança, toda a sociedade progride. A
            Mindjer i Futuro acredita no poder, na voz e no potencial das jovens raparigas e
            mulheres da Guiné-Bissau.
          </p>
          <p>
            A MiF cria oportunidades e fortalece capacidades, promovendo uma geração de mulheres
            confiantes, preparadas e protagonistas do seu próprio futuro. Através da educação, da
            mentoria e da criação de redes — incluindo a diáspora — construímos pontes para um
            amanhã mais justo, inclusivo e cheio de possibilidades.
          </p>
        </div>

        {/* Missão */}
        <div className="mt-20">
          <p className="text-label mb-4 text-[var(--color-borgonha)]">Missão</p>
          <h2 className="font-cormorant mb-8 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-[var(--color-borgonha)]">
            Transformar potencial em ação
          </h2>
          <p className="text-base font-light leading-relaxed text-[var(--color-preto)]/90">
            Inspirar, capacitar e acompanhar meninas e mulheres guineenses na construção do seu
            percurso pessoal e profissional, promovendo o acesso ao conhecimento, à liderança e à
            autonomia económica. A nossa missão é transformar potencial em ação, contribuindo para
            uma sociedade onde todas as mulheres tenham voz, espaço e oportunidade de prosperar.
          </p>
        </div>

        {/* Valores */}
        <div className="mt-20">
          <p className="text-label mb-4 text-[var(--color-borgonha)]">Os nossos valores</p>
          <h2 className="font-cormorant mb-12 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-[var(--color-borgonha)]">
            O que nos move
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v.titulo} className="space-y-2">
                <h3 className="font-cormorant text-xl font-semibold text-[var(--color-borgonha)]">
                  {v.titulo}
                </h3>
                <p className="text-sm font-light leading-relaxed text-[var(--color-preto)]/80">
                  {v.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-20 flex flex-col gap-4 sm:flex-row">
          <Button href="/projectos">Ver projectos</Button>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center border border-[var(--color-borgonha)] px-9 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[var(--color-borgonha)] transition-colors hover:bg-[var(--color-borgonha)] hover:text-[var(--color-branco)] md:cursor-none"
          >
            Falar connosco
          </Link>
        </div>
      </div>
    </div>
  )
}
