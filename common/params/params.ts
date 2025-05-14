import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const authFile = ".auth/user.json";

const BASE_URL = process.env.baseURL || "";

export const TEST_COLLECTION = `${BASE_URL}/collections/joy-automation`;

export const CustomerPaths = {
  account: "/customer/account",
  orders: "/customer/account/orders",
  productDefectSubmission: "/customer/serviceclaim/listing",
  address: "/customer/address",
  redemptions: "/customer/redemptions",
  becomeBigLeaguer: "/customer/sweepstakes/listing",
  socialMediaFollowBack: "/customer/bigleaguebaseball/listing",
  settings: "/customer/account/settings",
  credit: "/customer/account/store-credit",
  rewards: "/customer/loyalty/program",
  newsletterSubscription: "/customer/account/newsletter",
};

export const PageUrls = {
  testCollection: TEST_COLLECTION,
  account: `${BASE_URL}${CustomerPaths.account}`,
  orders: `${BASE_URL}${CustomerPaths.orders}`,
  productDefectSubmission: `${BASE_URL}${CustomerPaths.productDefectSubmission}`,
  address: `${BASE_URL}${CustomerPaths.address}`,
  redemptions: `${BASE_URL}${CustomerPaths.redemptions}`,
  becomeBigLeaguer: `${BASE_URL}${CustomerPaths.becomeBigLeaguer}`,
  socialMediaFollowBack: `${BASE_URL}${CustomerPaths.socialMediaFollowBack}`,
  privateSettings: `${BASE_URL}${CustomerPaths.settings}`,
  storeCredit: `${BASE_URL}${CustomerPaths.credit}`,
  rewards: `${BASE_URL}${CustomerPaths.rewards}`,
  newsletterSubscription: `${BASE_URL}${CustomerPaths.newsletterSubscription}`,
} as const;

export const Discounts = {
  discountForEntireOrder: "JoyautoDiscount",
  discountForFreeShip: "JoyAUtofreeShip",
};
