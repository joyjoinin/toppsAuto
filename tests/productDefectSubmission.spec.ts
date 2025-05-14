import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check product defect submission page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToProductDefectSubmissionPage();
  await Page.assertElementsExist([
    Page.productDefectSubmission.productDefectSubmissionHead,
    Page.productDefectSubmission.addSubmissionButton,
    Page.productDefectSubmission.submissionType,
    Page.productDefectSubmission.year,
    Page.productDefectSubmission.property,
    Page.productDefectSubmission.productName,
    Page.productDefectSubmission.subject,
    Page.productDefectSubmission.status,
    Page.productDefectSubmission.submitted,
  ]);
});
