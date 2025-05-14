import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("change user name", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToAccountPage();
  await Page.myAccount.edit();
  const firstName = await Page.myAccount.getFirstName();
  const lastName = await Page.myAccount.getLastName();
  const saveName = lastName + " " + firstName;
  await Page.myAccount.inputFirstName(lastName);
  await Page.myAccount.inputLastName(firstName);
  await Page.myAccount.save();
  await Page.assertElementExist(page.getByText(saveName));
});
