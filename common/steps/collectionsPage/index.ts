import { CollectionsPage } from "../../pages/collectionsPage";

export default class CollectionsSteps extends CollectionsPage {
  async buyNowItem() {
    await this.buyNow.click();
  }

  async addItemToCart() {
    await this.addToCart.click();
  }

  async viewOptions() {
    await this.viewOptionsButton.click();
  }

  async clickGoToCart() {
    await this.goToCart.click();
  }

  async clickContinueToCheckout() {
    await this.continueToCheckout.click();
  }

  async addOption() {
    // first one default
    await this.page.getByTestId("product-variant-item-0").click();
    await this.addItemToCart();
  }
}
