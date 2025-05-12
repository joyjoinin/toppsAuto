import { AddressBookPage } from "@/pages/accountPage/addressBookPage";

export default class AddressBookSteps extends AddressBookPage {
  async addAddress() {
    await this.addAddressButton.click();
  }
}
