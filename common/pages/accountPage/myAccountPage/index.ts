import { type Locator, type Page } from "@playwright/test";

export class MyAccountPage {
  page: Page;
  editButton: Locator;
  firstName: Locator;
  lastName: Locator;
  saveButton: Locator;
  myAccountHead: Locator;
  accountInformationHead: Locator;

  constructor(page: Page) {
    this.page = page;

    this.editButton = page.getByRole("button", { name: "Edit" });
    this.firstName = page.getByPlaceholder("First name");
    this.lastName = page.getByPlaceholder("Last name");
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.myAccountHead = page.getByRole("heading", { name: "My Account" });
    this.accountInformationHead = page.getByRole("heading", {
      name: "Account Information",
    });
  }
}
