import { tryCatch } from "../middlewares/error";
import Project from "../models/project";
import { ErrorHandler } from "../utility/utility";


const createProject=tryCatch(async(req,res,next)=>{
    const {title,summary,field,members}=req.body;
    
    await Project.create({
        title,
        summary,
        field,
        members,
        
    })
})


const uploadAttachments=tryCatch(async(req,res,next)=>{
    
    const {projectId}=req.body;
    const files=req.files ||[];
    
    if(files.length<1) return next(new ErrorHandler("Please Upload Attachments",400));
    if(files.length>5) return next(new ErrorHandler("Files can't be more than 5",400));

    const [project,me]=await Promise.all([Project.findById(projectId),Student.findById(req.userId,"name")]);
    
    if(!project) return next(new ErrorHandler("Project not Found",404));
    
    if(files.length<1) return next(new ErrorHandler("Please Provide attachments",400));
    const attachments=await uploadFilesClodinary(files);
    const images=await Project.findById(projectId,"image");
    const updatedImage=[...images,attachments]

    const message=await Project.findByIdAndUpdate(projectId,{image:updatedImage});
    

    return res.status(200).json({
        success:true,
        message:message,
    })
})




export {uploadAttachments};