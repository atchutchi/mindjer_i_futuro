import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projectos", label: "Projectos" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contacto", label: "Contacto" },
]

const Footer = () => (
  <footer className="border-t border-white/10 bg-[var(--color-cinza-fundo)] px-5 py-16 md:px-8">
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
        <p className="text-sm font-light leading-relaxed text-white/70">
          Conferência de Liderança Feminina na Guiné-Bissau. Um espaço criado por mulheres, para mulheres.
        </p>
      </div>
      <nav aria-label="Rodapé">
        <ul className="flex flex-col gap-3 text-sm uppercase tracking-widest text-[var(--color-ouro)]">
          {footerLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="transition-colors hover:text-[var(--color-ouro-claro)] md:cursor-none">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-sm text-white/50">
        <p className="text-label text-[var(--color-ouro)]">Redes</p>
        <a
          href="https://instagram.com/mindjerifuturo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block hover:text-[var(--color-branco)] md:cursor-none"
        >
          Instagram
        </a>
        <p className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Mindjer i Futuro</p>
      </div>
    </div>
  </footer>
)

export default Footer
