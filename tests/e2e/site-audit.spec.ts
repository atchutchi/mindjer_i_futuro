import { test, expect } from "@playwright/test"

const publicRoutes = [
  { path: "/", needH1: true },
  { path: "/sobre", needH1: true },
  { path: "/projectos", needH1: true },
  { path: "/projectos/curso-habilidades-profissionais", needH1: true },
  { path: "/eventos", needH1: true },
  { path: "/eventos/e29-4-conferencia-lideranca-feminina-2026", needH1: true },
  { path: "/equipa", needH1: true },
  { path: "/parceiros", needH1: true },
  { path: "/contacto", needH1: true },
]

const ignoreConsoleSubstrings = [
  "Download the React DevTools",
  "react-devtools",
  "[HMR]",
  "hot-update",
  "webpack-internal",
  "ResizeObserver",
  "Lit is in dev mode",
]

const shouldIgnoreConsole = (text: string) =>
  ignoreConsoleSubstrings.some((s) => text.includes(s))

test.describe("Auditoria do site", () => {
  for (const { path, needH1 } of publicRoutes) {
    test(`${path} — HTTP 200, sem erros de página`, async ({ page }) => {
      const pageErrors: string[] = []
      const consoleErrors: string[] = []

      page.on("pageerror", (err) => {
        pageErrors.push(err.message)
      })
      page.on("console", (msg) => {
        if (msg.type() !== "error") return
        const t = msg.text()
        if (shouldIgnoreConsole(t)) return
        consoleErrors.push(t)
      })

      const res = await page.goto(path, { waitUntil: "domcontentloaded" })
      expect(res?.status(), `status para ${path}`).toBe(200)

      await page.waitForLoadState("load")
      await page.waitForTimeout(800)

      expect(pageErrors, `pageerror em ${path}:\n${pageErrors.join("\n")}`).toEqual([])
      expect(
        consoleErrors,
        `console.error em ${path}:\n${consoleErrors.join("\n")}`,
      ).toEqual([])

      if (needH1) {
        const h1 = page.getByRole("heading", { level: 1 })
        await expect(h1.first(), `h1 em ${path}`).toBeVisible({ timeout: 10_000 })
      }
    })
  }

  test("Contacto — formulário com campos identificáveis", async ({ page }) => {
    await page.goto("/contacto")
    await expect(page.getByRole("heading", { name: /contacto/i })).toBeVisible()
    await expect(page.getByLabel(/nome/i).first()).toBeVisible()
    await expect(page.getByLabel(/email/i).first()).toBeVisible()
    await expect(page.getByLabel(/mensagem/i).first()).toBeVisible()
  })

  test("Home — link de navegação para Projectos visível", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("navigation", { name: /principal/i })).toBeVisible()
    await expect(
      page.getByRole("navigation", { name: /principal/i }).getByRole("link", { name: "Projectos" }),
    ).toBeVisible()
  })
})
