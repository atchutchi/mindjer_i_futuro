"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/ui/CustomCursor"
import SmoothScroll from "@/components/ui/SmoothScroll"

const lightNavPrefixes = ["/sobre", "/contacto", "/parceiros", "/equipa", "/projectos", "/eventos", "/programacao"]

type Props = {
  children: React.ReactNode
}

const LayoutShell = ({ children }: Props) => {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith("/studio")
  const lightBg =
    !isStudio &&
    lightNavPrefixes.some((p) => pathname === p || pathname?.startsWith(`${p}/`))

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => {
      document.body.dataset.reducedMotion = mq.matches ? "true" : "false"
    }
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation lightBg={lightBg} />
      <main id="conteudo-principal">{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

export default LayoutShell
