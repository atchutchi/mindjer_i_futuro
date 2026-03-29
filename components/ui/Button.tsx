"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type Base = {
  className?: string
  children: React.ReactNode
}

type ButtonProps = Base &
  (
    | { href: string; type?: never; onClick?: never }
    | { href?: undefined; type?: "button" | "submit"; onClick?: () => void }
  )

const Button = ({ className, children, href, type = "button", onClick }: ButtonProps) => {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden px-9 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.15em] transition-colors duration-[400ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ouro)] md:cursor-none"

  const primary =
    "bg-[var(--color-ouro)] text-[var(--color-preto)] after:absolute after:inset-0 after:origin-bottom after:scale-y-0 after:bg-[var(--color-borgonha)] after:transition-transform after:duration-[400ms] group-hover:after:scale-y-100"

  const inner =
    "relative z-10 transition-colors duration-[400ms] group-hover:text-[var(--color-branco)]"

  if (href) {
    return (
      <Link href={href} className={cn(base, primary, className)}>
        <span className={inner}>{children}</span>
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, primary, className)}>
      <span className={inner}>{children}</span>
    </button>
  )
}

export const ButtonOutline = ({
  className,
  children,
  href,
}: {
  className?: string
  children: React.ReactNode
  href: string
}) => (
  <Link
    href={href}
    className={cn(
      "group relative inline-flex items-center justify-center border border-white/40 bg-transparent px-9 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[var(--color-branco)] transition-[color,border-color] duration-[400ms] hover:border-[var(--color-ouro)] hover:text-[var(--color-ouro)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ouro)] md:cursor-none",
      className,
    )}
  >
    {children}
  </Link>
)

export default Button
