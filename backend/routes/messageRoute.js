import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/send").post(isAuthenticated, sendMessage);

export default router;