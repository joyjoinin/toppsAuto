import { AccountPage } from "../../pages/accountPage";

export default class AccountSteps extends AccountPage {
  async myAccountPage() {
    await this.myAccount.click();
  }

  async myOrdersPage() {
    await this.myOrders.click();
  }

  async addressBookPage() {
    await this.addressBook.click();
  }

  async redemptionsPage() {
    await this.redemptions.click();
  }

  async productDefectSubmissionPage() {
    await this.productDefectSubmission.click();
  }

  async accountInformationPage() {
    await this.accountInfo.click();
  }

  async becomeBigLeaguerPage() {
    await this.becomeBigLeaguer.click();
  }

  async socialFollowBackPage() {
    await this.socialFollowBack.click();
  }

  async privacySettingsPage() {
    await this.privacySettings.click();
  }

  async storeCreditPage() {
    await this.storeCredit.click();
  }

  async rewardsPage() {
    await this.rewards.click();
  }

  async newsletterSubscriptionsPage() {
    await this.newsletterSubscriptions.click();
  }
}
