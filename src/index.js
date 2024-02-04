import express from "express";
import { PORT } from "./config/server-config.js";
import { connection as Connect } from "./config/database-config.js";
import Tweet from "./models/tweet.js"
import HashTag from "./models/hashtags.js";

const app = express();

app.listen(PORT, async() => {
    console.log(`Server Successfully started at PORT : ${PORT}`);
    await Connect();
    console.log("Mongo Connected");


    // Tweet.create({
    //     content: "This is my first Tweet",
    //     likes: 25,
    //     noOfRetweets: 4,
    // })
    HashTag.create({
        text: "#travel",
        tweets: ['65bf6e07540cae04141ce447'],
    });
})