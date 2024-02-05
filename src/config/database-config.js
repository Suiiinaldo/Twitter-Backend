import mongoose from "mongoose";
import { DB_PASS, DB_ID } from "./server-config.js";
async function connection() {
    await mongoose.connect(`mongodb+srv://${DB_ID}:${DB_PASS}@cluster0.xvqep8i.mongodb.net/`);
}


export default connection;
