import express from "express";
import { register,login, updateprofile, logout } from "../controllers/user_controllers.js";
import authenticate from "../middleware/authentication.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(authenticate,updateprofile)


export default router;


