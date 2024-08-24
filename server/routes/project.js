import express from "express";
import { isAuthenticated } from "../controllers/user";
import { uploadAttachments } from "../controllers/project";


const router=express.Router({mergeParams:true});

router
.route("/uploadfiles")
.put(isAuthenticated,uploadAttachments)

router
.route("/createnew")
.post(isAuthenticated,uploadAttachments)

router
.route("/delete")
.post(isAuthenticated,uploadAttachments)

router
.route("/getproject")
.get(isAuthenticated,uploadAttachments)

export default router;