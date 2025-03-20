import { test } from "@playwright/test";
import UserSteps from "../common/steps";
import {
  discountForEntireOrder,
  testCollection,
} from "../common/params/params";

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

test("Add to cart, increase/decrease item , apply code ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(testCollection);
  await Page.collections.addItemToCart();
  try {
    await Page.collections.clickGoToCart();
  } catch (error) {
    await Page.collections.addItemToCart();
    await Page.collections.clickGoToCart();
  }
  await Page.page.waitForTimeout(3000);

  const initialQuantity = await Page.cart.getQuantity();
  await Page.cart.increaseQuantity();
  await Page.page.waitForTimeout(3000);
  await Page.assertElementEqualTo(
    initialQuantity + 1,
    await Page.cart.getQuantity()
  );

  await Page.cart.decreaseQuantity();
  await Page.page.waitForTimeout(3000);
  await Page.assertElementEqualTo(
    initialQuantity,
    await Page.cart.getQuantity()
  );
  await Page.cart.enterDiscount(discountForEntireOrder);
  await Page.cart.applyCode();
  await Page.assertElementExist(
    Page.page
      .locator("div")
      .filter({ hasText: new RegExp("^" + discountForEntireOrder + "$") })
      .locator("svg")
      .first()
  );
  const subtotal = await Page.cart.getSubtotal();
  const discount = await Page.cart.getDiscount();
  const isHalf = Math.abs(discount - subtotal / 2) < Number.EPSILON;
  await Page.assertToBeTruthy(isHalf);
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
});

test("Add to cart , and remove item", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(testCollection);
  await Page.collections.addItemToCart();
  try {
    await Page.collections.clickGoToCart();
  } catch (error) {
    await Page.collections.addItemToCart();
    await Page.collections.clickGoToCart();
  }
  await Page.cart.removeItem();
  await Page.assertElementsExist([
    Page.cart.textCartIsEmpty,
    Page.cart.textGoHome,
  ]);
});

test("Buy now ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(testCollection);
  await Page.collections.buyNowItem();
});

test("Empty cart", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.home.goToCart();
  await Page.assertElementsExist([
    Page.cart.textCartIsEmpty,
    Page.cart.textGoHome,
  ]);
});
