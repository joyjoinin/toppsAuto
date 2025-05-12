import { type Locator, type Page } from "@playwright/test";

export class AddressBookPage {
  page: Page;
  defaultAddress: Locator;
  addAddressButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultAddress = page.getByText("Default Address");
    this.addAddressButton = page.getByRole("link", { name: "Add address" });
  }
}
