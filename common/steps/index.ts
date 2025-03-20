import { Browser, Page, expect, Locator } from "@playwright/test";
import HomeSteps from "./homePage";
import AccountSteps from "./accountPage";
import CollectionsSteps from "./collectionsPage";
import CartSteps from "./cartPage";
import PaymentSteps from "./paymentPage";

export default class UserSteps {
  page: Page;
  home: HomeSteps;
  account: AccountSteps;
  collections: CollectionsSteps;
  cart: CartSteps;
  payment: PaymentSteps;

  constructor(page: Page) {
    this.page = page;
    this.home = new HomeSteps(page);
    this.account = new AccountSteps(page);
    this.collections = new CollectionsSteps(page);
    this.cart = new CartSteps(page);
    this.payment = new PaymentSteps(page);
  }

  async assertElementExist(element: Locator) {
    await expect(element).toBeInViewport({ timeout: 10000 });
  }
}
