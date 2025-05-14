import { BecomeBigLeaguerPage } from "@/pages/accountPage/BecomeBigLeaguerPage";

export default class BecomeBigLeaguerSteps extends BecomeBigLeaguerPage {
  async enterMoreCodes() {
    await this.enterMoreCodesButton.click();
  }
}
