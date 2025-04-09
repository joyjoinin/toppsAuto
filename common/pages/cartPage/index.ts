import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  page: Page;
  removeButton: Locator;
  increaseButton: Locator;
  decreaseButton: Locator;
  quantity: Locator;
  discount: Locator;
  apply: Locator;
  continueToCheckoutButton: Locator;
  textCartIsEmpty: Locator;
  textGoHome: Locator;
  subtotalValue: Locator;
  discountValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.removeButton = page.getByRole("button", { name: "Remove" });
    this.decreaseButton = page.getByRole("button", {
      name: "Decrease quantity by one",
    });
    this.increaseButton = page.getByRole("button", {
      name: "Increase quantity by one",
    });
    this.quantity = page.getByRole("textbox", { name: "quantity input" });
    this.discount = page.getByRole("textbox", { name: "Enter discount code" });
    this.apply = page.getByRole("button", { name: "Apply" });
    this.continueToCheckoutButton = page.getByRole("button", {
      name: "Continue to checkout",
    });
    this.textCartIsEmpty = page.getByText("Cart is empty");
    this.textGoHome = page.getByText("Go to the homepage to start");
    this.subtotalValue = page
      .getByText("Subtotal")
      .locator("xpath=following-sibling::div");
    this.discountValue = page
      .getByText("Discount", { exact: true })
      .locator("xpath=following-sibling::div");
  }
}
