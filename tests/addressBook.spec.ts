import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check address book page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToAddressPage();
  await Page.assertElementsExist([
    Page.addressBook.defaultAddress,
    Page.addressBook.addAddressButton,
  ]);
});
