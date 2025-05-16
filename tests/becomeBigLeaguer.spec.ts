import { expect, test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check become big leaguer page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToBecomeBigLeaguerPage();
  await Page.assertElementsExist([
    Page.becomeBigLeaguer.becomeBigLeaguerHead,
    Page.becomeBigLeaguer.enterMoreCodesButton,
    Page.becomeBigLeaguer.codeTab,
    Page.becomeBigLeaguer.firstNameTab,
    Page.becomeBigLeaguer.lastNameTab,
    Page.becomeBigLeaguer.isOverAgeTab,
    Page.becomeBigLeaguer.submittedAtTab,
  ]);
  await Page.becomeBigLeaguer.enterMoreCodes();
  await Page.assertElementsExist([
    Page.becomeBigLeaguer.howToEnterHead,
    Page.becomeBigLeaguer.firstName,
    Page.becomeBigLeaguer.lastName,
    Page.becomeBigLeaguer.code,
    Page.becomeBigLeaguer.check18box,
  ]);
  await expect(Page.becomeBigLeaguer.submitButton).toBeDisabled();
});
