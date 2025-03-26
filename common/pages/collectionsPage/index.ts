import { type Locator, type Page } from "@playwright/test";

export class CollectionsPage {
  page: Page;
  inStockOnly: Locator;
  viewOptionsButton: Locator;
  addToCart: Locator;
  buyNow: Locator;
  cartPopover: Locator;
  closePopover: Locator;
  goToCart: Locator;
  continueToCheckout: Locator;
  soldOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inStockOnly = page.getByRole("switch", { name: "In Stock Only" });
    this.viewOptionsButton = page.getByRole("link", { name: "View options" });
    this.addToCart = page.getByText("Add to cart");
    this.buyNow = page.getByRole("button", { name: "Buy now" });
    this.cartPopover = page.getByText("Cart", { exact: true });
    this.closePopover = page.getByRole("button", { name: "close cart" });
    this.goToCart = page.getByRole("link", { name: "Go to cart" });
    this.continueToCheckout = page.getByRole("button", {
      name: "Continue to Checkout",
    });
    this.soldOutButton = page.getByRole("button", { name: "Sold out" });
  }
}
