import { type Locator, type Page } from "@playwright/test";

export class PrivacySettingsPage {
  page: Page;
  downloadPersonalDataHead: Locator;
  privacySettingsHead: Locator;
  submitRequestForPersonalDataButton: Locator;
  requestAccountDeletionHead: Locator;
  agreeAndSubmitRequestButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadPersonalDataHead = page.getByRole("heading", {
      name: "Download Personal Data",
    });
    this.submitRequestForPersonalDataButton = page.getByRole("link", {
      name: "Submit request for personal",
    });
    this.agreeAndSubmitRequestButton = page.getByRole("link", {
      name: "Agree and Submit Request",
    });
    this.privacySettingsHead = page.getByRole("heading", {
      name: "Privacy Settings",
    });
    this.submitRequestForPersonalDataButton = page.getByRole("link", {
      name: "Submit request for personal",
    });
    this.requestAccountDeletionHead = page.getByRole("heading", {
      name: "Request Account Deletion",
    });
    this.agreeAndSubmitRequestButton = page.getByRole("link", {
      name: "Agree and Submit Request",
    });
  }
}
