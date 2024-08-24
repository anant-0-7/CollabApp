import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
import userRoute from "./routes/auth.js";
const port = 3000;
const app = express();
dotenv.config({
    path:"./.env"
})
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({extended:true}));
const url=process.env.MONGO_URL;
const connectDB=async function(url) {
    await mongoose.connect(url,{dbName:"CollabApp"});
}
connectDB(url).then(()=>{
    console.log("connected to DB!");
})
.catch((err)=>{
    console.log(err);
})
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET

});

app.use("/user",userRoute)







app.listen(port, () => {
    console.log(`App is running on PORT ${port}`);
  });