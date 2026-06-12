import { test, expect } from "@playwright/test"

const publicRoutes = [
  { path: "/", needH1: true },
  { path: "/sobre", needH1: true },
  { path: "/projectos", needH1: true },
  { path: "/projectos/curso-habilidades-profissionais", needH1: true },
  { path: "/eventos/e29-4-conferencia-lideranca-feminina-2026", needH1: true },
  { path: "/calendario", needH1: true },
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
  "WebSocket connection to",
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

  test("Navegação pública — Agenda substitui Calendário e remove Eventos e Blog", async ({ page }) => {
    await page.goto("/")
    const nav = page.getByRole("navigation", { name: /principal/i })

    await expect(nav.getByRole("link", { name: "Agenda" })).toHaveAttribute("href", "/calendario")
    await expect(nav.getByRole("link", { name: "Eventos" })).toHaveCount(0)
    await expect(nav.getByRole("link", { name: "Blog" })).toHaveCount(0)
    await expect(page.getByText("Guiné-Bissau · Desde 2022")).toHaveCount(0)
  })

  test("Home — projectos têm títulos sempre expostos e não carrega canvas 3D", async ({ page }) => {
    await page.goto("/")

    const copy = page.getByTestId("project-card-copy")
    await expect(copy).toHaveCount(7)
    await expect(copy.first()).toBeVisible()
    await expect(page.locator("canvas")).toHaveCount(0)
  })

  test("Agenda — apresenta somente actividades futuras", async ({ page }) => {
    await page.goto("/calendario")

    await expect(page.getByRole("heading", { level: 1, name: "Agenda" })).toBeVisible()
    await expect(page.getByText("Passado", { exact: true })).toHaveCount(0)
    await expect(page.getByText("Novas actividades serão publicadas em breve.")).toBeVisible()
  })

  test("Rodapé — inclui Facebook e não expõe Eventos ou Blog", async ({ page }) => {
    await page.goto("/")
    const footer = page.getByRole("contentinfo")

    await expect(footer.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      "https://www.facebook.com/mindjerifuturo/",
    )
    await expect(footer.getByRole("link", { name: "Eventos" })).toHaveCount(0)
    await expect(footer.getByRole("link", { name: "Blog" })).toHaveCount(0)
  })

  test("Secções removidas — Eventos redirecciona para Agenda e Blog para a homepage", async ({ page }) => {
    await page.goto("/eventos")
    await expect(page).toHaveURL(/\/calendario$/)

    await page.goto("/blog")
    await expect(page).toHaveURL(/\/$/)
  })

  test("Detalhes legados — evento regressa à Agenda e artigo redirecciona para a homepage", async ({ page }) => {
    await page.goto("/eventos/e29-4-conferencia-lideranca-feminina-2026")
    await expect(page.locator("article").getByRole("link", { name: "Agenda" })).toHaveAttribute("href", "/calendario")

    await page.goto("/blog/artigo-legado")
    await expect(page).toHaveURL(/\/$/)
  })

  test("Parceiros — logótipos mantêm as cores originais", async ({ page }) => {
    await page.goto("/parceiros")

    const logos = page.getByTestId("partner-logo")
    await expect(logos).toHaveCount(8)

    const firstLogoClass = await logos.first().getAttribute("class")
    expect(firstLogoClass).not.toContain("brightness-0")
    expect(firstLogoClass).not.toContain("invert")
  })

  test("Superfícies — creme uniforme e preto exclusivo do rodapé", async ({ page }) => {
    const creme = "rgb(245, 237, 224)"
    const preto = "rgb(10, 8, 8)"

    await page.goto("/")

    await expect(page.locator("body")).toHaveCSS("background-color", creme)
    await expect(page.locator("#manifesto")).toHaveCSS("background-color", creme)

    for (const heading of ["Projectos", "Equipa", "Parceiros", "Faz parte da mudança"]) {
      const section = page.locator("section").filter({
        has: page.getByRole("heading", { level: 2, name: heading }),
      })
      await expect(section).toHaveCSS("background-color", creme)
    }

    await expect(page.getByRole("contentinfo")).toHaveCSS("background-color", preto)
    const blackOnHomeOutsideFooter = await page.evaluate((black) => {
      return Array.from(document.querySelectorAll("body *")).filter((element) => {
        if (element.closest("footer")) return false
        return getComputedStyle(element).backgroundColor === black
      }).length
    }, preto)
    expect(blackOnHomeOutsideFooter).toBe(0)

    for (const path of ["/projectos", "/equipa", "/parceiros"]) {
      await page.goto(path)
      await expect(page.locator("body")).toHaveCSS("background-color", creme)
      const blackOutsideFooter = await page.evaluate((black) => {
        return Array.from(document.querySelectorAll("body *")).filter((element) => {
          if (element.closest("footer")) return false
          return getComputedStyle(element).backgroundColor === black
        }).length
      }, preto)
      expect(blackOutsideFooter).toBe(0)
    }
  })
})
