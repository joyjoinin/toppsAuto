import { type Locator, type Page } from "@playwright/test";

export class NewsletterSubscriptionsPage {
  page: Page;
  newsletterSubscriptionsPageHead: Locator;
  switchSignUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newsletterSubscriptionsPageHead = page.getByRole("heading", {
      name: "Newsletter Subscription",
    });
    this.switchSignUpButton = page.getByRole("switch", {
      name: "Sign Up to receive our",
    });
  }
}
