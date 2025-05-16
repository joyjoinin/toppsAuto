import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check redemptions page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToRedemptionsPage();
  await Page.assertElementsExist([
    Page.redemptions.redemptionHead,
    Page.redemptions.redeemACodeTab,
    Page.redemptions.myOpenRedemptionsTab,
    Page.redemptions.myShippedRedemptionsTab,
    Page.redemptions.codeArea,
    Page.redemptions.submitButton,
  ]);
  await Page.redemptions.myOpenRedemptions();
  await Page.assertElementsExist([
    Page.redemptions.redeemACodeCell,
    Page.redemptions.productCell,
    Page.redemptions.descriptionCell,
    Page.redemptions.statusCell,
  ]);
  await Page.redemptions.myShippedRedemptions();
  await Page.assertElementsExist([
    Page.redemptions.redeemACodeCell,
    Page.redemptions.productCell,
    Page.redemptions.descriptionCell,
    Page.redemptions.shippedDateCell,
    Page.redemptions.trackingNumberCell,
  ]);
});
