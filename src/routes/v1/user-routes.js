import express from "express";
import { UserController } from "../../controller/index.js";

const userController = new UserController();

const router = express.Router();

router.post("/signup", userController.signup);

router.post("/signin", userController.signin);

router.post("/toggleFollow", userController.toggleFollowing);


// router.get("/:id",tweetController.getTweet);

// router.get("/", tweetController.getTweets);

export { router as UserRoutes };