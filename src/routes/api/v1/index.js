import express from "express";
import { tweetRoutes } from "./tweet-routes.js";


const router = express.Router();

router.use("/tweets",tweetRoutes);

export { router as v1Routes};