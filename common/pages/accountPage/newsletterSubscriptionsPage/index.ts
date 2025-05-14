import { type Locator, type Page } from "@playwright/test";

export class NewsletterSubscriptionsPage {
  page: Page;
  nsHead: Locator;
  switchSignUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nsHead = page.getByRole("heading", {
      name: "Newsletter Subscription",
    });
    this.switchSignUpButton = page.getByRole("switch", {
      name: "Sign Up to receive our",
    });
  }
}
