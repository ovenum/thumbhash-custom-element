import { test, expect } from "@playwright/test";
import { scrollTo, scrollToEnd, expectScrollPosition, sleep } from "./support";

test.describe("Features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the canvas with the expected attributes", async ({ page }) => {
    page.setViewportSize({ width: 1000, height: 1000 });

    await page.waitForTimeout(2000);

    // Locate the thumb-hash element
    const thumbHash = page.locator('thumb-hash');
    const canvas = thumbHash.locator('canvas');
    expect(canvas).toHaveCount(1);
    expect(canvas).toHaveAttribute('width');
    expect(canvas).toHaveAttribute('height');
    expect(canvas).toHaveAttribute('data-thumb-hash-canvas');
    expect(canvas).toHaveAttribute('style', 'width: 100%; height: 100%;');
  });
});
