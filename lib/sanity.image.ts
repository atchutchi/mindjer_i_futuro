import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"
import { sanityClient } from "./sanity"

const builder = createImageUrlBuilder(sanityClient)

export const urlForImage = (source: unknown) => {
  if (!source) return null
  return builder.image(source as SanityImageSource).auto("format").quality(85)
}
