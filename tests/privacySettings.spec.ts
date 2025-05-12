import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check privacy settings page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToPrivacySettingsPage();
  await Page.assertElementsExist([
    Page.privateSettings.privacySettingsHead,
    Page.privateSettings.downloadPersonalDataHead,
    Page.privateSettings.submitRequestForPersonalDataButton,
    Page.privateSettings.requestAccountDeletionHead,
    Page.privateSettings.agreeAndSubmitRequestButton,
  ]);
});
