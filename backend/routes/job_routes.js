import express from "express";

import authenticate from "../middleware/authentication.js";

import { getadminjobs, getalljobs, getjobbyid, jobpost } from "../controllers/job_controller.js";

const router = express.Router();

router.route("/post").post(authenticate,jobpost);
router.route("/get").get(authenticate,getalljobs);
router.route("/getadminjobs").get(authenticate,getadminjobs);
router.route("/get/:id").get(authenticate,getjobbyid)


export default router;


