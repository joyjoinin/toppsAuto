import { test } from "@playwright/test";
import UserSteps from "../common/steps";
import { testCollection } from "../common/params/params";

test("Add to cart ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(testCollection);
  await Page.collections.addItemToCart();
  try {
    await Page.collections.clickGoToCart();
  } catch (error) {
    await Page.collections.addItemToCart();
    await Page.collections.clickGoToCart();
  }
  await Page.cart.continueToCheckout();
  await Page.payment.basicPayment();
});

test("Add to cart , and continue to checkout", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(testCollection);
  await Page.collections.addItemToCart();
  try {
    await Page.collections.clickContinueToCheckout();
  } catch (error) {
    await Page.collections.addItemToCart();
    await Page.collections.clickContinueToCheckout();
  }
  await Page.cart.continueToCheckout();
});

test("Buy now ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(testCollection);
  await Page.collections.buyNowItem();
});
