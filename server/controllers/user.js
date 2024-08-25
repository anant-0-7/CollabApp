import Student from "../models/student.js";
import jwt from "jsonwebtoken";
import { tryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utility/utility.js";

const cookieOptions={
    maxAge:24*60*60*1000*15,
    httpOnly:true,
    sameSite:"Lax",
    secure:true
}
const isAuthenticated=(req,res,next)=>{
    const token=req.cookies["CollabApp-token"];
    console.log(token);
    if(!token)return next(new ErrorHandler("Please login to access this page",401));
    
    const decodedData=jwt.verify(token,process.env.JWT_SECRET);
    req.userId=decodedData._id;
    next();
}

const sendToken=(res,user,code,message)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);
    console.log(token);
    return res.status(code).cookie("CollabApp-token",token,cookieOptions).json({
        success:true,
        user,
        message,
    })
}

const login=tryCatch(async(req,res,next)=>{
  
    const{username,password}=req.body;
    const user=await Student.findOne({username}).select("+password");
    if(!user) return  next(new ErrorHandler("Invalid Username",400)); 

    const isMatch=password==user.password;
    if(!isMatch) return next(new ErrorHandler("Invalid Password",400));
    console.log(user);
    sendToken(res,user,200,`Welcome Back,${user.name}`);
    
    
})

const newUser=tryCatch(async(req,res,next)=>{
    const {name,username,password,email}=req.body;
    console.log(req.body);
   
    const user=await Student.create({name,username,password,email})
    sendToken(res,user,201,"User created");
})

const getMyProfile=tryCatch(async(req,res,next)=>{
    const UserData=await Student.findById(req.userId);
    if(!UserData) return next(new ErrorHandler("User not found",404))
    return res.status(200).json({
        success:true,
        UserData,
    })
})

const logout=tryCatch(async(req,res)=>{
    
    return res.status(200).cookie("CollabApp-token","",{...cookieOptions,maxAge:0}).json({
        success:true,
        message:"Logged out successfully"
    })
})
export {login,newUser,getMyProfile,isAuthenticated,logout};