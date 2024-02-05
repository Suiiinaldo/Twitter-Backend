import express, { urlencoded } from "express";
import { connection as Connect, PORT} from "./config/index.js";
import router from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/",router);


import HashtagRepository from "./repositories/hashtag-repository.js";


app.listen(PORT, async() => {
    console.log(`Server Successfully started at PORT : ${PORT}`);
    await Connect();
    console.log("Mongo Connected");
    const hasht = new HashtagRepository();
    // console.log( await hasht.getByName("delhi"));
})