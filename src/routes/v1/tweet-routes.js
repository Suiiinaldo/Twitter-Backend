import express from "express";
import { TweetController } from "../../controller/index.js";

const tweetController = new TweetController();

const router = express.Router();
console.log("Inside tweets");

router.get("/:id",tweetController.getTweet);
router.post("/", tweetController.createTweet);


router.get("/", tweetController.getTweets);

export { router as tweetRoutes };