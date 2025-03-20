import { test as setup } from "@playwright/test";

export const authFile = ".auth/test.json";

setup("Authenticate", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(10000);
  await page.context().storageState({ path: authFile });
  await page.close();
});
