import { BecomeBigLeaguerPage } from "@/pages/accountPage/becomeBigLeaguerPage";

export default class BecomeBigLeaguerSteps extends BecomeBigLeaguerPage {
  async enterMoreCodes() {
    await this.enterMoreCodesButton.click();
  }
}
