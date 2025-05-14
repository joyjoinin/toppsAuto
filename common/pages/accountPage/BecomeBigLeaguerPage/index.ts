import { type Locator, type Page } from "@playwright/test";

export class BecomeBigLeaguerPage {
  page: Page;
  becomeBigLeaguerHead: Locator;
  enterMoreCodesButton: Locator;
  codeTab: Locator;
  firstNameTab: Locator;
  lastNameTab: Locator;
  isOverAgeTab: Locator;
  submittedAtTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.becomeBigLeaguerHead = page.getByRole("heading", {
      name: "Become A Big Leaguer",
    });
    this.enterMoreCodesButton = page.getByRole("link", {
      name: "Enter More Codes",
    });
    this.codeTab = page.getByRole("cell", { name: "Code" });
    this.firstNameTab = page.getByRole("cell", { name: "First name" });
    this.lastNameTab = page.getByRole("cell", { name: "Last name" });
    this.isOverAgeTab = page.getByRole("cell", { name: "Is Over Age" });
    this.submittedAtTab = page.getByRole("cell", { name: "Submitted At" });
  }
}
