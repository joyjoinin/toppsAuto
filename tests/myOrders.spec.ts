import { test } from "@playwright/test";
import UserSteps from "../common/steps";

test("check order page", async ({ page }) => {
  const Page = new UserSteps(page);
  await Page.home.goHome();
  await Page.redirectToMyOrdersPage();
  await Page.assertElementsExist([
    Page.myOrders.myOrdersHead,
    Page.myOrders.orderNumber,
    Page.myOrders.Date,
    Page.myOrders.shipTo,
    Page.myOrders.orderTotal,
    Page.myOrders.status,
    Page.myOrders.action,
    Page.myOrders.show,
  ]);
  await Page.myOrders.viewFirstOrder();
  await Page.assertElementsExist([
    Page.myOrders.productNameColumnheader,
    Page.myOrders.skuColumnheader,
    Page.myOrders.priceColumnheader,
    Page.myOrders.qtyColumnheader,
    Page.myOrders.subtotalColumnheader,
    Page.myOrders.orderInformationHeading,
    Page.myOrders.shippingAddressLabel,
    Page.myOrders.billingAddressLabel,
    Page.myOrders.paymentMethodLabel,
  ]);
});
