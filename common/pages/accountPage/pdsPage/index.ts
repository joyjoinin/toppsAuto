import { type Locator, type Page } from "@playwright/test";

export class PdsPage {
  page: Page;
  pdsHead: Locator;
  addSubmissionButton: Locator;
  submissionType: Locator;
  year: Locator;
  property: Locator;
  productName: Locator;
  subject: Locator;
  status: Locator;
  submitted: Locator;
  viewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pdsHead = page.getByRole("heading", {
      name: "Product Defect Submission",
    });
    this.addSubmissionButton = page.getByRole("link", {
      name: "Add Submission",
    });
    this.submissionType = page.getByRole("cell", { name: "Submission Type" });
    this.year = page.getByRole("cell", { name: "Year" });
    this.property = page.getByRole("cell", { name: "Property" });
    this.productName = page.getByRole("cell", { name: "Product Name" });
    this.subject = page.getByRole("cell", { name: "Subject" });
    this.status = page.getByRole("cell", { name: "Status" });
    this.submitted = page.getByRole("cell", { name: "Submitted", exact: true });
    this.viewButton = page.getByRole("link", { name: "View" });
  }
}
