import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_PASS = process.env.DB_PASS;
const DB_ID = process.env.DB_ID;

export { PORT, DB_PASS, DB_ID };