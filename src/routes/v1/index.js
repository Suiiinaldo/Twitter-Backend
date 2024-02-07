import express from "express";
import { tweetRoutes } from "./tweet-routes.js";
import { UserRoutes } from "./user-routes.js";
import { LikeRoutes } from "./like-routes.js";
import { CommentRoutes } from "./comment-routes.js";

const router = express.Router();

router.use("/tweets",tweetRoutes);

router.use("/users", UserRoutes);

router.use("/likes", LikeRoutes);

router.use("/comments", CommentRoutes);

export { router as v1Routes};