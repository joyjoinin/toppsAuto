import { type Locator, type Page } from "@playwright/test";

export class RedemptionsPage {
  page: Page;
  defaultAddress: Locator;
  addAddressButton: Locator;
  redemptionHead: Locator;
  redeemACodeTab: Locator;
  myOpenRedemptionsTab: Locator;
  myShippedRedemptionsTab: Locator;
  submitButton: Locator;
  codeArea: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultAddress = page.getByText("Default Address");
    this.addAddressButton = page.getByRole("link", { name: "Add address" });
    this.redemptionHead = page.getByRole("heading", {
      name: "Redemptions",
    });
    this.redeemACodeTab = page.getByRole("tab", { name: "Redeem a Code" });
    this.myOpenRedemptionsTab = page.getByRole("tab", {
      name: "My Open Redemptions",
    });
    this.myShippedRedemptionsTab = page.getByRole("tab", {
      name: "My Shipped Redemptions",
    });
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.codeArea = page.getByPlaceholder("Redeem Code");
  }
}
