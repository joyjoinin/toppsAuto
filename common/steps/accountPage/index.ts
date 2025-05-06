import { AccountPage } from "../../pages/accountPage";

export default class AccountSteps extends AccountPage {
  async edit() {
    await this.editButton.click();
  }
  async inputFirstName(firstName: string) {
    await this.firstName.clear();
    await this.firstName.fill(firstName);
  }
  async inputLastName(lastName: string) {
    await this.lastName.clear();
    await this.lastName.fill(lastName);
  }

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

  async pdsPage() {
    await this.PDS.click();
  }

  async accountInformationPage() {
    await this.accountInfo.click();
  }

  async bblPage() {
    await this.BBL.click();
  }

  async sfbPage() {
    await this.SFB.click();
  }

  async privacySettingsPage() {
    await this.privacySettings.click();
  }

  async storeCreditPage() {
    await this.storeCredit.click();
  }

  async spmPage() {
    await this.SPM.click();
  }

  async rewardsPage() {
    await this.rewards.click();
  }

  async nsPage() {
    await this.NS.click();
  }

  async getFirstName() {
    const name = await this.firstName.inputValue();

    return name;
  }

  async getLastName() {
    const name = await this.lastName.inputValue();
    return name;
  }

  async save() {
    await this.saveButton.click();
  }

  async viewFirstOrder() {
    await this.page.getByRole("row").getByText("View Order").first().click();
  }
}
