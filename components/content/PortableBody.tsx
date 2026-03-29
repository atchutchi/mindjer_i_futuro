import { PortableText, type PortableTextComponents } from "@portabletext/react"

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
  },
  marks: {
    strong: ({ children }) => <strong className="font-medium">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-[var(--color-borgonha)] underline decoration-[var(--color-ouro)] underline-offset-4"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
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
