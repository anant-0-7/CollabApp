import express from "express";
import { getMyProfile, isAuthenticated, login,logout,newUser } from "../controllers/user.js";



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

router
.route("/logout")
.get(isAuthenticated,logout)

export default router;