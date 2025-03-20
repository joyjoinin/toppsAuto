import { HomePage } from "../../pages/homePage";

export default class HomeSteps extends HomePage {
  async goToAccount() {
    await this.accountButton.click();
    await this.OptionMyAccount.click();
  }

  async goHome() {
    await this.page.goto("/");
  }
}
