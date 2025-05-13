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

test("check My Orders option ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToMyOrders();
  await Page.assertElementExist(Page.myOrders.myOrdersHead);
});

test("check Rewards option ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToRewards();
  await Page.assertElementsExist([
    Page.rewards.checkYourPointsButton,
    Page.rewards.earnPointsButton,
    Page.rewards.rewardsOnYourPointsButton,
    Page.rewards.referYourFriendsButton,
  ]);
});

test("check sign out option ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.signOut();
  await Page.assertElementExist(Page.home.OptionSignOut);
});
