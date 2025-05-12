import { test } from "@playwright/test";
import UserSteps from "../common/steps";
import { Discounts, TEST_COLLECTION } from "../common/params/params";

test("Add to cart ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(TEST_COLLECTION);
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

test("check in stock ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(TEST_COLLECTION);
  await Page.collections.inStockOnly.check();
  await Page.assertElementsExist([
    Page.collections.addToCart,
    Page.collections.buyNow,
  ]);
  await Page.collections.inStockOnly.uncheck();
  await Page.assertElementsExist([
    Page.collections.addToCart,
    Page.collections.buyNow,
    Page.collections.soldOutButton,
  ]);
});

test("Add to cart, increase/decrease item , apply code ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(TEST_COLLECTION);
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
  await Page.cart.enterDiscount(Discounts.discountForEntireOrder);
  await Page.cart.applyCode();
  await Page.assertElementExist(
    Page.page
      .locator("div")
      .filter({
        hasText: new RegExp("^" + Discounts.discountForEntireOrder + "$"),
      })
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
  await Page.page.goto(TEST_COLLECTION);
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
  await Page.page.goto(TEST_COLLECTION);
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

test("Buy now , add shipping free ", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(TEST_COLLECTION);
  await Page.collections.buyNowItem();
  await Page.payment.inputCard();
  await Page.payment.saveInfo();
  await Page.payment.applyDiscount(Discounts.discountForFreeShip);
  await Page.assertElementExist(
    page
      .getByRole("row", { name: "Shipping" })
      .getByRole("cell", { name: "FREE" })
  );
  await Page.payment.payNow();
  await Page.payment.assertPaymentSuccess();
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

test("View options", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.page.goto(TEST_COLLECTION);
  await Page.collections.viewOptions();
  await Page.collections.addOption();
  await Page.collections.clickContinueToCheckout();
  await Page.payment.basicPayment();
});
