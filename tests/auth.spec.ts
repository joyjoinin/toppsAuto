import { authFile } from "@/params/params";
import UserSteps from "@/steps";
import { test as setup } from "@playwright/test";

setup("Authenticate", async ({ page }) => {
  setup.skip();
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToAccount();
  await page.waitForTimeout(10000);
  await page.context().storageState({ path: authFile });
  await page.close();
});
