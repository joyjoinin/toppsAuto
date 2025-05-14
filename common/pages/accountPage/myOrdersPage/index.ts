import { type Locator, type Page } from "@playwright/test";

export class MyOrdersPage {
  page: Page;
  myOrdersHead: Locator;
  productNameColumnheader: Locator;
  skuColumnheader: Locator;
  priceColumnheader: Locator;
  qtyColumnheader: Locator;
  subtotalColumnheader: Locator;
  orderInformationHeading: Locator;
  shippingAddressLabel: Locator;
  billingAddressLabel: Locator;
  paymentMethodLabel: Locator;
  orderNumber: Locator;
  Date: Locator;
  shipTo: Locator;
  orderTotal: Locator;
  status: Locator;
  action: Locator;
  show: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myOrdersHead = page.getByRole("heading", { name: "My Orders" });
    this.orderNumber = page.getByRole("cell", { name: "Order Number" });
    this.Date = page.getByRole("cell", { name: "Date" });
    this.shipTo = page.getByRole("cell", { name: "Ship To" });
    this.orderTotal = page.getByRole("cell", { name: "Order Total" });
    this.status = page.getByRole("cell", { name: "Status" });
    this.action = page.getByRole("cell", { name: "Action" });
    this.show = page.getByText("Show");
    this.productNameColumnheader = page.getByRole("columnheader", {
      name: "Product Name",
    });
    this.skuColumnheader = page.getByRole("columnheader", { name: "SKU" });
    this.priceColumnheader = page.getByRole("columnheader", { name: "Price" });
    this.qtyColumnheader = page.getByRole("columnheader", { name: "Qty" });
    this.subtotalColumnheader = page.getByRole("columnheader", {
      name: "Subtotal",
    });
    this.orderInformationHeading = page.getByRole("heading", {
      name: "Order Information",
    });
    this.shippingAddressLabel = page.getByText("Shipping Address");
    this.billingAddressLabel = page.getByText("Billing Address");
    this.paymentMethodLabel = page.getByText("Payment Method");
  }
}
