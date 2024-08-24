import { useState } from "react";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

import { useSendAttachmentsMutation } from "../redux/api/api";

function Create(){
    const [title,setTitle]=useState();
    const [summary,setSummary]=useState();
    const [files,setFiles]=useState([]);
    const navigate=useNavigate();
    const [sendAttachments]=useSendAttachmentsMutation();
    const fileChangeHandler=async(e,key)=>{
        const files=Array.from(e.target.files);
        console.log(files);
        setFiles(files);
    

    }
    const submitHandler=async(e)=>{
        e.preventDefault();
    
            
          
        try{
            const myForm=new FormData();
            myForm.append("title",title);
            myForm.append("summary",summary);
         
            files.forEach((file)=>myForm.append("files",file));
          
            const res=await sendAttachments(myForm);
            
            if(res.data) {
              console.log("Files Uploaded");
              navigate("/my");
            }
          }
          catch(e){
              console.log(e);
          }
    }    
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <div className="form-wrapper">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Summary" 
                        style={{ resize: 'none' }}
                        onChange={(e)=>setSummary(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    
                    <input type='file' multiple accept='image/png,image/gif,image/jpeg' onChange={(e)=>fileChangeHandler(e,"Images")}></input>
                    
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
                    Create
                </Button>
                </Form>
            </div>
            </div>
        </div>
    );
}


export default Create;