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

  async getQuantity() {
    const inputElement = await this.page.$('input[name="quantity"]');
    const value = inputElement && (await inputElement.getAttribute("value"));
    return Number(value);
  }

  async enterDiscount(code: string) {
    await this.discount.fill(code);
  }

  async applyCode() {
    await this.apply.click();
  }

  async getSubtotal() {
    const text = await this.subtotalValue.innerText();
    return parseFloat(parseFloat(text.replace(/[^\d.]/g, "")).toFixed(2));
  }

  async getDiscount() {
    const text = await this.discountValue.innerText();
    return parseFloat(parseFloat(text.replace(/[^\d.]/g, "")).toFixed(2));
  }

  async removeItem() {
    await this.removeButton.click();
  }
}
