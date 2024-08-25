import express from "express";
import { isAuthenticated } from "../controllers/user.js";
import { createProject, getAllProjects, getMyProjects, joinProject, leaveProject, uploadAttachments } from "../controllers/project.js";
import { attachments } from "../middlewares/multer.js";


const router=express.Router({mergeParams:true});
router.use(isAuthenticated);

router
.route("/uploadfiles")
.post(attachments,uploadAttachments)


router
.route("/delete/:id")
.post(leaveProject)

router
.route("/createnew")
.post(attachments,createProject)


router
.route("/join/:id")
.post(joinProject)




router
.route("/getall")
.get(getAllProjects)

router
.route("/getmy")
.get(getMyProjects)



export default router;