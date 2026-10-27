import { expect, test, type Page } from "@playwright/test";

async function fillForm(page: Page) {
    await page.locator("#contact-name").fill("Test User");
    await page.locator("#contact-email").fill("test@example.com");
    await page.locator("#contact-message").fill("Hello");
}

test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
});

test("validates fields", async ({ page }) => {
    const send = page.getByRole("button", { name: "Send Message" });
    await send.click();
    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(page.getByText("Please enter your message.")).toBeVisible();

    await page.locator("#contact-email").fill("not-an-email");
    await send.click();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
});

test("shows success", async ({ page }) => {
    let body = "";
    await page.route("**/__forms.html", (route) => {
        body = route.request().postData() ?? "";
        return route.fulfill({ status: 200 });
    });
    await fillForm(page);
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Message Sent Successfully!")).toBeVisible();
    expect(body).toContain("form-name=Contact+Form");
});

test("shows an error on failure", async ({ page }) => {
    await page.route("**/__forms.html", (route) => route.fulfill({ status: 500 }));
    await fillForm(page);
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("There was an error submitting your form")).toBeVisible();
});
