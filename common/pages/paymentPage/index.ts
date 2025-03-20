import { type Locator, type Page } from "@playwright/test";

export class PaymentPage {
  page: Page;
  cardNumber: Locator;
  expirationDate: Locator;
  securityCode: Locator;
  nameOnCard: Locator;
  saveMyInfo: Locator;
  payNowButton: Locator;
  discount: Locator;
  apply: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardNumber = page
      .locator('iframe[class="card-fields-iframe"]')
      .nth(0)
      .contentFrame()
      .getByRole("textbox", { name: "Card number" });
    this.expirationDate = page
      .locator('iframe[class="card-fields-iframe"]')
      .nth(1)
      .contentFrame()
      .getByRole("textbox", { name: "Expiration date (MM / YY)" });
    this.securityCode = page
      .locator('iframe[class="card-fields-iframe"]')
      .nth(2)
      .contentFrame()
      .getByRole("textbox", { name: "Security code" });
    this.nameOnCard = page
      .locator('iframe[class="card-fields-iframe"]')
      .nth(3)
      .contentFrame()
      .getByRole("textbox", { name: "Name on card" });
    this.saveMyInfo = page.getByRole("checkbox", {
      name: "Save my information for a",
    });
    this.payNowButton = page.getByRole("button", { name: "Pay now" });
    this.discount = page.getByRole("textbox", {
      name: "Discount code or gift card",
    });
    this.apply = page.getByRole("button", { name: "Apply" });
  }
}
