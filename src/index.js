import express from "express";
import { connection as Connect, PORT} from "./config/index.js";
import { apiRoutes } from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api",apiRoutes);

app.listen(PORT, async() => {
    console.log(`Server Successfully started at PORT : ${PORT}`);
    await Connect();
    console.log("Mongo Connected");
})