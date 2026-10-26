import { defineConfig, devices } from "@playwright/test";

const ci = !!process.env.CI;

export default defineConfig({
    testDir: "e2e",
    forbidOnly: ci,
    retries: ci ? 1 : 0,
    reporter: ci ? [["github"], ["html", { open: "never" }]] : [["list"]],
    use: {
        baseURL: "http://localhost:3000",
        trace: "on-first-retry"
    },
    projects: [
        { name: "chromium", use: { ...devices["Desktop Chrome"] } },
        { name: "firefox", use: { ...devices["Desktop Firefox"] } },
        { name: "webkit", use: { ...devices["Desktop Safari"] } }
    ],
    webServer: {
        command: "pnpm start",
        url: "http://localhost:3000",
        reuseExistingServer: !ci
    }
});
