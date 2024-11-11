import { test, expect } from "@playwright/test";
import { scrollTo, scrollToEnd, expectScrollPosition, sleep } from "./support";

test.describe("Features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders a canvas with the thumbhash", async ({ page }) => {
    await page.goto('/');
    page.setViewportSize({ width: 1000, height: 1000 });

    await page.waitForTimeout(2000);

    // Locate the thumb-hash element
    const canvas = page.getByTestId('demos-1').locator('thumb-hash[strategy="canvas"] canvas');
    expect(canvas).toHaveCount(1);
    expect(canvas).toHaveAttribute('width');
    expect(canvas).toHaveAttribute('height');
    expect(canvas).toHaveAttribute('style', 'width: 100%; height: 100%;');
  });

  test("renders a div with the average color", async ({ page }) => {
    await page.goto('/');
    page.setViewportSize({ width: 1000, height: 1000 });

    await page.waitForTimeout(2000);

    const div = page.getByTestId('demos-1').locator('thumb-hash[strategy="average"] div');
    expect(div).toHaveCount(1);
    expect(div).toHaveAttribute('style', 'width: 100%; height: 100%; background: rgb(163, 134, 104);');
  });

  test("renders an image with a data URI", async ({ page }) => {
    await page.goto('/');
    page.setViewportSize({ width: 1000, height: 1000 });

    await page.waitForTimeout(2000);

    const div = page.getByTestId('demos-2').locator('thumb-hash[strategy="image"] img');
    expect(div).toHaveCount(1);
    expect(div).toHaveAttribute('style', 'width: 100%; height: 100%;');
    expect(div).toHaveAttribute('alt', '');
  });
});
