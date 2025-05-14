import { SocialFollowBackPage } from "@/pages/accountPage/socialFollowBackPage";

export default class SocialFollowBackSteps extends SocialFollowBackPage {
  async enterMoreCodes() {
    await this.enterMoreCodesButton.click();
  }
}
