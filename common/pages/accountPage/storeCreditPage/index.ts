import { type Locator, type Page } from "@playwright/test";

export class StoreCreditPage {
  page: Page;
  storeCreditHead: Locator;
  balance: Locator;

  constructor(page: Page) {
    this.page = page;
    this.storeCreditHead = page.getByRole("heading", { name: "Store Credit" });
    this.balance = page.getByRole("heading", { name: "Balance$" });
  }
}
