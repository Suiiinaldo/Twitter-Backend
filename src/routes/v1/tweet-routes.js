import express from "express";
import { TweetController } from "../../controller/index.js";
import { authenticate } from "../../middlewares/authenticate.js";

const tweetController = new TweetController();

const router = express.Router();

router.post("/", authenticate ,tweetController.createTweet);

router.get("/:id", authenticate ,tweetController.getTweet);

router.get("/", authenticate ,tweetController.getTweets);

export { router as tweetRoutes };