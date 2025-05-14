import { type Locator, type Page } from "@playwright/test";

export class AccountPage {
  page: Page;
  myAccount: Locator;
  myOrders: Locator;
  addressBook: Locator;
  redemptions: Locator;
  productDefectSubmission: Locator;
  accountInfo: Locator;
  becomeBigLeaguer: Locator;
  socialFollowBack: Locator;
  privacySettings: Locator;
  storeCredit: Locator;
  rewards: Locator;
  newsletterSubscriptions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = page
      .locator("#main")
      .getByRole("link", { name: "My Account" });
    this.myOrders = page
      .locator("#main")
      .getByRole("link", { name: "My Orders" });
    this.addressBook = page.getByRole("link", { name: "Address Book" });
    this.redemptions = page.getByRole("link", {
      name: "Redemptions",
      exact: true,
    });
    this.productDefectSubmission = page.getByRole("link", {
      name: "Product Defect Submission",
    });
    this.accountInfo = page.getByRole("link", { name: "Account Information" });
    this.becomeBigLeaguer = page.getByRole("link", {
      name: "Become Big Leaguer",
    });
    this.socialFollowBack = page.getByRole("link", {
      name: "Social Follow Back",
    });
    this.privacySettings = page.getByRole("link", { name: "Privacy Settings" });
    this.storeCredit = page.getByRole("link", { name: "Store Credit" });
    this.rewards = page.locator("#main").getByRole("link", { name: "Rewards" });
    this.newsletterSubscriptions = page.getByRole("link", {
      name: "Newsletter Subscriptions",
    });
  }
}
