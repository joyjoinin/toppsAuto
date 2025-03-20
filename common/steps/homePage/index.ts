import { HomePage } from "../../pages/homePage";

export default class HomeSteps extends HomePage {
  async goToAccount() {
    await this.accountButton.click();
    await this.OptionMyAccount.click();
  }

  async goHome() {
    await this.page.goto("/");
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async goToMyOrders() {
    await this.accountButton.click();
    await this.OptionMyOrders.click();
  }
  async goToRewards() {
    await this.accountButton.click();
    await this.OptionRewards.click();
  }
  async signOut() {
    await this.accountButton.click();
    await this.OptionSignOut.click();
  }
}
