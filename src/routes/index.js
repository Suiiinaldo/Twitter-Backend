import express from "express";
import { v1Routes } from "./v1/index.js";

const router = express.Router();
console.log("Inside api");
router.use("/v1", v1Routes);

export { router as apiRoutes };