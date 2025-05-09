import { addressBookPage } from "@/pages/accountPage/addressBookPage";

export default class AddressBookSteps extends addressBookPage {
  async addAddress() {
    await this.addAddressButton.click();
  }
}
