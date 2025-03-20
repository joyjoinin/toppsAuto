import { CollectionsPage } from "../../pages/collectionsPage";

export default class CollectionsSteps extends CollectionsPage {
  async buyNowItem() {
    await this.buyNow.click();
  }

  async addItemToCart() {
    await this.addToCart.click();
  }

  async checkViewOptions() {
    await this.viewOptions.click();
  }

  async clickGoToCart() {
    await this.goToCart.click();
  }

  async clickContinueToCheckout() {
    await this.continueToCheckout.click();
  }
}
