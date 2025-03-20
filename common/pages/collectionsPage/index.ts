import { type Locator, type Page } from "@playwright/test";

export class CollectionsPage {
  page: Page;
  inStockOnly: Locator;
  viewOptions: Locator;
  addToCart: Locator;
  buyNow: Locator;
  cartPopover: Locator;
  closePopover: Locator;
  goToCart: Locator;
  continueToCheckout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inStockOnly = page.getByRole("switch", { name: "In Stock Only" });
    this.viewOptions = page.getByRole("link", { name: "View options" });
    this.addToCart = page.getByRole("button", { name: "Add to cart" });
    this.buyNow = page.getByRole("button", { name: "Buy now" });
    this.cartPopover = page.getByText("Cart", { exact: true });
    this.closePopover = page.getByRole("button", { name: "close cart" });
    this.goToCart = page.getByRole("link", { name: "Go to cart" });
    this.continueToCheckout = page.getByRole("button", {
      name: "Continue to Checkout",
    });
  }
}
