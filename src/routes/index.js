import express from "express";
import { TweetController } from "../controller/index.js";

const tweetController = new TweetController();

const router = express.Router();

router.post("/tweets", tweetController.createTweet);

router.get("/tweets", tweetController.getTweets);

export default router;