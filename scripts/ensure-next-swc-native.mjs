import { execFileSync } from "node:child_process"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const nextVersion = "16.2.9"
const linuxX64Package = `@next/swc-linux-x64-gnu@${nextVersion}`

if (process.platform !== "linux" || process.arch !== "x64") {
  process.exit(0)
}

try {
  require.resolve("@next/swc-linux-x64-gnu")
} catch {
  execFileSync("npm", ["install", linuxX64Package, "--no-save", "--no-audit", "--no-fund"], {
    stdio: "inherit",
  })
}
