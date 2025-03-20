import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const testCollection =
  process.env.baseURL + "/collections/joy-automation";

export const discountForEntireOrder = "JoyautoDiscount";
export const discountForFreeShip = "JoyAUtofreeShip";
