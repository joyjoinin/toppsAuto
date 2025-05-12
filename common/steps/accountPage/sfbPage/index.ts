import { SfbPage } from "@/pages/accountPage/sfbPage";

export default class FsbSteps extends SfbPage {
  async enterMoreCodes() {
    await this.enterMoreCodesButton.click();
  }
}
