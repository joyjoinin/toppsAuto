import { NewsletterSubscriptionsPage } from "@/pages/accountPage/newsletterSubscriptionsPage";

export default class NewsletterSubscriptionsSteps extends NewsletterSubscriptionsPage {
  async switchSignUp() {
    await this.switchSignUpButton.click();
  }
}
