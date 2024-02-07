import express from "express";
import { LikeController } from "../../controller/index.js";

const likeController = new LikeController();

const router = express.Router();

router.post("/toggle", likeController.toggleLike);

export { router as LikeRoutes };