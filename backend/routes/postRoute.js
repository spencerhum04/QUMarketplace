import express from "express";
import { createPost } from "../controllers/postController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createPost);

export default router;