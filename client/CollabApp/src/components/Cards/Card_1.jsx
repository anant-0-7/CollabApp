import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function BasicExample(props) {
  const [show, setShow] = useState(false); // State to control main modal visibility
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false); // State for password prompt
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePasswordPromptClose = () => setShowPasswordPrompt(false);
  const handlePasswordPromptShow = () => setShowPasswordPrompt(true);

  const handleJoinProject = () => {
    handlePasswordPromptShow();
  };

  const handlePasswordSubmit = () => {
    // You can add password validation logic here
    if (password === 'yourExpectedPassword') { // Replace with actual validation
      navigate("/project/" + props.id);
      handlePasswordPromptClose();
    } else {
      alert('Incorrect password. Please try again.');
      setPassword("");
    }
  };

  const generateHighlights = async () => {
    
  }

  return (
    <>
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

      {/* Main Modal */}
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
              {highlight}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleJoinProject}>
            Join Project
          </Button>
          <Button variant="primary" onClick={() => navigate("/project/" + props.id)}>
            Generate Highlights
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Password Prompt Modal */}
      <Modal show={showPasswordPrompt} onHide={handlePasswordPromptClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: '100%' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePasswordPromptClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicExample;
