import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check account page options", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToAccount();
  await Page.assertElementsExist([
    Page.account.myAccountHead,
    Page.account.accountInformationHead,
  ]);

  await Page.account.myOrdersPage();
  await Page.assertElementsExist([Page.account.myOrdersHead]);

  await Page.account.addressBookPage();
  await Page.assertElementsExist([
    Page.account.addressBookHead,
    Page.account.addAddressButton,
  ]);

  await Page.account.redemptionsPage();
  await Page.assertElementsExist([
    Page.account.redemptionHead,
    Page.account.redeemACodeTab,
    Page.account.myOpenRedemptionsTab,
    Page.account.myShippedRedemptions,
  ]);

  await Page.account.pdsPage();
  await Page.assertElementsExist([
    Page.account.pdsHead,
    Page.account.addSubmissionButton,
  ]);

  await Page.account.accountInformationPage();
  await Page.assertElementsExist([
    Page.account.editAccountInfoHead,
    Page.account.saveButton,
  ]);

  await Page.account.bblPage();
  await Page.assertElementsExist([
    Page.account.bblHead,
    Page.account.enterMoreCodesButton,
  ]);

  await Page.account.sfbPage();
  await Page.assertElementsExist([
    Page.account.smfHead,
    Page.account.enterMoreCodesButton,
  ]);

  await Page.account.privacySettingsPage();
  await Page.assertElementsExist([
    Page.account.privacySettingsHead,
    Page.account.submitRequestForPersonalDataButton,
    Page.account.agreeAndSubmitRequestButton,
  ]);

  await Page.account.storeCreditPage();
  await Page.assertElementsExist([
    Page.account.storeCreditHead,
    Page.account.balance,
  ]);

  await Page.account.spmPage();
  await Page.assertElementsExist([Page.account.spmPrompt]);

  await Page.account.rewardsPage();
  await Page.assertElementsExist([
    Page.account.checkYourPointsButton,
    Page.account.rewardsOnYourPointsButton,
    Page.account.earnPointsButton,
    Page.account.referYourFriendsButton,
  ]);

  await Page.account.nsPage();
  await Page.assertElementsExist([
    Page.account.nsHead,
    Page.account.switchSignUpButton,
  ]);
});

test("change user name", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.redirectToAccountPage();
  await Page.account.edit();
  const firstName = await Page.account.getFirstName();
  const lastName = await Page.account.getLastName();
  const saveName = lastName + " " + firstName;
  await Page.account.inputFirstName(lastName);
  await Page.account.inputLastName(firstName);
  await Page.account.save();
  await Page.assertElementExist(page.getByText(saveName));
});

test("check order page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToMyOrdersPage();
  await Page.account.viewFirstOrder();
  await Page.assertElementsExist([
    Page.account.productNameColumnheader,
    Page.account.skuColumnheader,
    Page.account.priceColumnheader,
    Page.account.qtyColumnheader,
    Page.account.subtotalColumnheader,
    Page.account.orderInformationHeading,
    Page.account.shippingAddressLabel,
    Page.account.billingAddressLabel,
    Page.account.paymentMethodLabel,
  ]);
});
