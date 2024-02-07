import express from "express";
import { CommentController } from "../../controller/index.js";
import { authenticate } from "../../middlewares/authenticate.js";

const commentController = new CommentController();

const router = express.Router();

router.post("/", authenticate ,commentController.createComment);

export { router as CommentRoutes };