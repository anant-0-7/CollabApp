const tryCatch=(fnc)=>async(req,res,next)=>{
    try{
        await fnc(req,res,next);
    }
    catch(e){
        next(e);
    }
};
export {tryCatch};