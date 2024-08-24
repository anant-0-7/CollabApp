import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function Card_2(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Upload Files
          </Button>
          <Button variant="primary" onClick={() => navigate("/project/" + props.id)}>
            Generate Highlights
          </Button>
          <Button variant="warning" onClick={() => navigate("/project/" + props.id)}>
            Leave Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>    
}

export default Card_2;