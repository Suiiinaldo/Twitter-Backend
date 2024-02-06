import express from "express";
import { tweetRoutes } from "./tweet-routes.js";
import { UserRoutes } from "./user-routes.js";


const router = express.Router();

router.use("/tweets",tweetRoutes);

router.use("/users", UserRoutes);

export { router as v1Routes};