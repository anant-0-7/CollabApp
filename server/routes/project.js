import express from "express";
import { isAuthenticated } from "../controllers/user";
import { createProject, getAllProjects, getMyProjects, leaveProject, uploadAttachments } from "../controllers/project";


const router=express.Router({mergeParams:true});

router
.route("/:id/uploadfiles")
.put(isAuthenticated,uploadAttachments)

router
.route("/createnew")
.post(isAuthenticated,createProject)

router
.route("/delete/:id")
.post(isAuthenticated,leaveProject)

router
.route("/getall")
.get(isAuthenticated,getAllProjects)

router
.route("/getmy")
.get(isAuthenticated,getMyProjects)


router
.route("/join/:id")
.get(isAuthenticated,joinProject)
export default router;