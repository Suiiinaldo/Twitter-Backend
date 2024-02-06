import express from "express";
import { TweetController } from "../../controller/index.js";

const tweetController = new TweetController();

const router = express.Router();

router.post("/", tweetController.createTweet);

router.get("/:id",tweetController.getTweet);

router.get("/", tweetController.getTweets);

export { router as tweetRoutes };