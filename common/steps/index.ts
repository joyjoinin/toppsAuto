import { Page, expect, Locator } from "@playwright/test";
import HomeSteps from "./homePage";
import AccountSteps from "./accountPage";
import CollectionsSteps from "./collectionsPage";
import CartSteps from "./cartPage";
import PaymentSteps from "./paymentPage";
import MyOrdersSteps from "./accountPage/myOrdersPage";
import AddressBookSteps from "./accountPage/addressBookPage";
import RedemptionsSteps from "./accountPage/redemptionsPage";
import PrivacySettingsSteps from "./accountPage/privacySettingsPage";
import { PageUrls } from "@/params/params";
import StoreCreditSteps from "./accountPage/storeCreditPage";
import RewardsSteps from "./accountPage/rewardsPage";
import NewsletterSubscriptionsSteps from "./accountPage/newsletterSubscriptionsPage";
import BecomeBigLeaguerSteps from "./accountPage/BecomeBigLeaguerPage";
import ProductDefectSubmissionSteps from "./accountPage/productDefectSubmissionPage";
import SocialFollowBackSteps from "./accountPage/socialFollowBackPage";

export default class UserSteps {
  page: Page;
  home: HomeSteps;
  account: AccountSteps;
  collections: CollectionsSteps;
  cart: CartSteps;
  payment: PaymentSteps;
  myOrders: MyOrdersSteps;
  productDefectSubmission: ProductDefectSubmissionSteps;
  addressBook: AddressBookSteps;
  redemptions: RedemptionsSteps;
  becomeBigLeaguer: BecomeBigLeaguerSteps;
  socialFollowBack: SocialFollowBackSteps;
  privateSettings: PrivacySettingsSteps;
  storeCredit: StoreCreditSteps;
  rewards: RewardsSteps;
  newslettersSubscriptions: NewsletterSubscriptionsSteps;

  constructor(page: Page) {
    this.page = page;
    this.home = new HomeSteps(page);
    this.account = new AccountSteps(page);
    this.collections = new CollectionsSteps(page);
    this.cart = new CartSteps(page);
    this.payment = new PaymentSteps(page);
    this.myOrders = new MyOrdersSteps(page);
    this.productDefectSubmission = new ProductDefectSubmissionSteps(page);
    this.addressBook = new AddressBookSteps(page);
    this.redemptions = new RedemptionsSteps(page);
    this.becomeBigLeaguer = new BecomeBigLeaguerSteps(page);
    this.socialFollowBack = new SocialFollowBackSteps(page);
    this.privateSettings = new PrivacySettingsSteps(page);
    this.storeCredit = new StoreCreditSteps(page);
    this.rewards = new RewardsSteps(page);
    this.newslettersSubscriptions = new NewsletterSubscriptionsSteps(page);
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

  async redirectToProductDefectSubmissionPage() {
    await this.page.goto(PageUrls.productDefectSubmission);
  }

  async redirectToAddressPage() {
    await this.page.goto(PageUrls.address);
  }

  async redirectToRedemptionsPage() {
    await this.page.goto(PageUrls.redemptions);
  }
  async redirectToBecomeBigLeaguerPage() {
    await this.page.goto(PageUrls.becomeBigLeaguer);
  }
  async redirectToSocialMediaFollowBackPage() {
    await this.page.goto(PageUrls.socialMediaFollowBack);
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

  async redirectToNewslettersSubscriptionsPage() {
    await this.page.goto(PageUrls.newsletterSubscription);
  }
}
