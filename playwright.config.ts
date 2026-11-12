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
    expect: {
        toHaveScreenshot: { maxDiffPixelRatio: 0.001 }
    },
    projects: [
        { name: "chromium", use: { ...devices["Desktop Chrome"] } },
        // One browser's screenshots are enough to catch visual changes
        { name: "firefox", use: { ...devices["Desktop Firefox"] }, testIgnore: "visual.spec.ts" },
        { name: "webkit", use: { ...devices["Desktop Safari"] }, testIgnore: "visual.spec.ts" }
    ],
    webServer: {
        command: "pnpm start",
        url: "http://localhost:3000",
        reuseExistingServer: !ci
    }
});
