import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check social follow back page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToSfbPage();
  await Page.assertElementsExist([
    Page.fsb.smfbHead,
    Page.fsb.enterMoreCodesButton,
    Page.fsb.codeTab,
    Page.fsb.productTab,
    Page.fsb.firstNameTab,
    Page.fsb.lastNameTab,
    Page.fsb.isOverAgeTab,
    Page.fsb.submittedAtTab,
  ]);
});
