import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const DB_PASS = process.env.DB_PASS;
export const DB_ID = process.env.DB_ID;