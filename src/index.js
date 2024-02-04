import express from "express";
import { PORT } from "./config/server-config.js";
import { connection as Connect } from "./config/database-config.js";

const app = express();

app.listen(PORT, async() => {
    console.log(`Server Successfully started at PORT : ${PORT}`);
    await Connect();
    console.log("Mongo Connected");
    
})