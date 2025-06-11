import express from "express";
import { createPost, deletePost } from "../controllers/postController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createPost);
router.route("/delete/:id").delete(deletePost);

export default router;