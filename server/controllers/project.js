import { tryCatch } from "../middlewares/error.js";
import Project from "../models/project.js";
import Student from "../models/student.js";
import { uploadFilesClodinary } from "../utility/features.js";
import { ErrorHandler } from "../utility/utility.js";


const createProject=tryCatch(async(req,res,next)=>{
    const {title,summary}=req.body;
    console.log(title,summary);
    const files=req.files;

    
 
    const members=[req.userId];
    const image=[];
  
    const icon=await uploadFilesClodinary(files);
    
    await Project.create({
        title,
        summary,
        members,
        image,
        icon,
    })

    return res.status(201).json({
        success:true,
        message:"Project Created",
    });
})


const uploadAttachments=tryCatch(async(req,res,next)=>{
    console.log(req.body);
    const {projectId}=req.body;
    const files=req.files ||[];
    console.log("k");
    
    if(files.length<1) return next(new ErrorHandler("Please Upload Attachments",400));
    if(files.length>5) return next(new ErrorHandler("Files can't be more than 5",400));

    const [project,me]=await Promise.all([Project.findById(projectId),Student.findById(req.userId,"name")]);
    
    if(!project) return next(new ErrorHandler("Project not Found",404));
    
    if(files.length<1) return next(new ErrorHandler("Please Provide attachments",400));
    const attachments=await uploadFilesClodinary(files);
    console.log(attachments);
    const image=project.image;
  
    const updatedImage=[...image,...attachments]

    const message=await Project.findByIdAndUpdate(projectId,{image:updatedImage});
    console.log("k");

    return res.status(200).json({
        success:true,
        message:message,
    })
})

const leaveProject=tryCatch(async(req,res,next)=>{
    const projectId=req.params.id;
    const project =await Project.findById(projectId);
    if(!project) return next(new ErrorHandler("Project not Found",404));
    project.members=project.members.filter((i)=>i.toString()!== req.userId.toString());
    await project.save();

    return res.status(200).json({
        success:true,
        message:"You left the group",
    })


})

const getAllProjects=tryCatch(async(req,res,next)=>{
    const projects=await Project.find().populate();
    return res.status(200).json({
        success:true,
        data:projects,
    })
})

const getMyProjects=tryCatch(async(req,res,next)=>{
    console.log(req.userId);
    const projects=await Project.find({members:{ "$in" : [req.userId]}});
    return res.status(200).json({
        success:true,
        data:projects,
    })
})

const joinProject=tryCatch(async(req,res,next)=>{
    const projectId=req.params.id;
    const project =await Project.findById(projectId);
    if(!project) return next(new ErrorHandler("Project not Found",404));
    console.log(req.userId);
    project.members=[...project.members,req.userId];
    project.save();

    return res.status(200).json({
        success:true,
        message:"You Joined the Group",
    })

})




export {uploadAttachments,createProject,leaveProject,getAllProjects,getMyProjects,joinProject};