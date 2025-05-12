import { type Locator, type Page } from "@playwright/test";

export class SfbPage {
  page: Page;
  smfbHead: Locator;
  enterMoreCodesButton: Locator;
  codeTab: Locator;
  firstNameTab: Locator;
  lastNameTab: Locator;
  isOverAgeTab: Locator;
  submittedAtTab: Locator;
  productTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.smfbHead = page.getByRole("heading", {
      name: "Social Media Follow Back",
    });
    this.enterMoreCodesButton = page.getByRole("link", {
      name: "Enter More Codes",
    });
    this.codeTab = page.getByRole("cell", { name: "Code" });
    this.productTab = page.getByRole("cell", { name: "Product" });
    this.firstNameTab = page.getByRole("cell", { name: "First name" });
    this.lastNameTab = page.getByRole("cell", { name: "Last name" });
    this.isOverAgeTab = page.getByRole("cell", { name: "Is Over Age" });
    this.submittedAtTab = page.getByRole("cell", { name: "Submitted At" });
  }
}
