import { CartPage } from "../../pages/cartPage";

export default class CartSteps extends CartPage {
  async continueToCheckout() {
    await this.continueToCheckoutButton.click();
  }

  async increaseQuantity() {
    await this.increaseButton.click();
  }

  async decreaseQuantity() {
    await this.decreaseButton.click();
  }
}
