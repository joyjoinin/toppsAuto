import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const authFile = ".auth/user.json";

export const testCollection =
  process.env.baseURL + "/collections/joy-automation";
export const accountPage = process.env.baseURL + "/customer/account";
export const ordersPage = process.env.baseURL + "/customer/account/orders";
export const pdsPage = process.env.baseURL + "/customer/serviceclaim/listing";
export const addressPage = process.env.baseURL + "/customer/address";
export const redemptionsPage = process.env.baseURL + "/customer/redemptions";
export const bblPage = process.env.baseURL + "/customer/sweepstakes/listing";
export const sfbPage =
  process.env.baseURL + "/customer/bigleaguebaseball/listing";
export const discountForEntireOrder = "JoyautoDiscount";
export const discountForFreeShip = "JoyAUtofreeShip";
