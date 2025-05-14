import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check social follow back page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToSocialMediaFollowBackPage();
  await Page.assertElementsExist([
    Page.socialFollowBack.socialFollowBackHead,
    Page.socialFollowBack.enterMoreCodesButton,
    Page.socialFollowBack.codeTab,
    Page.socialFollowBack.productTab,
    Page.socialFollowBack.firstNameTab,
    Page.socialFollowBack.lastNameTab,
    Page.socialFollowBack.isOverAgeTab,
    Page.socialFollowBack.submittedAtTab,
  ]);
});
