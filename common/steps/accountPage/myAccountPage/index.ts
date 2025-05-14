import { MyAccountPage } from "@/pages/accountPage/myAccountPage";

export default class MyAccountSteps extends MyAccountPage {
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
}
