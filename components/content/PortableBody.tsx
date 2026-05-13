import Image from "next/image"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { urlForImage } from "@/lib/sanity.image"

const safeHref = (href: unknown) => {
  if (typeof href !== "string") return null
  if (href.startsWith("/")) return href
  try {
    const url = new URL(href)
    if (["https:", "mailto:", "tel:"].includes(url.protocol)) return href
  } catch {
    return null
  }
  return null
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 text-base font-light leading-relaxed text-[var(--color-preto)]/90">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-cormorant mb-4 mt-8 text-3xl text-[var(--color-borgonha)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-cormorant mb-3 mt-6 text-2xl text-[var(--color-borgonha)]">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[var(--color-ouro)] pl-5 font-cormorant text-2xl italic leading-relaxed text-[var(--color-borgonha)]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-medium">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = safeHref(value?.href)
      if (!href) return <>{children}</>
      const external = href.startsWith("https://")
      return (
        <a
          href={href}
          className="text-[var(--color-borgonha)] underline decoration-[var(--color-ouro)] underline-offset-4"
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      const src = urlForImage(value)?.width(1200).height(800).url()
      if (!src) return null
      const alt = typeof value?.alt === "string" ? value.alt : ""
      const legenda = typeof value?.legenda === "string" ? value.legenda : null
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-creme-escuro)]">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          {legenda ? (
            <figcaption className="mt-3 text-sm font-light text-[var(--color-preto)]/65">{legenda}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

type Props = {
  value: unknown
  className?: string
}

const PortableBody = ({ value, className }: Props) => {
  if (!value || !Array.isArray(value)) return null
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  )
}

export default PortableBody
