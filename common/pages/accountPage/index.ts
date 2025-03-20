import { type Locator, type Page } from "@playwright/test";

export class AccountPage {
  page: Page;
  myAccount: Locator;
  myOrders: Locator;
  addressBook: Locator;
  redemptions: Locator;
  PDS: Locator;
  accountInfo: Locator;
  BBL: Locator;
  SFB: Locator;
  privacySettings: Locator;
  storeCredit: Locator;
  SPM: Locator;
  rewards: Locator;
  NS: Locator;
  myOrdersHead: Locator;
  checkYourPointsButton: Locator;
  rewardsOnYourPointsButton: Locator;
  earnPointsButton: Locator;
  referYourFriendsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = page.getByRole("link", { name: "My Account" });
    this.myOrders = page.getByRole("link", { name: "My Orders" });
    this.addressBook = page.getByRole("link", { name: "Address Book" });
    this.redemptions = page.getByRole("link", {
      name: "Redemptions",
      exact: true,
    });
    this.PDS = page.getByRole("link", { name: "Product Defect Submission" });
    this.accountInfo = page.getByRole("link", { name: "Account Information" });
    this.BBL = page.getByRole("link", { name: "Become Big Leaguer" });
    this.SFB = page.getByRole("link", { name: "Social Follow Back" });
    this.privacySettings = page.getByRole("link", { name: "Privacy Settings" });
    this.storeCredit = page.getByRole("link", { name: "Store Credit" });
    this.SPM = page.getByRole("link", { name: "Stored Payment Methods" });
    this.rewards = page.locator("#main").getByRole("link", { name: "Rewards" });
    this.NS = page.getByRole("link", { name: "Newsletter Subscriptions" });
    this.myOrdersHead = page.getByRole("heading", { name: "My Orders" });
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
