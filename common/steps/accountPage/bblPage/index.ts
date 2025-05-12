import { BblPage } from "@/pages/accountPage/bblPage";

export default class BblSteps extends BblPage {
  async enterMoreCodes() {
    await this.enterMoreCodesButton.click();
  }
}
