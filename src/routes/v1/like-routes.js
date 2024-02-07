import express from "express";
import { LikeController } from "../../controller/index.js";
import { authenticate } from "../../middlewares/authenticate.js";

const likeController = new LikeController();

const router = express.Router();

router.post("/toggle", authenticate ,likeController.toggleLike);

export { router as LikeRoutes };