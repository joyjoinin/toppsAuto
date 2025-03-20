import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check account page options", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToAccount();
  await Page.assertElementExist(Page.account.myAccount);
  await Page.assertElementExist(Page.account.myOrders);
  await Page.assertElementExist(Page.account.addressBook);
  await Page.assertElementExist(Page.account.redemptions);
  await Page.assertElementExist(Page.account.PDS);
  await Page.assertElementExist(Page.account.accountInfo);
  await Page.assertElementExist(Page.account.BBL);
  await Page.assertElementExist(Page.account.SFB);
  await Page.assertElementExist(Page.account.privacySettings);
  await Page.assertElementExist(Page.account.storeCredit);
  await Page.assertElementExist(Page.account.SPM);
  await Page.assertElementExist(Page.account.rewards);
  await Page.assertElementExist(Page.account.NS);
});
