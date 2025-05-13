import { RewardsPage } from "@/pages/accountPage/rewardsPage";

export default class RewardsSteps extends RewardsPage {
  async checkYourPoints() {
    await this.checkYourPointsButton.click();
  }

  async rewardsOnYourPoints() {
    await this.rewardsOnYourPointsButton.click();
  }

  async earnPoints() {
    await this.rewardsOnYourPointsButton.click();
  }

  async referYourFriends() {
    await this.referYourFriendsButton.click();
  }
}
