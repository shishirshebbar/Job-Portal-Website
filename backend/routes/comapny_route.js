import express from "express";

import authenticate from "../middleware/authentication.js";
import { getcompany, getcompanybyid, registercompany, updatecomapnyprofile } from "../controllers/company_contoller.js";

const router = express.Router();

router.route("/register").post(authenticate,registercompany);
router.route("/get").get(authenticate,getcompany);
router.route("/get/:id").get(authenticate,getcompanybyid);
router.route("/update/:id").put(authenticate,updatecomapnyprofile)


export default router;


