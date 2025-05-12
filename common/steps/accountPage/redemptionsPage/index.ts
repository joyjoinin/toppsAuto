import { RedemptionsPage } from "@/pages/accountPage/redemptionsPage";

export default class RedemptionsSteps extends RedemptionsPage {
  async redeemACode() {
    await this.redeemACodeTab.click();
  }

  async myOpenRedemptions() {
    await this.myOpenRedemptionsTab.click();
  }

  async myShippedRedemptions() {
    await this.myOpenRedemptionsTab.click();
  }

  async enterCode(code: string) {
    await this.codeArea.fill(code);
  }

  async submit() {
    await this.submitButton.click();
  }
}
