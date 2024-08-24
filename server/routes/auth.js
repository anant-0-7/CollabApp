import express from "express";
import { getMyProfile, isAuthenticated, login,newUser } from "../controllers/user.js";



const router=express.Router({mergeParams:true});

router
.route("/login")
.post(login)

router
.route("/register")
.post(newUser)

router
.route("/me")
.get(isAuthenticated,getMyProfile)

export default router;