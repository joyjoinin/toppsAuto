import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check Rewards option ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToRewardsPage();
  await Page.assertElementsExist([
    Page.rewards.checkYourPointsButton,
    Page.rewards.earnPointsButton,
    Page.rewards.rewardsOnYourPointsButton,
    Page.rewards.referYourFriendsButton,
  ]);
});
