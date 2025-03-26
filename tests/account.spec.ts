import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check account page options", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToAccount();
  await Page.assertElementsExist([
    Page.account.myAccount,
    Page.account.myOrders,
    Page.account.addressBook,
    Page.account.redemptions,
    Page.account.PDS,
    Page.account.accountInfo,
    Page.account.BBL,
    Page.account.SFB,
    Page.account.privacySettings,
    Page.account.storeCredit,
    Page.account.SPM,
    Page.account.rewards,
    Page.account.NS,
  ]);
});
