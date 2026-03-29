import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./schemaTypes"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"

export default defineConfig({
  name: "mindjer",
  title: "Mindjer i Futuro",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2024-01-01" })],
  schema: { types: schemaTypes },
})
