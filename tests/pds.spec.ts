import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check product defect submission page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToPDSPage();
  await Page.assertElementsExist([
    Page.pds.pdsHead,
    Page.pds.addSubmissionButton,
    Page.pds.submissionType,
    Page.pds.year,
    Page.pds.property,
    Page.pds.productName,
    Page.pds.subject,
    Page.pds.status,
    Page.pds.submitted,
  ]);
});
