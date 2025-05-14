import { expect, test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check newsletter subscriptions page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToNewslettersSubscriptionsPage();
  await Page.assertElementsExist([
    Page.newslettersSubscriptions.nsHead,
    Page.newslettersSubscriptions.switchSignUpButton,
  ]);
  await Page.newslettersSubscriptions.switchSignUp();
  await expect(Page.newslettersSubscriptions.switchSignUpButton).toBeChecked({
    checked: false,
  });
  await Page.newslettersSubscriptions.switchSignUp();
  await expect(Page.newslettersSubscriptions.switchSignUpButton).toBeChecked();
});
