import { type Locator, type Page } from "@playwright/test";

export class AccountPage {
  page: Page;
  myAccount: Locator;
  myOrders: Locator;
  addressBook: Locator;
  redemptions: Locator;
  PDS: Locator;
  accountInfo: Locator;
  BBL: Locator;
  SFB: Locator;
  privacySettings: Locator;
  storeCredit: Locator;
  SPM: Locator;
  rewards: Locator;
  NS: Locator;
  checkYourPointsButton: Locator;
  rewardsOnYourPointsButton: Locator;
  earnPointsButton: Locator;
  referYourFriendsButton: Locator;
  editButton: Locator;
  firstName: Locator;
  lastName: Locator;
  saveButton: Locator;
  myAccountHead: Locator;
  accountInformationHead: Locator;
  addressBookHead: Locator;
  addAddressButton: Locator;
  redemptionHead: Locator;
  redeemACodeTab: Locator;
  myOpenRedemptionsTab: Locator;
  myShippedRedemptions: Locator;
  submitButton: Locator;
  editAccountInfoHead: Locator;
  bblHead: Locator;
  enterMoreCodesButton: Locator;
  smfHead: Locator;
  privacySettingsHead: Locator;
  submitRequestForPersonalDataButton: Locator;
  agreeAndSubmitRequestButton: Locator;
  storeCreditHead: Locator;
  balance: Locator;
  spmPrompt: Locator;
  nsHead: Locator;
  switchSignUpButton: Locator;
  productNameColumnheader: Locator;
  skuColumnheader: Locator;
  priceColumnheader: Locator;
  qtyColumnheader: Locator;
  subtotalColumnheader: Locator;
  orderInformationHeading: Locator;
  shippingAddressLabel: Locator;
  billingAddressLabel: Locator;
  paymentMethodLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = page
      .locator("#main")
      .getByRole("link", { name: "My Account" });
    this.myOrders = page
      .locator("#main")
      .getByRole("link", { name: "My Orders" });
    this.addressBook = page.getByRole("link", { name: "Address Book" });
    this.redemptions = page.getByRole("link", {
      name: "Redemptions",
      exact: true,
    });
    this.PDS = page.getByRole("link", { name: "Product Defect Submission" });
    this.accountInfo = page.getByRole("link", { name: "Account Information" });
    this.BBL = page.getByRole("link", { name: "Become Big Leaguer" });
    this.SFB = page.getByRole("link", { name: "Social Follow Back" });
    this.privacySettings = page.getByRole("link", { name: "Privacy Settings" });
    this.storeCredit = page.getByRole("link", { name: "Store Credit" });
    this.SPM = page.getByRole("link", { name: "Stored Payment Methods" });
    this.rewards = page.locator("#main").getByRole("link", { name: "Rewards" });
    this.NS = page.getByRole("link", { name: "Newsletter Subscriptions" });
    this.checkYourPointsButton = page.getByRole("button", {
      name: "Check your points",
    });
    this.rewardsOnYourPointsButton = page.getByRole("button", {
      name: "Rewards on your points",
    });
    this.earnPointsButton = page.getByRole("button", {
      name: "Earn points",
    });
    this.referYourFriendsButton = page.getByRole("button", {
      name: "Refer your friends",
    });
    this.editButton = page.getByRole("button", { name: "Edit" });
    this.firstName = page.getByPlaceholder("First name");
    this.lastName = page.getByPlaceholder("Last name");
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.myAccountHead = page.getByRole("heading", { name: "My Account" });
    this.accountInformationHead = page.getByRole("heading", {
      name: "Account Information",
    });
    this.addressBookHead = page.getByRole("heading", { name: "Address Book" });
    this.addAddressButton = page.getByRole("link", { name: "Add address" });
    this.redemptionHead = page.getByRole("heading", { name: "Redemptions" });
    this.redeemACodeTab = page.getByRole("tab", { name: "Redeem a Code" });
    this.myOpenRedemptionsTab = page.getByRole("tab", {
      name: "My Open Redemptions",
    });
    this.myShippedRedemptions = page.getByRole("tab", {
      name: "My Shipped Redemptions",
    });
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.editAccountInfoHead = page.getByRole("heading", {
      name: "Edit Account Information",
    });
    this.bblHead = page.getByRole("heading", { name: "Become A Big Leaguer" });
    this.enterMoreCodesButton = page.getByRole("link", {
      name: "Enter More Codes",
    });
    this.smfHead = page.getByRole("heading", {
      name: "Social Media Follow Back",
    });
    this.privacySettingsHead = page.getByRole("heading", {
      name: "Privacy Settings",
    });
    this.submitRequestForPersonalDataButton = page.getByRole("link", {
      name: "Submit request for personal",
    });
    this.agreeAndSubmitRequestButton = page.getByRole("link", {
      name: "Agree and Submit Request",
    });
    this.storeCreditHead = page.getByRole("heading", { name: "Store Credit" });
    this.balance = page.getByRole("heading", { name: "Balance$" });
    this.spmPrompt = page.getByText("As part of our continuing");
    this.nsHead = page.getByRole("heading", {
      name: "Newsletter Subscription",
    });
    this.switchSignUpButton = page.getByRole("switch", {
      name: "Sign Up to receive our",
    });
    this.productNameColumnheader = page.getByRole("columnheader", {
      name: "Product Name",
    });
    this.skuColumnheader = page.getByRole("columnheader", { name: "SKU" });
    this.priceColumnheader = page.getByRole("columnheader", { name: "Price" });
    this.qtyColumnheader = page.getByRole("columnheader", { name: "Qty" });
    this.subtotalColumnheader = page.getByRole("columnheader", {
      name: "Subtotal",
    });
    this.orderInformationHeading = page.getByRole("heading", {
      name: "Order Information",
    });
    this.shippingAddressLabel = page.getByText("Shipping Address");
    this.billingAddressLabel = page.getByText("Billing Address");
    this.paymentMethodLabel = page.getByText("Payment Method");
  }
}
