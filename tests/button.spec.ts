import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("SubmitButton", () => {
  test("should render with default label", async ({ page }) => {
    await page.goto(
      "/iframe.html?globals=viewport%3Aresponsive&id=stories-buttons-button--default&viewMode=story"
    );

    const button = page.getByRole("button", { name: "Submit" });
    await expect(button).toBeVisible();
  });

  test("should have an onClick event set", async ({ page }) => {
    await page.goto(
      "/iframe.html?globals=viewport%3Aresponsive&id=stories-buttons-button--default&viewMode=story"
    );

    const button = page.getByRole("button", { name: "Submit" });
    await button.click();

    await page.waitForFunction(
      () =>
        document.body.getAttribute("data-button-clicked") === "Button Clicked"
    );

    await page.evaluate(() =>
      document.body.removeAttribute("data-button-clicked")
    );
  });

  test("should render with custom label", async ({ page }) => {
    await page.goto(
      "/iframe.html?globals=viewport%3Aresponsive&args=label%3ACustomLabel&id=stories-buttons-button--default&viewMode=story"
    );

    const button = page.getByRole("button", { name: "CustomLabel" });
    await expect(button).toBeVisible();
  });
});
