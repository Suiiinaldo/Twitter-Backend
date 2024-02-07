import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_PASS = process.env.DB_PASS;
const DB_ID = process.env.DB_ID;
const SALT_ROUNDS=process.env.SALT_ROUNDS;
const SECRET_KEY = process.env.SECRET_KEY;
const JWT_EXPIRY = process.env.JWT_EXPIRY;
const BUCKET_NAME = process.env.BUCKET_NAME;
const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

export { PORT, DB_PASS, DB_ID, SALT_ROUNDS, SECRET_KEY, JWT_EXPIRY, BUCKET_NAME, AWS_ACCESS_ID, AWS_SECRET_KEY };