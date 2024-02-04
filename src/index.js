import express from "express";
import { PORT } from "./config/server-config.js";
import { connection as Connect } from "./config/database-config.js";
import TweetRepository from "./repository/tweet-repository.js";

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
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAllTweets();
    // console.log(tweets);
    // const tweet = await tweetRepo.getTweet('65bf6e1dba4fadd98e12bf0e');
    // const response = await tweetRepo.getAll({});
    // console.log(response);
    
})