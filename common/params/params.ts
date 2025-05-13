import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const authFile = ".auth/user.json";

const BASE_URL = process.env.baseURL || "";

export const TEST_COLLECTION = `${BASE_URL}/collections/joy-automation`;

export const CustomerPaths = {
  account: "/customer/account",
  orders: "/customer/account/orders",
  pds: "/customer/serviceclaim/listing",
  address: "/customer/address",
  redemptions: "/customer/redemptions",
  bbl: "/customer/sweepstakes/listing",
  sfb: "/customer/bigleaguebaseball/listing",
  settings: "/customer/account/settings",
  credit: "/customer/account/store-credit",
};

export const PageUrls = {
  testCollection: TEST_COLLECTION,
  account: `${BASE_URL}${CustomerPaths.account}`,
  orders: `${BASE_URL}${CustomerPaths.orders}`,
  pds: `${BASE_URL}${CustomerPaths.pds}`,
  address: `${BASE_URL}${CustomerPaths.address}`,
  redemptions: `${BASE_URL}${CustomerPaths.redemptions}`,
  bbl: `${BASE_URL}${CustomerPaths.bbl}`,
  sfb: `${BASE_URL}${CustomerPaths.sfb}`,
  privateSettings: `${BASE_URL}${CustomerPaths.settings}`,
  storeCredit: `${BASE_URL}${CustomerPaths.credit}`,
} as const;

export const Discounts = {
  discountForEntireOrder: "JoyautoDiscount",
  discountForFreeShip: "JoyAUtofreeShip",
};
