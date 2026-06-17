import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projectos", label: "Projectos" },
  { href: "/calendario", label: "Agenda" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/contacto", label: "Contacto" },
]

const Footer = () => (
  <footer className="border-t border-[var(--color-borgonha)]/15 bg-[var(--color-creme-escuro)] px-5 py-16 md:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
      <div className="max-w-sm">
        <Image
          src="/mindjer_i_futuro_logo.svg"
          alt="Mindjer i Futuro"
          width={180}
          height={64}
          className="mb-6 h-12 w-auto object-contain object-left"
          unoptimized
        />
        <p className="text-sm font-light leading-relaxed text-[var(--color-preto)]/70">
          Elevando vozes, inspirando mudanças. Um espaço criado por mulheres, para mulheres.
        </p>
      </div>
      <nav aria-label="Rodapé">
        <ul className="flex flex-col gap-3 text-sm uppercase tracking-widest text-[var(--color-borgonha)]">
          {footerLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="transition-colors hover:text-[var(--color-ouro-escuro)] md:cursor-none">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-sm text-[var(--color-preto)]/60">
        <p className="text-label text-[var(--color-borgonha)]">Redes</p>
        <a
          href="https://instagram.com/mindjerifuturo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block hover:text-[var(--color-borgonha)] md:cursor-none"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/mindjerifuturo/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block hover:text-[var(--color-borgonha)] md:cursor-none"
        >
          Facebook
        </a>
        <p className="mt-8 text-xs text-[var(--color-preto)]/45">© {new Date().getFullYear()} Mindjer i Futuro</p>
      </div>
    </div>
  </footer>
)

export default Footer
