import { Browser, Page, expect, Locator } from "@playwright/test";
import HomeSteps from "./homePage";
import AccountSteps from "./accountPage";
import CollectionsSteps from "./collectionsPage";
import CartSteps from "./cartPage";
import PaymentSteps from "./paymentPage";
import { accountPage, addressPage, ordersPage, pdsPage } from "@/params/params";
import MyOrdersSteps from "./accountPage/myOrdersPage";
import PdsSteps from "./accountPage/pdsPage";
import AddressBookSteps from "./accountPage/addressBookPage";

export default class UserSteps {
  page: Page;
  home: HomeSteps;
  account: AccountSteps;
  collections: CollectionsSteps;
  cart: CartSteps;
  payment: PaymentSteps;
  myOrders: MyOrdersSteps;
  pds: PdsSteps;
  addressBook: AddressBookSteps;

  constructor(page: Page) {
    this.page = page;
    this.home = new HomeSteps(page);
    this.account = new AccountSteps(page);
    this.collections = new CollectionsSteps(page);
    this.cart = new CartSteps(page);
    this.payment = new PaymentSteps(page);
    this.myOrders = new MyOrdersSteps(page);
    this.pds = new PdsSteps(page);
    this.addressBook = new AddressBookSteps(page);
  }

  async assertElementExist(element: Locator) {
    await expect(element).toBeInViewport({ timeout: 10000 });
  }

  async assertElementsExist(elements: Locator[]) {
    try {
      await Promise.all(
        elements.map(async (element) => {
          await expect(element).toBeInViewport({ timeout: 10000 });
        })
      );
    } catch (error) {
      throw new Error(`Element assertion failed: ${error}`);
    }
  }

  async assertElementEqualTo(initialValue: any, value: any) {
    expect(value).toBe(initialValue);
  }

  async assertToBeTruthy(value: any) {
    expect(value).toBeTruthy();
  }

  async redirectToAccountPage() {
    await this.page.goto(accountPage);
  }

  async redirectToMyOrdersPage() {
    await this.page.goto(ordersPage);
  }

  async redirectToPDSPage() {
    await this.page.goto(pdsPage);
  }

  async redirectToAddressPage() {
    await this.page.goto(addressPage);
  }
}
