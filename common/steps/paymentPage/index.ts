import { expect } from "@playwright/test";
import { PaymentPage } from "../../pages/paymentPage";

export default class PaymentSteps extends PaymentPage {
  async inputCardNumber(cardNumber: string = "4242424242424242") {
    await this.cardNumber.fill(cardNumber);
  }

  async inputExpirationDate(expirationDate: string = "0826") {
    await this.expirationDate.fill(expirationDate);
  }

  async inputSecurityCode(securityCode: string = "123") {
    await this.securityCode.fill(securityCode);
  }

  async saveInfo(check: boolean = false) {
    check ? await this.saveMyInfo.check() : await this.saveMyInfo.uncheck();
  }

  async payNow() {
    await this.payNowButton.click();
  }

  async assertPaymentSuccess() {
    await expect(this.page.getByText("Thank you")).toBeInViewport({
      timeout: 10000,
    });
  }

  async basicPayment() {
    await this.inputCardNumber();
    await this.inputExpirationDate();
    await this.inputSecurityCode();
    await this.saveInfo();
    await this.payNow();
    await this.assertPaymentSuccess();
  }

  async inputCard() {
    await this.inputCardNumber();
    await this.inputExpirationDate();
    await this.inputSecurityCode();
  }

  async applyDiscount(code: string) {
    await this.discount.fill(code);
    await this.apply.click();
  }
}
