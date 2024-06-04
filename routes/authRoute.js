import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { requiresSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register: method post
router.post("/register", registerController);

//login : method post
router.post("/login", loginController);

//Forgotpassword: method post
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requiresSignIn, isAdmin, testController);

//protected route auth user
router.get("/user-auth", requiresSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth admin
router.get("/admin-auth", requiresSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update user profile
router.put("/profile", requiresSignIn, updateProfileController);

export default router;
