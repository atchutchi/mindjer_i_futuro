const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Mindjer i Futuro",
  description:
    "Conferência sem fins lucrativos de liderança feminina na Guiné-Bissau. Workshops, mentoria, bolsas de estudo e eventos que capacitam jovens mulheres guineenses.",
  url: siteUrl,
  logo: `${siteUrl}/mindjer_i_futuro_logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "GW",
    addressLocality: "Bissau",
  },
  sameAs: ["https://instagram.com/mindjerifuturo"],
}

const JsonLd = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
)

export default JsonLd
