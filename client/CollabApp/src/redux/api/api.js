
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const api=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/`}),
    endpoints:(builder)=>({
       
        sendAttachments:builder.mutation({
            query:(data)=>({
                url:"project/createnew",
                method:"POST",
                credentials:"include",
                body:data,
            }),
            
        }),
        uploadAttachments:builder.mutation({
            query:(data)=>({
                url:`project/uploadfiles`,
                method:"POST",
                credentials:"include",
                body:data,
            }),
            
        }),
        deleteProject:builder.mutation({
            query:(projectId)=>({
                url:`project/delete/${projectId}`,
                method:"POST",
                credentials:"include",
                
            }),
            
        }),
        joinProject:builder.mutation({
            query:(projectId)=>({
                url:`project/join/${projectId}`,
                method:"POST",
                credentials:"include",
                
            }),
            
        }),
        
    })

})




export default api;
export const {useSendAttachmentsMutation,useUploadAttachmentsMutation,useDeleteProjectMutation,useJoinProjectMutation}=api;