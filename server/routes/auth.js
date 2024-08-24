import express from "express";

import {
  checkAuth,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail
} from "../controllers/auth.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Route for authentication
router.get("/check-auth", verifyToken, checkAuth);

// Route for creating a new user
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Route for verification
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

// Route for password resetting
router.post("/reset-password/:token", resetPassword);
  
export default router;