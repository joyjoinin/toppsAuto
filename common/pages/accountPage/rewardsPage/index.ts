import { type Locator, type Page } from "@playwright/test";

export class RewardsPage {
  page: Page;
  checkYourPointsButton: Locator;
  rewardsOnYourPointsButton: Locator;
  earnPointsButton: Locator;
  referYourFriendsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkYourPointsButton = page.getByRole("button", {
      name: "Check your points",
    });
    this.rewardsOnYourPointsButton = page.getByRole("button", {
      name: "Rewards on your points",
    });
    this.earnPointsButton = page.getByRole("button", {
      name: "Earn points",
    });
    this.referYourFriendsButton = page.getByRole("button", {
      name: "Refer your friends",
    });
  }
}
