import express from "express";
import { tweetRoutes } from "./tweet-routes.js";


const router = express.Router();
console.log("Inside v1");
router.use("/tweets",tweetRoutes);

export { router as v1Routes};