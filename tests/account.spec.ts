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
    Page.account.BBL,
    Page.account.SFB,
    Page.account.privacySettings,
    Page.account.storeCredit,
    Page.account.rewards,
    Page.account.NS,
  ]);
});

test("change user name", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.redirectToAccountPage();
  await Page.account.edit();
  const firstName = await Page.account.getFirstName();
  const lastName = await Page.account.getLastName();
  const saveName = lastName + " " + firstName;
  await Page.account.inputFirstName(lastName);
  await Page.account.inputLastName(firstName);
  await Page.account.save();
  await Page.assertElementExist(page.getByText(saveName));
});
