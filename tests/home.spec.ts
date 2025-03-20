import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check home page ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.assertElementExist(Page.home.accountButton);
  await Page.assertElementExist(Page.home.findStoreButton);
  await Page.assertElementExist(Page.home.titleShop);
  await Page.assertElementExist(Page.home.searchField);
  await Page.assertElementExist(Page.home.titleDiscover);
  await Page.assertElementExist(Page.home.titleHelp);
  await Page.assertElementExist(Page.home.flagsArea);
  await Page.assertElementExist(Page.home.cartIcon);
});
