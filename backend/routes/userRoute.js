import express from "express";
import { bookmark, getOtherUsers, getProfile, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);

export default router;