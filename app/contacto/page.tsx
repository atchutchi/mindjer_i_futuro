import type { Metadata } from "next"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Envia uma mensagem à equipa Mindjer i Futuro — parcerias, voluntariado, media e mais.",
}

export default function ContactoPage() {
  return (
    <div className="bg-[var(--color-creme)] pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-label mb-4 text-[var(--color-borgonha)]">Fala connosco</p>
        <h1 className="font-cormorant text-section-title mb-4 text-[var(--color-borgonha)]">Contacto</h1>
        <p className="text-subtitle mb-12 font-light text-[var(--color-preto)]/75">
          Preenche o formulário. Respondemos com a brevidade possível.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
