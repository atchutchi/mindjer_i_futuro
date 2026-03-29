import type { Metadata } from "next"
import "./globals.css"
import { cormorant, dmSans, greatVibes } from "@/lib/fonts"
import LayoutShell from "@/components/layout/LayoutShell"
import JsonLd from "@/components/JsonLd"

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Mindjer i Futuro — Conferência de Liderança Feminina na Guiné-Bissau",
    template: "%s | Mindjer i Futuro",
  },
  description:
    "Mindjer i Futuro é uma conferência sem fins lucrativos que capacita jovens mulheres guineenses através de workshops, mentoria, bolsas de estudo e eventos de liderança.",
  keywords: [
    "liderança feminina",
    "Guiné-Bissau",
    "mulheres",
    "conferência",
    "empoderamento feminino",
    "Mindjer i Futuro",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: site,
    siteName: "Mindjer i Futuro",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Mindjer i Futuro" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen bg-[var(--color-preto)] font-sans antialiased">
        <JsonLd />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
