import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check store credit page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToStoreCreditPage();
  await Page.assertElementsExist([
    Page.storeCredit.storeCreditHead,
    Page.storeCredit.balance,
  ]);
});
