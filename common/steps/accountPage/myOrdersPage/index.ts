import { MyOrdersPage } from "@/pages/accountPage/myOrdersPage";

export default class MyOrdersSteps extends MyOrdersPage {
  async viewFirstOrder() {
    await this.page.getByRole("row").getByText("View Order").first().click();
  }
}
