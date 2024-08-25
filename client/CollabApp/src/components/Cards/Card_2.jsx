
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import { useDeleteProjectMutation, useUploadAttachmentsMutation } from '../../redux/api/api';
import { Box } from '@mui/material';
import renderAttachment from '../renderAttachment';


function Card_2(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate();
    const [uploadAttachments]=useUploadAttachmentsMutation();
    const [leaveProject]=useDeleteProjectMutation();
    const [files,setFiles]=useState([]);

    const handleLeaveProject = async() => {
      
      
      // You can add password validation logic here
      try{
        const projectId=props.id;
        const {data}=await leaveProject(projectId);
        navigate(0);
        

    }
    catch(e){
      
        console.log(e);
    } 
  }
  const fileFormat=(url="")=>{
    const fileExtention=url.split((".")).pop();
    if(fileExtention==="mp4" || fileExtention==="webm" || fileExtention==="ogg")return "video";
    if(fileExtention==="mp3" || fileExtention==="wav" )return "audio";
    if(fileExtention==="jpg" || fileExtention==="jpeg" || fileExtention==="gif" || fileExtention==="png")return "image";
    return "file";
}

  const fileChangeHandler=async(e,key)=>{
    const files=Array.from(e.target.files);
    console.log(files);
    setFiles(files);


}
const handleUploadFiles=async(e)=>{
    e.preventDefault();

        
      
    try{
        const myForm=new FormData();
        const projectId=props.id;
        myForm.append("projectId",projectId);
        files.forEach((file)=>myForm.append("files",file));
        
        console.log("k");
        console.log(files);
        console.log(myForm)
        const res=await uploadAttachments(myForm);
        console.log("k");
        if(res.data) {
          console.log("Files Uploaded");
          navigate("/my");
        }
      }
      catch(e){
          console.log(e);
      }
}


    return <>

    <Card style={{ width: '18rem', background: 'rgba(0, 0, 0, 0.2)', color: '#FBEAEB', borderRadius: '8px', overflow: 'hidden' }}>
        <Card.Img variant="top" src={props.img} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.summary}
          </Card.Text>
          
          <Button variant="light" style={{ color: '#333', backgroundColor: '#FBEAEB' }} onClick={handleShow}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img 
              src={props.img} 
              alt={props.title} 
              style={{ 
                width: '40%', 
                height: 'auto', 
                objectFit: 'cover', 
                marginRight: '1rem' 
              }} 
            />
            <div style={{ width: '60%' }}>
              <p>{props.summary}</p>
            </div>
            <div style={{ width: '60%' }}>
              <input type='file' multiple accept='*' onChange={(e)=>fileChangeHandler(e,"Files")}></input>
            </div>
          </div>
          <div>
          {props?.files?.length>0 && props?.files?.map((attachment,idx)=>{
                const url=attachment.url;
                const file=fileFormat(url);
                console.log(url);
                return <Box key={idx}>
                    <a href={url} target="_blank" download style={{color:"cyan"}}>{renderAttachment(file,url)}</a>
                </Box>
            }) }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>handleUploadFiles(e)}>
            Upload Files
          </Button>
          <Button variant="primary" >
            Generate Highlights
          </Button>
          <Button variant="warning" onClick={handleLeaveProject}>
            Leave Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>    
}

export default Card_2;