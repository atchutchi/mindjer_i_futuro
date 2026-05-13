import type { MetadataRoute } from "next"

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindjerifuturo.org"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/api/"],
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  }
}
