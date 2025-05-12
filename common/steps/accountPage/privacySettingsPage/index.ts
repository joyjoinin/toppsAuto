import { PrivacySettingsPage } from "@/pages/accountPage/privacySettingsPage";

export default class PrivacySettingsSteps extends PrivacySettingsPage {
  async submitRequestForPersonalData() {
    await this.submitRequestForPersonalDataButton.click();
  }

  async agreeAndSubmitRequest() {
    await this.agreeAndSubmitRequestButton.click();
  }
}
