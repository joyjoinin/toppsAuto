import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check become big leaguer page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToBblPage();
  await Page.assertElementsExist([
    Page.bbl.bblHead,
    Page.bbl.enterMoreCodesButton,
    Page.bbl.codeTab,
    Page.bbl.firstNameTab,
    Page.bbl.lastNameTab,
    Page.bbl.isOverAgeTab,
    Page.bbl.submittedAtTab,
  ]);
});
