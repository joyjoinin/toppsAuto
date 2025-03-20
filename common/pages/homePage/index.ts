import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  signInButton: Locator;
  accountButton: Locator;
  findStoreButton: Locator;
  flagsArea: Locator;
  titleShop: Locator;
  titleDiscover: Locator;
  titleHelp: Locator;
  cartIcon: Locator;
  searchField: Locator;
  OptionMyAccount: Locator;
  OptionMyOrders: Locator;
  OptionRewards: Locator;
  OptionSignOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.getByRole("button", {
      name: "Sign in",
    });

    this.accountButton = page.getByRole("button", { name: "Account" });
    this.findStoreButton = page.getByRole("link", { name: "Find Stores" });
    this.flagsArea = page.getByRole("button", { name: "USA" });
    this.searchField = page.getByRole("textbox", {
      name: "What are you looking for?",
    });
    this.titleShop = page.getByRole("link", { name: "Shop", exact: true });
    this.titleDiscover = page.getByRole("link", { name: "Discover" });
    this.titleHelp = page.getByRole("link", { name: "Help" });
    this.cartIcon = page.getByRole("link", { name: "Cart" });
    this.OptionMyAccount = page.getByRole("link", { name: "My Account" });
    this.OptionMyOrders = page.getByRole("link", { name: "My Orders" });
    this.OptionRewards = page
      .getByTestId("account-dropdown")
      .getByRole("link", { name: "Rewards" });
    this.OptionSignOut = page.getByRole("link", { name: "Sign Out" });
  }
}
