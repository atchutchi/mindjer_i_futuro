import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  timeout: 60_000,
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
    video: "off",
    launchOptions: {
      args: ["--enable-unsafe-swiftshader"],
    },
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    // Em CI arranca o servidor; localmente reutiliza se a porta 3000 já tiver o Next.
    reuseExistingServer: process.env.PLAYWRIGHT_FORCE_SERVER ? false : true,
    timeout: 120_000,
    stdout: "pipe",
    stderr: "pipe",
  },
})
