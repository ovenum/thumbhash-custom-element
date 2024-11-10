import { test, expect } from "@playwright/test";
import { scrollTo, scrollToEnd, expectScrollPosition, sleep } from "./support";

test.describe("Features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the canvas with the expected attributes", async ({ page }) => {
    await page.goto('/');
    page.setViewportSize({ width: 1000, height: 1000 });

    // await page.waitForTimeout(2000);

    // Locate the thumb-hash element
    const canvas = page.locator('.demo.--canvas thumb-hash canvas');
    expect(canvas).toHaveCount(1);
    expect(canvas).toHaveAttribute('width');
    expect(canvas).toHaveAttribute('height');
    expect(canvas).toHaveAttribute('style', 'width: 100%; height: 100%;');
  });
});
