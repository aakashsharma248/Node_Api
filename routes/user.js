import express from "express";
import {
  register,
  getMyProfile,
  login,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMyProfile);

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

// dynamic routing
// router
//   .route("/userid/:id")
//   .get(getUserDetails)
//   .put(updateUser)
//   .delete(deleteUser);

export default router;
