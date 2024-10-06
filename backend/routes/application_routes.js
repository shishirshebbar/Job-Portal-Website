import express from "express";
import authenticate from "../middleware/authentication.js";
import { applyforjob, getapplicants, getappliedjobs, updateapplicationstatus } from "../controllers/application_contollers.js";


const router = express.Router();
router.route("/apply/:id").get(authenticate,applyforjob);
router.route("/get").get(authenticate,getappliedjobs);
router.route("/:id/applicants").get(authenticate,getapplicants);
router.route("/status/:id/update").post(authenticate,updateapplicationstatus);

export default router;