import { Browser, Page, expect, Locator } from "@playwright/test";
import HomeSteps from "./homePage";
import AccountSteps from "./accountPage";
import CollectionsSteps from "./collectionsPage";
import CartSteps from "./cartPage";
import PaymentSteps from "./paymentPage";
import MyOrdersSteps from "./accountPage/myOrdersPage";
import PdsSteps from "./accountPage/pdsPage";
import AddressBookSteps from "./accountPage/addressBookPage";
import RedemptionsSteps from "./accountPage/redemptionsPage";
import BblSteps from "./accountPage/bblPage";
import FsbSteps from "./accountPage/sfbPage";
import PrivacySettingsSteps from "./accountPage/privacySettingsPage";
import { PageUrls } from "@/params/params";
import StoreCreditSteps from "./accountPage/storeCreditPage";
import RewardsSteps from "./accountPage/rewardsPage";

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
  redemptions: RedemptionsSteps;
  bbl: BblSteps;
  fsb: FsbSteps;
  privateSettings: PrivacySettingsSteps;
  storeCredit: StoreCreditSteps;
  rewards: RewardsSteps;

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
    this.redemptions = new RedemptionsSteps(page);
    this.bbl = new BblSteps(page);
    this.fsb = new FsbSteps(page);
    this.privateSettings = new PrivacySettingsSteps(page);
    this.storeCredit = new StoreCreditSteps(page);
    this.rewards = new RewardsSteps(page);
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
    await this.page.goto(PageUrls.account);
  }

  async redirectToMyOrdersPage() {
    await this.page.goto(PageUrls.orders);
  }

  async redirectToPDSPage() {
    await this.page.goto(PageUrls.pds);
  }

  async redirectToAddressPage() {
    await this.page.goto(PageUrls.address);
  }

  async redirectToRedemptionsPage() {
    await this.page.goto(PageUrls.redemptions);
  }
  async redirectToBblPage() {
    await this.page.goto(PageUrls.bbl);
  }
  async redirectToSfbPage() {
    await this.page.goto(PageUrls.sfb);
  }

  async redirectToPrivacySettingsPage() {
    await this.page.goto(PageUrls.privateSettings);
  }

  async redirectToStoreCreditPage() {
    await this.page.goto(PageUrls.storeCredit);
  }

  async redirectToRewardsPage() {
    await this.page.goto(PageUrls.rewards);
  }
}
